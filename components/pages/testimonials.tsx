import { Card, Section, SectionHead } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { L } from "@/components/ui/L";
import type { MediaVideo, VideoKey } from "@/content/media";
import { resolveVideo, type VideoOverrides } from "@/lib/video";
import type { Locale } from "@/lib/i18n";
import type { QuoteTestimonial, TestimonialsPageContent, VideoTestimonial } from "@/content/testimonials/types";
import { pick, type CmsTestimonial } from "@/lib/cms/types";

/**
 * Testimonial cards. Two sources share the same cards:
 *  - the fixed list in `content/testimonials/items.ts` (landing pages);
 *  - the ones the clinic adds in /admin (`lib/cms`).
 * Both are turned into `VideoStory` / `QuoteStory` first.
 */
type Tag = { label: string; href: string };

export interface VideoStory {
  id: string;
  name: string;
  /** Short line under the name (may be empty). */
  line: string;
  video: VideoKey | MediaVideo;
  tag?: Tag;
}

export interface QuoteStory {
  id: string;
  name: string;
  initials: string;
  line: string;
  quote: string;
  tag?: Tag;
}

const initialsOf = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join("");

/** /admin testimonials → cards. `tagFor` picks the small link shown on the card (none on a service page). */
export function cmsToStories(items: CmsTestimonial[], locale: Locale, tagFor?: (t: CmsTestimonial) => Tag | undefined) {
  const videos: VideoStory[] = [];
  const quotes: QuoteStory[] = [];
  for (const t of items) {
    const base = { id: `cms-${t.id}`, name: t.name, line: pick(t.detail, locale), tag: tagFor?.(t) };
    if (t.kind === "video") videos.push({ ...base, video: { src: t.videoUrl } });
    else quotes.push({ ...base, initials: initialsOf(t.name), quote: pick(t.quote, locale) });
  }
  return { videos, quotes };
}

/** The fixed list → cards. */
export function staticVideoStories(
  items: VideoTestimonial[],
  page: TestimonialsPageContent,
  locale: Locale,
  overrides: VideoOverrides,
): VideoStory[] {
  return items.map((t) => ({
    id: t.id,
    name: t.name,
    line: [t.role[locale], resolveVideo(t.video, overrides).duration].filter(Boolean).join(" · "),
    video: t.video,
    tag: page.topics[t.topic],
  }));
}

export function staticQuoteStories(items: QuoteTestimonial[], page: TestimonialsPageContent, locale: Locale): QuoteStory[] {
  return items.map((t) => ({
    id: t.id,
    name: t.name,
    initials: t.initials,
    line: t.place[locale],
    quote: t.quote[locale],
    tag: page.topics[t.topic],
  }));
}

function TopicTag({ tag }: { tag: Tag }) {
  return (
    <L
      href={tag.href}
      className="inline-flex min-h-9 items-center rounded-full border border-line px-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-ink-soft transition hover:border-primary hover:text-primary"
    >
      {tag.label}
    </L>
  );
}

export function VideoStoryGrid({ items, playLabel }: { items: VideoStory[]; playLabel: string }) {
  return (
    <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((t, i) => (
        <li key={t.id}>
          <Reveal delay={(i % 3) * 60}>
            <figure>
              <VideoPlayer video={t.video} title={`${playLabel}: ${t.name}`} />
              <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <span>
                  <span className="block font-display text-2xl">{t.name}</span>
                  {t.line && <span className="text-sm text-ink-soft">{t.line}</span>}
                </span>
                {t.tag && <TopicTag tag={t.tag} />}
              </figcaption>
            </figure>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

export function QuoteStoryGrid({ items, locale }: { items: QuoteStory[]; locale: Locale }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((t, i) => (
        <li key={t.id}>
          <Reveal delay={(i % 3) * 60} className="h-full">
            <Card className="flex h-full flex-col">
              <span aria-hidden="true" className="font-display text-[3.5rem] leading-[0.6] text-accent">
                {locale === "en" ? "“" : "„"}
              </span>
              <blockquote className="mt-4 flex-1 text-[1.2rem] leading-snug sm:text-[1.3rem]">
                {locale === "en" ? `“${t.quote}”` : `„${t.quote}”`}
              </blockquote>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-bg-alt font-display text-base text-accent ring-1 ring-line"
                  >
                    {t.initials}
                  </span>
                  <span>
                    <span className="block font-semibold">{t.name}</span>
                    {t.line && <span className="text-sm text-ink-soft">{t.line}</span>}
                  </span>
                </div>
                {t.tag && <TopicTag tag={t.tag} />}
              </div>
            </Card>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

/** `/testimoniale` — videos. */
export function VideoTestimonials({ items, page }: { items: VideoStory[]; page: TestimonialsPageContent }) {
  return (
    <Section>
      <SectionHead title={page.videos.title} />
      {items.length === 0 ? <p className="text-lg text-ink-soft">{page.empty}</p> : <VideoStoryGrid items={items} playLabel={page.playLabel} />}
    </Section>
  );
}

/** `/testimoniale` — written quotes. */
export function QuoteTestimonials({ items, page, locale }: { items: QuoteStory[]; page: TestimonialsPageContent; locale: Locale }) {
  if (items.length === 0) return null;
  return (
    <Section tone="alt">
      <SectionHead title={page.quotes.title} />
      <QuoteStoryGrid items={items} locale={locale} />
      <p className="mt-10 text-sm text-ink-soft">{page.note}</p>
    </Section>
  );
}

/**
 * Service / psychotherapist page — the testimonials the clinic added in /admin
 * for this page. With none yet: nothing renders, unless `placeholder` is given
 * — then three empty video frames carry that label until the first one is added.
 */
export function ServiceTestimonials({
  items,
  ui,
  locale,
  placeholder,
  lead,
  id,
  tone = "alt",
}: {
  items: CmsTestimonial[];
  ui: { title: string; play: string };
  locale: Locale;
  placeholder?: string;
  lead?: string;
  id?: string;
  tone?: "default" | "alt";
}) {
  if (items.length === 0 && !placeholder) return null;
  const { videos, quotes } = cmsToStories(items, locale);
  return (
    <Section tone={tone} id={id}>
      <SectionHead title={ui.title} lead={lead} />
      {items.length === 0 && placeholder ? (
        <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <li key={i} className={i === 2 ? "max-lg:hidden" : undefined}>
              <figure>
                <VideoPlayer video={{ src: "" }} title={placeholder} />
                <figcaption className="mt-4 text-ink-soft">{placeholder}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      ) : (
        <div className="space-y-12">
          {videos.length > 0 && <VideoStoryGrid items={videos} playLabel={ui.play} />}
          {quotes.length > 0 && <QuoteStoryGrid items={quotes} locale={locale} />}
        </div>
      )}
    </Section>
  );
}
