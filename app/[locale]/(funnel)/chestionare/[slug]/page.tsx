import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { QUIZ_SLUGS, getScoredQuiz } from "@/content/quizzes";
import { LOCALES, alternatesFor, isLocale, type Locale } from "@/lib/i18n";
import { ScoredQuiz } from "@/components/quiz/ScoredQuiz";
import { FunnelFooter } from "@/components/layout/FunnelChrome";

/** A scored self-test — minimal funnel chrome so nothing competes with finishing it. */
export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => QUIZ_SLUGS.map((slug) => ({ locale, slug })));
}

type Params = Promise<{ locale: string; slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const quiz = getScoredQuiz(locale, slug);
  if (!quiz) return {};
  return {
    title: quiz.seo.title,
    description: quiz.seo.description,
    alternates: alternatesFor(`/chestionare/${slug}`, locale),
  };
}

export default async function ScoredQuizPage({ params }: { params: Params }) {
  const { locale, slug } = (await params) as { locale: Locale; slug: string };
  const quiz = getScoredQuiz(locale, slug);
  if (!quiz) notFound();
  return (
    <>
      <ScoredQuiz quiz={quiz} />
      <FunnelFooter locale={locale} />
    </>
  );
}
