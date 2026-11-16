import type { NeuroFitContent } from "./types";

// PROVISIONAL copy — translated from the Romanian draft; the client is writing the final text.
export const NEUROFIT_EN: NeuroFitContent = {
  seo: {
    title: "NeuroFit — a gym for your brain, in Bucharest",
    description:
      "NeuroFit by Emmanuel CliniX: regular, non-invasive brain wellness sessions on a monthly membership. Relax, Focus, Reset, Longevity.",
  },
  nav: {
    label: "NeuroFit menu",
    items: [
      { label: "Experiences", href: "#experiente" },
      { label: "How it works", href: "#abonament" },
      { label: "Questions", href: "#intrebari" },
    ],
    cta: "Book your first experience",
    ctaShort: "Book",
    back: "Emmanuel CliniX",
  },
  hero: {
    eyebrow: "Brain wellness in Bucharest",
    title: "You train your body. *Now your brain has a gym too.*",
    lead: "Stress that never switches off, mental fatigue, focus lost among notifications? Non-invasive brain wellness sessions, built around how you want to feel.",
    cta: "Book your first experience",
    secondary: "See the experiences",
    stats: [
      { value: "4", label: "experiences · Relax, Focus, Reset, Longevity" },
      { value: "5", label: "non-invasive technologies in one circuit" },
      { value: "Monthly", label: "membership, no annual commitment" },
    ],
  },
  vsl: {
    eyebrow: "NeuroFit in brief",
    title: "See what a session looks like",
    lead: "A few minutes on the programme, the space and how you feel afterwards.",
    playerTitle: "Introducing NeuroFit",
  },
  concept: {
    eyebrow: "The idea",
    title: "Your body has its gym. *Now your brain has one too.*",
    paragraphs: [
      "We go to the gym. We track our sleep. We watch what we eat and make time to recover. The brain, more often than not, is left out.",
      "NeuroFit is the club where your brain finally gets a routine of its own. You come regularly, choose how you want to feel, and make looking after your mind a habit as natural as a workout.",
    ],
  },
  audience: {
    eyebrow: "Who it's for",
    title: "For people who ask a lot of their minds",
    items: [
      { title: "Business owners", text: "Endless decisions, constant pressure, little time to recover." },
      { title: "Demanding jobs", text: "Long days, screens, notifications. In the evening, your mind is still running." },
      { title: "Athletes", text: "Your body is trained. Focus and recovery make the difference." },
      { title: "After a programme", text: "Finished a programme at the clinic? A routine helps the results last." },
    ],
  },
  experiences: {
    eyebrow: "The experiences",
    title: "How you feel today, and *what you can change*",
    lead: "You choose the experience by how you want to feel. You can change it from one session to the next.",
    forWhen: "For when",
    items: [
      { name: "Relax", line: "Calm for a mind that won't switch off.", situations: ["Your mind won't stop", "You sleep, but don't feel rested"] },
      { name: "Focus", line: "Clarity and attention for busy days.", situations: ["You can't concentrate any more"] },
      { name: "Reset", line: "Energy for when you've run out.", situations: ["You're on autopilot", "You're drained after training"] },
      { name: "Longevity", line: "A sharp brain, for years to come.", situations: ["You want to stay sharp as the years go by"] },
    ],
    note: "A brain wellness programme. Have a diagnosis? Talk to a specialist first.",
  },
  tech: {
    eyebrow: "How we help",
    title: "Real technology, built around you",
    items: [
      { title: "Safety screening", text: "We check you're eligible before your first session." },
      { title: "A non-invasive circuit", text: "taVNS, CES, tDCS, tPBM and neurofeedback, in a single circuit." },
      { title: "A steady routine", text: "A monthly membership, on credits, at your own pace." },
    ],
  },
  membership: {
    eyebrow: "The membership",
    title: "How a membership works",
    lead: "One session is an experience. Consistency builds the routine.",
    steps: [
      { title: "Your first experience", text: "You come to the clinic. We do the safety screening and you go through the NeuroFit circuit for the first time." },
      { title: "Choose a membership", text: "Monthly, on credits, with no annual commitment. We explain the packages there and then." },
      { title: "Book when it suits you", text: "Use your credits at your own pace and choose the experience each time: Relax, Focus, Reset or Longevity." },
      { title: "Repeat", text: "Looking after your brain becomes a routine, as natural as a workout." },
    ],
    note: "Package prices are given by phone or at the clinic.",
  },
  reviews: {
    eyebrow: "Google reviews · Emmanuel CliniX",
    title: "People recommend us",
    ratingLabel: "reviews on Google",
    source: "Google review",
  },
  faq: {
    eyebrow: "Questions",
    title: "What you'll want to know first",
    items: [
      {
        q: "What is NeuroFit?",
        a: "Emmanuel CliniX's brain wellness programme: regular, non-invasive sessions on the clinic's equipment, on a monthly membership. Like a gym, but for your brain.",
      },
      {
        q: "Is it a medical treatment?",
        a: "No. NeuroFit is a wellness programme for people who want to feel calmer, clearer and better rested. If you have a diagnosis, talk to one of the clinic's specialists first.",
      },
      {
        q: "Is it safe? Does it hurt?",
        a: "Every technology is non-invasive: no needles, no radiation, nothing enters the body. We do a safety screening before your first session.",
      },
      {
        q: "What happens at the first experience?",
        a: "We do the safety screening, you choose the experience that fits how you want to feel, and you go through the NeuroFit circuit.",
      },
      {
        q: "How does the membership work?",
        a: "The membership is monthly and works on credits. You use the credits for sessions, at your own pace. There is no annual commitment.",
      },
      {
        q: "How much does it cost?",
        a: "Package prices are given by phone or at the clinic. Leave us your number and we'll call you.",
      },
      {
        q: "Can I carry on with NeuroFit after a treatment programme at the clinic?",
        a: "Yes. NeuroFit can follow on from a programme, so the results are supported by a steady routine.",
      },
    ],
  },
  book: {
    eyebrow: "Next step",
    title: "Make brain wellness part of *your routine*",
    text: "Leave us your name and number. We'll call to arrange your first experience and explain the memberships.",
    emailLabel: "Email (optional)",
    experienceLabel: "Which experience interests you?",
    experienceOptions: ["Relax", "Focus", "Reset", "Longevity", "Not sure yet"],
    submit: "Book your first experience",
    successTitle: "Thank you. We'll call you soon.",
    successText: "A colleague will be in touch within one working day to arrange your first experience.",
    orCall: "Or call us directly:",
  },
  footer: {
    line: "NeuroFit by Emmanuel CliniX · A brain wellness programme.",
    disclaimer: "The information on this page does not replace medical assessment, diagnosis or treatment.",
    back: "Go to Emmanuel CliniX",
  },
};
