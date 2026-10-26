import { L } from "@/components/ui/L";
import { getQuizCards, questionCount } from "@/content/quizzes";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";

/**
 * The nine free tests as cards. Used on /chestionare (the home page lists the same tests via TriageOptions).
 * `compact`: on phones show only the title + length (the description and footer row come back from sm up).
 */
export function QuizGrid({
  locale,
  limit,
  twoCol = false,
  compact = false,
}: {
  locale: Locale;
  limit?: number;
  twoCol?: boolean;
  compact?: boolean;
}) {
  const cards = getQuizCards(locale).slice(0, limit);
  const { common } = getDictionary(locale);
  const q = common.questions;
  const min = "2–3 min";
  const full = compact ? "hidden sm:flex" : "flex";
  const arrow = (
    <span
      aria-hidden="true"
      className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-primary/35 text-primary transition duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-on-primary"
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M3 11 11 3M4.5 3H11v6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </span>
  );
  return (
    <ul className={`grid sm:grid-cols-2 sm:gap-4 ${compact ? "gap-3" : "gap-4"} ${twoCol ? "" : "lg:grid-cols-3"}`}>
      {cards.map((card) => (
        <li key={card.slug}>
          <L
            href={`/chestionare/${card.slug}`}
            className={`group flex h-full flex-col rounded-[var(--radius)] border-t-4 border-primary bg-surface text-ink shadow-[var(--shadow-card)] ring-1 ring-line transition duration-300 hover:-translate-y-1 hover:ring-primary sm:p-8 ${compact ? "p-6" : "p-7"}`}
          >
            <span className={`inline-flex w-fit ${compact ? "mb-4 sm:mb-8" : "mb-8"} items-center gap-2 rounded-full bg-bg-alt px-3 py-1 text-sm font-medium text-ink-soft`}>
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
              {questionCount(locale, card.slug)} {q} · {min}
            </span>
            <span className="flex items-center justify-between gap-4">
              <span className="font-display text-[1.9rem] font-bold leading-tight sm:text-[2.1rem]">{card.title}</span>
              {compact && <span className="sm:hidden">{arrow}</span>}
            </span>
            <span className={`mt-3 flex-1 text-ink-soft ${compact ? "hidden sm:block" : ""}`}>{card.description}</span>
            <span className={`mt-8 items-center justify-between border-t border-line pt-5 font-semibold ${full}`}>
              {common.takeTest.replace(" →", "")}
              {arrow}
            </span>
          </L>
        </li>
      ))}
    </ul>
  );
}
