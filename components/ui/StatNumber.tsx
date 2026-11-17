"use client";

import { useEffect, useRef, useState } from "react";
import NumberFlow from "@number-flow/react";
import type { Locale } from "@/lib/i18n";

/**
 * A stat like "30 min" or "1 plan" whose number rolls up (NumberFlow) the
 * first time it scrolls into view. The real value is what the server sends,
 * so no JS / reduced motion simply shows it; words without a number
 * ("Lunar", "Monthly") render as they are.
 */
export function StatNumber({ value, locale, delay = 0 }: { value: string; locale: Locale; delay?: number }) {
  const match = /^(\d+(?:[.,]\d+)?)(.*)$/.exec(value.trim());
  const target = match ? Number(match[1].replace(",", ".")) : 0;
  const decimals = match && /[.,]/.test(match[1]) ? match[1].split(/[.,]/)[1].length : 0;
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(target);

  useEffect(() => {
    const el = ref.current;
    if (!el || !match) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer = 0;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- start from zero, then roll up once seen
    setShown(0);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        // On a first visit the page-load curtain is still up: start after it lifts.
        const curtain = document.querySelector(".site-loader:not(.is-done)") ? Math.max(0, 1400 - performance.now()) : 0;
        timer = window.setTimeout(() => setShown(target), delay + curtain);
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, delay]);

  if (!match) return <span>{value}</span>;
  return (
    <span ref={ref} className="inline-flex items-baseline">
      <span className="sr-only">{value}</span>
      <span aria-hidden="true" className="inline-flex items-baseline">
        <NumberFlow
          value={shown}
          locales={locale === "ro" ? "ro-RO" : "en-GB"}
          format={{ minimumFractionDigits: decimals, maximumFractionDigits: decimals }}
          transformTiming={{ duration: 1100, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }}
          spinTiming={{ duration: 1400, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }}
          className="tabular-nums"
        />
        {match[2] && <span className="ml-[0.18em] text-[0.62em] font-semibold tracking-normal opacity-80">{match[2].trim()}</span>}
      </span>
    </span>
  );
}
