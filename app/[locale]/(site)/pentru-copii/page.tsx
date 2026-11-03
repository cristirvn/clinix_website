import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { getChildren } from "@/content/children";
import { CtaBand, PageHero } from "@/components/pages/shared";
import { ChildCheck, ChildParents, ChildSafety, ChildSigns } from "@/components/pages/children";
import { ServiceFaq } from "@/components/pages/services";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbs, faqPage } from "@/components/seo/schema";
import { pageMetadata } from "@/components/seo/meta";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const { seo } = getChildren(locale);
  return pageMetadata({ title: seo.title, description: seo.description, path: "/pentru-copii", locale });
}

/** `/pentru-copii` — attention, sleep, anxiety, learning, screens; BrainMap with the parent in the room. */
export default async function ChildrenPage({ params }: Props) {
  const locale = (await params).locale as Locale;
  const c = getChildren(locale);
  const dict = getDictionary(locale);
  return (
    <>
      <JsonLd
        data={[faqPage(c.faq.items), breadcrumbs(locale, dict.nav.home, [{ name: c.seo.title, path: "/pentru-copii" }])]}
      />
      <PageHero content={c.hero} image="consultWarm" locale={locale} />
      <ChildSigns content={c.signs} />
      <ChildCheck content={c.check} />
      <ChildParents content={c.parents} />
      <ChildSafety content={c.safety} />
      <ServiceFaq content={c.faq} />
      <CtaBand content={c.cta} />
    </>
  );
}
