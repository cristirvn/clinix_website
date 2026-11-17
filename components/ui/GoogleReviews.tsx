import { GOOGLE_RATING, GOOGLE_REVIEWS } from "@/content/reviews";
import type { Locale } from "@/lib/i18n";
import { Reveal } from "@/components/ui/Reveal";
import { StatNumber } from "@/components/ui/StatNumber";

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

/** "4,9 ★★★★★ 98 reviews on Google" badge: a raised card, the score rolls up (NumberFlow) when seen. */
export function GoogleRatingBadge({ locale, label, className = "" }: { locale: Locale; label: string; className?: string }) {
  const score = GOOGLE_RATING.score[locale];
  return (
    <div className={`inline-flex items-center gap-4 rounded-[var(--radius-media)] border border-line bg-surface py-3 pl-5 pr-6 text-ink shadow-[var(--shadow-lift)] ${className}`}>
      <span className="font-display text-[2.6rem] font-semibold leading-none tracking-[-0.03em] tabular-nums">
        <StatNumber value={score} locale={locale} />
      </span>
      <span className="flex flex-col gap-1">
        <Stars className="text-accent" />
        <span className="text-sm text-ink-soft">
          {GOOGLE_RATING.count} {label}
        </span>
      </span>
      <span className="sr-only">/ 5</span>
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
            <figure className="flex h-full flex-col rounded-[var(--radius-media)] border border-line bg-surface p-6 text-ink shadow-[var(--shadow-lift)] sm:p-7">
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

/**
 * The Google reviews as an endless strip (Magic UI "marquee", CSS-only): big
 * quote cards drift slowly sideways, pause under the mouse, and the edges
 * fade out. The second copy is hidden from screen readers; with reduced
 * motion it becomes a plain sideways-scrolling list (app/globals.css).
 */
export function ReviewMarquee({ locale, source }: { locale: Locale; source: string }) {
  const open = locale === "en" ? "“" : "„";
  // Two passes per copy so the strip is always wider than the widest screen.
  const pass = [...GOOGLE_REVIEWS, ...GOOGLE_REVIEWS];
  const group = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} data-dup={hidden || undefined} className="flex flex-none gap-4 pr-4 sm:gap-5 sm:pr-5">
      {pass.map((r, i) => (
        <li key={`${r.name}-${i}`} className="w-[19rem] flex-none sm:w-[24rem]" aria-hidden={!hidden && i >= GOOGLE_REVIEWS.length ? true : undefined} data-dup={i >= GOOGLE_REVIEWS.length || undefined}>
          <figure className="flex h-full flex-col rounded-[var(--radius-media)] border border-line bg-surface p-6 text-ink shadow-[var(--shadow-lift)] sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <Stars className="text-accent" />
              <span aria-hidden="true" className="text-[3.2rem] font-semibold leading-[0.6] text-accent/25">
                {open}
              </span>
            </div>
            <blockquote className="mt-5 flex-1 text-[1.12rem] leading-snug sm:text-[1.25rem]">
              {open}
              {r.quote[locale]}”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-4 text-base">
              <span aria-hidden="true" className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-bg-alt font-semibold text-primary">
                {r.name.charAt(0)}
              </span>
              <span>
                <span className="block font-semibold leading-tight">{r.name}</span>
                <span className="text-sm text-ink-soft">{source}</span>
              </span>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="marquee -mx-5 py-2 sm:-mx-8">
      <div className="marquee-track">
        {group(false)}
        {group(true)}
      </div>
    </div>
  );
}
