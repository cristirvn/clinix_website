"use client";

import { Children, useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Swipeable snap rail (phones/tablets): the next card peeks at the edge, a
 * small progress pill underneath shows where you are. From `gridFrom` up the
 * same list can turn into a normal grid (pass the grid classes in
 * `className`, e.g. "lg:grid lg:grid-cols-3"), and the pills hide.
 * Children must be <li> elements.
 */
export function Rail({
  children,
  className = "",
  label,
  dotsClassName = "",
}: {
  children: ReactNode;
  className?: string;
  label?: string;
  dotsClassName?: string;
}) {
  const ref = useRef<HTMLUListElement>(null);
  const count = Children.count(children);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = el.scrollWidth - el.clientWidth;
        if (max <= 0) return setActive(0);
        setActive(Math.round((el.scrollLeft / max) * (count - 1)));
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [count]);

  return (
    <div>
      <ul ref={ref} aria-label={label} className={`rail ${className}`}>
        {children}
      </ul>
      {count > 1 && (
        <div aria-hidden="true" className={`mt-5 flex justify-center gap-1.5 ${dotsClassName}`}>
          {Array.from({ length: count }, (_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-[width,background-color] duration-500 ease-[var(--ease-out)] ${i === active ? "w-7 bg-accent" : "w-1.5 bg-current/25"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
