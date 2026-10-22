import { L } from "@/components/ui/L";
import { getTriage } from "@/content/quizzes";
import type { Locale } from "@/lib/i18n";

/**
 * The short diagnostic: "Cu ce te confrunți cel mai des?" — nine answers, each
 * one opens the matching test (which then leads to the matching LP).
 * Used on the home page (section 2) and on /evaluare.
 */
export function TriageOptions({ locale }: { locale: Locale }) {
  const triage = getTriage(locale);
  return (
    <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
      {triage.options.map((option, i) => (
        <li key={option.slug}>
          <L
            href={`/chestionare/${option.slug}`}
            className="group flex h-full flex-col justify-between gap-3 rounded-[var(--radius)] border border-line bg-surface p-5 sm:min-h-[8.5rem] sm:gap-6 sm:p-6 text-left text-ink transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_24px_50px_-30px_rgba(15,27,38,0.45)]"
          >
            <span className="font-display text-sm text-ink-soft">{String(i + 1).padStart(2, "0")}</span>
            <span className="flex items-end justify-between gap-4">
              <span className="text-lg font-medium leading-snug sm:text-xl">{option.label}</span>
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
