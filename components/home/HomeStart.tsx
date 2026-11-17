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
            <div data-tone="dark" className="relative isolate aspect-[4/3] overflow-hidden rounded-[var(--radius-media)] bg-dark text-on-dark sm:aspect-[16/10] lg:aspect-[4/5]">
              <div aria-hidden="true" className="absolute inset-0 -z-20">
                <Photo image="scan" locale={locale} width={1100} className="object-[50%_35%]" />
              </div>
              <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-t from-dark/55 via-dark/0 to-dark/0" />
              <span className="media-chip absolute left-4 top-4 sm:left-6 sm:top-6">
                {start.badge}
              </span>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Eyebrow>{start.eyebrow}</Eyebrow>
            <h2 className="t-h2">{start.title}</h2>

            {/* Three steps as a ruled list: big numbers, hairlines between, no boxes. */}
            <ol className="mt-10 border-t border-line">
              {start.steps.map((step, i) => (
                <li key={step.title} className="border-b border-line">
                  <Reveal delay={i * 90}>
                    <div className="grid grid-cols-[3rem_1fr] gap-4 py-6 sm:grid-cols-[4rem_1fr] sm:gap-5">
                      <span aria-hidden="true" className="font-display text-[1.6rem] font-semibold leading-none tabular-nums text-accent sm:text-[2rem]">
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
              <ButtonLink href="/brainmap" size="lg" className="w-full !px-5 sm:w-auto sm:!px-9">
                {start.cta}
                <ArrowIcon />
              </ButtonLink>
            </div>
            <p className="mt-4 max-w-lg text-base text-ink-soft">{start.note}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
