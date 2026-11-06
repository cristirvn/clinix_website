import type { Article } from "../types";

// PROVISIONAL copy — client to confirm.
export const ARTICLE: Article = {
  slug: "ce-este-brainmap-qeeg",
  title: "Ce este un BrainMap (qEEG)?",
  description:
    "Ce măsoară o hartă a activității creierului, cum decurge scanarea și ce nu este. Pe scurt și pe înțelesul tuturor.",
  category: "BrainMap",
  published: "2026-11-03",
  readingMinutes: 4,
  author: "Emmanuel CliniX",
  image: "scan",
  body: [
    {
      type: "p",
      text: "BrainMap este numele pe care îl folosim pentru o hartă a activității electrice a creierului. Tehnic, metoda se numește qEEG: electroencefalogramă cantitativă.",
    },
    { type: "h2", text: "Ce măsoară" },
    {
      type: "p",
      text: "Creierul produce, în fiecare secundă, o activitate electrică foarte slabă. Senzorii dintr-o cască o citesc prin scalp. Ca un microfon care ascultă creierul vorbind. Senzorii doar citesc, nu transmit nimic spre creier.",
    },
    {
      type: "p",
      text: "Un program transformă semnalul într-o hartă. Pe hartă vedem zone prea active și zone prea lente. Le comparăm cu valorile normale pentru vârsta ta.",
    },
    { type: "h2", text: "Cum decurge" },
    {
      type: "list",
      items: [
        "Scanarea BrainMap: 30 de minute, cu hainele pe tine.",
        "Interpretarea hărții, pe loc, în cuvinte pe care le înțelegi.",
        "Consult psihologic, în aceeași vizită.",
        "PDF pe mail sau pe WhatsApp, cu interpretarea completă și recomandări.",
      ],
    },
    { type: "h2", text: "Ce nu este" },
    {
      type: "p",
      text: "BrainMap nu este un RMN și nici un tomograf. Nu face poze ale creierului și nu folosește radiații. Nu pune un diagnostic. Este un instrument de evaluare inițială: arată cum lucrează creierul tău, ca să pornim de la o măsurătoare, nu de la presupuneri.",
    },
    { type: "h2", text: "La ce folosește" },
    {
      type: "p",
      text: "Somnul, stresul, concentrarea, starea de spirit se văd pe o hartă a activității creierului tău. Harta ne ajută să alegem ce are sens pentru tine. Și, mai târziu, să măsurăm ce s-a schimbat.",
    },
    {
      type: "links",
      items: [
        { label: "BrainMap, pas cu pas →", href: "/servicii/brainmap" },
        { label: "Cu ce te putem ajuta →", href: "/afectiuni-tratate" },
      ],
    },
  ],
  cta: {
    title: "Primul pas: vezi harta creierului tău.",
    text: "Scanare, interpretare și consult psihologic. O oră, în București.",
    primary: { label: "Vreau BrainMap →", href: "/brainmap" },
  },
};
