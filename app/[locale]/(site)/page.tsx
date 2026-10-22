import type { Metadata } from "next";
import { ButtonLink, Faq, Section, SectionHead } from "@/components/ui/primitives";
import { TriageOptions } from "@/components/quiz/TriageOptions";
import { QuizGrid } from "@/components/quiz/QuizGrid";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeAbout, HomeProof } from "@/components/home/HomeAbout";
import { Marquee } from "@/components/home/Marquee";
import { FinalCta } from "@/components/home/FinalCta";
import { getHome } from "@/content/pages/home";
import { alternatesFor, type Locale } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const c = getHome(locale);
  return {
    title: { absolute: c.seo.title },
    description: c.seo.description,
    alternates: alternatesFor("/", locale),
  };
}

export default async function HomePage({ params }: Props) {
  const locale = (await params).locale as Locale;
  const c = getHome(locale);

  return (
    <>
      {/* 1 · Hero — one promise, one action (→ /brainmap). */}
      <HomeHero hero={c.hero} locale={locale} />
      <Marquee words={c.marquee} />

      {/* 2 · Quick diagnostic — each answer opens the matching test. */}
      <Section id="diagnostic" className="!pt-6 sm:!pt-10">
        <SectionHead center eyebrow={c.triage.eyebrow} title={c.triage.title} lead={c.triage.lead} />
        <TriageOptions locale={locale} />
      </Section>

      {/* 3 · Free tests. */}
      <Section tone="alt" id="teste">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHead eyebrow={c.tests.eyebrow} title={c.tests.title} lead={c.tests.lead} className="!mb-10" />
              <ButtonLink href="/chestionare" size="lg" className="w-full sm:w-auto">
                {c.tests.all}
              </ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-8">
            <QuizGrid locale={locale} limit={6} twoCol />
          </div>
        </div>
      </Section>

      {/* 4 · FAQ. */}
      <Section id="faq" narrow>
        <SectionHead center eyebrow={c.faq.eyebrow} title={c.faq.title} />
        <Faq items={c.faq.items} openFirst />
      </Section>

      {/* 5 · Who we are & who recommends us. */}
      <HomeAbout about={c.about} locale={locale} />
      <HomeProof proof={c.proof} />

      {/* Closing CTA. */}
      <div className="pt-20 sm:pt-28">
        <FinalCta final={c.final} locale={locale} />
      </div>
    </>
  );
}
