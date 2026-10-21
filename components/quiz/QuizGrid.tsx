import { L } from "@/components/ui/L";
import { getQuizCards, questionCount } from "@/content/quizzes";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";

/** The nine free tests as cards. Used on the home page (section 3) and on /chestionare. */
export function QuizGrid({ locale, limit }: { locale: Locale; limit?: number }) {
  const cards = getQuizCards(locale).slice(0, limit);
  const { common } = getDictionary(locale);
  const q = common.questions;
  const min = "2–3 min";
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <li key={card.slug}>
          <L
            href={`/chestionare/${card.slug}`}
            className="group flex h-full flex-col rounded-[var(--radius)] border border-line bg-surface p-7 text-ink transition hover:-translate-y-1 hover:border-accent hover:shadow-[0_24px_50px_-30px_rgba(0,0,0,0.4)]"
          >
            <span className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-accent">
              {questionCount(locale, card.slug)} {q} · {min}
            </span>
            <span className="font-display text-2xl">{card.title}</span>
            <span className="mt-3 flex-1 text-ink-soft">{card.description}</span>
            <span className="mt-6 font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4 group-hover:decoration-ink">
              {common.takeTest}
            </span>
          </L>
        </li>
      ))}
    </ul>
  );
}
