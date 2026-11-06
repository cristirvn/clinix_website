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
 * Section 3 — the self-check starts right here: question 1 of the triage
 * ("Cu ce te confrunți cel mai des?") as one centred quiz card. The answer
 * opens the matching test at its next question.
 */
export function HomeQuiz({ quiz, locale }: { quiz: HomeContent["quiz"]; locale: Locale }) {
  const triage = getTriage(locale);
  return (
    <section id="diagnostic" className="scroll-mt-24 bg-bg-alt py-24 text-ink sm:py-32">
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <Eyebrow>{quiz.eyebrow}</Eyebrow>
          <h2 className="text-[2.4rem] leading-[1.04] sm:text-[3.4rem] lg:text-[4rem]">
            <Emph text={quiz.title} />
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ink-soft sm:text-xl">{quiz.lead}</p>
        </div>

        <Reveal className="mx-auto max-w-4xl">
          <QuizStart
            question={triage.question}
            help={triage.help}
            options={triage.options}
            step={quiz.step}
            next={quiz.next}
            pickFirst={quiz.pickFirst}
          />
        </Reveal>

        <p className="mx-auto mt-8 max-w-xl text-center text-ink-soft">
          {triage.direct.text}{" "}
          <L
            href={triage.direct.href}
            className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
          >
            {triage.direct.button.replace(/\s*→\s*$/, "")}
            <ArrowIcon size={15} />
          </L>
        </p>
      </Container>
    </section>
  );
}
