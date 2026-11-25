import type { Article } from "../types";

// PROVISIONAL copy — client to confirm.
export const ARTICLE: Article = {
  slug: "ce-este-brainmap-qeeg",
  title: "Ce este un BrainMap (qEEG)?",
  description:
    "Ce măsoară o hartă a activității creierului, cum decurge scanarea și ce nu este, explicat simplu.",
  category: "BrainMap",
  published: "2026-11-03",
  readingMinutes: 4,
  author: "Emmanuel CliniX",
  image: "scan",
  topics: ["brainmap"],
  body: [
    {
      type: "p",
      text: "BrainMap e numele pe care îl folosim pentru harta activității electrice a creierului. Denumirea tehnică a metodei e qEEG, adică electroencefalogramă cantitativă.",
    },
    { type: "h2", text: "Ce măsoară" },
    {
      type: "p",
      text: "Creierul produce în fiecare secundă o activitate electrică foarte slabă, iar senzorii dintr-o cască o citesc prin scalp, cam cum ar asculta un microfon. Senzorii doar citesc și nu trimit niciun semnal spre creier.",
    },
    {
      type: "p",
      text: "Un program transformă semnalul într-o hartă, pe care se văd zonele care lucrează prea mult și cele care lucrează prea încet.",
    },
    { type: "h2", text: "Cum decurge" },
    {
      type: "list",
      items: [
        "Scanarea BrainMap, de aproximativ 30 de minute. Rămâi îmbrăcat.",
        "Interpretarea hărții, pe loc, pe limba ta.",
        "Consultul psihologic, în aceeași vizită.",
        "PDF pe mail sau pe WhatsApp, cu interpretarea completă și recomandări.",
      ],
    },
    { type: "h2", text: "Ce nu este" },
    {
      type: "p",
      text: "BrainMap nu e un RMN și nici un tomograf. Nu face poze ale creierului, nu folosește radiații și nu pune diagnostice. E o evaluare inițială, care arată cum lucrează creierul tău, ca să pornim de la o măsurătoare.",
    },
    { type: "h2", text: "La ce folosește" },
    {
      type: "p",
      text: "Somnul, stresul, concentrarea și starea de spirit au legătură cu felul în care lucrează creierul. Harta ne ajută să alegem ce ți se potrivește și, mai târziu, să vedem ce s-a schimbat.",
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
    title: "Primul pas e să vezi harta creierului tău",
    text: "Scanarea, interpretarea și consultul psihologic, toate într-o singură vizită de aproximativ o oră.",
    primary: { label: "Programează BrainMap →", href: "/brainmap" },
  },
};
