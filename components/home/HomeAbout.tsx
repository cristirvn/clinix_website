import { ButtonLink, Eyebrow, Section } from "@/components/ui/primitives";
import { Photo } from "@/components/ui/Photo";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import type { HomeContent } from "@/content/pages/home";
import type { Locale } from "@/lib/i18n";

/** Section 5a — who we are: centred statement with a staggered row of photos. */
export function HomeAbout({ about, locale }: { about: HomeContent["about"]; locale: Locale }) {
  return (
    <Section>
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>{about.eyebrow}</Eyebrow>
        <h2 className="text-[2.2rem] sm:text-5xl lg:text-[3.5rem]">{about.title}</h2>
        <div className="mx-auto mt-6 max-w-xl space-y-4 text-lg text-ink-soft sm:text-xl">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <ButtonLink href="/despre-noi" variant="outline" className="mt-9">
          {about.link}
        </ButtonLink>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-3 sm:mt-20 sm:grid-cols-3 sm:gap-6">
        <div className="aspect-[4/5] overflow-hidden rounded-[var(--radius)] sm:mt-24">
          <Photo image="scan" locale={locale} width={800} />
        </div>
        <div className="aspect-[4/5] overflow-hidden rounded-[var(--radius)] sm:mt-0">
          <Photo image="consult" locale={locale} width={800} />
        </div>
        <div className="col-span-2 aspect-[16/9] overflow-hidden rounded-[var(--radius)] sm:col-span-1 sm:mt-12 sm:aspect-[4/5]">
          <Photo image="neurofeedback" locale={locale} width={800} />
        </div>
      </div>
    </Section>
  );
}

/** Section 5b — who recommends us: video testimonials on the blue band. */
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
