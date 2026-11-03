import { ButtonLink, Card, Section } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { L } from "@/components/ui/L";
import type { ConditionItem, ConditionsContent } from "@/content/conditions/types";

/** One condition: description, the services that help, then ONE main step (test, or the LP when there is no test). */
function ConditionCard({
  item,
  description,
  ui,
  serviceNames,
}: {
  item: ConditionItem;
  description: string;
  ui: ConditionsContent["ui"];
  serviceNames: Record<string, string>;
}) {
  return (
    <Card className="flex h-full flex-col">
      <h2 className="text-[2rem] leading-[1.08] sm:text-[2.5rem]">{item.title}</h2>
      <p className="mt-4 text-lg text-ink-soft">{description}</p>
      {item.services.length > 0 && (
        <div className="mt-6">
          <p className="text-[0.875rem] font-semibold uppercase tracking-[0.18em] text-accent">{ui.servicesLabel}</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {item.services.map((s) => (
              <li key={s}>
                <L
                  href={`/servicii/${s}`}
                  className="inline-flex min-h-11 items-center rounded-full border border-line bg-bg px-4 text-[0.95rem] font-semibold transition hover:border-primary hover:text-primary"
                >
                  {serviceNames[s]}
                </L>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="mt-auto flex flex-col gap-4 pt-8 sm:flex-row sm:items-center sm:gap-6">
        {item.quiz ? (
          <>
            <ButtonLink href={`/chestionare/${item.quiz}`}>{ui.takeTest}</ButtonLink>
            {item.lp && (
              <ButtonLink href={item.lp} variant="ghost">
                {ui.lpLink}
              </ButtonLink>
            )}
          </>
        ) : (
          item.lp && <ButtonLink href={item.lp}>{ui.lpPrimary}</ButtonLink>
        )}
      </div>
    </Card>
  );
}

export function ConditionList({
  content,
  descriptions,
  serviceNames,
}: {
  content: ConditionsContent;
  descriptions: Record<string, string>;
  serviceNames: Record<string, string>;
}) {
  return (
    <Section tone="alt" className="!pt-14 sm:!pt-20">
      <ul className="grid gap-6 lg:grid-cols-2">
        {content.items.map((item, i) => (
          <li key={item.id} id={item.id} className="scroll-mt-28">
            <Reveal delay={(i % 2) * 60} className="h-full">
              <ConditionCard item={item} description={descriptions[item.id]} ui={content.ui} serviceNames={serviceNames} />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/** "Not sure which one?" → the one-question triage at /evaluare. */
export function NotSureBand({
  content,
  disclaimer,
}: {
  content: { title: string; text: string; button: string };
  disclaimer: string;
}) {
  return (
    <Section narrow className="text-center">
      <h2 className="text-[2.2rem] leading-[1.06] sm:text-[3.2rem]">{content.title}</h2>
      <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-soft sm:text-xl">{content.text}</p>
      <ButtonLink href="/evaluare" variant="outline" size="lg" className="mt-8">
        {content.button}
      </ButtonLink>
      <p className="mx-auto mt-12 max-w-2xl text-sm text-ink-soft">{disclaimer}</p>
    </Section>
  );
}
