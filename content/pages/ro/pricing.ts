import type { CtaBandContent, FaqEntry, PageHeroContent, PageLink, PageSeo } from "@/content/pages/blocks";

/** `/tarife` — one featured offer (BrainMap) + a short list with an anchor price per session. */
export interface PricingContent {
  seo: PageSeo;
  hero: PageHeroContent;
  featured: {
    badge: string;
    name: string;
    price: string;
    unit: string;
    includesTitle: string;
    includes: string[];
    deduction: string;
    cta: PageLink;
  };
  list: {
    eyebrow: string;
    title: string;
    /** Shown instead of a price while `price` is null. */
    onRequest: string;
    items: Array<{
      name: string;
      description: string;
      /** Anchor price per session; null → "la cerere" / "on request". */
      price: string | null;
      unit: string;
      options?: Array<{ label: string; price: string }>;
      link?: PageLink;
    }>;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: FaqEntry[];
  };
  cta: CtaBandContent;
}

export const pricing: PricingContent = {
  seo: {
    title: "Tarife",
    description:
      "Tarife Emmanuel CliniX: BrainMap 1.200 lei (scanare, interpretare, consult psihologic, PDF), dedus integral dacă începi un program. EmSella de la 250 lei / ședință.",
  },
  hero: {
    eyebrow: "Tarife",
    title: "Prețuri clare. Fără surprize.",
    lead: "Un singur pas de început. Un preț clar pe ședință pentru tot ce urmează.",
  },
  featured: {
    badge: "Primul pas",
    name: "BrainMap",
    price: "1.200 lei",
    unit: "O oră în clinică, în București",
    includesTitle: "Tot ce e mai jos, într-o singură vizită",
    includes: [
      "Scanarea BrainMap — 30 de minute, cu hainele pe tine",
      "Interpretarea hărții, pe loc",
      "Consult psihologic, în aceeași vizită",
      "PDF pe mail sau pe WhatsApp, cu interpretarea și recomandările tale",
    ],
    deduction: "Dacă începi un program cu noi, suma se scade integral.",
    cta: { label: "Vreau BrainMap →", href: "/brainmap" },
  },
  list: {
    eyebrow: "Ședințe",
    title: "Preț pe ședință",
    onRequest: "la cerere",
    items: [
      {
        name: "Neurofeedback",
        description: "Ședințe de 30–45 de minute. Numărul lor îl stabilim pe baza hărții tale.",
        // TODO(owner): neurofeedback price per session (and any packages).
        price: null,
        unit: "/ ședință",
      },
      {
        name: "EmSella",
        description: "Ședință de 28 de minute, cu hainele pe tine. Recomandăm cel puțin 10 ședințe.",
        price: "250 lei",
        unit: "/ ședință",
        options: [
          { label: "Pachet 5 ședințe", price: "1.150 lei" },
          { label: "Pachet 10 ședințe", price: "2.000 lei" },
        ],
        link: { label: "Despre EmSella →", href: "/lp/emsella" },
      },
      {
        name: "Consult psihologic",
        description: "Inclus în BrainMap. Separat, ca ședință de sine stătătoare.",
        // TODO(owner): standalone psychological consultation price.
        price: null,
        unit: "/ ședință",
      },
    ],
  },
  faq: {
    eyebrow: "Întrebări despre preț",
    title: "Pe scurt",
    items: [
      {
        q: "Ce include BrainMap?",
        a: "Evaluarea costă 1.200 de lei și include scanarea, interpretarea pe loc, consultul psihologic și PDF-ul cu recomandări. Dacă începi un program cu noi, suma se scade integral.",
      },
      {
        q: "Sunt obligat să continui după BrainMap?",
        a: "Nu. Discutăm ce arată harta și ce opțiuni ai mai departe. Decizi tu. Harta și PDF-ul rămân ale tale, indiferent ce alegi să faci mai departe.",
      },
      {
        q: "Trebuie să iau un pachet din prima?",
        a: "Nu ești obligat să iei un pachet din prima.",
      },
      {
        q: "Am nevoie de trimitere de la medicul de familie?",
        a: "Nu.",
      },
    ],
  },
  cta: {
    title: "Primul pas costă o oră.",
    text: "Vezi harta creierului tău, află ce înseamnă și decide apoi ce urmează.",
    primary: { label: "Vreau BrainMap →", href: "/brainmap" },
    secondary: { label: "Sau fă un test gratuit", href: "/chestionare" },
  },
};
