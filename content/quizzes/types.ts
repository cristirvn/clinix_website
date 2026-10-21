/**
 * Types for the nine scored self-assessment tests. The copy lives in
 * `content/quizzes/ro/<slug>.ts` (approved, verbatim from the client) and
 * `content/quizzes/en/<slug>.ts` (English translation, same structure, same
 * scores/weights/combos — ONLY the text differs).
 *
 * How a test runs: N scored questions (10/7/4/1) → one unscored urgency
 * question (hot/warm/nurture → GHL tag + CTA copy) → name/phone/email behind a
 * consent checkbox → grade 1–10 + band + up to 5 risks + CTA to the matching LP.
 */
/** Stable id for each test (also its `/chestionare/<slug>` route). */
export type ScoredQuizSlug =
  | "anxietate"
  | "panica"
  | "somn"
  | "burnout"
  | "focus"
  | "dispozitie"
  | "migrene"
  | "stres"
  | "adictii";

/** Lead-scoring tier, taken from the urgency question's chosen answer. */
export type Urgency = "hot" | "warm" | "nurture";

/** An answer option and the score it contributes to the grade. */
export interface ScoredOption {
  label: string;
  /** 10 (best) · 7 · 4 · 1 (worst). */
  score: number;
}

/** A risk shown on the result screen — a documented tendency, never a verdict. */
export interface QuizRisk {
  title: string;
  text: string;
}

export interface ScoredQuestion {
  text: string;
  /** Always four options, in descending score order (10 → 1). */
  options: ScoredOption[];
  /** Chosen scores that fire this question's risk (typically `[4, 1]`). */
  triggers: number[];
  /** Priority — higher sorts nearer the top of the five risks shown. */
  weight: number;
  risk: QuizRisk;
}

/** A pattern spanning two weakly-answered questions. Outranks single risks. */
export interface RiskCombo {
  /** 0-based indices into `questions`. */
  q: number[];
  /** Highest score still counted as a weak answer (inclusive). */
  max: number;
  weight: number;
  risk: QuizRisk;
}

export interface UrgencyOption {
  label: string;
  urgency: Urgency;
}

/** The unscored closing question — drives CTA copy + the CRM lead tag. */
export interface UrgencyQuestion {
  text: string;
  options: UrgencyOption[];
}

/** Result-screen copy for one grade band. `interp` may contain `{name}`. */
export interface BandCopy {
  label: string;
  interp: string;
}

/** CTA copy for one urgency tier. */
export interface CtaCopy {
  title: string;
  text: string;
  button: string;
}

export interface ScoredQuiz {
  slug: ScoredQuizSlug;
  /** Route under the Chestionare tab: `/chestionare/<route>`. */
  route: string;
  seo: { title: string; description: string };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    /** The intro paragraph that sets expectations before the first question. */
    lead: string;
    startButton: string;
  };
  /** How the grade is labelled on the result screen. */
  scoreLabel: string;
  questions: ScoredQuestion[];
  urgency: UrgencyQuestion;
  combos: RiskCombo[];
  /** Lead-capture step copy (name + phone + email + consent). */
  lead: { title: string; text: string; submit: string };
  result: {
    risksHeading: string;
    risksSub: string;
    /** Closing reassurance under the risks — contains inline HTML. */
    closing: string;
    /** Shown instead of the risks when nothing fired. */
    goodHeading: string;
    goodText: string;
    /** Bands at > 7.5 · 5–7.5 · < 5 (client spec). */
    bands: { good: BandCopy; mid: BandCopy; low: BandCopy };
  };
  cta: {
    /** Campaign LP this test's result screen sends people to. */
    lp: string;
    eyebrow: string;
    hot: CtaCopy;
    warm: CtaCopy;
    nurture: CtaCopy;
  };
  /** Short "this is not a diagnosis" line, shown under the questions. */
  note: string;
  /** The full legal text at the foot of the result screen. */
  legal: string;
}

