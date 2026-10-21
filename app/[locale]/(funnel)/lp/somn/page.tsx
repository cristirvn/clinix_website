import type { Metadata } from "next";
import { alternatesFor, type Locale } from "@/lib/i18n";
import { getLpSomn } from "@/content/lp-somn";
import { LpSomnPage } from "@/components/lp-somn/LpSomnPage";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const c = getLpSomn(locale);
  return {
    title: c.meta.title,
    description: c.meta.description,
    robots: { index: false, follow: true },
    alternates: alternatesFor("/lp/somn", locale),
  };
}

export default async function Page({ params }: Params) {
  const locale = (await params).locale as Locale;
  return <LpSomnPage c={getLpSomn(locale)} locale={locale} />;
}
