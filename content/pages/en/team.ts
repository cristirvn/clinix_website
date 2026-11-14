import type { TeamContent } from "@/content/pages/ro/team";

export const team: TeamContent = {
  seo: {
    title: "Team",
    description:
      "The Emmanuel CliniX team: the people who run your BrainMap scan, explain your map and stay with you through your treatment sessions.",
  },
  hero: {
    eyebrow: "Team",
    title: "The people who read your map.",
    lead: "A small team. We work together on every case.",
    primary: { label: "Book a BrainMap →", href: "/brainmap" },
  },
  members: {
    eyebrow: "Who we are",
    title: "Our team",
    photoPlaceholder: "Photo coming soon",
    focusLabel: "Areas of work",
    items: [
      {
        name: "Cristian Florin Cotorceanu",
        role: "Founder · qEEG, neurofeedback and neuromodulation specialist",
        bio: "Founder of Emmanuel CliniX and a specialist in longevity, neurofeedback and biohacking. He turned a personal experience into an integrative health clinic where science and technology work alongside empathy.",
        focus: ["Neurofeedback & BrainMap", "Longevity & biohacking", "Integrative nutrition", "Cognitive optimisation"],
        photo: "/photos/echipa/cristian-cotorceanu.webp",
      },
      {
        name: "Patricia Cihodaru",
        role: "Psychologist and psychotherapist",
        bio: "More than 20 years of psychotherapy. She works with adults, children and teenagers in a safe, empathetic setting, combining experiential, cognitive-behavioural and transpersonal methods.",
        focus: ["Experiential psychotherapy", "Cognitive behavioural therapy (CBT)", "Transpersonal psychotherapy", "Emotional intelligence"],
        photo: "/photos/echipa/patricia-cihodaru.webp",
      },
      {
        name: "Dr Cristian Petrescu",
        role: "Consultant psychiatrist",
        bio: "A psychiatrist with solid clinical training and an academic career. He looks beyond the diagnosis: your emotional life, your relationships and how you function day to day.",
        focus: ["Clinical psychiatry", "Assessment and diagnosis", "Emotional regulation", "Functional balance"],
        photo: "/photos/echipa/cristian-petrescu.webp",
      },
      {
        name: "Cristina Ciobanu",
        role: "Certified aromatherapist",
        bio: "She practises integrative aromatherapy inspired by Traditional Chinese Medicine, using personalised essential-oil protocols for emotional and energetic balance.",
        focus: ["Personalised aromatherapy", "Emotional balance", "Traditional Chinese medicine", "Energetic regulation"],
        photo: "/photos/echipa/cristina-ciobanu.webp",
      },
      {
        name: "Tatiana Dogaru",
        role: "Psychologist",
        bio: "A psychology graduate with a master’s in Criminalistics and training in Forensic Psychology. She has worked as a neurofeedback therapist and takes an analytical approach to human behaviour.",
        focus: ["Neurofeedback", "Forensic psychology", "Behavioural assessment and analysis", "Personal development"],
        photo: "/photos/echipa/tatiana-dogaru.webp",
      },
      {
        name: "Aniela Sîrcu",
        role: "Psychologist",
        bio: "Trained in cognitive-behavioural psychotherapy, couple and family therapy and sexology. She has 20 years of experience with teenagers, adults and couples.",
        focus: ["Cognitive behavioural psychotherapy", "Couple and family therapy", "Sexology", "Personal development"],
        photo: "/photos/echipa/aniela-sircu.webp",
      },
      {
        name: "Dr Ilie-Andrei Ticiu",
        role: "Medical acupuncture specialist",
        bio: "He combines medical acupuncture with BrainMap, neurofeedback and photobiomodulation for a calmer nervous system, less stress and anxiety, better sleep and recovery from chronic pain.",
        focus: ["Medical acupuncture", "Nervous system regulation", "Sleep and anxiety", "Chronic pain"],
        photo: "/photos/echipa/ilie-andrei-ticiu.webp",
      },
    ],
  },
  together: {
    eyebrow: "How we work together",
    title: "One map. One team.",
    points: [
      {
        title: "We all start from your map",
        text: "The whole team works from the same map. You never have to start your story again.",
      },
      {
        title: "We review progress together",
        text: "At every control map we discuss what has changed and adjust the plan.",
      },
      {
        title: "We tell you straight",
        text: "If the method isn’t right for you, we tell you openly.",
      },
    ],
  },
  cta: {
    title: "Meet us at your first visit.",
    text: "One hour at the clinic. Plus a PDF with your recommendations.",
    primary: { label: "Book a BrainMap →", href: "/brainmap" },
    secondary: { label: "Or take a free test", href: "/chestionare" },
  },
};
