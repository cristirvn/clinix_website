import type { QuizUi } from "./ro";

/** English twin of `ro.ts`. */
export const QUIZ_UI_EN: QuizUi = {
  progress: "Question {n} of {total}",
  next: "Next →",
  continue: "Continue →",
  back: "← Back",
  backToLast: "← Back to the last question",
  calculating: "We are working through your answers. Your personal result will be ready in a moment.",
  outOf: "out of 10",
  resultDisclaimer: "An indicative result, generated automatically from your answers. It is not a medical diagnosis.",
  riskMajor: "Major risk",
  riskSecondary: "Secondary risk",
  consentTerms: {
    before: "I have read and agree to the",
    termsLink: "Terms and Conditions",
    and: "and the",
    privacyLink: "Privacy Policy",
  },
  consentContact:
    "I agree to be contacted by phone or email to discuss my results and to receive promotional communications.",
  consentError: "You need to tick the consent to be contacted before you can send the form.",
};
