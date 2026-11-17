import { Container, Eyebrow } from "@/components/ui/primitives";
import { L } from "@/components/ui/L";
import { ArrowIcon } from "@/components/ui/icons";
import { GoogleRatingBadge, GoogleReviewCards } from "@/components/ui/GoogleReviews";
import { VideoCarousel } from "@/components/home/VideoCarousel";
import type { VideoStory } from "@/components/pages/testimonials";
import type { HomeContent } from "@/content/pages/home";
import type { Locale } from "@/lib/i18n";

/**
 * Section 7 — testimonials: the Google rating next to the heading, the video
 * stories in a sideways row, then three Google reviews and a link to the
 * full testimonials page.
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
    <section id="testimoniale" className="scroll-mt-24 bg-bg-alt py-24 text-ink sm:py-32">
      <Container>
        <div className="mb-12 flex flex-col gap-6 sm:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <h2 className="t-h2">{t.title}</h2>
          </div>
          <GoogleRatingBadge locale={locale} label={t.ratingLabel} className="self-start lg:self-auto" />
        </div>

        {videos.length > 0 && (
          <div className="mb-12">
            <VideoCarousel items={videos} title={t.videosTitle} prev={t.prev} next={t.next} play={t.play} />
          </div>
        )}

        <GoogleReviewCards locale={locale} source={t.reviewSource} />

        <L
          href="/testimoniale"
          className="link-draw mt-8 inline-flex min-h-11 items-center gap-1.5 text-lg font-semibold text-primary"
        >
          {t.all}
          <ArrowIcon size={16} />
        </L>
      </Container>
    </section>
  );
}
