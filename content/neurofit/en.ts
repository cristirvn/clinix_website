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
    title: "You train your body, *now your brain has a gym too*",
    sub: "You come regularly for non-invasive sessions and leave with a calmer, clearer mind.",
    videoTitle: "Introducing NeuroFit",
    videoNote: "A few minutes in which you see the space and find out how a session goes.",
    cta: "Book your first experience",
    ctaSub: "Leave your number and we'll call you.",
    facts: [
      "Non-invasive sessions on the clinic's equipment",
      "4 experiences: Relax, Focus, Reset, Longevity",
      "Monthly membership, no year-long contract",
      "A safety check before your first session",
    ],
  },
  experiences: {
    eyebrow: "The experiences",
    title: "How you feel today, and *what you can change*",
    lead: "You choose the experience by how you want to feel that day, and you can change it from one session to the next.",
    forWhen: "For the days when",
    items: [
      { name: "Relax", line: "Calm for a mind that won't switch off.", situations: ["Your mind won't stop", "You sleep, but don't feel rested"] },
      { name: "Focus", line: "A clear mind on busy days.", situations: ["You can't concentrate any more"] },
      { name: "Reset", line: "For when you feel you've run out of energy.", situations: ["You're on autopilot", "You feel drained after the gym"] },
      { name: "Longevity", line: "To stay sharp for years to come.", situations: ["You want to keep your mind sharp"] },
    ],
    note: "A brain wellness programme. Have a diagnosis? Talk to a specialist first.",
  },
  membership: {
    eyebrow: "The membership",
    title: "How a membership works",
    lead: "One session helps in the moment. You build the routine by coming regularly.",
    steps: [
      { title: "Your first experience", text: "You come to the clinic, we do the safety check and you go through the NeuroFit circuit for the first time." },
      { title: "Choose a membership", text: "The membership is monthly, on credits, with no year-long contract. We explain the packages there and then." },
      { title: "Book when it suits you", text: "You use your credits whenever it suits you and choose the experience each time: Relax, Focus, Reset or Longevity." },
      { title: "Repeat", text: "Over time, looking after your brain becomes a habit, just like going to the gym." },
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
    title: "What you'd like to know first",
    items: [
      {
        q: "What is NeuroFit?",
        a: "It is Emmanuel CliniX's brain wellness programme. You come regularly for non-invasive sessions on the clinic's devices, with a monthly membership. It's like a gym, except you are working with your brain.",
      },
      {
        q: "Is it a medical programme?",
        a: "No. NeuroFit is a wellness programme, for people who want to feel calmer and clearer in the mind. If you have a diagnosis, talk to one of the clinic's specialists first.",
      },
      {
        q: "Is it safe? Does it hurt?",
        a: "Every device is non-invasive: there are no needles, no radiation and nothing enters your body. Before your first session we do a safety check.",
      },
      {
        q: "What happens at the first experience?",
        a: "We do the safety check, you choose the experience by how you want to feel, and you go through the NeuroFit circuit.",
      },
      {
        q: "How does the membership work?",
        a: "The membership is monthly and runs on credits. You use them for sessions whenever it suits you, and you don't sign up for a year.",
      },
      {
        q: "How much does it cost?",
        a: "We tell you the package prices on the phone or at the clinic. Leave us your number and we'll call you.",
      },
      {
        q: "Can I carry on with NeuroFit after a programme at the clinic?",
        a: "Yes. NeuroFit also suits you after a programme at the clinic, so you can keep a steady routine.",
      },
    ],
  },
  book: {
    eyebrow: "Next step",
    title: "Make brain wellness part of *your routine*",
    text: "Leave us your name and phone number. We'll call you to arrange your first experience and explain the memberships.",
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
