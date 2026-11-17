import { GOOGLE_RATING, GOOGLE_REVIEWS } from "@/content/reviews";
import type { Locale } from "@/lib/i18n";
import { Reveal } from "@/components/ui/Reveal";

/** Five small stars, drawn as SVG so they look the same everywhere. */
export function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex gap-0.5 ${className}`} aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 1.6l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.6 7.7l5.8-.8z" />
        </svg>
      ))}
    </span>
  );
}

/** "4,9 ★★★★★ 98 reviews on Google" badge. */
export function GoogleRatingBadge({ locale, label, className = "" }: { locale: Locale; label: string; className?: string }) {
  const score = GOOGLE_RATING.score[locale];
  return (
    <div className={`inline-flex items-center gap-4 border-l border-line py-1 pl-5 ${className}`}>
      <span className="font-display text-[2.4rem] leading-none tabular-nums">{score}</span>
      <span className="flex flex-col gap-1">
        <Stars className="text-accent" />
        <span className="text-sm text-ink-soft">
          {GOOGLE_RATING.count} {label}
        </span>
      </span>
      <span className="sr-only">
        {score} / 5
      </span>
    </div>
  );
}

/** The three Google reviews as quote cards. */
export function GoogleReviewCards({ locale, source }: { locale: Locale; source: string }) {
  const open = locale === "en" ? "“" : "„";
  return (
    <ul className="grid gap-4 sm:gap-5 md:grid-cols-3">
      {GOOGLE_REVIEWS.map((r, i) => (
        <li key={r.name}>
          <Reveal delay={i * 70} className="h-full">
            <figure className="flex h-full flex-col rounded-[var(--radius)] border border-line bg-surface p-6 text-ink sm:p-7">
              <Stars className="text-accent" />
              <blockquote className="mt-4 flex-1 text-lg leading-snug">
                {open}
                {r.quote[locale]}”
              </blockquote>
              <figcaption className="mt-5 border-t border-line pt-4 text-base">
                <span className="font-semibold">{r.name}</span>
                <span className="text-ink-soft"> · {source}</span>
              </figcaption>
            </figure>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
