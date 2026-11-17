import { Container, Eyebrow } from "@/components/ui/primitives";
import { L } from "@/components/ui/L";
import { ArrowIcon } from "@/components/ui/icons";
import { GoogleRatingBadge, ReviewMarquee } from "@/components/ui/GoogleReviews";
import { VideoCarousel } from "@/components/home/VideoCarousel";
import type { VideoStory } from "@/components/pages/testimonials";
import type { HomeContent } from "@/content/pages/home";
import type { Locale } from "@/lib/i18n";

/**
 * Section 7 — testimonials: the Google rating as a raised card next to the
 * heading, the video stories as a swipeable rail, then the Google reviews
 * drifting by as an endless strip, and the link to every testimonial.
 */
export function HomeTestimonials({
  testimonials: t,
  videos,
  locale,
}: {
  testimonials: HomeContent["testimonials"];
  videos: VideoStory[];
  locale: Locale;
}) {
  return (
    <section id="testimoniale" className="relative isolate scroll-mt-24 overflow-hidden bg-bg-alt py-24 text-ink sm:py-32">
      <div aria-hidden="true" className="absolute -left-40 top-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-[rgb(var(--glow-b)/0.22)] blur-3xl" />
      <Container>
        <div className="mb-12 flex flex-col gap-7 sm:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <h2 className="t-h2">{t.title}</h2>
          </div>
          <GoogleRatingBadge locale={locale} label={t.ratingLabel} className="self-start lg:self-auto" />
        </div>

        {videos.length > 0 && (
          <div className="mb-14">
            <VideoCarousel items={videos} title={t.videosTitle} prev={t.prev} next={t.next} play={t.play} />
          </div>
        )}

        <ReviewMarquee locale={locale} source={t.reviewSource} />

        <L href="/testimoniale" className="link-draw mt-8 inline-flex min-h-11 items-center gap-1.5 text-lg font-semibold text-primary">
          {t.all}
          <ArrowIcon size={16} />
        </L>
      </Container>
    </section>
  );
}
