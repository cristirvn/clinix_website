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
    /** Link label under a member who has their own page (`href`). */
    more: string;
    items: Array<{
      name: string;
      role: string;
      bio: string;
      /** Areas of work, shown as small tags under the bio. */
      focus?: string[];
      /** /public path or absolute URL; empty → placeholder frame. */
      photo: string;
      /** Their own page, when they have one (psychotherapists: `/psihoterapeut/<slug>`). */
      href?: string;
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
      "Echipa Emmanuel CliniX: oamenii care îți fac scanarea BrainMap, îți explică harta și te însoțesc în ședințele tale.",
  },
  hero: {
    eyebrow: "Echipă",
    title: "Oamenii care îți citesc harta",
    lead: "Suntem o echipă mică și lucrăm împreună pe fiecare caz.",
    primary: { label: "Programează BrainMap →", href: "/brainmap" },
  },
  members: {
    eyebrow: "Cine suntem",
    title: "Echipa noastră",
    photoPlaceholder: "Fotografie în curând",
    focusLabel: "Arii de lucru",
    more: "Citește mai mult →",
    items: [
      {
        name: "Cristian Florin Cotorceanu",
        role: "Fondator · Specialist qEEG, neurofeedback și neuromodulație",
        bio: "A înființat Emmanuel CliniX pornind de la o experiență personală. Lucrează cu BrainMap și neurofeedback și se ocupă de longevitate și biohacking.",
        focus: ["Neurofeedback & BrainMap", "Longevity & biohacking", "Nutriție integrativă", "Optimizare cognitivă"],
        photo: "/photos/echipa/cristian-cotorceanu.webp",
      },
      {
        name: "Patricia Cihodaru",
        role: "Psiholog și psihoterapeut",
        bio: "Face psihoterapie de peste 20 de ani, cu adulți, adolescenți și copii. Combină metode experiențiale, cognitiv-comportamentale și transpersonale, în funcție de om.",
        focus: ["Psihoterapie experiențială", "Terapie cognitiv-comportamentală (CBT)", "Psihoterapie transpersonală", "Inteligență emoțională"],
        photo: "/photos/echipa/patricia-cihodaru.webp",
        href: "/psihoterapeut/patricia-cihodaru",
      },
      {
        name: "Dr. Cristian Petrescu",
        role: "Medic specialist psihiatrie",
        bio: "Medic psihiatru cu experiență clinică și activitate academică. Pe lângă diagnostic, se uită și la viața ta emoțională, la relații și la felul în care te descurci zi de zi.",
        focus: ["Psihiatrie clinică", "Evaluare și diagnostic", "Reglare emoțională", "Echilibru funcțional"],
        photo: "/photos/echipa/cristian-petrescu.webp",
      },
      {
        name: "Cristina Ciobanu",
        role: "Aromaterapeut certificat",
        bio: "Practică aromaterapie inspirată din medicina tradițională chineză. Alege uleiurile esențiale pentru fiecare om în parte, pentru echilibru emoțional și energetic.",
        focus: ["Aromaterapie personalizată", "Echilibru emoțional", "Medicină tradițională chineză", "Reglare energetică"],
        photo: "/photos/echipa/cristina-ciobanu.webp",
      },
      {
        name: "Tatiana Dogaru",
        role: "Psiholog",
        bio: "A absolvit Psihologia, are un master în Criminalistică și pregătire în psihologie judiciară. Lucrează ca terapeut de neurofeedback și analizează atent comportamentul uman.",
        focus: ["Neurofeedback", "Psihologie judiciară", "Evaluare și analiză comportamentală", "Dezvoltare personală"],
        photo: "/photos/echipa/tatiana-dogaru.webp",
      },
      {
        name: "Aniela Sîrcu",
        role: "Psiholog",
        bio: "S-a format în psihoterapie cognitiv-comportamentală, de cuplu și familie și în sexologie. Lucrează de 20 de ani cu adolescenți, adulți și cupluri.",
        focus: ["Psihoterapie cognitiv-comportamentală", "Psihoterapie de cuplu și familie", "Sexologie", "Dezvoltare personală"],
        photo: "/photos/echipa/aniela-sircu.webp",
        href: "/psihoterapeut/aniela-sircu",
      },
      {
        name: "Dr. Ilie-Andrei Ticiu",
        role: "Medic specialist acupunctură medicală",
        bio: "Lucrează cu BrainMap, neurofeedback și fotobiomodulare, pe care le combină cu acupunctura medicală. Se ocupă mai ales de stres, anxietate, somn și durere cronică.",
        focus: ["Acupunctură medicală", "Reglarea sistemului nervos", "Somn și anxietate", "Durere cronică"],
        photo: "/photos/echipa/ilie-andrei-ticiu.webp",
      },
    ],
  },
  together: {
    eyebrow: "Cum lucrăm împreună",
    title: "O singură hartă, o singură echipă",
    points: [
      {
        title: "Toți pornim de la harta ta",
        text: "Toată echipa lucrează pe aceeași hartă, așa că nu trebuie să povestești totul de la capăt fiecărui specialist.",
      },
      {
        title: "Ne uităm împreună la progres",
        text: "La fiecare hartă de control discutăm ce s-a schimbat și ajustăm planul.",
      },
      {
        title: "Îți spunem sincer",
        text: "Dacă o metodă nu ți se potrivește, îți spunem de la început.",
      },
    ],
  },
  cta: {
    title: "Cunoaște-ne la prima vizită",
    text: "O oră în clinică și un PDF cu recomandările tale, pe care îl primești în aceeași zi.",
    primary: { label: "Programează BrainMap →", href: "/brainmap" },
    secondary: { label: "Sau fă un test gratuit", href: "/chestionare" },
  },
};
