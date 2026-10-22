import type { Metadata } from "next";
import { getQuizHub } from "@/content/quizzes";
import { alternatesFor, type Locale } from "@/lib/i18n";
import { ButtonLink, Eyebrow, Section, HeroPanel } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { QuizGrid } from "@/components/quiz/QuizGrid";

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale };
  const hub = getQuizHub(locale);
  return {
    title: hub.seo.title,
    description: hub.seo.description,
    alternates: alternatesFor("/chestionare", locale),
  };
}

/** The tests hub: hero → three promise facts → nine cards → "not sure?" → /evaluare. */
export default async function ChestionarePage({ params }: { params: Params }) {
  const { locale } = (await params) as { locale: Locale };
  const hub = getQuizHub(locale);

  return (
    <>
      <HeroPanel>
          <div className="max-w-3xl">
            <Eyebrow>{hub.hero.eyebrow}</Eyebrow>
            <h1 className="text-[2.6rem] font-normal leading-[1.04] sm:text-6xl lg:text-[4.6rem]">{hub.hero.title}</h1>
            <p className="mt-6 text-lg text-on-dark-soft sm:text-xl">{hub.hero.subtitle}</p>
          </div>
          <ul className="mt-14 grid gap-8 border-t border-line pt-10 sm:grid-cols-3">
            {hub.promise.map((p) => (
              <li key={p.label}>
                <p className="font-display text-2xl">{p.label}</p>
                <p className="mt-2 text-on-dark-soft">{p.text}</p>
              </li>
            ))}
          </ul>
      </HeroPanel>

      <Section tone="alt" className="!pt-14 sm:!pt-20">
        <QuizGrid locale={locale} />
      </Section>

      <Section tone="dark">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-[2.1rem] sm:text-5xl">{hub.general.title}</h2>
          <p className="mt-5 text-lg text-on-dark-soft sm:text-xl">{hub.general.text}</p>
          <ButtonLink href="/evaluare" variant="light" size="lg" className="mt-9 w-full sm:w-auto">
            {hub.general.button}
          </ButtonLink>
        </Reveal>
      </Section>
    </>
  );
}
