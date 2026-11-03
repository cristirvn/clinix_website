"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ScoredQuiz as ScoredQuizType, Urgency } from "@/content/quizzes/types";
import { getQuizUi } from "@/content/quizzes/ui";
import { useLocale } from "@/components/layout/LocaleProvider";
import { Container, Eyebrow, buttonClass } from "@/components/ui/primitives";
import { scoreQuiz, type AnswerSet } from "@/lib/scored-quiz";
import { QuizLeadForm } from "@/components/quiz/QuizLeadForm";
import { QuizResult } from "@/components/quiz/QuizResult";

/**
 * A self-assessment test (`/chestionare/[slug]`). Five phases, one thing per screen:
 *   intro → N scored questions → the unscored urgency question → lead capture → result.
 *
 * The urgency answer picks the CTA copy (hot/warm/nurture) and tags the lead in
 * GoHighLevel. The result unlocks only after `/api/lead` accepts the lead.
 * GA4: `test_step` per question, `lead_form_view` once, `test_result` once.
 */

type Phase = "intro" | "quiz" | "urgency" | "lead" | "result";
type Gtag = (...args: unknown[]) => void;

function gtag(): Gtag | null {
  const g = (window as unknown as { gtag?: Gtag }).gtag;
  return typeof g === "function" ? g : null;
}

export function ScoredQuiz({ quiz }: { quiz: ScoredQuizType }) {
  const { locale } = useLocale();
  const ui = getQuizUi(locale);
  const total = quiz.questions.length;
  const steps = total + 1;

  const [phase, setPhase] = useState<Phase>("intro");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerSet>([]);
  const [urgencyIndex, setUrgencyIndex] = useState<number | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [selected, setSelected] = useState<number | null>(null);

  const result = useMemo(() => scoreQuiz(quiz, answers, name), [quiz, answers, name]);
  const urgency: Urgency = urgencyIndex === null ? "nurture" : quiz.urgency.options[urgencyIndex].urgency;
  const step = phase === "urgency" ? steps : index + 1;

  // Every step starts at the top, with focus on its heading for screen readers.
  const topRef = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    window.scrollTo({ top: 0, behavior: "auto" });
    topRef.current?.querySelector<HTMLElement>("h1")?.focus({ preventScroll: true });
  }, [phase, index]);

  // Arriving from the home page's first question (`?start=1`): skip the intro, continue with the questions.
  useEffect(() => {
    if (new URLSearchParams(window.location.search).has("start")) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPhase("quiz");
    }
  }, []);

  // GA4 drop-off tracking.
  const firedFor = useRef<number | null>(null);
  useEffect(() => {
    if ((phase !== "quiz" && phase !== "urgency") || firedFor.current === step) return;
    firedFor.current = step;
    gtag()?.("event", "test_step", {
      funnel: "test",
      step,
      question_id: phase === "urgency" ? `${quiz.slug}_urgenta` : `${quiz.slug}_q${step}`,
      test: quiz.slug,
    });
  }, [phase, step, quiz.slug]);

  const leadViewFired = useRef(false);
  useEffect(() => {
    if (phase !== "lead" || leadViewFired.current) return;
    leadViewFired.current = true;
    gtag()?.("event", "lead_form_view", { funnel: "test", test: quiz.slug, nivel: result.tier });
  }, [phase, quiz.slug, result.tier]);

  const advance = useCallback(() => {
    if (selected == null) return;
    if (phase === "urgency") {
      setUrgencyIndex(selected);
      setSelected(null);
      setPhase("lead");
      return;
    }
    setAnswers((prev) => {
      const next = [...prev];
      next[index] = selected;
      return next;
    });
    setSelected(null);
    if (index + 1 < total) setIndex(index + 1);
    else setPhase("urgency");
  }, [selected, phase, index, total]);

  const back = useCallback(() => {
    firedFor.current = null;
    if (phase === "lead") {
      setSelected(urgencyIndex);
      setPhase("urgency");
    } else if (phase === "urgency") {
      setSelected(answers[total - 1] ?? null);
      setIndex(total - 1);
      setPhase("quiz");
    } else if (index > 0) {
      setSelected(answers[index - 1] ?? null);
      setIndex(index - 1);
    } else {
      setSelected(null);
      setPhase("intro");
    }
  }, [phase, index, total, answers, urgencyIndex]);

  const onLeadSuccess = useCallback(
    (submitted: string) => {
      setName(submitted || null);
      setPhase("result");
      gtag()?.("event", "test_result", {
        funnel: "test",
        test: quiz.slug,
        grade: result.grade,
        band: result.tier,
        urgenta: urgency,
        riscuri: result.risks.length,
      });
    },
    [quiz.slug, result.grade, result.tier, result.risks.length, urgency],
  );

  const leadFields = useMemo<Record<string, string>>(
    () => ({
      sursa: `test-${quiz.slug}`,
      test: quiz.slug,
      concern: quiz.hero.title,
      scor: result.grade.toFixed(1),
      nivel: result.tier,
      i5_urgenta: urgency,
      urgenta: quiz.urgency.options[urgencyIndex ?? 0]?.label ?? "",
      riscuri: result.risks.map((r) => r.title).join(" | "),
    }),
    [quiz, result, urgency, urgencyIndex],
  );

  const isQuestion = phase === "quiz" || phase === "urgency";
  const question = quiz.questions[index];
  const questionText = phase === "urgency" ? quiz.urgency.text : question?.text;
  const options = phase === "urgency" ? quiz.urgency.options.map((o) => o.label) : (question?.options.map((o) => o.label) ?? []);
  const pct = Math.round((step / steps) * 100);
  const progressLabel = ui.progress.replace("{n}", String(step)).replace("{total}", String(steps));

  return (
    <section className="bg-bg py-10 text-ink sm:py-16">
      <Container narrow className="min-h-[calc(100svh-12rem)]">
        <div ref={topRef}>
        {phase === "intro" && (
          <div className="mx-auto max-w-2xl py-6 text-center sm:py-12">
            <Eyebrow>{quiz.hero.eyebrow}</Eyebrow>
            <h1 tabIndex={-1} className="text-[2.6rem] leading-[1.05] outline-none sm:text-6xl">
              {quiz.hero.title}
            </h1>
            <p className="mt-6 font-display text-2xl leading-snug text-ink sm:text-3xl">{quiz.hero.subtitle}</p>
            <p className="mx-auto mt-6 max-w-xl text-lg text-ink-soft sm:text-xl">{quiz.hero.lead}</p>
            <button
              type="button"
              onClick={() => {
                setIndex(0);
                setPhase("quiz");
              }}
              className={buttonClass("cta", "lg", "mt-10 w-full sm:w-auto sm:min-w-80")}
            >
              {quiz.hero.startButton}
            </button>
            <p className="mx-auto mt-8 max-w-md text-sm text-ink-soft">{quiz.note}</p>
          </div>
        )}

        {isQuestion && questionText && (
          <div key={`${phase}-${index}`} className="mx-auto max-w-2xl">
            <p className="text-base font-semibold text-ink-soft">{quiz.hero.title}</p>
            <div className="mt-4">
              <div className="flex items-center justify-between text-sm font-bold uppercase tracking-[0.12em] text-ink-soft">
                <span>{progressLabel}</span>
                <span>{pct}%</span>
              </div>
              <div
                className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-line"
                role="progressbar"
                aria-label={progressLabel}
                aria-valuenow={step}
                aria-valuemin={1}
                aria-valuemax={steps}
              >
                <div className="h-full rounded-full bg-primary transition-all duration-500" style={{ width: `${pct}%` }} />
              </div>
            </div>

            <h1
              tabIndex={-1}
              className="mt-10 text-[2rem] leading-[1.15] outline-none sm:mt-14 sm:text-[2.75rem]"
            >
              {questionText}
            </h1>

            <div className="mt-8 space-y-3 sm:mt-10" role="group" aria-label={questionText}>
              {options.map((label, i) => {
                const active = selected === i;
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setSelected(i)}
                    aria-pressed={active}
                    className={`flex min-h-16 w-full items-center gap-4 rounded-[18px] border-2 px-5 py-4 text-left text-lg font-medium transition sm:text-xl ${
                      active ? "border-primary bg-primary/[0.06] text-ink" : "border-line bg-surface text-ink hover:border-primary/40"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`flex h-7 w-7 flex-none items-center justify-center rounded-full border-2 ${
                        active ? "border-primary" : "border-line"
                      }`}
                    >
                      {active && <span className="h-3.5 w-3.5 rounded-full bg-primary" />}
                    </span>
                    <span className="flex-1">{label}</span>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={advance}
              disabled={selected == null}
              className={buttonClass("cta", "lg", "mt-8 w-full")}
            >
              {phase === "urgency" ? ui.continue : ui.next}
            </button>
            <div className="mt-5 text-center">
              <button type="button" onClick={back} className={buttonClass("ghost", "md", "text-lg text-ink-soft")}>
                {ui.back}
              </button>
            </div>
            <p className="mt-10 text-sm text-ink-soft">{quiz.note}</p>
          </div>
        )}

        {phase === "lead" && (
          <div className="mx-auto max-w-xl">
            <p className="text-base font-semibold text-ink-soft">{quiz.hero.title}</p>
            <h1 tabIndex={-1} className="mt-4 text-[2.2rem] leading-[1.1] outline-none sm:text-5xl">
              {quiz.lead.title}
            </h1>
            <p className="mt-5 text-lg text-ink-soft sm:text-xl">{quiz.lead.text}</p>
            <div className="mt-10 rounded-[var(--radius)] border border-line bg-surface p-6 text-ink sm:p-8">
              <QuizLeadForm
                form={`test-${quiz.slug}`}
                fields={leadFields}
                submitLabel={quiz.lead.submit}
                calculatingMessage={ui.calculating}
                ui={ui}
                onSuccess={onLeadSuccess}
              />
            </div>
            <div className="mt-6 text-center">
              <button type="button" onClick={back} className={buttonClass("ghost", "md", "text-lg text-ink-soft")}>
                {ui.backToLast}
              </button>
            </div>
          </div>
        )}

        {phase === "result" && (
          <QuizResult quiz={quiz} result={result} urgency={urgency} ui={ui} />
        )}
        </div>
      </Container>
    </section>
  );
}
