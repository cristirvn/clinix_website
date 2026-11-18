import type { TestimonialsPageContent } from "./types";

// PROVISIONAL copy — client to confirm.
export const TESTIMONIALS_PAGE_EN: TestimonialsPageContent = {
  seo: {
    title: "Testimonials",
    description:
      "What people who have been through BrainMap and the programmes at Emmanuel CliniX in Bucharest say. On video and in their own words.",
  },
  hero: {
    eyebrow: "Testimonials",
    title: "You don’t have to take our word for it.",
    lead: "Hear from people who started exactly where you are now.",
  },
  videos: { eyebrow: "Video", title: "Their story, in their own words" },
  quotes: { eyebrow: "In short", title: "What they wrote to us" },
  topics: {
    brainmap: { label: "BrainMap", href: "/servicii/brainmap" },
    somn: { label: "Sleep", href: "/afectiuni-tratate#somn" },
    emsella: { label: "EmSella", href: "/lp/emsella" },
  },
  playLabel: "Play testimonial",
  empty: "Testimonials will appear here soon.",
  note: "Results may vary from person to person.",
  cta: {
    title: "First step: see the map of your brain.",
    text: "Scan, interpretation and psychological consultation. One hour, in Bucharest.",
    primary: { label: "Book a BrainMap →", href: "/brainmap" },
    secondary: { label: "Or take a free test", href: "/chestionare" },
  },
};
