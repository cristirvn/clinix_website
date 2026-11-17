import Image from "next/image";
import { Section, SectionHead } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoPlaceholder } from "@/components/pages/shared";
import { L } from "@/components/ui/L";
import type { TeamContent } from "@/content/pages/ro/team";

export function TeamGrid({ content }: { content: TeamContent["members"] }) {
  return (
    <Section tone="alt">
      <SectionHead title={content.title} />
      <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {content.items.map((m, i) => (
          <li key={`${m.role}-${i}`}>
            <Reveal delay={i * 80}>
              {m.photo ? (
                <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius)]">
                  <Image src={m.photo} alt={m.name} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                </div>
              ) : (
                <PhotoPlaceholder label={content.photoPlaceholder} aspect="aspect-[4/5]" surface />
              )}
              <h3 className="mt-6 text-[1.7rem] leading-tight">{m.name}</h3>
              <p className="mt-1.5 text-[0.875rem] font-semibold text-accent">{m.role}</p>
              <p className="mt-3 text-ink-soft">{m.bio}</p>
              {m.focus && m.focus.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={content.focusLabel}>
                  {m.focus.map((f) => (
                    <li key={f} className="rounded-full bg-surface px-3 py-1 text-[0.8rem] font-semibold text-ink-soft ring-1 ring-line">
                      {f}
                    </li>
                  ))}
                </ul>
              )}
              {m.href && (
                <L
                  href={m.href}
                  className="mt-4 inline-flex min-h-11 items-center font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
                >
                  {content.more}
                </L>
              )}
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function WorkTogether({ content }: { content: TeamContent["together"] }) {
  return (
    <Section>
      <SectionHead title={content.title} />
      <ul className="grid gap-10 md:grid-cols-3 md:gap-12">
        {content.points.map((p, i) => (
          <li key={p.title} className="border-t border-line pt-6">
            <span aria-hidden="true" className="font-display text-lg text-accent tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-2xl">{p.title}</h3>
            <p className="mt-3 text-lg text-ink-soft">{p.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
