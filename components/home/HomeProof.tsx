import { Container, Eyebrow } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import type { HomeContent } from "@/content/pages/home";

/** Section 5 — short proof: three patients on video, on the petrol band. */
export function HomeProof({ proof }: { proof: HomeContent["proof"] }) {
  return (
    <section data-tone="dark" className="bg-vital py-20 text-on-dark sm:py-28">
      <Container>
        <div className="mb-12 grid gap-6 sm:mb-16 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow index="03">{proof.eyebrow}</Eyebrow>
            <h2 className="text-[2.3rem] leading-[1.06] sm:text-[3.2rem] lg:text-[3.6rem]">{proof.title}</h2>
          </div>
          <p className="max-w-md text-lg text-on-dark-soft sm:text-xl lg:col-span-5 lg:justify-self-end lg:pb-2">{proof.lead}</p>
        </div>

        <ul className="grid gap-6 md:grid-cols-3 md:gap-5">
          {proof.testimonials.map((t, i) => (
            <li key={t.name}>
              <Reveal delay={i * 90}>
                <VideoPlayer video={t.video} title={`${t.name} — ${proof.caption}`} />
                <div className="mt-4 flex items-baseline justify-between gap-3 border-t border-line pt-4">
                  <p className="font-display text-[1.6rem] leading-none">{t.name}</p>
                  <p className="text-[0.95rem] text-on-dark-soft">{proof.caption}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        {proof.recommendedBy.length > 0 && (
          <div className="mt-20 border-t border-line pt-10 text-center">
            <p className="text-sm uppercase tracking-[0.16em] text-on-dark-soft">{proof.recommendedLabel}</p>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
              {proof.recommendedBy.map((r) => {
                const mark = r.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={r.logo} alt={r.name} className="h-10 w-auto opacity-80 brightness-0 invert transition hover:opacity-100" />
                ) : (
                  <span className="font-display text-xl text-on-dark-soft">{r.name}</span>
                );
                return (
                  <li key={r.name}>
                    {r.href ? (
                      <a href={r.href} target="_blank" rel="noopener noreferrer">
                        {mark}
                      </a>
                    ) : (
                      mark
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </Container>
    </section>
  );
}
