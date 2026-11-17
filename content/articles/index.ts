import type { Locale } from "@/lib/i18n";
import type { Article, ArticleBlock, ArticlesPageContent, ArticleTopic } from "./types";
import { ARTICLES_PAGE_RO, ARTICLES_RO } from "./ro";
import { ARTICLES_PAGE_EN, ARTICLES_EN } from "./en";

export type { Article, ArticleBlock, ArticlesPageContent, ArticleTopic };

const LISTS: Record<Locale, Article[]> = { ro: ARTICLES_RO, en: ARTICLES_EN };
const PAGES: Record<Locale, ArticlesPageContent> = { ro: ARTICLES_PAGE_RO, en: ARTICLES_PAGE_EN };

export function getArticles(locale: Locale): Article[] {
  return LISTS[locale];
}

export function getArticle(locale: Locale, slug: string): Article | null {
  return LISTS[locale].find((a) => a.slug === slug) ?? null;
}

export function getArticlesPage(locale: Locale): ArticlesPageContent {
  return PAGES[locale];
}

/**
 * Articles about any of `topics` (newest first), for the "Citește mai mult"
 * block on landing / service / psychotherapist pages. Only articles that
 * exist in both languages (the others have no page).
 */
export function getArticlesForTopics(locale: Locale, topics: readonly string[], limit = 3): Article[] {
  const live = new Set(articleSlugs());
  return LISTS[locale]
    .filter((a) => live.has(a.slug) && a.topics.some((t) => topics.includes(t)))
    .slice(0, limit);
}

/** Slugs that exist in BOTH languages (only these get a page, so hreflang never points at a 404). */
export function articleSlugs(): string[] {
  const en = new Set(ARTICLES_EN.map((a) => a.slug));
  return ARTICLES_RO.map((a) => a.slug).filter((s) => en.has(s));
}
