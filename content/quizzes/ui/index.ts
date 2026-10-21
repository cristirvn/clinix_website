import type { Locale } from "@/lib/i18n";
import { QUIZ_UI_RO, type QuizUi } from "./ro";
import { QUIZ_UI_EN } from "./en";

export type { QuizUi };

const UI: Record<Locale, QuizUi> = { ro: QUIZ_UI_RO, en: QUIZ_UI_EN };

export function getQuizUi(locale: Locale): QuizUi {
  return UI[locale];
}
