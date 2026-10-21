/**
 * Interface strings for the quiz flow (`components/quiz/ScoredQuiz.tsx`).
 * Romanian = verbatim from the previous build's ScoredQuiz / LeadCapture /
 * CalculatingOverlay. `en.ts` must have the same shape (`QuizUi`).
 */
export const QUIZ_UI_RO = {
  /** "Întrebarea 3 din 11" — `{n}` / `{total}` are replaced. */
  progress: "Întrebarea {n} din {total}",
  next: "Următoarea →",
  /** The button under the urgency question (last before the form). */
  continue: "Continuă →",
  back: "← Înapoi",
  backToLast: "← Înapoi la ultima întrebare",
  calculating: "Calculăm răspunsurile tale. Revenim imediat cu răspunsul potrivit pentru tine.",
  outOf: "din 10",
  resultDisclaimer: "Rezultat orientativ, generat automat pe baza răspunsurilor tale. Nu este un diagnostic medical.",
  riskMajor: "Risc major",
  riskSecondary: "Risc secundar",
  /** Two mandatory checkboxes on the lead step (verbatim from the old LeadCapture). */
  consentTerms: {
    before: "Am citit și sunt de acord cu",
    termsLink: "Termenii, Condițiile",
    and: "și",
    privacyLink: "Politica de Confidențialitate",
  },
  consentContact:
    "Sunt de acord să fiu contactat telefonic sau prin e-mail pentru a discuta rezultatele și a primi comunicări promoționale.",
  consentError: "Trebuie să bifezi acordul de a fi contactat ca să poți trimite formularul.",
};

export type QuizUi = typeof QUIZ_UI_RO;
