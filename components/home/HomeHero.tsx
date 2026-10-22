import { ButtonLink, Eyebrow } from "@/components/ui/primitives";
import { Photo } from "@/components/ui/Photo";
import { EegTrace } from "@/components/home/EegTrace";
import type { HomeContent } from "@/content/pages/home";
import type { Locale } from "@/lib/i18n";

/**
 * Section 1 — blue panel tucked under the floating header: one promise, the
 * main button (BrainMap) + the quick-diagnostic button, and the four facts as
 * frosted cards. The brain image is drawn with `screen` so its black
 * background disappears into the blue.
 */
export function HomeHero({ hero, locale }: { hero: HomeContent["hero"]; locale: Locale }) {
  return (
    <section className="-mt-[var(--header-h)] px-2.5 pt-2.5 sm:px-4 sm:pt-3">
      <div className="bg-vital relative isolate overflow-hidden rounded-[28px] pb-8 pt-[calc(var(--header-h)+3rem)] sm:pb-10 lg:min-h-[min(100svh,58rem)] lg:pt-[calc(var(--header-h)+5rem)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[7%] top-[12%] -z-10 hidden w-[50%] opacity-80 mix-blend-screen lg:block xl:w-[54%]"
        >
          <div className="animate-float aspect-[16/10]">
            <Photo image="heroBrain" locale={locale} width={1600} priority />
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1 className="max-w-4xl text-[2.6rem] font-normal leading-[1.02] sm:text-6xl lg:max-w-[46rem] lg:text-[4.9rem]">{hero.title}</h1>
          <p className="mt-7 max-w-xl text-lg text-on-dark-soft sm:text-xl">{hero.lead}</p>

          <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
            <ButtonLink href="/brainmap" size="lg" className="w-full !px-6 !text-base sm:w-auto sm:!px-9 sm:!text-lg">
              {hero.cta}
            </ButtonLink>
            <ButtonLink href="/#diagnostic" variant="outline" size="lg" className="w-full !px-6 !text-base sm:w-auto sm:!px-9 sm:!text-lg">
              {hero.secondary}
            </ButtonLink>
          </div>

          {/* Phones / tablets: the brain sits between the buttons and the facts instead of behind the text. */}
          <div aria-hidden="true" className="-mx-5 mt-8 opacity-85 mix-blend-screen sm:mx-auto sm:max-w-xl lg:hidden">
            <div className="animate-float aspect-[16/10]">
              <Photo image="heroBrain" locale={locale} width={900} />
            </div>
          </div>

          <EegTrace className="mt-6 h-12 opacity-70 sm:h-16 lg:mt-24" />

          <ul className="mt-6 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 lg:grid-cols-4">
            {hero.facts.map((fact) => (
              <li key={fact} className="glass flex items-center gap-3 rounded-2xl px-5 py-4 text-base">
                <span aria-hidden="true" className="h-2.5 w-2.5 flex-none rounded-full bg-lime" />
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
