import type { Metadata } from "next";
import { alternatesFor, type Locale } from "@/lib/i18n";
import { team as ro } from "@/content/pages/ro/team";
import { team as en } from "@/content/pages/en/team";
import { CtaBand, PageHero } from "@/components/pages/shared";
import { TeamGrid, WorkTogether } from "@/components/pages/team";

type Props = { params: Promise<{ locale: string }> };

const content = (locale: Locale) => (locale === "en" ? en : ro);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const c = content(locale);
  return { title: c.seo.title, description: c.seo.description, alternates: alternatesFor("/echipa", locale) };
}

export default async function TeamPage({ params }: Props) {
  const locale = (await params).locale as Locale;
  const c = content(locale);
  return (
    <>
      <PageHero content={c.hero} image="consultCouch" locale={locale} />
      <TeamGrid content={c.members} />
      <WorkTogether content={c.together} />
      <CtaBand content={c.cta} />
    </>
  );
}
