import type { AboutContent } from "@/content/pages/ro/about";

export const about: AboutContent = {
  seo: {
    title: "About us",
    description:
      "Emmanuel CliniX — an applied neuroscience clinic in Bucharest. We measure before we recommend: we start from a map of your brain, not from guesswork.",
  },
  hero: {
    eyebrow: "About us",
    title: "We measure before we recommend.",
    lead: "An applied neuroscience clinic in Bucharest.",
    primary: { label: "Book a BrainMap →", href: "/brainmap" },
    secondary: { label: "Take a free test", href: "/chestionare" },
  },
  mission: {
    eyebrow: "Why we exist",
    title: "Nobody has shown you what is going on.",
    paragraphs: [
      "Many people come to us having already tried a lot. It was all guesswork.",
      "So with us, the first step is a map of your brain. Only then do we talk about what comes next.",
    ],
  },
  different: {
    eyebrow: "What makes us different",
    title: "What we do differently.",
    items: [
      {
        title: "Data, not guesswork",
        text: "We start from your map, not a standard recipe.",
      },
      {
        title: "All in one visit",
        text: "Scan, interpretation and consultation. No second appointment.",
      },
      {
        title: "Progress you can see",
        text: "We repeat the map every 10 sessions. You see what has changed.",
      },
      {
        title: "Honest from the start",
        text: "If we see we can’t help you, we tell you on the phone.",
      },
    ],
  },
  space: {
    eyebrow: "The clinic",
    title: "A calm place in Bucharest.",
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
    placeholderLabel: "Partner",
  },
  cta: {
    title: "Start with a map of your brain.",
    text: "One hour at the clinic. Plus a PDF with your recommendations.",
    primary: { label: "Book a BrainMap →", href: "/brainmap" },
    secondary: { label: "Or take a free test", href: "/chestionare" },
  },
};
