import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { alternatesFor, isLocale } from "@/lib/i18n";
import { BRAINMAP_LP_SLUGS, getBrainmapFixed, getBrainmapLp } from "@/content/lps";
import { BrainmapLanding } from "@/components/lp/BrainmapLanding";
import { JsonLd } from "@/components/seo/JsonLd";
import { landingPageNode } from "@/components/seo/schema";
import { getCondition, type ConditionId } from "@/content/conditions";

/**
 * The eight BrainMap condition LPs (`/lp/<slug>`), RO + EN. somn, somn-b and
 * emsella have their own folders. Indexable (Nov 2026: the client wants SEO /
 * GEO straight on the LPs) and listed in the sitemap; articles about the same
 * condition link here and are listed at the bottom of the page.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return BRAINMAP_LP_SLUGS.map((slug) => ({ slug }));
}

type Params = Promise<{ locale: string; slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const lp = getBrainmapLp(locale, slug);
  if (!lp) return {};
  return {
    // The title already carries the brand, so bypass the layout template.
    title: { absolute: lp.seo.title },
    description: lp.hero.lede,
    alternates: alternatesFor(`/lp/${slug}`, locale),
  };
}

export default async function BrainmapLpPage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const lp = getBrainmapLp(locale, slug);
  if (!lp || slug === "general") notFound();
  const condition = getCondition(locale, lp.slug as ConditionId);
  return (
    <>
      <JsonLd
        data={landingPageNode({
          path: `/lp/${slug}`,
          name: lp.seo.title,
          description: lp.hero.lede,
          condition: condition?.title,
          locale,
        })}
      />
      <BrainmapLanding locale={locale} lp={lp} fixed={getBrainmapFixed(locale)} formId={`lp-${lp.slug}`} />
    </>
  );
}
