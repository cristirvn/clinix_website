import { ButtonLink, Container, Eyebrow } from "@/components/ui/primitives";
import { EegTrace } from "@/components/home/EegTrace";
import type { HomeContent } from "@/content/pages/home";

/** Section 1 — one promise, main button (BrainMap) + quick-diagnostic button, four short facts. */
export function HomeHero({ hero }: { hero: HomeContent["hero"] }) {
  return (
    <section data-tone="default" className="bg-bg pb-16 pt-16 text-ink sm:pb-24 sm:pt-28">
      <Container>
        <Eyebrow>{hero.eyebrow}</Eyebrow>
        <h1 className="max-w-5xl text-[2.6rem] sm:text-6xl lg:text-7xl xl:text-[5.25rem]">{hero.title}</h1>
        <p className="mt-7 max-w-2xl text-lg text-ink-soft sm:text-xl">{hero.lead}</p>

        <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
          <ButtonLink href="/brainmap" size="lg" className="w-full sm:w-auto">
            {hero.cta}
          </ButtonLink>
          <ButtonLink href="/#diagnostic" variant="outline" size="lg" className="w-full sm:w-auto">
            {hero.secondary}
          </ButtonLink>
        </div>

        <EegTrace className="mt-14 h-14 sm:mt-20 sm:h-20" />

        <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 min-[420px]:grid-cols-2 lg:grid-cols-4">
          {hero.facts.map((fact) => (
            <li key={fact} className="flex items-start gap-3 text-base font-medium">
              <span
                aria-hidden="true"
                className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-accent text-xs font-bold text-on-accent"
              >
                ✓
              </span>
              <span>{fact}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
