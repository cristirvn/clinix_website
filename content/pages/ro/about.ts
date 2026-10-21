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
    lead: string;
    /** Address comes from `lib/site.ts`; this labels the Google Maps link. */
    mapsLabel: string;
    /** Photo slots. `src` empty → neutral placeholder with `label`. */
    photos: Array<{ label: string; src: string }>;
  };
  testimonials: {
    eyebrow: string;
    title: string;
    lead: string;
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
    title: "Măsurăm înainte să recomandăm.",
    lead: "Emmanuel CliniX este o clinică de neuroștiință aplicată din București. Longevity. Wellness. Neuro.",
    primary: { label: "Vreau BrainMap →", href: "/brainmap" },
    secondary: { label: "Fac un test gratuit", href: "/chestionare" },
  },
  mission: {
    eyebrow: "De ce existăm",
    title: "Nimeni nu ți-a arătat, concret, ce se întâmplă.",
    paragraphs: [
      "Mulți oameni ajung la noi după ce au încercat deja mai multe lucruri și niciunul nu a ținut. Toate au fost presupuneri. Soluții generale pentru o problemă care nu e generală.",
      "E greu să repari ceva ce n-ai văzut niciodată cum arată. De aceea, la noi, primul pas este harta activității creierului tău. Abia apoi vorbim despre ce urmează.",
    ],
  },
  different: {
    eyebrow: "Ce ne face diferiți",
    title: "Patru lucruri pe care le facem altfel.",
    items: [
      {
        title: "Date, nu presupuneri",
        text: "Pornim de la Brain Map-ul tău, nu de la o rețetă standard. Vezi date despre tine, nu sfaturi generale.",
      },
      {
        title: "Totul într-o singură vizită",
        text: "Scanare, interpretare pe loc și consult psihologic. Fără o a doua programare.",
      },
      {
        title: "Progres pe care îl vezi",
        text: "Repetăm harta la fiecare 10 ședințe. Vezi în date, nu în impresii, ce s-a schimbat.",
      },
      {
        title: "Onești de la început",
        text: "Nu îți promitem că se rezolvă totul după o vizită. Dacă vedem că nu te putem ajuta, îți spunem la telefon.",
      },
    ],
  },
  space: {
    eyebrow: "Clinica",
    title: "Un loc liniștit, în București.",
    lead: "Scanarea, interpretarea și consultul psihologic se fac în același loc, în aceeași vizită.",
    mapsLabel: "Vezi pe hartă →",
    // TODO(owner): send photos of the clinic (reception, BrainMap room, consultation room, EmSella chair) and set `src`.
    photos: [
      { label: "Fotografie clinică · în curând", src: "" },
      { label: "Fotografie clinică · în curând", src: "" },
      { label: "Fotografie clinică · în curând", src: "" },
    ],
  },
  testimonials: {
    eyebrow: "Dovezi",
    title: "Nu trebuie să ne crezi pe cuvânt",
    lead: "Ernesto, Gabriela și Paulina au început exact de unde ești tu acum: de la harta creierului lor.",
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
    placeholderLabel: "Partener",
  },
  cta: {
    title: "Începe cu harta creierului tău.",
    text: "O oră în clinică: scanare, interpretare, consult psihologic. Plus un PDF cu interpretarea și recomandările tale.",
    primary: { label: "Vreau BrainMap →", href: "/brainmap" },
    secondary: { label: "Sau fă un test gratuit", href: "/chestionare" },
  },
};
