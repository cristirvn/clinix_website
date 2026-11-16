/**
 * NeuroFit page copy (`/neurofit`) — one object per language (`ro.ts`, `en.ts`).
 * Brief: the clinic's private "gym for the brain"; a monthly membership.
 * No package prices (told only by phone or at the clinic). No staff photos.
 * In titles, `*…*` marks the part shown in gold.
 */
export type ExperienceName = "Relax" | "Focus" | "Reset" | "Longevity";

export interface NeuroFitContent {
  seo: { title: string; description: string };
  /** NeuroFit's own header. Anchor links go to sections on this page. */
  nav: { label: string; items: Array<{ label: string; href: string }>; cta: string; ctaShort: string; back: string };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    cta: string;
    secondary: string;
    stats: Array<{ value: string; label: string }>;
  };
  vsl: { eyebrow: string; title: string; lead: string; playerTitle: string };
  concept: { eyebrow: string; title: string; paragraphs: string[] };
  audience: { eyebrow: string; title: string; items: Array<{ title: string; text: string }> };
  experiences: {
    eyebrow: string;
    title: string;
    lead: string;
    /** Label above each card's list of situations ("For when…"). */
    forWhen: string;
    items: Array<{ name: ExperienceName; line: string; situations: string[] }>;
    note: string;
  };
  tech: { eyebrow: string; title: string; items: Array<{ title: string; text: string }> };
  membership: { eyebrow: string; title: string; lead: string; steps: Array<{ title: string; text: string }>; note: string };
  reviews: { eyebrow: string; title: string; ratingLabel: string; source: string };
  faq: { eyebrow: string; title: string; items: Array<{ q: string; a: string }> };
  book: {
    eyebrow: string;
    title: string;
    text: string;
    emailLabel: string;
    experienceLabel: string;
    /** Last option = "not sure yet". */
    experienceOptions: string[];
    submit: string;
    successTitle: string;
    successText: string;
    orCall: string;
  };
  footer: { line: string; disclaimer: string; back: string };
}
