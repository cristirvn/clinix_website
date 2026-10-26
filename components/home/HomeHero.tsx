import { ButtonLink } from "@/components/ui/primitives";
import { Photo } from "@/components/ui/Photo";
import type { HomeContent } from "@/content/pages/home";
import type { Locale } from "@/lib/i18n";

/**
 * Section 1 — full-width petrol band over a clinic photo, centred: one promise,
 * the main button (BrainMap) + the quick-diagnostic button, and the four facts
 * as a quiet ticked list under the buttons (no cards, nothing to scroll past).
 */
export function HomeHero({ hero, locale }: { hero: HomeContent["hero"]; locale: Locale }) {
  return (
      <section data-tone="dark" className="bg-dark relative isolate overflow-hidden text-on-dark">
        <div aria-hidden="true" className="absolute inset-0 -z-20">
          <Photo image="scan" locale={locale} width={2000} priority className="object-[70%_center]" />
        </div>
        <div aria-hidden="true" className="bg-vital absolute inset-0 -z-10 !bg-dark/80" />

        <div className="mx-auto max-w-5xl px-5 pb-14 pt-14 text-center sm:px-8 sm:pb-20 sm:pt-24 lg:pb-24 lg:pt-28">
          <p className="mb-6 text-[0.8rem] font-semibold uppercase tracking-[0.22em] text-accent">{hero.eyebrow}</p>
          <h1 className="mx-auto max-w-4xl text-[2.9rem] leading-[1] sm:text-7xl lg:text-[5.4rem]">{hero.title}</h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg text-on-dark-soft sm:text-xl">{hero.lead}</p>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
            <ButtonLink href="/brainmap" size="lg" className="w-full !px-6 !text-base sm:w-auto sm:!px-9 sm:!text-lg">
              {hero.cta}
            </ButtonLink>
            <ButtonLink href="/#diagnostic" variant="outline" size="lg" className="w-full !px-4 !text-base sm:w-auto sm:!px-9 sm:!text-lg">
              {hero.secondary}
            </ButtonLink>
          </div>

          <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-x-5 gap-y-3 border-t border-on-dark/15 pt-7 text-left text-[0.95rem] text-on-dark-soft sm:mt-12 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-8 sm:text-base">
            {hero.facts.map((fact) => (
              <li key={fact} className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-0.5 font-bold text-accent">✓</span>
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
  );
}
