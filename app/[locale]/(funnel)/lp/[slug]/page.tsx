import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { alternatesFor, isLocale } from "@/lib/i18n";
import { BRAINMAP_LP_SLUGS, getBrainmapFixed, getBrainmapLp } from "@/content/lps";
import { BrainmapLanding } from "@/components/lp/BrainmapLanding";

/**
 * The eight BrainMap condition LPs (`/lp/<slug>`), RO + EN. somn, somn-b and
 * emsella have their own folders. Paid traffic only → noindex.
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
    alternates: alternatesFor(`/lp/${slug}`, locale),
    robots: { index: false, follow: true },
  };
}

export default async function BrainmapLpPage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const lp = getBrainmapLp(locale, slug);
  if (!lp || slug === "general") notFound();
  return <BrainmapLanding locale={locale} lp={lp} fixed={getBrainmapFixed(locale)} formId={`lp-${lp.slug}`} />;
}
