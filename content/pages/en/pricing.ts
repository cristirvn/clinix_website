import type { PricingContent } from "@/content/pages/ro/pricing";

export const pricing: PricingContent = {
  seo: {
    title: "Pricing",
    description:
      "Emmanuel CliniX pricing: BrainMap 1,200 RON (scan, interpretation, psychological consultation, PDF), deducted in full if you start a programme. EmSella from 250 RON per session.",
  },
  hero: {
    eyebrow: "Pricing",
    title: "Clear prices, no surprises",
    lead: "You start with a single assessment, and for everything after it you know in advance what each session costs.",
  },
  featured: {
    badge: "First step",
    name: "BrainMap",
    price: "1,200 RON",
    unit: "A visit of about an hour, in Bucharest",
    includesTitle: "What this visit includes",
    includes: [
      "The BrainMap scan, about 30 minutes",
      "Interpretation of your map, on the spot",
      "Psychological consultation, in the same visit",
      "A PDF by email or WhatsApp, with your interpretation and recommendations",
    ],
    deduction: "If you go further with us, we deduct the full amount from the programme.",
    cta: { label: "Book a BrainMap →", href: "/brainmap" },
  },
  list: {
    eyebrow: "Sessions",
    title: "Price per session",
    onRequest: "on request",
    items: [
      {
        name: "Neurofeedback",
        description: "A session takes 30–45 minutes. We work out how many sessions you need from your map.",
        // TODO(owner): neurofeedback price per session (and any packages).
        price: null,
        unit: "/ session",
      },
      {
        name: "EmSella",
        description: "A session takes 28 minutes and you stay fully clothed. We recommend at least 10 sessions.",
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
        description: "It is included in BrainMap. You can also have it separately, as a session on its own.",
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
        a: "The assessment costs 1,200 RON. It includes the scan, the on-the-spot interpretation, the psychological consultation and the PDF with recommendations. If you go further with us, we deduct the full amount from the programme.",
      },
      {
        q: "Do I have to continue after BrainMap?",
        a: "No. We look at the map together and tell you what your options are. You decide, and the map and the PDF are yours to keep whatever you choose.",
      },
      {
        q: "Do I have to buy a package straight away?",
        a: "No. You can start with a single session.",
      },
      {
        q: "Do I need a GP referral?",
        a: "No. You can book directly.",
      },
    ],
  },
  cta: {
    title: "The first step takes you an hour",
    text: "You see the map of your brain, find out what it means and then decide what comes next.",
    primary: { label: "Book a BrainMap →", href: "/brainmap" },
    secondary: { label: "Or take a free test", href: "/chestionare" },
  },
};
