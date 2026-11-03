import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCALES, isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { articleSlugs, getArticle, getArticlesPage } from "@/content/articles";
import { CtaBand } from "@/components/pages/shared";
import { ArticleBody, ArticleHero } from "@/components/pages/articles";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleNode, breadcrumbs } from "@/components/seo/schema";
import { pageMetadata } from "@/components/seo/meta";

/** One article. The slug is the same in both languages (see `content/articles/types.ts`). */
export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => articleSlugs().map((slug) => ({ locale, slug })));
}

type Params = Promise<{ locale: string; slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const article = getArticle(locale, slug);
  if (!article) return {};
  return pageMetadata({
    title: article.title,
    description: article.description,
    path: `/articole/${slug}`,
    locale,
    type: "article",
    publishedTime: article.published,
    modifiedTime: article.updated ?? article.published,
  });
}

export default async function ArticlePage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const article = getArticle(locale, slug);
  if (!article) notFound();
  const page = getArticlesPage(locale);
  const dict = getDictionary(locale);
  return (
    <>
      <JsonLd
        data={[
          articleNode(article, locale),
          breadcrumbs(locale, dict.nav.home, [
            { name: page.seo.title, path: "/articole" },
            { name: article.title, path: `/articole/${slug}` },
          ]),
        ]}
      />
      <ArticleHero article={article} page={page} locale={locale} />
      <ArticleBody article={article} page={page} locale={locale} />
      <CtaBand content={article.cta} />
    </>
  );
}
