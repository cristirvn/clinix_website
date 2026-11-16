"use client";

import { useRef } from "react";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { ArrowIcon } from "@/components/ui/icons";
import type { VideoStory } from "@/components/pages/testimonials";

/**
 * A row of video stories that scrolls sideways (swipe on a phone, the two
 * round buttons on a computer). Three show at once on a laptop, one and a
 * bit on a phone, so it is obvious there are more.
 */
export function VideoCarousel({
  items,
  title,
  prev,
  next,
  play,
}: {
  items: VideoStory[];
  title: string;
  prev: string;
  next: string;
  play: string;
}) {
  const track = useRef<HTMLUListElement>(null);
  const move = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: "smooth" });
  };
  const btn =
    "lg lg-clear flex h-12 w-12 items-center justify-center rounded-full text-ink disabled:opacity-40";

  return (
    <div>
      <div className="mb-5 flex items-center justify-between gap-4">
        <h3 className="text-[1.35rem] sm:text-[1.6rem]">{title}</h3>
        <div className="hidden gap-2 sm:flex">
          <button type="button" onClick={() => move(-1)} className={btn} aria-label={prev}>
            <ArrowIcon size={18} className="rotate-180" />
          </button>
          <button type="button" onClick={() => move(1)} className={btn} aria-label={next}>
            <ArrowIcon size={18} />
          </button>
        </div>
      </div>
      <ul
        ref={track}
        className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-4 [scrollbar-width:none] sm:mx-0 sm:scroll-px-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {items.map((t) => (
          <li key={t.id} className="w-[84%] flex-none snap-start sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.7rem)]">
            <figure>
              <VideoPlayer video={t.video} title={`${play}: ${t.name}`} />
              <figcaption className="mt-3">
                <span className="block text-lg font-semibold">{t.name}</span>
                {t.line && <span className="text-base text-ink-soft">{t.line}</span>}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}
