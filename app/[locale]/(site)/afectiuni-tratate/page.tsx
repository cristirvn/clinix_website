import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { conditionDescription, getConditions } from "@/content/conditions";
import { getQuizHub } from "@/content/quizzes";
import { getServiceList } from "@/content/services";
import { CtaBand, PageHero } from "@/components/pages/shared";
import { ConditionList, NotSureBand } from "@/components/pages/conditions";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbs } from "@/components/seo/schema";
import { pageMetadata } from "@/components/seo/meta";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const { seo } = getConditions(locale);
  return pageMetadata({ title: seo.title, description: seo.description, path: "/afectiuni-tratate", locale });
}

/**
 * `/afectiuni-tratate` — the conditions hub (replaces "Teste gratuite" in the
 * menu). Connects every test, every condition LP and the service pages.
 */
export default async function ConditionsPage({ params }: Props) {
  const locale = (await params).locale as Locale;
  const content = getConditions(locale);
  const dict = getDictionary(locale);
  const descriptions = Object.fromEntries(content.items.map((i) => [i.id, conditionDescription(locale, i)]));
  const serviceNames = Object.fromEntries(getServiceList(locale).map((s) => [s.slug, s.card.name]));

  return (
    <>
      <JsonLd data={breadcrumbs(locale, dict.nav.home, [{ name: content.seo.title, path: "/afectiuni-tratate" }])} />
      <PageHero content={content.hero} />
      <ConditionList content={content} descriptions={descriptions} serviceNames={serviceNames} />
      <NotSureBand content={getQuizHub(locale).general} disclaimer={dict.footer.disclaimer} />
      <CtaBand content={content.cta} />
    </>
  );
}
