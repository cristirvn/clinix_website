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
 * Section 4 — the self-check starts right here: question 1 of the triage
 * ("Cu ce te confrunți cel mai des?") as a real quiz card. The answer opens
 * the matching test at its first question.
 */
export function HomeQuiz({ quiz, locale }: { quiz: HomeContent["quiz"]; locale: Locale }) {
  const triage = getTriage(locale);
  return (
    <section id="diagnostic" className="scroll-mt-24 bg-bg-alt py-20 text-ink sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-[calc(var(--header-h)+3rem)]">
              <Eyebrow index="02">{quiz.eyebrow}</Eyebrow>
              <h2 className="text-[2.4rem] leading-[1.05] sm:text-[3.4rem] lg:text-[3.8rem]">
                <Emph text={quiz.title} />
              </h2>
              <p className="mt-6 max-w-md text-lg text-ink-soft sm:text-xl">{quiz.lead}</p>
              <p className="mt-10 hidden border-t border-line pt-6 text-ink-soft lg:block">
                {triage.direct.text}{" "}
                <L href={triage.direct.href} className="inline-flex items-center gap-1.5 font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary">
                  {triage.direct.button.replace(/\s*→\s*$/, "")}
                  <ArrowIcon size={15} />
                </L>
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <QuizStart
                question={triage.question}
                help={triage.help}
                options={triage.options}
                step={quiz.step}
                next={quiz.next}
                pickFirst={quiz.pickFirst}
              />
            </Reveal>
            <p className="mt-8 text-center text-ink-soft lg:hidden">
              {triage.direct.text}{" "}
              <L href={triage.direct.href} className="font-semibold text-primary underline underline-offset-4">
                {triage.direct.button}
              </L>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
