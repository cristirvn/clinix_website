"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/layout/Logo";
import { useLocale } from "@/components/layout/LocaleProvider";

/** Shortest time the curtain stays up, so the logo animation can play out. */
const MIN_SHOW_MS = 1250;
/** Safety net: lift the curtain even if a slow asset never finishes loading. */
const MAX_SHOW_MS = 3200;

/**
 * Page-load curtain: the clinic logo rises in, a caption fades in, a thin line
 * fills, then the curtain slides up once the page has loaded. Rendered on the
 * server so it covers the first paint; hidden by <noscript> CSS without JS.
 * It lives in the locale layout, so in-app navigation does not show it again.
 */
export function SiteLoader() {
  const { dict } = useLocale();
  const [done, setDone] = useState(false);

  useEffect(() => {
    // performance.now() counts from the start of the page load, not from hydration.
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let timer: number | undefined;
    let released = false;

    const release = () => {
      if (released) return;
      released = true;
      const wait = reduceMotion ? 0 : Math.max(0, MIN_SHOW_MS - performance.now());
      timer = window.setTimeout(() => setDone(true), wait);
    };

    if (document.readyState === "complete") release();
    else window.addEventListener("load", release, { once: true });
    const fallback = window.setTimeout(release, Math.max(0, MAX_SHOW_MS - performance.now()));

    return () => {
      window.removeEventListener("load", release);
      window.clearTimeout(fallback);
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`site-loader ${done ? "is-done" : ""}`} aria-hidden="true">
      <div className="loader-inner">
        <div className="loader-brand flex justify-center">
          <Logo eager className="h-20 sm:h-28" />
        </div>
        <div className="loader-copy mt-12 flex justify-between gap-8 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-ink-soft sm:mt-14">
          <span>{dict.loader.left}</span>
          <span className="hidden sm:inline">{dict.loader.right}</span>
        </div>
        <div className="loader-progress mt-3.5 h-px overflow-hidden bg-line">
          <span className="block h-full w-full bg-primary" />
        </div>
      </div>
    </div>
  );
}
