"use client";

import { useEffect, useState } from "react";
import { buttonClass } from "@/components/ui/primitives";

/**
 * Mobile sticky CTA. Appears once the hero has scrolled past and hides again
 * when the form is on screen (no point nagging someone who reached it).
 */
export function StickyBar({
  label,
  sub,
  cta,
  heroId,
  formId,
}: {
  label: string;
  sub: string;
  cta: string;
  heroId: string;
  formId: string;
}) {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const hero = document.getElementById(heroId);
    const form = document.getElementById(formId);
    if (!hero || !form) return;
    const update = () => {
      const pastHero = hero.getBoundingClientRect().bottom < 0;
      const atForm = form.getBoundingClientRect().top < window.innerHeight;
      setOn(pastHero && !atForm);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [heroId, formId]);

  return (
    <div
      aria-hidden={!on}
      data-sticky-cta
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface/95 text-ink shadow-[0_-12px_30px_-18px_rgba(0,0,0,0.4)] backdrop-blur-md transition-transform duration-300 md:hidden ${
        on ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between gap-3 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <p className="hidden min-w-0 leading-tight min-[400px]:block">
          <span className="block whitespace-nowrap font-semibold">{label}</span>
          <span className="hidden text-sm text-ink-soft min-[420px]:block">{sub}</span>
        </p>
        <a href={`#${formId}`} tabIndex={on ? undefined : -1} className={buttonClass("cta", "md", "flex-1 !px-4 text-[0.95rem] min-[400px]:flex-none")}>
          {cta}
        </a>
      </div>
    </div>
  );
}
