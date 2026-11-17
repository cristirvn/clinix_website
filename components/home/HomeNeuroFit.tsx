import { ButtonLink, Container, Eyebrow } from "@/components/ui/primitives";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { SpotRim } from "@/components/ui/PointerSpotlight";
import { Emph } from "@/components/ui/Emph";
import { ArrowIcon } from "@/components/ui/icons";
import { EegLive } from "@/components/home/EegTrace";
import type { HomeContent } from "@/content/pages/home";
import type { Locale } from "@/lib/i18n";

/**
 * Section 5 — NeuroFit: the page's one full-bleed dark band, in the SITE's
 * own colours (the black + gold belongs to /neurofit only). Lit navy, grain,
 * the headset photo dissolving in on the right, the live EEG line along the
 * foot. The four experiences are big glass tiles (a 2×2 grid on every
 * screen, light follows the mouse on desktop); the one action stands alone.
 */
export function HomeNeuroFit({ neurofit, locale }: { neurofit: HomeContent["neurofit"]; locale: Locale }) {
  return (
    <section
      id="neurofit"
      aria-labelledby="home-neurofit-title"
      data-tone="dark"
      className="bg-vital grain relative isolate scroll-mt-24 overflow-hidden py-24 text-on-dark sm:py-32"
    >
      <div aria-hidden="true" className="absolute inset-y-0 right-0 -z-20 hidden w-[48%] lg:block">
        <div className="fade-photo absolute inset-0 opacity-70">
          <Photo image="helmet" locale={locale} width={1400} className="object-[40%_center]" />
        </div>
      </div>
      <EegLive className="absolute inset-x-0 bottom-6 -z-10 h-20 opacity-40 sm:h-28" strokeWidth={1.4} speed={18} />

      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Eyebrow>{neurofit.eyebrow}</Eyebrow>
            <h2 id="home-neurofit-title" className="t-h2 max-w-2xl">
              <Emph text={neurofit.title} />
            </h2>
            <p className="t-lead mt-6 max-w-xl text-on-dark-soft">{neurofit.text}</p>

            <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4" aria-label="NeuroFit">
              {neurofit.experiences.map((x, i) => (
                <li key={x}>
                  <Reveal delay={i * 80} className="h-full">
                    <div className="liquid-glass spotlight relative flex h-full min-h-[6.5rem] flex-col justify-between rounded-[var(--radius-media)] p-4 sm:min-h-[8rem] sm:p-6">
                      <SpotRim />
                      <span aria-hidden="true" className="text-sm font-semibold tabular-nums text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[1.6rem] font-semibold leading-none tracking-[-0.03em] sm:text-[2.2rem]">{x}</span>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-4 border-t border-line pt-7 sm:flex-row sm:items-baseline sm:gap-6">
              <p className="label flex-none text-on-dark-soft">{neurofit.audienceTitle}</p>
              <ul className="flex flex-wrap gap-2">
                {neurofit.audience.map((a) => (
                  <li key={a} className="rounded-full border border-line px-4 py-1.5 text-base font-medium">
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <ButtonLink href="/neurofit" variant="light" size="lg" className="w-full sm:w-auto">
                {neurofit.cta}
                <ArrowIcon />
              </ButtonLink>
            </div>
            <p className="mt-5 max-w-md text-base text-on-dark-soft">{neurofit.note}</p>
          </div>

          {/* Phones / tablets: the photo as its own rounded frame under the text. */}
          <div aria-hidden="true" className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-media)] lg:hidden">
            <Photo image="helmet" locale={locale} width={1000} className="object-[40%_center]" />
            <div className="absolute inset-0 bg-linear-to-t from-dark/60 to-dark/0" />
          </div>
        </div>
      </Container>
    </section>
  );
}
