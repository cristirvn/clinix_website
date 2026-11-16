import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Container, Faq, buttonClass } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { ArrowIcon, PhoneIcon } from "@/components/ui/icons";
import { GoogleRatingBadge, GoogleReviewCards } from "@/components/ui/GoogleReviews";
import { GoldTitle, NeuroFitMark } from "@/components/neurofit/brand";
import { NeuroFitForm } from "@/components/neurofit/NeuroFitForm";
import { StickyApplyCta } from "@/components/lp-emsella/StickyApplyCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqPage } from "@/components/seo/schema";
import { getNeuroFit } from "@/content/neurofit";
import { pageMetadata } from "@/components/seo/meta";
import type { Locale } from "@/lib/i18n";
import { CLINIC } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

const FORM_ID = "rezerva";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const { seo } = getNeuroFit(locale);
  return pageMetadata({ title: seo.title, description: seo.description, path: "/neurofit", locale });
}

/** Small gold caps label (NeuroFit's eyebrow). */
function Label({ children, center = false }: { children: ReactNode; center?: boolean }) {
  return (
    <p className={`mb-4 flex items-center gap-3 text-[0.8rem] font-semibold uppercase tracking-[0.22em] text-accent sm:text-[0.875rem] ${center ? "justify-center" : ""}`}>
      {children}
    </p>
  );
}

/** Centred section heading: label, title, optional one-line lead. */
function Head({ label, title, lead }: { label: string; title: string; lead?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
      <Label center>{label}</Label>
      <h2 className="text-[2.1rem] leading-[1.08] sm:text-[3rem] lg:text-[3.4rem]">
        <GoldTitle text={title} />
      </h2>
      {lead && <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">{lead}</p>}
    </div>
  );
}

function Cta({ label, className = "" }: { label: string; className?: string }) {
  return (
    <a href={`#${FORM_ID}`} className={buttonClass("cta", "lg", `group w-full !px-5 sm:w-auto sm:!px-9 ${className}`)}>
      {label}
      <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}

const BAND = "scroll-mt-24 py-20 sm:py-28";

/**
 * `/neurofit` — built like the clinic's other landing pages (EmSella, Somn):
 * title + subtitle, the VSL straight under them, one action, four ticks;
 * then a short page — the experiences, how a membership works (no prices),
 * reviews, questions, the booking form. Black + gold (`.theme-neurofit`,
 * see the route-group layout). Phone first: on a 375px screen the title,
 * the subtitle and the start of the video are on the first screen, and a
 * sticky "Book" bar follows the visitor until the form is in view.
 */
export default async function NeuroFitPage({ params }: Props) {
  const locale = (await params).locale as Locale;
  const c = getNeuroFit(locale);

  return (
    <>
      {/* HERO — title, subtitle, VSL, one action, ticks */}
      <section className="nf-glow border-b border-line bg-bg-alt pb-16 pt-9 sm:pb-24 sm:pt-16">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="rise-in flex items-center justify-center gap-2.5 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-accent sm:text-[0.875rem] sm:tracking-[0.24em]">
              <NeuroFitMark size={14} />
              {c.hero.eyebrow}
            </p>
            <h1 className="rise-in mx-auto mt-5 max-w-3xl text-[2.3rem] leading-[1.06] sm:mt-6 sm:text-6xl lg:text-[4.2rem]" style={{ animationDelay: "100ms" }}>
              <GoldTitle text={c.hero.title} />
            </h1>
            <p className="rise-in mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-soft sm:mt-6 sm:text-xl" style={{ animationDelay: "180ms" }}>
              {c.hero.sub}
            </p>
          </div>

          <div className="rise-in mx-auto mt-8 max-w-4xl sm:mt-12" style={{ animationDelay: "260ms" }}>
            <VideoPlayer video="neurofitVsl" title={c.hero.videoTitle} className="!bg-surface !ring-accent/25" />
            <p className="mx-auto mt-4 max-w-xl text-center text-base text-ink-soft">{c.hero.videoNote}</p>
          </div>

          <div className="mt-9 text-center sm:mt-10">
            <Cta label={c.hero.cta} />
            <p className="mt-3 text-base text-ink-soft">{c.hero.ctaSub}</p>
          </div>

          <ul className="mx-auto mt-12 grid max-w-3xl gap-x-10 gap-y-4 border-t border-line pt-10 text-left text-lg sm:grid-cols-2">
            {c.hero.facts.map((f) => (
              <li key={f} className="flex gap-3.5">
                <span aria-hidden="true" className="mt-[0.55rem] h-2 w-2 flex-none rotate-45 bg-accent" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* EXPERIENȚELE */}
      <section id="experiente" className={`${BAND} bg-bg`}>
        <Container>
          <Head label={c.experiences.eyebrow} title={c.experiences.title} lead={c.experiences.lead} />
          <ul className="mx-auto grid max-w-6xl gap-3.5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {c.experiences.items.map((x, i) => (
              <li key={x.name}>
                <Reveal delay={i * 70} className="h-full">
                  <article className="flex h-full flex-col rounded-[var(--radius)] border border-line bg-surface p-6 sm:p-7">
                    <h3 className="nf-gold text-[2rem] leading-none sm:text-[2.3rem]">{x.name}</h3>
                    <p className="mt-3 text-lg">{x.line}</p>
                    <div className="nf-rule my-5" />
                    <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-ink-soft">{c.experiences.forWhen}</p>
                    <ul className="mt-2.5 space-y-1.5">
                      {x.situations.map((s) => (
                        <li key={s} className="flex gap-3 text-base text-ink-soft">
                          <span aria-hidden="true" className="mt-[0.6rem] h-1.5 w-1.5 flex-none rotate-45 bg-accent" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-8 max-w-2xl text-center text-base text-ink-soft">{c.experiences.note}</p>
          <div className="mt-10 text-center">
            <Cta label={c.hero.cta} />
          </div>
        </Container>
      </section>

      {/* CUM DECURGE UN ABONAMENT (fără prețuri) */}
      <section id="abonament" className={`${BAND} bg-bg-alt`}>
        <Container>
          <Head label={c.membership.eyebrow} title={c.membership.title} lead={c.membership.lead} />
          <ol className="mx-auto max-w-3xl divide-y divide-line border-y border-line">
            {c.membership.steps.map((step, i) => (
              <li key={step.title} className="flex gap-5 py-7 sm:gap-8 sm:py-8">
                <span aria-hidden="true" className="nf-gold w-9 flex-none font-display text-[1.6rem] leading-none tabular-nums sm:w-12 sm:text-[2rem]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[1.4rem] leading-tight sm:text-[1.6rem]">{step.title}</h3>
                  <p className="mt-2 text-lg leading-relaxed text-ink-soft">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-3 rounded-[20px] border border-accent/30 bg-surface px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p className="text-lg">{c.membership.note}</p>
            <a href={CLINIC.phoneHref} className="inline-flex min-h-11 items-center gap-2.5 whitespace-nowrap text-lg font-semibold text-accent">
              <PhoneIcon size={18} />
              {CLINIC.phone}
            </a>
          </div>
        </Container>
      </section>

      {/* RECENZII */}
      <section className={`${BAND} bg-bg`}>
        <Container>
          <Head label={c.reviews.eyebrow} title={c.reviews.title} />
          <div className="-mt-4 mb-10 flex justify-center sm:-mt-6 sm:mb-12">
            <GoogleRatingBadge locale={locale} label={c.reviews.ratingLabel} />
          </div>
          <GoogleReviewCards locale={locale} source={c.reviews.source} />
        </Container>
      </section>

      {/* ÎNTREBĂRI */}
      <section id="intrebari" className={`${BAND} bg-bg-alt`}>
        <Container narrow>
          <Head label={c.faq.eyebrow} title={c.faq.title} />
          <Faq items={c.faq.items} />
          <JsonLd data={faqPage(c.faq.items)} />
        </Container>
      </section>

      {/* REZERVĂ */}
      <section id={FORM_ID} className={`${BAND} bg-bg`}>
        <Container narrow>
          <div className="nf-glow rounded-[28px] bg-bg-alt px-5 py-10 ring-1 ring-accent/30 sm:rounded-[36px] sm:px-12 sm:py-14">
            <div className="mb-9 text-center">
              <Label center>{c.book.eyebrow}</Label>
              <h2 className="text-[2.1rem] leading-[1.08] sm:text-[2.8rem]">
                <GoldTitle text={c.book.title} />
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-ink-soft">{c.book.text}</p>
            </div>
            <NeuroFitForm copy={c.book} />
          </div>
        </Container>
      </section>

      <StickyApplyCta label={c.hero.cta} target={FORM_ID} />
    </>
  );
}
