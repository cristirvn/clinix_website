import type { Article } from "../types";

// PROVISIONAL copy — client to confirm.
export const ARTICLE: Article = {
  slug: "ce-este-brainmap-qeeg",
  title: "What is a BrainMap (qEEG)?",
  description: "What a map of brain activity measures, how the scan goes and what it is not. Short, and in plain words.",
  category: "BrainMap",
  published: "2026-11-03",
  readingMinutes: 4,
  author: "Emmanuel CliniX",
  image: "scan",
  topics: ["brainmap"],
  body: [
    {
      type: "p",
      text: "BrainMap is the name we use for a map of the brain’s electrical activity. Technically, the method is called qEEG: quantitative electroencephalography.",
    },
    { type: "h2", text: "What it measures" },
    {
      type: "p",
      text: "Every second, the brain produces very weak electrical activity. Sensors in a cap read it through the scalp. Like a microphone listening to the brain talk. The sensors only read; they send nothing into the brain.",
    },
    {
      type: "p",
      text: "Software turns the signal into a map. On the map we see areas that are too active and areas that are too slow, and compare them with the normal values for your age.",
    },
    { type: "h2", text: "How it goes" },
    {
      type: "list",
      items: [
        "The BrainMap scan: 30 minutes, fully clothed.",
        "Interpretation of the map, on the spot, in words you understand.",
        "A psychological consultation, in the same visit.",
        "A PDF by email or WhatsApp, with the full interpretation and recommendations.",
      ],
    },
    { type: "h2", text: "What it is not" },
    {
      type: "p",
      text: "BrainMap is not an MRI or a CT scan. It takes no pictures of the brain and uses no radiation. It does not give a diagnosis. It is an initial assessment tool: it shows how your brain is working, so that we start from a measurement, not from guesswork.",
    },
    { type: "h2", text: "What it is for" },
    {
      type: "p",
      text: "Sleep, stress, focus and mood all show up on a map of your brain activity. The map helps us choose what makes sense for you. And, later on, to measure what has changed.",
    },
    {
      type: "links",
      items: [
        { label: "BrainMap, step by step →", href: "/servicii/brainmap" },
        { label: "What we can help with →", href: "/afectiuni-tratate" },
      ],
    },
  ],
  cta: {
    title: "First step: see the map of your brain.",
    text: "Scan, interpretation and psychological consultation. One hour, in Bucharest.",
    primary: { label: "Book a BrainMap →", href: "/brainmap" },
  },
};
