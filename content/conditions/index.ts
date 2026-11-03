import type { Locale } from "@/lib/i18n";
import type { ConditionId, ConditionItem, ConditionsContent } from "./types";
import { CONDITIONS_RO } from "./ro";
import { CONDITIONS_EN } from "./en";
import { getQuizCards } from "@/content/quizzes";

export type { ConditionId, ConditionItem, ConditionsContent };

const BY_LOCALE: Record<Locale, ConditionsContent> = { ro: CONDITIONS_RO, en: CONDITIONS_EN };

export function getConditions(locale: Locale): ConditionsContent {
  return BY_LOCALE[locale];
}

/** Description for a condition: its own text, else the approved test-card text. */
export function conditionDescription(locale: Locale, item: ConditionItem): string {
  if (item.description) return item.description;
  return getQuizCards(locale).find((c) => c.slug === item.quiz)?.description ?? "";
}

export function getCondition(locale: Locale, id: ConditionId): ConditionItem | undefined {
  return BY_LOCALE[locale].items.find((c) => c.id === id);
}
