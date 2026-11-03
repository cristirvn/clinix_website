import type { Testimonial } from "./types";

/**
 * Every testimonial on the site, in ONE list (both languages in the same
 * object). To add one: add one object at the TOP of this list.
 *  - video: first add the video key in `content/media.ts`, then reference it here.
 *  - quote: name, initials, place and the quote in both languages.
 *
 * Only publish testimonials you have the person's written consent for.
 * The entries below are the ones already used on the landing pages.
 */
// PROVISIONAL — client to confirm every entry is a real patient with consent on file.
export const TESTIMONIALS: Testimonial[] = [
  // ── Videos ────────────────────────────────────────────────────────────────
  { kind: "video", id: "ernesto", video: "testimonialErnesto", name: "Ernesto", role: { ro: "", en: "" }, topic: "brainmap" },
  { kind: "video", id: "gabriela", video: "testimonialGabriela", name: "Gabriela", role: { ro: "", en: "" }, topic: "brainmap" },
  { kind: "video", id: "paulina", video: "testimonialPaulina", name: "Paulina", role: { ro: "", en: "" }, topic: "brainmap" },
  {
    kind: "video",
    id: "paulina-emsella",
    video: "lpEmsellaTestimonial",
    name: "Paulina",
    role: { ro: "Testimonial complet", en: "Full testimonial" },
    topic: "emsella",
  },
  {
    kind: "video",
    id: "mihai-t",
    video: "lpSomnTestimonialMihai",
    name: "Mihai T.",
    role: { ro: "De la 4h la 7h somn", en: "From 4 to 7 hours' sleep" },
    topic: "somn",
  },
  {
    kind: "video",
    id: "simona-v",
    video: "lpSomnTestimonialSimona",
    name: "Simona V.",
    role: { ro: "Cauza găsită în 20 min", en: "Cause found in 20 min" },
    topic: "somn",
  },
  {
    kind: "video",
    id: "cristian-b-video",
    video: "lpSomnTestimonialCristian",
    name: "Cristian B.",
    role: { ro: "Fără somnifere acum", en: "Off sleeping pills now" },
    topic: "somn",
  },
  {
    kind: "video",
    id: "mihaela-r",
    video: "lpSomnBTestimonialMihaela",
    name: "Mihaela R.",
    role: { ro: "De la 3h la 6h somn", en: "From 3 to 6 hours of sleep" },
    topic: "somn",
  },
  {
    kind: "video",
    id: "bogdan-s",
    video: "lpSomnBTestimonialBogdan",
    name: "Bogdan S.",
    role: { ro: "Fără pastile de somn de 2 luni", en: "Off sleeping pills for 2 months" },
    topic: "somn",
  },
  {
    kind: "video",
    id: "corina-l",
    video: "lpSomnBTestimonialCorina",
    name: "Corina L.",
    role: { ro: "Cauza găsită la prima evaluare", en: "Cause found at the first assessment" },
    topic: "somn",
  },

  // ── Quotes ────────────────────────────────────────────────────────────────
  {
    kind: "quote",
    id: "andreea-m",
    name: "Andreea M.",
    initials: "AM",
    place: { ro: "Cluj-Napoca", en: "Cluj-Napoca" },
    quote: {
      ro: "Dorm prima noapte întreagă din ultimii 2 ani. Nu-mi vine să cred.",
      en: "My first full night's sleep in 2 years. I can't believe it.",
    },
    topic: "somn",
  },
  {
    kind: "quote",
    id: "radu-p",
    name: "Radu P.",
    initials: "RP",
    place: { ro: "București", en: "Bucharest" },
    quote: {
      ro: "Mi-au explicat DE CE nu dorm, nu doar ce să iau. Asta a schimbat tot.",
      en: "They explained WHY I wasn't sleeping, not just what to take. That changed everything.",
    },
    topic: "somn",
  },
  {
    kind: "quote",
    id: "ioana-d",
    name: "Ioana D.",
    initials: "ID",
    place: { ro: "Timișoara", en: "Timișoara" },
    quote: {
      ro: "Energia de dimineață s-a întors. Familia a observat prima.",
      en: "My morning energy is back. My family noticed first.",
    },
    topic: "somn",
  },
  {
    kind: "quote",
    id: "gheorghe-v",
    name: "Gheorghe V.",
    initials: "GV",
    place: { ro: "Brașov", en: "Brașov" },
    quote: {
      ro: "La 63 de ani credeam că e prea târziu. M-am înșelat frumos.",
      en: "At 63 I thought it was too late. I was happily wrong.",
    },
    topic: "somn",
  },
  {
    kind: "quote",
    id: "cristian-b",
    name: "Cristian B.",
    initials: "CB",
    place: { ro: "Iași", en: "Iași" },
    quote: {
      ro: "Nu mai iau pastile de somn. Dorm natural acum.",
      en: "I don't take sleeping pills any more. I sleep naturally now.",
    },
    topic: "somn",
  },
  {
    kind: "quote",
    id: "maria-t",
    name: "Maria T.",
    initials: "MT",
    place: { ro: "Constanța", en: "Constanța" },
    quote: {
      ro: "Ceața din minte a dispărut. Gândesc din nou clar.",
      en: "The fog in my head has gone. I can think clearly again.",
    },
    topic: "somn",
  },
  {
    kind: "quote",
    id: "elena-n",
    name: "Elena N.",
    initials: "EN",
    place: { ro: "Sibiu", en: "Sibiu" },
    quote: {
      ro: "Soțul meu mi-a zis că par alt om. Mai calmă, mai odihnită.",
      en: "My husband says I seem like a different person. Calmer, more rested.",
    },
    topic: "somn",
  },
  {
    kind: "quote",
    id: "dan-p",
    name: "Dan P.",
    initials: "DP",
    place: { ro: "Oradea", en: "Oradea" },
    quote: {
      ro: "Plan făcut pentru mine, nu sfaturi de pe internet.",
      en: "A plan made for me, not advice from the internet.",
    },
    topic: "somn",
  },
];
