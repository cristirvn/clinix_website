import { ButtonLink, Container, HeroPanel, keepHyphenated } from "@/components/ui/primitives";
import { Photo } from "@/components/ui/Photo";
import { EegLive } from "@/components/home/EegTrace";
import { BlurWords } from "@/components/ui/BlurWords";
import { SpotRim } from "@/components/ui/PointerSpotlight";
import type { ImageKey } from "@/content/media";
import type { Locale } from "@/lib/i18n";
import type { CtaBandContent, PageHeroContent } from "@/content/pages/blocks";

/**
 * Page-top hero for the inner pages, in the inset lit panel (HeroPanel):
 * no caption label (client: no eyebrows on page heroes), the H1 settling in word by word, one short lead, one obvious
 * next step (with the light sweep) + an optional photo in a raised frame.
 */
export function PageHero({ content, image, locale }: { content: PageHeroContent; image?: ImageKey; locale?: Locale }) {
  return (
    <HeroPanel>
      <div className={image ? "grid items-center gap-10 lg:grid-cols-12 lg:gap-16" : ""}>
        <div className={image ? "lg:col-span-7" : "max-w-4xl"}>
          <h1 className="t-h1">
            <BlurWords text={content.title} delay={90} step={60} />
          </h1>
          <p className="t-lead rise-in mt-6 max-w-[62ch] text-on-dark-soft" style={{ animationDelay: "320ms" }}>
            {keepHyphenated(content.lead)}
          </p>
          {content.primary && (
            <div className="rise-in mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4" style={{ animationDelay: "420ms" }}>
              <ButtonLink href={content.primary.href} size="lg" className="btn-shine">
                {content.primary.label}
              </ButtonLink>
              {content.secondary && (
                <ButtonLink href={content.secondary.href} variant="outline" size="lg">
                  {content.secondary.label}
                </ButtonLink>
              )}
            </div>
          )}
        </div>
        {image && locale && (
          <div className="rise-in lg:col-span-5" style={{ animationDelay: "240ms" }}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-media)] shadow-[0_40px_80px_-30px_rgb(0_0_0/0.6)] ring-1 ring-white/15 lg:aspect-[4/5]">
              <Photo image={image} locale={locale} width={900} priority className="hero-settle" />
              <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-dark/40 to-dark/0" />
            </div>
          </div>
        )}
      </div>
    </HeroPanel>
  );
}

/**
 * Closing band with the page's single next step: an inset lit panel that
 * mirrors the hero, the live EEG line across it and light following the
 * mouse. It replaces the footer's own call-to-action band (`data-final-cta`,
 * see globals.css), so the page ends once instead of with two navy closes.
 */
export function CtaBand({ content }: { content: CtaBandContent }) {
  return (
    <section data-final-cta className="bg-bg px-2 pb-2 pt-4 sm:px-3 sm:pb-3 sm:pt-8">
      <div data-tone="dark" className="bg-vital grain spotlight relative isolate overflow-hidden rounded-[var(--radius-panel)] py-20 text-on-dark sm:py-28">
        <SpotRim />
        <EegLive className="absolute inset-x-0 top-8 -z-10 h-20 opacity-60 sm:top-10 sm:h-24" strokeWidth={1.6} speed={16} />
        <Container narrow className="relative z-[3] pt-10 text-center sm:pt-14">
          <h2 className="t-h2">{keepHyphenated(content.title)}</h2>
          <p className="t-lead mx-auto mt-6 max-w-2xl text-on-dark-soft">{keepHyphenated(content.text)}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <ButtonLink href={content.primary.href} variant="light" size="lg" className="btn-shine w-full sm:w-auto">
              {content.primary.label}
            </ButtonLink>
            {content.secondary && (
              <ButtonLink href={content.secondary.href} variant="ghost" className="text-on-dark">
                {content.secondary.label}
              </ButtonLink>
            )}
          </div>
        </Container>
      </div>
    </section>
  );
}

/**
 * Neutral frame shown until the clinic sends a real photo. Uses theme tokens
 * only, so it reads in every theme (including midnight).
 */
export function PhotoPlaceholder({
  label,
  aspect = "aspect-[4/3]",
  surface = false,
  className = "",
}: {
  label: string;
  aspect?: string;
  /** Use on `alt` sections so the frame stands off the background. */
  surface?: boolean;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex ${aspect} w-full flex-col items-center justify-center gap-3 rounded-[var(--radius)] border border-line ${surface ? "bg-surface" : "bg-bg-alt"} text-ink-soft ${className}`}
    >
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="opacity-60">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8 5l1.5-2h5L16 5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
      <span className="px-4 text-center text-sm font-semibold">{label}</span>
    </div>
  );
}

/**
 * "Recommended by" strip. With no names yet it shows four quiet placeholder
 * tiles, so the layout is final and only the content changes.
 */
export function RecommendedStrip({ names, placeholderLabel }: { names: string[]; placeholderLabel: string }) {
  const tiles = names.length ? names : Array.from({ length: 4 }, () => "");
  return (
    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {tiles.map((name, i) => (
        <li
          key={name || i}
          className={`flex min-h-20 items-center justify-center rounded-[var(--radius)] border px-4 py-5 text-center font-display text-xl ${
            name ? "border-line bg-surface text-ink" : "border-dashed border-line text-ink-soft"
          }`}
        >
          {name || <span className="font-body text-sm font-semibold opacity-70">{placeholderLabel}</span>}
        </li>
      ))}
    </ul>
  );
}
