import type { CareersContent } from "./types";

// PROVISIONAL copy — client to confirm (why work with us, roles).
export const CAREERS_EN: CareersContent = {
  seo: {
    title: "Careers",
    description:
      "Work with us at Emmanuel CliniX, an applied neuroscience clinic in Bucharest. Open roles and how to send us your CV.",
  },
  hero: {
    eyebrow: "Careers",
    title: "Work with us",
    lead: "We are looking for people who, like us, measure before they recommend.",
  },
  why: {
    eyebrow: "Why us",
    title: "What you’ll find here",
    items: [
      { title: "You work with data", text: "We always start from measurements, and you see the real result of your work." },
      { title: "A small team", text: "We all know each other by name, and decisions are made quickly." },
      { title: "Modern equipment", text: "You work with BrainMap, neurofeedback and other non-invasive methods." },
      { title: "Ongoing learning", text: "We help you train in the methods we work with." },
    ],
  },
  roles: {
    eyebrow: "Open roles",
    title: "Who we’re looking for",
    // Same ids as ro.ts.
    items: [],
    applyLabel: "Apply →",
    emptyTitle: "We don’t have any open roles right now",
    emptyText: "We’d still be glad to meet you. Send us your CV and a few lines about yourself, and when something suitable comes up we’ll be in touch.",
    emailLabel: "Email us your CV →",
  },
  form: {
    title: "Tell us who you are",
    text: "Leave us your details and we’ll call you for a short chat.",
    roleLabel: "Which role interests you?",
    rolePlaceholder: "e.g. psychologist, nurse, reception",
    roleOpen: "Speculative application",
    emailLabel: "Email",
    messageLabel: "A few lines about yourself (optional)",
    messagePlaceholder: "Your experience, in short",
    cvNote: "Please email your CV to",
    submit: "Send",
    successTitle: "Thank you. We’ve received your details.",
    successText: "We’ll be in touch as soon as we can.",
  },
};
