import { ButtonLink, Container, Eyebrow, HeroPanel } from "@/components/ui/primitives";
import { Photo } from "@/components/ui/Photo";
import { EegTrace } from "@/components/home/EegTrace";
import type { ImageKey } from "@/content/media";
import type { Locale } from "@/lib/i18n";
import type { CtaBandContent, PageHeroContent } from "@/content/pages/blocks";

/** Page-top hero for the inner pages: eyebrow, big H1, one short lead, one obvious next step (+ optional photo). */
export function PageHero({ content, image, locale }: { content: PageHeroContent; image?: ImageKey; locale?: Locale }) {
  return (
    <HeroPanel>
      <div className={image ? "grid items-center gap-12 lg:grid-cols-12 lg:gap-16" : ""}>
        <div className={image ? "lg:col-span-7" : "max-w-4xl"}>
          <Eyebrow className="rise-in">{content.eyebrow}</Eyebrow>
          <h1 className="rise-in text-[2.6rem] leading-[1.04] sm:text-6xl lg:text-[4.6rem]" style={{ animationDelay: "90ms" }}>
            {content.title}
          </h1>
          <p className="rise-in mt-6 max-w-2xl text-lg text-on-dark-soft sm:text-xl" style={{ animationDelay: "180ms" }}>
            {content.lead}
          </p>
          {content.primary && (
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <ButtonLink href={content.primary.href} size="lg">
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
          <div className="liquid-glass rise-in rounded-[calc(var(--radius)+10px)] p-2 lg:col-span-5" style={{ animationDelay: "240ms" }}>
            <div className="aspect-[4/3] overflow-hidden rounded-[var(--radius)] lg:aspect-[4/5]">
              <Photo image={image} locale={locale} width={900} priority />
            </div>
          </div>
        )}
      </div>
      <EegTrace draw className="mt-14 w-56 opacity-80 sm:mt-16 sm:w-72" strokeWidth={1.4} />
    </HeroPanel>
  );
}

/** Closing dark band with the page's single next step. */
export function CtaBand({ content }: { content: CtaBandContent }) {
  return (
    <section data-tone="dark" className="bg-vital py-20 text-on-dark sm:py-28">
      <Container narrow className="text-center">
        <EegTrace className="mx-auto mb-10 w-48 sm:w-56" strokeWidth={1.6} />
        <h2 className="text-[2.2rem] leading-[1.06] sm:text-[3.4rem]">{content.title}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-on-dark-soft sm:text-xl">{content.text}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <ButtonLink href={content.primary.href} variant="light" size="lg" className="w-full sm:w-auto">
            {content.primary.label}
          </ButtonLink>
          {content.secondary && (
            <ButtonLink href={content.secondary.href} variant="ghost" className="text-on-dark">
              {content.secondary.label}
            </ButtonLink>
          )}
        </div>
      </Container>
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
      <span className="px-4 text-center text-sm font-semibold uppercase tracking-[0.14em]">{label}</span>
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
          className={`flex min-h-20 items-center justify-center rounded-[calc(var(--radius)*0.75)] border px-4 py-5 text-center font-display text-xl ${
            name ? "border-line bg-surface text-ink" : "border-dashed border-line text-ink-soft"
          }`}
        >
          {name || <span className="font-body text-sm font-semibold uppercase tracking-[0.14em] opacity-70">{placeholderLabel}</span>}
        </li>
      ))}
    </ul>
  );
}
