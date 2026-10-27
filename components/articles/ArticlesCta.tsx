import { ButtonLink, Section } from "@/components/ui/primitives";
import type { ArticlesCopy } from "@/content/articles";

/** Closing navy band on the articles pages: the one next step (BrainMap). */
export function ArticlesCta({ copy }: { copy: ArticlesCopy }) {
  return (
    <Section tone="dark" narrow className="text-center">
      <h2 className="text-[2.4rem] sm:text-6xl">{copy.cta.title}</h2>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-on-dark-soft sm:text-xl">{copy.cta.lead}</p>
      <ButtonLink href="/brainmap" size="lg" className="mt-10 w-full sm:w-auto">
        {copy.cta.button}
      </ButtonLink>
    </Section>
  );
}
