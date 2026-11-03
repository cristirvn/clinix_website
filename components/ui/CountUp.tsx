"use client";

import { useEffect, useRef } from "react";
import type { Locale } from "@/lib/i18n";

/**
 * A number that counts up once when it comes into view. The final value is in
 * the server HTML (no JS / reduced motion = the real number, no flicker), and
 * only the text node is animated — no re-renders.
 */
export function CountUp({
  value,
  decimals = 0,
  suffix = "",
  locale,
  delay = 0,
  className = "",
}: {
  value: number;
  decimals?: number;
  suffix?: string;
  locale: Locale;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || value === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const fmt = new Intl.NumberFormat(locale === "ro" ? "ro-RO" : "en-GB", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
    const final = fmt.format(value) + suffix;
    let raf = 0;
    let timer = 0;

    const run = () => {
      const start = performance.now();
      const duration = 1600;
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 4);
        el.textContent = t < 1 ? fmt.format(value * eased) + suffix : final;
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        el.textContent = fmt.format(0) + suffix;
        // On a first visit the page-load curtain is still up: start after it lifts.
        const curtain = document.querySelector(".site-loader:not(.is-done)") ? Math.max(0, 1500 - performance.now()) : 0;
        timer = window.setTimeout(run, delay + curtain);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      window.clearTimeout(timer);
      el.textContent = final;
    };
  }, [value, decimals, suffix, locale, delay]);

  const text =
    new Intl.NumberFormat(locale === "ro" ? "ro-RO" : "en-GB", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(value) + suffix;

  return (
    <span className={`tabular-nums ${className}`}>
      <span ref={ref} aria-hidden="true">
        {text}
      </span>
      <span className="sr-only">{text}</span>
    </span>
  );
}
