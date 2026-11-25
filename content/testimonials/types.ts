import type { VideoKey } from "@/content/media";
import type { CtaBandContent, PageSeo } from "@/content/pages/blocks";

/**
 * What the testimonial is about — shown as a small tag and used to link to the right page.
 * "pending": a placeholder card waiting for a real patient's video (tag shows "[Serviciu]").
 */
export type TestimonialTopic = "brainmap" | "somn" | "emsella" | "pending";

type Bilingual = { ro: string; en: string };

/** A name: the same in both languages, or a per-language placeholder ("[Nume pacient]"). */
export type TestimonialName = string | Bilingual;

export interface VideoTestimonial {
  kind: "video";
  /** Unique, kebab-case. */
  id: string;
  /** Key in `content/media.ts` (paste the YouTube/Vimeo/mp4 link there). */
  video: VideoKey;
  name: TestimonialName;
  /** One short line under the name. Leave both empty to show only the topic. */
  role: Bilingual;
  /** Line under the name in the home-page carousel (instead of `role`, without the duration). */
  home?: Bilingual;
  topic: TestimonialTopic;
}

export interface QuoteTestimonial {
  kind: "quote";
  id: string;
  name: TestimonialName;
  initials: string;
  /** Line under the name — for Google reviews: "recenzie Google". */
  place: Bilingual;
  quote: Bilingual;
  /** Optional tag; Google reviews have none. */
  topic?: TestimonialTopic;
}

export type Testimonial = VideoTestimonial | QuoteTestimonial;

export interface TestimonialsPageContent {
  seo: PageSeo;
  hero: { eyebrow: string; title: string; lead: string };
  videos: { eyebrow: string; title: string };
  quotes: { eyebrow: string; title: string };
  /** Tag per topic; without `href` the tag is plain text (the "[Serviciu]" placeholder). */
  topics: Record<TestimonialTopic, { label: string; href?: string }>;
  playLabel: string;
  empty: string;
  note: string;
  cta: CtaBandContent;
}
