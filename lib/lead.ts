"use client";

import type { Locale } from "@/lib/i18n";

/**
 * Which GoHighLevel webhook a form goes to (see `.env.example`):
 *  quiz → the 9 tests · brainmap → /brainmap + /lp/* · emsella → /lp/emsella · contact → everything else
 */
export type LeadGroup = "quiz" | "brainmap" | "emsella" | "contact";

export interface LeadPayload {
  group: LeadGroup;
  /** Stable id of the exact form, e.g. "test-somn", "lp-stres", "brainmap-general". Becomes a GHL tag. */
  form: string;
  locale: Locale;
  name: string;
  phone: string;
  email?: string;
  /** Extra answers → flattened into GHL custom fields (keys are kept as-is). */
  fields?: Record<string, string>;
  /** Must be true — every form has a consent checkbox. */
  consent: boolean;
  /** Honeypot — leave empty. */
  website?: string;
}

/** POST a lead to `/api/lead`. Resolves `true` on success. */
export async function submitLead(payload: LeadPayload): Promise<boolean> {
  try {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        page: typeof window !== "undefined" ? window.location.href : "",
      }),
    });
    const data = (await res.json().catch(() => null)) as { ok?: boolean } | null;
    if (res.ok && data?.ok) {
      trackLead(payload.form);
      return true;
    }
    return false;
  } catch {
    return false;
  }
}

function trackLead(form: string) {
  const w = window as unknown as { gtag?: (...args: unknown[]) => void; fbq?: (...args: unknown[]) => void };
  w.gtag?.("event", "generate_lead", { form });
  const ads = process.env.NEXT_PUBLIC_GADS_ID;
  const label = process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL;
  if (ads && label) w.gtag?.("event", "conversion", { send_to: `${ads}/${label}` });
  w.fbq?.("track", "Lead", { content_name: form });
}
