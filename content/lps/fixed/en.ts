/** [FIX] copy of the BrainMap LPs — English (British). Mirrors `ro.ts`. */
import type { BrainmapFixed } from "./types";

export const BRAINMAP_FIXED_EN: BrainmapFixed = {
  headerCta: "Book a BrainMap",
  cta: "Book a BrainMap →",
  hero: {
    micro: "You fill in a short form and we call you.",
    facts: ["A 30-minute scan", "No radiation, no needles", "Interpreted in the same visit", "No referral needed"],
  },
  identificare: {
    eyebrow: "Where you are now",
    title: "Do you see yourself in any of these?",
  },
  why: {
    eyebrow: "Why nothing has held",
    title: "You've tried a lot and you're still in the same place",
    kicker: "No one has ever shown you, clearly, what's going on",
    closing: "It's hard to improve something you've never seen.",
  },
  vsl: {
    eyebrow: "What comes next",
    title: "Here's what we measure, in practice",
    lede: "In four and a half minutes, Cristi shows you a real map.",
    playerTitle: "Emmanuel CliniX",
    points: [
      { title: "What the sensors read", text: "The electrical activity your brain produces anyway, every second." },
      { title: "What a map looks like", text: "Areas that work too hard and areas that work too slowly, on a real map explained on the spot." },
      { title: "What you do with it", text: "How the map helps you choose what to do next." },
    ],
  },
  mechanism: {
    eyebrow: "How it works",
    title: ["First we measure,", "only then do we recommend"],
    steps: [
      {
        badge: "30 min",
        title: "The scan",
        text: "We put a cap with sensors on your head. You sit in a chair, fully clothed, first with your eyes closed, then with them open. The sensors read the electrical activity the brain produces anyway, every second. It's like a microphone listening to what the brain is doing.",
      },
      { badge: "On screen", title: "The map of your brain activity", text: null },
      {
        badge: "Same day",
        title: "Interpretation, on the spot",
        text: "We explain the map in plain words, in the same visit. You leave knowing where you stand and what comes next.",
      },
    ],
    note: "Nothing enters your body and you are given no medication. There is no radiation, no needles and it doesn't hurt. You get up from the chair and carry on with your day exactly as planned.",
  },
  visit: {
    eyebrow: "What the visit includes",
    title: "It all takes about an hour",
    rows: [
      { title: "The BrainMap scan", text: "About 30 minutes. You stay fully clothed." },
      { title: "Interpretation of the map, on the spot", text: "We explain the map in plain words, with no medical jargon." },
      { title: "Psychological consultation, in the same visit", text: "You don't have to come back for it." },
      {
        title: "PDF by email or WhatsApp",
        text: "The full interpretation and recommendations made for you, which you can put into practice yourself, at home, at no extra cost.",
      },
    ],
    totalLabel: "Everything above, in a single visit",
    price: "1,200 RON",
    keep: "The map and the PDF are yours to keep, whatever you decide to do next. If you go further with us, we deduct the full amount from the programme.",
  },
  proof: {
    eyebrow: "Proof",
    title: "You don't have to take our word for it",
    lede: "They started out exactly where you are now.",
    caption: "Full testimonial",
    playLabel: "Play testimonial",
    prev: "Previous testimonial",
    next: "Next testimonial",
    dot: "Testimonial",
    dotsLabel: "Browse testimonials",
  },
  qualify: {
    eyebrow: "To be honest",
    title: "Who it's for, and who it isn't for",
    fitsTitle: "It's for you if",
    fitsFixed: ["You've already tried several things and none of them held", "You want data about you, instead of general advice"],
    notTitle: "It's not for you if",
    notFixed: [
      "You're looking for a quick prescription and nothing more",
      "You want a guarantee that everything is solved after a single visit",
      "You can't come to a one-hour assessment at our clinic in Bucharest",
      "The budget for the assessment is a problem right now",
    ],
  },
  promise: {
    eyebrow: "Before you book",
    title: "What we promise, and what we don't",
    bands: [
      {
        strong: "What we can promise is that you leave knowing clearly where you stand and what comes next.",
        rest: "The rest is built over time.",
      },
      {
        strong: "If we see we can't help you, we tell you on the phone, before you pay anything and before you come to the clinic.",
        rest: "We only book in people we can really help.",
      },
    ],
  },
  faq: {
    eyebrow: "Questions",
    title: "FAQ",
    items: [
      { q: "Do I need a referral from my GP?", a: "No. You can book directly." },
      {
        q: "I already take medication. Should I stop it first?",
        a: "Don't stop anything on your own. Talk first to the doctor who prescribed it. Let us know on the phone what you take, so we can take it into account when we read the map.",
      },
      {
        q: "What happens after the scan?",
        a: "We look at the map together and tell you what your options are. You decide whether to go further, with no obligation.",
      },
      {
        q: "How long is the wait for an appointment?",
        a: "It depends on the free slots. We call you as soon as we can and find a time that suits you together.",
      },
      {
        q: "What happens to my data?",
        a: "It stays confidential. We use it only for your assessment and don't share it with anyone.",
      },
    ],
  },
  formSection: {
    eyebrow: "The first step",
    lede: "Fill in the form and we'll call you to book you in.",
    flow: [
      { n: "01", a: "You fill in", b: "the form" },
      { n: "02", a: "We call you", b: "and book" },
      { n: "03", a: "One hour", b: "at the clinic" },
      { n: "04", a: "You leave with", b: "your map" },
    ],
  },
  form: {
    nameLabel: "Full name",
    namePlaceholder: "How should we address you",
    ageLabel: "Age",
    agePlaceholder: "e.g. 47",
    phoneLabel: "Phone",
    phonePlaceholder: "So we can book you in",
    emailLabel: "Email",
    emailPlaceholder: "Where we send your confirmation",
    selectPlaceholder: "Choose the closest option",
    situatieExtra: "Several of these",
    durataOptions: ["For a few weeks", "For 3 to 12 months", "For 1 to 3 years", "For more than 3 years"],
    incercatLabel: "What have you tried so far?",
    optional: "(optional)",
    priceNoteStrong: "A BrainMap costs 1,200 RON",
    priceNoteRest: " and includes the scan, the on-the-spot interpretation, the psychological consultation and the PDF with recommendations.",
    priceCheck: "I have read and agree to this price.",
    gdprBefore: "I agree to be contacted about my application and to the processing of my data under the ",
    gdprLink: "privacy policy",
    gdprAfter: ".",
    errName: "Please write your name.",
    errAge: "That age doesn't look right.",
    errConsent: "Tick both boxes to send your request.",
    submit: "Send my request →",
    submitting: "Sending…",
    callNote: "We'll call you, as soon as we can.",
    confidential: "Your details are confidential.",
    successTitle: "Your request has been sent.",
    successBody: "We'll call you as soon as we can to book you in. If you'd like to reach us sooner, call us on",
  },
  sticky: { label: "BrainMap · 1,200 RON", sub: "One hour at our clinic in Bucharest" },
  footer: {
    tagline: "Longevity · Wellness · Neuro",
    pageTitle: "On this page",
    links: { video: "Video", results: "Results", faq: "FAQ", apply: "Book now" },
    contactTitle: "Contact",
  },
};
