import type { Metadata } from "next";
import { LegalArticle } from "@/components/legal/LegalArticle";
import { getLegal } from "@/content/pages/legal";
import { alternatesFor, type Locale } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const doc = getLegal(locale).terms;
  return {
    title: doc.seo.title,
    description: doc.seo.description,
    alternates: alternatesFor("/termeni-si-conditii", locale),
    // TODO(owner): draft text — must be replaced by the approved legal text; remove noindex after legal review.
    robots: { index: false, follow: true },
  };
}

export default async function TermsPage({ params }: Props) {
  const locale = (await params).locale as Locale;
  return <LegalArticle doc={getLegal(locale).terms} />;
}
