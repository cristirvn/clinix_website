import type { CtaBandContent, PageHeroContent, PageSeo } from "@/content/pages/blocks";

/** `/echipa` — team grid + "how we work together". */
export interface TeamContent {
  seo: PageSeo;
  hero: PageHeroContent;
  members: {
    eyebrow: string;
    title: string;
    /** Label on the photo frame while `photo` is empty. */
    photoPlaceholder: string;
    /** Screen-reader label for a member's focus tags. */
    focusLabel: string;
    items: Array<{
      name: string;
      role: string;
      bio: string;
      /** Areas of work, shown as small tags under the bio. */
      focus?: string[];
      /** /public path or absolute URL; empty → placeholder frame. */
      photo: string;
    }>;
  };
  together: {
    eyebrow: string;
    title: string;
    points: Array<{ title: string; text: string }>;
  };
  cta: CtaBandContent;
}

export const team: TeamContent = {
  seo: {
    title: "Echipă",
    description:
      "Echipa Emmanuel CliniX: oamenii care îți fac scanarea BrainMap, îți explică harta și te însoțesc în ședințele de tratament.",
  },
  hero: {
    eyebrow: "Echipă",
    title: "Oamenii care îți citesc harta.",
    lead: "O echipă mică. Lucrăm împreună pe fiecare caz.",
    primary: { label: "Vreau BrainMap →", href: "/brainmap" },
  },
  members: {
    eyebrow: "Cine suntem",
    title: "Echipa noastră",
    photoPlaceholder: "Fotografie în curând",
    focusLabel: "Arii de lucru",
    items: [
      {
        name: "Cristian Florin Cotorceanu",
        role: "Fondator · Specialist qEEG, neurofeedback și neuromodulație",
        bio: "Fondatorul Emmanuel CliniX, specialist în longevity, neurofeedback și biohacking. A transformat o experiență personală într-o clinică de sănătate integrativă, unde știința și tehnologia lucrează împreună cu empatia.",
        focus: ["Neurofeedback & BrainMap", "Longevity & biohacking", "Nutriție integrativă", "Optimizare cognitivă"],
        photo: "/photos/echipa/cristian-cotorceanu.webp",
      },
      {
        name: "Patricia Cihodaru",
        role: "Psiholog și psihoterapeut",
        bio: "Peste 20 de ani de psihoterapie. Lucrează cu adulți, copii și adolescenți, într-un cadru sigur și empatic, integrând metode experiențiale, cognitiv-comportamentale și transpersonale.",
        focus: ["Psihoterapie experiențială", "Terapie cognitiv-comportamentală (CBT)", "Psihoterapie transpersonală", "Inteligență emoțională"],
        photo: "/photos/echipa/patricia-cihodaru.webp",
      },
      {
        name: "Dr. Cristian Petrescu",
        role: "Medic specialist psihiatrie",
        bio: "Medic psihiatru cu formare clinică solidă și activitate academică. Privește dincolo de diagnostic: viața emoțională, relațiile și felul în care funcționezi zi de zi.",
        focus: ["Psihiatrie clinică", "Evaluare și diagnostic", "Reglare emoțională", "Echilibru funcțional"],
        photo: "/photos/echipa/cristian-petrescu.webp",
      },
      {
        name: "Cristina Ciobanu",
        role: "Aromaterapeut certificat",
        bio: "Practică aromaterapia integrativ, inspirată din Medicina Tradițională Chineză. Lucrează cu protocoale personalizate de uleiuri esențiale, pentru echilibru emoțional și energetic.",
        focus: ["Aromaterapie personalizată", "Echilibru emoțional", "Medicină tradițională chineză", "Reglare energetică"],
        photo: "/photos/echipa/cristina-ciobanu.webp",
      },
      {
        name: "Tatiana Dogaru",
        role: "Psiholog",
        bio: "Absolventă de Psihologie, cu master în Criminalistică și pregătire în Psihologie Judiciară. Are experiență ca terapeut neurofeedback și o abordare analitică a comportamentului uman.",
        focus: ["Neurofeedback", "Psihologie judiciară", "Evaluare și analiză comportamentală", "Dezvoltare personală"],
        photo: "/photos/echipa/tatiana-dogaru.webp",
      },
      {
        name: "Aniela Sîrcu",
        role: "Psiholog",
        bio: "Formată în psihoterapie cognitiv-comportamentală, psihoterapie de cuplu și familie și sexologie. Are 20 de ani de experiență cu adolescenți, adulți și cupluri.",
        focus: ["Psihoterapie cognitiv-comportamentală", "Psihoterapie de cuplu și familie", "Sexologie", "Dezvoltare personală"],
        photo: "/photos/echipa/aniela-sircu.webp",
      },
      {
        name: "Dr. Ilie-Andrei Ticiu",
        role: "Medic specialist acupunctură medicală",
        bio: "Combină acupunctura medicală cu BrainMap, neurofeedback și fotobiomodularea, pentru un sistem nervos mai echilibrat, mai puțin stres și anxietate, somn mai bun și recuperare în durerea cronică.",
        focus: ["Acupunctură medicală", "Reglarea sistemului nervos", "Somn și anxietate", "Durere cronică"],
        photo: "/photos/echipa/ilie-andrei-ticiu.webp",
      },
    ],
  },
  together: {
    eyebrow: "Cum lucrăm împreună",
    title: "O singură hartă. O singură echipă.",
    points: [
      {
        title: "Toți pornim de la harta ta",
        text: "Toată echipa lucrează pe aceeași hartă. Nu povestești totul de la capăt.",
      },
      {
        title: "Ne uităm împreună la progres",
        text: "La fiecare hartă de control discutăm ce s-a schimbat și ajustăm planul.",
      },
      {
        title: "Îți spunem deschis",
        text: "Dacă metoda nu e potrivită pentru tine, îți spunem deschis.",
      },
    ],
  },
  cta: {
    title: "Cunoaște-ne la prima vizită.",
    text: "O oră în clinică. Plus un PDF cu recomandările tale.",
    primary: { label: "Vreau BrainMap →", href: "/brainmap" },
    secondary: { label: "Sau fă un test gratuit", href: "/chestionare" },
  },
};
