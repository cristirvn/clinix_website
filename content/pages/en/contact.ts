import type { ContactContent } from "@/content/pages/contact";

export const CONTACT_EN: ContactContent = {
  seo: {
    title: "Contact",
    description:
      "Emmanuel CliniX, 26 Pictor Alexandru Romano Street, Bucharest. Call us, message us on WhatsApp or leave your number and we'll call you.",
  },
  eyebrow: "Contact",
  title: "Let's talk",
  lead: "Call us, message us on WhatsApp or leave your number and we'll call you.",
  details: {
    addressLabel: "Address",
    mapLink: "Open in Google Maps →",
    phoneLabel: "Phone",
    whatsappLabel: "WhatsApp",
    whatsappText: "Message us on WhatsApp →",
    emailLabel: "Email",
    hoursLabel: "Opening hours",
    // TODO(owner): opening hours (same as content/pages/ro/contact.ts). Hidden while empty.
    hours: [],
  },
  form: {
    title: "Fill in the form and we'll call you",
    text: "We'll call you as soon as we can. The conversation costs you nothing and commits you to nothing.",
    emailLabel: "Email (optional)",
    messagePlaceholder: "Briefly, how can we help?",
    submit: "Send and we'll call you",
    successTitle: "Thank you. We've received your details.",
    successText: "We'll call you as soon as we can.",
  },
};
