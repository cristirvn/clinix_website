/**
 * NeuroFit's own small brand kit: the clinic's X mark redrawn in gold, the
 * "NeuroFit / by Emmanuel CliniX" wordmark, and a headline whose `*marked*`
 * part is lit in gold. Used inside `.theme-neurofit` (app/globals.css).
 */
import { useId } from "react";

export function NeuroFitMark({ size = 22, className = "" }: { size?: number; className?: string }) {
  // One gradient id per mark: with a shared id, a copy inside a hidden menu (display: none) left the visible one blank.
  const gradientId = `nf-mark-gold-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  return (
    <svg width={size} height={size} viewBox="0 0 430 431" fill="none" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f1dfb8" />
          <stop offset="0.6" stopColor="#d4b073" />
          <stop offset="1" stopColor="#b8935a" />
        </linearGradient>
      </defs>
      <g stroke={`url(#${gradientId})`} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.5 21 218.5 215.5 20.5 410.5" strokeWidth="39" />
        <path d="M409.5 21.5 253.5 176.5" strokeWidth="39" />
        <path d="M253.5 254.5 409.5 409.5" strokeWidth="39" />
        <path d="M18.5 210H146.5" strokeWidth="21" />
      </g>
    </svg>
  );
}

export function NeuroFitWordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <NeuroFitMark size={26} />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.3rem] font-semibold tracking-[-0.01em] text-ink">NeuroFit</span>
        <span className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-ink-soft max-[420px]:tracking-[0.1em]">by Emmanuel CliniX</span>
      </span>
    </span>
  );
}

/** "Plain part. *Gold part.*" → the marked part in brushed gold, on its own line from the tablet up. */
export function GoldTitle({ text }: { text: string }) {
  const parts = text.split(/\*([^*]+)\*/);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 ? (
          <span key={i} className="nf-gold sm:block">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}
