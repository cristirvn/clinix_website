import { Container, Eyebrow } from "@/components/ui/primitives";
import { L } from "@/components/ui/L";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/icons";
import type { HomeContent } from "@/content/pages/home";

/**
 * Section 6 — complex situations (ADHD, autism, Parkinson …). No panel, no
 * photo: a hairline on top, the heading on the left; the plain explanation,
 * the conditions as tags and two links on the right. It is a reassurance,
 * not a sales block.
 */
export function HomeComplex({ complex }: { complex: HomeContent["complex"] }) {
  return (
    <section id="situatii-complexe" className="scroll-mt-24 bg-bg pb-24 text-ink sm:pb-32">
      <Container>
        <Reveal>
          <div className="grid gap-8 border-t border-line pt-14 sm:pt-20 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Eyebrow>{complex.eyebrow}</Eyebrow>
              <h2 className="t-h2">{complex.title}</h2>
            </div>
            <div className="lg:col-span-7 lg:pt-12">
              <p className="t-lead max-w-[62ch]">{complex.text}</p>
              <ul className="mt-7 flex flex-wrap gap-2.5">
                {complex.tags.map((t) => (
                  <li key={t} className="rounded-full border border-line px-4 py-1.5 text-base font-medium">
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-x-8 gap-y-1">
                {complex.links.map((link) => (
                  <L
                    key={link.href}
                    href={link.href}
                    className="link-draw inline-flex min-h-11 items-center gap-1.5 text-lg font-semibold text-primary"
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
