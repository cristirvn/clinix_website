/** [FIX] copy of the BrainMap LPs — English (British). Mirrors `ro.ts`. */
import type { BrainmapFixed } from "./types";

export const BRAINMAP_FIXED_EN: BrainmapFixed = {
  headerCta: "Apply for BrainMap",
  cta: "Apply for BrainMap →",
  hero: {
    micro: "Fill in a short form. We call you.",
    facts: ["A 30-minute scan", "No radiation, no needles", "Interpreted in the same visit", "No GP referral needed"],
  },
  identificare: {
    eyebrow: "Where you are now",
    title: "Do you recognise one of these?",
  },
  why: {
    eyebrow: "Why nothing has held",
    title: "You've tried. And you're still there.",
    kicker: "Nobody has shown you, concretely, what is going on.",
    closing: "It's hard to fix something you've never seen.",
  },
  vsl: {
    eyebrow: "What comes next",
    title: "Here's what we measure, before we say anything",
    lede: "Four and a half minutes. Cristi shows you what BrainMap is, what a real map looks like, and why we start from a measurement, not a symptom.",
    playerTitle: "Emmanuel CliniX",
    points: [
      { title: "What the sensors read", text: "The electrical activity your brain produces anyway, every second." },
      { title: "What a map looks like", text: "Areas too active, areas too slow. You see a real one, explained on the spot." },
      { title: "What you do with it", text: "Why a measurement changes the conversation about what comes next." },
    ],
  },
  mechanism: {
    eyebrow: "How it works",
    title: ["We don't start from the symptom.", "We start from the measurement."],
    steps: [
      {
        badge: "30 min",
        title: "The scan",
        text: "We fit a cap with sensors. You sit in a chair, fully clothed, eyes closed and then open. The sensors read the electrical activity your brain produces anyway, every second. Like a microphone listening to your brain talk.",
      },
      { badge: "On screen", title: "The map of your brain activity", text: null },
      {
        badge: "Same day",
        title: "Interpretation, on the spot",
        text: "We explain the map in plain words, in the same visit. You leave knowing where you stand and what comes next.",
      },
    ],
    note: "Nothing goes into your body. Nothing is administered. No radiation, no needles, no pain. You get up from the chair and carry on with your day exactly as planned.",
  },
  visit: {
    eyebrow: "What the visit includes",
    title: "One hour in total. That's it.",
    rows: [
      { title: "The BrainMap scan", text: "30 minutes, fully clothed." },
      { title: "Interpretation of the map, on the spot", text: "In words you understand, not medical jargon." },
      { title: "Psychological consultation, in the same visit", text: "No second appointment." },
      {
        title: "PDF by email or WhatsApp",
        text: "The full interpretation and personalised recommendations you can apply at home, on your own, at no extra cost.",
      },
    ],
    totalLabel: "Everything above, in a single visit",
    price: "1,200 RON",
    keep: "The map and the PDF are yours to keep, whatever you decide to do next.",
  },
  proof: {
    eyebrow: "Proof",
    title: "You don't have to take our word for it",
    lede: "Ernesto, Gabriela and Paulina started exactly where you are now: with the map of their brain.",
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
    fitsFixed: ["You've already tried several things and none of them held", "You want to see data about you, not general advice"],
    notTitle: "Don't apply if",
    notFixed: [
      "You're looking for a quick prescription and nothing more",
      "You want a guarantee that everything is solved after a single visit",
      "You can't come to a one-hour assessment at our clinic in Bucharest",
      "The budget for the assessment is a problem right now",
    ],
  },
  promise: {
    eyebrow: "Before you apply",
    title: "What we promise, and what we don't",
    bands: [
      {
        strong: "We don't promise that everything is solved after one visit.",
        rest: "We promise you leave knowing clearly what the problem is and what comes next.",
      },
      {
        strong: "If we see we can't help you, we tell you on the phone.",
        rest: "Before you pay anything and before you come to the clinic. We don't book people in just to fill the diary.",
      },
    ],
  },
  faq: {
    eyebrow: "Questions",
    title: "FAQ",
    items: [
      { q: "Do I need a referral from my GP?", a: "No." },
      {
        q: "I already take medication. Should I stop it first?",
        a: "Don't stop anything on your own. Talk to the doctor who prescribed it. Tell us on the phone what you take, so we can account for it in the interpretation.",
      },
      {
        q: "What happens after the scan?",
        a: "We go through what the map shows and what your options are from there. You decide. You're under no obligation.",
      },
      {
        q: "How long is the wait for an appointment?",
        a: "It depends on the free slots. We call you as soon as we can and find a time that suits you together.",
      },
      {
        q: "What happens to my data?",
        a: "It stays confidential. It is used only for your assessment and is not passed on.",
      },
    ],
  },
  formSection: {
    eyebrow: "The first step",
    lede: "Fill in the form below. We'll call you as soon as we can to book you in.",
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
    errConsent: "Tick both boxes to send your application.",
    submit: "Send my application →",
    submitting: "Sending…",
    callNote: "We'll call you, as soon as we can.",
    confidential: "Your details are confidential.",
    successTitle: "Your application has been sent.",
    successBody: "We'll call you as soon as we can to book you in. If you'd like to reach us sooner, call us on",
  },
  sticky: { label: "BrainMap · 1,200 RON", sub: "One hour at our clinic in Bucharest" },
  footer: {
    tagline: "Longevity · Wellness · Neuro",
    pageTitle: "On this page",
    links: { video: "Video", results: "Results", faq: "FAQ", apply: "Apply now" },
    contactTitle: "Contact",
  },
};
