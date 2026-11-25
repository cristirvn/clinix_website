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
    title: "Cu ce te putem ajuta",
    lead: "Alege ce ți se potrivește. Poți face testul gratuit sau poți citi cum te putem ajuta.",
  },
  ui: {
    takeTest: "Fă testul gratuit →",
    lpLink: "Vezi cum te putem ajuta →",
    lpPrimary: "Vezi cum te putem ajuta →",
    servicesLabel: "Ce te poate ajuta",
  },
  items: [
    {
      id: "anxietate",
      title: "Anxietate",
      description: "Îți faci griji tot timpul și simți tensiunea în corp. Mintea rămâne în alertă chiar și când nu se întâmplă nimic.",
      quiz: "anxietate",
      lp: "/lp/anxietate",
      services: ["brainmap", "neurofeedback", "ces", "tavns", "psihoterapie"],
    },
    {
      id: "panica",
      title: "Atacuri de panică",
      description: "Inima o ia razna, simți că nu mai ai aer, analizele ies bune, iar acum ți-e frică de următorul atac.",
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
      description: "Munca te-a stors. Nici weekendul nu te mai reface, iar dimineața te trezești deja obosit.",
      quiz: "burnout",
      lp: "/lp/burnout",
      services: ["brainmap", "neurofeedback", "tavns", "tpbm", "psihoterapie"],
    },
    {
      id: "focus",
      title: "Concentrare slabă și brain fog",
      description: "Ai mintea încețoșată, amâni ce e important și sari de la una la alta. Simți că poți mai mult decât reușești acum.",
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
      description: "Dureri de cap dese sau migrene care îți strică zile întregi. Ai mereu un calmant la îndemână.",
      quiz: "migrene",
      lp: "/lp/migrene",
      services: ["brainmap", "tavns"],
    },
    {
      id: "stres",
      title: "Stres cronic",
      description: "Ești mereu sub presiune, cu nervii întinși. Corpul nu se mai relaxează nici când ai, în sfârșit, timp liber.",
      quiz: "stres",
      lp: "/lp/stres",
      services: ["brainmap", "neurofeedback", "ces", "tavns", "psihoterapie"],
    },
    {
      id: "adictii",
      title: "Dependența de un obicei",
      description: "Telefonul, jocurile, alcoolul, țigările, pariurile sau cumpărăturile îți iau mai mult timp și control decât ai vrea.",
      quiz: "adictii",
      lp: "/lp/adictii",
      services: ["brainmap", "psihoterapie"],
    },
    {
      id: "planseu-pelvin",
      title: "Planșeu pelvin slăbit",
      description:
        "Pierzi urină la efort, simți brusc nevoia să mergi la toaletă sau te trezești noaptea din cauza asta. Se potrivește atât femeilor, cât și bărbaților.",
      lp: "/lp/emsella",
      services: ["emsella"],
    },
  ],
  cta: {
    title: "Primul pas e să vezi harta creierului tău",
    text: "Scanarea, interpretarea și consultul psihologic, toate într-o singură vizită de aproximativ o oră.",
    primary: { label: "Programează BrainMap →", href: "/brainmap" },
    secondary: { label: "Sau te sunăm noi", href: "/contact" },
  },
};
