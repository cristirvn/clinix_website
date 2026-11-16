import { ButtonLink, Container } from "@/components/ui/primitives";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/icons";
import { GoldTitle, NeuroFitMark } from "@/components/neurofit/brand";
import type { HomeContent } from "@/content/pages/home";
import type { Locale } from "@/lib/i18n";

/**
 * Section 2 — NeuroFit, the answer to the hero's promise: "a gym for the
 * brain". Shown as a door into NeuroFit's own world — an inset black panel in
 * its gold (`.theme-neurofit`), so it reads as a separate, private product
 * before the visitor even clicks. Text and the one action on the left, a
 * warm-toned photo dissolving in on the right (below the text on phones).
 */
export function HomeNeuroFit({ neurofit, locale }: { neurofit: HomeContent["neurofit"]; locale: Locale }) {
  return (
    <section id="neurofit" aria-labelledby="home-neurofit-title" className="scroll-mt-24 bg-bg pt-20 sm:pt-28">
      <Container>
        <Reveal>
          <div className="theme-neurofit nf-glow relative isolate grid overflow-hidden rounded-[28px] ring-1 ring-line sm:rounded-[36px] lg:grid-cols-12">
            <div className="relative z-10 px-6 pb-4 pt-11 sm:px-12 sm:pb-10 sm:pt-16 lg:col-span-7 lg:px-16 lg:py-20">
              <p className="flex items-center gap-3 text-[0.8rem] font-semibold uppercase tracking-[0.22em] text-accent sm:text-[0.875rem]">
                <NeuroFitMark size={18} />
                {neurofit.eyebrow}
              </p>
              <h2 id="home-neurofit-title" className="mt-6 max-w-2xl text-[2.25rem] leading-[1.05] sm:text-[3.2rem] lg:text-[3.6rem]">
                <GoldTitle text={neurofit.title} />
              </h2>
              <p className="mt-6 max-w-xl text-lg text-ink-soft sm:text-xl">{neurofit.text}</p>

              <ul className="mt-8 flex flex-wrap gap-2.5" aria-label="NeuroFit">
                {neurofit.experiences.map((x) => (
                  <li key={x} className="rounded-full border border-accent/35 px-4 py-2 text-[0.85rem] font-semibold uppercase tracking-[0.18em] text-accent">
                    {x}
                  </li>
                ))}
              </ul>

              <div className="nf-rule mt-9 max-w-md" />
              <p className="mt-6 text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-ink-soft">{neurofit.audienceTitle}</p>
              <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-lg">
                {neurofit.audience.map((a) => (
                  <li key={a} className="flex items-center gap-2.5">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-accent" />
                    {a}
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <ButtonLink href="/neurofit" size="lg" className="group w-full sm:w-auto">
                  {neurofit.cta}
                  <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
                </ButtonLink>
              </div>
              <p className="mt-5 max-w-md text-base text-ink-soft">{neurofit.note}</p>
            </div>

            <div aria-hidden="true" className="relative min-h-[15rem] sm:min-h-[22rem] lg:col-span-5 lg:min-h-0">
              <div className="fade-photo absolute inset-0 lg:-left-[20%]">
                <Photo image="helmet" locale={locale} width={1200} className="nf-photo object-[40%_center]" />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
