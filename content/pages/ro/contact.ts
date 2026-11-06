import type { ContactContent } from "@/content/pages/contact";

export const CONTACT_RO: ContactContent = {
  seo: {
    title: "Contact",
    description:
      "Emmanuel CliniX, Str. Pictor Alexandru Romano nr. 26, București. Sună-ne, scrie-ne pe WhatsApp sau lasă-ne numărul tău și te sunăm noi.",
  },
  eyebrow: "Contact",
  title: "Hai să vorbim.",
  lead: "Sună-ne, scrie-ne pe WhatsApp sau lasă-ne numărul.",
  details: {
    addressLabel: "Adresa",
    mapLink: "Deschide în Google Maps →",
    phoneLabel: "Telefon",
    whatsappLabel: "WhatsApp",
    whatsappText: "Scrie-ne pe WhatsApp →",
    emailLabel: "Email",
    hoursLabel: "Program",
    // TODO(owner): opening hours, e.g. ["Luni–Vineri: 09:00–19:00", "Sâmbătă: …"]. Hidden while empty.
    hours: [],
  },
  form: {
    title: "Completează formularul. Te sunăm noi.",
    text: "Te contactăm în 24 de ore. Fără obligații, fără costuri.",
    emailLabel: "Email (opțional)",
    messagePlaceholder: "Pe scurt, cu ce te putem ajuta?",
    submit: "Trimite — Te sunăm noi",
    successTitle: "Mulțumim. Am primit datele tale.",
    successText: "Te sunăm noi în cel mai scurt timp.",
  },
};
