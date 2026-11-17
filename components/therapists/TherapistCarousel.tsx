"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { L } from "@/components/ui/L";
import { buttonClass } from "@/components/ui/primitives";
import { ArrowIcon } from "@/components/ui/icons";

export interface TherapistCard {
  slug: string;
  name: string;
  role: string;
  short: string;
  focus: string[];
  photo: string;
  /** "Află mai multe despre Patricia". */
  more: string;
}

/**
 * /servicii/psihoterapie — the psychotherapists as a row of cards that scrolls
 * sideways (swipe on a phone, the two round buttons on a computer — shown
 * only when there are more cards than fit). One and a bit show on a phone,
 * so it is obvious there are more. Each card opens that person's page.
 */
export function TherapistCarousel({ items, prev, next }: { items: TherapistCard[]; prev: string; next: string }) {
  const track = useRef<HTMLUListElement>(null);
  const [overflow, setOverflow] = useState(false);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const update = () => setOverflow(el.scrollWidth > el.clientWidth + 4);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const move = (dir: 1 | -1) => track.current?.scrollBy({ left: dir * track.current.clientWidth * 0.9, behavior: "smooth" });
  const btn = "lg lg-clear flex h-12 w-12 items-center justify-center rounded-full text-ink";

  return (
    <div>
      {overflow && (
        <div className="mb-5 hidden justify-end gap-2 sm:flex">
          <button type="button" onClick={() => move(-1)} className={btn} aria-label={prev}>
            <ArrowIcon size={18} className="rotate-180" />
          </button>
          <button type="button" onClick={() => move(1)} className={btn} aria-label={next}>
            <ArrowIcon size={18} />
          </button>
        </div>
      )}
      <ul
        ref={track}
        className={`-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-5 px-5 pb-4 [scrollbar-width:none] sm:mx-0 sm:scroll-px-0 sm:px-0 [&::-webkit-scrollbar]:hidden ${
          overflow ? "" : "sm:justify-center"
        }`}
      >
        {items.map((t) => (
          <li key={t.slug} className="w-[84%] flex-none snap-start sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.84rem)]">
            <article className="flex h-full flex-col overflow-hidden rounded-[var(--radius)] border border-line bg-surface text-ink">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src={t.photo} alt={t.name} fill sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 84vw" className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-[1.7rem] leading-tight">{t.name}</h3>
                <p className="mt-1.5 text-[0.875rem] font-semibold text-accent">{t.role}</p>
                <p className="mt-3 text-ink-soft">{t.short}</p>
                {t.focus.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {t.focus.map((f) => (
                      <li key={f} className="rounded-full bg-bg-alt px-3 py-1 text-[0.85rem] font-semibold text-ink-soft ring-1 ring-line">
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-auto pt-7">
                  <L href={`/psihoterapeut/${t.slug}`} className={buttonClass("cta", "md", "group w-full")}>
                    {t.more}
                    <ArrowIcon size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </L>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
