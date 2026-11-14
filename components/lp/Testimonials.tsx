"use client";

import { useCallback, useRef, useState } from "react";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import type { VideoKey } from "@/content/media";
import { useVideoOverrides } from "@/components/layout/VideoOverrides";
import { resolveVideo } from "@/lib/video";
import type { BrainmapFixed } from "@/content/lps/fixed/types";

const TESTIMONIALS: Array<{ name: string; video: VideoKey }> = [
  { name: "Ernesto", video: "testimonialErnesto" },
  { name: "Gabriela", video: "testimonialGabriela" },
  { name: "Paulina", video: "testimonialPaulina" },
];

/**
 * The three testimonial videos. Desktop: a plain three-column grid. Mobile: a
 * horizontal scroll-snap track with arrows + dots; the track's own scroll
 * position decides the active dot, so swipes and arrow presses stay in sync.
 */
export function Testimonials({ copy }: { copy: BrainmapFixed["proof"] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const overrides = useVideoOverrides();

  const nearest = useCallback((track: HTMLDivElement) => {
    const cards = Array.from(track.children) as HTMLElement[];
    const centre = track.scrollLeft + track.clientWidth / 2;
    let best = 0;
    let min = Infinity;
    cards.forEach((el, i) => {
      const d = Math.abs(el.offsetLeft + el.offsetWidth / 2 - centre);
      if (d < min) {
        min = d;
        best = i;
      }
    });
    return best;
  }, []);

  const goTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.children) as HTMLElement[];
    const i = Math.max(0, Math.min(cards.length - 1, index));
    const card = cards[i];
    if (!card) return;
    // Instant on purpose: Chrome cancels smooth programmatic scrolls on a
    // mandatory scroll-snap container (verified in the previous build).
    track.scrollTo({ left: card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2, behavior: "instant" });
    setActive(i);
  }, []);

  const arrow = "flex h-12 w-12 items-center justify-center rounded-full border-2 border-line bg-surface text-ink transition hover:border-accent disabled:opacity-35";

  return (
    <div>
      <div
        ref={trackRef}
        tabIndex={0}
        aria-label={copy.dotsLabel}
        onScroll={(e) => setActive(nearest(e.currentTarget))}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            e.preventDefault();
            goTo(active + 1);
          }
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            goTo(active - 1);
          }
        }}
        className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {TESTIMONIALS.map((t) => (
          <figure key={t.name} className="w-[85%] flex-none snap-center sm:w-[60%] lg:w-auto">
            <VideoPlayer video={t.video} title={`${copy.playLabel}: ${t.name}`} />
            <figcaption className="mt-4 flex items-baseline justify-between gap-3">
              <span className="font-display text-2xl">{t.name}</span>
              <span className="text-sm text-ink-soft">
                {copy.caption}
                {resolveVideo(t.video, overrides).duration ? ` · ${resolveVideo(t.video, overrides).duration}` : ""}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-5 lg:hidden">
        <button type="button" className={arrow} aria-label={copy.prev} disabled={active === 0} onClick={() => goTo(active - 1)}>
          <svg width="10" height="16" viewBox="0 0 9 14" fill="none" aria-hidden="true">
            <path d="M7.5 1 1.5 7l6 6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className="flex" role="group" aria-label={copy.dotsLabel}>
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.name}
              type="button"
              aria-label={`${copy.dot} ${i + 1}`}
              aria-current={i === active ? "true" : undefined}
              onClick={() => goTo(i)}
              className="flex h-11 min-w-11 items-center justify-center"
            >
              <span className={`block h-3 rounded-full transition-all ${i === active ? "w-8 bg-accent" : "w-3 bg-line"}`} />
            </button>
          ))}
        </div>
        <button
          type="button"
          className={arrow}
          aria-label={copy.next}
          disabled={active === TESTIMONIALS.length - 1}
          onClick={() => goTo(active + 1)}
        >
          <svg width="10" height="16" viewBox="0 0 9 14" fill="none" aria-hidden="true">
            <path d="m1.5 1 6 6-6 6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
