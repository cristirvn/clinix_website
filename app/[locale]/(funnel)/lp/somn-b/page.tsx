import type { Metadata } from "next";
import { ButtonLink, CheckItem, Eyebrow, Faq, Section, SectionHead, HeroPanel } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { FunnelFooter } from "@/components/layout/FunnelChrome";
import { Proof } from "@/components/lp-somn-b/Proof";
import { StickyCta } from "@/components/lp-somn-b/StickyCta";
import { getLpSomnB } from "@/content/lp-somn-b";
import { alternatesFor, type Locale } from "@/lib/i18n";

const PATH = "/lp/somn-b";
const APPLY = "/lp/somn-b/aplicatie";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale };
  const { meta } = getLpSomnB(locale);
  return {
    title: { absolute: meta.page.title },
    description: meta.page.description,
    robots: { index: false, follow: true },
    alternates: alternatesFor(PATH, locale),
  };
}

/** Sleep campaign, variant B — step 1 of 3: the case study. "Apply" goes to /lp/somn-b/aplicatie. */
export default async function LpSomnBPage({ params }: Props) {
  const { locale } = (await params) as { locale: Locale };
  const c = getLpSomnB(locale);
  const { hero, whatWeDo, story, brainmap, proof, notFor, faq } = c.page;

  return (
    <div className="pb-24 sm:pb-0">
      {/* HERO — case study */}
      <HeroPanel>
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1 className="t-h1">
            {hero.titleBefore}
            <em>{hero.titleEm}</em>
            {hero.titleAfter}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-on-dark-soft sm:text-xl">
            {hero.subLine}
            <br />
            <strong className="font-semibold text-on-dark">{hero.subStrong}</strong>
            {hero.subRest}
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-sm font-semibold text-on-dark-soft">
            <span>{hero.videoTag}</span>
            <span>{hero.videoLen}</span>
          </div>
          <VideoPlayer video="lpSomnBCaseStudy" title={`${hero.videoTag} · ${hero.videoLen}`} />
          <p className="mt-4 text-center text-on-dark-soft">{hero.videoNote}</p>
        </div>

        <div className="mt-10 text-center">
          <ButtonLink href={APPLY} size="lg" className="w-full sm:w-auto">
            {c.cta.applyArrow}
          </ButtonLink>
          <p className="mt-4 text-sm text-on-dark-soft">{hero.ctaSub}</p>
        </div>

        <dl className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-[var(--radius)] border border-on-dark/15 bg-on-dark/15 sm:grid-cols-3">
          {hero.stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse bg-dark/50 px-6 py-6 text-center">
              <dt className="mt-1 text-on-dark-soft">{s.label}</dt>
              <dd className="font-display text-4xl text-on-dark sm:text-5xl">{s.num}</dd>
            </div>
          ))}
        </dl>
      </HeroPanel>

      {/* WHAT WE DO */}
      <Section>
        <Reveal>
          <SectionHead title={whatWeDo.title} lead={whatWeDo.text} />
        </Reveal>
        <Reveal>
          <ul className="grid gap-x-10 gap-y-5 text-lg sm:grid-cols-2 sm:text-xl">
            {whatWeDo.benefits.map((b) => (
              <CheckItem key={b}>{b}</CheckItem>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* STORY — before / after */}
      <Section tone="alt">
        <Reveal>
          <SectionHead title={story.title} />
        </Reveal>
        <Reveal className="max-w-3xl space-y-5">
          <p className="text-xl font-medium sm:text-2xl">{story.lead}</p>
          <p className="text-lg text-ink-soft">{story.text}</p>
        </Reveal>

        <Reveal className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-[var(--radius)] border border-line bg-surface p-7 text-ink sm:p-8">
            <p className="mb-5 text-sm font-semibold text-danger">{story.beforeTag}</p>
            <ul className="space-y-4 text-lg">
              {story.before.map((x) => (
                <CheckItem key={x} negative>
                  {x}
                </CheckItem>
              ))}
            </ul>
          </div>
          <div className="rounded-[var(--radius)] border-2 border-accent bg-surface p-7 text-ink sm:p-8">
            <p className="mb-5 text-sm font-semibold text-accent">{story.afterTag}</p>
            <ul className="space-y-4 text-lg">
              {story.after.map((x) => (
                <CheckItem key={x}>{x}</CheckItem>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <p className="mx-auto mt-12 max-w-2xl text-center font-display text-2xl sm:text-3xl">{story.closing}</p>
        </Reveal>
      </Section>

      {/* WHAT BRAINMAP IS */}
      <Section tone="dark">
        <Reveal>
          <SectionHead title={brainmap.title} lead={brainmap.text} />
        </Reveal>
        <ol className="grid gap-px overflow-hidden rounded-[var(--radius)] border border-on-dark/15 bg-on-dark/15 sm:grid-cols-2 lg:grid-cols-4">
          {brainmap.steps.map((s, i) => (
            <li key={s.title} className="bg-dark p-7">
              <span className="font-display text-5xl text-accent">{i + 1}</span>
              <h3 className="mt-4 text-2xl">{s.title}</h3>
              <p className="mt-2 text-on-dark-soft">{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12 text-center">
          <ButtonLink href={APPLY} size="lg" className="w-full sm:w-auto">
            {c.cta.applyArrow}
          </ButtonLink>
          <p className="mt-4 text-sm text-on-dark-soft">{brainmap.ctaSub}</p>
        </div>
      </Section>

      {/* SOCIAL PROOF */}
      <Section>
        <Reveal>
          <SectionHead title={proof.title} />
        </Reveal>
        <Proof videos={proof.videos} reviews={proof.reviews} locale={locale} />
      </Section>

      {/* WHO IT'S NOT FOR */}
      <Section tone="alt" narrow>
        <Reveal>
          <SectionHead title={notFor.title} />
        </Reveal>
        <Reveal>
          <ul className="space-y-5 text-lg">
            {notFor.items.map((x) => (
              <CheckItem key={x} negative>
                {x}
              </CheckItem>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* FAQ */}
      <Section narrow>
        <Reveal>
          <SectionHead title={faq.title} />
        </Reveal>
        <Faq items={faq.items} />
        <div className="mt-12 text-center">
          <ButtonLink href={APPLY} size="lg" className="w-full sm:w-auto">
            {c.cta.applyArrow}
          </ButtonLink>
          <p className="mt-4 text-sm text-ink-soft">{faq.ctaSub}</p>
        </div>
      </Section>

      <FunnelFooter locale={locale} legal={c.legal} />
      <StickyCta href={APPLY} label={c.cta.applyArrow} />
    </div>
  );
}
