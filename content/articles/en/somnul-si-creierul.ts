import type { Article } from "../types";

// PROVISIONAL copy — client to confirm.
export const ARTICLE: Article = {
  slug: "somnul-si-creierul",
  title: "Sleep and the brain: what happens at night",
  description: "Why you sleep badly when your brain won’t switch off, what you can change tonight and when it is worth looking for the cause.",
  category: "Sleep",
  published: "2026-11-03",
  readingMinutes: 5,
  author: "Emmanuel CliniX",
  image: "sleep",
  topics: ["somn"],
  body: [
    {
      type: "p",
      text: "Sleep is not just rest. At night the brain tidies up: it stores what you have learnt, recovers from the day’s effort and settles your emotions for the next day.",
    },
    { type: "h2", text: "What happens in the brain at night" },
    {
      type: "p",
      text: "Sleep moves through several stages, which repeat a few times each night. In deep sleep, the brain’s electrical activity slows down. In dreaming sleep, the brain becomes very active again.",
    },
    {
      type: "p",
      text: "When the brain stays too active in the evening — from stress, worry or screens — the move into deep sleep is hard. You struggle to fall asleep, wake up in the night or too early, and feel more tired in the morning than you did the night before.",
    },
    { type: "h2", text: "Why pills are not the whole answer" },
    {
      type: "p",
      text: "Sleeping pills can help you fall asleep in the short term. But they don’t tell you why you aren’t sleeping. If you already take something, don’t stop it on your own. Talk to the doctor who prescribed it.",
    },
    { type: "h2", text: "What you can change tonight" },
    {
      type: "list",
      items: [
        "Go to bed and get up at the same time, weekends included.",
        "Leave your phone in another room an hour before bed.",
        "No coffee after lunch.",
        "A cool, dark, quiet bedroom.",
        "If you can’t fall asleep within 20 minutes, get up, do something calm, then go back to bed.",
      ],
    },
    { type: "h2", text: "When it is worth looking for the cause" },
    {
      type: "p",
      text: "If you have been sleeping badly for a few weeks and the tips above don’t help, it is worth finding out why. A BrainMap shows us how your brain is working and where the problem may come from.",
    },
    {
      type: "links",
      items: [
        { label: "The sleep test →", href: "/chestionare/somn" },
        { label: "A real case study →", href: "/lp/somn-b" },
      ],
    },
  ],
  cta: {
    title: "Been sleeping badly for too long?",
    text: "See how we work with sleep at Emmanuel CliniX: we start from a measurement, not from another pill.",
    primary: { label: "See how we can help →", href: "/lp/somn" },
  },
};
