import type { Metadata } from "next";
import { getTriage } from "@/content/quizzes";
import { alternatesFor, type Locale } from "@/lib/i18n";
import { ButtonLink, Container, Eyebrow } from "@/components/ui/primitives";
import { TriageOptions } from "@/components/quiz/TriageOptions";

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale };
  const triage = getTriage(locale);
  return {
    title: triage.seo.title,
    description: triage.seo.description,
    alternates: alternatesFor("/evaluare", locale),
  };
}

/** The short diagnostic: one question, nine answers, each opens the matching test. Static, no client JS. */
export default async function EvaluarePage({ params }: { params: Params }) {
  const { locale } = (await params) as { locale: Locale };
  const triage = getTriage(locale);

  return (
    <section className="bg-bg py-16 text-ink sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>{triage.eyebrow}</Eyebrow>
          <h1 className="text-[2.6rem] leading-[1.05] sm:text-6xl">{triage.question}</h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ink-soft sm:text-xl">{triage.help}</p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl sm:mt-16">
          <TriageOptions locale={locale} />
        </div>

        <div className="mx-auto mt-16 max-w-2xl border-t border-line pt-12 text-center">
          <p className="font-display text-2xl sm:text-3xl">{triage.direct.text}</p>
          <ButtonLink href={triage.direct.href} variant="outline" size="lg" className="mt-6 w-full sm:w-auto">
            {triage.direct.button}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
