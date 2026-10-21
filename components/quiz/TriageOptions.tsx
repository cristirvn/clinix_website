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
    <ul className="grid gap-3 sm:grid-cols-2">
      {triage.options.map((option, i) => (
        <li key={option.slug}>
          <L
            href={`/chestionare/${option.slug}`}
            className="group flex h-full items-center gap-4 rounded-[var(--radius)] border-2 border-line bg-surface px-5 py-4 text-left text-lg font-medium text-ink transition hover:-translate-y-0.5 hover:border-accent"
          >
            <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-bg-alt font-display text-base text-accent">
              {i + 1}
            </span>
            <span className="flex-1">{option.label}</span>
            <span aria-hidden="true" className="text-accent transition group-hover:translate-x-1">
              →
            </span>
          </L>
        </li>
      ))}
    </ul>
  );
}
