import type { LpSomnBContent } from "@/content/lp-somn-b";

/**
 * 3-step progress indicator for the /lp/somn-b funnel
 * (Studiu de caz → Aplicație → Confirmare). Shown on steps 2 and 3, as in the old build.
 */
export function FunnelProgress({ step, progress }: { step: 2 | 3; progress: LpSomnBContent["progress"] }) {
  return (
    <div className="border-b border-line bg-surface text-ink">
      <div className="mx-auto max-w-3xl px-5 py-5 sm:px-8">
        <p className="mb-3 text-center text-sm font-semibold text-accent">
          {progress.stepOf.replace("{n}", String(step))}
        </p>
        <ol aria-label={progress.aria} className="flex items-center">
          {progress.labels.map((label, i) => {
            const n = i + 1;
            const done = n < step;
            const active = n === step;
            return (
              <li key={label} className={`flex items-center ${n < 3 ? "flex-1" : ""}`} aria-current={active ? "step" : undefined}>
                <div className="flex flex-col items-center gap-2 sm:flex-row">
                  <span
                    aria-hidden="true"
                    className={`flex h-9 w-9 flex-none items-center justify-center rounded-full text-base font-bold ${
                      done
                        ? "bg-accent text-on-accent"
                        : active
                          ? "bg-cta text-on-cta ring-4 ring-cta/20"
                          : "border-2 border-line text-ink-soft"
                    }`}
                  >
                    {done ? "✓" : n}
                  </span>
                  <span className={`text-center text-[0.875rem] leading-tight min-[400px]:text-sm sm:whitespace-nowrap sm:text-base ${active ? "font-bold text-ink" : "text-ink-soft"}`}>
                    {label}
                  </span>
                </div>
                {n < 3 && (
                  <span
                    aria-hidden="true"
                    className={`mx-3 mb-7 h-0.5 flex-1 sm:mb-0 ${done ? "bg-accent" : "bg-line"}`}
                  />
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
