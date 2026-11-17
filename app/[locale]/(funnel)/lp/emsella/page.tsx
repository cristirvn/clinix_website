import type { Metadata } from "next";
import { Card, CheckItem, Container, Eyebrow, Faq, Section, SectionHead, buttonClass, HeroPanel } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { FunnelFooter } from "@/components/layout/FunnelChrome";
import { EmsellaApply } from "@/components/lp-emsella/EmsellaApply";
import { StickyApplyCta } from "@/components/lp-emsella/StickyApplyCta";
import { getLpEmsella } from "@/content/lp-emsella";
import { alternatesFor, type Locale } from "@/lib/i18n";
import { RelatedArticles } from "@/components/pages/RelatedArticles";
import { JsonLd } from "@/components/seo/JsonLd";
import { landingPageNode } from "@/components/seo/schema";
import { getCondition } from "@/content/conditions";

const PATH = "/lp/emsella";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const c = getLpEmsella(locale);
  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: alternatesFor(PATH, locale),
  };
}

function Cta({ label, variant = "cta", className = "" }: { label: string; variant?: "cta" | "light"; className?: string }) {
  return (
    <a href="#aplica" className={buttonClass(variant, "lg", `w-full sm:w-auto ${className}`)}>
      {label}
    </a>
  );
}

export default async function LpEmsellaPage({ params }: Props) {
  const locale = (await params).locale as Locale;
  const c = getLpEmsella(locale);

  return (
    <>
      <JsonLd
        data={landingPageNode({
          path: PATH,
          name: c.meta.title,
          description: c.meta.description,
          condition: getCondition(locale, "planseu-pelvin")?.title,
          locale,
        })}
      />
      {/* HERO */}
      <HeroPanel>
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="t-h1">
              {c.hero.titleLead} <em>{c.hero.titleEm}</em>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-on-dark-soft sm:text-xl">{c.hero.sub}</p>
          </div>
          <Reveal className="mx-auto mt-12 max-w-4xl">
            <VideoPlayer video="lpEmsellaVsl" title={c.hero.videoTitle} />
            <p className="mt-4 text-center text-on-dark-soft">{c.hero.videoNote}</p>
          </Reveal>
          <div className="mt-10 text-center">
            <Cta label={c.cta} />
            <p className="mt-3 text-on-dark-soft">{c.hero.ctaSub}</p>
          </div>
          <ul className="mx-auto mt-14 grid max-w-4xl gap-x-10 gap-y-4 border-t border-line pt-10 text-lg sm:grid-cols-2">
            {c.hero.facts.map((f) => (
              <CheckItem key={f}>{f}</CheckItem>
            ))}
          </ul>
      </HeroPanel>

      {/* SEMNELE */}
      <Section tone="alt" id="semnele">
        <SectionHead title={c.signs.title} center />
        <div className="grid gap-5 md:grid-cols-3">
          {c.signs.cards.map((card, i) => (
            <Reveal key={card.tag} delay={i * 80}>
              <Card className="h-full">
                <p className="text-[0.875rem] font-semibold text-accent">{card.tag}</p>
                <p className="mt-4 text-lg">{card.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mx-auto mt-16 max-w-3xl text-center font-display text-3xl leading-tight sm:text-4xl">{c.signs.pull}</p>
        </Reveal>
      </Section>

      {/* CAUZA */}
      <Section id="cauza" narrow>
        <SectionHead title={c.cause.title} className="mb-10 sm:mb-12" />
        <div className="space-y-6 text-lg sm:text-xl">
          {c.cause.paragraphs.map((p) =>
            p.highlight ? (
              <p key={p.text} className="border-l-4 border-accent py-1 pl-6 font-display text-2xl leading-snug sm:text-3xl">
                {p.text}
              </p>
            ) : (
              <p key={p.text} className="text-ink-soft">
                {p.text}
              </p>
            ),
          )}
        </div>
      </Section>

      {/* MECANISMUL */}
      <Section tone="dark" id="mecanismul">
        <SectionHead title={c.mechanism.title} />
        <ol className="divide-y divide-on-dark/15 border-y border-on-dark/15">
          {c.mechanism.steps.map((s) => (
            <li key={s.title} className="grid gap-3 py-8 sm:grid-cols-[16rem_1fr] sm:gap-10 sm:py-10">
              <p className="font-display text-3xl leading-tight text-accent sm:text-4xl">{s.label}</p>
              <div>
                <h3 className="text-2xl">{s.title}</h3>
                <p className="mt-3 text-lg text-on-dark-soft">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-10 max-w-3xl text-lg text-on-dark-soft">{c.mechanism.note}</p>
      </Section>

      {/* ACELAȘI MUȘCHI */}
      <Section tone="alt" id="acelasi-muschi">
        <SectionHead title={c.muscle.title} center />
        <div className="grid gap-5 md:grid-cols-2">
          {c.muscle.columns.map((col) => (
            <Reveal key={col.title}>
              <Card className="h-full">
                <h3 className="text-2xl sm:text-3xl">{col.title}</h3>
                <div className="mt-5 space-y-4 text-lg text-ink-soft">
                  {col.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-2xl text-center text-xl font-semibold">{c.muscle.note}</p>
      </Section>

      {/* PROCES */}
      <Section id="asteptari">
        <SectionHead title={c.process.title} />
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {c.process.steps.map((s, i) => (
            <li key={s.title} className="rounded-[var(--radius)] border border-line bg-surface p-7">
              <p className="font-display text-4xl text-accent">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-xl">{s.title}</h3>
              <p className="mt-2 text-ink-soft">{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* BENEFICII */}
      <Section tone="alt" id="beneficii">
        <SectionHead title={c.benefits.title} center />
        <ul className="mx-auto grid max-w-4xl gap-x-10 gap-y-5 text-lg sm:grid-cols-2 sm:text-xl">
          {c.benefits.items.map((b) => (
            <CheckItem key={b}>{b}</CheckItem>
          ))}
        </ul>
        <div className="mt-14 text-center">
          <Cta label={c.cta} />
        </div>
      </Section>

      {/* CE PRIMEȘTI */}
      <Section id="ce-primesti">
        <SectionHead title={c.offer.title} center />
        <ul className="mx-auto max-w-3xl space-y-5 text-lg">
          {c.offer.items.map((it) => (
            <CheckItem key={it.lead}>
              <strong className="font-semibold">{it.lead}</strong> <span className="text-ink-soft">{it.text}</span>
            </CheckItem>
          ))}
        </ul>
        <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-3">
          {c.offer.prices.map((p, i) => (
            <div
              key={p.label}
              className={`rounded-[var(--radius)] border p-7 text-center ${
                i === c.offer.prices.length - 1 ? "border-dark bg-dark text-on-dark" : "border-line bg-surface"
              }`}
            >
              <p className={`text-sm font-semibold ${i === c.offer.prices.length - 1 ?"text-on-dark-soft":"text-ink-soft"}`}>
                {p.label}
              </p>
              <p className="mt-3 font-display text-4xl sm:text-[2.6rem]">{p.amount}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-3xl space-y-4 text-lg text-ink-soft">
          {c.offer.notes.map((n) => (
            <p key={n}>{n}</p>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Cta label={c.cta} />
        </div>
      </Section>

      {/* DOVADA */}
      <Section tone="dark" id="rezultate">
        <SectionHead title={c.proof.title} lead={c.proof.lead} center />
        <Reveal className="mx-auto max-w-3xl">
          <VideoPlayer video="lpEmsellaTestimonial" title={`${c.proof.name} · ${c.proof.role}`} />
        </Reveal>
      </Section>

      {/* PENTRU CINE E / NU E */}
      <Section id="pentru-cine-nu-e">
        <SectionHead title={c.fit.title} center />
        <div className="grid gap-5 md:grid-cols-2">
          <Card className="h-full">
            <h3 className="text-2xl">{c.fit.forTitle}</h3>
            <ul className="mt-6 space-y-4 text-lg">
              {c.fit.forItems.map((x) => (
                <CheckItem key={x}>{x}</CheckItem>
              ))}
            </ul>
          </Card>
          <Card className="h-full">
            <h3 className="text-2xl">{c.fit.notTitle}</h3>
            <ul className="mt-6 space-y-4 text-lg">
              {c.fit.notItems.map((x) => (
                <CheckItem key={x} negative>
                  {x}
                </CheckItem>
              ))}
            </ul>
          </Card>
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-lg text-ink-soft">{c.fit.note}</p>
      </Section>

      {/* PROMISIUNE */}
      <Section tone="dark" id="promisiune" narrow>
        <SectionHead title={c.promise.title} center />
        <div className="space-y-6">
          {c.promise.rows.map((r) => (
            <div key={r.lead} className="rounded-[var(--radius)] border border-on-dark/15 p-7 sm:p-8">
              <p className="text-xl font-semibold sm:text-2xl">{r.lead}</p>
              <p className="mt-3 text-lg text-on-dark-soft">{r.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Cta label={c.cta} />
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="alt" id="faq" narrow>
        <SectionHead title={c.faq.title} center />
        <Faq items={c.faq.items} />
        <div className="mt-12 text-center">
          <Cta label={c.cta} />
        </div>
      </Section>

      {/* APLICĂ */}
      <section id="aplica" className="scroll-mt-20 bg-dark py-20 text-on-dark sm:py-28">
        <Container narrow>
          <div className="mb-10 text-center">
            <Eyebrow>EmSella</Eyebrow>
            <h2 className="text-[2.1rem] sm:text-5xl">{c.apply.title}</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-on-dark-soft sm:text-xl">{c.apply.sub}</p>
          </div>
          <div className="rounded-[var(--radius)] bg-surface p-6 text-ink shadow-none sm:p-10">
            <EmsellaApply form={c.form} calendar={c.calendar} />
          </div>
          <p className="mt-6 text-center text-on-dark-soft">{c.apply.note}</p>
        </Container>
      </section>

      <RelatedArticles topics={["emsella", "planseu-pelvin"]} locale={locale} />

      <div className="bg-bg-alt pb-24 sm:pb-0">
        <FunnelFooter locale={locale} legal={c.legal} />
      </div>

      <StickyApplyCta label={c.sticky} />
    </>
  );
}
