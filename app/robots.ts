import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { SITE_URLS, isLocale, localeFromHost, type Locale } from "@/lib/i18n";

/**
 * `/robots.txt` — everything is open to search engines and AI assistants
 * (GEO), except the API. Points at this domain's own sitemap.
 */
export default async function robots(): Promise<MetadataRoute.Robots> {
  const h = await headers();
  const fallback: Locale = isLocale(process.env.DEFAULT_LOCALE) ? process.env.DEFAULT_LOCALE : "ro";
  const locale = localeFromHost(h.get("x-forwarded-host") ?? h.get("host"), fallback);
  const base = SITE_URLS[locale];
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
