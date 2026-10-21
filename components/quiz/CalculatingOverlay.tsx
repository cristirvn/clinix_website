"use client";

import { useEffect } from "react";

/**
 * Full-screen "Calculăm răspunsurile tale…" moment between a successful lead
 * submit and the result. Held a random 5–10 s (client spec) by the caller.
 */
export function calcDelayMs(): number {
  return 5000 + Math.floor(Math.random() * 5000);
}

export function CalculatingOverlay({ message }: { message: string }) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center bg-dark/80 px-5 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-live="polite"
    >
      <div className="flex w-full max-w-md flex-col items-center gap-6 rounded-[var(--radius)] bg-surface px-8 py-12 text-center text-ink shadow-2xl">
        <span className="h-14 w-14 animate-spin rounded-full border-4 border-line border-t-accent" aria-hidden="true" />
        <p className="font-display text-2xl leading-snug">{message}</p>
      </div>
    </div>
  );
}
