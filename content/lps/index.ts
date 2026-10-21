/**
 * BrainMap LP registry — the eight condition pages (`/lp/<slug>`) and the
 * general page (`/brainmap`), per locale. Niche copy: `content/lps/<locale>/*.ts`.
 * Fixed copy: `content/lps/fixed/<locale>.ts`. Template: `components/lp/BrainmapLanding.tsx`.
 */
import type { Locale } from "@/lib/i18n";
import type { BrainmapLp } from "./types";
import type { BrainmapFixed } from "./fixed/types";
import { BRAINMAP_FIXED_RO } from "./fixed/ro";
import { BRAINMAP_FIXED_EN } from "./fixed/en";

import { ANXIETATE_LP as ANXIETATE_RO } from "./ro/anxietate";
import { PANICA_LP as PANICA_RO } from "./ro/panica";
import { BURNOUT_LP as BURNOUT_RO } from "./ro/burnout";
import { FOCUS_LP as FOCUS_RO } from "./ro/focus";
import { DISPOZITIE_LP as DISPOZITIE_RO } from "./ro/dispozitie";
import { MIGRENE_LP as MIGRENE_RO } from "./ro/migrene";
import { STRES_LP as STRES_RO } from "./ro/stres";
import { ADICTII_LP as ADICTII_RO } from "./ro/adictii";
import { GENERAL_LP as GENERAL_RO } from "./ro/general";

import { ANXIETATE_LP as ANXIETATE_EN } from "./en/anxietate";
import { PANICA_LP as PANICA_EN } from "./en/panica";
import { BURNOUT_LP as BURNOUT_EN } from "./en/burnout";
import { FOCUS_LP as FOCUS_EN } from "./en/focus";
import { DISPOZITIE_LP as DISPOZITIE_EN } from "./en/dispozitie";
import { MIGRENE_LP as MIGRENE_EN } from "./en/migrene";
import { STRES_LP as STRES_EN } from "./en/stres";
import { ADICTII_LP as ADICTII_EN } from "./en/adictii";
import { GENERAL_LP as GENERAL_EN } from "./en/general";

export type { BrainmapLp } from "./types";
export type { BrainmapFixed } from "./fixed/types";

/** The eight condition LPs under `/lp/<slug>` (somn, somn-b, emsella have their own folders). */
export const BRAINMAP_LP_SLUGS = [
  "anxietate",
  "panica",
  "burnout",
  "focus",
  "dispozitie",
  "migrene",
  "stres",
  "adictii",
] as const;
export type BrainmapLpSlug = (typeof BRAINMAP_LP_SLUGS)[number];

const LPS: Record<Locale, Record<BrainmapLpSlug | "general", BrainmapLp>> = {
  ro: {
    anxietate: ANXIETATE_RO,
    panica: PANICA_RO,
    burnout: BURNOUT_RO,
    focus: FOCUS_RO,
    dispozitie: DISPOZITIE_RO,
    migrene: MIGRENE_RO,
    stres: STRES_RO,
    adictii: ADICTII_RO,
    general: GENERAL_RO,
  },
  en: {
    anxietate: ANXIETATE_EN,
    panica: PANICA_EN,
    burnout: BURNOUT_EN,
    focus: FOCUS_EN,
    dispozitie: DISPOZITIE_EN,
    migrene: MIGRENE_EN,
    stres: STRES_EN,
    adictii: ADICTII_EN,
    general: GENERAL_EN,
  },
};

export function isBrainmapLpSlug(slug: string): slug is BrainmapLpSlug {
  return (BRAINMAP_LP_SLUGS as readonly string[]).includes(slug);
}

/** A condition LP (or `"general"` for /brainmap). `null` for unknown slugs. */
export function getBrainmapLp(locale: Locale, slug: string): BrainmapLp | null {
  if (slug !== "general" && !isBrainmapLpSlug(slug)) return null;
  return LPS[locale][slug as BrainmapLpSlug | "general"] ?? null;
}

export function getBrainmapFixed(locale: Locale): BrainmapFixed {
  return locale === "en" ? BRAINMAP_FIXED_EN : BRAINMAP_FIXED_RO;
}
