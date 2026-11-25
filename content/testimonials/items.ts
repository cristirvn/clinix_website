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
// Client copy v2 (Nov 2026): only Ernesto, Gabriela and Paulina are real patients so far.
// The "[…]" entries are the client's placeholders — fill them in with real patients
// (name, subject, service) after filming. The quotes are real Google reviews, copied exactly.
/** Client placeholders, shown as written until the real material arrives. */
const PATIENT = { ro: "[Nume pacient]", en: "[Patient name]" };
const SUBJECT = { ro: "[Subiectul testimonialului]", en: "[Testimonial subject]" };
const ANOTHER_REVIEW = { ro: "[Altă recenzie reală de pe Google]", en: "[Another real Google review]" };
const GOOGLE = { ro: "recenzie Google", en: "Google review" };

export const TESTIMONIALS: Testimonial[] = [
  // ── Videos ────────────────────────────────────────────────────────────────
  {
    kind: "video",
    id: "ernesto",
    video: "testimonialErnesto",
    name: "Ernesto",
    role: { ro: "", en: "" },
    home: { ro: "Despre somn", en: "About sleep" },
    topic: "brainmap",
  },
  {
    kind: "video",
    id: "gabriela",
    video: "testimonialGabriela",
    name: "Gabriela",
    role: { ro: "", en: "" },
    home: { ro: "[Subiectul testimonialului]", en: "[Testimonial subject]" },
    topic: "brainmap",
  },
  {
    kind: "video",
    id: "paulina",
    video: "testimonialPaulina",
    name: "Paulina",
    role: { ro: "", en: "" },
    home: { ro: "[Subiectul testimonialului]", en: "[Testimonial subject]" },
    topic: "brainmap",
  },
  {
    kind: "video",
    id: "paulina-emsella",
    video: "lpEmsellaTestimonial",
    name: PATIENT,
    // The client's spec has "[Subiect]" for this clip on /testimoniale; the home carousel keeps the long placeholder.
    role: { ro: "[Subiect]", en: "[Subject]" },
    home: SUBJECT,
    topic: "emsella",
  },
  { kind: "video", id: "pending-1", video: "lpSomnTestimonialMihai", name: PATIENT, role: SUBJECT, topic: "pending" },
  { kind: "video", id: "pending-2", video: "lpSomnTestimonialSimona", name: PATIENT, role: SUBJECT, topic: "pending" },
  { kind: "video", id: "pending-3", video: "lpSomnTestimonialCristian", name: PATIENT, role: SUBJECT, topic: "pending" },
  { kind: "video", id: "pending-4", video: "lpSomnBTestimonialMihaela", name: PATIENT, role: SUBJECT, topic: "pending" },
  { kind: "video", id: "pending-5", video: "lpSomnBTestimonialBogdan", name: PATIENT, role: SUBJECT, topic: "pending" },
  { kind: "video", id: "pending-6", video: "lpSomnBTestimonialCorina", name: PATIENT, role: SUBJECT, topic: "pending" },

  // ── Quotes: real Google reviews ──────────────────────────────────────────────
  {
    kind: "quote",
    id: "ema-manu",
    name: "Ema Manu",
    initials: "E",
    place: GOOGLE,
    quote: {
      ro: "Profesionalism, empatie, aparatură performantă. Unic în București. Recomand!",
      en: "Professionalism, empathy, high-performance equipment. Unique in Bucharest. I recommend it!",
    },
  },
  {
    kind: "quote",
    id: "ileana-mardare",
    name: "Ileana Mardare",
    initials: "I",
    place: GOOGLE,
    quote: {
      ro: "Cei care mă cunosc, mai ales foștii studenți, știu cât de exigentă și atentă la detalii sunt și că nu dau ușor punctajul maxim. Emmanuel CliniX merită pe deplin toate cele cinci stele, pentru profesionalism, empatie, calitatea și diversitatea serviciilor, oferite într-un spațiu cald și primitor.",
      en: "Those who know me, especially my former students, know how demanding and attentive to detail I am, and that I don't give top marks easily. Emmanuel CliniX fully deserves all five stars, for professionalism, empathy, and the quality and range of its services, offered in a warm and welcoming space.",
    },
  },
  {
    kind: "quote",
    id: "mihaela-oprisor",
    name: "Mihaela Oprisor",
    initials: "M",
    place: GOOGLE,
    quote: {
      ro: "Un mediu foarte plăcut, liniștitor, care te încarcă cu un vibe bun și relaxant. Vom reveni cu siguranță.",
      en: "A very pleasant, calming place that fills you with a good, relaxing vibe. We'll definitely be back.",
    },
  },
  {
    kind: "quote",
    id: "isabela-lazar",
    name: "Isabela Lazar",
    initials: "I",
    place: GOOGLE,
    quote: {
      ro: "Am avut o experiență excelentă în această clinică și pot spune sincer că este un loc în care profesionalismul se simte de la primul contact. Întregul personal este primitor, atent, amabil și foarte implicat. Clinica este impecabilă, modernă, foarte bine organizată și oferă o atmosferă plăcută și confortabilă.",
      en: "I had an excellent experience at this clinic and can honestly say it is a place where professionalism shows from the very first contact. The whole staff is welcoming, attentive, kind and very involved. The clinic is spotless, modern, very well organised and has a pleasant, comfortable atmosphere.",
    },
  },
  {
    kind: "quote",
    id: "elena-bucsa-miron",
    name: "Elena Bucsa-Miron",
    initials: "E",
    place: GOOGLE,
    quote: {
      ro: "Este o clinică cu o atmosferă primitoare, în care oameni specializați, profesioniști lucrează în echipă pentru binele pacientului.",
      en: "A clinic with a welcoming atmosphere, where specialised, professional people work as a team for the good of the patient.",
    },
  },
  {
    kind: "quote",
    id: "anamaria-loredana-avramescu",
    name: "Anamaria Loredana Avramescu",
    initials: "A",
    place: GOOGLE,
    quote: {
      ro: "Empatie, interes și profesionalism. Recomand cu siguranță",
      en: "Empathy, interest and professionalism. I definitely recommend it",
    },
  },
  { kind: "quote", id: "google-pending-1", name: { ro: "[Nume]", en: "[Name]" }, initials: "?", place: GOOGLE, quote: ANOTHER_REVIEW },
  { kind: "quote", id: "google-pending-2", name: { ro: "[Nume]", en: "[Name]" }, initials: "?", place: GOOGLE, quote: ANOTHER_REVIEW },
];
