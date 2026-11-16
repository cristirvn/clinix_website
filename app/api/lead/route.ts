import { NextResponse } from "next/server";
import { z } from "zod";
import { isPlausibleEmail, isPlausiblePhone, isValidEmailShape } from "@/lib/contact-validation";

/**
 * Every form on the site posts here. The lead is validated, spam-filtered and
 * forwarded server-side to a GoHighLevel inbound webhook (the URL never reaches
 * the browser). In GHL each webhook starts a workflow: tag → email/SMS
 * nurture sequence → follow-up task.
 *
 * Webhook per group (falls back to GHL_WEBHOOK_URL):
 *   quiz → GHL_WEBHOOK_URL_QUIZ · brainmap → GHL_WEBHOOK_URL_BRAINMAP
 *   emsella → GHL_WEBHOOK_URL_EMSELLA · neurofit → GHL_WEBHOOK_URL_NEUROFIT
 *   contact → GHL_WEBHOOK_URL_CONTACT
 *
 * Demo mode: with no webhook configured the lead is validated, logged and
 * accepted, so every funnel is clickable before the CRM is connected.
 */
const leadSchema = z.object({
  group: z.enum(["quiz", "brainmap", "emsella", "neurofit", "contact"]),
  form: z.string().trim().min(1).max(60).regex(/^[a-z0-9-]+$/),
  locale: z.enum(["ro", "en"]),
  name: z.string().trim().min(2).max(120),
  phone: z.string().trim().min(7).max(30).regex(/^[0-9+()\s-]+$/),
  email: z.string().trim().max(160).optional().or(z.literal("")),
  fields: z.record(z.string().max(40), z.string().max(2000)).optional(),
  consent: z.literal(true),
  website: z.string().optional(),
  page: z.string().max(500).optional(),
});

const RATE_LIMIT = 10;
const WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_LIMIT;
}

function looksLikeSpam(...values: Array<string | undefined>): boolean {
  return /https?:\/\/|www\.|<a\s|\[url|\bhref=/i.test(values.filter(Boolean).join(" "));
}

const WEBHOOK_ENV = {
  quiz: "GHL_WEBHOOK_URL_QUIZ",
  brainmap: "GHL_WEBHOOK_URL_BRAINMAP",
  emsella: "GHL_WEBHOOK_URL_EMSELLA",
  neurofit: "GHL_WEBHOOK_URL_NEUROFIT",
  contact: "GHL_WEBHOOK_URL_CONTACT",
} as const;

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "invalid_input" }, { status: 422 });
  }
  const { website, fields, group, form, locale, page, consent, ...lead } = parsed.data;

  // Honeypot / link spam: pretend success, forward nothing.
  if (website || looksLikeSpam(lead.name, fields?.mesaj, fields?.incercat)) {
    return NextResponse.json({ ok: true });
  }

  // Phone must be a real-looking mobile everywhere. The quizzes also require a
  // real-looking personal email, because the result is unlocked by this call.
  if (!isPlausiblePhone(lead.phone, locale)) {
    return NextResponse.json({ ok: false, error: "implausible_phone" }, { status: 422 });
  }
  // Quizzes keep the approved strict rule (RO: personal Gmail/Yahoo only);
  // other forms only need a well-formed address when one is given.
  const emailOk =
    group === "quiz" ? isPlausibleEmail(lead.email ?? "", locale) : !lead.email || isValidEmailShape(lead.email);
  if (!emailOk) {
    return NextResponse.json({ ok: false, error: "implausible_email" }, { status: 422 });
  }

  const host = request.headers.get("host") ?? "";
  const payload = {
    ...lead,
    ...fields,
    form,
    sursa: fields?.sursa ?? form,
    grup: group,
    limba: locale,
    domeniu: host,
    pagina: page ?? "",
    consimtamant: consent ? "da" : "nu",
    consimtamant_la: new Date().toISOString(),
    tags: [`site-${locale}`, `grup-${group}`, form].join(","),
    source: "website",
    submittedAt: new Date().toISOString(),
  };

  const webhookUrl = process.env[WEBHOOK_ENV[group]] || process.env.GHL_WEBHOOK_URL;
  if (!webhookUrl) {
    console.info("[lead] demo mode (no GHL webhook configured):", payload);
    return NextResponse.json({ ok: true, demo: true });
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`webhook responded ${res.status}`);
  } catch (err) {
    console.error("[lead] webhook forward failed:", err);
    return NextResponse.json({ ok: false, error: "forward_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
