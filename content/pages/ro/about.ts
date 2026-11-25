import type { CtaBandContent, PageHeroContent, PageSeo } from "@/content/pages/blocks";
import type { VideoKey } from "@/content/media";

/** `/despre-noi` — mission, what makes the clinic different, the space, testimonials, recommended-by. */
export interface AboutContent {
  seo: PageSeo;
  hero: PageHeroContent;
  mission: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  different: {
    eyebrow: string;
    title: string;
    items: Array<{ title: string; text: string }>;
  };
  space: {
    eyebrow: string;
    title: string;
    lead?: string;
    /** Address comes from `lib/site.ts`; this labels the Google Maps link. */
    mapsLabel: string;
    /** Photo slots. `src` empty → neutral placeholder with `label`. */
    photos: Array<{ label: string; src: string }>;
  };
  testimonials: {
    eyebrow: string;
    title: string;
    lead?: string;
    items: Array<{ name: string; video: VideoKey }>;
  };
  recommended: {
    eyebrow: string;
    title: string;
    /** Partner / referrer names. Empty → neutral placeholders are shown. */
    names: string[];
    placeholderLabel: string;
  };
  cta: CtaBandContent;
}

export const about: AboutContent = {
  seo: {
    title: "Despre noi",
    description:
      "Emmanuel CliniX — clinică de neuroștiință aplicată din București. Măsurăm înainte să recomandăm: pornim de la harta creierului tău, nu de la presupuneri.",
  },
  hero: {
    eyebrow: "Despre noi",
    title: "Măsurăm înainte să recomandăm",
    lead: "O clinică din București pentru wellness, longevitate și sănătatea creierului.",
    primary: { label: "Programează BrainMap →", href: "/brainmap" },
    secondary: { label: "Fă testul gratuit", href: "/chestionare" },
  },
  mission: {
    eyebrow: "De ce existăm",
    title: "Nimeni nu ți-a arătat, concret, ce se întâmplă",
    paragraphs: [
      "Mulți ajung la noi după ce au încercat deja multe lucruri, toate pornite de la presupuneri.",
      "De aceea, la noi, primul pas e harta creierului tău. Abia după aceea vorbim despre ce urmează.",
    ],
  },
  different: {
    eyebrow: "Ce ne face diferiți",
    title: "Ce facem altfel",
    items: [
      {
        title: "Pornim de la date",
        text: "Planul tău pornește de la harta creierului tău.",
      },
      {
        title: "Totul într-o singură vizită",
        text: "Scanarea, interpretarea și consultul se fac în aceeași zi, fără să mai revii.",
      },
      {
        title: "Progres pe care îl vezi",
        text: "La fiecare 10 ședințe refacem harta, ca să vezi ce s-a schimbat.",
      },
      {
        title: "Sinceri de la început",
        text: "Dacă vedem că nu te putem ajuta, îți spunem de la primul telefon.",
      },
    ],
  },
  space: {
    eyebrow: "Clinica",
    title: "Un loc liniștit, în București",
    mapsLabel: "Vezi pe hartă →",
    photos: [
      { label: "Scanare BrainMap: harta creierului, explicată pe loc", src: "/photos/brainmap-sesiune.webp" },
      { label: "Casca iMediSync, folosită la BrainMap și la tPBM", src: "/photos/imedisync-casca.webp" },
      { label: "Scaunul EmSella din clinică", src: "/photos/emsella-cabinet.webp" },
    ],
  },
  testimonials: {
    eyebrow: "Dovezi",
    title: "Nu trebuie să ne crezi pe cuvânt",
    items: [
      { name: "Ernesto", video: "testimonialErnesto" },
      { name: "Gabriela", video: "testimonialGabriela" },
      { name: "Paulina", video: "testimonialPaulina" },
    ],
  },
  recommended: {
    eyebrow: "Cine ne recomandă",
    title: "Ne recomandă",
    // TODO(owner): names / logos of the doctors, clinics or organisations that recommend you.
    names: [],
    placeholderLabel: "[Logo partener real]",
  },
  cta: {
    title: "Începe cu harta creierului tău",
    text: "O oră în clinică și un PDF cu recomandările tale, pe care îl primești în aceeași zi.",
    primary: { label: "Programează BrainMap →", href: "/brainmap" },
    secondary: { label: "Sau fă un test gratuit", href: "/chestionare" },
  },
};
