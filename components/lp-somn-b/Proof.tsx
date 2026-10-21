import { VideoPlayer } from "@/components/ui/VideoPlayer";
import type { VideoKey } from "@/content/media";
import type { Locale } from "@/lib/i18n";
import type { Review, VideoTestimonial } from "@/content/lp-somn-b/types";

const VIDEO_KEYS: VideoKey[] = ["lpSomnBTestimonialMihaela", "lpSomnBTestimonialBogdan", "lpSomnBTestimonialCorina"];

/** Video testimonials (3) + written reviews. Replaces the old build's JS carousels with plain grids. */
export function Proof({ videos, reviews, locale }: { videos: VideoTestimonial[]; reviews: Review[]; locale: Locale }) {
  const [open, close] = locale === "ro" ? ["„", "”"] : ["“", "”"];
  return (
    <div className="space-y-14">
      <div className="grid gap-8 md:grid-cols-3">
        {videos.map((v, i) => (
          <figure key={v.name}>
            <VideoPlayer video={VIDEO_KEYS[i]} title={`${v.name} — ${v.role}`} />
            <figcaption className="mt-4">
              <span className="block text-lg font-bold">{v.name}</span>
              <span className="block text-ink-soft">{v.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {reviews.map((r) => (
          <li key={r.name} className="flex flex-col rounded-[var(--radius)] border border-line bg-surface p-6 text-ink">
            <span className="text-lg tracking-[0.2em] text-accent" aria-hidden="true">
              ★★★★★
            </span>
            <blockquote className="mt-3 flex-1 text-lg leading-relaxed">
              {open}
              {r.quote}
              {close}
            </blockquote>
            <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
              <span
                aria-hidden="true"
                className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-bg-alt text-sm font-bold text-ink"
              >
                {r.initials}
              </span>
              <span>
                <span className="block font-bold">{r.name}</span>
                <span className="block text-sm text-ink-soft">{r.city}</span>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
