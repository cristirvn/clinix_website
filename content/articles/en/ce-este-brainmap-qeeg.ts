import type { Article } from "../types";

// PROVISIONAL copy — client to confirm.
export const ARTICLE: Article = {
  slug: "ce-este-brainmap-qeeg",
  title: "What is a BrainMap (qEEG)?",
  description: "What a map of brain activity measures, how the scan goes and what it is not, explained simply.",
  category: "BrainMap",
  published: "2026-11-03",
  readingMinutes: 4,
  author: "Emmanuel CliniX",
  image: "scan",
  topics: ["brainmap"],
  body: [
    {
      type: "p",
      text: "BrainMap is the name we use for the map of the brain’s electrical activity. The technical name for the method is qEEG, which stands for quantitative electroencephalography.",
    },
    { type: "h2", text: "What it measures" },
    {
      type: "p",
      text: "Every second, the brain produces very weak electrical activity, and the sensors in a cap read it through the scalp, much as a microphone would listen. The sensors only read and send no signal into the brain.",
    },
    {
      type: "p",
      text: "Software turns the signal into a map, which shows the areas that work too hard and the ones that work too slowly.",
    },
    { type: "h2", text: "How it goes" },
    {
      type: "list",
      items: [
        "The BrainMap scan, about 30 minutes. You stay fully clothed.",
        "Interpretation of the map, on the spot, in plain words.",
        "The psychological consultation, in the same visit.",
        "A PDF by email or WhatsApp, with the full interpretation and recommendations.",
      ],
    },
    { type: "h2", text: "What it is not" },
    {
      type: "p",
      text: "BrainMap is not an MRI or a CT scan. It takes no pictures of the brain, uses no radiation and makes no diagnosis. It is an initial assessment, which shows how your brain is working, so that we start from a measurement.",
    },
    { type: "h2", text: "What it is for" },
    {
      type: "p",
      text: "Sleep, stress, focus and mood are all linked to the way the brain works. The map helps us choose what suits you and, later on, see what has changed.",
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
    title: "The first step is to see the map of your brain",
    text: "The scan, the interpretation and the psychological consultation, all in a single visit of about an hour.",
    primary: { label: "Book a BrainMap →", href: "/brainmap" },
  },
};
