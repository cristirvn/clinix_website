import { ButtonLink } from "@/components/ui/primitives";
import { Photo } from "@/components/ui/Photo";
import { ArrowIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/ui/icons";
import { EegLive } from "@/components/home/EegTrace";
import { SpotRim } from "@/components/ui/PointerSpotlight";
import type { HomeContent } from "@/content/pages/home";
import type { Locale } from "@/lib/i18n";
import { CLINIC } from "@/lib/site";
import { getDictionary } from "@/lib/dictionary";

/**
 * Section 8 — the close. One inset navy panel that mirrors the hero (lit
 * from inside, grain, light following the mouse on desktop): the live EEG
 * line running right across it, a big headline and the same single action
 * on the left, a calm photo on the right with the three ways to reach us on
 * a glass card that has a light travelling round its edge. It replaces the
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
    <section data-final-cta className="bg-bg px-2 pb-2 pt-4 sm:px-3 sm:pb-3 sm:pt-8">
      <div data-tone="dark" className="bg-vital grain spotlight relative isolate grid overflow-hidden rounded-[var(--radius-panel)] text-on-dark lg:grid-cols-2">
        <SpotRim />
        <div aria-hidden="true" className="absolute -left-20 top-1/3 -z-10 h-96 w-96 rounded-full bg-[rgb(var(--glow-a)/0.35)] blur-3xl" />
        <EegLive className="absolute inset-x-0 top-12 -z-10 h-20 opacity-70 sm:top-16 sm:h-28 lg:top-1/2 lg:h-40 lg:-translate-y-1/2 lg:opacity-35" strokeWidth={1.8} speed={16} />
          <div className="relative z-10 flex flex-col px-5 pb-10 pt-36 sm:px-12 sm:pb-16 sm:pt-52 lg:px-16 lg:py-36">
            <h2 className="t-h1 max-w-xl">{final.title}</h2>
            <div className="mt-10">
              <ButtonLink href="/brainmap" size="lg" className="btn-shine w-full !px-4 max-[420px]:!text-base sm:w-auto sm:!px-9">
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

            <div className="liquid-glass relative rounded-[var(--radius-media)] p-4 [--beam-r:var(--radius-media)] sm:p-6 lg:ml-auto lg:max-w-md">
              <span aria-hidden="true" className="beam" />
              <p className="label px-2 text-accent">{final.reach}</p>
              <ul className="mt-2">
                {reach.map((r) => (
                  <li key={r.href}>
                    <a
                      href={r.href}
                      {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className={`press flex min-h-12 items-center gap-3 rounded-[12px] px-2 py-2 transition-colors hover:bg-on-dark/10 ${r.strong ? "text-lg font-semibold" : "text-on-dark/90"}`}
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
    </section>
  );
}
