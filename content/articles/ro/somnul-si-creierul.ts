import type { Article } from "../types";

// PROVISIONAL copy — client to confirm.
export const ARTICLE: Article = {
  slug: "somnul-si-creierul",
  title: "Somnul și creierul: ce se întâmplă noaptea",
  description:
    "De ce dormi prost când creierul nu se oprește, ce poți schimba de diseară și când merită să cauți cauza.",
  category: "Somn",
  published: "2026-11-03",
  readingMinutes: 5,
  author: "Emmanuel CliniX",
  image: "sleep",
  topics: ["somn"],
  body: [
    {
      type: "p",
      text: "Somnul nu e doar odihnă. Noaptea, creierul face ordine: fixează ce ai învățat, se reface după efortul zilei și reglează emoțiile pentru ziua următoare.",
    },
    { type: "h2", text: "Ce se întâmplă în creier noaptea" },
    {
      type: "p",
      text: "Somnul trece prin mai multe etape, care se repetă de câteva ori pe noapte. În somnul profund, activitatea electrică a creierului încetinește. În somnul cu vise, creierul devine din nou foarte activ.",
    },
    {
      type: "p",
      text: "Când creierul rămâne prea activ seara — de stres, de griji, de ecrane — trecerea spre somnul profund se face greu. Adormi greu, te trezești noaptea sau prea devreme, iar dimineața ești mai obosit decât seara.",
    },
    { type: "h2", text: "De ce pastilele nu sunt tot răspunsul" },
    {
      type: "p",
      text: "Somniferele te pot ajuta să adormi pe termen scurt. Dar nu îți spun de ce nu dormi. Dacă iei deja ceva, nu opri nimic pe cont propriu. Discută asta cu medicul care ți l-a prescris.",
    },
    { type: "h2", text: "Ce poți schimba de diseară" },
    {
      type: "list",
      items: [
        "Culcă-te și trezește-te la aceeași oră, inclusiv în weekend.",
        "Lasă telefonul în altă cameră cu o oră înainte de culcare.",
        "Fără cafea după prânz.",
        "Dormitor răcoros, întunecat și liniștit.",
        "Dacă nu adormi în 20 de minute, ridică-te, fă ceva liniștit, apoi revino în pat.",
      ],
    },
    { type: "h2", text: "Când merită să cauți cauza" },
    {
      type: "p",
      text: "Dacă dormi prost de câteva săptămâni și sfaturile de mai sus nu ajută, merită să afli de ce. BrainMap ne arată cum lucrează creierul tău și de unde poate veni problema.",
    },
    {
      type: "links",
      items: [
        { label: "Testul de somn →", href: "/chestionare/somn" },
        { label: "Un studiu de caz real →", href: "/lp/somn-b" },
      ],
    },
  ],
  cta: {
    title: "Dormi prost de prea mult timp?",
    text: "Vezi cum lucrăm cu somnul la Emmanuel CliniX: pornim de la măsurătoare, nu de la încă o pastilă.",
    primary: { label: "Află cum te putem ajuta →", href: "/lp/somn" },
  },
};
