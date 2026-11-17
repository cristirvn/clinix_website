import { ButtonLink, Container, Eyebrow } from "@/components/ui/primitives";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { Emph } from "@/components/ui/Emph";
import { ArrowIcon } from "@/components/ui/icons";
import type { HomeContent } from "@/content/pages/home";
import type { Locale } from "@/lib/i18n";

/**
 * Section 6 — NeuroFit, right after the quiz. A door into NeuroFit, drawn in
 * the SITE's own colours (the navy band used for emphasis everywhere) — the
 * black + gold belongs to /neurofit only. Text and the one action on the
 * left, the headset photo dissolving in on the right (below the text on phones).
 * No top padding: the quiz section above already ends with its own.
 */
export function HomeNeuroFit({ neurofit, locale }: { neurofit: HomeContent["neurofit"]; locale: Locale }) {
  return (
    <section id="neurofit" aria-labelledby="home-neurofit-title" className="scroll-mt-24 bg-bg pb-24 text-ink sm:pb-32">
      <Container>
        <Reveal>
          <div
            data-tone="dark"
            className="bg-vital relative isolate grid overflow-hidden rounded-[28px] text-on-dark sm:rounded-[36px] lg:grid-cols-12"
          >
            <div className="relative z-10 px-6 pb-4 pt-11 sm:px-12 sm:pb-10 sm:pt-16 lg:col-span-7 lg:px-16 lg:py-20">
              <Eyebrow>{neurofit.eyebrow}</Eyebrow>
              <h2 id="home-neurofit-title" className="max-w-2xl text-[2.25rem] leading-[1.05] sm:text-[3.2rem] lg:text-[3.6rem]">
                <Emph text={neurofit.title} />
              </h2>
              <p className="mt-6 max-w-xl text-lg text-on-dark-soft sm:text-xl">{neurofit.text}</p>

              <ul className="mt-8 flex flex-wrap gap-2.5" aria-label="NeuroFit">
                {neurofit.experiences.map((x) => (
                  <li key={x} className="rounded-full border border-accent/40 px-4 py-2 text-[0.85rem] font-semibold uppercase tracking-[0.18em] text-accent">
                    {x}
                  </li>
                ))}
              </ul>

              <p className="mt-9 border-t border-line pt-6 text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-on-dark-soft">
                {neurofit.audienceTitle}
              </p>
              <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-lg">
                {neurofit.audience.map((a) => (
                  <li key={a} className="flex items-center gap-2.5">
                    <span aria-hidden="true" className="h-2 w-2 flex-none rounded-full bg-lime" />
                    {a}
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <ButtonLink href="/neurofit" variant="light" size="lg" className="group w-full sm:w-auto">
                  {neurofit.cta}
                  <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
                </ButtonLink>
              </div>
              <p className="mt-5 max-w-md text-base text-on-dark-soft">{neurofit.note}</p>
            </div>

            <div aria-hidden="true" className="relative min-h-[15rem] sm:min-h-[22rem] lg:col-span-5 lg:min-h-0">
              <div className="fade-photo absolute inset-0 lg:-left-[20%]">
                <Photo image="helmet" locale={locale} width={1200} className="object-[40%_center]" />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
