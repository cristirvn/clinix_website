import Image from "next/image";
import { Section, SectionHead } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoPlaceholder } from "@/components/pages/shared";
import type { TeamContent } from "@/content/pages/ro/team";

export function TeamGrid({ content }: { content: TeamContent["members"] }) {
  return (
    <Section tone="alt">
      <SectionHead eyebrow={content.eyebrow} title={content.title} />
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
              <h3 className="mt-6 text-2xl">{m.name}</h3>
              <p className="mt-1 font-semibold text-accent">{m.role}</p>
              <p className="mt-3 text-ink-soft">{m.bio}</p>
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
      <SectionHead eyebrow={content.eyebrow} title={content.title} />
      <ul className="grid gap-10 md:grid-cols-3 md:gap-12">
        {content.points.map((p) => (
          <li key={p.title} className="border-t-2 border-accent pt-6">
            <h3 className="text-2xl">{p.title}</h3>
            <p className="mt-3 text-lg text-ink-soft">{p.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
