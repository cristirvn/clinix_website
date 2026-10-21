"use client";

import type { ScoredQuiz, Urgency } from "@/content/quizzes/types";
import type { QuizUi } from "@/content/quizzes/ui";
import { MAJOR_RISKS, type ScoredResult } from "@/lib/scored-quiz";
import { ButtonLink, Eyebrow } from "@/components/ui/primitives";

const BAND_TEXT = { good: "text-success", mid: "text-accent", low: "text-danger" } as const;
const BAND_BG = { good: "bg-success", mid: "bg-accent", low: "bg-danger" } as const;

/** The result screen: grade → band → risks (or the all-clear) → CTA by urgency → legal. */
export function QuizResult({
  quiz,
  result,
  urgency,
  ui,
}: {
  quiz: ScoredQuiz;
  result: ScoredResult;
  urgency: Urgency;
  ui: QuizUi;
}) {
  const cta = quiz.cta[urgency];
  const gradeText = result.grade.toFixed(1);

  return (
    <div className="space-y-14">
      {/* Grade */}
      <div className="rounded-[var(--radius)] border border-line bg-surface px-6 py-10 text-center text-ink sm:px-12 sm:py-14">
        <Eyebrow>{quiz.scoreLabel}</Eyebrow>
        <p className="flex items-baseline justify-center gap-3">
          <span className={`font-display text-[5.5rem] leading-none sm:text-[7rem] ${BAND_TEXT[result.tier]}`}>
            {gradeText}
          </span>
          <span className="text-xl font-semibold text-ink-soft">{ui.outOf}</span>
        </p>
        <div className="mx-auto mt-8 grid max-w-md grid-cols-10 gap-1.5" aria-hidden="true">
          {Array.from({ length: 10 }, (_, i) => (
            <span
              key={i}
              className={`h-3 rounded-full ${i < Math.round(result.grade) ? BAND_BG[result.tier] : "bg-line"}`}
            />
          ))}
        </div>
        <h1 tabIndex={-1} className="mt-10 outline-none text-[2rem] leading-tight sm:text-5xl">{result.band.label}</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-ink-soft sm:text-xl">{result.band.interp}</p>
        <p className="mx-auto mt-6 max-w-md text-sm text-ink-soft">{ui.resultDisclaimer}</p>
      </div>

      {/* Risks — or the all-clear */}
      {result.risks.length > 0 ? (
        <div>
          <h2 className="text-[2rem] leading-tight sm:text-4xl">{quiz.result.risksHeading}</h2>
          <p className="mt-4 text-lg text-ink-soft">{quiz.result.risksSub}</p>
          <ol className="mt-8 space-y-4">
            {result.risks.map((risk, i) => {
              const major = i < MAJOR_RISKS;
              return (
                <li
                  key={risk.title}
                  className={`rounded-[var(--radius)] border border-l-[6px] border-line bg-surface p-6 text-ink sm:p-8 ${
                    major ? "border-l-danger" : "border-l-accent"
                  }`}
                >
                  <p
                    className={`text-[0.8rem] font-bold uppercase tracking-[0.16em] ${major ? "text-danger" : "text-accent"}`}
                  >
                    {major ? ui.riskMajor : ui.riskSecondary}
                  </p>
                  <h3 className="mt-3 font-display text-2xl leading-snug">{risk.title}</h3>
                  <p className="mt-3 text-ink-soft">{risk.text}</p>
                </li>
              );
            })}
          </ol>
          <p
            className="mt-8 rounded-[var(--radius)] bg-bg-alt p-6 text-lg text-ink sm:p-8 [&_strong]:font-semibold"
            // Approved client copy with a single <strong>; not user input.
            dangerouslySetInnerHTML={{ __html: quiz.result.closing }}
          />
        </div>
      ) : (
        <div>
          <h2 className="text-[2rem] leading-tight sm:text-4xl">{quiz.result.goodHeading}</h2>
          <p className="mt-6 rounded-[var(--radius)] border border-l-[6px] border-line border-l-success bg-surface p-6 text-lg text-ink sm:p-8">
            {quiz.result.goodText}
          </p>
        </div>
      )}

      {/* CTA — copy follows the declared urgency */}
      <div data-tone="dark" className="rounded-[var(--radius)] bg-dark px-6 py-12 text-center text-on-dark sm:px-12 sm:py-16">
        <Eyebrow>{quiz.cta.eyebrow}</Eyebrow>
        <h2 className="text-[2rem] leading-tight sm:text-5xl">{cta.title}</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-on-dark-soft sm:text-xl">{cta.text}</p>
        <ButtonLink href={quiz.cta.lp} variant="light" size="lg" className="mt-9 w-full sm:w-auto">
          {cta.button}
        </ButtonLink>
      </div>

      <div className="space-y-4 text-sm text-ink-soft">
        <p>{quiz.note}</p>
        <p>{quiz.legal}</p>
      </div>
    </div>
  );
}
