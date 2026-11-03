import { ButtonLink, Container } from "@/components/ui/primitives";
import { Photo } from "@/components/ui/Photo";
import { ArrowIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/ui/icons";
import { EegTrace } from "@/components/home/EegTrace";
import type { HomeContent } from "@/content/pages/home";
import type { Locale } from "@/lib/i18n";
import { CLINIC } from "@/lib/site";
import { getDictionary } from "@/lib/dictionary";

/**
 * Closing band — one panel, two halves: the same single action as the hero on
 * the left; on the right a calm photo with how to reach us (phone, WhatsApp,
 * address) on a glass card.
 */
export function FinalCta({ final, locale }: { final: HomeContent["final"]; locale: Locale }) {
  const dict = getDictionary(locale);
  return (
    <section className="bg-bg py-20 text-ink sm:py-28">
      <Container>
        <div className="grid overflow-hidden rounded-[32px] bg-surface shadow-[var(--shadow-soft)] ring-1 ring-line lg:grid-cols-2">
          <div className="flex flex-col px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <EegTrace className="mb-10 w-44 opacity-90" strokeWidth={2} />
            <h2 className="text-[2.3rem] leading-[1.06] sm:text-[3.2rem] lg:text-[3.5rem]">{final.title}</h2>
            <p className="mt-6 text-lg text-ink-soft sm:text-xl">{final.lead}</p>
            <div className="mt-10">
              <ButtonLink href="/brainmap" size="lg" className="group w-full sm:w-auto">
                {final.cta}
                <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </ButtonLink>
            </div>
            <p className="mt-5 text-ink-soft">{final.note}</p>
          </div>

          <div data-tone="dark" className="relative isolate flex min-h-[26rem] flex-col justify-end bg-dark p-5 text-on-dark sm:p-8">
            <div aria-hidden="true" className="absolute inset-0 -z-20">
              <Photo image="consult" locale={locale} width={1200} />
            </div>
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-t from-dark/85 via-dark/20 to-dark/0" />

            <div className="liquid-glass rounded-[22px] p-5 sm:p-7">
              <p className="text-[0.875rem] font-semibold uppercase tracking-[0.18em] text-accent">{final.reach}</p>
              <ul className="mt-4 space-y-1">
                <li>
                  <a href={CLINIC.phoneHref} className="flex min-h-12 items-center gap-3 text-lg font-semibold hover:underline">
                    <PhoneIcon className="flex-none text-accent" />
                    {CLINIC.phone}
                  </a>
                </li>
                <li>
                  <a href={CLINIC.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center gap-3 text-lg font-semibold hover:underline">
                    <WhatsAppIcon className="flex-none text-accent" />
                    {dict.common.whatsapp}
                  </a>
                </li>
                <li>
                  <a href={CLINIC.mapsHref} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-start gap-3 py-2 text-on-dark/90 hover:underline">
                    <PinIcon className="mt-0.5 flex-none text-accent" />
                    <span>
                      <span className="sr-only">{final.address}: </span>
                      {CLINIC.address}
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
