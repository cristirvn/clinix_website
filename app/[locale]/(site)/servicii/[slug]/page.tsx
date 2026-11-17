import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCALES, isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { SERVICE_SLUGS, getService, getServices, isServiceSlug } from "@/content/services";
import { getCondition } from "@/content/conditions";
import { CtaBand } from "@/components/pages/shared";
import { ServiceFaq, ServiceHelps, ServiceHero, ServiceSafety, ServiceSession, ServiceWhat } from "@/components/pages/services";
import { ServiceTestimonials } from "@/components/pages/testimonials";
import { TherapistsSection } from "@/components/therapists/TherapistsSection";
import { getTherapistUi } from "@/content/therapists";
import { getServiceTestimonials } from "@/lib/cms";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbs, faqPage, serviceNodes } from "@/components/seo/schema";
import { pageMetadata } from "@/components/seo/meta";

/**
 * One page per device / service. Slugs are identical in both languages.
 * Unknown slugs 404 via `notFound()`. No `dynamicParams = false`: it breaks the
 * on-demand revalidation that /admin triggers after a save.
 */

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => SERVICE_SLUGS.map((slug) => ({ locale, slug })));
}

type Params = Promise<{ locale: string; slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const service = getService(locale, slug);
  if (!service) return {};
  return pageMetadata({ title: service.seo.title, description: service.seo.description, path: `/servicii/${slug}`, locale });
}

export default async function ServicePage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const service = getService(locale, slug);
  if (!service || !isServiceSlug(slug)) notFound();
  const { ui } = getServices(locale);
  // Testimonials the clinic manages in /admin (the video link comes through the layout).
  const testimonials = await getServiceTestimonials(slug);
  const dict = getDictionary(locale);
  const conditions = service.helps.conditions.flatMap((id) => {
    const c = getCondition(locale, id);
    return c ? [{ id: c.id, title: c.title }] : [];
  });

  return (
    <>
      <JsonLd
        data={[
          serviceNodes(service, locale),
          faqPage(service.faq.items),
          breadcrumbs(locale, dict.nav.home, [
            { name: ui.breadcrumb, path: "/servicii" },
            { name: service.card.name, path: `/servicii/${slug}` },
          ]),
        ]}
      />
      <ServiceHero service={service} />
      {/* Psychotherapy: pick a psychotherapist first, then the testimonials (empty frames until the clinic adds some). */}
      {slug === "psihoterapie" && <TherapistsSection locale={locale} />}
      <ServiceTestimonials
        items={testimonials}
        ui={ui.testimonials}
        locale={locale}
        placeholder={slug === "psihoterapie" ? getTherapistUi(locale).testimonials.placeholder : undefined}
      />
      <ServiceWhat content={service.what} />
      <ServiceSession content={service.session} />
      <ServiceHelps content={service.helps} conditions={conditions} linkLabel={ui.conditionLink} />
      <ServiceSafety content={service.safety} />
      <ServiceFaq content={service.faq} />
      <CtaBand content={service.cta} />
    </>
  );
}
