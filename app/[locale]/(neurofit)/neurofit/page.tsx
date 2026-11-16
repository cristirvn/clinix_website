import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Container, Faq, buttonClass } from "@/components/ui/primitives";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { ArrowIcon, PhoneIcon } from "@/components/ui/icons";
import { GoogleRatingBadge, GoogleReviewCards } from "@/components/ui/GoogleReviews";
import { GoldTitle, NeuroFitMark } from "@/components/neurofit/brand";
import { NeuroFitForm } from "@/components/neurofit/NeuroFitForm";
import { getNeuroFit } from "@/content/neurofit";
import { pageMetadata } from "@/components/seo/meta";
import type { Locale } from "@/lib/i18n";
import { CLINIC } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const { seo } = getNeuroFit(locale);
  return pageMetadata({ title: seo.title, description: seo.description, path: "/neurofit", locale });
}

/** Small gold caps label with a hairline after it (NeuroFit's eyebrow). */
function Label({ children, center = false }: { children: ReactNode; center?: boolean }) {
  return (
    <p className={`mb-5 flex items-center gap-3 text-[0.8rem] font-semibold uppercase tracking-[0.24em] text-accent sm:text-[0.875rem] ${center ? "justify-center" : ""}`}>
      {children}
      <span aria-hidden="true" className="h-px w-10 bg-accent/50" />
    </p>
  );
}

const H2 = "text-[2.3rem] leading-[1.05] sm:text-[3.2rem] lg:text-[3.8rem]";
const BAND = "scroll-mt-24 py-24 sm:py-32";

/**
 * `/neurofit` — NeuroFit, the clinic's "gym for the brain". Black + gold,
 * its own header (see the route-group layout). Order: promise → video →
 * the idea → who it's for → the four experiences → the technology → how a
 * membership works (no prices) → reviews → questions → book the first
 * experience. One action throughout: "Book your first experience" (#rezerva).
 */
export default async function NeuroFitPage({ params }: Props) {
  const locale = (await params).locale as Locale;
  const c = getNeuroFit(locale);

  return (
    <>
      {/* 1 · Hero */}
      <section className="px-2 pb-2 sm:px-3 sm:pb-3">
        <div className="nf-glow relative isolate overflow-hidden rounded-[26px] bg-bg-alt ring-1 ring-line sm:rounded-[36px]">
          <div aria-hidden="true" className="hero-photo absolute inset-0 -z-20">
            <Photo image="helmet" locale={locale} width={1600} priority className="nf-photo hero-settle object-[60%_center]" />
          </div>
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-b from-bg/55 via-bg/80 to-bg-alt lg:bg-linear-to-r lg:from-bg-alt lg:via-bg-alt/30 lg:to-transparent" />

          <Container className="flex min-h-[calc(100svh-var(--header-h)-0.5rem)] flex-col !px-5 pb-6 pt-10 sm:!px-10 sm:pb-10 sm:pt-16 lg:min-h-[min(calc(100svh-var(--header-h)-0.75rem),52rem)] lg:!px-16 lg:pt-20">
            <div className="max-w-[42rem]">
              <p className="rise-in flex items-center gap-3 text-[0.8rem] font-semibold uppercase tracking-[0.24em] text-accent sm:text-[0.875rem]">
                <NeuroFitMark size={16} />
                {c.hero.eyebrow}
              </p>
              <h1 className="rise-in mt-6 text-[2.5rem] leading-[1.03] sm:text-6xl lg:text-[4.4rem]" style={{ animationDelay: "120ms" }}>
                <GoldTitle text={c.hero.title} />
              </h1>
              <p className="rise-in mt-6 max-w-[34rem] text-lg leading-relaxed text-ink-soft sm:text-xl" style={{ animationDelay: "220ms" }}>
                {c.hero.lead}
              </p>
              <div className="rise-in mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4" style={{ animationDelay: "340ms" }}>
                <a href="#rezerva" className={buttonClass("cta", "lg", "group w-full !px-6 sm:w-auto sm:!px-9")}>
                  {c.hero.cta}
                  <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a href="#experiente" className={buttonClass("outline", "lg", "w-full !px-7 sm:w-auto")}>
                  {c.hero.secondary}
                </a>
              </div>
            </div>

            <ul className="mt-auto grid gap-2.5 pt-14 md:max-w-4xl md:grid-cols-3 md:gap-4 lg:pt-10">
              {c.hero.stats.map((s, i) => (
                <li
                  key={s.label}
                  className="liquid-glass rise-in flex items-center gap-4 rounded-[20px] px-5 py-3.5 md:flex-col md:items-start md:gap-2 md:rounded-[24px] md:px-6 md:py-5"
                  style={{ animationDelay: `${520 + i * 110}ms` }}
                >
                  <span className="nf-gold w-[5.5rem] flex-none font-display text-[2rem] leading-none md:w-auto md:text-[2.6rem]">{s.value}</span>
                  <span className="text-base leading-snug text-ink/90">{s.label}</span>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      </section>

      {/* 2 · Video */}
      <section className={`${BAND} bg-bg`}>
        <Container>
          <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
            <Label center>{c.vsl.eyebrow}</Label>
            <h2 className={H2}>{c.vsl.title}</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-ink-soft sm:text-xl">{c.vsl.lead}</p>
          </div>
          <Reveal className="mx-auto max-w-5xl">
            <VideoPlayer video="neurofitVsl" title={c.vsl.playerTitle} className="!bg-surface !ring-accent/25" />
          </Reveal>
        </Container>
      </section>

      {/* 3 · The idea */}
      <section className={`${BAND} nf-glow bg-bg-alt`}>
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <Label>{c.concept.eyebrow}</Label>
              <h2 className={H2}>
                <GoldTitle text={c.concept.title} />
              </h2>
              <div className="mt-8 space-y-5 text-lg text-ink-soft sm:text-xl">
                {c.concept.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
            <Reveal className="lg:col-span-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius)] ring-1 ring-line lg:aspect-[4/5]">
                <Photo image="tpbm" locale={locale} width={1200} className="nf-photo object-[50%_40%]" />
                <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-bg/70 via-bg/0 to-bg/0" />
                <span aria-hidden="true" className="absolute bottom-5 left-5 flex items-center gap-2.5 sm:bottom-7 sm:left-7">
                  <NeuroFitMark size={20} />
                  <span className="font-display text-xl">NeuroFit</span>
                </span>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 4 · Who it's for */}
      <section className={`${BAND} bg-bg`}>
        <Container>
          <div className="mb-12 max-w-3xl sm:mb-14">
            <Label>{c.audience.eyebrow}</Label>
            <h2 className={H2}>{c.audience.title}</h2>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {c.audience.items.map((item, i) => (
              <li key={item.title}>
                <Reveal delay={i * 70} className="h-full">
                  <div className="flex h-full flex-col rounded-[var(--radius)] border border-line bg-surface p-7 shadow-[var(--shadow-card)]">
                    <span className="font-display text-base font-semibold tabular-nums text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <div className="nf-rule my-5" />
                    <h3 className="text-[1.5rem] leading-tight">{item.title}</h3>
                    <p className="mt-3 text-ink-soft">{item.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 5 · The experiences */}
      <section id="experiente" className={`${BAND} nf-glow bg-bg-alt`}>
        <Container>
          <div className="mb-12 max-w-3xl sm:mb-16">
            <Label>{c.experiences.eyebrow}</Label>
            <h2 className={H2}>
              <GoldTitle text={c.experiences.title} />
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-ink-soft sm:text-xl">{c.experiences.lead}</p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {c.experiences.items.map((x, i) => (
              <li key={x.name}>
                <Reveal delay={i * 80} className="h-full">
                  <article className="group flex h-full flex-col rounded-[var(--radius)] border border-line bg-surface p-7 transition duration-500 hover:border-accent/50 sm:p-8">
                    <h3 className="nf-gold text-[2.4rem] leading-none sm:text-[2.6rem]">{x.name}</h3>
                    <p className="mt-4 text-lg">{x.line}</p>
                    <div className="nf-rule my-6" />
                    <p className="text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-ink-soft">{c.experiences.forWhen}</p>
                    <ul className="mt-3 space-y-2">
                      {x.situations.map((s) => (
                        <li key={s} className="flex gap-3 text-ink-soft">
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
          <p className="mt-8 text-base text-ink-soft">{c.experiences.note}</p>
        </Container>
      </section>

      {/* 6 · The technology */}
      <section className={`${BAND} bg-bg`}>
        <Container>
          <div className="mb-12 max-w-3xl sm:mb-14">
            <Label>{c.tech.eyebrow}</Label>
            <h2 className={H2}>{c.tech.title}</h2>
          </div>
          <ul className="grid gap-10 md:grid-cols-3 md:gap-8">
            {c.tech.items.map((item, i) => (
              <li key={item.title} className="border-t border-line pt-7">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 items-center justify-center rounded-full font-display text-base font-semibold tabular-nums text-accent ring-1 ring-accent/40"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-[1.5rem] leading-tight">{item.title}</h3>
                <p className="mt-3 text-lg text-ink-soft">{item.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 7 · How a membership works (no prices) */}
      <section id="abonament" className={`${BAND} bg-bg-alt`}>
        <Container>
          <div className="mb-12 max-w-3xl sm:mb-16">
            <Label>{c.membership.eyebrow}</Label>
            <h2 className={H2}>{c.membership.title}</h2>
            <p className="mt-6 text-lg text-ink-soft sm:text-xl">{c.membership.lead}</p>
          </div>
          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {c.membership.steps.map((step, i) => (
              <li key={step.title}>
                <Reveal delay={i * 80}>
                  <div className="h-px bg-linear-to-r from-accent to-accent/0" />
                  <p className="mt-6 font-display text-base font-semibold tabular-nums text-accent">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 text-[1.5rem] leading-tight">{step.title}</h3>
                  <p className="mt-3 text-lg text-ink-soft">{step.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
          <div className="mt-14 flex flex-col gap-4 rounded-[20px] border border-accent/30 bg-surface px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p className="text-lg">{c.membership.note}</p>
            <a href={CLINIC.phoneHref} className="inline-flex min-h-11 items-center gap-2.5 whitespace-nowrap text-lg font-semibold text-accent">
              <PhoneIcon size={18} />
              {CLINIC.phone}
            </a>
          </div>
        </Container>
      </section>

      {/* 8 · Reviews */}
      <section className={`${BAND} bg-bg`}>
        <Container>
          <div className="mb-12 flex flex-col gap-6 sm:mb-14 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <Label>{c.reviews.eyebrow}</Label>
              <h2 className={H2}>{c.reviews.title}</h2>
            </div>
            <GoogleRatingBadge locale={locale} label={c.reviews.ratingLabel} className="self-start lg:self-auto" />
          </div>
          <GoogleReviewCards locale={locale} source={c.reviews.source} />
        </Container>
      </section>

      {/* 9 · Questions */}
      <section id="intrebari" className={`${BAND} bg-bg-alt`}>
        <Container narrow>
          <Label>{c.faq.eyebrow}</Label>
          <h2 className={`${H2} mb-10`}>{c.faq.title}</h2>
          <Faq items={c.faq.items} />
        </Container>
      </section>

      {/* 10 · Book the first experience */}
      <section id="rezerva" className={`${BAND} bg-bg`}>
        <Container>
          <div className="nf-glow grid gap-10 overflow-hidden rounded-[28px] bg-bg-alt px-5 py-10 ring-1 ring-accent/30 sm:rounded-[36px] sm:px-12 sm:py-16 lg:grid-cols-12 lg:gap-16 lg:px-16 lg:py-20">
            <div className="lg:col-span-5">
              <Label>{c.book.eyebrow}</Label>
              <h2 className="text-[2.3rem] leading-[1.05] sm:text-[3rem]">
                <GoldTitle text={c.book.title} />
              </h2>
              <p className="mt-6 text-lg text-ink-soft sm:text-xl">{c.book.text}</p>
            </div>
            <div className="lg:col-span-7">
              <NeuroFitForm copy={c.book} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
