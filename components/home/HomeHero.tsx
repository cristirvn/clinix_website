import { ButtonLink, Container, TickIcon, buttonClass, keepHyphenated } from "@/components/ui/primitives";
import { Photo } from "@/components/ui/Photo";
import { BlurWords } from "@/components/ui/BlurWords";
import { StatNumber } from "@/components/ui/StatNumber";
import { ArrowIcon, PhoneIcon } from "@/components/ui/icons";
import { EegLive } from "@/components/home/EegTrace";
import type { HomeContent } from "@/content/pages/home";
import type { Locale } from "@/lib/i18n";
import { CLINIC } from "@/lib/site";

/**
 * Section 1 — the promise. An inset, rounded navy panel lit from inside (two
 * palette glows + film grain), the live EEG line running through it.
 *
 * Phones: label, the headline settling in word by word, one line, the main
 * action (with its light sweep) and the phone — all inside the first screen
 * at 390×844 — then the photo dissolving up into the navy, with the three
 * facts as swipeable glass cards whose numbers roll up (NumberFlow).
 * From 1024px: text on the left, the photo filling the right half, the facts
 * as a row of glass cards along the foot.
 */
export function HomeHero({ hero, locale }: { hero: HomeContent["hero"]; locale: Locale }) {
  return (
    <section className="bg-bg px-2 pb-2 sm:px-3 sm:pb-3">
      <div data-tone="dark" className="bg-vital grain relative isolate flex flex-col overflow-hidden rounded-[var(--radius-panel)] text-on-dark lg:min-h-[min(calc(100svh-var(--header-h)-0.75rem),56rem)]">
        {/* Extra light behind the headline on phones, behind the photo on large screens. */}
        <div aria-hidden="true" className="absolute -left-24 -top-24 -z-30 h-80 w-80 rounded-full bg-[rgb(var(--glow-a)/0.35)] blur-3xl lg:left-auto lg:right-[18%] lg:top-[8%] lg:h-[34rem] lg:w-[34rem]" />

        <div aria-hidden="true" className="hero-photo absolute inset-x-0 bottom-0 -z-20 h-[27rem] sm:h-[34rem] lg:inset-y-0 lg:left-auto lg:h-auto lg:w-[54%]">
          <Photo image="homeHero" locale={locale} width={2000} priority className="hero-settle object-[72%_38%] lg:object-[50%_55%]" />
        </div>
        <div aria-hidden="true" className="hero-veil absolute inset-0 -z-10" />

        <Container className="relative flex flex-1 flex-col !px-5 pb-5 pt-7 sm:!px-10 sm:pb-10 sm:pt-14 lg:!px-16 lg:justify-center lg:pb-14 lg:pt-10">
          <div className="max-w-[40rem] lg:max-w-[48%]">
            <p className="chip rise-in" style={{ animationDelay: "40ms" }}>
              <span aria-hidden="true" className="live-dot" />
              {hero.eyebrow}
            </p>
            <h1 className="t-display mt-5 sm:mt-7 lg:mt-6">
              <BlurWords text={hero.title} delay={120} step={75} />
            </h1>
            <p className="rise-in mt-4 max-w-[34rem] text-[1.06rem] leading-relaxed text-on-dark/85 sm:mt-7 sm:text-xl lg:mt-6 lg:text-lg" style={{ animationDelay: "420ms" }}>
              {hero.lead}
            </p>

            <div className="rise-in mt-6 flex flex-col gap-2.5 sm:mt-10 sm:flex-row sm:items-center sm:gap-4 lg:mt-8 lg:flex-wrap" style={{ animationDelay: "540ms" }}>
              <ButtonLink href="/brainmap" size="lg" className="btn-shine w-full !px-5 sm:w-auto sm:!px-9">
                {hero.cta}
                <ArrowIcon />
              </ButtonLink>
              <a href={CLINIC.phoneHref} aria-label={`${hero.phoneLabel}: ${CLINIC.phone}`} className={buttonClass("outline", "lg", "w-full !px-7 sm:w-auto")}>
                <PhoneIcon size={19} className="text-accent" />
                <span className="whitespace-nowrap tabular-nums">{CLINIC.phone}</span>
              </a>
            </div>

            <ul className="rise-in mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[0.98rem] sm:mt-8 sm:gap-x-6 sm:text-lg lg:absolute lg:left-[52%] lg:top-[13%] lg:mt-0 lg:flex-col lg:items-start lg:gap-2.5 lg:text-base" style={{ animationDelay: "660ms" }}>
              {hero.benefits.map((b) => (
                <li key={b} className="flex items-center gap-2 whitespace-nowrap lg:liquid-glass lg:rounded-full lg:py-2 lg:pl-2.5 lg:pr-4">
                  <span aria-hidden="true" className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent/15 text-accent">
                    <TickIcon className="h-3 w-3" />
                  </span>
                  <span className="text-on-dark/90">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* The facts: swipeable glass cards on phones; from 1024px one glass bar over the foot of the photo. */}
          <div className="relative mt-auto pt-56 sm:pt-72 lg:static lg:pt-0">
            <EegLive className="absolute inset-x-[-1.25rem] top-24 -z-10 h-16 opacity-80 sm:top-36 lg:inset-x-0 lg:bottom-10 lg:top-auto lg:h-24 lg:opacity-55" strokeWidth={1.6} />
            <ul className="rail lg:liquid-glass lg:absolute lg:bottom-6 lg:right-6 lg:!m-0 lg:grid lg:w-[calc(54%-3rem)] lg:max-w-[44rem] lg:grid-cols-3 lg:gap-0 lg:overflow-visible lg:rounded-[var(--radius-media)] lg:!p-2 xl:bottom-8 xl:right-8">
              {hero.stats.map((s, i) => (
                <li
                  key={s.value}
                  className="max-lg:liquid-glass rise-in w-[64%] rounded-[var(--radius)] px-5 py-4 min-[480px]:w-[44%] sm:w-[30%] lg:w-auto lg:rounded-none lg:border-l lg:border-white/12 lg:first:border-l-0"
                  style={{ animationDelay: `${760 + i * 110}ms` }}
                >
                  <span className="block whitespace-nowrap font-display text-[2.1rem] font-semibold leading-none tracking-[-0.03em] xl:text-[2.4rem]">
                    <StatNumber value={s.value} locale={locale} delay={i * 150} />
                  </span>
                  <span className="mt-2 block text-base leading-snug text-on-dark/80">{keepHyphenated(s.label)}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </section>
  );
}
