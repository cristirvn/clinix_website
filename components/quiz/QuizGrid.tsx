import { L } from "@/components/ui/L";
import { getQuizCards, questionCount } from "@/content/quizzes";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";

/** The nine free tests as cards. Used on the home page (section 3) and on /chestionare. */
export function QuizGrid({ locale, limit, twoCol = false }: { locale: Locale; limit?: number; twoCol?: boolean }) {
  const cards = getQuizCards(locale).slice(0, limit);
  const { common } = getDictionary(locale);
  const q = common.questions;
  const min = "2–3 min";
  return (
    <ul className={`grid gap-4 sm:grid-cols-2 ${twoCol ? "" : "lg:grid-cols-3"}`}>
      {cards.map((card) => (
        <li key={card.slug}>
          <L
            href={`/chestionare/${card.slug}`}
            className="group flex h-full flex-col rounded-[var(--radius)] border border-line bg-surface p-7 text-ink transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_24px_50px_-30px_rgba(15,27,38,0.45)] sm:p-8"
          >
            <span className="mb-8 inline-flex w-fit items-center gap-2 rounded-full bg-bg px-3 py-1 text-sm text-ink-soft">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
              {questionCount(locale, card.slug)} {q} · {min}
            </span>
            <span className="font-display text-2xl leading-tight sm:text-[1.7rem]">{card.title}</span>
            <span className="mt-3 flex-1 text-ink-soft">{card.description}</span>
            <span className="mt-8 flex items-center justify-between border-t border-line pt-5 font-medium">
              {common.takeTest.replace(" →", "")}
              <span
                aria-hidden="true"
                className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-line transition duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-on-primary"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 11 11 3M4.5 3H11v6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </span>
            </span>
          </L>
        </li>
      ))}
    </ul>
  );
}
