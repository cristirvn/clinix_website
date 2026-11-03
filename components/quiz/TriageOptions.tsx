import { L } from "@/components/ui/L";
import { ArrowIcon } from "@/components/ui/icons";
import { getTriage } from "@/content/quizzes";
import type { Locale } from "@/lib/i18n";

/**
 * The short diagnostic: "Cu ce te confrunți cel mai des?" — nine answers, each
 * one opens the matching test (which then leads to the matching LP).
 * Used on /evaluare (the home page shows the same question as a quiz card, components/home/QuizStart).
 */
export function TriageOptions({ locale }: { locale: Locale }) {
  const triage = getTriage(locale);
  return (
    // One calm list of big rows (the same look as the quiz card on the home page); two columns from md up.
    <ul className="grid gap-2.5 md:grid-cols-2 md:gap-3">
      {triage.options.map((option) => (
        <li key={option.slug}>
          <L
            href={`/chestionare/${option.slug}`}
            className="group flex h-full min-h-16 items-center justify-between gap-4 rounded-[18px] border border-line bg-surface px-5 py-4 text-ink transition duration-200 hover:border-primary/50 hover:shadow-[var(--shadow-card)]"
          >
            <span className="text-[1.05rem] font-medium leading-snug">{option.label}</span>
            <span
              aria-hidden="true"
              className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-primary/30 text-primary transition duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-on-primary"
            >
              <ArrowIcon size={16} />
            </span>
          </L>
        </li>
      ))}
    </ul>
  );
}
