import type { HowItWorksContent } from "@/content/pages/ro/how-it-works";

export const howItWorks: HowItWorksContent = {
  seo: {
    title: "How it works",
    description:
      "From a free test to a map of your brain, and progress you can see in data. How BrainMap, neurofeedback, the psychological consultation and EmSella work.",
  },
  hero: {
    eyebrow: "How it works",
    title: "First we measure, and only then do we recommend",
    lead: "Five steps, from the first phone call to the moment you see on the map what has changed.",
    primary: { label: "Book a BrainMap →", href: "/brainmap" },
    secondary: { label: "Take the free test", href: "/chestionare" },
  },
  journey: {
    eyebrow: "Your journey",
    title: "Five steps, nothing more",
    steps: [
      {
        title: "A free test or a phone call",
        text: "You take the online test in 2–3 minutes, or call us directly.",
      },
      {
        title: "The BrainMap scan",
        text: "You sit in a chair, fully clothed, for about 30 minutes. The sensors in the cap record the brain’s electrical activity.",
      },
      {
        title: "Interpretation and plan",
        text: "In the same visit we explain your map in plain words and agree together on what comes next.",
      },
      {
        title: "Training sessions",
        text: "Neurofeedback, for example. The sessions don’t hurt, and little by little the brain learns a steadier rhythm.",
      },
      {
        title: "We measure again",
        text: "Every 10 sessions we redo your BrainMap. That way you see on the map what has changed since the start.",
      },
    ],
  },
  services: {
    eyebrow: "Equipment and services",
    title: "See what it all looks like before you come",
    feelsTitle: "What it feels like",
    items: [
      {
        id: "brainmap",
        eyebrow: "BrainMap · qEEG",
        title: "A map of your brain’s activity",
        video: "serviceBrainmap",
        videoTitle: "How BrainMap works",
        paragraphs: [
          "We put a cap with sensors on your head. You sit in a chair, first with your eyes closed, then with them open. The sensors only listen to what the brain is doing, much as a microphone would.",
          "The map shows the areas that work too hard and the ones that work too slowly. The whole plan starts from here.",
        ],
        feels: [
          "It takes about 30 minutes and you stay fully clothed.",
          "There is no radiation, no needles and it doesn’t hurt.",
          "You get up from the chair and carry on with your day exactly as planned.",
        ],
        link: { label: "Read all about BrainMap →", href: "/brainmap" },
      },
      {
        id: "neurofeedback",
        eyebrow: "Neurofeedback",
        title: "The brain learns to regulate itself",
        video: "serviceNeurofeedback",
        videoTitle: "How neurofeedback works",
        // TODO(owner): list the related protocols you offer alongside neurofeedback (names + one line each).
        paragraphs: [
          "We start from your map, so we know exactly where we are starting from. Then, session by session, the brain gets feedback and learns to regulate itself.",
          "The aim is for the brain, over time, to find a steadier rhythm on its own.",
        ],
        feels: [
          "A session takes 30–45 minutes and doesn’t hurt.",
          "You sit back in the chair. You feel nothing during the session.",
          "After the session you can go straight back to work.",
        ],
        link: { label: "Read all about neurofeedback →", href: "/servicii/neurofeedback" },
      },
      {
        id: "consult",
        eyebrow: "Psychological consultation",
        title: "A psychological consultation, in the same visit",
        video: "serviceConsult",
        videoTitle: "How the psychological consultation works",
        paragraphs: [
          "The map shows what is happening in the brain. The conversation with the psychologist helps you understand what that means for your everyday life.",
          "After the consultation, you decide whether to go further. Nobody puts you under any obligation.",
        ],
        feels: [
          "You don’t need a second appointment.",
          "We keep it simple, with no medical jargon.",
          "You get the interpretation and recommendations in a PDF, by email or on WhatsApp.",
        ],
      },
      {
        id: "emsella",
        eyebrow: "EmSella",
        title: "You sit on the chair, and the chair does the training",
        video: "serviceEmsella",
        videoTitle: "How the EmSella chair works",
        paragraphs: [
          "EmSella strengthens the pelvic floor muscles. An electromagnetic field contracts them strongly, including the deep fibres you can’t work on your own.",
          "It’s for people who leak urine when they exert themselves, suddenly need the toilet or wake up in the night because of it. It suits women and men alike.",
        ],
        feels: [
          "A session takes 28 minutes and you stay fully clothed.",
          "You don’t undress, nobody touches you, nothing enters your body.",
          "You feel the contractions strongly, but they don’t hurt.",
        ],
        link: { label: "Read all about EmSella →", href: "/servicii/emsella" },
      },
    ],
  },
  about: {
    eyebrow: "About us",
    title: "Who we are and who recommends us",
    text: "Emmanuel CliniX is a clinic in Bucharest for brain health. We measure before we recommend, at every step.",
    recommendedTitle: "Recommended by",
    // TODO(owner): names / logos of the doctors, clinics or organisations that recommend you.
    recommendedBy: [],
    placeholderLabel: "[Real partner logo]",
    link: { label: "About us →", href: "/despre-noi" },
  },
  cta: {
    title: "The first step is to see the map of your brain",
    text: "The scan, the interpretation and the psychological consultation, all in a single visit of about an hour.",
    primary: { label: "Book a BrainMap →", href: "/brainmap" },
    secondary: { label: "Or take a free test", href: "/chestionare" },
  },
};
