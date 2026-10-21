import { ButtonLink, Section } from "@/components/ui/primitives";
import { EegTrace } from "@/components/home/EegTrace";
import type { HomeContent } from "@/content/pages/home";

/** Closing dark band — the same single action as the hero. */
export function FinalCta({ final }: { final: HomeContent["final"] }) {
  return (
    <Section tone="dark" className="text-center">
      <h2 className="mx-auto max-w-4xl text-[2.3rem] sm:text-6xl">{final.title}</h2>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-on-dark-soft sm:text-xl">{final.lead}</p>
      <div className="mt-10">
        <ButtonLink href="/brainmap" variant="light" size="lg" className="w-full sm:w-auto">
          {final.cta}
        </ButtonLink>
      </div>
      <p className="mt-5 text-on-dark-soft">{final.note}</p>
      <EegTrace className="mx-auto mt-14 h-12 max-w-3xl opacity-60" />
    </Section>
  );
}
