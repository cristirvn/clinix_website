import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Card, HeroPanel, Section, withArrowIcon } from "@/components/ui/primitives";
import { BlurWords } from "@/components/ui/BlurWords";
import { SpotRim } from "@/components/ui/PointerSpotlight";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";
import { ContactForm } from "@/components/contact/ContactForm";
import { getContact } from "@/content/pages/contact";
import { alternatesFor, type Locale } from "@/lib/i18n";
import { CLINIC } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const c = getContact(locale);
  return { title: c.seo.title, description: c.seo.description, alternates: alternatesFor("/contact", locale) };
}

function Detail({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="border-t border-line pt-6">
      <p className="text-[0.875rem] font-semibold text-ink-soft">{label}</p>
      <div className="mt-2 text-lg sm:text-xl">{children}</div>
    </div>
  );
}

const LINK = "font-semibold underline decoration-accent decoration-2 underline-offset-[6px] transition hover:decoration-ink";

export default async function ContactPage({ params }: Props) {
  const locale = (await params).locale as Locale;
  const c = getContact(locale);
  const d = c.details;

  return (
    <>
      {/* Top: the lit inset panel, with the two fastest ways to reach us as big glass tiles. */}
      <HeroPanel>
        <div className="max-w-3xl">
          <h1 className="t-h1">
            <BlurWords text={c.title} delay={90} step={70} />
          </h1>
          <p className="rise-in mt-6 text-lg text-on-dark-soft sm:text-xl" style={{ animationDelay: "300ms" }}>
            {c.lead}
          </p>
        </div>
        <div className="rise-in mt-10 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:max-w-4xl" style={{ animationDelay: "420ms" }}>
          <a href={CLINIC.phoneHref} className="liquid-glass press spotlight group relative flex min-h-[6.5rem] items-center gap-4 rounded-[var(--radius-media)] p-5 sm:p-6">
            <SpotRim />
            <span aria-hidden="true" className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-cta text-on-cta shadow-[var(--glow-cta)]">
              <PhoneIcon size={24} />
            </span>
            <span className="min-w-0">
              <span className="block text-[0.95rem] font-semibold text-accent">{d.phoneLabel}</span>
              <span className="block whitespace-nowrap font-display text-[1.6rem] font-semibold leading-tight tracking-[-0.02em] tabular-nums sm:text-[1.9rem]">{CLINIC.phone}</span>
            </span>
          </a>
          <a href={CLINIC.whatsappHref} target="_blank" rel="noopener noreferrer" className="liquid-glass press spotlight group relative flex min-h-[6.5rem] items-center gap-4 rounded-[var(--radius-media)] p-5 sm:p-6">
            <SpotRim />
            <span aria-hidden="true" className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-success text-on-dark">
              <WhatsAppIcon size={26} />
            </span>
            <span className="min-w-0">
              <span className="block text-[0.95rem] font-semibold text-accent">{d.whatsappLabel}</span>
              <span className="inline-flex items-center gap-2 text-[1.25rem] font-semibold leading-tight">{withArrowIcon(d.whatsappText)}</span>
            </span>
          </a>
        </div>
      </HeroPanel>

      <Section className="!pt-16 sm:!pt-24">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-6 lg:col-span-5">
            <Detail label={d.emailLabel}>
              <a href={`mailto:${CLINIC.email}`} className={`${LINK} break-all`}>
                {CLINIC.email}
              </a>
            </Detail>
            <Detail label={d.addressLabel}>
              <address className="not-italic">{CLINIC.address}</address>
              <a href={CLINIC.mapsHref} target="_blank" rel="noopener noreferrer" className={`${LINK} mt-3 inline-flex min-h-11 items-center text-base`}>
                {d.mapLink}
              </a>
            </Detail>
            {d.hours.length > 0 && (
              <Detail label={d.hoursLabel}>
                <ul className="space-y-1">
                  {d.hours.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </Detail>
            )}
          </div>

          <div className="relative lg:col-span-7" id="formular">
            <div aria-hidden="true" className="absolute inset-x-[10%] -bottom-6 top-[15%] -z-10 rounded-full bg-[rgb(var(--glow-a)/0.18)] blur-3xl" />
            <Card className="relative shadow-[var(--shadow-float)] [--beam-r:var(--radius-media)] sm:p-10">
              <span aria-hidden="true" className="beam" />
              <ContactForm copy={c.form} />
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
