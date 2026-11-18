import type { PricingContent } from "@/content/pages/ro/pricing";

export const pricing: PricingContent = {
  seo: {
    title: "Pricing",
    description:
      "Emmanuel CliniX pricing: BrainMap 1,200 RON (scan, interpretation, psychological consultation, PDF), deducted in full if you start a programme. EmSella from 250 RON per session.",
  },
  hero: {
    eyebrow: "Pricing",
    title: "Clear prices. No surprises.",
    lead: "One starting step. A clear price per session for everything after it.",
  },
  featured: {
    badge: "First step",
    name: "BrainMap",
    price: "1,200 RON",
    unit: "One hour at the clinic in Bucharest",
    includesTitle: "All of this, in a single visit",
    includes: [
      "The BrainMap scan — 30 minutes, fully clothed",
      "Interpretation of your map, on the spot",
      "Psychological consultation, in the same visit",
      "A PDF by email or WhatsApp, with your interpretation and recommendations",
    ],
    deduction: "If you start a programme with us, the full amount is deducted.",
    cta: { label: "Book a BrainMap →", href: "/brainmap" },
  },
  list: {
    eyebrow: "Sessions",
    title: "Price per session",
    onRequest: "on request",
    items: [
      {
        name: "Neurofeedback",
        description: "Sessions of 30–45 minutes. We set the number based on your map.",
        // TODO(owner): neurofeedback price per session (and any packages).
        price: null,
        unit: "/ session",
      },
      {
        name: "EmSella",
        description: "A 28-minute session, fully clothed. We recommend at least 10 sessions.",
        price: "250 RON",
        unit: "/ session",
        options: [
          { label: "5-session package", price: "1,150 RON" },
          { label: "10-session package", price: "2,000 RON" },
        ],
        link: { label: "About EmSella →", href: "/lp/emsella" },
      },
      {
        name: "Psychological consultation",
        description: "Included in BrainMap. Also available on its own, as a separate session.",
        // TODO(owner): standalone psychological consultation price.
        price: null,
        unit: "/ session",
      },
    ],
  },
  faq: {
    eyebrow: "Questions about price",
    title: "In short",
    items: [
      {
        q: "What does BrainMap include?",
        a: "The assessment costs 1,200 RON and includes the scan, on-the-spot interpretation, a psychological consultation and a PDF with recommendations. If you start a programme with us, the full amount is deducted.",
      },
      {
        q: "Do I have to continue after BrainMap?",
        a: "No. We talk through what the map shows and what your options are. You decide. The map and the PDF are yours to keep, whatever you choose to do next.",
      },
      {
        q: "Do I have to buy a package straight away?",
        a: "No, you don’t have to buy a package straight away.",
      },
      {
        q: "Do I need a GP referral?",
        a: "No.",
      },
    ],
  },
  cta: {
    title: "The first step takes one hour.",
    text: "See the map of your brain, understand what it means, then decide what comes next.",
    primary: { label: "Book a BrainMap →", href: "/brainmap" },
    secondary: { label: "Or take a free test", href: "/chestionare" },
  },
};
