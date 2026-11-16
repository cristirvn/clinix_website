import type { Locale } from "@/lib/i18n";
import type { ImageKey } from "@/content/media";
import { HOME_RO } from "@/content/pages/ro/home";
import { HOME_EN } from "@/content/pages/en/home";

import type { ServiceSlug } from "@/content/services/types";

/**
 * Home page copy — one object per language (`ro/home.ts`, `en/home.ts`).
 * Order on the page (client's structure, Nov 2026): hero → NeuroFit →
 * methods → how to start (BrainMap) → quiz → complex situations →
 * testimonials → closing band.
 */
export interface HomeContent {
  seo: { title: string; description: string };
  /** 1 · Hero over a photo: small label, headline, one line, three short facts, main action + phone, three glass stats. */
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    /** Two to four words each — they sit in one row under the lead. */
    benefits: string[];
    cta: string;
    /** Accessible label of the phone button next to the main action. */
    phoneLabel: string;
    /** Big value ("30 min") + one short line. */
    stats: Array<{ value: string; label: string }>;
  };
  /** 2 · NeuroFit teaser, in NeuroFit's own black + gold. */
  neurofit: {
    eyebrow: string;
    /** `*…*` marks the part shown in gold. */
    title: string;
    text: string;
    experiences: string[];
    audienceTitle: string;
    audience: string[];
    note: string;
    cta: string;
  };
  /** 3 · Methods: neurofeedback featured, then the four other tools. */
  services: {
    title: string;
    lead: string;
    more: string;
    featuredBadge: string;
    /** One line under the cards: the methods are the tools, NeuroFit is the routine that uses them. */
    toolsLine: string;
    toolsLink: string;
    /** `eyebrow`: one plain line under the name. */
    items: Array<{ slug: ServiceSlug; image: ImageKey; eyebrow: string; title: string }>;
  };
  /** 4 · How to start: BrainMap in three steps. */
  start: {
    badge: string;
    eyebrow: string;
    title: string;
    steps: Array<{ title: string; text: string }>;
    cta: string;
    note: string;
  };
  /** 5 · Quiz start: the first question inline (options come from `getTriage`). */
  quiz: { eyebrow: string; title: string; lead: string; step: string; next: string; pickFirst: string };
  /** 6 · Complex situations (ADHD, autism …). */
  complex: {
    eyebrow: string;
    title: string;
    text: string;
    tags: string[];
    links: Array<{ label: string; href: string }>;
  };
  /** 7 · Testimonials: Google rating, video stories, three Google reviews. */
  testimonials: {
    eyebrow: string;
    title: string;
    ratingLabel: string;
    videosTitle: string;
    prev: string;
    next: string;
    play: string;
    reviewSource: string;
    all: string;
  };
  /** 8 · Closing band: one action + how to reach us. */
  final: { title: string; cta: string; note: string; reach: string; address: string };
  /**
   * Approved FAQ. No longer shown on the home page (kept short on purpose),
   * but the website assistant still answers from it (lib/chat/knowledge.ts).
   */
  faq: { eyebrow: string; title: string; items: Array<{ q: string; a: string }> };
}

export function getHome(locale: Locale): HomeContent {
  return locale === "en" ? HOME_EN : HOME_RO;
}
