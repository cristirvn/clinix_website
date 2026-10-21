import type { HomeContent } from "@/content/pages/home";

export const HOME_EN: HomeContent = {
  seo: {
    title: "Emmanuel CliniX — Applied neuroscience clinic in Bucharest",
    description:
      "See what is really happening in your brain with BrainMap: a 30-minute scan, no radiation, no needles, explained in the same visit. Then you decide.",
  },
  hero: {
    eyebrow: "Longevity. Wellness. Neuro.",
    title: "See what's really happening in your brain.",
    lead: "BrainMap reads your brain's electrical activity in 30 minutes. We explain the map in plain words, in the same visit. Then you decide.",
    cta: "Show me what's happening in my brain",
    secondary: "Or start with a free test →",
    facts: ["30-minute scan", "No radiation, no needles", "Explained in the same visit", "No GP referral needed"],
  },
  triage: {
    eyebrow: "Free assessment",
    title: "What do you struggle with most?",
    lead: "Pick what describes you best right now. We'll take you straight to the right test — it takes 2–3 minutes.",
  },
  tests: {
    eyebrow: "Free tests",
    title: "Find out where you really stand.",
    lead: "Choose the test that fits you best. At the end you get a score from 1 to 10 and the specific risks your answers point to.",
    all: "See all free tests →",
  },
  faq: {
    eyebrow: "Questions",
    title: "What you'll want to know first.",
    items: [
      {
        q: "What is BrainMap?",
        a: "A scan of your brain's electrical activity (qEEG). We fit a cap with sensors. You sit in a chair, fully clothed, with your eyes closed and then open. The sensors read the electrical activity your brain produces anyway, every second.",
      },
      {
        q: "Does it hurt? Is it risky?",
        a: "No. The sensors only read the activity your brain produces anyway. Nothing is administered, nothing enters your body, there is no radiation and no recovery time.",
      },
      {
        q: "How long does it take in total?",
        a: "One hour. 30 minutes for the scan, the rest for explaining the map and the psychological consultation.",
      },
      {
        q: "How much does it cost?",
        a: "The assessment costs 1,200 RON and includes the scan, the on-the-spot interpretation, the psychological consultation and the PDF with recommendations. If you start treatment with us, the full amount is deducted.",
      },
      { q: "Do I need a referral from my GP?", a: "No." },
      {
        q: "I already take medication. Should I stop it first?",
        a: "Don't stop anything on your own. Talk to the doctor who prescribed it. Tell us on the phone what you take, so we can account for it in the interpretation.",
      },
      {
        q: "What happens after the scan?",
        a: "We talk through what the map shows and what your options are. You decide. You're under no obligation. The map and the PDF are yours to keep, whatever you choose to do next.",
      },
      {
        q: "What happens to my data?",
        a: "It stays confidential. It is used only for your assessment and is never passed on.",
      },
    ],
  },
  about: {
    eyebrow: "Who we are",
    title: "We measure before we recommend.",
    paragraphs: [
      "An applied neuroscience clinic in Bucharest.",
      "We don't start from the symptom. We start from the measurement. It's hard to fix something you've never seen.",
    ],
    link: "About us →",
  },
  proof: {
    eyebrow: "Proof",
    title: "You don't have to take our word for it",
    lead: "Ernesto, Gabriela and Paulina started exactly where you are now: with a map of their brain.",
    caption: "Full testimonial",
    testimonials: [
      { name: "Ernesto", video: "testimonialErnesto" },
      { name: "Gabriela", video: "testimonialGabriela" },
      { name: "Paulina", video: "testimonialPaulina" },
    ],
    recommendedLabel: "Recommended by",
    // TODO(owner): same list as the Romanian page (content/pages/ro/home.ts). Hidden while empty.
    recommendedBy: [],
  },
  final: {
    title: "No one has ever shown you, concretely, what's going on.",
    lead: "BrainMap · 1,200 RON. One hour at the clinic, in Bucharest.",
    cta: "Show me what's happening in my brain",
    note: "If you start treatment with us, the full amount is deducted.",
  },
};
