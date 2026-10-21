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
    lead: "Emmanuel CliniX is an applied neuroscience clinic in Bucharest. Longevity. Wellness. Neuro.",
    primary: { label: "Book a BrainMap →", href: "/brainmap" },
    secondary: { label: "Take a free test", href: "/chestionare" },
  },
  mission: {
    eyebrow: "Why we exist",
    title: "Nobody has shown you, concretely, what is going on.",
    paragraphs: [
      "Many people come to us having already tried several things, and none of them lasted. They were all guesses. General solutions to a problem that isn’t general.",
      "It is hard to fix something you have never seen. That is why, with us, the first step is a map of your brain’s activity. Only then do we talk about what comes next.",
    ],
  },
  different: {
    eyebrow: "What makes us different",
    title: "Four things we do differently.",
    items: [
      {
        title: "Data, not guesswork",
        text: "We start from your BrainMap, not a standard recipe. You see data about you, not general advice.",
      },
      {
        title: "All in one visit",
        text: "Scan, on-the-spot interpretation and a psychological consultation. No second appointment.",
      },
      {
        title: "Progress you can see",
        text: "We repeat the map every 10 sessions. You see what has changed in data, not impressions.",
      },
      {
        title: "Honest from the start",
        text: "We don’t promise everything is solved after one visit. If we see we can’t help you, we tell you on the phone.",
      },
    ],
  },
  space: {
    eyebrow: "The clinic",
    title: "A calm place in Bucharest.",
    lead: "The scan, the interpretation and the psychological consultation all happen in one place, in one visit.",
    mapsLabel: "View on map →",
    // TODO(owner): send photos of the clinic (reception, BrainMap room, consultation room, EmSella chair) and set `src`.
    photos: [
      { label: "Clinic photo · coming soon", src: "" },
      { label: "Clinic photo · coming soon", src: "" },
      { label: "Clinic photo · coming soon", src: "" },
    ],
  },
  testimonials: {
    eyebrow: "Proof",
    title: "You don’t have to take our word for it",
    lead: "Ernesto, Gabriela and Paulina started exactly where you are now: with a map of their brain.",
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
    text: "One hour at the clinic: scan, interpretation, psychological consultation. Plus a PDF with your interpretation and recommendations.",
    primary: { label: "Book a BrainMap →", href: "/brainmap" },
    secondary: { label: "Or take a free test", href: "/chestionare" },
  },
};
