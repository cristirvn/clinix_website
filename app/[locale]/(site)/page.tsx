import type { Metadata } from "next";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeActions } from "@/components/home/HomeActions";
import { HomeServices } from "@/components/home/HomeServices";
import { HomeQuiz } from "@/components/home/HomeQuiz";
import { HomeProof } from "@/components/home/HomeProof";
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

/**
 * Home, in the owner's order and nothing more:
 * hero (BrainMap) → booking dock → services → first quiz question → proof → closing band.
 */
export default async function HomePage({ params }: Props) {
  const locale = (await params).locale as Locale;
  const c = getHome(locale);

  return (
    <>
      <HomeHero hero={c.hero} locale={locale} />
      <HomeActions actions={c.actions} />
      <HomeServices services={c.services} locale={locale} />
      <HomeQuiz quiz={c.quiz} locale={locale} />
      <HomeProof proof={c.proof} />
      <FinalCta final={c.final} locale={locale} />
    </>
  );
}
