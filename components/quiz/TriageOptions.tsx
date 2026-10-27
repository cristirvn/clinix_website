import { L } from "@/components/ui/L";
import { getTriage } from "@/content/quizzes";
import type { Locale } from "@/lib/i18n";

/**
 * The short diagnostic: "Cu ce te confrunți cel mai des?" — nine answers, each
 * one opens the matching test (which then leads to the matching LP).
 * Used on the home page (section 2, first `limit` answers only) and on /evaluare (all).
 */
export function TriageOptions({ locale, limit }: { locale: Locale; limit?: number }) {
  const triage = getTriage(locale);
  const options = limit ? triage.options.slice(0, limit) : triage.options;
  return (
    // One calm list: phones get stacked rows with hairlines, wider screens a 2–3 column grid of slim rows.
    <ul className="divide-y divide-line overflow-hidden rounded-[var(--radius)] border border-line bg-surface shadow-[var(--shadow-card)] sm:grid sm:grid-cols-2 sm:gap-3 sm:divide-y-0 sm:overflow-visible sm:border-0 sm:bg-transparent sm:shadow-none lg:grid-cols-3">
      {options.map((option) => (
        <li key={option.slug}>
          <L
            href={`/chestionare/${option.slug}`}
            className="group flex h-full items-center justify-between gap-4 px-5 py-4 text-ink transition hover:bg-bg-alt sm:rounded-[calc(var(--radius)/1.5)] sm:border sm:border-line sm:bg-surface sm:px-5 sm:py-4 sm:hover:border-primary sm:hover:bg-surface"
          >
            <span className="text-[1.05rem] font-semibold leading-snug">{option.label}</span>
            <span aria-hidden="true" className="flex-none text-xl text-primary transition group-hover:translate-x-0.5">
              →
            </span>
          </L>
        </li>
      ))}
    </ul>
  );
}
