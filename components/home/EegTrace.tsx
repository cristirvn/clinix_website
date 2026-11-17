/**
 * The visual signature: one calm EEG trace — a quiet baseline, a short burst
 * of activity, quiet again. Drawn in the theme accent; decorative only.
 * `draw` lets it write itself once (respects reduced motion, see globals.css).
 */
const TRACE =
  "M0 48h120c8 0 10-6 14-6s6 10 10 10 6-14 10-14 6 18 11 18 5-30 10-30 6 44 11 44 5-36 10-36 6 22 10 22 5-10 9-10 5 2 9 2h40c6 0 8-8 12-8s6 14 10 14 6-24 10-24 6 30 10 30 5-12 9-12 4 0 8 0h150c7 0 9-4 13-4s5 4 9 4h265";

export function EegTrace({
  className = "",
  draw = false,
  strokeWidth = 1.6,
}: {
  className?: string;
  draw?: boolean;
  strokeWidth?: number;
}) {
  return (
    <svg className={`block w-full ${className}`} viewBox="0 0 760 96" fill="none" aria-hidden="true">
      <path
        d={TRACE}
        pathLength={1}
        stroke="var(--accent)"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={draw ? "trace-draw" : undefined}
      />
    </svg>
  );
}

/**
 * The same trace, live: it runs by endlessly like a monitor (two copies side
 * by side slide by half), with a soft glow under the line and both ends
 * fading out. Decorative; still under reduced motion.
 */
export function EegLive({
  className = "",
  strokeWidth = 1.6,
  speed = 14,
}: {
  className?: string;
  strokeWidth?: number;
  /** Seconds per full pass. */
  speed?: number;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_18%,#000_82%,transparent)] ${className}`}
    >
      <svg className="eeg-scroll block h-full w-[200%]" viewBox="0 0 1520 96" preserveAspectRatio="none" fill="none" style={{ animationDuration: `${speed}s` }}>
        {[0, 760].map((x) => (
          <g key={x} transform={`translate(${x} 0)`}>
            <path d={TRACE} stroke="var(--accent)" strokeOpacity={0.22} strokeWidth={strokeWidth * 5} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
            <path d={TRACE} stroke="var(--accent)" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
          </g>
        ))}
      </svg>
    </div>
  );
}
