import type { VideoKey } from "@/content/media";
import type { FaqEntry } from "@/content/pages/blocks";

/**
 * Psychotherapists with their own landing page (`/psihoterapeut/<slug>`) and a
 * card in the carousel on `/servicii/psihoterapie`. The slug is the same in
 * both languages. Order here = order in the carousel.
 *
 * Adding one: add the slug here, a `content/media.ts` video key (+ its
 * description in `lib/cms/slots.ts`), then the copy in `ro.ts` and `en.ts`.
 */
export const THERAPIST_SLUGS = ["patricia-cihodaru", "aniela-sircu"] as const;
export type TherapistSlug = (typeof THERAPIST_SLUGS)[number];

export interface Therapist {
  slug: TherapistSlug;
  /** Full name, as on /echipa. */
  name: string;
  /** Used in buttons: "Programează o ședință la Patricia". */
  firstName: string;
  role: string;
  /** /public path. */
  photo: string;
  /** VSL at the top of the page — a `content/media.ts` key, set from /admin. */
  video: VideoKey;
  seo: { title: string; description: string };
  /** Carousel card on /servicii/psihoterapie. */
  card: { short: string; focus: string[] };
  hero: {
    lede: string;
    /** Three or four short facts under the video. */
    facts: string[];
  };
  about: { title: string; paragraphs: string[] };
  helps: { title: string; items: Array<{ title: string; text: string }> };
  approach: { title: string; steps: Array<{ title: string; text: string }> };
  qualify: { fits: string[]; notFit: string[] };
  faq: FaqEntry[];
}

/** Copy shared by every psychotherapist page. `{name}` = the therapist's first name. */
export interface TherapistUi {
  /** Breadcrumb / back label for /servicii/psihoterapie. */
  serviceName: string;
  cta: string;
  heroMicro: string;
  videoTitle: string;
  testimonials: {
    title: string;
    lede: string;
    play: string;
    /** Shown on the empty frames until the clinic adds testimonials in /admin. */
    placeholder: string;
  };
  qualify: { title: string; fitsTitle: string; notTitle: string };
  faqTitle: string;
  /** Field labels, placeholders and errors come from `dict.form` (same as every other form). */
  form: {
    title: string;
    lede: string;
    submit: string;
    successTitle: string;
    /** Followed by the clinic's phone number. */
    successBody: string;
    callNote: string;
  };
  /** Mobile sticky bar: the therapist's name, this line, a short button. */
  sticky: { sub: string; cta: string };
  pageNav: { title: string; video: string; about: string; testimonials: string; faq: string; book: string };
  legal: string;
  /** /servicii/psihoterapie — the carousel. */
  carousel: { title: string; lead: string; more: string; prev: string; next: string };
}

export interface TherapistsLocale {
  ui: TherapistUi;
  items: Record<TherapistSlug, Therapist>;
}
