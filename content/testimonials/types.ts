import type { VideoKey } from "@/content/media";
import type { CtaBandContent, PageSeo } from "@/content/pages/blocks";

/** What the testimonial is about — shown as a small tag and used to link to the right page. */
export type TestimonialTopic = "brainmap" | "somn" | "emsella";

type Bilingual = { ro: string; en: string };

export interface VideoTestimonial {
  kind: "video";
  /** Unique, kebab-case. */
  id: string;
  /** Key in `content/media.ts` (paste the YouTube/Vimeo/mp4 link there). */
  video: VideoKey;
  name: string;
  /** One short line under the name. Leave both empty to show only the topic. */
  role: Bilingual;
  topic: TestimonialTopic;
}

export interface QuoteTestimonial {
  kind: "quote";
  id: string;
  name: string;
  initials: string;
  place: Bilingual;
  quote: Bilingual;
  topic: TestimonialTopic;
}

export type Testimonial = VideoTestimonial | QuoteTestimonial;

export interface TestimonialsPageContent {
  seo: PageSeo;
  hero: { eyebrow: string; title: string; lead: string };
  videos: { eyebrow: string; title: string };
  quotes: { eyebrow: string; title: string };
  topics: Record<TestimonialTopic, { label: string; href: string }>;
  playLabel: string;
  empty: string;
  note: string;
  cta: CtaBandContent;
}
