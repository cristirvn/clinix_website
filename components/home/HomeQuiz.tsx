import { Container, Eyebrow } from "@/components/ui/primitives";
import { L } from "@/components/ui/L";
import { Reveal } from "@/components/ui/Reveal";
import { Emph } from "@/components/ui/Emph";
import { ArrowIcon } from "@/components/ui/icons";
import { QuizStart } from "@/components/home/QuizStart";
import { getTriage } from "@/content/quizzes";
import type { HomeContent } from "@/content/pages/home";
import type { Locale } from "@/lib/i18n";

/**
 * Section 5 — the self-check starts right here: question 1 of the triage
 * ("Cu ce te confrunți cel mai des?"). Heading left (like every section),
 * the quiz card right on large screens. The answer opens the matching test
 * at its next question.
 */
export function HomeQuiz({ quiz, locale }: { quiz: HomeContent["quiz"]; locale: Locale }) {
  const triage = getTriage(locale);
  return (
    <section id="diagnostic" className="relative isolate scroll-mt-24 overflow-hidden bg-bg py-24 text-ink sm:py-32">
      <div aria-hidden="true" className="dot-grid absolute inset-x-0 bottom-0 -z-10 h-[30rem]" />
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4 lg:pt-4">
            <Eyebrow>{quiz.eyebrow}</Eyebrow>
            <h2 className="t-h2">
              <Emph text={quiz.title} />
            </h2>
            <p className="t-lead mt-5 max-w-xl text-ink-soft">{quiz.lead}</p>

            <p className="mt-8 hidden max-w-sm border-t border-line pt-6 text-ink-soft lg:block">
              {triage.direct.text}{" "}
              <L href={triage.direct.href} className="link-draw inline-flex min-h-11 items-center gap-1.5 font-semibold text-primary">
                {triage.direct.button.replace(/\s*→\s*$/, "")}
                <ArrowIcon size={15} />
              </L>
            </p>
          </div>

          <Reveal className="relative min-w-0 lg:col-span-8">
            {/* Soft palette light under the card. */}
            <div aria-hidden="true" className="absolute inset-x-[8%] -bottom-6 top-[12%] -z-10 rounded-full bg-[rgb(var(--glow-a)/0.22)] blur-3xl" />
            <QuizStart question={triage.question} help={triage.help} options={triage.options} step={quiz.step} next={quiz.next} pickFirst={quiz.pickFirst} />
          </Reveal>
        </div>

        <p className="mt-8 max-w-xl text-ink-soft lg:hidden">
          {triage.direct.text}{" "}
          <L href={triage.direct.href} className="link-draw inline-flex min-h-11 items-center gap-1.5 font-semibold text-primary">
            {triage.direct.button.replace(/\s*→\s*$/, "")}
            <ArrowIcon size={15} />
          </L>
        </p>
      </Container>
    </section>
  );
}
