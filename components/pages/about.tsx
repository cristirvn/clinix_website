import Image from "next/image";
import { Eyebrow, Section, SectionHead } from "@/components/ui/primitives";
import { L } from "@/components/ui/L";
import { Reveal } from "@/components/ui/Reveal";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { PhotoPlaceholder, RecommendedStrip } from "@/components/pages/shared";
import { CLINIC } from "@/lib/site";
import type { AboutContent } from "@/content/pages/ro/about";

/** Mission: one big statement on the left, two short paragraphs on the right. */
export function Mission({ content }: { content: AboutContent["mission"] }) {
  return (
    <Section tone="alt">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <h2 className="text-[2.1rem] sm:text-5xl">{content.title}</h2>
        </div>
        <div className="space-y-5 text-lg text-ink-soft sm:text-xl lg:pt-10">
          {content.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Differentiators({ content }: { content: AboutContent["different"] }) {
  return (
    <Section>
      <SectionHead eyebrow={content.eyebrow} title={content.title} />
      <ul className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
        {content.items.map((item, i) => (
          <li key={item.title} className="border-t border-line pt-6">
            <Reveal delay={i * 80}>
              <span aria-hidden="true" className="font-display text-lg text-accent tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-2xl sm:text-3xl">{item.title}</h3>
              <p className="mt-3 text-lg text-ink-soft">{item.text}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function ClinicSpace({ content }: { content: AboutContent["space"] }) {
  return (
    <Section tone="alt">
      <SectionHead eyebrow={content.eyebrow} title={content.title} lead={content.lead} />
      <div className="grid gap-5 sm:grid-cols-3">
        {content.photos.map((photo, i) =>
          photo.src ? (
            <div key={photo.src} className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius)]">
              <Image src={photo.src} alt={photo.label} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
            </div>
          ) : (
            <PhotoPlaceholder key={i} label={photo.label} surface />
          ),
        )}
      </div>
      <p className="mt-10 text-lg">
        <span className="font-semibold">{CLINIC.address}</span>
        <span className="mx-3 text-ink-soft" aria-hidden="true">
          ·
        </span>
        <L href={CLINIC.mapsHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary">
          {content.mapsLabel}
        </L>
      </p>
    </Section>
  );
}

export function Testimonials({ content }: { content: AboutContent["testimonials"] }) {
  return (
    <Section>
      <SectionHead eyebrow={content.eyebrow} title={content.title} lead={content.lead} />
      <ul className="grid gap-8 md:grid-cols-3">
        {content.items.map((t) => (
          <li key={t.name}>
            <VideoPlayer video={t.video} title={t.name} />
            <p className="mt-4 border-t border-line pt-4 font-display text-2xl">{t.name}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function RecommendedBy({ content }: { content: AboutContent["recommended"] }) {
  return (
    <Section tone="alt">
      <Eyebrow>{content.eyebrow}</Eyebrow>
      <h2 className="mb-8 text-3xl sm:text-4xl">{content.title}</h2>
      <RecommendedStrip names={content.names} placeholderLabel={content.placeholderLabel} />
    </Section>
  );
}
