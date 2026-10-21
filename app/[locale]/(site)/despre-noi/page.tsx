import type { Metadata } from "next";
import { alternatesFor, type Locale } from "@/lib/i18n";
import { about as ro } from "@/content/pages/ro/about";
import { about as en } from "@/content/pages/en/about";
import { CtaBand, PageHero } from "@/components/pages/shared";
import { ClinicSpace, Differentiators, Mission, RecommendedBy, Testimonials } from "@/components/pages/about";

type Props = { params: Promise<{ locale: string }> };

const content = (locale: Locale) => (locale === "en" ? en : ro);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const c = content(locale);
  return { title: c.seo.title, description: c.seo.description, alternates: alternatesFor("/despre-noi", locale) };
}

export default async function AboutPage({ params }: Props) {
  const c = content((await params).locale as Locale);
  return (
    <>
      <PageHero content={c.hero} />
      <Mission content={c.mission} />
      <Differentiators content={c.different} />
      <ClinicSpace content={c.space} />
      <Testimonials content={c.testimonials} />
      <RecommendedBy content={c.recommended} />
      <CtaBand content={c.cta} />
    </>
  );
}
