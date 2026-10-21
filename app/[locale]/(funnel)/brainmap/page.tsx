import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { alternatesFor, isLocale } from "@/lib/i18n";
import { getBrainmapFixed, getBrainmapLp } from "@/content/lps";
import { BrainmapLanding } from "@/components/lp/BrainmapLanding";

/**
 * /brainmap — the general BrainMap page (home page's main button). Same
 * template as the condition LPs, general copy, VSL right after the hero.
 * Leads → GHL form `brainmap-general` (warm-up sequences run there). Indexable.
 */
type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const lp = getBrainmapLp(locale, "general");
  return {
    title: { absolute: lp?.seo.title ?? "BrainMap — Emmanuel CliniX" },
    description: lp?.hero.lede,
    alternates: alternatesFor("/brainmap", locale),
  };
}

export default async function BrainmapPage({ params }: { params: Params }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const lp = getBrainmapLp(locale, "general");
  if (!lp) notFound();
  return <BrainmapLanding locale={locale} lp={lp} fixed={getBrainmapFixed(locale)} formId="brainmap-general" vslFirst />;
}
