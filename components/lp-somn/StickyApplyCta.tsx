"use client";

import { useEffect, useState } from "react";
import { buttonClass } from "@/components/ui/primitives";

/** Mobile-only bottom bar pointing at the application form; hides while the form is on screen. */
export function StickyApplyCta({ label, target = "aplica" }: { label: string; target?: string }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const el = document.getElementById(target);
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setHidden(entry.isIntersecting), { threshold: 0.05 });
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return (
    <div
      data-sticky-cta
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md transition-transform duration-300 sm:hidden ${
        hidden ? "translate-y-full" : "translate-y-0"
      }`}
      aria-hidden={hidden || undefined}
    >
      <a href={`#${target}`} tabIndex={hidden ? -1 : undefined} className={buttonClass("cta", "lg", "w-full")}>
        {label}
      </a>
    </div>
  );
}
