import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { getTestimonialsPage, quoteTestimonials } from "@/content/testimonials";
import { CtaBand, PageHero } from "@/components/pages/shared";
import { QuoteTestimonials, VideoTestimonials, cmsToStories, staticQuoteStories } from "@/components/pages/testimonials";
import { getAllCmsTestimonials } from "@/lib/cms";
import { NAV_SERVICES } from "@/components/layout/nav";
import { getTherapist } from "@/content/therapists";
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
 * `/testimoniale` — every testimonial. Videos: all from /admin, in its order.
 * Quotes: the ones added in /admin, then the Google reviews from
 * `content/testimonials/items.ts`. Each card is tagged with its service.
 */
export default async function TestimonialsPage({ params }: Props) {
  const locale = (await params).locale as Locale;
  const page = getTestimonialsPage(locale);
  const dict = getDictionary(locale);
  const cms = cmsToStories(await getAllCmsTestimonials(), locale, (t) => {
    // Tag = the service chosen in /admin, else its first service page; one ticked only for a psychotherapist's page links to that page.
    const s = NAV_SERVICES.find((n) => n.slug === t.topic) ?? NAV_SERVICES.find((n) => t.services.includes(n.slug));
    if (s) return { label: s[locale], href: `/servicii/${s.slug}` };
    const therapist = t.services.map((p) => getTherapist(locale, p)).find(Boolean);
    return therapist ? { label: therapist.name, href: `/psihoterapeut/${therapist.slug}` } : undefined;
  });
  const videos = cms.videos;
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
