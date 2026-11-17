import { ButtonLink, CheckItem, Faq, Section, SectionHead } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { StatNumber } from "@/components/ui/StatNumber";
import type { PricingContent } from "@/content/pages/ro/pricing";
import type { Locale } from "@/lib/i18n";

/**
 * BrainMap — the anchor offer: a lit navy panel (big price that rolls up,
 * deduction note, one button) beside what's included; a light travels
 * round the card's edge.
 */
export function FeaturedOffer({ content, locale }: { content: PricingContent["featured"]; locale: Locale }) {
  return (
    <section className="bg-bg pb-20 pt-10 text-ink sm:pb-28 sm:pt-16">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="relative grid overflow-hidden rounded-[var(--radius-panel)] bg-surface shadow-[var(--shadow-float)] ring-1 ring-line [--beam-r:var(--radius-panel)] lg:grid-cols-[1fr_1.1fr]">
            <div data-tone="dark" className="bg-vital grain relative isolate p-7 text-on-dark sm:p-12">
              <span className="chip">
                <span aria-hidden="true" className="live-dot" />
                {content.badge}
              </span>
              <h2 className="mt-6 text-4xl sm:text-5xl">{content.name}</h2>
              <p className="mt-6 font-display text-[4rem] font-semibold leading-none tracking-[-0.04em] sm:text-[5.5rem]">
                <StatNumber value={content.price} locale={locale} />
              </p>
              <p className="mt-4 text-lg text-on-dark-soft">{content.unit}</p>
              <p className="mt-8 rounded-[var(--radius)] border border-line bg-white/5 px-5 py-4 text-lg font-semibold">{content.deduction}</p>
              <ButtonLink href={content.cta.href} size="lg" className="btn-shine mt-10 w-full sm:w-auto">
                {content.cta.label}
              </ButtonLink>
            </div>
            <div className="p-7 sm:p-12">
              <h3 className="font-body text-[0.95rem] font-semibold text-accent">{content.includesTitle}</h3>
              <ul className="mt-6 space-y-5 text-lg">
                {content.includes.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </div>
            <span aria-hidden="true" className="beam" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Treatments with an anchor price per session; packages listed underneath. */
export function PriceList({ content }: { content: PricingContent["list"] }) {
  return (
    <Section tone="alt">
      <SectionHead title={content.title} />
      <ul className="grid gap-3 sm:gap-4 [&>li]:rounded-[var(--radius-media)] [&>li]:border [&>li]:border-line [&>li]:bg-surface [&>li]:px-6 [&>li]:shadow-[var(--shadow-lift)] sm:[&>li]:px-10">
        {content.items.map((item) => (
          <li key={item.name} className="grid gap-4 py-8 sm:grid-cols-[1fr_auto] sm:gap-10 sm:py-10">
            <div>
              <h3 className="text-2xl sm:text-3xl">{item.name}</h3>
              <p className="mt-2 max-w-xl text-ink-soft">{item.description}</p>
              {item.link && (
                <ButtonLink href={item.link.href} variant="ghost" className="mt-4">
                  {item.link.label}
                </ButtonLink>
              )}
            </div>
            <div className="sm:text-right">
              <p className="font-display text-4xl leading-none sm:text-5xl">
                {item.price ?? <span className="text-3xl text-ink-soft sm:text-4xl">{content.onRequest}</span>}
                {item.price && <span className="ml-2 font-body text-base text-ink-soft">{item.unit}</span>}
              </p>
              {item.options && (
                <ul className="mt-5 space-y-2 text-lg">
                  {item.options.map((o) => (
                    <li key={o.label} className="flex justify-between gap-6 sm:justify-end">
                      <span className="text-ink-soft">{o.label}</span>
                      <span className="font-semibold">{o.price}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function PricingFaq({ content }: { content: PricingContent["faq"] }) {
  return (
    <Section narrow>
      <SectionHead title={content.title} />
      <Faq items={content.items} />
    </Section>
  );
}
