import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { getCareers } from "@/content/careers";
import { PageHero } from "@/components/pages/shared";
import { CareersApply, CareersRoles, CareersWhy } from "@/components/pages/careers";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbs } from "@/components/seo/schema";
import { pageMetadata } from "@/components/seo/meta";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const { seo } = getCareers(locale);
  return pageMetadata({ title: seo.title, description: seo.description, path: "/cariere", locale });
}

export default async function CareersPage({ params }: Props) {
  const locale = (await params).locale as Locale;
  const c = getCareers(locale);
  const dict = getDictionary(locale);
  return (
    <>
      <JsonLd data={breadcrumbs(locale, dict.nav.home, [{ name: c.seo.title, path: "/cariere" }])} />
      <PageHero content={c.hero} />
      <CareersWhy content={c.why} />
      <CareersRoles content={c.roles} />
      <CareersApply content={c.form} roles={c.roles.items} />
    </>
  );
}
