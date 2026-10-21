import type { Metadata } from "next";
import { ButtonLink, Faq, Section, SectionHead } from "@/components/ui/primitives";
import { TriageOptions } from "@/components/quiz/TriageOptions";
import { QuizGrid } from "@/components/quiz/QuizGrid";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeAbout } from "@/components/home/HomeAbout";
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
      <HomeHero hero={c.hero} />

      {/* 2 · Quick diagnostic — each answer opens the matching test. */}
      <Section tone="alt" id="diagnostic">
        <SectionHead eyebrow={c.triage.eyebrow} title={c.triage.title} lead={c.triage.lead} />
        <TriageOptions locale={locale} />
      </Section>

      {/* 3 · Free tests. */}
      <Section id="teste">
        <SectionHead eyebrow={c.tests.eyebrow} title={c.tests.title} lead={c.tests.lead} />
        <QuizGrid locale={locale} limit={6} />
        <div className="mt-12">
          <ButtonLink href="/chestionare" variant="outline" size="lg" className="w-full sm:w-auto">
            {c.tests.all}
          </ButtonLink>
        </div>
      </Section>

      {/* 4 · FAQ. */}
      <Section tone="alt" id="faq" narrow>
        <SectionHead eyebrow={c.faq.eyebrow} title={c.faq.title} />
        <Faq items={c.faq.items} />
      </Section>

      {/* 5 · Who we are & who recommends us. */}
      <HomeAbout about={c.about} proof={c.proof} />

      {/* Closing CTA band. */}
      <FinalCta final={c.final} />
    </>
  );
}
