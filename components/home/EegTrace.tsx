/** The visual signature: a calm EEG trace drawn in the theme accent. Decorative only. */
export function EegTrace({ className = "" }: { className?: string }) {
  return (
    <svg className={`w-full ${className}`} viewBox="0 0 960 90" fill="none" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 62h960" stroke="var(--line)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      <path
        d="M0 62h52l12-22 12 34 12-44 12 32h52l12-12 12 18 12-24 12 18h68l12-36 12 52 12-42 12 26h76l12-14 12 22 12-28 12 20h72l12-28 12 38 12-44 12 34h76l12-10 12 14 12-20 12 16h68l12-30 12 44 12-38 12 24h160"
        stroke="var(--accent)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
