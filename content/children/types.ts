import type { VideoKey } from "@/content/media";
import type { CtaBandContent, FaqEntry, PageHeroContent, PageSeo } from "@/content/pages/blocks";

/** `/pentru-copii` — neuro help for children and teenagers. */
export interface ChildrenContent {
  seo: PageSeo;
  hero: PageHeroContent;
  signs: { eyebrow: string; title: string; lead: string; items: Array<{ title: string; text: string }> };
  check: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    points: string[];
    video: VideoKey;
    videoTitle: string;
  };
  parents: { eyebrow: string; title: string; steps: Array<{ title: string; text: string }> };
  safety: { eyebrow: string; title: string; points: string[] };
  faq: { eyebrow: string; title: string; items: FaqEntry[] };
  cta: CtaBandContent;
}
