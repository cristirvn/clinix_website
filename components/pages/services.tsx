import { Card, CheckItem, Eyebrow, Faq, HeroPanel, Section, SectionHead } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { L } from "@/components/ui/L";
import { Photo } from "@/components/ui/Photo";
import { ArrowIcon } from "@/components/ui/icons";
import type { ImageKey } from "@/content/media";
import type { Locale } from "@/lib/i18n";

/** Stand-in photo per service (same as the home cards; shared media live in content/media.ts). */
const SERVICE_IMAGES: Record<string, ImageKey> = {
  brainmap: "scan",
  neurofeedback: "neurofeedback",
  tavns: "tavns",
  tpbm: "tpbm",
  ces: "portrait",
  psihoterapie: "consultCouch",
  emsella: "emsella",
};
import type { ServiceContent, ServicesIndexContent } from "@/content/services/types";

/** Service page top: title + lead, then the video straight away (the client's "video at the top"). */
export function ServiceHero({ service }: { service: ServiceContent }) {
  return (
    <HeroPanel narrow>
      <Eyebrow className="rise-in">{service.hero.eyebrow}</Eyebrow>
      <h1 className="rise-in text-[2.6rem] leading-[1.04] sm:text-6xl lg:text-7xl" style={{ animationDelay: "90ms" }}>
        {service.hero.title}
      </h1>
      <p className="rise-in mt-6 max-w-2xl text-lg text-on-dark-soft sm:text-xl" style={{ animationDelay: "180ms" }}>
        {service.hero.lead}
      </p>
      <div className="liquid-glass rise-in mt-10 rounded-[calc(var(--radius)+8px)] p-2 sm:mt-12" style={{ animationDelay: "260ms" }}>
        <VideoPlayer video={service.video} title={service.hero.videoTitle} />
      </div>
    </HeroPanel>
  );
}

export function ServiceWhat({ content }: { content: ServiceContent["what"] }) {
  return (
    <Section narrow>
      <SectionHead eyebrow={content.eyebrow} title={content.title} />
      <div className="space-y-5 text-lg text-ink-soft sm:text-xl">
        {content.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </Section>
  );
}

export function ServiceSession({ content }: { content: ServiceContent["session"] }) {
  return (
    <Section tone="alt">
      <SectionHead eyebrow={content.eyebrow} title={content.title} />
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <ol className="space-y-8">
          {content.steps.map((step, i) => (
            <li key={step.title}>
              <Reveal delay={i * 60} className="flex gap-5">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 flex-none items-center justify-center rounded-full border border-accent/50 bg-surface font-display text-[1.4rem] text-accent"
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
        <Card className="self-start">
          <ul className="space-y-4">
            {content.facts.map((f) => (
              <CheckItem key={f}>{f}</CheckItem>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}

export function ServiceHelps({
  content,
  conditions,
  linkLabel,
}: {
  content: ServiceContent["helps"];
  /** Already resolved for the locale: id + visible title. */
  conditions: Array<{ id: string; title: string }>;
  linkLabel: string;
}) {
  return (
    <Section>
      <SectionHead eyebrow={content.eyebrow} title={content.title} lead={content.lead} />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {conditions.map((c) => (
          <li key={c.id}>
            <L
              href={`/afectiuni-tratate#${c.id}`}
              className="group flex h-full flex-col justify-between gap-4 rounded-[var(--radius)] border border-line bg-surface p-6 transition duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[var(--shadow-card)]"
            >
              <span className="font-display text-[1.6rem] leading-tight">{c.title}</span>
              <span className="inline-flex items-center gap-2 font-semibold text-primary">
                {linkLabel}
                <ArrowIcon size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </L>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-ink-soft">{content.note}</p>
    </Section>
  );
}

export function ServiceSafety({ content }: { content: ServiceContent["safety"] }) {
  return (
    <Section tone="alt">
      <SectionHead eyebrow={content.eyebrow} title={content.title} />
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <ul className="space-y-4 text-lg">
          {content.points.map((p) => (
            <CheckItem key={p}>{p}</CheckItem>
          ))}
        </ul>
        {content.notFor.length > 0 && (
          <div>
            <h3 className="text-[1.7rem]">{content.notTitle}</h3>
            <ul className="mt-6 space-y-4 text-lg">
              {content.notFor.map((p) => (
                <CheckItem key={p} negative>
                  {p}
                </CheckItem>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Section>
  );
}

export function ServiceFaq({ content }: { content: ServiceContent["faq"] }) {
  return (
    <Section narrow>
      <SectionHead eyebrow={content.eyebrow} title={content.title} />
      <Faq items={content.items} openFirst />
    </Section>
  );
}

/** `/servicii` — one card per service. */
export function ServiceCards({ index, services, locale }: { index: ServicesIndexContent; services: ServiceContent[]; locale: Locale }) {
  return (
    <Section tone="alt">
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <li key={s.slug}>
            <Reveal delay={i * 60} className="h-full">
              <L
                href={`/servicii/${s.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[var(--radius)] border border-line bg-surface text-ink transition duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[var(--shadow-card)]"
              >
                {SERVICE_IMAGES[s.slug] && (
                  <div className="relative aspect-[16/10] overflow-hidden bg-bg-alt">
                    <div className="absolute inset-0">
                      <Photo image={SERVICE_IMAGES[s.slug]} locale={locale} width={800} className="zoom-media" />
                    </div>
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="text-[0.875rem] font-semibold uppercase tracking-[0.16em] text-accent">{s.hero.eyebrow}</p>
                  <h2 className="mt-2 text-[2.1rem] leading-none">{s.card.name}</h2>
                  <p className="mt-3 flex-1 text-ink-soft">{s.card.short}</p>
                  <span className="mt-7 inline-flex min-h-11 items-center gap-2 self-start rounded-full border border-primary/30 px-5 py-2 font-semibold text-primary transition group-hover:border-primary group-hover:bg-primary group-hover:text-on-primary">
                    {index.cardLink}
                    <ArrowIcon size={16} />
                  </span>
                </div>
              </L>
            </Reveal>
          </li>
        ))}
      </ul>
      {index.elsewhere && (
      <p className="mt-12 text-lg text-ink-soft">
        {index.elsewhere.text}{" "}
        <L href={index.elsewhere.link.href} className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary">
          {index.elsewhere.link.label}
        </L>
      </p>
      )}
    </Section>
  );
}
