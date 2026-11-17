import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { THERAPIST_SLUGS, getTherapist, getTherapistUi } from "@/content/therapists";
import { getServiceTestimonials } from "@/lib/cms";
import { TherapistLanding } from "@/components/therapists/TherapistLanding";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbs, faqPage, therapistNode } from "@/components/seo/schema";
import { pageMetadata } from "@/components/seo/meta";

/**
 * `/psihoterapeut/<slug>` (`/psychotherapist/<slug>` in English) — one landing
 * page per psychotherapist, reached from the carousel on /servicii/psihoterapie.
 * Indexable (people search for the therapist by name). No
 * `dynamicParams = false`: it breaks the on-demand revalidation that /admin
 * triggers after a testimonial or video is saved. Unknown slugs 404.
 */
export function generateStaticParams() {
  return THERAPIST_SLUGS.map((slug) => ({ slug }));
}

type Params = Promise<{ locale: string; slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const t = getTherapist(locale, slug);
  if (!t) return {};
  return pageMetadata({ title: t.seo.title, description: t.seo.description, path: `/psihoterapeut/${slug}`, locale });
}

export default async function TherapistPage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const t = getTherapist(locale, slug);
  if (!t) notFound();
  const ui = getTherapistUi(locale);
  const dict = getDictionary(locale);
  const testimonials = await getServiceTestimonials(t.slug);
  return (
    <>
      <JsonLd
        data={[
          therapistNode(t, locale),
          faqPage(t.faq),
          breadcrumbs(locale, dict.nav.home, [
            { name: ui.serviceName, path: "/servicii/psihoterapie" },
            { name: t.name, path: `/psihoterapeut/${t.slug}` },
          ]),
        ]}
      />
      <TherapistLanding locale={locale} therapist={t} ui={ui} testimonials={testimonials} />
    </>
  );
}
