import type { Article } from "../types";

// PROVISIONAL copy — client to confirm.
export const ARTICLE: Article = {
  slug: "anxietate-sau-panica",
  title: "Anxiety or panic? How to tell them apart",
  description:
    "They are alike, but they feel different in everyday life. Find out what each one means, when to see a doctor first and what the first step is.",
  category: "Anxiety",
  published: "2026-11-03",
  readingMinutes: 4,
  author: "Emmanuel CliniX",
  image: "portrait",
  topics: ["anxietate", "panica"],
  body: [
    {
      type: "p",
      text: "Many people use ‘anxiety’ and ‘panic’ as if they were the same thing. They are alike, but they feel different in everyday life.",
    },
    { type: "h2", text: "Anxiety: an alarm that won’t switch off" },
    {
      type: "p",
      text: "Anxiety usually sits in the background. You worry all the time, feel the tension in your body, and your mind stays on alert even when nothing is happening. It can last for days, weeks or months.",
    },
    { type: "h2", text: "Panic: a short, powerful wave" },
    {
      type: "p",
      text: "A panic attack comes on suddenly and peaks within minutes. Your heart races, you feel you can’t get enough air, and dizziness and shaking set in. Test results come back fine, but the fear of the next attack stays.",
    },
    { type: "h2", text: "In short" },
    {
      type: "list",
      items: [
        "Anxiety: constant, background worry that lasts.",
        "Panic: sudden, intense episodes lasting a few minutes.",
        "They can come together. Fear of the next attack is, in fact, a form of anxiety too.",
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
      text: "First find out where you stand. Our free tests take 2–3 minutes and give you a score from 1 to 10. If you want to see what is really happening in the brain, a BrainMap shows you a map of its activity.",
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
    title: "Measure, instead of guessing",
    text: "Take the free test in 2–3 minutes and see what your answers show.",
    primary: { label: "Take the anxiety test →", href: "/chestionare/anxietate" },
  },
};
