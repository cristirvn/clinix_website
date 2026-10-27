import type { Locale } from "@/lib/i18n";
import type { ImageKey } from "@/content/media";

/** One language version of an article. */
export interface ArticleBody {
  /** H1 and <title>. Keep it the question people actually type into Google / ChatGPT. */
  title: string;
  /** Meta description and the teaser on /articole (≈ 150 characters). */
  description: string;
  /** Short direct answer shown first — search engines and AI assistants quote this. */
  summary: string;
  sections: Array<{ heading?: string; paragraphs: string[]; list?: string[] }>;
}

/**
 * An article. ONE file per article in `content/articles/posts/`, both languages
 * in the same object (like `content/media.ts`), then add it to `ARTICLES` in
 * `content/articles/index.ts`. The slug is shared by both languages — write it
 * in Romanian, lowercase, hyphens, no diacritics (e.g. "ce-este-qeeg"), and do
 * not reuse a route word from `lib/i18n.ts` (e.g. "somn") on its own.
 */
export interface Article {
  slug: string;
  /** ISO date, e.g. "2026-11-03". */
  published: string;
  updated?: string;
  /** Author shown under the title and in the structured data (a name from the team). */
  author: string;
  image?: ImageKey;
  /** Optional test to point readers to at the end (a quiz slug, e.g. "somn"). */
  relatedTest?: string;
  body: Record<Locale, ArticleBody>;
}

/** Interface copy for the articles pages. */
export interface ArticlesCopy {
  seo: { title: string; description: string };
  eyebrow: string;
  title: string;
  lead: string;
  empty: string;
  readMore: string;
  publishedOn: string;
  by: string;
  back: string;
  relatedTest: string;
  cta: { title: string; lead: string; button: string };
}
