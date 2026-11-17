"use client";

import { useEffect } from "react";

/**
 * One document-wide pointer listener that feeds the `.spotlight` cards (see
 * app/globals.css): it writes the pointer position into `--mx` / `--my` on
 * the card under a mouse. Touch and pen never trigger it, and nothing runs
 * when no spotlight card is hovered. Renders nothing.
 */
export function PointerSpotlight() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    let frame = 0;
    let last: PointerEvent | null = null;
    const apply = () => {
      frame = 0;
      const e = last;
      if (!e) return;
      const card = (e.target as Element | null)?.closest?.<HTMLElement>(".spotlight");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      last = e;
      if (!frame) frame = requestAnimationFrame(apply);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      document.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);
  return null;
}

/** The bright 1px rim of a `.spotlight` card. Put it as a direct child of the card. */
export function SpotRim() {
  return <span aria-hidden="true" className="spot-rim" />;
}
