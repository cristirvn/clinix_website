import type { Locale } from "@/lib/i18n";
import { THERAPIST_SLUGS, type Therapist, type TherapistSlug, type TherapistUi, type TherapistsLocale } from "./types";
import { THERAPISTS_RO } from "./ro";
import { THERAPISTS_EN } from "./en";

export { THERAPIST_SLUGS };
export type { Therapist, TherapistSlug, TherapistUi };

const BY_LOCALE: Record<Locale, TherapistsLocale> = { ro: THERAPISTS_RO, en: THERAPISTS_EN };

export function isTherapistSlug(slug: unknown): slug is TherapistSlug {
  return typeof slug === "string" && (THERAPIST_SLUGS as readonly string[]).includes(slug);
}

export function getTherapistUi(locale: Locale): TherapistUi {
  return BY_LOCALE[locale].ui;
}

export function getTherapist(locale: Locale, slug: string): Therapist | null {
  return isTherapistSlug(slug) ? BY_LOCALE[locale].items[slug] : null;
}

/** In carousel order. */
export function getTherapistList(locale: Locale): Therapist[] {
  return THERAPIST_SLUGS.map((s) => BY_LOCALE[locale].items[s]);
}

/** Fills `{name}` in the shared copy. */
export function withName(text: string, name: string): string {
  return text.replaceAll("{name}", name);
}
