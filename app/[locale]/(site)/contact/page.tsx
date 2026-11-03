import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Card, Eyebrow, Section } from "@/components/ui/primitives";
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
      <p className="text-[0.875rem] font-bold uppercase tracking-[0.18em] text-ink-soft">{label}</p>
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
    <Section>
      <div className="max-w-3xl">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h1 className="text-[2.6rem] sm:text-6xl lg:text-7xl">{c.title}</h1>
        <p className="mt-6 text-lg text-ink-soft sm:text-xl">{c.lead}</p>
      </div>

      <div className="mt-16 grid gap-14 lg:mt-20 lg:grid-cols-12 lg:gap-16">
        <div className="space-y-6 lg:col-span-5">
          <Detail label={d.phoneLabel}>
            <a href={CLINIC.phoneHref} className="font-display text-3xl hover:text-accent sm:text-4xl">
              {CLINIC.phone}
            </a>
          </Detail>
          <Detail label={d.whatsappLabel}>
            <a href={CLINIC.whatsappHref} target="_blank" rel="noopener noreferrer" className={LINK}>
              {d.whatsappText}
            </a>
          </Detail>
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

        <div className="lg:col-span-7" id="formular">
          <Card className="sm:p-10">
            <ContactForm copy={c.form} />
          </Card>
        </div>
      </div>
    </Section>
  );
}
