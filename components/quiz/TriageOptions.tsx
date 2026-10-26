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
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {triage.options.map((option, i) => (
        <li key={option.slug}>
          <L
            href={`/chestionare/${option.slug}`}
            className="group flex h-full flex-col justify-between gap-5 rounded-[var(--radius)] border-t-4 border-primary bg-surface p-6 text-left text-ink shadow-[var(--shadow-card)] ring-1 ring-line transition duration-300 hover:-translate-y-1 hover:ring-primary sm:min-h-[10rem] sm:p-7"
          >
            <span className="font-display text-2xl font-bold leading-none text-primary">{String(i + 1).padStart(2, "0")}</span>
            <span className="flex items-end justify-between gap-4">
              <span className="text-lg font-semibold leading-snug sm:text-xl">{option.label}</span>
              <span
                aria-hidden="true"
                className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-primary/35 text-primary transition duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-on-primary"
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
