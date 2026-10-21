import type { ScoredQuizSlug } from "@/content/quizzes/types";

export interface QuizCard {
  slug: ScoredQuizSlug;
  audience: string;
  title: string;
  /** The symptoms, in the patient's own words. */
  description: string;
}

export interface QuizHub {
  seo: { title: string; description: string };
  hero: { eyebrow: string; title: string; subtitle: string };
  promise: Array<{ label: string; text: string }>;
  cards: QuizCard[];
  general: { title: string; text: string; button: string };
}

/** The short diagnostic ("Cu ce te confrunți cel mai des?") — one answer → one test. */
export interface Triage {
  seo: { title: string; description: string };
  eyebrow: string;
  question: string;
  help: string;
  options: Array<{ label: string; slug: ScoredQuizSlug }>;
  direct: { text: string; button: string; href: string };
}
