import type { ReactNode } from "react";
import { Section, SectionHead, Eyebrow, CheckItem, Card, buttonClass, HeroPanel, keepHyphenated } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { FunnelFooter } from "@/components/layout/FunnelChrome";
import type { LpSomnContent } from "@/content/lp-somn";
import type { Locale } from "@/lib/i18n";
import { LpSomnApplyForm } from "./LpSomnApplyForm";
import { StickyApplyCta } from "./StickyApplyCta";

const FORM_ID = "aplica";

function ApplyCta({ label, className = "" }: { label: string; className?: string }) {
  return (
    <a href={`#${FORM_ID}`} className={buttonClass("cta", "lg", `w-full sm:w-auto ${className}`)}>
      {label}
    </a>
  );
}

function MidCta({ label }: { label: string }) {
  return (
    <Reveal className="mt-14 flex justify-center">
      <ApplyCta label={label} />
    </Reveal>
  );
}

function Lead({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`text-lg sm:text-xl ${className}`}>{children}</p>;
}

/** `/lp/somn` — sleep campaign LP, variant A (destination of the sleep quiz). */
export function LpSomnPage({ c, locale }: { c: LpSomnContent; locale: Locale }) {
  return (
    <div className="pb-24 sm:pb-0">
      {/* HERO */}
      <HeroPanel>
        <div className="mx-auto w-full max-w-5xl text-center">
          <Reveal>
            <h1 className="mx-auto max-w-4xl text-[2.6rem] leading-[1.04] sm:text-6xl lg:text-[4.6rem]">
              {c.hero.titleStart}
              {c.hero.titleEm}
            </h1>
          </Reveal>
          <Reveal delay={80}>
            <Lead className="mx-auto mt-6 max-w-2xl text-on-dark-soft">{c.hero.sub}</Lead>
          </Reveal>
          <Reveal delay={140} className="mx-auto mt-10 max-w-4xl">
            <VideoPlayer video="lpSomnVsl" title={c.hero.videoTitle} />
            <p className="mx-auto mt-5 max-w-2xl text-base text-on-dark-soft sm:text-lg">{c.hero.videoNote}</p>
          </Reveal>
          <Reveal className="mt-10">
            <ApplyCta label={c.ctaLabel} />
            <p className="mt-3 text-base text-on-dark-soft">{c.hero.btnSub}</p>
          </Reveal>
          <Reveal>
            <ul className="mx-auto mt-12 grid max-w-3xl gap-x-8 gap-y-4 border-t border-line pt-10 text-left text-base sm:grid-cols-2 sm:text-lg">
              {c.hero.facts.map((f) => (
                <CheckItem key={f}>{f}</CheckItem>
              ))}
            </ul>
          </Reveal>
        </div>
      </HeroPanel>

      {/* PROBLEM */}
      <Section tone="alt" id="problema">
        <SectionHead title={c.problem.title} center />
        <div className="grid gap-6 md:grid-cols-3">
          {c.problem.cards.map((card, i) => (
            <Reveal key={card.tag} delay={i * 80}>
              <Card className="h-full">
                <Eyebrow>{card.tag}</Eyebrow>
                <p className="text-lg sm:text-xl">{card.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mx-auto mt-14 max-w-3xl text-center font-display text-2xl leading-snug sm:text-3xl">
            {c.problem.pull}
          </p>
        </Reveal>
      </Section>

      {/* WHY NOTHING STUCK */}
      <Section tone="dark" id="de-ce-nu-a-tinut" narrow>
        <Reveal>
          <Eyebrow>{c.why.eyebrow}</Eyebrow>
          <h2 className="text-[2.1rem] sm:text-5xl">{c.why.title}</h2>
        </Reveal>
        <div className="mt-10 space-y-6 text-lg text-on-dark-soft sm:text-xl">
          <Reveal>
            <p className="text-xl text-on-dark sm:text-2xl">{c.why.first}</p>
          </Reveal>
          <Reveal>
            <p>{c.why.p1}</p>
          </Reveal>
          <Reveal>
            <p className="border-l-4 border-accent py-1 pl-5 font-display text-2xl text-on-dark sm:text-3xl">
              {keepHyphenated(c.why.highlight)}
            </p>
          </Reveal>
          <Reveal>
            <p>{c.why.p2}</p>
          </Reveal>
          <Reveal>
            <p className="font-semibold text-on-dark">{c.why.p3}</p>
          </Reveal>
        </div>
      </Section>

      {/* MECHANISM */}
      <Section id="mecanismul">
        <SectionHead title={c.mechanism.title} />
        <ol className="divide-y divide-line border-y border-line">
          {c.mechanism.steps.map((s) => (
            <li key={s.title}>
              <Reveal className="grid gap-3 py-8 sm:grid-cols-[11rem_1fr] sm:gap-10 sm:py-10">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent sm:pt-2">{s.label}</p>
                <div>
                  <h3 className="text-2xl sm:text-3xl">{s.title}</h3>
                  <p className="mt-3 text-lg text-ink-soft">{s.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
        <Reveal>
          <p className="mt-10 max-w-3xl rounded-[var(--radius)] bg-bg-alt p-6 text-lg sm:p-8">{c.mechanism.note}</p>
        </Reveal>
      </Section>

      {/* WHAT TO EXPECT */}
      <Section tone="alt" id="asteptari">
        <SectionHead title={c.expect.title} />
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {c.expect.steps.map((s, i) => (
            <li key={s.num}>
              <Reveal delay={i * 70} className="h-full">
                <Card className="h-full">
                  <p className="font-display text-5xl text-accent" aria-hidden="true">
                    {s.num}
                  </p>
                  <h3 className="mt-5 text-xl sm:text-2xl">{s.title}</h3>
                  <p className="mt-2 text-ink-soft">{s.text}</p>
                </Card>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>

      {/* BENEFITS */}
      <Section id="beneficii">
        <SectionHead title={c.benefits.title} center />
        <ul className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {c.benefits.items.map((b) => (
            <li key={b}>
              <Reveal className="flex h-full items-center gap-4 rounded-[var(--radius)] border border-line bg-surface px-6 py-5 text-lg font-semibold sm:text-xl">
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-accent text-sm font-bold text-on-accent"
                >
                  ✓
                </span>
                {b}
              </Reveal>
            </li>
          ))}
        </ul>
        <MidCta label={c.ctaLabel} />
      </Section>

      {/* WHAT THE VISIT INCLUDES */}
      <Section tone="alt" id="ce-include" narrow>
        <SectionHead title={c.includes.title} center />
        <Reveal>
          <ul className="space-y-5 text-lg">
            {c.includes.items.map((it) => (
              <CheckItem key={it.bold}>
                <strong>{it.bold}</strong> {it.text}
              </CheckItem>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          <div className="mt-10 rounded-[var(--radius)] bg-dark p-8 text-center text-on-dark sm:p-10">
            <p className="text-base uppercase tracking-[0.14em] text-on-dark-soft">{c.includes.priceLabel}</p>
            <p className="mt-3 font-display text-5xl sm:text-6xl">{c.includes.price}</p>
          </div>
          <p className="mt-5 text-center text-base text-ink-soft">{c.includes.note}</p>
        </Reveal>
        <MidCta label={c.ctaLabel} />
      </Section>

      {/* RESULTS */}
      <Section id="rezultate">
        <SectionHead title={c.results.title} center />
        <div className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0">
          {c.results.videos.map((v) => (
            <Reveal key={v.name} className="w-[85%] flex-none snap-center sm:w-auto">
              <VideoPlayer video={v.video} title={v.name} />
              <p className="mt-4 text-lg font-semibold">{v.name}</p>
              <p className="text-ink-soft">{v.role}</p>
            </Reveal>
          ))}
        </div>
        <div className="-mx-5 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0">
          {c.results.reviews.map((r) => (
            <Reveal key={r.name} className="w-[85%] flex-none snap-center sm:w-auto">
              <figure className="flex h-full flex-col rounded-[var(--radius)] border border-line bg-surface p-7 sm:p-8">
                <p className="text-lg tracking-[0.2em] text-accent" role="img" aria-label={c.results.starsLabel}>
                  ★★★★★
                </p>
                <blockquote className="mt-4 flex-1 font-display text-xl leading-snug">
                  {locale === "en" ? `“${r.quote}”` : `„${r.quote}”`}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-primary text-sm font-bold text-on-primary"
                  >
                    {r.initials}
                  </span>
                  <span>
                    <span className="block font-semibold">{r.name}</span>
                    <span className="block text-sm text-ink-soft">{r.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* WHO IT IS / ISN'T FOR */}
      <Section tone="alt" id="pentru-cine-nu-e">
        <SectionHead title={c.qualify.title} center />
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <Card className="h-full">
              <h3 className="text-2xl">{c.qualify.forTitle}</h3>
              <ul className="mt-6 space-y-4 text-lg">
                {c.qualify.forItems.map((i) => (
                  <CheckItem key={i}>{i}</CheckItem>
                ))}
              </ul>
            </Card>
          </Reveal>
          <Reveal delay={80}>
            <Card className="h-full">
              <h3 className="text-2xl">{c.qualify.notTitle}</h3>
              <ul className="mt-6 space-y-4 text-lg">
                {c.qualify.notItems.map((i) => (
                  <CheckItem key={i} negative>
                    {i}
                  </CheckItem>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* PROMISE */}
      <Section tone="dark" narrow>
        <SectionHead title={c.promise.title} center />
        <div className="space-y-6">
          {c.promise.rows.map((r) => (
            <Reveal key={r.bold}>
              <p className="border-l-4 border-accent pl-6 text-lg text-on-dark-soft sm:text-xl">
                <strong className="text-on-dark">{r.bold}</strong> {r.text}
              </p>
            </Reveal>
          ))}
        </div>
        <MidCta label={c.ctaLabel} />
      </Section>

      {/* FAQ */}
      <Section id="faq" narrow>
        <SectionHead title={c.faq.title} center />
        <div className="divide-y divide-line border-y border-line">
          {c.faq.items.map((f) => (
            <details key={f.q} open={f.open} className="group py-2">
              <summary className="flex items-start justify-between gap-6 py-4 text-lg font-semibold sm:text-xl">
                <span>{f.q}</span>
                <span
                  aria-hidden="true"
                  className="mt-1 flex h-7 w-7 flex-none items-center justify-center rounded-full border border-line text-accent transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-5 pr-12 text-lg text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
        <MidCta label={c.ctaLabel} />
      </Section>

      {/* APPLICATION FORM */}
      <Section tone="alt" id={FORM_ID}>
        <div className="mx-auto max-w-2xl">
          <div className="rounded-[var(--radius)] border border-line bg-surface p-6 text-ink shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)] sm:p-10">
            <h2 className="text-[2rem] leading-tight sm:text-4xl">{c.apply.title}</h2>
            <p className="mt-3 text-lg text-ink-soft">{c.apply.sub}</p>
            <div className="mt-8">
              <LpSomnApplyForm copy={c.apply.form} />
            </div>
            <p className="mt-6 text-center text-sm text-ink-soft">{c.apply.note}</p>
          </div>
        </div>
      </Section>

      <FunnelFooter locale={locale} legal={c.legal} />
      <StickyApplyCta label={c.ctaLabel} target={FORM_ID} />
    </div>
  );
}
