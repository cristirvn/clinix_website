import type { ConditionsContent } from "./types";

/** `/conditions` — English. Mirrors `ro.ts` (same ids, same hrefs). */
// PROVISIONAL copy — client to confirm (hero, condition names, which services help each one, pelvic-floor text).
export const CONDITIONS_EN: ConditionsContent = {
  seo: {
    title: "How we help",
    description:
      "Anxiety, panic attacks, insomnia, burnout, focus, mood, migraines, stress, habits out of control and a weak pelvic floor. How we can help at Emmanuel CliniX in Bucharest.",
  },
  hero: {
    eyebrow: "How we help",
    title: "What we can help with.",
    lead: "Choose what describes you. Take the free test or see how we help.",
  },
  ui: {
    takeTest: "Take the free test →",
    lpLink: "See how we can help →",
    lpPrimary: "See how we can help →",
    servicesLabel: "What can help",
  },
  items: [
    { id: "anxietate", title: "Anxiety", quiz: "anxietate", lp: "/lp/anxietate", services: ["brainmap", "neurofeedback", "ces", "tavns", "psihoterapie"] },
    { id: "panica", title: "Panic attacks", quiz: "panica", lp: "/lp/panica", services: ["brainmap", "neurofeedback", "tavns", "psihoterapie"] },
    { id: "somn", title: "Insomnia and unrefreshing sleep", quiz: "somn", lp: "/lp/somn", services: ["brainmap", "neurofeedback", "ces", "tavns"] },
    { id: "burnout", title: "Burnout", quiz: "burnout", lp: "/lp/burnout", services: ["brainmap", "neurofeedback", "tavns", "tpbm", "psihoterapie"] },
    { id: "focus", title: "Poor focus and brain fog", quiz: "focus", lp: "/lp/focus", services: ["brainmap", "neurofeedback", "tpbm"] },
    { id: "dispozitie", title: "Low mood and low energy", quiz: "dispozitie", lp: "/lp/dispozitie", services: ["brainmap", "neurofeedback", "tpbm", "psihoterapie"] },
    { id: "migrene", title: "Migraines and headaches", quiz: "migrene", lp: "/lp/migrene", services: ["brainmap", "tavns"] },
    { id: "stres", title: "Chronic stress", quiz: "stres", lp: "/lp/stres", services: ["brainmap", "neurofeedback", "ces", "tavns", "psihoterapie"] },
    { id: "adictii", title: "Losing control of a habit", quiz: "adictii", lp: "/lp/adictii", services: ["brainmap", "psihoterapie"] },
    {
      id: "planseu-pelvin",
      title: "A weak pelvic floor",
      description: "Leaking urine when you exert yourself, sudden urgency and getting up in the night. For women and men.",
      lp: "/lp/emsella",
      services: ["emsella"],
    },
  ],
  cta: {
    title: "First step: see the map of your brain.",
    text: "Scan, interpretation and psychological consultation. One hour, in Bucharest.",
    primary: { label: "Book a BrainMap →", href: "/brainmap" },
    secondary: { label: "Or request a call back", href: "/contact" },
  },
};
