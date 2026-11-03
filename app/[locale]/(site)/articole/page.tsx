import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { getArticles, getArticlesPage } from "@/content/articles";
import { PageHero } from "@/components/pages/shared";
import { ArticleGrid } from "@/components/pages/articles";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbs } from "@/components/seo/schema";
import { pageMetadata } from "@/components/seo/meta";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const { seo } = getArticlesPage(locale);
  return pageMetadata({ title: seo.title, description: seo.description, path: "/articole", locale });
}

export default async function ArticlesPage({ params }: Props) {
  const locale = (await params).locale as Locale;
  const page = getArticlesPage(locale);
  const dict = getDictionary(locale);
  return (
    <>
      <JsonLd data={breadcrumbs(locale, dict.nav.home, [{ name: page.seo.title, path: "/articole" }])} />
      <PageHero content={page.hero} />
      <ArticleGrid articles={getArticles(locale)} page={page} locale={locale} />
    </>
  );
}
