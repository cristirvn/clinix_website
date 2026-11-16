import type { Metadata } from "next";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeServices } from "@/components/home/HomeServices";
import { HomeStart } from "@/components/home/HomeStart";
import { HomeQuiz } from "@/components/home/HomeQuiz";
import { HomeComplex } from "@/components/home/HomeComplex";
import { HomeTestimonials } from "@/components/home/HomeTestimonials";
import { FinalCta } from "@/components/home/FinalCta";
import { getHome } from "@/content/pages/home";
import { getTestimonialsPage, videoTestimonials } from "@/content/testimonials";
import { cmsToStories, staticVideoStories } from "@/components/pages/testimonials";
import { getAllCmsTestimonials, getCms } from "@/lib/cms";
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
 * Home, in the client's order (Nov 2026):
 * hero → methods → how to start (BrainMap) → quiz →
 * complex situations → testimonials → one short close.
 */
export default async function HomePage({ params }: Props) {
  const locale = (await params).locale as Locale;
  const c = getHome(locale);

  // Video stories: the ones added in /admin first, then the fixed list (no EmSella on the home page).
  const { media } = await getCms();
  const cms = cmsToStories(await getAllCmsTestimonials(), locale);
  const fixed = staticVideoStories(
    videoTestimonials().filter((t) => t.topic !== "emsella"),
    getTestimonialsPage(locale),
    locale,
    media,
  );
  const videos = [...cms.videos, ...fixed].slice(0, 8);

  return (
    <>
      <HomeHero hero={c.hero} locale={locale} />
      <HomeServices services={c.services} locale={locale} />
      <HomeStart start={c.start} locale={locale} />
      <HomeQuiz quiz={c.quiz} locale={locale} />
      <HomeComplex complex={c.complex} />
      <HomeTestimonials testimonials={c.testimonials} videos={videos} locale={locale} />
      <FinalCta final={c.final} locale={locale} />
    </>
  );
}
