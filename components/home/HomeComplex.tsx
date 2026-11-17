import { Container, Eyebrow } from "@/components/ui/primitives";
import { L } from "@/components/ui/L";
import { Reveal } from "@/components/ui/Reveal";
import { SpotRim } from "@/components/ui/PointerSpotlight";
import { ArrowIcon } from "@/components/ui/icons";
import type { HomeContent } from "@/content/pages/home";

/**
 * Section 6 — complex situations (ADHD, autism, Parkinson …). A reassurance,
 * not a sales block: one raised card — heading on the left; the plain
 * explanation, the conditions as tags and two links (as big tappable rows)
 * on the right. Light follows the mouse on desktop.
 */
export function HomeComplex({ complex }: { complex: HomeContent["complex"] }) {
  return (
    <section id="situatii-complexe" className="scroll-mt-24 bg-bg py-24 text-ink sm:py-32">
      <Container>
        <Reveal>
          <div className="spotlight relative grid gap-8 overflow-hidden rounded-[var(--radius-panel)] border border-line bg-surface p-6 shadow-[var(--shadow-lift)] sm:p-12 lg:grid-cols-12 lg:gap-14 lg:p-16">
            <SpotRim />
            <div className="lg:col-span-5">
              <Eyebrow>{complex.eyebrow}</Eyebrow>
              <h2 className="t-h2">{complex.title}</h2>
            </div>
            <div className="relative z-[3] lg:col-span-7 lg:pt-14">
              <p className="t-lead max-w-[62ch]">{complex.text}</p>
              <ul className="mt-7 flex flex-wrap gap-2.5">
                {complex.tags.map((t) => (
                  <li key={t} className="rounded-full bg-bg-alt px-4 py-2 text-base font-semibold text-primary">
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-8 grid gap-2 border-t border-line pt-6 sm:grid-cols-2 sm:gap-3">
                {complex.links.map((link) => (
                  <L
                    key={link.href}
                    href={link.href}
                    className="press group flex min-h-14 items-center justify-between gap-3 rounded-[var(--radius)] border border-line px-5 py-3 text-lg font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
                  >
                    {link.label}
                    <span aria-hidden="true" className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-bg-alt text-primary transition-colors group-hover:bg-cta group-hover:text-on-cta">
                      <ArrowIcon size={16} />
                    </span>
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
