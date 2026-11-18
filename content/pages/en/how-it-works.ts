import type { HowItWorksContent } from "@/content/pages/ro/how-it-works";

export const howItWorks: HowItWorksContent = {
  seo: {
    title: "How it works",
    description:
      "From a free test to a map of your brain, and progress you can see in data. How BrainMap, neurofeedback, the psychological consultation and EmSella work.",
  },
  hero: {
    eyebrow: "How it works",
    title: "First we measure. Then we recommend.",
    lead: "Five simple steps. You see in data what has changed.",
    primary: { label: "Book a BrainMap →", href: "/brainmap" },
    secondary: { label: "Take a free test", href: "/chestionare" },
  },
  journey: {
    eyebrow: "Your journey",
    title: "Five steps. That’s it.",
    steps: [
      {
        title: "A free test or a phone call",
        text: "Take an online test in a few minutes, or call us.",
      },
      {
        title: "The BrainMap scan",
        text: "30 minutes, fully clothed. Sensors read the electrical activity of your brain.",
      },
      {
        title: "Interpretation and plan",
        text: "We explain your map in plain words, in the same visit.",
      },
      {
        title: "Training sessions",
        text: "Neurofeedback, for example: painless sessions in which the brain learns a steadier rhythm.",
      },
      {
        title: "We measure again",
        text: "We repeat the control BrainMap every 10 sessions. You see what has changed in data, not impressions.",
      },
    ],
  },
  services: {
    eyebrow: "Equipment and services",
    title: "See it all before you come.",
    feelsTitle: "What it feels like",
    items: [
      {
        id: "brainmap",
        eyebrow: "BrainMap · qEEG",
        title: "A map of your brain’s activity",
        video: "serviceBrainmap",
        videoTitle: "How BrainMap works",
        paragraphs: [
          "We fit a cap with sensors. You sit in a chair with your eyes closed, then open. The sensors only listen to your brain’s activity, like a microphone.",
          "On the map we see areas that are too active and areas that are too slow, and compare them with the normal values for your age.",
        ],
        feels: [
          "30 minutes, fully clothed.",
          "No radiation, no needles, no pain.",
          "You get up from the chair and carry on with your day exactly as planned.",
        ],
        link: { label: "Everything about BrainMap →", href: "/brainmap" },
      },
      {
        id: "neurofeedback",
        eyebrow: "Neurofeedback",
        title: "The brain learns to regulate itself",
        video: "serviceNeurofeedback",
        videoTitle: "How neurofeedback works",
        // TODO(owner): list the related protocols you offer alongside neurofeedback (names + one line each).
        paragraphs: [
          "We start from your BrainMap, not from a standard recipe. The protocol targets exactly the areas we found in you.",
          "Session by session, the brain learns a steadier rhythm. We don’t mask the symptom: we train the brain to regulate itself.",
        ],
        feels: [
          "Painless sessions of 30–45 minutes.",
          "You sit back in a chair and feel nothing during the session.",
          "You can go straight back to your day after each session.",
        ],
        link: { label: "Everything about neurofeedback →", href: "/servicii/neurofeedback" },
      },
      {
        id: "consult",
        eyebrow: "Psychological consultation",
        title: "A psychological consultation, in the same visit",
        video: "serviceConsult",
        videoTitle: "How the psychological consultation works",
        paragraphs: [
          "The map shows what is happening in the brain. The conversation with the psychologist shows what that means for your everyday life.",
          "You decide. There is no obligation.",
        ],
        feels: [
          "No second appointment.",
          "In words you understand, not medical terms.",
          "You receive a PDF with your interpretation and recommendations, by email or WhatsApp.",
        ],
      },
      {
        id: "emsella",
        eyebrow: "EmSella",
        title: "You do nothing. The chair does the training.",
        video: "serviceEmsella",
        videoTitle: "How the EmSella chair works",
        paragraphs: [
          "EmSella strengthens the pelvic floor. An electromagnetic field contracts the muscles at maximum intensity — including the deep fibres you cannot control yourself.",
          "For leaks when you cough or lift, sudden urgency and waking at night. For women and men.",
        ],
        feels: [
          "28 minutes. Fully clothed.",
          "You don’t undress, nobody touches you, nothing enters your body.",
          "You feel the contractions strongly, but it is not painful.",
        ],
        link: { label: "Everything about EmSella →", href: "/servicii/emsella" },
      },
    ],
  },
  about: {
    eyebrow: "About us",
    title: "Who we are and who recommends us",
    text: "Emmanuel CliniX is an applied neuroscience clinic in Bucharest. We measure before we recommend.",
    recommendedTitle: "Recommended by",
    // TODO(owner): names / logos of the doctors, clinics or organisations that recommend you.
    recommendedBy: [],
    placeholderLabel: "Partner",
    link: { label: "About us →", href: "/despre-noi" },
  },
  cta: {
    title: "First step: see the map of your brain.",
    text: "Scan, interpretation and psychological consultation. One hour, in Bucharest.",
    primary: { label: "Book a BrainMap →", href: "/brainmap" },
    secondary: { label: "Or take a free test", href: "/chestionare" },
  },
};
