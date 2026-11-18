import type { ConditionsContent } from "./types";

/**
 * `/afectiuni-tratate` — Romanian. Descriptions of the nine conditions with a
 * test come from the approved test cards (`content/quizzes/hub/ro.ts`).
 */
// PROVISIONAL copy — client to confirm (hero, condition names, which services help each one, pelvic-floor text).
export const CONDITIONS_RO: ConditionsContent = {
  seo: {
    title: "Cu ce te ajutăm",
    description:
      "Anxietate, atacuri de panică, insomnie, burnout, concentrare, dispoziție, migrene, stres, dependențe și planșeu pelvin slăbit. Cum te putem ajuta la Emmanuel CliniX, în București.",
  },
  hero: {
    eyebrow: "Cu ce te ajutăm",
    title: "Cu ce te putem ajuta.",
    lead: "Alege ce te descrie. Fă testul gratuit sau vezi cum te ajutăm.",
  },
  ui: {
    takeTest: "Fă testul gratuit →",
    lpLink: "Află cum te putem ajuta →",
    lpPrimary: "Află cum te putem ajuta →",
    servicesLabel: "Ce te poate ajuta",
  },
  items: [
    {
      id: "anxietate",
      title: "Anxietate",
      quiz: "anxietate",
      lp: "/lp/anxietate",
      services: ["brainmap", "neurofeedback", "ces", "tavns", "psihoterapie"],
    },
    {
      id: "panica",
      title: "Atacuri de panică",
      quiz: "panica",
      lp: "/lp/panica",
      services: ["brainmap", "neurofeedback", "tavns", "psihoterapie"],
    },
    {
      id: "somn",
      title: "Insomnie și somn neodihnitor",
      quiz: "somn",
      lp: "/lp/somn",
      services: ["brainmap", "neurofeedback", "ces", "tavns"],
    },
    {
      id: "burnout",
      title: "Burnout",
      quiz: "burnout",
      lp: "/lp/burnout",
      services: ["brainmap", "neurofeedback", "tavns", "tpbm", "psihoterapie"],
    },
    {
      id: "focus",
      title: "Concentrare slabă și brain fog",
      quiz: "focus",
      lp: "/lp/focus",
      services: ["brainmap", "neurofeedback", "tpbm"],
    },
    {
      id: "dispozitie",
      title: "Dispoziție scăzută, lipsă de energie",
      quiz: "dispozitie",
      lp: "/lp/dispozitie",
      services: ["brainmap", "neurofeedback", "tpbm", "psihoterapie"],
    },
    {
      id: "migrene",
      title: "Migrene și dureri de cap",
      quiz: "migrene",
      lp: "/lp/migrene",
      services: ["brainmap", "tavns"],
    },
    {
      id: "stres",
      title: "Stres cronic",
      quiz: "stres",
      lp: "/lp/stres",
      services: ["brainmap", "neurofeedback", "ces", "tavns", "psihoterapie"],
    },
    {
      id: "adictii",
      title: "Dependența de un obicei",
      quiz: "adictii",
      lp: "/lp/adictii",
      services: ["brainmap", "psihoterapie"],
    },
    {
      id: "planseu-pelvin",
      title: "Planșeu pelvin slăbit",
      description:
        "Pierderi de urină la efort, senzația bruscă de urgență și trezirile de noapte. La femei și la bărbați.",
      lp: "/lp/emsella",
      services: ["emsella"],
    },
  ],
  cta: {
    title: "Primul pas: vezi harta creierului tău.",
    text: "Scanare, interpretare și consult psihologic. O oră, în București.",
    primary: { label: "Vreau BrainMap →", href: "/brainmap" },
    secondary: { label: "Sau cere să fii sunat", href: "/contact" },
  },
};
