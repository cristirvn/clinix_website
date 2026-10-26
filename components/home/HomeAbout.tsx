import { ButtonLink, Eyebrow, Section } from "@/components/ui/primitives";
import { Photo } from "@/components/ui/Photo";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import type { HomeContent } from "@/content/pages/home";
import type { Locale } from "@/lib/i18n";

/** Section 4a — who we are: one large white panel (photo + statement), soft shadow on the tinted band. */
export function HomeAbout({ about, locale }: { about: HomeContent["about"]; locale: Locale }) {
  return (
    <Section tone="alt">
      <div className="overflow-hidden rounded-[36px] bg-surface shadow-[var(--shadow-soft)]">
        <div className="grid items-stretch lg:grid-cols-2">
          <div className="relative aspect-[4/3] lg:aspect-auto">
            <div className="absolute inset-0">
              <Photo image="consult" locale={locale} width={1200} />
            </div>
          </div>
          <div className="px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <Eyebrow>{about.eyebrow}</Eyebrow>
            <h2 className="text-[2.5rem] sm:text-6xl lg:text-[4rem]">{about.title}</h2>
            <div className="mt-6 space-y-4 text-lg text-ink-soft sm:text-xl">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <ButtonLink href="/despre-noi" variant="outline" className="mt-9 w-full text-primary sm:w-auto">
              {about.link}
            </ButtonLink>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:mt-8 sm:gap-6">
        <div className="aspect-[4/3] overflow-hidden rounded-[var(--radius)]">
          <Photo image="scan" locale={locale} width={900} />
        </div>
        <div className="aspect-[4/3] overflow-hidden rounded-[var(--radius)]">
          <Photo image="neurofeedback" locale={locale} width={900} />
        </div>
      </div>
    </Section>
  );
}

/** Section 4b — who recommends us: video testimonials on the plum band. */
export function HomeProof({ proof }: { proof: HomeContent["proof"] }) {
  return (
    <Section tone="dark">
      <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-20">
        <Eyebrow>{proof.eyebrow}</Eyebrow>
        <h2 className="text-[2.2rem] sm:text-5xl lg:text-[3.5rem]">{proof.title}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-on-dark-soft sm:text-xl">{proof.lead}</p>
      </div>

      <ul className="grid gap-5 md:grid-cols-3">
        {proof.testimonials.map((t) => (
          <li key={t.name} className="glass rounded-[calc(var(--radius)+6px)] p-2.5">
            <VideoPlayer video={t.video} title={`${t.name} — ${proof.caption}`} />
            <div className="flex items-center justify-between gap-3 px-3 pb-2 pt-4">
              <p className="font-display text-2xl">{t.name}</p>
              <p className="text-sm text-on-dark-soft">{proof.caption}</p>
            </div>
          </li>
        ))}
      </ul>

      {proof.recommendedBy.length > 0 && (
        <div className="mt-20 text-center">
          <p className="text-sm uppercase tracking-[0.14em] text-on-dark-soft">{proof.recommendedLabel}</p>
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
    </Section>
  );
}
