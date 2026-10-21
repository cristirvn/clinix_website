import type { Metadata } from "next";
import { alternatesFor, type Locale } from "@/lib/i18n";
import { pricing as ro } from "@/content/pages/ro/pricing";
import { pricing as en } from "@/content/pages/en/pricing";
import { CtaBand, PageHero } from "@/components/pages/shared";
import { FeaturedOffer, PriceList, PricingFaq } from "@/components/pages/pricing";

type Props = { params: Promise<{ locale: string }> };

const content = (locale: Locale) => (locale === "en" ? en : ro);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const c = content(locale);
  return { title: c.seo.title, description: c.seo.description, alternates: alternatesFor("/tarife", locale) };
}

export default async function PricingPage({ params }: Props) {
  const c = content((await params).locale as Locale);
  return (
    <>
      <PageHero content={c.hero} />
      <FeaturedOffer content={c.featured} />
      <PriceList content={c.list} />
      <PricingFaq content={c.faq} />
      <CtaBand content={c.cta} />
    </>
  );
}
