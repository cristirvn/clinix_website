import Anthropic from "@anthropic-ai/sdk";
import { z } from "zod";
import { systemPrompt } from "@/lib/chat/knowledge";

/**
 * Website assistant. The browser sends the conversation; the reply streams
 * back as plain text. Facts come only from the site's own copy (see
 * lib/chat/knowledge.ts). Needs ANTHROPIC_API_KEY; without it the route
 * answers 503 and the widget shows the phone / WhatsApp instead.
 */
export const maxDuration = 60;

const MODEL = "claude-opus-5-5";

const chatSchema = z.object({
  locale: z.enum(["ro", "en"]),
  messages: z
    .array(z.object({ role: z.enum(["user", "assistant"]), content: z.string().trim().min(1).max(1500) }))
    .min(1)
    .max(30)
    .refine((m) => m[0].role === "user" && m[m.length - 1].role === "user"),
});

// Best-effort per-instance limit (serverless instances don't share memory).
const RATE_LIMIT = 30;
const WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_LIMIT;
}

let client: Anthropic | null = null;

export async function POST(req: Request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return Response.json({ error: "unavailable" }, { status: 503 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) return Response.json({ error: "rate_limited" }, { status: 429 });

  const parsed = chatSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return Response.json({ error: "invalid" }, { status: 400 });
  const { locale, messages } = parsed.data;

  client ??= new Anthropic();
  const stream = client.beta.messages.stream({
    model: MODEL,
    max_tokens: 4000,
    // Chat answers are short and should start fast.
    output_config: { effort: "low" },
    // On a policy decline, the API retries on Anthropic's recommended fallback model.
    betas: ["server-side-fallback-2026-07-01"],
    fallbacks: "default",
    system: [{ type: "text", text: systemPrompt(locale), cache_control: { type: "ephemeral", ttl: "1h" } }],
    messages,
  });

  const encoder = new TextEncoder();
  const body = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        for await (const event of stream) {
          if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
            controller.enqueue(encoder.encode(event.delta.text));
          }
        }
        const final = await stream.finalMessage();
        if (final.stop_reason === "refusal") {
          controller.enqueue(encoder.encode(locale === "ro" ? "\n\nNu pot răspunde la asta aici." : "\n\nI can't help with that here."));
        }
      } catch (error) {
        console.error("[chat]", error instanceof Anthropic.APIError ? `${error.status} ${error.message}` : error);
        controller.enqueue(encoder.encode("\u0000ERROR"));
      } finally {
        controller.close();
      }
    },
    cancel() {
      stream.abort();
    },
  });

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" },
  });
}
