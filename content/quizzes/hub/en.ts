import type { QuizHub, Triage } from "./types";

/** English translation of `ro.ts` (same slugs, same hrefs). */
export const HUB_EN: QuizHub = {
  seo: {
    title: "Free tests — find out where you really stand",
    description:
      "Nine self-assessment tests, 2–3 minutes each: anxiety, panic attacks, sleep, burnout, focus, mood, migraines, stress and losing control of a habit. At the end you get a score from 1 to 10 and the risks your answers point to.",
  },
  hero: {
    eyebrow: "Free tests",
    title: "Find out where you really stand.",
    subtitle:
      "Choose the test that describes you. You get a score from 1 to 10.",
  },
  /** The promise, restated as three scannable facts above the cards. */
  promise: [
    { label: "2–3 minutes", text: "Short questions with clear answer options." },
    { label: "A score from 1 to 10", text: "See exactly how serious your situation is right now." },
    { label: "Risks explained", text: "What your answers show, in plain language." },
  ],
  cards: [
    {
      slug: "anxietate",
      audience: "For you",
      title: "Anxiety level",
      description:
        "Worry that won't switch off and tension in your body — your mind stays on alert even when there is no danger.",
    },
    {
      slug: "panica",
      audience: "For you",
      title: "Panic attacks",
      description:
        "Episodes where your heart races and you can't get enough air, test results that come back fine — and the fear that another one is coming.",
    },
    {
      slug: "somn",
      audience: "For you",
      title: "Sleep quality",
      description:
        "You struggle to fall asleep, wake up in the night or too early, and feel more tired in the morning than you did the night before.",
    },
    {
      slug: "burnout",
      audience: "For you",
      title: "Burnout",
      description:
        "Work has drained your tank: even the weekend no longer restores you and you wake up already tired.",
    },
    {
      slug: "focus",
      audience: "For you",
      title: "Focus and productivity",
      description:
        "A foggy mind, putting off what matters, jumping from one thing to the next — and the feeling that you are wasting your potential.",
    },
    {
      slug: "dispozitie",
      audience: "For you",
      title: "Mood and energy",
      description:
        "You don't feel like doing anything, you no longer enjoy what you used to, and your energy has dropped for no clear reason.",
    },
    {
      slug: "migrene",
      audience: "For you",
      title: "Headaches and migraines",
      description:
        "Frequent headaches or migraines that wipe out whole days and keep you living with painkillers close at hand.",
    },
    {
      slug: "stres",
      audience: "For you",
      title: "Stress level",
      description:
        "Constant pressure, frayed nerves, a body that can't relax even when, in theory, you have free time.",
    },
    {
      slug: "adictii",
      audience: "For you",
      title: "Dependence on a habit",
      description:
        "Phone, gaming, alcohol, cigarettes, betting, shopping — a habit that takes more of your time and control than you would like.",
    },
  ],
  /** Fallback for people who don't fit a card — the triage screen at `/evaluare`. */
  general: {
    title: "Not sure which one to choose?",
    text: "Answer a single question about what bothers you most often and we'll send you straight to the right test.",
    button: "Help me choose →",
  },
};

export const TRIAGE_EN: Triage = {
  seo: {
    title: "What are you dealing with? — choose the right test",
    description:
      "Tell us in a single question what bothers you most often and we'll give you the right self-assessment test: a score from 1 to 10 and the risks your answers point to.",
  },
  eyebrow: "Free assessment",
  question: "What do you struggle with most often?",
  help: "Choose what fits you best at the moment.",
  options: [
    { label: "Anxiety, constant worry", slug: "anxietate" },
    { label: "Panic attacks", slug: "panica" },
    { label: "Sleep problems — I struggle to fall asleep or wake up tired", slug: "somn" },
    { label: "Burnout, I feel worn out by work", slug: "burnout" },
    { label: "Brain fog — a foggy mind, poor concentration", slug: "focus" },
    { label: "No motivation, low mood, nothing brings me joy any more", slug: "dispozitie" },
    { label: "Frequent headaches or migraines", slug: "migrene" },
    { label: "General stress, constant pressure", slug: "stres" },
    { label: "I feel I've lost control of a habit (alcohol, phone, gaming, etc.)", slug: "adictii" },
  ],
  /** Secondary path for people who'd rather talk than fill in a test. */
  direct: {
    text: "Would you rather talk to someone at the clinic?",
    button: "We'll call you →",
    href: "/contact",
  },
};
