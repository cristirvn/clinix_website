import type { Metadata } from "next";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeServices } from "@/components/home/HomeServices";
import { HomeStart } from "@/components/home/HomeStart";
import { HomeQuiz } from "@/components/home/HomeQuiz";
import { HomeNeuroFit } from "@/components/home/HomeNeuroFit";
import { HomeComplex } from "@/components/home/HomeComplex";
import { HomeTestimonials } from "@/components/home/HomeTestimonials";
import { FinalCta } from "@/components/home/FinalCta";
import { getHome } from "@/content/pages/home";
import { cmsToStories } from "@/components/pages/testimonials";
import { getAllCmsTestimonials } from "@/lib/cms";
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
 * hero → methods → how to start (BrainMap) → quiz → NeuroFit (site colours) →
 * complex situations → testimonials → one short close.
 */
export default async function HomePage({ params }: Props) {
  const locale = (await params).locale as Locale;
  const c = getHome(locale);

  // Video stories: the /admin testimonials ticked "Acasă", in their /admin order.
  const videos = cmsToStories(
    (await getAllCmsTestimonials()).filter((t) => t.kind === "video" && t.home),
    locale,
  ).videos.slice(0, 12);

  return (
    <>
      <HomeHero hero={c.hero} locale={locale} />
      <HomeServices services={c.services} locale={locale} />
      <HomeStart start={c.start} locale={locale} />
      <HomeQuiz quiz={c.quiz} locale={locale} />
      <HomeNeuroFit neurofit={c.neurofit} locale={locale} />
      <HomeComplex complex={c.complex} />
      <HomeTestimonials testimonials={c.testimonials} videos={videos} locale={locale} />
      <FinalCta final={c.final} locale={locale} />
    </>
  );
}
