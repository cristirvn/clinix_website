import { ButtonLink, CheckItem, Eyebrow, Section, SectionHead } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { RecommendedStrip } from "@/components/pages/shared";
import type { HowItWorksContent } from "@/content/pages/ro/how-it-works";

/** The five-step patient journey as a numbered list (vertical on phones, five columns on desktop). */
export function JourneySteps({ content }: { content: HowItWorksContent["journey"] }) {
  return (
    <Section tone="alt">
      <SectionHead title={content.title} />
      <ol className="grid gap-8 lg:grid-cols-5 lg:gap-6">
        {content.steps.map((step, i) => (
          <li key={step.title} className="border-t border-line pt-6">
            <Reveal delay={i * 80} className="flex gap-5 lg:block">
              <span
                aria-hidden="true"
                className="w-11 flex-none pt-0.5 font-display text-[1.6rem] font-semibold leading-none tabular-nums text-accent lg:mb-5 lg:block"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-xl">{step.title}</h3>
                <p className="mt-3 text-ink-soft">{step.text}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}

type Service = HowItWorksContent["services"]["items"][number];

/** One service / equipment: video on one side, plain explanation + "what it feels like" on the other. */
function ServiceBlock({ service, feelsTitle, flip }: { service: Service; feelsTitle: string; flip: boolean }) {
  return (
    <article id={service.id} className="scroll-mt-24 grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
      <Reveal className={flip ? "lg:order-2" : ""}>
        <VideoPlayer video={service.video} title={service.videoTitle} />
      </Reveal>
      <div>
        <Eyebrow>{service.eyebrow}</Eyebrow>
        <h3 className="text-3xl sm:text-4xl">{service.title}</h3>
        <div className="mt-6 space-y-4 text-lg text-ink-soft">
          {service.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <p className="mt-8 text-[0.875rem] font-semibold text-accent">{feelsTitle}</p>
        <ul className="mt-4 space-y-3">
          {service.feels.map((f) => (
            <CheckItem key={f}>{f}</CheckItem>
          ))}
        </ul>
        {service.link && (
          <ButtonLink href={service.link.href} variant="outline" className="mt-8">
            {service.link.label}
          </ButtonLink>
        )}
      </div>
    </article>
  );
}

export function ServiceBlocks({ content }: { content: HowItWorksContent["services"] }) {
  return (
    <Section>
      <SectionHead title={content.title} lead={content.lead} />
      <div className="space-y-24 sm:space-y-32">
        {content.items.map((service, i) => (
          <ServiceBlock key={service.id} service={service} feelsTitle={content.feelsTitle} flip={i % 2 === 1} />
        ))}
      </div>
    </Section>
  );
}

export function AboutTeaser({ content }: { content: HowItWorksContent["about"] }) {
  return (
    <Section tone="alt">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-16">
        <div>
          <h2 className="text-[2.1rem] sm:text-5xl">{content.title}</h2>
          <p className="mt-5 text-lg text-ink-soft sm:text-xl">{content.text}</p>
          <ButtonLink href={content.link.href} variant="ghost" className="mt-8 text-lg">
            {content.link.label}
          </ButtonLink>
        </div>
        <div>
          <p className="mb-4 text-[0.875rem] font-semibold text-ink-soft">{content.recommendedTitle}</p>
          <RecommendedStrip names={content.recommendedBy} placeholderLabel={content.placeholderLabel} />
        </div>
      </div>
    </Section>
  );
}
