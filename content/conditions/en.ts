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
    title: "What we can help with",
    lead: "Choose what fits you. You can take the free test or read how we can help.",
  },
  ui: {
    takeTest: "Take the free test →",
    lpLink: "See how we can help →",
    lpPrimary: "See how we can help →",
    servicesLabel: "What can help",
  },
  items: [
    { id: "anxietate", title: "Anxiety", description: "You worry all the time and feel the tension in your body. Your mind stays on alert even when nothing is happening.", quiz: "anxietate", lp: "/lp/anxietate", services: ["brainmap", "neurofeedback", "ces", "tavns", "psihoterapie"] },
    { id: "panica", title: "Panic attacks", description: "Your heart races, you feel you can't get enough air, your test results come back fine, and now you're afraid of the next attack.", quiz: "panica", lp: "/lp/panica", services: ["brainmap", "neurofeedback", "tavns", "psihoterapie"] },
    { id: "somn", title: "Insomnia and unrefreshing sleep", quiz: "somn", lp: "/lp/somn", services: ["brainmap", "neurofeedback", "ces", "tavns"] },
    { id: "burnout", title: "Burnout", description: "Work has wrung you out. Even the weekend no longer restores you, and you wake up already tired.", quiz: "burnout", lp: "/lp/burnout", services: ["brainmap", "neurofeedback", "tavns", "tpbm", "psihoterapie"] },
    { id: "focus", title: "Poor focus and brain fog", description: "Your mind feels foggy, you put off what matters and jump from one thing to the next. You feel you could do more than you manage right now.", quiz: "focus", lp: "/lp/focus", services: ["brainmap", "neurofeedback", "tpbm"] },
    { id: "dispozitie", title: "Low mood and low energy", quiz: "dispozitie", lp: "/lp/dispozitie", services: ["brainmap", "neurofeedback", "tpbm", "psihoterapie"] },
    { id: "migrene", title: "Migraines and headaches", description: "Frequent headaches or migraines that ruin whole days. You always keep a painkiller close at hand.", quiz: "migrene", lp: "/lp/migrene", services: ["brainmap", "tavns"] },
    { id: "stres", title: "Chronic stress", description: "You're always under pressure, your nerves on edge. Your body can't relax even when you finally have some free time.", quiz: "stres", lp: "/lp/stres", services: ["brainmap", "neurofeedback", "ces", "tavns", "psihoterapie"] },
    { id: "adictii", title: "Losing control of a habit", description: "Your phone, gaming, alcohol, cigarettes, betting or shopping take more of your time and control than you would like.", quiz: "adictii", lp: "/lp/adictii", services: ["brainmap", "psihoterapie"] },
    {
      id: "planseu-pelvin",
      title: "A weak pelvic floor",
      description: "You leak urine when you exert yourself, suddenly need the toilet or wake up in the night because of it. It suits women and men alike.",
      lp: "/lp/emsella",
      services: ["emsella"],
    },
  ],
  cta: {
    title: "The first step is to see the map of your brain",
    text: "The scan, the interpretation and the psychological consultation, all in a single visit of about an hour.",
    primary: { label: "Book a BrainMap →", href: "/brainmap" },
    secondary: { label: "Or we'll call you", href: "/contact" },
  },
};
