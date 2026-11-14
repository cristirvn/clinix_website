import { ButtonLink, Container, TickIcon, buttonClass } from "@/components/ui/primitives";
import { Photo } from "@/components/ui/Photo";
import { CountUp } from "@/components/ui/CountUp";
import { GlassRefraction } from "@/components/ui/GlassRefraction";
import { ArrowIcon, PhoneIcon } from "@/components/ui/icons";
import { EegTrace } from "@/components/home/EegTrace";
import type { HomeContent } from "@/content/pages/home";
import type { Locale } from "@/lib/i18n";
import { CLINIC } from "@/lib/site";

/**
 * Section 1 — BrainMap. An inset, rounded photo panel (it sits inside the
 * page like a framed picture, not edge to edge). Left: a glass label, the
 * two-voice headline, three short ticks, the main action + the phone, both
 * on refracting liquid glass. Bottom: the three clinic facts on glass tiles.
 * On a phone the headline, ticks and main button fit the first screen.
 */
export function HomeHero({ hero, locale }: { hero: HomeContent["hero"]; locale: Locale }) {
  return (
    <section className="bg-bg px-2 pb-2 sm:px-3 sm:pb-3">
      <div data-tone="dark" className="bg-dark relative isolate overflow-hidden rounded-[26px] text-on-dark sm:rounded-[36px]">
        <div aria-hidden="true" className="absolute inset-0 -z-20">
          {/* Mirrored so the patient sits on the right, away from the text. */}
          <Photo
            image="neurofeedback"
            locale={locale}
            width={2000}
            priority
            className="hero-settle -scale-x-100 object-[40%_18%] lg:object-[50%_28%]"
          />
        </div>
        <div aria-hidden="true" className="hero-veil absolute inset-0 -z-10" />

        <Container className="flex min-h-[calc(100svh-var(--header-h)-0.5rem)] flex-col !px-5 pb-6 pt-9 sm:!px-10 sm:pb-10 sm:pt-16 lg:min-h-[min(calc(100svh-var(--header-h)-0.75rem),54rem)] lg:!px-16 lg:pb-8 lg:pt-10">
          <div className="max-w-[40rem] lg:max-w-[46rem]">
            <p
              className="liquid-glass rise-in inline-flex items-center gap-2.5 whitespace-nowrap rounded-full py-2 pl-3 pr-4 text-[0.875rem] font-semibold uppercase tracking-[0.1em] sm:tracking-[0.16em]"
              style={{ animationDelay: "60ms" }}
            >
              <span aria-hidden="true" className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
                <span className="relative h-2 w-2 rounded-full bg-accent" />
              </span>
              {hero.eyebrow}
            </p>

            <h1 className="rise-in mt-7 text-[2.6rem] leading-[1.02] sm:mt-8 sm:text-6xl lg:mt-6 lg:text-7xl" style={{ animationDelay: "140ms" }}>
              {hero.title}
            </h1>
            <p
              className="rise-in mt-1 font-display text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-7xl"
              style={{ animationDelay: "240ms" }}
            >
              {hero.subtitle}
            </p>

            <ul className="rise-in mt-8 space-y-3 text-[1.05rem] sm:mt-9 sm:text-lg lg:mt-7 lg:space-y-2.5" style={{ animationDelay: "340ms" }}>
              {hero.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3.5">
                  <span aria-hidden="true" className="mt-[0.2rem] flex h-6 w-6 flex-none items-center justify-center rounded-full bg-accent text-on-accent">
                    <TickIcon />
                  </span>
                  <span className="text-on-dark/95">{b}</span>
                </li>
              ))}
            </ul>

            <div className="rise-in mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row lg:mt-8 sm:items-center sm:gap-4" style={{ animationDelay: "440ms" }}>
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
            <p className="rise-in mt-4 text-center text-base text-on-dark-soft sm:text-left" style={{ animationDelay: "520ms" }}>
              {hero.note}
            </p>
          </div>

          {/* Three facts on liquid glass, the EEG line running quietly behind them. */}
          <div className="relative mt-auto pt-14 sm:pt-16 lg:pt-8">
            <EegTrace draw className="pointer-events-none absolute inset-x-0 top-[45%] -z-10 hidden max-w-5xl opacity-50 md:block lg:hidden" strokeWidth={1.2} />
            <ul className="grid gap-2.5 md:max-w-4xl md:grid-cols-3 md:gap-4">
              {hero.stats.map((s, i) => (
                <li
                  key={s.label}
                  className="liquid-glass rise-in flex items-center gap-4 rounded-[20px] px-5 py-3.5 md:flex-col md:items-start md:gap-1.5 md:rounded-[24px] md:px-7 md:py-6 lg:flex-row lg:items-center lg:gap-4 lg:px-6 lg:py-4"
                  style={{ animationDelay: `${640 + i * 110}ms` }}
                >
                  <span className="w-[6.5rem] flex-none font-display text-[2.2rem] leading-none md:w-auto md:text-[3.2rem] lg:w-auto lg:text-[2.6rem]">
                    <CountUp value={s.value} decimals={s.decimals} suffix={s.suffix} locale={locale} delay={i * 150} />
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
