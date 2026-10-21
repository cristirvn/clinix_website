import { Section } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { FunnelFooter } from "@/components/layout/FunnelChrome";
import type { LpSomnContent } from "@/content/lp-somn";
import type { Locale } from "@/lib/i18n";
import { CLINIC } from "@/lib/site";

/** `/lp/somn/multumim` — thank-you screen after the variant-A application form. */
export function LpSomnThanks({ c, locale }: { c: LpSomnContent; locale: Locale }) {
  const t = c.thanks;
  return (
    <>
      <Section narrow className="text-center">
        <Reveal>
          <span
            aria-hidden="true"
            className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-accent text-on-accent"
          >
            <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </span>
          <h1 className="text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl">{t.title}</h1>
        </Reveal>
        <Reveal delay={80}>
          <p className="mx-auto mt-8 max-w-2xl text-lg sm:text-xl">{t.p1}</p>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-soft sm:text-xl">{t.p2}</p>
        </Reveal>
      </Section>
      <Section tone="alt" narrow className="text-center">
        <p className="text-lg">
          {t.contactLead}{" "}
          <a href={`mailto:${CLINIC.email}`} className="font-semibold text-accent underline underline-offset-4">
            {CLINIC.email}
          </a>{" "}
          {t.or}{" "}
          <a href={CLINIC.phoneHref} className="font-semibold text-accent underline underline-offset-4">
            {CLINIC.phone}
          </a>
          .
        </p>
      </Section>
      <FunnelFooter locale={locale} legal={c.legal} />
    </>
  );
}
