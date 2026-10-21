import type { Locale } from "@/lib/i18n";
import type { LpSomnBContent } from "./types";
import { lpSomnBRo } from "./ro";
import { lpSomnBEn } from "./en";

export type { LpSomnBContent } from "./types";

const CONTENT: Record<Locale, LpSomnBContent> = { ro: lpSomnBRo, en: lpSomnBEn };

export function getLpSomnB(locale: Locale): LpSomnBContent {
  return CONTENT[locale];
}
