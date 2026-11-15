import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Eyebrow, Section, SectionHead } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { L } from "@/components/ui/L";
import { FunnelFooter } from "@/components/layout/FunnelChrome";
import { FunnelProgress } from "@/components/lp-somn-b/FunnelProgress";
import { getLpSomnB } from "@/content/lp-somn-b";
import { alternatesFor, type Locale } from "@/lib/i18n";
import { CLINIC } from "@/lib/site";

const PATH = "/lp/somn-b/multumim";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale };
  const { meta } = getLpSomnB(locale);
  return {
    title: { absolute: meta.thankYou.title },
    description: meta.thankYou.description,
    robots: { index: false, follow: true },
    alternates: alternatesFor(PATH, locale),
  };
}

function StepRow({ marker, title, children }: { marker: ReactNode; title: string; children: ReactNode }) {
  return (
    <li className="flex gap-5 sm:gap-7">
      <span
        aria-hidden="true"
        className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-dark font-display text-2xl text-on-dark"
      >
        {marker}
      </span>
      <div className="pt-1">
        <h3 className="text-2xl sm:text-[1.7rem]">{title}</h3>
        <div className="mt-2 space-y-3 text-lg text-ink-soft">{children}</div>
      </div>
    </li>
  );
}

const PencilIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
  </svg>
);

const PlayIcon = (
  <svg width="20" height="22" viewBox="0 0 22 26">
    <path d="M3 2 L20 13 L3 24 Z" fill="currentColor" />
  </svg>
);

/** Sleep campaign, variant B — step 3 of 3: confirmation, letter, next steps, homework, call. */
export default async function LpSomnBThankYouPage({ params }: Props) {
  const { locale } = (await params) as { locale: Locale };
  const c = getLpSomnB(locale);
  const { hero, letter, next, homework, call, trust } = c.thankYou;

  return (
    <>
      <FunnelProgress step={3} progress={c.progress} />

      {/* HERO — confirmation */}
      <Section tone="dark" className="!py-16 sm:!py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span
            aria-hidden="true"
            className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border-2 border-accent text-accent"
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </span>
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1 className="text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl">{hero.title}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-on-dark-soft sm:text-xl">
            {hero.subLine}
            <br />
            <strong className="font-semibold text-on-dark">{hero.subStrong}</strong>
            {hero.subRest}
          </p>
        </div>
      </Section>

      {/* LETTER */}
      <Section narrow>
        <Reveal>
          <SectionHead title={letter.title} />
        </Reveal>
        <Reveal>
          <div className="rounded-[var(--radius)] border border-line bg-surface p-7 text-lg leading-relaxed text-ink sm:p-12 sm:text-xl">
            <div className="space-y-5">
              {letter.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="mt-10 border-t border-line pt-6">
              <p className="font-display text-2xl">{letter.signName}</p>
              <p className="mt-1 text-sm uppercase tracking-[0.16em] text-ink-soft">{letter.signTag}</p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* WHAT HAPPENS NEXT + HOMEWORK */}
      <Section tone="alt" narrow>
        <Reveal>
          <SectionHead title={next.title} />
        </Reveal>
        <ol className="space-y-10">
          {next.steps.map((s, i) => (
            <StepRow key={s.title} marker={i + 1} title={s.title}>
              <p>{s.text}</p>
            </StepRow>
          ))}
        </ol>

        <Reveal className="mt-20">
          <SectionHead title={homework.title} lead={homework.text} />
        </Reveal>
        <ul className="space-y-10">
          <StepRow marker={PencilIcon} title={homework.write.title}>
            <p>{homework.write.text}</p>
          </StepRow>
          <StepRow marker={PlayIcon} title={homework.rewatch.title}>
            <p>{homework.rewatch.text}</p>
            <p>
              <L href="/lp/somn-b" className="font-bold text-accent underline decoration-2 underline-offset-4 hover:opacity-80">
                {homework.rewatchLink}
              </L>
            </p>
          </StepRow>
        </ul>
      </Section>

      {/* CALL NOW */}
      <Section tone="dark">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>{call.eyebrow}</Eyebrow>
          <h2 className="text-[2.1rem] sm:text-5xl">{call.title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-on-dark-soft sm:text-xl">{call.text}</p>
          <p className="mt-10 font-display text-4xl tracking-tight sm:text-6xl">
            <a href={CLINIC.phoneHref} className="hover:opacity-80">
              {CLINIC.phone}
            </a>
          </p>
          <a
            href={CLINIC.phoneHref}
            className="mt-8 inline-flex min-h-14 w-full items-center justify-center rounded-[var(--btn-radius)] bg-cta px-8 py-4 text-lg font-semibold text-on-cta transition hover:-translate-y-0.5 hover:brightness-110 sm:w-auto"
          >
            {call.button}
          </a>
          <p className="mt-4 text-sm text-on-dark-soft">{call.hours}</p>
        </div>
      </Section>

      <Section className="!py-12">
        <ul className="flex flex-col items-center justify-center gap-x-10 gap-y-4 text-lg font-medium sm:flex-row sm:flex-wrap">
          {trust.map((t) => (
            <li key={t} className="flex items-center gap-3">
              <span aria-hidden="true" className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-sm font-bold text-on-accent">
                ✓
              </span>
              {t}
            </li>
          ))}
        </ul>
      </Section>

      <FunnelFooter locale={locale} legal={c.legal} />
    </>
  );
}
