import type { Locale } from "@/lib/i18n";
import { SERVICE_SLUGS, type ServiceContent, type ServiceSlug, type ServicesLocale } from "./types";
import { SERVICES_RO } from "./ro";
import { SERVICES_EN } from "./en";

export { SERVICE_SLUGS };
export type { ServiceContent, ServiceSlug };

const BY_LOCALE: Record<Locale, ServicesLocale> = { ro: SERVICES_RO, en: SERVICES_EN };

export function getServices(locale: Locale): ServicesLocale {
  return BY_LOCALE[locale];
}

export function isServiceSlug(slug: string): slug is ServiceSlug {
  return (SERVICE_SLUGS as readonly string[]).includes(slug);
}

/** One service page's content, or `null` for an unknown slug. */
export function getService(locale: Locale, slug: string): ServiceContent | null {
  return isServiceSlug(slug) ? BY_LOCALE[locale].items[slug] : null;
}

/** The services in display order. */
export function getServiceList(locale: Locale): ServiceContent[] {
  return SERVICE_SLUGS.map((s) => BY_LOCALE[locale].items[s]);
}
