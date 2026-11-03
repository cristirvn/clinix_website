import { ButtonLink, Container, TickIcon } from "@/components/ui/primitives";
import { Photo } from "@/components/ui/Photo";
import { CountUp } from "@/components/ui/CountUp";
import { ArrowIcon, PhoneIcon } from "@/components/ui/icons";
import { EegTrace } from "@/components/home/EegTrace";
import type { HomeContent } from "@/content/pages/home";
import type { Locale } from "@/lib/i18n";
import { CLINIC } from "@/lib/site";

/**
 * Section 1 — BrainMap over a full-bleed photo. Left-aligned editorial
 * headline in two voices (statement + italic answer), three plain ticks, one
 * action, the phone number on the photo, and three liquid-glass facts resting
 * on the lower edge. The booking dock (HomeActions) overlaps the bottom seam,
 * so the section keeps extra room underneath.
 */
export function HomeHero({ hero, locale }: { hero: HomeContent["hero"]; locale: Locale }) {
  return (
    <section data-tone="dark" className="bg-dark relative isolate overflow-hidden text-on-dark">
      <div aria-hidden="true" className="absolute inset-0 -z-20">
        {/* Mirrored so the patient sits on the right, away from the text. */}
        <Photo image="neurofeedback" locale={locale} width={2000} priority className="-scale-x-100 object-[42%_22%] lg:object-[50%_30%]" />
      </div>
      <div aria-hidden="true" className="hero-veil absolute inset-0 -z-10" />

      <Container className="flex min-h-[calc(100svh-var(--header-h))] flex-col pb-24 pt-8 sm:pb-28 sm:pt-12 lg:min-h-[min(calc(100svh-var(--header-h)),58rem)]">
        {/* Phone on the photo: first thing on a phone, top-right on a desktop. */}
        <div className="rise-in flex lg:justify-end">
          <a
            href={CLINIC.phoneHref}
            className="liquid-glass group inline-flex items-center gap-3 rounded-full py-1.5 pl-1.5 pr-5 transition hover:-translate-y-0.5"
          >
            <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-cta text-on-cta">
              <PhoneIcon size={19} />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[0.875rem] font-semibold uppercase tracking-[0.16em] text-on-dark-soft">{hero.phoneLabel}</span>
              <span className="whitespace-nowrap text-[1.08rem] font-semibold tracking-wide">{CLINIC.phone}</span>
            </span>
          </a>
        </div>

        <div className="max-w-[38rem] pt-10 sm:pt-14 lg:pt-6">
          <p className="rise-in mb-6 flex items-center gap-3 text-[0.875rem] font-semibold uppercase tracking-[0.2em] text-accent" style={{ animationDelay: "80ms" }}>
            <span aria-hidden="true" className="h-px w-8 bg-current opacity-70" />
            {hero.eyebrow}
          </p>
          <h1 className="rise-in text-[2.75rem] leading-[1.02] sm:text-[4.2rem] lg:text-[5rem]" style={{ animationDelay: "160ms" }}>
            {hero.title}
          </h1>
          <p
            className="rise-in mt-3 font-display text-[2.1rem] italic leading-tight text-accent sm:mt-4 sm:text-5xl lg:text-[3.6rem]"
            style={{ animationDelay: "260ms" }}
          >
            {hero.subtitle}
          </p>

          <ul className="rise-in mt-9 space-y-3.5 text-[1.05rem] sm:text-lg" style={{ animationDelay: "380ms" }}>
            {hero.benefits.map((b) => (
              <li key={b} className="flex gap-3.5">
                <span aria-hidden="true" className="mt-[0.2rem] flex h-6 w-6 flex-none items-center justify-center rounded-full border border-accent/70 text-accent">
                  <TickIcon />
                </span>
                <span className="text-on-dark/95">{b}</span>
              </li>
            ))}
          </ul>

          <div className="rise-in mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6" style={{ animationDelay: "480ms" }}>
            <ButtonLink href="/brainmap" size="lg" className="group w-full sm:w-auto">
              {hero.cta}
              <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
            </ButtonLink>
            <p className="text-center text-base text-on-dark-soft sm:text-left">{hero.note}</p>
          </div>
        </div>

        {/* Three facts on liquid glass, with the EEG line running behind them. */}
        <div className="relative mt-auto pt-14 sm:pt-20">
          <EegTrace draw className="pointer-events-none absolute inset-x-0 top-[38%] -z-10 hidden opacity-60 md:block" strokeWidth={1.2} />
          <ul className="grid gap-3 sm:gap-4 md:grid-cols-3">
            {hero.stats.map((s, i) => (
              <li
                key={s.label}
                className="liquid-glass rise-in flex items-center gap-5 rounded-[20px] px-5 py-4 md:flex-col md:items-start md:gap-2 md:px-7 md:py-6"
                style={{ animationDelay: `${600 + i * 110}ms` }}
              >
                <span className="w-[7.5rem] flex-none font-display text-[2.35rem] leading-none md:w-auto md:text-[3.4rem]">
                  <CountUp value={s.value} decimals={s.decimals} suffix={s.suffix} locale={locale} delay={i * 150} />
                </span>
                <span className="text-[0.98rem] leading-snug text-on-dark/90 sm:text-base">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
