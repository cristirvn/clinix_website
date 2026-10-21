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
    items: Array<{
      name: string;
      role: string;
      bio: string;
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
    lead: "O echipă mică, care lucrează împreună pe fiecare caz. De la scanare până la ultima ședință.",
    primary: { label: "Vreau BrainMap →", href: "/brainmap" },
  },
  members: {
    eyebrow: "Cine suntem",
    title: "Echipa noastră",
    photoPlaceholder: "Fotografie în curând",
    // TODO(owner): real team members — full name, role/credentials, 1–2 sentence bio and a portrait photo for each.
    items: [
      { name: "Nume și prenume", role: "Specialist BrainMap (qEEG)", bio: "Prezentarea completă vine în curând.", photo: "" },
      { name: "Nume și prenume", role: "Psiholog", bio: "Prezentarea completă vine în curând.", photo: "" },
      { name: "Nume și prenume", role: "Terapeut neurofeedback", bio: "Prezentarea completă vine în curând.", photo: "" },
      { name: "Nume și prenume", role: "Coordonator pacienți", bio: "Prezentarea completă vine în curând.", photo: "" },
    ],
  },
  together: {
    eyebrow: "Cum lucrăm împreună",
    title: "O singură hartă. O singură echipă.",
    points: [
      {
        title: "Toți pornim de la harta ta",
        text: "Cine face scanarea, psihologul și terapeutul care te însoțește în ședințe lucrează pe aceeași hartă. Nu povestești totul de la capăt.",
      },
      {
        title: "Ne uităm împreună la progres",
        text: "La fiecare hartă de control discutăm în echipă ce s-a schimbat și ajustăm protocolul dacă e nevoie.",
      },
      {
        title: "Îți spunem deschis",
        text: "Dacă metoda nu e potrivită pentru tine, îți spunem deschis.",
      },
    ],
  },
  cta: {
    title: "Cunoaște-ne la prima vizită.",
    text: "O oră în clinică: scanare, interpretare, consult psihologic. Plus un PDF cu interpretarea și recomandările tale.",
    primary: { label: "Vreau BrainMap →", href: "/brainmap" },
    secondary: { label: "Sau fă un test gratuit", href: "/chestionare" },
  },
};
