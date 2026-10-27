import type { Locale } from "@/lib/i18n";
import type { Article, ArticleBody, ArticlesCopy } from "@/content/articles/types";

export type { Article, ArticleBody, ArticlesCopy };

/**
 * Every published article (any order — `getArticles()` sorts newest first).
 * Add a new one: create `posts/<slug>.ts` exporting an `Article`, import it and list it here.
 * Pages, sitemap.xml and llms.txt pick it up automatically.
 */
const ARTICLES: Article[] = [];

export function getArticles(): Article[] {
  return [...ARTICLES].sort((a, b) => b.published.localeCompare(a.published));
}

export function getArticle(slug: string): Article | null {
  return ARTICLES.find((a) => a.slug === slug) ?? null;
}

const COPY: Record<Locale, ArticlesCopy> = {
  ro: {
    seo: {
      title: "Articole",
      description: "Articole despre somn, anxietate, stres, concentrare și BrainMap, scrise de echipa Emmanuel CliniX.",
    },
    eyebrow: "Articole",
    title: "Ce se întâmplă, de fapt, în creier.",
    lead: "Explicații clare despre somn, anxietate, stres și concentrare, de la echipa clinicii.",
    empty: "Primele articole apar în curând.",
    readMore: "Citește articolul →",
    publishedOn: "Publicat pe",
    by: "de",
    back: "← Toate articolele",
    relatedTest: "Fă testul gratuit →",
    cta: {
      title: "Vrei să vezi ce arată creierul tău?",
      lead: "BrainMap · 1.200 lei. O oră în clinică, în București.",
      button: "Programează BrainMap",
    },
  },
  en: {
    seo: {
      title: "Articles",
      description: "Articles on sleep, anxiety, stress, focus and BrainMap, written by the Emmanuel CliniX team.",
    },
    eyebrow: "Articles",
    title: "What is really happening in the brain.",
    lead: "Clear explanations of sleep, anxiety, stress and focus, from the clinic's team.",
    empty: "The first articles are coming soon.",
    readMore: "Read the article →",
    publishedOn: "Published on",
    by: "by",
    back: "← All articles",
    relatedTest: "Take the free test →",
    cta: {
      title: "Want to see what your brain shows?",
      lead: "BrainMap · 1,200 RON. One hour at the clinic, in Bucharest.",
      button: "Book BrainMap",
    },
  },
};

export function getArticlesCopy(locale: Locale): ArticlesCopy {
  return COPY[locale];
}
