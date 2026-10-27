import type { MetadataRoute } from "next";
import { requestLocale } from "@/lib/public-pages";
import { SITE_URLS } from "@/lib/i18n";

/**
 * /robots.txt — open to search engines AND to the AI assistants' crawlers, so
 * ChatGPT, Claude, Perplexity, Gemini & co. can read the site and recommend it.
 * Only the form/chat APIs are off limits.
 */
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
  "CCBot",
];

export default async function robots(): Promise<MetadataRoute.Robots> {
  const base = SITE_URLS[await requestLocale()];
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/api/" },
      { userAgent: AI_CRAWLERS, allow: "/", disallow: "/api/" },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
