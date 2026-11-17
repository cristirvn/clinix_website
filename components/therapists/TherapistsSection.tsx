import { Section, SectionHead } from "@/components/ui/primitives";
import { TherapistCarousel } from "@/components/therapists/TherapistCarousel";
import { getTherapistList, getTherapistUi, withName } from "@/content/therapists";
import type { Locale } from "@/lib/i18n";

/** /servicii/psihoterapie — "Alege-ți psihoterapeutul": one card per psychotherapist, each opening their own page. */
export function TherapistsSection({ locale }: { locale: Locale }) {
  const ui = getTherapistUi(locale).carousel;
  const items = getTherapistList(locale).map((t) => ({
    slug: t.slug,
    name: t.name,
    role: t.role,
    short: t.card.short,
    focus: t.card.focus,
    photo: t.photo,
    more: withName(ui.more, t.firstName),
  }));
  return (
    <Section id="psihoterapeuti">
      <SectionHead title={ui.title} lead={ui.lead} />
      <TherapistCarousel items={items} prev={ui.prev} next={ui.next} />
    </Section>
  );
}
