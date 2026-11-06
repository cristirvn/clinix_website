import type { Locale } from "@/lib/i18n";
import type { ImageKey } from "@/content/media";
import { HOME_RO } from "@/content/pages/ro/home";
import { HOME_EN } from "@/content/pages/en/home";

/** Internal slugs of the service pages (`/servicii/<slug>`). */
export type ServiceSlug = "brainmap" | "tavns" | "tpbm" | "ces" | "psihoterapie";

/** Home page copy — one object per language (`ro/home.ts`, `en/home.ts`). */
export interface HomeContent {
  seo: { title: string; description: string };
  /** 1 · Hero over a photo: BrainMap promise, ticks, main action + phone, three glass facts. */
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    benefits: string[];
    cta: string;
    /** Small line next to the main button (price / duration). */
    note: string;
    /** Accessible label of the phone button next to the main action. */
    phoneLabel: string;
    /** Big number + label. `value` is counted up on screen; `decimals` keeps "99,7". */
    stats: Array<{ value: number; decimals?: number; suffix?: string; label: string }>;
  };
  /** 2 · Services: BrainMap first (featured), then the four treatments. */
  services: {
    eyebrow: string;
    title: string;
    lead: string;
    more: string;
    featuredBadge: string;
    items: Array<{ slug: ServiceSlug; image: ImageKey; eyebrow: string; title: string; text: string }>;
  };
  /** 3 · Quiz start: the first question inline (options come from `getTriage`). */
  quiz: { eyebrow: string; title: string; lead: string; step: string; next: string; pickFirst: string };
  /** 4 · Closing band: one action + how to reach us. */
  final: { title: string; lead: string; cta: string; note: string; reach: string; address: string };
  /**
   * Approved FAQ. No longer shown on the home page (kept short on purpose),
   * but the website assistant still answers from it (lib/chat/knowledge.ts).
   */
  faq: { eyebrow: string; title: string; items: Array<{ q: string; a: string }> };
}

export function getHome(locale: Locale): HomeContent {
  return locale === "en" ? HOME_EN : HOME_RO;
}
