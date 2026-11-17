import { Section, SectionHead } from "@/components/ui/primitives";
import { ArticleCards } from "@/components/pages/articles";
import { getArticlesForTopics, getArticlesPage } from "@/content/articles";
import type { Locale } from "@/lib/i18n";

/**
 * "Citește mai mult" — the articles about this page's condition / service
 * (`topics`, see `content/articles/types.ts`). Sits at the very end of landing
 * pages (after the form, so it never competes with it), service pages and
 * psychotherapist pages. Renders nothing while there is no matching article.
 */
export function RelatedArticles({
  topics,
  locale,
  tone = "alt",
}: {
  topics: readonly string[];
  locale: Locale;
  tone?: "default" | "alt";
}) {
  const articles = getArticlesForTopics(locale, topics);
  if (articles.length === 0) return null;
  const page = getArticlesPage(locale);
  return (
    <Section tone={tone} id="articole">
      <SectionHead title={page.related.title} lead={page.related.lead} />
      <ArticleCards articles={articles} page={page} locale={locale} headingLevel={3} />
    </Section>
  );
}
