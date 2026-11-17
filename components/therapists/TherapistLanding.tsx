import Image from "next/image";
import type { ReactNode } from "react";
import { Card, CheckItem, Container, Faq, HeroPanel, Section, SectionHead, buttonClass } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { FunnelFooter } from "@/components/layout/FunnelChrome";
import { StickyBar } from "@/components/lp/StickyBar";
import { ServiceTestimonials } from "@/components/pages/testimonials";
import { TherapistForm } from "@/components/therapists/TherapistForm";
import { RelatedArticles } from "@/components/pages/RelatedArticles";
import { CLINIC } from "@/lib/site";
import type { Locale } from "@/lib/i18n";
import type { CmsTestimonial } from "@/lib/cms";
import { withName, type Therapist, type TherapistUi } from "@/content/therapists";

const HERO_ID = "lp-hero";
const FORM_ID = "programare";

/**
 * A psychotherapist's own landing page (`/psihoterapeut/<slug>`), on the LP
 * pattern: minimal header, the VSL at the top, then who they are, what they
 * help with, how they work, their patients' testimonials, "is it for you",
 * FAQ and one form at the bottom — "Programează o ședință la X".
 */
export function TherapistLanding({
  locale,
  therapist: t,
  ui,
  testimonials,
}: {
  locale: Locale;
  therapist: Therapist;
  ui: TherapistUi;
  testimonials: CmsTestimonial[];
}) {
  const n = (text: string) => withName(text, t.firstName);
  const cta = (variant: "cta" | "light" = "cta") => (
    <a href={`#${FORM_ID}`} className={buttonClass(variant, "lg", "w-full sm:w-auto")}>
      {n(ui.cta)}
    </a>
  );

  return (
    <>
      {/* 1 · HERO + VSL */}
      <HeroPanel id={HERO_ID}>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
          <div>
            <p className="mb-5 text-[0.875rem] font-semibold uppercase tracking-[0.18em] text-accent">{t.role}</p>
            <h1 className="text-[2.6rem] leading-[1.04] sm:text-6xl lg:text-7xl">{t.name}</h1>
            <p className="mt-6 max-w-xl text-lg text-on-dark-soft sm:text-xl">{t.hero.lede}</p>
            <div className="mt-10 hidden flex-col gap-4 lg:flex lg:items-start">
              {cta()}
              <p className="text-base text-on-dark-soft">{ui.heroMicro}</p>
            </div>
          </div>
          <div id="video" className="liquid-glass scroll-mt-24 rounded-[calc(var(--radius)+8px)] p-2">
            <VideoPlayer video={t.video} title={n(ui.videoTitle)} />
          </div>
          {/* On phones the button comes after the video. */}
          <div className="flex flex-col gap-4 lg:hidden">
            {cta()}
            <p className="text-base text-on-dark-soft">{ui.heroMicro}</p>
          </div>
        </div>
        <ul className="mt-12 grid grid-cols-1 gap-3.5 border-t border-on-dark/15 pt-8 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4">
          {t.hero.facts.map((fact) => (
            <li key={fact} className="flex items-center gap-3 text-base sm:glass sm:rounded-2xl sm:px-5 sm:py-4">
              <span aria-hidden="true" className="h-2.5 w-2.5 flex-none rounded-full bg-lime" />
              {fact}
            </li>
          ))}
        </ul>
      </HeroPanel>

      {/* 2 · DESPRE */}
      <Section id="despre">
        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[var(--radius)] lg:max-w-none">
              <Image src={t.photo} alt={t.name} fill sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" />
            </div>
          </Reveal>
          <div>
            <SectionHead title={t.about.title} className="!mb-8" />
            <div className="space-y-5 text-lg text-ink-soft sm:text-xl">
              {t.about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 3 · CU CE TE POATE AJUTA */}
      <Section tone="alt">
        <SectionHead title={t.helps.title} />
        <ul className="grid gap-5 sm:grid-cols-2">
          {t.helps.items.map((item, i) => (
            <li key={item.title}>
              <Reveal delay={(i % 2) * 80} className="h-full">
                <Card className="h-full">
                  <h3 className="text-2xl">{item.title}</h3>
                  <p className="mt-3 text-lg text-ink-soft">{item.text}</p>
                </Card>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      {/* 4 · CUM LUCREAZĂ */}
      <Section>
        <SectionHead title={t.approach.title} />
        <ol className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {t.approach.steps.map((s, i) => (
            <li key={s.title} className="border-t border-line pt-6">
              <span aria-hidden="true" className="font-display text-lg text-accent tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-2xl">{s.title}</h3>
              <p className="mt-3 text-lg text-ink-soft">{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-14 text-center">{cta()}</div>
      </Section>

      {/* 5 · TESTIMONIALE (from /admin; empty frames until the first one) */}
      <ServiceTestimonials
        id="testimoniale"
        items={testimonials}
        ui={{ title: ui.testimonials.title, play: ui.testimonials.play }}
        lead={n(ui.testimonials.lede)}
        placeholder={ui.testimonials.placeholder}
        locale={locale}
      />

      {/* 6 · ESTE POTRIVIT PENTRU TINE? */}
      <Section>
        <SectionHead center title={ui.qualify.title} />
        <div className="grid gap-5 md:grid-cols-2">
          <QualifyCard title={ui.qualify.fitsTitle}>
            {t.qualify.fits.map((row) => (
              <CheckItem key={row}>{row}</CheckItem>
            ))}
          </QualifyCard>
          <QualifyCard title={ui.qualify.notTitle}>
            {t.qualify.notFit.map((row) => (
              <CheckItem key={row} negative>
                {row}
              </CheckItem>
            ))}
          </QualifyCard>
        </div>
      </Section>

      {/* 7 · FAQ */}
      <Section tone="alt" id="faq" narrow>
        <SectionHead center title={ui.faqTitle} />
        <Faq items={t.faq} />
      </Section>

      {/* 8 · FORMULAR */}
      <Section id={FORM_ID} narrow>
        <SectionHead center title={n(ui.form.title)} lead={ui.form.lede} />
        <TherapistForm slug={t.slug} therapistName={t.name} copy={ui.form} />
      </Section>

      <RelatedArticles topics={["psihoterapie"]} locale={locale} />

      <nav aria-label={ui.pageNav.title} className="border-t border-line bg-bg text-ink">
        <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-xl">{CLINIC.name}</p>
            <p className="mt-1 text-sm uppercase tracking-[0.16em] text-ink-soft">{t.name}</p>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-ink-soft">{ui.pageNav.title}</p>
            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 font-semibold">
              {(
                [
                  ["#video", ui.pageNav.video],
                  ["#despre", ui.pageNav.about],
                  ["#testimoniale", ui.pageNav.testimonials],
                  ["#faq", ui.pageNav.faq],
                  [`#${FORM_ID}`, ui.pageNav.book],
                ] as const
              ).map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="inline-block py-2 hover:text-accent">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </nav>
      <FunnelFooter locale={locale} legal={ui.legal} />
      {/* Room so the sticky bar never covers the footer on mobile. */}
      <div className="h-20 bg-bg-alt md:hidden" aria-hidden="true" />

      <StickyBar label={t.name} sub={ui.sticky.sub} cta={ui.sticky.cta} heroId={HERO_ID} formId={FORM_ID} />
    </>
  );
}

function QualifyCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Card>
      <h3 className="text-2xl sm:text-3xl">{title}</h3>
      <ul className="mt-6 space-y-4 text-lg">{children}</ul>
    </Card>
  );
}

