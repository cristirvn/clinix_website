import type { Locale } from "@/lib/i18n";
import { CONTACT_RO } from "@/content/pages/ro/contact";
import { CONTACT_EN } from "@/content/pages/en/contact";

/** Contact page copy. Phone / email / address come from `lib/site.ts` (shared by both languages). */
export interface ContactContent {
  seo: { title: string; description: string };
  eyebrow: string;
  title: string;
  lead: string;
  details: {
    addressLabel: string;
    mapLink: string;
    phoneLabel: string;
    whatsappLabel: string;
    whatsappText: string;
    emailLabel: string;
    hoursLabel: string;
    /** Opening hours, one line per entry. Hidden while empty. */
    hours: string[];
  };
  form: {
    title: string;
    text: string;
    emailLabel: string;
    messagePlaceholder: string;
    submit: string;
    successTitle: string;
    successText: string;
  };
}

export function getContact(locale: Locale): ContactContent {
  return locale === "en" ? CONTACT_EN : CONTACT_RO;
}
