import type { HomeContent } from "@/content/pages/home";

export const HOME_EN: HomeContent = {
  seo: {
    title: "Emmanuel CliniX — Applied neuroscience clinic in Bucharest",
    description:
      "See what is really happening in your brain with BrainMap: a 30-minute scan, no radiation, no needles, explained in the same visit. Then you decide.",
  },
  hero: {
    title: "Your brain map, in one hour.",
    benefits: ["No needles", "No radiation", "Results on the spot"],
    cta: "I want my brain map",
    phoneLabel: "Call us",
    stats: [
      { value: 15, suffix: "+", label: "conditions treated" },
      { value: 0, label: "risks · non-invasive equipment" },
      { value: 99.7, decimals: 1, suffix: "%", label: "satisfied patients" },
    ],
  },
  services: {
    title: "Five methods. *One plan.*",
    more: "Find out more",
    featuredBadge: "Start here",
    items: [
      {
        slug: "brainmap",
        image: "scan",
        eyebrow: "qEEG assessment",
        title: "BrainMap",
      },
      {
        slug: "tavns",
        image: "tavns",
        eyebrow: "Vagus nerve stimulation",
        title: "taVNS",
      },
      {
        slug: "tpbm",
        image: "tpbm",
        eyebrow: "Photobiomodulation",
        title: "tPBM",
      },
      {
        slug: "ces",
        image: "portrait",
        eyebrow: "Cranial electrotherapy",
        title: "CES",
      },
      {
        slug: "psihoterapie",
        image: "consultCouch",
        eyebrow: "Psychological counselling",
        title: "Psychotherapy",
      },
    ],
  },
  quiz: {
    eyebrow: "Free test · 2–3\u00a0minutes",
    title: "Not sure where to *start?*",
    lead: "A short, free test. You get a score from 1 to 10 and your specific risks.",
    step: "Question 1",
    next: "Next question",
    pickFirst: "Choose an answer to continue.",
  },
  final: {
    title: "No one has ever shown you what's going on.",
    cta: "I want my brain map",
    note: "If you start treatment with us, the full amount is deducted.",
    reach: "Where to find us",
    address: "Address",
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
};
