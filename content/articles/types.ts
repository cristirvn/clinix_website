import type { ImageKey } from "@/content/media";
import type { CtaBandContent, PageLink, PageSeo } from "@/content/pages/blocks";

/**
 * Articles (`/articole/<slug>`). One file per article per language:
 * `content/articles/ro/<slug>.ts` + `content/articles/en/<slug>.ts`, then add it
 * to the list in `ro/index.ts` and `en/index.ts`.
 *
 * SLUGS: an article keeps the SAME slug in both languages (simpler to manage
 * and to link). Avoid slugs that are a single word from `RO_TO_EN` in
 * `lib/i18n.ts` (e.g. `somn`) — those would be translated in English URLs.
 */
export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  /** A short row of related links (tests, LPs). `href` is an internal path. */
  | { type: "links"; items: PageLink[] };

export interface Article {
  slug: string;
  title: string;
  /** One or two sentences — list card + meta description. */
  description: string;
  /** Small label above the title, e.g. "BrainMap", "Somn". */
  category: string;
  /** ISO date (YYYY-MM-DD). */
  published: string;
  /** ISO date of the last real edit. Defaults to `published`. */
  updated?: string;
  readingMinutes: number;
  author: string;
  image?: ImageKey;
  body: ArticleBlock[];
  /** The one next step at the end of the article. */
  cta: CtaBandContent;
}

/** Copy for the list page and the shared article labels. */
export interface ArticlesPageContent {
  seo: PageSeo;
  hero: { eyebrow: string; title: string; lead: string };
  readMore: string;
  minutes: string;
  published: string;
  updated: string;
  back: string;
  disclaimer: string;
}
