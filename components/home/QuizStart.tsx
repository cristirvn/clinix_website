"use client";

import { useId, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { TickIcon, buttonClass } from "@/components/ui/primitives";
import { ArrowIcon } from "@/components/ui/icons";
import { useLocale } from "@/components/layout/LocaleProvider";
import { localizePath } from "@/lib/i18n";

/**
 * Question 1 as a quiz card: big selectable rows (native radios, so arrow
 * keys and screen readers just work) and one "next" button. The chosen
 * answer opens `/chestionare/<slug>?start=1`, which skips the test's intro
 * and continues with its questions.
 */
export function QuizStart({
  question,
  help,
  options,
  step,
  next,
  pickFirst,
}: {
  question: string;
  help: string;
  options: Array<{ label: string; slug: string }>;
  step: string;
  next: string;
  pickFirst: string;
}) {
  const { locale } = useLocale();
  const router = useRouter();
  const id = useId();
  const [choice, setChoice] = useState<string | null>(null);
  const [nudge, setNudge] = useState(false);
  const [leaving, setLeaving] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!choice) {
      setNudge(true);
      return;
    }
    setLeaving(true);
    router.push(localizePath(`/chestionare/${choice}?start=1`, locale));
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[var(--radius-media)] border border-line bg-surface p-5 text-ink sm:p-10"
      aria-describedby={`${id}-help`}
    >
      <div className="flex items-center gap-4">
        <span className="label tabular-nums text-accent">{step}</span>
        <span aria-hidden="true" className="h-[3px] flex-1 overflow-hidden rounded-full bg-bg-alt">
          <span className="block h-full w-[12%] rounded-full bg-primary" />
        </span>
      </div>

      <fieldset className="mt-6">
        <legend className="font-display text-[1.75rem] leading-[1.12] sm:text-[2.2rem]">{question}</legend>
        <p id={`${id}-help`} className="mt-3 text-ink-soft">
          {help}
        </p>

        <div className="mt-7 grid gap-2.5 md:grid-cols-2 md:gap-3">
          {options.map((o) => {
            const checked = choice === o.slug;
            return (
              <label
                key={o.slug}
                className={`group flex min-h-14 cursor-pointer items-center gap-4 rounded-[var(--radius)] border px-4 py-3 transition-colors duration-200 has-[:focus-visible]:outline has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent sm:px-5 ${
                  checked ? "border-primary bg-primary/[0.05] ring-1 ring-primary" : "border-line hover:border-ink/40"
                }`}
              >
                <input
                  type="radio"
                  name={`${id}-answer`}
                  value={o.slug}
                  checked={checked}
                  onChange={() => {
                    setChoice(o.slug);
                    setNudge(false);
                  }}
                  className="sr-only"
                />
                <span
                  aria-hidden="true"
                  className={`flex h-6 w-6 flex-none items-center justify-center rounded-full border-[1.5px] transition-colors duration-200 ${
                    checked ? "border-primary bg-primary text-on-primary" : "border-ink/25 text-transparent group-hover:border-ink/50"
                  }`}
                >
                  <TickIcon className={`transition-transform duration-200 ${checked ? "scale-100" : "scale-50"}`} />
                </span>
                <span className="text-[1.05rem] font-medium leading-snug">{o.label}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p role="status" className={`text-[0.95rem] ${nudge ? "font-semibold text-danger" : "text-ink-soft"}`}>
          {nudge ? pickFirst : ""}
        </p>
        <button type="submit" disabled={leaving} className={buttonClass("cta", "lg", "w-full sm:w-auto")}>
          {next}
          <ArrowIcon />
        </button>
      </div>
    </form>
  );
}
