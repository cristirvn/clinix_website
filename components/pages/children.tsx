import { Card, CheckItem, Eyebrow, Section, SectionHead } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import type { ChildrenContent } from "@/content/children/types";

export function ChildSigns({ content }: { content: ChildrenContent["signs"] }) {
  return (
    <Section>
      <SectionHead eyebrow={content.eyebrow} title={content.title} lead={content.lead} />
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {content.items.map((item, i) => (
          <li key={item.title}>
            <Reveal delay={(i % 3) * 60} className="h-full">
              <Card className="h-full">
                <h3 className="text-2xl">{item.title}</h3>
                <p className="mt-3 text-ink-soft">{item.text}</p>
              </Card>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function ChildCheck({ content }: { content: ChildrenContent["check"] }) {
  return (
    <Section tone="alt">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <h2 className="text-[2.1rem] sm:text-5xl">{content.title}</h2>
          <div className="mt-6 space-y-4 text-lg text-ink-soft">
            {content.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <ul className="mt-8 space-y-3 text-lg">
            {content.points.map((p) => (
              <CheckItem key={p}>{p}</CheckItem>
            ))}
          </ul>
        </div>
        <Reveal>
          <VideoPlayer video={content.video} title={content.videoTitle} />
        </Reveal>
      </div>
    </Section>
  );
}

export function ChildParents({ content }: { content: ChildrenContent["parents"] }) {
  return (
    <Section>
      <SectionHead eyebrow={content.eyebrow} title={content.title} />
      <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {content.steps.map((step, i) => (
          <li key={step.title}>
            <Reveal delay={i * 60} className="flex gap-5 lg:block">
              <span
                aria-hidden="true"
                className="flex h-12 w-12 flex-none items-center justify-center rounded-full border border-accent/50 bg-surface font-display text-[1.4rem] text-accent lg:mb-5"
              >
                {i + 1}
              </span>
              <div>
                <h3 className="text-xl sm:text-2xl">{step.title}</h3>
                <p className="mt-2 text-ink-soft">{step.text}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function ChildSafety({ content }: { content: ChildrenContent["safety"] }) {
  return (
    <Section tone="alt" narrow>
      <SectionHead eyebrow={content.eyebrow} title={content.title} />
      <ul className="space-y-4 text-lg">
        {content.points.map((p) => (
          <CheckItem key={p}>{p}</CheckItem>
        ))}
      </ul>
    </Section>
  );
}
