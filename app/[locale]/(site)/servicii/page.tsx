import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { getServiceList, getServices } from "@/content/services";
import { CtaBand, PageHero } from "@/components/pages/shared";
import { ServiceCards } from "@/components/pages/services";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbs } from "@/components/seo/schema";
import { pageMetadata } from "@/components/seo/meta";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const { seo } = getServices(locale).index;
  return pageMetadata({ title: seo.title, description: seo.description, path: "/servicii", locale });
}

/** `/servicii` — the five service pages as cards. */
export default async function ServicesPage({ params }: Props) {
  const locale = (await params).locale as Locale;
  const { index, ui } = getServices(locale);
  const dict = getDictionary(locale);
  return (
    <>
      <JsonLd data={breadcrumbs(locale, dict.nav.home, [{ name: ui.breadcrumb, path: "/servicii" }])} />
      <PageHero content={index.hero} />
      <ServiceCards index={index} services={getServiceList(locale)} locale={locale} />
      <CtaBand content={index.cta} />
    </>
  );
}
