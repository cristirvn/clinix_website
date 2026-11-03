import type { Metadata } from "next";
import { alternatesFor, type Locale } from "@/lib/i18n";
import { CLINIC } from "@/lib/site";

/**
 * Page metadata in one call: title, description, canonical + hreflang and a
 * full OpenGraph block (a page-level `openGraph` replaces the layout's, so
 * site name and locale are repeated here).
 */
export function pageMetadata({
  title,
  description,
  path,
  locale,
  type = "website",
  publishedTime,
  modifiedTime,
}: {
  title: string;
  description: string;
  /** Internal (Romanian) path. */
  path: string;
  locale: Locale;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}): Metadata {
  const alternates = alternatesFor(path, locale);
  return {
    title,
    description,
    alternates,
    openGraph: {
      type,
      siteName: CLINIC.name,
      locale: locale === "en" ? "en_GB" : "ro_RO",
      alternateLocale: locale === "en" ? ["ro_RO"] : ["en_GB"],
      url: alternates.canonical,
      title: `${title} — ${CLINIC.name}`,
      description,
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
    },
  };
}
