import type { Locale } from "@/lib/i18n";
import type { LpEmsellaContent } from "./types";
import { lpEmsellaRo } from "./ro";
import { lpEmsellaEn } from "./en";

export type { LpEmsellaContent } from "./types";

export function getLpEmsella(locale: Locale): LpEmsellaContent {
  return locale === "en" ? lpEmsellaEn : lpEmsellaRo;
}
