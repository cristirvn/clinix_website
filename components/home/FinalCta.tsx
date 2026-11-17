import { ButtonLink, Container } from "@/components/ui/primitives";
import { Photo } from "@/components/ui/Photo";
import { ArrowIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/ui/icons";
import { EegTrace } from "@/components/home/EegTrace";
import type { HomeContent } from "@/content/pages/home";
import type { Locale } from "@/lib/i18n";
import { CLINIC } from "@/lib/site";
import { getDictionary } from "@/lib/dictionary";

/**
 * Section 4 — the close. One inset navy panel that mirrors the hero: the
 * headline and the same single action on the left, a calm photo on the
 * right with the three ways to reach us on a glass card. It replaces the
 * footer's own call-to-action band on this page (`data-final-cta`, see
 * globals.css), so the page ends once, quickly.
 */
export function FinalCta({ final, locale }: { final: HomeContent["final"]; locale: Locale }) {
  const dict = getDictionary(locale);
  const reach = [
    { href: CLINIC.phoneHref, icon: <PhoneIcon className="flex-none text-accent" />, label: CLINIC.phone, strong: true },
    { href: CLINIC.whatsappHref, icon: <WhatsAppIcon className="flex-none text-accent" />, label: dict.common.whatsapp, strong: true, external: true },
    { href: CLINIC.mapsHref, icon: <PinIcon className="flex-none text-accent" />, label: CLINIC.address, sr: `${final.address}: `, external: true },
  ];
  return (
    <section data-final-cta className="bg-bg py-20 sm:py-28">
      <Container>
        <div data-tone="dark" className="bg-vital relative isolate grid overflow-hidden rounded-[var(--radius-media)] text-on-dark lg:grid-cols-2">
          <div className="relative z-10 flex flex-col px-5 pb-10 pt-12 sm:px-12 sm:pb-16 sm:pt-20 lg:px-16 lg:py-24">
            <EegTrace draw className="mb-10 w-40 opacity-90 sm:w-48" strokeWidth={2} />
            <h2 className="t-h2 max-w-xl">{final.title}</h2>
            <div className="mt-10">
              <ButtonLink href="/brainmap" size="lg" className="w-full !px-4 max-[420px]:!text-base sm:w-auto sm:!px-9">
                {final.cta}
                <ArrowIcon />
              </ButtonLink>
            </div>
            <p className="mt-5 text-base text-on-dark-soft">{final.note}</p>
          </div>

          <div className="relative isolate flex min-h-[25rem] flex-col justify-end p-3 sm:p-6 lg:min-h-0">
            {/* The photo fades into the navy (a mask, not an overlay), so there is no seam. */}
            <div aria-hidden="true" className="fade-photo absolute inset-0 -z-20 lg:-left-[18%]">
              <Photo image="consult" locale={locale} width={1200} />
            </div>

            <div className="liquid-glass rounded-[var(--radius)] p-4 sm:p-6 lg:ml-auto lg:max-w-md">
              <p className="label px-2 text-accent">{final.reach}</p>
              <ul className="mt-2">
                {reach.map((r) => (
                  <li key={r.href}>
                    <a
                      href={r.href}
                      {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className={`flex min-h-12 items-center gap-3 rounded-[10px] px-2 py-2 transition-colors hover:bg-on-dark/10 ${r.strong ? "text-lg font-semibold" : "text-on-dark/90"}`}
                    >
                      {r.icon}
                      <span>
                        {r.sr && <span className="sr-only">{r.sr}</span>}
                        {r.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
