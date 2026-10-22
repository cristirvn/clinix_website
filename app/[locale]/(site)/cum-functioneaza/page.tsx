import type { Metadata } from "next";
import { alternatesFor, type Locale } from "@/lib/i18n";
import { howItWorks as ro } from "@/content/pages/ro/how-it-works";
import { howItWorks as en } from "@/content/pages/en/how-it-works";
import { CtaBand, PageHero } from "@/components/pages/shared";
import { AboutTeaser, JourneySteps, ServiceBlocks } from "@/components/pages/how-it-works";

type Props = { params: Promise<{ locale: string }> };

const content = (locale: Locale) => (locale === "en" ? en : ro);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const c = content(locale);
  return { title: c.seo.title, description: c.seo.description, alternates: alternatesFor("/cum-functioneaza", locale) };
}

export default async function HowItWorksPage({ params }: Props) {
  const locale = (await params).locale as Locale;
  const c = content(locale);
  return (
    <>
      <PageHero content={c.hero} image="scan" locale={locale} />
      <JourneySteps content={c.journey} />
      <ServiceBlocks content={c.services} />
      <AboutTeaser content={c.about} />
      <CtaBand content={c.cta} />
    </>
  );
}
