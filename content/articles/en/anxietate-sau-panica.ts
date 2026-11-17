import type { Article } from "../types";

// PROVISIONAL copy — client to confirm.
export const ARTICLE: Article = {
  slug: "anxietate-sau-panica",
  title: "Anxiety or panic? How to tell them apart",
  description:
    "They are related, but they look different in everyday life. What each one means, when to see a doctor first and what the first step is.",
  category: "Anxiety",
  published: "2026-11-03",
  readingMinutes: 4,
  author: "Emmanuel CliniX",
  image: "portrait",
  topics: ["anxietate", "panica"],
  body: [
    {
      type: "p",
      text: "Many people use the words ‘anxiety’ and ‘panic’ as if they meant the same thing. They are related, but they look different in everyday life.",
    },
    { type: "h2", text: "Anxiety: an alarm that won’t switch off" },
    {
      type: "p",
      text: "Anxiety usually sits in the background. Worry that won’t switch off and tension in your body — your mind stays on alert even when there is no danger. It can last for days, weeks or months.",
    },
    { type: "h2", text: "Panic: a short, powerful wave" },
    {
      type: "p",
      text: "A panic attack comes on suddenly and peaks within minutes. Your heart races, you can’t get enough air, you feel dizzy and shaky. Test results come back fine — and the fear that another one is coming stays.",
    },
    { type: "h2", text: "In short" },
    {
      type: "list",
      items: [
        "Anxiety: constant, background worry that lasts.",
        "Panic: sudden, intense episodes lasting a few minutes.",
        "They can come together: fear of the next attack is itself a form of anxiety.",
      ],
    },
    { type: "h2", text: "When to see a doctor first" },
    {
      type: "p",
      text: "If you have chest pain, shortness of breath or palpitations for the first time, see a doctor first or call 112. Heart-related causes must be ruled out before anything else.",
    },
    { type: "h2", text: "What the first step is" },
    {
      type: "p",
      text: "Find out where you stand. Our free tests take 2–3 minutes and give you a score from 1 to 10. If you want to see what is really happening in the brain, a BrainMap shows you a map of its activity.",
    },
    {
      type: "links",
      items: [
        { label: "The anxiety test →", href: "/chestionare/anxietate" },
        { label: "The panic attack test →", href: "/chestionare/panica" },
      ],
    },
  ],
  cta: {
    title: "Don’t guess. Measure.",
    text: "Take the free test in 2–3 minutes and see what your answers point to.",
    primary: { label: "Take the anxiety test →", href: "/chestionare/anxietate" },
  },
};
