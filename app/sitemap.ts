import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { SITE_URLS, isLocale, localeFromHost, localizePath, type Locale } from "@/lib/i18n";
import { QUIZ_SLUGS } from "@/content/quizzes";
import { SERVICE_SLUGS } from "@/content/services";
import { articleSlugs, getArticle } from "@/content/articles";
import { BRAINMAP_LP_SLUGS } from "@/content/lps";
import { THERAPIST_SLUGS } from "@/content/therapists";

/**
 * `/sitemap.xml` — one per domain: emmanuelclinix.ro lists the Romanian URLs,
 * emmanuelclinix.co.uk the English ones, each with hreflang alternates to the
 * twin page on the other domain (submit each sitemap in its own Search
 * Console / Bing Webmaster property).
 *
 * Only INDEXABLE pages are listed. Left out on purpose because they are
 * `noindex` in their metadata: /lp/somn-b (the B variant of /lp/somn) and
 * every thank-you / application step, privacy policy, terms. The campaign
 * LPs (/lp/<condition>, /lp/somn, /lp/emsella) are indexable since Nov 2026.
 * If another page becomes indexable, add it below.
 */
const STATIC_PAGES: Array<{ path: string; priority: number; changeFrequency: "weekly" | "monthly" }> = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/brainmap", priority: 0.9, changeFrequency: "monthly" },
  { path: "/neurofit", priority: 0.9, changeFrequency: "monthly" },
  { path: "/servicii", priority: 0.8, changeFrequency: "monthly" },
  { path: "/afectiuni-tratate", priority: 0.8, changeFrequency: "monthly" },
  { path: "/cum-functioneaza", priority: 0.7, changeFrequency: "monthly" },
  { path: "/tarife", priority: 0.7, changeFrequency: "monthly" },
  { path: "/pentru-copii", priority: 0.7, changeFrequency: "monthly" },
  { path: "/chestionare", priority: 0.7, changeFrequency: "monthly" },
  { path: "/evaluare", priority: 0.6, changeFrequency: "monthly" },
  { path: "/despre-noi", priority: 0.6, changeFrequency: "monthly" },
  { path: "/echipa", priority: 0.6, changeFrequency: "monthly" },
  { path: "/testimoniale", priority: 0.6, changeFrequency: "monthly" },
  { path: "/articole", priority: 0.6, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.6, changeFrequency: "monthly" },
  { path: "/cariere", priority: 0.4, changeFrequency: "monthly" },
  { path: "/lp/somn", priority: 0.7, changeFrequency: "monthly" },
  { path: "/lp/emsella", priority: 0.6, changeFrequency: "monthly" },
];

function url(path: string, locale: Locale): string {
  const p = localizePath(path, locale);
  return SITE_URLS[locale] + (p === "/" ? "/" : p);
}

function entry(
  path: string,
  locale: Locale,
  opts: { priority: number; changeFrequency: "weekly" | "monthly"; lastModified?: string },
): MetadataRoute.Sitemap[number] {
  return {
    url: url(path, locale),
    lastModified: opts.lastModified,
    changeFrequency: opts.changeFrequency,
    priority: opts.priority,
    alternates: {
      languages: { "ro-RO": url(path, "ro"), "en-GB": url(path, "en"), "x-default": url(path, "ro") },
    },
  };
}

/** Every indexable internal path, with its sitemap settings. */
function sitemapPaths(locale: Locale) {
  return [
    ...STATIC_PAGES.map((p) => ({ ...p, lastModified: undefined as string | undefined })),
    ...SERVICE_SLUGS.map((s) => ({ path: `/servicii/${s}`, priority: 0.8, changeFrequency: "monthly" as const, lastModified: undefined })),
    ...BRAINMAP_LP_SLUGS.map((s) => ({ path: `/lp/${s}`, priority: 0.7, changeFrequency: "monthly" as const, lastModified: undefined })),
    ...THERAPIST_SLUGS.map((s) => ({ path: `/psihoterapeut/${s}`, priority: 0.7, changeFrequency: "monthly" as const, lastModified: undefined })),
    ...QUIZ_SLUGS.map((s) => ({ path: `/chestionare/${s}`, priority: 0.6, changeFrequency: "monthly" as const, lastModified: undefined })),
    ...articleSlugs().map((s) => {
      const a = getArticle(locale, s);
      return { path: `/articole/${s}`, priority: 0.5, changeFrequency: "monthly" as const, lastModified: a?.updated ?? a?.published };
    }),
  ];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const h = await headers();
  const fallback: Locale = isLocale(process.env.DEFAULT_LOCALE) ? process.env.DEFAULT_LOCALE : "ro";
  const locale = localeFromHost(h.get("x-forwarded-host") ?? h.get("host"), fallback);
  return sitemapPaths(locale).map((p) => entry(p.path, locale, p));
}
