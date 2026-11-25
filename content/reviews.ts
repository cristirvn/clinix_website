/**
 * Google reviews of the clinic, shared by the home page and the NeuroFit page.
 * The quotes are the reviewers' own words (Romanian); the English text is a
 * translation for the .co.uk site. Update the rating and count when Google does.
 */
export const GOOGLE_RATING = { score: { ro: "4,9", en: "4.9" }, count: "100+" } as const;

export interface GoogleReview {
  name: string;
  quote: { ro: string; en: string };
}

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    name: "Ema Manu",
    quote: {
      ro: "Profesionalism, empatie, aparatură performantă. Unic în București. Recomand!",
      en: "Professionalism, empathy, high-performance equipment. Unique in Bucharest. I recommend it!",
    },
  },
  {
    name: "Elena Bucsa-Miron",
    quote: {
      ro: "Este o clinică cu o atmosferă primitoare, în care oameni specializați, profesioniști lucrează în echipă pentru binele pacientului.",
      en: "A clinic with a welcoming atmosphere, where specialised, professional people work as a team for the good of the patient.",
    },
  },
  {
    name: "Mihaela Oprisor",
    quote: {
      ro: "Un mediu foarte plăcut, liniștitor, care te încarcă cu un vibe bun și relaxant. Vom reveni cu siguranță.",
      en: "A very pleasant, calming place that fills you with a good, relaxing vibe. We'll definitely be back.",
    },
  },
];
