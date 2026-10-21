import type { Metadata } from "next";
import { Eyebrow, Section, SectionHead } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { FunnelFooter } from "@/components/layout/FunnelChrome";
import { FunnelProgress } from "@/components/lp-somn-b/FunnelProgress";
import { Proof } from "@/components/lp-somn-b/Proof";
import { ApplyForm } from "@/components/lp-somn-b/ApplyForm";
import { getLpSomnB } from "@/content/lp-somn-b";
import { alternatesFor, type Locale } from "@/lib/i18n";

const PATH = "/lp/somn-b/aplicatie";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale };
  const { meta } = getLpSomnB(locale);
  return {
    title: { absolute: meta.application.title },
    description: meta.application.description,
    robots: { index: false, follow: true },
    alternates: alternatesFor(PATH, locale),
  };
}

/** Sleep campaign, variant B — step 2 of 3: video, testimonials, qualifying application. */
export default async function LpSomnBApplicationPage({ params }: Props) {
  const { locale } = (await params) as { locale: Locale };
  const c = getLpSomnB(locale);
  const { intro, proof, formBox } = c.application;

  return (
    <>
      <FunnelProgress step={2} progress={c.progress} />

      {/* INTRO + VIDEO */}
      <Section narrow className="!pt-14 sm:!pt-20">
        <div className="mb-12 text-center">
          <Eyebrow>{intro.kicker}</Eyebrow>
          <h1 className="text-[2.6rem] leading-[1.05] sm:text-6xl">{intro.title}</h1>
          <p className="mt-5 text-lg text-ink-soft sm:text-xl">{intro.text}</p>
        </div>
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-ink-soft">
          <span>{intro.videoTag}</span>
          <span>{intro.videoLen}</span>
        </div>
        <VideoPlayer video="lpSomnBHowWeWork" title={`${intro.videoTag} · ${intro.videoLen}`} />
      </Section>

      {/* TESTIMONIALS */}
      <Section tone="alt">
        <Reveal>
          <SectionHead eyebrow={proof.kicker} title={proof.title} />
        </Reveal>
        <Proof videos={proof.videos} reviews={proof.reviews} locale={locale} />
      </Section>

      {/* APPLICATION FORM */}
      <Section tone="dark" id="aplicatie">
        <div className="mx-auto max-w-3xl rounded-[var(--radius)] bg-surface p-6 text-ink shadow-[0_30px_80px_-30px_rgba(0,0,0,0.55)] sm:p-12">
          <h2 className="text-[2.1rem] sm:text-5xl">{formBox.title}</h2>
          <p className="mb-10 mt-4 text-lg text-ink-soft sm:text-xl">{formBox.sub}</p>
          <ApplyForm copy={c.form} />
        </div>
      </Section>

      <FunnelFooter locale={locale} legal={c.legal} />
    </>
  );
}
