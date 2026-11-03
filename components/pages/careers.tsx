import { ButtonLink, Card, Section, SectionHead } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { CareersForm } from "@/components/pages/CareersForm";
import { CLINIC } from "@/lib/site";
import type { CareersContent } from "@/content/careers/types";

export function CareersWhy({ content }: { content: CareersContent["why"] }) {
  return (
    <Section>
      <SectionHead eyebrow={content.eyebrow} title={content.title} />
      <ul className="grid gap-6 sm:grid-cols-2">
        {content.items.map((item, i) => (
          <li key={item.title}>
            <Reveal delay={(i % 2) * 60} className="h-full">
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

/** Open roles, or — while the list is empty — a friendly "send us your CV". */
export function CareersRoles({ content }: { content: CareersContent["roles"] }) {
  const mailto = `mailto:${CLINIC.email}`;
  return (
    <Section tone="alt">
      <SectionHead eyebrow={content.eyebrow} title={content.title} />
      {content.items.length > 0 ? (
        <ul className="space-y-6">
          {content.items.map((role) => (
            <li key={role.id}>
              <Card className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl">{role.title}</h3>
                  <p className="mt-2 text-[0.875rem] font-semibold uppercase tracking-[0.16em] text-accent">{role.meta}</p>
                  <p className="mt-3 max-w-2xl text-ink-soft">{role.text}</p>
                </div>
                <ButtonLink href="#aplica" className="flex-none">
                  {content.applyLabel}
                </ButtonLink>
              </Card>
            </li>
          ))}
        </ul>
      ) : (
        <Card className="max-w-3xl">
          <h3 className="text-2xl sm:text-3xl">{content.emptyTitle}</h3>
          <p className="mt-4 text-lg text-ink-soft">{content.emptyText}</p>
          <ButtonLink href={mailto} variant="outline" className="mt-8">
            {content.emailLabel}
          </ButtonLink>
          <p className="mt-4 text-ink-soft">{CLINIC.email}</p>
        </Card>
      )}
    </Section>
  );
}

export function CareersApply({ content, roles }: { content: CareersContent["form"]; roles: CareersContent["roles"]["items"] }) {
  return (
    <Section id="aplica" narrow>
      <Card>
        <CareersForm copy={content} roles={roles} email={CLINIC.email} />
      </Card>
    </Section>
  );
}
