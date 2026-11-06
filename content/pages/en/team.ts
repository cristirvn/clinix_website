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
    // TODO(owner): real team members — full name, role/credentials, 1–2 sentence bio and a portrait photo for each.
    items: [
      { name: "Full name", role: "BrainMap (qEEG) specialist", bio: "Full profile coming soon.", photo: "" },
      { name: "Full name", role: "Psychologist", bio: "Full profile coming soon.", photo: "" },
      { name: "Full name", role: "Neurofeedback therapist", bio: "Full profile coming soon.", photo: "" },
      { name: "Full name", role: "Patient coordinator", bio: "Full profile coming soon.", photo: "" },
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
