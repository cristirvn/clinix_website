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
 * Phones and tablets (client brief, Acquisition.com-style): one centred
 * column — headline across the full width, a short line, the two buttons,
 * the photo (fading into the navy, EEG line across it), then the three
 * benefits. No label chip, no fact cards.
 * From 1024px: text on the left, the photo filling the right half, the
 * benefits as glass pills over it and the facts as a row of glass cards
 * along the foot.
 */
export function HomeHero({ hero, locale }: { hero: HomeContent["hero"]; locale: Locale }) {
  return (
    <section className="bg-bg px-2 pb-2 sm:px-3 sm:pb-3">
      <div data-tone="dark" className="bg-vital grain relative isolate flex flex-col overflow-hidden rounded-[var(--radius-panel)] text-on-dark lg:min-h-[min(calc(100svh-var(--header-h)-0.75rem),56rem)]">
        {/* Extra light behind the headline on phones, behind the photo on large screens. */}
        <div aria-hidden="true" className="absolute -left-24 -top-24 -z-30 h-80 w-80 rounded-full bg-[rgb(var(--glow-a)/0.35)] blur-3xl lg:left-auto lg:right-[18%] lg:top-[8%] lg:h-[34rem] lg:w-[34rem]" />
        <div aria-hidden="true" className="hero-veil absolute inset-0 -z-10 max-lg:hidden" />

        {/* Static from 1024px so the photo, pills and fact bar are placed against the whole panel. */}
        <Container className="relative flex flex-1 flex-col !px-5 pb-8 pt-9 sm:!px-10 sm:pb-12 sm:pt-14 lg:static lg:!px-16 lg:justify-center lg:pb-14 lg:pt-10">
          <div className="mx-auto w-full max-w-[40rem] text-center lg:mx-0 lg:max-w-[48%] lg:text-left">
            <p className="chip rise-in max-lg:hidden" style={{ animationDelay: "40ms" }}>
              <span aria-hidden="true" className="live-dot" />
              {hero.eyebrow}
            </p>
            <h1 className="t-display text-balance lg:mt-6">
              <BlurWords text={hero.title} delay={120} step={75} />
            </h1>
            <p className="rise-in mx-auto mt-4 max-w-[34rem] text-[1.06rem] leading-relaxed text-on-dark/85 sm:mt-6 sm:text-xl lg:mx-0 lg:mt-6 lg:text-lg" style={{ animationDelay: "420ms" }}>
              {hero.lead}
            </p>

            <div className="rise-in mt-6 flex flex-col gap-2.5 sm:mt-9 sm:flex-row sm:justify-center sm:gap-4 lg:mt-8 lg:flex-wrap lg:items-center lg:justify-start" style={{ animationDelay: "540ms" }}>
              <ButtonLink href="/brainmap" size="lg" className="btn-shine w-full !px-5 sm:w-auto sm:!px-9">
                {hero.cta}
                <ArrowIcon />
              </ButtonLink>
              <a href={CLINIC.phoneHref} aria-label={`${hero.phoneLabel}: ${CLINIC.phone}`} className={buttonClass("outline", "lg", "w-full !px-7 sm:w-auto")}>
                <PhoneIcon size={19} className="text-accent" />
                <span className="whitespace-nowrap tabular-nums">{CLINIC.phone}</span>
              </a>
            </div>

            {/* Phones/tablets: in the flow, under the buttons. From 1024px: the right half of the panel. */}
            <div aria-hidden="true" className="hero-photo relative -mx-5 mt-6 aspect-square overflow-hidden min-[480px]:aspect-[16/11] sm:-mx-10 sm:mt-8 lg:absolute lg:inset-y-0 lg:right-0 lg:-z-20 lg:mx-0 lg:mt-0 lg:aspect-auto lg:w-[54%]">
              <Photo image="homeHero" locale={locale} width={2000} priority className="hero-settle object-[72%_62%] lg:object-[50%_55%]" />
              <EegLive className="absolute inset-x-0 top-[40%] h-16 opacity-70 lg:hidden" strokeWidth={1.6} />
            </div>

            <ul className="rise-in mt-2 flex flex-wrap justify-center gap-x-5 gap-y-2.5 text-[0.98rem] sm:mt-4 sm:gap-x-6 sm:text-lg lg:absolute lg:left-[52%] lg:top-[13%] lg:mt-0 lg:flex-col lg:items-start lg:gap-2.5 lg:text-base" style={{ animationDelay: "660ms" }}>
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

          {/* The facts — from 1024px only: one glass bar over the foot of the photo. */}
          <div className="max-lg:hidden">
            <EegLive className="absolute inset-x-0 bottom-10 -z-10 h-24 opacity-55" strokeWidth={1.6} />
            <ul className="liquid-glass absolute bottom-6 right-6 grid w-[calc(54%-3rem)] max-w-[44rem] grid-cols-3 rounded-[var(--radius-media)] p-2 xl:bottom-8 xl:right-8">
              {hero.stats.map((s, i) => (
                <li
                  key={s.value}
                  className="rise-in border-l border-white/12 px-5 py-4 first:border-l-0"
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
