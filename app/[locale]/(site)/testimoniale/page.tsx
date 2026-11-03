import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { getTestimonialsPage, quoteTestimonials, videoTestimonials } from "@/content/testimonials";
import { CtaBand, PageHero } from "@/components/pages/shared";
import { QuoteTestimonials, VideoTestimonials } from "@/components/pages/testimonials";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbs } from "@/components/seo/schema";
import { pageMetadata } from "@/components/seo/meta";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const { seo } = getTestimonialsPage(locale);
  return pageMetadata({ title: seo.title, description: seo.description, path: "/testimoniale", locale });
}

/** `/testimoniale` — every video + text testimonial from `content/testimonials/items.ts`. */
export default async function TestimonialsPage({ params }: Props) {
  const locale = (await params).locale as Locale;
  const page = getTestimonialsPage(locale);
  const dict = getDictionary(locale);
  return (
    <>
      <JsonLd data={breadcrumbs(locale, dict.nav.home, [{ name: page.seo.title, path: "/testimoniale" }])} />
      <PageHero content={page.hero} />
      <VideoTestimonials items={videoTestimonials()} page={page} locale={locale} />
      <QuoteTestimonials items={quoteTestimonials()} page={page} locale={locale} />
      <CtaBand content={page.cta} />
    </>
  );
}
