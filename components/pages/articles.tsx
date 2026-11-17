import { ButtonLink, Container, Eyebrow, HeroPanel, Section } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { Photo } from "@/components/ui/Photo";
import { L } from "@/components/ui/L";
import type { Locale } from "@/lib/i18n";
import type { Article, ArticleBlock, ArticlesPageContent } from "@/content/articles/types";
import { getCondition, type ConditionId } from "@/content/conditions";
import { getService } from "@/content/services";
import type { PageLink } from "@/content/pages/blocks";

export function formatDate(iso: string, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === "en" ? "en-GB" : "ro-RO", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}

/** `/articole` — a card per article; the whole card is the link. */
export function ArticleGrid({
  articles,
  page,
  locale,
}: {
  articles: Article[];
  page: ArticlesPageContent;
  locale: Locale;
}) {
  return (
    <Section tone="alt" className="!pt-14 sm:!pt-20">
      <ArticleCards articles={articles} page={page} locale={locale} />
    </Section>
  );
}

/** The cards themselves (also used by the "Citește mai mult" block, where the titles are h3). */
export function ArticleCards({
  articles,
  page,
  locale,
  headingLevel = 2,
}: {
  articles: Article[];
  page: ArticlesPageContent;
  locale: Locale;
  headingLevel?: 2 | 3;
}) {
  const Heading = headingLevel === 3 ? "h3" : "h2";
  return (
    <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((a, i) => (
        <li key={a.slug}>
          <Reveal delay={(i % 3) * 60} className="h-full">
            <L
              href={`/articole/${a.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-[var(--radius)] border border-line bg-surface text-ink transition duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[var(--shadow-card)]"
            >
              {a.image && (
                <div className="aspect-[16/10] overflow-hidden">
                  <Photo image={a.image} locale={locale} width={800} className="zoom-media" />
                </div>
              )}
              <div className="flex flex-1 flex-col p-7">
                <p className="text-[0.875rem] font-semibold text-accent">{a.category}</p>
                <Heading className="mt-3 text-[1.75rem] leading-[1.12] sm:text-[1.9rem]">{a.title}</Heading>
                <p className="mt-3 flex-1 text-ink-soft">{a.description}</p>
                <p className="mt-6 flex items-center justify-between gap-4 border-t border-line pt-5 text-sm text-ink-soft">
                  <span>
                    {a.readingMinutes} {page.minutes}
                  </span>
                  <span className="text-base font-semibold text-primary">{page.readMore}</span>
                </p>
              </div>
            </L>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

export function ArticleHero({ article, page, locale }: { article: Article; page: ArticlesPageContent; locale: Locale }) {
  const updated = article.updated && article.updated !== article.published ? article.updated : null;
  return (
    <HeroPanel narrow>
      <L href="/articole" className="mb-8 inline-block text-on-dark-soft underline-offset-4 hover:underline">
        {page.back}
      </L>
      <div>
        <Eyebrow>{article.category}</Eyebrow>
      </div>
      <h1 className="text-[2.6rem] leading-[1.06] sm:text-6xl">{article.title}</h1>
      <p className="mt-6 text-lg text-on-dark-soft sm:text-xl">{article.description}</p>
      <p className="mt-8 text-sm text-on-dark-soft">
        {page.published} <time dateTime={article.published}>{formatDate(article.published, locale)}</time>
        {updated && (
          <>
            {" · "}
            {page.updated} <time dateTime={updated}>{formatDate(updated, locale)}</time>
          </>
        )}
        {" · "}
        {article.readingMinutes} {page.minutes}
      </p>
    </HeroPanel>
  );
}

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "h2":
      return <h2 className="pt-8 text-[2rem] leading-[1.1] sm:text-[2.5rem]">{block.text}</h2>;
    case "p":
      return <p className="text-lg leading-relaxed text-ink/85 sm:text-xl sm:leading-relaxed">{block.text}</p>;
    case "list":
      return (
        <ul className="list-disc space-y-3 pl-6 text-lg leading-relaxed text-ink/85 marker:text-accent sm:text-xl">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "links":
      return (
        <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:flex-wrap sm:gap-8">
          {block.items.map((link) => (
            <ButtonLink key={link.href} href={link.href} variant="ghost" className="text-lg">
              {link.label}
            </ButtonLink>
          ))}
        </div>
      );
  }
}

export function ArticleBody({ article, page, locale }: { article: Article; page: ArticlesPageContent; locale: Locale }) {
  return (
    <section className="bg-bg py-16 text-ink sm:py-24">
      <Container narrow>
        {article.image && (
          <div className="mb-12 aspect-[16/9] overflow-hidden rounded-[var(--radius)]">
            <Photo image={article.image} locale={locale} width={1200} />
          </div>
        )}
        <div className="space-y-6">
          {article.body.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>
        <TopicLinks article={article} page={page} locale={locale} />
        <p className="mt-14 border-t border-line pt-6 text-sm text-ink-soft">{page.disclaimer}</p>
      </Container>
    </section>
  );
}

/**
 * "Pe aceeași temă" — from the article's topics: each condition's landing
 * page and free test, each service's page. Internal links that tell search
 * engines and AI assistants which pages this article supports.
 */
function TopicLinks({ article, page, locale }: { article: Article; page: ArticlesPageContent; locale: Locale }) {
  const groups: Array<{ title: string; links: PageLink[] }> = article.topics.flatMap((topic) => {
    const condition = getCondition(locale, topic as ConditionId);
    if (condition) {
      const links: PageLink[] = [];
      if (condition.lp) links.push({ label: page.topicLinks.lp, href: condition.lp });
      if (condition.quiz) links.push({ label: page.topicLinks.test, href: `/chestionare/${condition.quiz}` });
      return links.length ? [{ title: condition.title, links }] : [];
    }
    const service = getService(locale, topic);
    return service ? [{ title: service.card.name, links: [{ label: page.topicLinks.service, href: `/servicii/${service.slug}` }] }] : [];
  });
  if (groups.length === 0) return null;
  return (
    <aside aria-labelledby="topic-links" className="mt-14 rounded-[var(--radius)] border border-line bg-bg-alt p-6 sm:p-8">
      <h2 id="topic-links" className="text-[1.6rem] sm:text-[1.9rem]">
        {page.topicLinks.title}
      </h2>
      <ul className="mt-6 grid gap-6 sm:grid-cols-2">
        {groups.map((g) => (
          <li key={g.title}>
            <p className="text-lg font-semibold">{g.title}</p>
            <ul className="mt-1">
              {g.links.map((link) => (
                <li key={link.href}>
                  <L
                    href={link.href}
                    className="inline-flex min-h-11 items-center font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
                  >
                    {link.label}
                  </L>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  );
}
