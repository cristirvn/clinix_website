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
    lead: "A small team that works together on every case. From the scan to the very last session.",
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
        text: "The person who runs your scan, the psychologist and the therapist who guides your sessions all work from the same map. You never have to start your story again.",
      },
      {
        title: "We review progress together",
        text: "At every control map we discuss as a team what has changed, and adjust the protocol if needed.",
      },
      {
        title: "We tell you straight",
        text: "If the method isn’t right for you, we tell you openly.",
      },
    ],
  },
  cta: {
    title: "Meet us at your first visit.",
    text: "One hour at the clinic: scan, interpretation, psychological consultation. Plus a PDF with your interpretation and recommendations.",
    primary: { label: "Book a BrainMap →", href: "/brainmap" },
    secondary: { label: "Or take a free test", href: "/chestionare" },
  },
};
