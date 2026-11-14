import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { getTestimonialsPage, quoteTestimonials, videoTestimonials } from "@/content/testimonials";
import { CtaBand, PageHero } from "@/components/pages/shared";
import {
  QuoteTestimonials,
  VideoTestimonials,
  cmsToStories,
  staticQuoteStories,
  staticVideoStories,
} from "@/components/pages/testimonials";
import { getAllCmsTestimonials } from "@/lib/cms";
import { NAV_SERVICES } from "@/components/layout/nav";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbs } from "@/components/seo/schema";
import { pageMetadata } from "@/components/seo/meta";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const { seo } = getTestimonialsPage(locale);
  return pageMetadata({ title: seo.title, description: seo.description, path: "/testimoniale", locale });
}

/**
 * `/testimoniale` — every testimonial: first the ones added in /admin (newest
 * first, tagged with their service), then the fixed list from
 * `content/testimonials/items.ts`.
 */
export default async function TestimonialsPage({ params }: Props) {
  const locale = (await params).locale as Locale;
  const page = getTestimonialsPage(locale);
  const dict = getDictionary(locale);
  const cms = cmsToStories(await getAllCmsTestimonials(), locale, (t) => {
    const s = NAV_SERVICES.find((n) => n.slug === t.services[0]);
    return s ? { label: s[locale], href: `/servicii/${s.slug}` } : undefined;
  });
  const videos = [...cms.videos, ...staticVideoStories(videoTestimonials(), page, locale)];
  const quotes = [...cms.quotes, ...staticQuoteStories(quoteTestimonials(), page, locale)];
  return (
    <>
      <JsonLd data={breadcrumbs(locale, dict.nav.home, [{ name: page.seo.title, path: "/testimoniale" }])} />
      <PageHero content={page.hero} />
      <VideoTestimonials items={videos} page={page} />
      <QuoteTestimonials items={quotes} page={page} locale={locale} />
      <CtaBand content={page.cta} />
    </>
  );
}
