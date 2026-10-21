"use client";

import { useEffect, useState } from "react";
import { buttonClass } from "@/components/ui/primitives";

/**
 * Mobile-only bottom bar. Appears once the visitor scrolls past the hero and
 * hides while the application form (`#aplica`) is on screen.
 */
export function StickyApplyCta({ label, target = "aplica" }: { label: string; target?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const el = document.getElementById(target);
    const io = el ? new IntersectionObserver(([entry]) => setFormVisible(entry.isIntersecting), { threshold: 0.05 }) : null;
    if (el) io?.observe(el);
    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, [target]);

  const show = scrolled && !formVisible;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/95 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur-md transition-transform duration-300 sm:hidden ${
        show ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
      aria-hidden={!show}
    >
      <a href={`#${target}`} tabIndex={show ? 0 : -1} className={buttonClass("cta", "lg", "w-full")}>
        {label}
      </a>
    </div>
  );
}
