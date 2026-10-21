import { Eyebrow, Section, buttonClass } from "@/components/ui/primitives";
import { L } from "@/components/ui/L";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import type { HomeContent } from "@/content/pages/home";

/** Section 5 — who we are (teaser) + who recommends us (video testimonials, partners strip). */
export function HomeAbout({ about, proof }: { about: HomeContent["about"]; proof: HomeContent["proof"] }) {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <Eyebrow>{about.eyebrow}</Eyebrow>
          <h2 className="text-[2.1rem] sm:text-5xl">{about.title}</h2>
        </div>
        <div className="space-y-5 text-lg text-ink-soft sm:text-xl lg:col-span-6 lg:pt-10">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p className="pt-2">
            <L href="/despre-noi" className={buttonClass("ghost", "md", "text-ink")}>
              {about.link}
            </L>
          </p>
        </div>
      </div>

      <div className="mt-24 border-t border-line pt-20 sm:mt-32 sm:pt-28">
        <div className="mb-12 max-w-3xl sm:mb-16">
          <Eyebrow>{proof.eyebrow}</Eyebrow>
          <h2 className="text-[2.1rem] sm:text-5xl">{proof.title}</h2>
          <p className="mt-5 text-lg text-ink-soft sm:text-xl">{proof.lead}</p>
        </div>

        <ul className="grid gap-10 md:grid-cols-3 md:gap-6">
          {proof.testimonials.map((t) => (
            <li key={t.name}>
              <VideoPlayer video={t.video} title={`${t.name} — ${proof.caption}`} />
              <p className="mt-4 font-display text-2xl">{t.name}</p>
              <p className="text-ink-soft">{proof.caption}</p>
            </li>
          ))}
        </ul>

        {proof.recommendedBy.length > 0 && (
          <div className="mt-20 text-center">
            <p className="text-[0.8rem] font-bold uppercase tracking-[0.18em] text-ink-soft">{proof.recommendedLabel}</p>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
              {proof.recommendedBy.map((r) => {
                const mark = r.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={r.logo} alt={r.name} className="h-10 w-auto opacity-70 grayscale transition hover:opacity-100" />
                ) : (
                  <span className="font-display text-xl text-ink-soft">{r.name}</span>
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
      </div>
    </Section>
  );
}
