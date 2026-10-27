import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { L } from "@/components/ui/L";
import { ButtonLink, Container } from "@/components/ui/primitives";
import { Photo } from "@/components/ui/Photo";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArticlesCta } from "@/components/articles/ArticlesCta";
import { formatDate } from "@/components/articles/format";
import { getArticle, getArticles, getArticlesCopy } from "@/content/articles";
import { IMAGES } from "@/content/media";
import { alternatesFor, SITE_URLS, type Locale } from "@/lib/i18n";
import { absoluteUrl, breadcrumbSchema } from "@/lib/structured-data";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return getArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = (await params) as { locale: Locale; slug: string };
  const article = getArticle(slug);
  if (!article) return {};
  const body = article.body[locale];
  return {
    title: body.title,
    description: body.description,
    alternates: alternatesFor(`/articole/${slug}`, locale),
    openGraph: {
      type: "article",
      title: body.title,
      description: body.description,
      publishedTime: article.published,
      modifiedTime: article.updated ?? article.published,
      authors: [article.author],
    },
  };
}

/** One article: answer first, then the sections, then the related test and the BrainMap step. */
export default async function ArticlePage({ params }: Props) {
  const { locale, slug } = (await params) as { locale: Locale; slug: string };
  const article = getArticle(slug);
  if (!article) notFound();
  const body = article.body[locale];
  const copy = getArticlesCopy(locale);
  const url = absoluteUrl(`/articole/${slug}`, locale);

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: body.title,
            description: body.description,
            abstract: body.summary,
            datePublished: article.published,
            dateModified: article.updated ?? article.published,
            inLanguage: locale === "en" ? "en-GB" : "ro-RO",
            author: { "@type": "Person", name: article.author },
            publisher: { "@id": `${SITE_URLS[locale]}/#clinic` },
            mainEntityOfPage: url,
            ...(article.image && { image: IMAGES[article.image].src }),
          },
          breadcrumbSchema(locale, [
            { name: copy.eyebrow, path: "/articole" },
            { name: body.title, path: `/articole/${slug}` },
          ]),
        ]}
      />

      <article>
        <header className="bg-bg-alt pb-14 pt-12 text-ink sm:pb-20 sm:pt-16">
          <Container narrow>
            <L href="/articole" className="inline-block py-1.5 text-ink-soft hover:text-primary">
              {copy.back}
            </L>
            <h1 className="mt-6 text-[2.4rem] [overflow-wrap:anywhere] sm:text-6xl">{body.title}</h1>
            <p className="mt-6 text-ink-soft">
              {copy.publishedOn} <time dateTime={article.published}>{formatDate(article.published, locale)}</time> · {copy.by}{" "}
              {article.author}
            </p>
          </Container>
        </header>

        <div className="bg-bg py-14 text-ink sm:py-20">
          <Container narrow>
            {article.image && (
              <div className="mb-12 aspect-[16/9] overflow-hidden rounded-[var(--radius)] bg-bg-alt">
                <Photo image={article.image} locale={locale} width={1400} priority />
              </div>
            )}
            <p className="border-l-4 border-primary pl-6 text-xl leading-relaxed sm:text-2xl">{body.summary}</p>

            <div className="mt-12 space-y-12 [overflow-wrap:anywhere]">
              {body.sections.map((s, i) => (
                <section key={s.heading ?? i}>
                  {s.heading && <h2 className="text-3xl sm:text-4xl">{s.heading}</h2>}
                  <div className="mt-4 space-y-4 text-lg leading-relaxed text-ink-soft">
                    {s.paragraphs.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                    {s.list && (
                      <ul className="list-disc space-y-2 pl-6">
                        {s.list.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </section>
              ))}
            </div>

            {article.relatedTest && (
              <div className="mt-14 border-t border-line pt-10">
                <ButtonLink href={`/chestionare/${article.relatedTest}`} variant="outline" size="lg" className="w-full sm:w-auto">
                  {copy.relatedTest}
                </ButtonLink>
              </div>
            )}
          </Container>
        </div>
      </article>

      <ArticlesCta copy={copy} />
    </>
  );
}
