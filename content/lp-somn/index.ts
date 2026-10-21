import type { Locale } from "@/lib/i18n";
import type { LpSomnContent } from "./types";
import { lpSomnRo } from "./ro";
import { lpSomnEn } from "./en";

export type { LpSomnContent, LpSomnFormCopy, LpSomnOption } from "./types";

export function getLpSomn(locale: Locale): LpSomnContent {
  return locale === "en" ? lpSomnEn : lpSomnRo;
}
