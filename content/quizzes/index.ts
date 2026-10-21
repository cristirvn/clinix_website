import type { Locale } from "@/lib/i18n";
import type { ScoredQuiz, ScoredQuizSlug } from "@/content/quizzes/types";
import type { QuizHub, Triage } from "@/content/quizzes/hub/types";
import { HUB_RO, TRIAGE_RO } from "@/content/quizzes/hub/ro";
import { HUB_EN, TRIAGE_EN } from "@/content/quizzes/hub/en";

import { ANXIETATE as ANXIETATE_RO } from "@/content/quizzes/ro/anxietate";
import { PANICA as PANICA_RO } from "@/content/quizzes/ro/panica";
import { SOMN as SOMN_RO } from "@/content/quizzes/ro/somn";
import { BURNOUT as BURNOUT_RO } from "@/content/quizzes/ro/burnout";
import { FOCUS as FOCUS_RO } from "@/content/quizzes/ro/focus";
import { DISPOZITIE as DISPOZITIE_RO } from "@/content/quizzes/ro/dispozitie";
import { MIGRENE as MIGRENE_RO } from "@/content/quizzes/ro/migrene";
import { STRES as STRES_RO } from "@/content/quizzes/ro/stres";
import { ADICTII as ADICTII_RO } from "@/content/quizzes/ro/adictii";

import { ANXIETATE as ANXIETATE_EN } from "@/content/quizzes/en/anxietate";
import { PANICA as PANICA_EN } from "@/content/quizzes/en/panica";
import { SOMN as SOMN_EN } from "@/content/quizzes/en/somn";
import { BURNOUT as BURNOUT_EN } from "@/content/quizzes/en/burnout";
import { FOCUS as FOCUS_EN } from "@/content/quizzes/en/focus";
import { DISPOZITIE as DISPOZITIE_EN } from "@/content/quizzes/en/dispozitie";
import { MIGRENE as MIGRENE_EN } from "@/content/quizzes/en/migrene";
import { STRES as STRES_EN } from "@/content/quizzes/en/stres";
import { ADICTII as ADICTII_EN } from "@/content/quizzes/en/adictii";

export type { ScoredQuiz, ScoredQuizSlug };

/** Display order (hub, home, sitemap). Slugs are the internal Romanian route segments. */
export const QUIZ_SLUGS: ScoredQuizSlug[] = [
  "anxietate",
  "panica",
  "somn",
  "burnout",
  "focus",
  "dispozitie",
  "migrene",
  "stres",
  "adictii",
];

const QUIZZES: Record<Locale, Record<ScoredQuizSlug, ScoredQuiz>> = {
  ro: {
    anxietate: ANXIETATE_RO,
    panica: PANICA_RO,
    somn: SOMN_RO,
    burnout: BURNOUT_RO,
    focus: FOCUS_RO,
    dispozitie: DISPOZITIE_RO,
    migrene: MIGRENE_RO,
    stres: STRES_RO,
    adictii: ADICTII_RO,
  },
  en: {
    anxietate: ANXIETATE_EN,
    panica: PANICA_EN,
    somn: SOMN_EN,
    burnout: BURNOUT_EN,
    focus: FOCUS_EN,
    dispozitie: DISPOZITIE_EN,
    migrene: MIGRENE_EN,
    stres: STRES_EN,
    adictii: ADICTII_EN,
  },
};

export function getScoredQuiz(locale: Locale, slug: string): ScoredQuiz | null {
  return (QUIZZES[locale] as Record<string, ScoredQuiz>)[slug] ?? null;
}

export function getQuizList(locale: Locale): ScoredQuiz[] {
  return QUIZ_SLUGS.map((s) => QUIZZES[locale][s]);
}

/** Number of questions as the visitor counts them (scored + urgency). */
export function questionCount(locale: Locale, slug: ScoredQuizSlug): number {
  return QUIZZES[locale][slug].questions.length + 1;
}

const HUBS: Record<Locale, QuizHub> = { ro: HUB_RO, en: HUB_EN };
const TRIAGES: Record<Locale, Triage> = { ro: TRIAGE_RO, en: TRIAGE_EN };

export function getQuizHub(locale: Locale): QuizHub {
  return HUBS[locale];
}

export function getQuizCards(locale: Locale) {
  return HUBS[locale].cards;
}

export function getTriage(locale: Locale): Triage {
  return TRIAGES[locale];
}
