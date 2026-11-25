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
    title: "Prețuri clare, fără surprize",
    lead: "Începi cu o singură evaluare, iar pentru tot ce urmează știi dinainte cât costă fiecare ședință.",
  },
  featured: {
    badge: "Primul pas",
    name: "BrainMap",
    price: "1.200 lei",
    unit: "O vizită de aproximativ o oră, în București",
    includesTitle: "Ce intră în această vizită",
    includes: [
      "Scanarea BrainMap, de aproximativ 30 de minute",
      "Interpretarea hărții, pe loc",
      "Consult psihologic, în aceeași vizită",
      "PDF pe mail sau pe WhatsApp, cu interpretarea și recomandările tale",
    ],
    deduction: "Dacă mergi mai departe cu noi, îți scădem integral suma din program.",
    cta: { label: "Programează BrainMap →", href: "/brainmap" },
  },
  list: {
    eyebrow: "Ședințe",
    title: "Preț pe ședință",
    onRequest: "la cerere",
    items: [
      {
        name: "Neurofeedback",
        description: "O ședință durează 30–45 de minute. Câte ședințe îți trebuie stabilim pe baza hărții tale.",
        // TODO(owner): neurofeedback price per session (and any packages).
        price: null,
        unit: "/ ședință",
      },
      {
        name: "EmSella",
        description: "O ședință durează 28 de minute și rămâi îmbrăcat. Recomandăm cel puțin 10 ședințe.",
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
        description: "E inclus în BrainMap. Îl poți face și separat, ca ședință de sine stătătoare.",
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
        a: "Evaluarea costă 1.200 de lei. Intră scanarea, interpretarea pe loc, consultul psihologic și PDF-ul cu recomandări. Dacă mergi mai departe cu noi, îți scădem integral suma din program.",
      },
      {
        q: "Sunt obligat să continui după BrainMap?",
        a: "Nu. Ne uităm împreună pe hartă și îți spunem ce opțiuni ai. Hotărăști tu, iar harta și PDF-ul rămân ale tale orice ai alege.",
      },
      {
        q: "Trebuie să iau un pachet din prima?",
        a: "Nu. Poți începe cu o singură ședință.",
      },
      {
        q: "Am nevoie de trimitere de la medicul de familie?",
        a: "Nu. Te poți programa direct.",
      },
    ],
  },
  cta: {
    title: "Primul pas îți ia o oră",
    text: "Vezi harta creierului tău, afli ce înseamnă și apoi decizi ce urmează.",
    primary: { label: "Programează BrainMap →", href: "/brainmap" },
    secondary: { label: "Sau fă un test gratuit", href: "/chestionare" },
  },
};
