import { Card, Section, SectionHead } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { L } from "@/components/ui/L";
import { VIDEOS } from "@/content/media";
import type { Locale } from "@/lib/i18n";
import type { QuoteTestimonial, TestimonialTopic, TestimonialsPageContent, VideoTestimonial } from "@/content/testimonials/types";

function TopicTag({ topic, page }: { topic: TestimonialTopic; page: TestimonialsPageContent }) {
  const t = page.topics[topic];
  return (
    <L
      href={t.href}
      className="inline-flex min-h-9 items-center rounded-full border border-line px-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-ink-soft transition hover:border-primary hover:text-primary"
    >
      {t.label}
    </L>
  );
}

export function VideoTestimonials({
  items,
  page,
  locale,
}: {
  items: VideoTestimonial[];
  page: TestimonialsPageContent;
  locale: Locale;
}) {
  return (
    <Section>
      <SectionHead eyebrow={page.videos.eyebrow} title={page.videos.title} />
      {items.length === 0 ? (
        <p className="text-lg text-ink-soft">{page.empty}</p>
      ) : (
        <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((t, i) => {
            const duration = VIDEOS[t.video].duration;
            const role = t.role[locale];
            return (
              <li key={t.id}>
                <Reveal delay={(i % 3) * 60}>
                  <figure>
                    <VideoPlayer video={t.video} title={`${page.playLabel}: ${t.name}`} />
                    <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-3">
                      <span>
                        <span className="block font-display text-2xl">{t.name}</span>
                        {(role || duration) && (
                          <span className="text-sm text-ink-soft">
                            {[role, duration].filter(Boolean).join(" · ")}
                          </span>
                        )}
                      </span>
                      <TopicTag topic={t.topic} page={page} />
                    </figcaption>
                  </figure>
                </Reveal>
              </li>
            );
          })}
        </ul>
      )}
    </Section>
  );
}

export function QuoteTestimonials({
  items,
  page,
  locale,
}: {
  items: QuoteTestimonial[];
  page: TestimonialsPageContent;
  locale: Locale;
}) {
  if (items.length === 0) return null;
  return (
    <Section tone="alt">
      <SectionHead eyebrow={page.quotes.eyebrow} title={page.quotes.title} />
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((t, i) => (
          <li key={t.id}>
            <Reveal delay={(i % 3) * 60} className="h-full">
              <Card className="flex h-full flex-col">
                <span aria-hidden="true" className="font-display text-[3.5rem] leading-[0.6] text-accent">
                  {locale === "en" ? "“" : "„"}
                </span>
                <blockquote className="mt-4 flex-1 font-display text-[1.4rem] leading-snug sm:text-[1.55rem]">
                  {locale === "en" ? `“${t.quote.en}”` : `„${t.quote.ro}”`}
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
                      <span className="text-sm text-ink-soft">{t.place[locale]}</span>
                    </span>
                  </div>
                  <TopicTag topic={t.topic} page={page} />
                </div>
              </Card>
            </Reveal>
          </li>
        ))}
      </ul>
      <p className="mt-10 text-sm text-ink-soft">{page.note}</p>
    </Section>
  );
}
