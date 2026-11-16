import type { Locale } from "@/lib/i18n";
import type { NeuroFitContent } from "./types";
import { NEUROFIT_RO } from "./ro";
import { NEUROFIT_EN } from "./en";

export type { NeuroFitContent };

export function getNeuroFit(locale: Locale): NeuroFitContent {
  return locale === "en" ? NEUROFIT_EN : NEUROFIT_RO;
}
