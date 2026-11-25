import type { TeamContent } from "@/content/pages/ro/team";

export const team: TeamContent = {
  seo: {
    title: "Team",
    description:
      "The Emmanuel CliniX team: the people who run your BrainMap scan, explain your map and stay with you through your sessions.",
  },
  hero: {
    eyebrow: "Team",
    title: "The people who read your map",
    lead: "We are a small team and we work together on every case.",
    primary: { label: "Book a BrainMap →", href: "/brainmap" },
  },
  members: {
    eyebrow: "Who we are",
    title: "Our team",
    photoPlaceholder: "Photo coming soon",
    focusLabel: "Areas of work",
    more: "Read more →",
    items: [
      {
        name: "Cristian Florin Cotorceanu",
        role: "Founder · qEEG, neurofeedback and neuromodulation specialist",
        bio: "Founded Emmanuel CliniX out of a personal experience. Works with BrainMap and neurofeedback, and focuses on longevity and biohacking.",
        focus: ["Neurofeedback & BrainMap", "Longevity & biohacking", "Integrative nutrition", "Cognitive optimisation"],
        photo: "/photos/echipa/cristian-cotorceanu.webp",
      },
      {
        name: "Patricia Cihodaru",
        role: "Psychologist and psychotherapist",
        bio: "Has practised psychotherapy for over 20 years, with adults, teenagers and children. Combines experiential, cognitive-behavioural and transpersonal methods, depending on the person.",
        focus: ["Experiential psychotherapy", "Cognitive behavioural therapy (CBT)", "Transpersonal psychotherapy", "Emotional intelligence"],
        photo: "/photos/echipa/patricia-cihodaru.webp",
        href: "/psihoterapeut/patricia-cihodaru",
      },
      {
        name: "Dr Cristian Petrescu",
        role: "Consultant psychiatrist",
        bio: "A psychiatrist with clinical experience and an academic career. Beyond the diagnosis, also looks at your emotional life, your relationships and how you manage day to day.",
        focus: ["Clinical psychiatry", "Assessment and diagnosis", "Emotional regulation", "Functional balance"],
        photo: "/photos/echipa/cristian-petrescu.webp",
      },
      {
        name: "Cristina Ciobanu",
        role: "Certified aromatherapist",
        bio: "Practises aromatherapy inspired by traditional Chinese medicine. Chooses the essential oils for each person individually, for emotional and energetic balance.",
        focus: ["Personalised aromatherapy", "Emotional balance", "Traditional Chinese medicine", "Energetic regulation"],
        photo: "/photos/echipa/cristina-ciobanu.webp",
      },
      {
        name: "Tatiana Dogaru",
        role: "Psychologist",
        bio: "A psychology graduate with a master’s in Criminalistics and training in forensic psychology. Works as a neurofeedback therapist and looks closely at human behaviour.",
        focus: ["Neurofeedback", "Forensic psychology", "Behavioural assessment and analysis", "Personal development"],
        photo: "/photos/echipa/tatiana-dogaru.webp",
      },
      {
        name: "Aniela Sîrcu",
        role: "Psychologist",
        bio: "Trained in cognitive-behavioural psychotherapy, couple and family therapy, and sexology. Has worked with teenagers, adults and couples for 20 years.",
        focus: ["Cognitive behavioural psychotherapy", "Couple and family therapy", "Sexology", "Personal development"],
        photo: "/photos/echipa/aniela-sircu.webp",
        href: "/psihoterapeut/aniela-sircu",
      },
      {
        name: "Dr Ilie-Andrei Ticiu",
        role: "Medical acupuncture specialist",
        bio: "Works with BrainMap, neurofeedback and photobiomodulation, combined with medical acupuncture. Focuses mainly on stress, anxiety, sleep and chronic pain.",
        focus: ["Medical acupuncture", "Nervous system regulation", "Sleep and anxiety", "Chronic pain"],
        photo: "/photos/echipa/ilie-andrei-ticiu.webp",
      },
    ],
  },
  together: {
    eyebrow: "How we work together",
    title: "One map, one team",
    points: [
      {
        title: "We all start from your map",
        text: "The whole team works from the same map, so you don’t have to tell your story from the start to every specialist.",
      },
      {
        title: "We review progress together",
        text: "At every control map we discuss what has changed and adjust the plan.",
      },
      {
        title: "We tell you honestly",
        text: "If a method doesn’t suit you, we tell you from the start.",
      },
    ],
  },
  cta: {
    title: "Meet us at your first visit",
    text: "One hour at the clinic and a PDF with your recommendations, which you get the same day.",
    primary: { label: "Book a BrainMap →", href: "/brainmap" },
    secondary: { label: "Or take a free test", href: "/chestionare" },
  },
};
