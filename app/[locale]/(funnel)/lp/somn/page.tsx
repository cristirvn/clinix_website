import type { Metadata } from "next";
import { alternatesFor, type Locale } from "@/lib/i18n";
import { getLpSomn } from "@/content/lp-somn";
import { LpSomnPage } from "@/components/lp-somn/LpSomnPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { landingPageNode } from "@/components/seo/schema";
import { getCondition } from "@/content/conditions";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const c = getLpSomn(locale);
  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: alternatesFor("/lp/somn", locale),
  };
}

export default async function Page({ params }: Params) {
  const locale = (await params).locale as Locale;
  const c = getLpSomn(locale);
  return (
    <>
      <JsonLd
        data={landingPageNode({ path: "/lp/somn", name: c.meta.title, description: c.meta.description, condition: getCondition(locale, "somn")?.title, locale })}
      />
      <LpSomnPage c={c} locale={locale} />
    </>
  );
}
