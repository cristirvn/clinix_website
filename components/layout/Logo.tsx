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
      <path d="M2.5 24H15" stroke="var(--accent)" strokeWidth="4.2" strokeLinecap="round" />
      <circle cx="24" cy="24" r="3.4" fill="var(--accent)" />
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
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark size={36} />
      <span className="flex flex-col leading-none">
        <span className="whitespace-nowrap font-display text-[0.92rem] font-semibold uppercase tracking-[0.14em] sm:text-[1.05rem] sm:tracking-[0.16em]">
          Emmanuel CliniX
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
