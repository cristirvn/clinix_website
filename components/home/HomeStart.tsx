import { ButtonLink, Container, Eyebrow } from "@/components/ui/primitives";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/icons";
import type { HomeContent } from "@/content/pages/home";
import type { Locale } from "@/lib/i18n";

/**
 * Section 4 — how to start: BrainMap as the first step, in three numbered
 * steps. Photo of the map being explained on the left (on top on phones),
 * the steps, the one action and the "deducted from the programme" note on
 * the right.
 */
export function HomeStart({ start, locale }: { start: HomeContent["start"]; locale: Locale }) {
  return (
    <section id="cum-incepi" className="scroll-mt-24 bg-bg-alt py-24 text-ink sm:py-32">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div data-tone="dark" className="relative isolate aspect-[4/3] overflow-hidden rounded-[var(--radius)] bg-dark text-on-dark sm:aspect-[16/10] lg:aspect-[4/5]">
              <div aria-hidden="true" className="absolute inset-0 -z-20">
                <Photo image="scan" locale={locale} width={1100} className="object-[50%_35%]" />
              </div>
              <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-t from-dark/55 via-dark/0 to-dark/0" />
              <span className="liquid-glass absolute left-4 top-4 rounded-full px-4 py-2 text-[0.8rem] font-semibold uppercase tracking-[0.16em] sm:left-6 sm:top-6 sm:text-[0.875rem]">
                {start.badge}
              </span>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Eyebrow>{start.eyebrow}</Eyebrow>
            <h2 className="text-[2.4rem] leading-[1.04] sm:text-[3.4rem] lg:text-[3.8rem]">{start.title}</h2>

            <ol className="mt-10 space-y-3 sm:space-y-4">
              {start.steps.map((step, i) => (
                <li key={step.title}>
                  <Reveal delay={i * 90}>
                    <div className="flex gap-4 rounded-[20px] border border-line bg-surface p-5 shadow-[var(--shadow-card)] sm:gap-5 sm:p-6">
                      <span
                        aria-hidden="true"
                        className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-bg-alt font-display text-base font-semibold tabular-nums text-accent ring-1 ring-line"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-[1.3rem] leading-tight sm:text-[1.45rem]">{step.title}</h3>
                        <p className="mt-1.5 text-ink-soft">{step.text}</p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>

            <div className="mt-9">
              <ButtonLink href="/brainmap" size="lg" className="group w-full !px-5 sm:w-auto sm:!px-9">
                {start.cta}
                <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </ButtonLink>
            </div>
            <p className="mt-4 max-w-lg text-base text-ink-soft">{start.note}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
