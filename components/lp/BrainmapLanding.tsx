import type { ReactNode } from "react";
import { Container, Eyebrow, Faq, Section, SectionHead, buttonClass } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { FunnelFooter } from "@/components/layout/FunnelChrome";
import { BrainmapForm } from "@/components/lp/BrainmapForm";
import { Testimonials } from "@/components/lp/Testimonials";
import { StickyBar } from "@/components/lp/StickyBar";
import { EegTrace } from "@/components/lp/EegTrace";
import type { Locale } from "@/lib/i18n";
import { CLINIC } from "@/lib/site";
import type { BrainmapLp } from "@/content/lps/types";
import type { BrainmapFixed } from "@/content/lps/fixed/types";

const HERO_ID = "lp-hero";
const FORM_ID = "aplica";

/**
 * The BrainMap landing page — one template for the eight condition LPs and
 * /brainmap. `lp` = niche copy, `fixed` = copy shared by all of them.
 *
 * Section order is deliberate (client's): the VSL comes AFTER the visitor has
 * recognised themselves and accepted that what's missing is a measurement.
 * `vslFirst` moves it right after the hero — for /brainmap only, where the
 * visitor arrives already asking "what is BrainMap?".
 */
export function BrainmapLanding({
  locale,
  lp,
  fixed: f,
  formId,
  vslFirst = false,
}: {
  locale: Locale;
  lp: BrainmapLp;
  fixed: BrainmapFixed;
  /** GHL form id / tag: `lp-<slug>` or `brainmap-general`. */
  formId: string;
  vslFirst?: boolean;
}) {
  const cta = (variant: "cta" | "light" = "cta") => (
    <a href={`#${FORM_ID}`} className={buttonClass(variant, "lg", "w-full sm:w-auto")}>
      {f.cta}
    </a>
  );

  const vsl = (
    <Section tone="dark" id="video">
      <SectionHead center eyebrow={f.vsl.eyebrow} title={f.vsl.title} lead={f.vsl.lede} />
      <Reveal className="mx-auto max-w-4xl">
        <VideoPlayer video="brainmapVsl" title={f.vsl.playerTitle} />
      </Reveal>
      <ol className="mx-auto mt-12 grid max-w-5xl gap-8 sm:mt-16 md:grid-cols-3">
        {f.vsl.points.map((p, i) => (
          <li key={p.title} className="border-t border-on-dark/20 pt-6">
            <span className="font-display text-lg text-accent">0{i + 1}</span>
            <h3 className="mt-2 text-2xl">{p.title}</h3>
            <p className="mt-2 text-on-dark-soft">{p.text}</p>
          </li>
        ))}
      </ol>
      <div className="mt-14 text-center">{cta("light")}</div>
    </Section>
  );

  return (
    <>
      {/* 1 · HERO */}
      <section id={HERO_ID} className="relative overflow-hidden bg-bg pb-14 pt-16 text-ink sm:pb-20 sm:pt-24">
        <Container>
          <div className="max-w-4xl">
            <h1
              className="text-[2.6rem] sm:text-6xl lg:text-7xl [&_em]:not-italic [&_em]:text-accent"
              // Client copy (static content file), not user input.
              dangerouslySetInnerHTML={{ __html: lp.hero.titleHtml }}
            />
            <p className="mt-6 max-w-2xl text-lg text-ink-soft sm:text-xl">{lp.hero.lede}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              {cta()}
              <p className="text-base text-ink-soft">{f.hero.micro}</p>
            </div>
          </div>
        </Container>
        <EegTrace className="mt-14 text-ink sm:mt-16" />
        <Container>
          <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
            {f.hero.facts.map((fact) => (
              <li key={fact} className="flex items-start gap-3 text-base font-semibold">
                <span aria-hidden="true" className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-accent text-xs text-on-accent">
                  ✓
                </span>
                {fact}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {vslFirst && vsl}

      {/* 2 · IDENTIFICARE */}
      <Section tone={vslFirst ? "default" : "alt"}>
        <SectionHead center eyebrow={f.identificare.eyebrow} title={f.identificare.title} />
        <div className="grid gap-5 md:grid-cols-3">
          {lp.identificare.cards.map((card, i) => (
            <Reveal key={card.tag} delay={i * 90}>
              <div className="h-full rounded-[var(--radius)] border border-line bg-surface p-7 text-ink sm:p-8">
                <span className="text-[0.8rem] font-bold uppercase tracking-[0.18em] text-accent">{card.tag}</span>
                <p className="mt-4 text-xl leading-relaxed">{card.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mx-auto mt-14 max-w-3xl text-center font-display text-3xl sm:text-4xl">{lp.identificare.pull}</p>
      </Section>

      {/* 3 · DE CE NU A ȚINUT */}
      <Section tone={vslFirst ? "alt" : "default"} narrow>
        <Eyebrow>{f.why.eyebrow}</Eyebrow>
        <h2 className="text-[2.1rem] sm:text-5xl">{f.why.title}</h2>
        <div className="mt-10 space-y-6 text-lg sm:text-xl">
          <p className="font-semibold">{lp.why.tried}</p>
          <p className="text-ink-soft">{lp.why.assumption}</p>
          <p className="text-ink-soft">{lp.why.cost}</p>
        </div>
        <p className="my-12 border-l-4 border-accent pl-6 font-display text-3xl sm:text-4xl">{f.why.kicker}</p>
        <div className="space-y-6 text-lg sm:text-xl">
          <p className="text-ink-soft">{lp.why.analogy}</p>
          <p className="font-semibold">{f.why.closing}</p>
        </div>
      </Section>

      {!vslFirst && vsl}

      {/* 5 · MECANISMUL */}
      <Section>
        <SectionHead
          center
          eyebrow={f.mechanism.eyebrow}
          title={
            <>
              {f.mechanism.title[0]}
              <br />
              <span className="text-accent">{f.mechanism.title[1]}</span>
            </>
          }
        />
        <ol className="mx-auto max-w-4xl divide-y divide-line border-y border-line">
          {f.mechanism.steps.map((s) => (
            <li key={s.title} className="grid gap-4 py-8 sm:grid-cols-[10rem_1fr] sm:gap-10 sm:py-10">
              <span className="self-start justify-self-start rounded-full border-2 border-accent px-4 py-1.5 text-sm font-bold uppercase tracking-[0.12em] text-accent">
                {s.badge}
              </span>
              <div>
                <h3 className="text-2xl sm:text-3xl">{s.title}</h3>
                <p className="mt-3 text-lg text-ink-soft">{s.text ?? lp.mapSentence}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mx-auto mt-10 max-w-4xl rounded-[var(--radius)] bg-bg-alt p-6 text-lg sm:p-8">{f.mechanism.note}</p>
      </Section>

      {/* 6 · CE INCLUDE VIZITA */}
      <Section tone="alt" narrow>
        <SectionHead center eyebrow={f.visit.eyebrow} title={f.visit.title} />
        <div className="overflow-hidden rounded-[var(--radius)] border border-line bg-surface text-ink">
          <ul className="divide-y divide-line">
            {f.visit.rows.map((row) => (
              <li key={row.title} className="flex gap-4 p-6 sm:p-8">
                <span aria-hidden="true" className="mt-1 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-accent text-sm font-bold text-on-accent">
                  ✓
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl">{row.title}</h3>
                  <p className="mt-1 text-ink-soft">{row.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 bg-dark p-6 text-on-dark sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <span className="text-on-dark-soft">{f.visit.totalLabel}</span>
            <span className="font-display text-5xl sm:text-6xl">{f.visit.price}</span>
          </div>
        </div>
        <p className="mt-6 text-center text-ink-soft">{f.visit.keep}</p>
        <div className="mt-10 text-center">{cta()}</div>
      </Section>

      {/* 7 · DOVEZI */}
      <Section id="rezultate">
        <SectionHead center eyebrow={f.proof.eyebrow} title={f.proof.title} lead={f.proof.lede} />
        <Testimonials copy={f.proof} />
      </Section>

      {/* 8 · CALIFICARE */}
      <Section tone="alt">
        <SectionHead center eyebrow={f.qualify.eyebrow} title={f.qualify.title} />
        <div className="grid gap-5 md:grid-cols-2">
          <QualifyList title={f.qualify.fitsTitle} rows={[...lp.qualify.fits, ...f.qualify.fitsFixed]} />
          <QualifyList
            negative
            title={f.qualify.notTitle}
            rows={[...f.qualify.notFixed, ...(lp.qualify.extraExclusion ? [lp.qualify.extraExclusion] : [])]}
          />
        </div>
      </Section>

      {/* 9 · CE PROMITEM ȘI CE NU */}
      <Section tone="dark">
        <SectionHead center eyebrow={f.promise.eyebrow} title={f.promise.title} />
        <div className="mx-auto max-w-4xl space-y-5">
          {f.promise.bands.map((b) => (
            <div key={b.strong} className="flex gap-5 rounded-[var(--radius)] border border-on-dark/15 p-6 sm:p-8">
              <span aria-hidden="true" className="text-2xl leading-none text-accent">
                ◈
              </span>
              <p className="text-lg text-on-dark-soft sm:text-xl">
                <b className="font-semibold text-on-dark">{b.strong}</b> {b.rest}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">{cta("light")}</div>
      </Section>

      {/* 10 · FAQ */}
      <Section tone="alt" id="faq" narrow>
        <SectionHead center eyebrow={f.faq.eyebrow} title={f.faq.title} />
        <Faq items={[...lp.faq, ...f.faq.items]} />
      </Section>

      {/* 11 · FORMULAR */}
      <Section id={FORM_ID} narrow>
        <SectionHead center eyebrow={f.formSection.eyebrow} title={lp.form.title} lead={f.formSection.lede} />
        <ol className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {f.formSection.flow.map((s) => (
            <li key={s.n} className="rounded-[var(--radius)] border border-line bg-bg-alt p-4 text-center">
              <span className="block font-display text-2xl text-accent">{s.n}</span>
              <span className="mt-1 block text-sm leading-snug font-semibold">
                {s.a}
                <br />
                {s.b}
              </span>
            </li>
          ))}
        </ol>
        <BrainmapForm lp={lp} copy={f.form} formId={formId} />
      </Section>

      <PageNav f={f} />
      <FunnelFooter locale={locale} legal={lp.legal} />
      {/* Room so the sticky bar never covers the footer on mobile. */}
      <div className="h-20 bg-bg-alt md:hidden" aria-hidden="true" />

      <StickyBar label={f.sticky.label} sub={f.sticky.sub} cta={f.headerCta} heroId={HERO_ID} formId={FORM_ID} />
    </>
  );
}

function QualifyList({ title, rows, negative = false }: { title: string; rows: string[]; negative?: boolean }) {
  return (
    <div className="rounded-[var(--radius)] border border-line bg-surface p-7 text-ink sm:p-9">
      <h3 className="text-2xl sm:text-3xl">{title}</h3>
      <ul className="mt-6 space-y-4 text-lg">
        {rows.map((row) => (
          <li key={row} className="flex gap-3">
            <span
              aria-hidden="true"
              className={`mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full text-xs font-bold ${
                negative ? "bg-danger/15 text-danger" : "bg-accent text-on-accent"
              }`}
            >
              {negative ? "✕" : "✓"}
            </span>
            <span>{row}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PageNav({ f }: { f: BrainmapFixed }) {
  const links: Array<[string, ReactNode]> = [
    ["#video", f.footer.links.video],
    ["#rezultate", f.footer.links.results],
    ["#faq", f.footer.links.faq],
    [`#${FORM_ID}`, f.footer.links.apply],
  ];
  return (
    <nav aria-label={f.footer.pageTitle} className="border-t border-line bg-bg text-ink">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-display text-xl">{CLINIC.name}</p>
          <p className="mt-1 text-sm uppercase tracking-[0.16em] text-ink-soft">{f.footer.tagline}</p>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-ink-soft">{f.footer.pageTitle}</p>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 font-semibold">
            {links.map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-accent">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </nav>
  );
}
