import { ButtonLink, Container, TickIcon, buttonClass, keepHyphenated } from "@/components/ui/primitives";
import { Photo } from "@/components/ui/Photo";
import { ArrowIcon, PhoneIcon } from "@/components/ui/icons";
import { EegTrace } from "@/components/home/EegTrace";
import type { HomeContent } from "@/content/pages/home";
import type { Locale } from "@/lib/i18n";
import { CLINIC } from "@/lib/site";

/**
 * Section 1 — the promise. An inset, rounded navy panel (it sits inside the
 * page like a framed picture, not edge to edge). Left: small label, one
 * headline, one line, three short facts, the main action (solid) + the
 * phone (outline). Bottom: three facts in a row, split by hairlines.
 * The photo fills the panel on phones; from 1024px it takes the right half
 * only (`.hero-photo`), so the specialist is shown at a natural size.
 */
export function HomeHero({ hero, locale }: { hero: HomeContent["hero"]; locale: Locale }) {
  return (
    <section className="bg-bg px-2 pb-2 sm:px-3 sm:pb-3">
      <div data-tone="dark" className="bg-vital relative isolate overflow-hidden rounded-[var(--radius-media)] text-on-dark">
        <div aria-hidden="true" className="hero-photo absolute inset-0 -z-20">
          {/* The specialist sits on the right, away from the text. */}
          <Photo image="homeHero" locale={locale} width={2000} priority className="hero-settle object-[80%_45%] lg:object-[50%_55%]" />
        </div>
        <div aria-hidden="true" className="hero-veil absolute inset-0 -z-10" />

        <Container className="flex min-h-[calc(100svh-var(--header-h)-0.5rem)] flex-col !px-5 pb-6 pt-9 sm:!px-10 sm:pb-10 sm:pt-16 lg:min-h-[min(calc(100svh-var(--header-h)-0.75rem),54rem)] lg:!px-16 lg:pb-8 lg:pt-10">
          <div className="max-w-[40rem] lg:max-w-[42rem]">
            <p className="rise-in mt-2 inline-flex items-center gap-2.5 text-[0.95rem] font-semibold text-accent sm:mt-6 lg:mt-10" style={{ animationDelay: "60ms" }}>
              <span aria-hidden="true" className="h-1.5 w-1.5 flex-none rounded-full bg-current" />
              {hero.eyebrow}
            </p>
            <h1 className="t-h1 rise-in mt-4 sm:mt-5" style={{ animationDelay: "120ms" }}>
              {hero.title}
            </h1>
            <p className="rise-in mt-5 max-w-[34rem] text-base leading-relaxed text-on-dark/90 sm:mt-6 sm:text-xl" style={{ animationDelay: "190ms" }}>
              {hero.lead}
            </p>

            <ul className="rise-in mt-5 flex flex-wrap gap-x-5 gap-y-1.5 text-base sm:mt-7 sm:text-lg" style={{ animationDelay: "260ms" }}>
              {hero.benefits.map((b) => (
                <li key={b} className="flex items-center gap-2 whitespace-nowrap">
                  <TickIcon className="flex-none text-accent" />
                  <span className="text-on-dark/95">{b}</span>
                </li>
              ))}
            </ul>

            <div className="rise-in mt-7 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4" style={{ animationDelay: "400ms" }}>
              <ButtonLink href="/brainmap" size="lg" className="w-full !px-5 sm:w-auto sm:!px-9">
                {hero.cta}
                <ArrowIcon />
              </ButtonLink>
              <a href={CLINIC.phoneHref} aria-label={`${hero.phoneLabel}: ${CLINIC.phone}`} className={buttonClass("outline", "lg", "w-full !px-7 sm:w-auto")}>
                <PhoneIcon size={19} className="text-accent" />
                <span className="whitespace-nowrap tabular-nums">{CLINIC.phone}</span>
              </a>
            </div>
          </div>

          {/* Three facts split by hairlines, the EEG line running quietly behind them. */}
          <div className="relative mt-auto pt-12 sm:pt-16 lg:pt-8">
            <EegTrace draw className="pointer-events-none absolute inset-x-0 top-[45%] -z-10 hidden max-w-5xl opacity-40 md:block lg:hidden" strokeWidth={1.2} />
            <ul className="grid border-t border-white/20 md:max-w-4xl md:grid-cols-3">
              {hero.stats.map((s, i) => (
                <li
                  key={s.value}
                  className="rise-in flex items-baseline gap-4 border-b border-white/12 py-3 last:border-b-0 md:flex-col md:gap-2 md:border-b-0 md:border-l md:border-white/20 md:py-0 md:pl-6 md:pt-6 md:first:border-l-0 md:first:pl-0"
                  style={{ animationDelay: `${640 + i * 110}ms` }}
                >
                  <span className="w-[6.75rem] flex-none whitespace-nowrap font-display text-[1.75rem] leading-none tabular-nums md:w-auto md:text-[2.6rem] lg:text-[2.4rem]">
                    {s.value}
                  </span>
                  <span className="text-base leading-snug text-on-dark/85">{keepHyphenated(s.label)}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </section>
  );
}

