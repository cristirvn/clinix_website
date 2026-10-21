import type { Locale } from "@/lib/i18n";
import { LEGAL_RO } from "@/content/pages/ro/legal";
import { LEGAL_EN } from "@/content/pages/en/legal";

export interface LegalDoc {
  seo: { title: string; description: string };
  eyebrow: string;
  title: string;
  sections: Array<{ heading: string; paragraphs: string[] }>;
}

export interface LegalContent {
  privacy: LegalDoc;
  terms: LegalDoc;
}

export function getLegal(locale: Locale): LegalContent {
  return locale === "en" ? LEGAL_EN : LEGAL_RO;
}
