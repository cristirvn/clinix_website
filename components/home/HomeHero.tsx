import { L } from "@/components/ui/L";
import { ButtonLink } from "@/components/ui/primitives";
import { Photo } from "@/components/ui/Photo";
import type { HomeContent } from "@/content/pages/home";
import type { Locale } from "@/lib/i18n";

/**
 * Section 1 — one promise, the main button (BrainMap → /brainmap), the four
 * facts as a quiet ticked list, and further down a soft second step (the quick
 * test). Desktop: text left, clinic photo in a rounded panel on the right, on
 * white. Phones: the same photo becomes the background under a navy veil.
 * One <Photo> serves both layouts (absolute on phones, a grid cell on desktop).
 */
export function HomeHero({ hero, locale }: { hero: HomeContent["hero"]; locale: Locale }) {
  return (
    <section className="relative isolate overflow-hidden bg-dark text-on-dark lg:bg-bg lg:text-ink">
      <div className="mx-auto max-w-7xl px-5 pb-14 pt-14 sm:px-8 sm:pb-20 sm:pt-24 lg:grid lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:pb-24 lg:pt-20">
        <div>
          <p className="mb-6 text-[0.8rem] font-semibold uppercase tracking-[0.22em] text-on-dark-soft lg:text-primary">{hero.eyebrow}</p>
          <h1 className="max-w-3xl text-[2.9rem] leading-[1] sm:text-7xl lg:text-[4.6rem]">{hero.title}</h1>
          <p className="mt-7 max-w-2xl text-lg text-on-dark-soft sm:text-xl lg:text-ink-soft">{hero.lead}</p>

          <ButtonLink href="/brainmap" size="lg" className="mt-10 w-full !px-6 !text-base sm:w-auto sm:!px-10 sm:!text-lg">
            {hero.cta}
          </ButtonLink>

          <ul className="mt-10 grid max-w-2xl grid-cols-2 gap-x-5 gap-y-3 text-[0.95rem] text-on-dark-soft sm:text-base lg:text-ink-soft">
            {hero.facts.map((fact) => (
              <li key={fact} className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-0.5 font-bold text-on-dark lg:text-primary">✓</span>
                <span>{fact}</span>
              </li>
            ))}
          </ul>

          <p className="mt-10 max-w-2xl border-t border-on-dark/15 pt-7 text-lg lg:border-line">
            <span className="text-on-dark-soft lg:text-ink-soft">{hero.testPrompt}</span>{" "}
            <L href="/evaluare" className="whitespace-nowrap font-semibold underline decoration-1 underline-offset-[6px] hover:opacity-75 lg:text-primary">
              {hero.testCta}
            </L>
          </p>
        </div>

        <div className="absolute inset-0 -z-20 lg:relative lg:inset-auto lg:z-auto lg:aspect-[4/5] lg:max-h-[640px] lg:w-full lg:overflow-hidden lg:rounded-[var(--radius)] lg:bg-bg-alt lg:shadow-[var(--shadow-soft)]">
          <Photo image="consultWarm" locale={locale} width={1400} priority className="object-[60%_center]" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-dark/80 lg:hidden" />
    </section>
  );
}
