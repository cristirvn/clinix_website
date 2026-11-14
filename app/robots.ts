import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { SITE_URLS, isLocale, localeFromHost, type Locale } from "@/lib/i18n";

/**
 * `/robots.txt` — everything is open to search engines and AI assistants
 * (GEO / AEO), except the API and the clinic's /admin. The AI crawlers are
 * also named explicitly: some only trust a rule addressed to them. Points at
 * this domain's own sitemap.
 */
const AI_CRAWLERS = [
  "GPTBot", // OpenAI — training
  "OAI-SearchBot", // ChatGPT search
  "ChatGPT-User", // ChatGPT reading a page for a user
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended", // Gemini
  "Applebot-Extended", // Apple Intelligence
  "Bingbot", // Copilot (and Bing, which ChatGPT search also uses)
  "DuckAssistBot",
  "meta-externalagent",
  "MistralAI-User",
];
const PRIVATE = ["/api/", "/admin"];
export default async function robots(): Promise<MetadataRoute.Robots> {
  const h = await headers();
  const fallback: Locale = isLocale(process.env.DEFAULT_LOCALE) ? process.env.DEFAULT_LOCALE : "ro";
  const locale = localeFromHost(h.get("x-forwarded-host") ?? h.get("host"), fallback);
  const base = SITE_URLS[locale];
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: PRIVATE },
      { userAgent: AI_CRAWLERS, allow: "/", disallow: PRIVATE },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
