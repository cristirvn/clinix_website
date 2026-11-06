import type { ContactContent } from "@/content/pages/contact";

export const CONTACT_EN: ContactContent = {
  seo: {
    title: "Contact",
    description:
      "Emmanuel CliniX, 26 Pictor Alexandru Romano Street, Bucharest. Call us, message us on WhatsApp or leave your number and we'll call you.",
  },
  eyebrow: "Contact",
  title: "Let's talk.",
  lead: "Call us, message us on WhatsApp or leave your number.",
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
    title: "Fill in the form. We'll call you.",
    text: "We'll get back to you within 24 hours. No obligation, no cost.",
    emailLabel: "Email (optional)",
    messagePlaceholder: "Briefly, how can we help?",
    submit: "Send — we'll call you",
    successTitle: "Thank you. We've received your details.",
    successText: "We'll call you as soon as we can.",
  },
};
