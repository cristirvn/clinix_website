import type { Metadata } from "next";
import { L } from "@/components/ui/L";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { ArticlesCta } from "@/components/articles/ArticlesCta";
import { getArticles, getArticlesCopy } from "@/content/articles";
import { alternatesFor, type Locale } from "@/lib/i18n";
import { formatDate } from "@/components/articles/format";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const copy = getArticlesCopy(locale);
  return {
    title: copy.seo.title,
    description: copy.seo.description,
    alternates: alternatesFor("/articole", locale),
    // An empty list page has nothing worth indexing yet.
    ...(getArticles().length === 0 && { robots: { index: false, follow: true } }),
  };
}

/** Article list: newest first, one calm row per article. */
export default async function ArticlesPage({ params }: Props) {
  const locale = (await params).locale as Locale;
  const copy = getArticlesCopy(locale);
  const articles = getArticles();

  return (
    <>
      <section className="bg-bg-alt pb-14 pt-16 text-ink sm:pb-20 sm:pt-24">
        <Container narrow>
          <Eyebrow>{copy.eyebrow}</Eyebrow>
          <h1 className="text-[2.6rem] sm:text-6xl lg:text-7xl">{copy.title}</h1>
          <p className="mt-6 text-lg text-ink-soft sm:text-xl">{copy.lead}</p>
        </Container>
      </section>

      <section className="bg-bg py-16 text-ink sm:py-24">
        <Container narrow>
          {articles.length === 0 ? (
            <p className="text-lg text-ink-soft">{copy.empty}</p>
          ) : (
            <ul className="divide-y divide-line border-y border-line">
              {articles.map((a) => {
                const body = a.body[locale];
                return (
                  <li key={a.slug}>
                    <L href={`/articole/${a.slug}`} className="group block py-8">
                      <p className="text-sm text-ink-soft">
                        <time dateTime={a.published}>{formatDate(a.published, locale)}</time>
                      </p>
                      <h2 className="mt-2 text-3xl transition group-hover:text-primary sm:text-4xl">{body.title}</h2>
                      <p className="mt-3 text-lg text-ink-soft">{body.description}</p>
                      <p className="mt-4 font-semibold text-primary">{copy.readMore}</p>
                    </L>
                  </li>
                );
              })}
            </ul>
          )}
        </Container>
      </section>

      <ArticlesCta copy={copy} />
    </>
  );
}
