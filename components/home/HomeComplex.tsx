import { Container, Eyebrow } from "@/components/ui/primitives";
import { L } from "@/components/ui/L";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/icons";
import type { HomeContent } from "@/content/pages/home";

/**
 * Section 6 — complex situations (ADHD, autism, Parkinson …). One calm
 * pale-blue panel: the heading on the left; the plain explanation, the
 * conditions as tags and two links on the right. No photo: it is a
 * reassurance, not a sales block.
 */
export function HomeComplex({ complex }: { complex: HomeContent["complex"] }) {
  return (
    <section id="situatii-complexe" className="scroll-mt-24 bg-bg pb-24 text-ink sm:pb-32">
      <Container>
        <Reveal>
          <div className="grid gap-8 rounded-[28px] border border-line bg-bg-alt px-6 py-10 sm:rounded-[36px] sm:px-12 sm:py-14 lg:grid-cols-12 lg:gap-14 lg:px-16 lg:py-16">
            <div className="lg:col-span-5">
              <Eyebrow>{complex.eyebrow}</Eyebrow>
              <h2 className="text-[2.2rem] leading-[1.05] sm:text-[3rem]">{complex.title}</h2>
            </div>
            <div className="lg:col-span-7 lg:pt-12">
              <p className="text-lg sm:text-xl">{complex.text}</p>
              <ul className="mt-7 flex flex-wrap gap-2.5">
                {complex.tags.map((t) => (
                  <li key={t} className="rounded-full border border-line bg-surface px-4 py-2 text-base font-medium">
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-x-8 gap-y-1">
                {complex.links.map((link) => (
                  <L
                    key={link.href}
                    href={link.href}
                    className="inline-flex min-h-11 items-center gap-1.5 text-lg font-semibold text-primary underline decoration-primary/30 underline-offset-4 transition hover:decoration-primary"
                  >
                    {link.label}
                    <ArrowIcon size={16} />
                  </L>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
