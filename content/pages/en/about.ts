import type { AboutContent } from "@/content/pages/ro/about";

export const about: AboutContent = {
  seo: {
    title: "About us",
    description:
      "Emmanuel CliniX — an applied neuroscience clinic in Bucharest. We measure before we recommend: we start from a map of your brain, not from guesswork.",
  },
  hero: {
    eyebrow: "About us",
    title: "We measure before we recommend",
    lead: "A clinic in Bucharest for wellness, longevity and brain health.",
    primary: { label: "Book a BrainMap →", href: "/brainmap" },
    secondary: { label: "Take the free test", href: "/chestionare" },
  },
  mission: {
    eyebrow: "Why we exist",
    title: "No one has ever shown you, clearly, what’s going on",
    paragraphs: [
      "Many people come to us having already tried a lot of things, all of them based on guesswork.",
      "That’s why, with us, the first step is a map of your brain. Only after that do we talk about what comes next.",
    ],
  },
  different: {
    eyebrow: "What makes us different",
    title: "What we do differently",
    items: [
      {
        title: "We start from data",
        text: "Your plan starts from the map of your brain.",
      },
      {
        title: "All in one visit",
        text: "The scan, the interpretation and the consultation all happen on the same day, so you don’t have to come back.",
      },
      {
        title: "Progress you can see",
        text: "Every 10 sessions we redo the map, so you can see what has changed.",
      },
      {
        title: "Honest from the start",
        text: "If we see we can’t help you, we tell you from the first phone call.",
      },
    ],
  },
  space: {
    eyebrow: "The clinic",
    title: "A calm place in Bucharest",
    mapsLabel: "View on map →",
    photos: [
      { label: "A BrainMap scan: the brain map, explained on the spot", src: "/photos/brainmap-sesiune.webp" },
      { label: "The iMediSync headset, used for BrainMap and tPBM", src: "/photos/imedisync-casca.webp" },
      { label: "The clinic's EmSella chair", src: "/photos/emsella-cabinet.webp" },
    ],
  },
  testimonials: {
    eyebrow: "Proof",
    title: "You don’t have to take our word for it",
    items: [
      { name: "Ernesto", video: "testimonialErnesto" },
      { name: "Gabriela", video: "testimonialGabriela" },
      { name: "Paulina", video: "testimonialPaulina" },
    ],
  },
  recommended: {
    eyebrow: "Who recommends us",
    title: "Recommended by",
    // TODO(owner): names / logos of the doctors, clinics or organisations that recommend you.
    names: [],
    placeholderLabel: "[Real partner logo]",
  },
  cta: {
    title: "Start with a map of your brain",
    text: "One hour at the clinic and a PDF with your recommendations, which you get the same day.",
    primary: { label: "Book a BrainMap →", href: "/brainmap" },
    secondary: { label: "Or take a free test", href: "/chestionare" },
  },
};
