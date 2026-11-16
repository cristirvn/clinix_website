import { ButtonLink, Container, TickIcon, buttonClass } from "@/components/ui/primitives";
import { Photo } from "@/components/ui/Photo";
import { GlassRefraction } from "@/components/ui/GlassRefraction";
import { ArrowIcon, PhoneIcon } from "@/components/ui/icons";
import { EegTrace } from "@/components/home/EegTrace";
import type { HomeContent } from "@/content/pages/home";
import type { Locale } from "@/lib/i18n";
import { CLINIC } from "@/lib/site";

/**
 * Section 1 — the promise. An inset, rounded navy panel (it sits inside the
 * page like a framed picture, not edge to edge). Left: small label, one
 * headline, one line, three short facts, the main action + the phone, both
 * on refracting liquid glass. Bottom: three facts on glass tiles.
 * The photo fills the panel on phones; from 1024px it takes the right half
 * only (`.hero-photo`), so the specialist is shown at a natural size.
 */
export function HomeHero({ hero, locale }: { hero: HomeContent["hero"]; locale: Locale }) {
  return (
    <section className="bg-bg px-2 pb-2 sm:px-3 sm:pb-3">
      <div data-tone="dark" className="bg-vital relative isolate overflow-hidden rounded-[26px] text-on-dark sm:rounded-[36px]">
        <div aria-hidden="true" className="hero-photo absolute inset-0 -z-20">
          {/* The specialist sits on the right, away from the text. */}
          <Photo image="homeHero" locale={locale} width={2000} priority className="hero-settle object-[80%_45%] lg:object-[50%_55%]" />
        </div>
        <div aria-hidden="true" className="hero-veil absolute inset-0 -z-10" />

        <Container className="flex min-h-[calc(100svh-var(--header-h)-0.5rem)] flex-col !px-5 pb-6 pt-9 sm:!px-10 sm:pb-10 sm:pt-16 lg:min-h-[min(calc(100svh-var(--header-h)-0.75rem),54rem)] lg:!px-16 lg:pb-8 lg:pt-10">
          <div className="max-w-[40rem] lg:max-w-[42rem]">
            <p className="rise-in mt-2 text-[0.875rem] font-semibold uppercase tracking-[0.18em] text-accent sm:mt-6 lg:mt-10" style={{ animationDelay: "60ms" }}>
              {hero.eyebrow}
            </p>
            <h1 className="rise-in mt-4 text-[2.6rem] leading-[1.02] sm:mt-5 sm:text-6xl lg:text-7xl" style={{ animationDelay: "120ms" }}>
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
              <ButtonLink href="/brainmap" size="lg" refract className="group w-full !px-5 sm:w-auto sm:!px-9">
                {hero.cta}
                <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </ButtonLink>
              <a href={CLINIC.phoneHref} aria-label={`${hero.phoneLabel}: ${CLINIC.phone}`} className={buttonClass("glass", "lg", "w-full !px-7 sm:w-auto")}>
                <GlassRefraction />
                <PhoneIcon size={19} className="text-accent" />
                <span className="whitespace-nowrap tabular-nums">{CLINIC.phone}</span>
              </a>
            </div>
          </div>

          {/* Three facts on liquid glass, the EEG line running quietly behind them. */}
          <div className="relative mt-auto pt-14 sm:pt-16 lg:pt-8">
            <EegTrace draw className="pointer-events-none absolute inset-x-0 top-[45%] -z-10 hidden max-w-5xl opacity-50 md:block lg:hidden" strokeWidth={1.2} />
            <ul className="grid gap-2.5 md:max-w-4xl md:grid-cols-3 md:gap-4">
              {hero.stats.map((s, i) => (
                <li
                  key={s.value}
                  className="liquid-glass rise-in flex items-center gap-4 rounded-[20px] px-5 py-3.5 md:flex-col md:items-start md:gap-2 md:rounded-[24px] md:px-7 md:py-6 lg:px-6 lg:py-5"
                  style={{ animationDelay: `${640 + i * 110}ms` }}
                >
                  <span className="w-[7.25rem] flex-none whitespace-nowrap font-display text-[1.9rem] leading-none md:w-auto md:text-[2.8rem] lg:w-auto lg:text-[2.3rem]">
                    {s.value}
                  </span>
                  <span className="text-base leading-snug text-on-dark/90">{keepHyphenated(s.label)}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </section>
  );
}

/** Never break a hyphenated word ("non-invazivă") across two lines. */
function keepHyphenated(text: string) {
  return text.split(/(\S+-\S+)/).map((part, i) =>
    i % 2 ? (
      <span key={i} className="whitespace-nowrap">
        {part}
      </span>
    ) : (
      part
    ),
  );
}
