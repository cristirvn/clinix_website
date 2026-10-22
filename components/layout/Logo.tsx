/**
 * Emmanuel CliniX mark — redrawn for the new site. Keeps the idea of the
 * original logo (an X that a signal line enters from the left) but as a calm
 * monoline "neural node": four strokes leaving a centre point. Colours follow
 * the active theme (`currentColor` + `--accent`).
 */
export function LogoMark({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <g stroke="currentColor" strokeWidth="4.2" strokeLinecap="round">
        <path d="M19 19 9.5 9.5M29 19l9.5-9.5M29 29l9.5 9.5M19 29l-9.5 9.5" />
      </g>
      <path d="M2.5 24H15" stroke="var(--lime)" strokeWidth="4.2" strokeLinecap="round" />
      <circle cx="24" cy="24" r="3.4" fill="var(--lime)" />
    </svg>
  );
}

export function Logo({
  tagline = true,
  className = "",
}: {
  tagline?: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <LogoMark size={34} className="flex-none" />
      <span className="flex flex-col leading-none">
        {/* Phones: two stacked lines so the header fits 320px; one line from sm up. */}
        <span className="font-display text-[0.86rem] font-semibold uppercase leading-[1.15] tracking-[0.14em] sm:whitespace-nowrap sm:text-[1.05rem] sm:leading-none sm:tracking-[0.16em]">
          <span className="block sm:inline">Emmanuel</span> <span className="block sm:inline">CliniX</span>
        </span>
        {tagline && (
          <span className="mt-1.5 hidden whitespace-nowrap text-[0.62rem] font-medium uppercase tracking-[0.28em] opacity-70 sm:block">
            Longevity · Wellness · Neuro
          </span>
        )}
      </span>
    </span>
  );
}
