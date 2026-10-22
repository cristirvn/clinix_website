import { ButtonLink } from "@/components/ui/primitives";
import { Photo } from "@/components/ui/Photo";
import type { HomeContent } from "@/content/pages/home";
import type { Locale } from "@/lib/i18n";

/** Closing panel — photo under a dark veil, the same single action as the hero. */
export function FinalCta({ final, locale }: { final: HomeContent["final"]; locale: Locale }) {
  return (
    <section className="px-2.5 pb-2.5 sm:px-4 sm:pb-4">
      <div className="bg-dark relative isolate overflow-hidden rounded-[28px] px-5 py-24 text-center text-on-dark sm:px-8 sm:py-36">
        <div className="absolute inset-0 -z-10">
          <Photo image="consultCouch" locale={locale} width={1800} />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/90 via-ink/65 to-ink/45" />
        <h2 className="mx-auto max-w-4xl text-[2.3rem] sm:text-6xl">{final.title}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-on-dark-soft sm:text-xl">{final.lead}</p>
        <div className="mt-10">
          <ButtonLink href="/brainmap" size="lg" className="w-full sm:w-auto">
            {final.cta}
          </ButtonLink>
        </div>
        <p className="mt-5 text-on-dark-soft">{final.note}</p>
      </div>
    </section>
  );
}
