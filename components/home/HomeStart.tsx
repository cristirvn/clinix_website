import { ButtonLink, Container, Eyebrow } from "@/components/ui/primitives";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/icons";
import { EegLive } from "@/components/home/EegTrace";
import type { HomeContent } from "@/content/pages/home";
import type { Locale } from "@/lib/i18n";

/**
 * Section 3 — how to start: BrainMap as the first step, told as a short
 * story. From 1024px the photo stays pinned on the left while the three
 * steps scroll by on the right (sticky storytelling). The steps hang on a
 * timeline whose line fills as you scroll (CSS scroll-driven animation;
 * simply full where unsupported or with reduced motion). A glass card with
 * the live EEG trace sits on the photo.
 */
export function HomeStart({ start, locale }: { start: HomeContent["start"]; locale: Locale }) {
  return (
    <section id="cum-incepi" className="relative isolate scroll-mt-24 overflow-hidden bg-bg-alt py-24 text-ink sm:py-32">
      <div aria-hidden="true" className="absolute -right-40 top-10 -z-10 h-[30rem] w-[30rem] rounded-full bg-[rgb(var(--glow-b)/0.22)] blur-3xl" />
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal className="lg:sticky lg:top-[calc(var(--header-h)+1.5rem)]">
              <div data-tone="dark" className="relative isolate aspect-[4/3] overflow-hidden rounded-[var(--radius-media)] bg-dark text-on-dark shadow-[var(--shadow-float)] sm:aspect-[16/10] lg:aspect-[4/5]">
                <div aria-hidden="true" className="absolute inset-0 -z-20">
                  <Photo image="scan" locale={locale} width={1100} className="object-[50%_35%]" />
                </div>
                <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-t from-dark/70 via-dark/0 to-dark/10" />
                <span className="media-chip absolute left-4 top-4 sm:left-6 sm:top-6">
                  <span aria-hidden="true" className="live-dot text-accent" />
                  {start.badge}
                </span>
                <div aria-hidden="true" className="liquid-glass absolute inset-x-4 bottom-4 overflow-hidden rounded-[var(--radius)] px-1 py-3 sm:inset-x-6 sm:bottom-6">
                  <EegLive className="h-12 sm:h-14" strokeWidth={1.8} speed={9} />
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pt-6">
            <Eyebrow>{start.eyebrow}</Eyebrow>
            <h2 className="t-h2">{start.title}</h2>

            {/* The timeline: a faint rail, a filled line that grows with the scroll, numbered stops. */}
            <ol className="timeline relative mt-12 space-y-4 sm:space-y-5">
              <span aria-hidden="true" className="absolute bottom-10 left-[1.6rem] top-10 w-[2px] rounded-full bg-line sm:left-[1.85rem]" />
              <span aria-hidden="true" className="timeline-fill absolute bottom-10 left-[1.6rem] top-10 w-[2px] origin-top rounded-full bg-primary sm:left-[1.85rem]" />
              {start.steps.map((step, i) => (
                <li key={step.title} className="relative">
                  <Reveal delay={i * 90}>
                    <div className="grid grid-cols-[3.25rem_1fr] items-start gap-4 sm:grid-cols-[3.75rem_1fr] sm:gap-6">
                      <span
                        aria-hidden="true"
                        className="relative z-10 flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full bg-cta text-[1.15rem] font-semibold tabular-nums text-on-cta shadow-[var(--glow-cta)] ring-[6px] ring-bg-alt sm:h-[3.75rem] sm:w-[3.75rem] sm:text-[1.3rem]"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="rounded-[var(--radius-media)] border border-line bg-surface p-5 shadow-[var(--shadow-lift)] sm:p-7">
                        <h3 className="text-[1.3rem] leading-tight tracking-[-0.02em] sm:text-[1.6rem]">{step.title}</h3>
                        <p className="mt-2 text-ink-soft sm:text-lg">{step.text}</p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>

            <div className="mt-10 sm:pl-[5.25rem]">
              <ButtonLink href="/brainmap" size="lg" className="w-full !px-5 sm:w-auto sm:!px-9">
                {start.cta}
                <ArrowIcon />
              </ButtonLink>
              <p className="mt-4 max-w-lg text-base text-ink-soft">{start.note}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
