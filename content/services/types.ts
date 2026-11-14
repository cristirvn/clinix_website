import type { VideoKey } from "@/content/media";
import type { CtaBandContent, FaqEntry, PageLink, PageSeo } from "@/content/pages/blocks";
import type { ConditionId } from "@/content/conditions/types";

/**
 * `/servicii/<slug>` — one page per device / service in the clinic.
 * Slugs are the same in both languages (`/services/tavns` in English).
 */
/** Display order everywhere (menu, footer, /servicii). */
export const SERVICE_SLUGS = ["brainmap", "neurofeedback", "tavns", "tpbm", "ces", "psihoterapie", "emsella"] as const;
export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export interface ServiceContent {
  slug: ServiceSlug;
  seo: PageSeo;
  /** Short name + one line, used on the /servicii cards and the condition cards. */
  card: { name: string; short: string };
  hero: { eyebrow: string; title: string; lead: string; videoTitle: string };
  /** Key in `content/media.ts` — leave its `src` empty until the clinic sends the file. */
  video: VideoKey;
  what: { eyebrow: string; title: string; paragraphs: string[] };
  session: {
    eyebrow: string;
    title: string;
    steps: Array<{ title: string; text: string }>;
    /** Quick facts shown next to the steps (duration, clothes on, …). */
    facts: string[];
  };
  helps: {
    eyebrow: string;
    title: string;
    lead: string;
    /** Linked to `/afectiuni-tratate#<id>`. */
    conditions: ConditionId[];
    note: string;
  };
  safety: {
    eyebrow: string;
    title: string;
    points: string[];
    notTitle: string;
    notFor: string[];
  };
  faq: { eyebrow: string; title: string; items: FaqEntry[] };
  cta: CtaBandContent;
  /** schema.org type used in the JSON-LD for this page. */
  schemaType: "DiagnosticProcedure" | "TherapeuticProcedure" | "PsychologicalTreatment";
}

/** `/servicii` — the list of all services. */
export interface ServicesIndexContent {
  seo: PageSeo;
  hero: { eyebrow: string; title: string; lead: string };
  more: string;
  cardLink: string;
  /** Optional line + link under the cards. */
  elsewhere?: { text: string; link: PageLink };
  cta: CtaBandContent;
}

/** Small interface labels shared by all service pages. */
export interface ServicesUi {
  conditionLink: string;
  breadcrumb: string;
  /** Testimonials section under the video (added from /admin; hidden when there are none). */
  testimonials: { eyebrow: string; title: string; play: string };
}

export interface ServicesLocale {
  ui: ServicesUi;
  index: ServicesIndexContent;
  items: Record<ServiceSlug, ServiceContent>;
}
