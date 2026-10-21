import type { Locale } from "@/lib/i18n";
import type { VideoKey } from "@/content/media";
import { HOME_RO } from "@/content/pages/ro/home";
import { HOME_EN } from "@/content/pages/en/home";

/** Home page copy — one object per language (`ro/home.ts`, `en/home.ts`). */
export interface HomeContent {
  seo: { title: string; description: string };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    cta: string;
    secondary: string;
    facts: string[];
  };
  triage: { eyebrow: string; title: string; lead: string };
  tests: { eyebrow: string; title: string; lead: string; all: string };
  faq: { eyebrow: string; title: string; items: Array<{ q: string; a: string }> };
  about: { eyebrow: string; title: string; paragraphs: string[]; link: string };
  proof: {
    eyebrow: string;
    title: string;
    lead: string;
    caption: string;
    testimonials: Array<{ name: string; video: VideoKey }>;
    recommendedLabel: string;
    /** Logos / names of partners who recommend the clinic. The strip stays hidden while empty. */
    recommendedBy: Array<{ name: string; logo?: string; href?: string }>;
  };
  final: { title: string; lead: string; cta: string; note: string };
}

export function getHome(locale: Locale): HomeContent {
  return locale === "en" ? HOME_EN : HOME_RO;
}
