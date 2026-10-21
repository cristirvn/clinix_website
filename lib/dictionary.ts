import { ro, type Dictionary } from "@/content/i18n/ro";
import { en } from "@/content/i18n/en";
import type { Locale } from "@/lib/i18n";

const DICTIONARIES: Record<Locale, Dictionary> = { ro, en };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}

export type { Dictionary };
