import { ButtonLink, CheckItem, Faq, Section, SectionHead } from "@/components/ui/primitives";
import type { PricingContent } from "@/content/pages/ro/pricing";

/** BrainMap — the anchor offer: big price, what's included, deduction note, one button. */
export function FeaturedOffer({ content }: { content: PricingContent["featured"] }) {
  return (
    <section className="bg-bg pb-20 text-ink sm:pb-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid overflow-hidden rounded-[var(--radius-media)] bg-surface ring-1 ring-line lg:grid-cols-[1fr_1.1fr]">
          <div className="p-8 sm:p-12">
            <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-[0.875rem] font-semibold text-on-accent">
              {content.badge}
            </span>
            <h2 className="mt-6 text-4xl sm:text-5xl">{content.name}</h2>
            <p className="mt-6 font-display text-6xl leading-none sm:text-7xl">{content.price}</p>
            <p className="mt-4 text-lg text-ink-soft">{content.unit}</p>
            <p className="mt-8 border-l-2 border-accent pl-5 text-lg font-semibold">{content.deduction}</p>
            <ButtonLink href={content.cta.href} size="lg" className="mt-10 w-full sm:w-auto">
              {content.cta.label}
            </ButtonLink>
          </div>
          <div className="border-t border-line bg-bg-alt p-8 sm:p-12 lg:border-l lg:border-t-0">
            <h3 className="font-body text-[0.875rem] font-semibold text-accent">{content.includesTitle}</h3>
            <ul className="mt-6 space-y-5 text-lg">
              {content.includes.map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Treatments with an anchor price per session; packages listed underneath. */
export function PriceList({ content }: { content: PricingContent["list"] }) {
  return (
    <Section tone="alt">
      <SectionHead title={content.title} />
      <ul className="divide-y divide-line border-y border-line">
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
