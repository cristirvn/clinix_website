import { ButtonLink } from "@/components/ui/primitives";
import { Photo } from "@/components/ui/Photo";
import type { HomeContent } from "@/content/pages/home";
import type { Locale } from "@/lib/i18n";

/**
 * Section 1 — full-width petrol band over a clinic photo, centred: one promise,
 * the main button (BrainMap) + the quick-diagnostic button. The four facts sit
 * below as white cards that overlap the band's bottom edge.
 */
export function HomeHero({ hero, locale }: { hero: HomeContent["hero"]; locale: Locale }) {
  return (
    <>
      <section data-tone="dark" className="bg-dark relative isolate overflow-hidden text-on-dark">
        <div aria-hidden="true" className="absolute inset-0 -z-20">
          <Photo image="scan" locale={locale} width={2000} priority className="object-[70%_center]" />
        </div>
        <div aria-hidden="true" className="bg-vital absolute inset-0 -z-10 !bg-dark/80" />

        <div className="mx-auto max-w-5xl px-5 pb-36 pt-16 text-center sm:px-8 sm:pb-48 sm:pt-24 lg:pb-56 lg:pt-28">
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
        </div>
      </section>

      <div className="relative z-10 mx-auto -mt-24 max-w-7xl px-5 sm:-mt-32 sm:px-8 lg:-mt-36">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {hero.facts.map((fact, i) => (
            <li
              key={fact}
              className="flex items-center gap-4 rounded-[var(--radius)] border-t-4 border-primary bg-surface px-6 py-6 text-ink shadow-[var(--shadow-card)] sm:flex-col sm:items-start sm:gap-5 sm:py-8"
            >
              <span className="font-display text-3xl font-bold leading-none text-primary sm:text-4xl">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-lg font-semibold leading-snug">{fact}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
