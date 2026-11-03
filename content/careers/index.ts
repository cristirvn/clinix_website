import type { Locale } from "@/lib/i18n";
import type { CareerRole, CareersContent } from "./types";
import { CAREERS_RO } from "./ro";
import { CAREERS_EN } from "./en";

export type { CareerRole, CareersContent };

export function getCareers(locale: Locale): CareersContent {
  return locale === "en" ? CAREERS_EN : CAREERS_RO;
}
