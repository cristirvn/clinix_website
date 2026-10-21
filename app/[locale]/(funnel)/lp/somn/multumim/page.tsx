import type { Metadata } from "next";
import { alternatesFor, type Locale } from "@/lib/i18n";
import { getLpSomn } from "@/content/lp-somn";
import { LpSomnThanks } from "@/components/lp-somn/LpSomnThanks";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  return {
    title: getLpSomn(locale).thanks.meta.title,
    robots: { index: false, follow: false },
    alternates: alternatesFor("/lp/somn/multumim", locale),
  };
}

export default async function Page({ params }: Params) {
  const locale = (await params).locale as Locale;
  return <LpSomnThanks c={getLpSomn(locale)} locale={locale} />;
}
