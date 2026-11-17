import { Container, SectionHead } from "@/components/ui/primitives";
import { L } from "@/components/ui/L";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { Rail } from "@/components/ui/Rail";
import { SpotRim } from "@/components/ui/PointerSpotlight";
import { Emph } from "@/components/ui/Emph";
import { ArrowIcon } from "@/components/ui/icons";
import type { HomeContent } from "@/content/pages/home";
import type { Locale } from "@/lib/i18n";

type Service = HomeContent["services"]["items"][number];

/*
 * Bento placement from 1024px (6 columns × 3 rows): Neurofeedback is the big
 * square, two tall tiles beside it, two wide tiles along the foot.
 */
const BENTO = [
  "lg:col-span-4 lg:row-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-3",
  "lg:col-span-3",
];

/**
 * Section 2 — the methods ("the tools"), picture-led.
 * Phones: a swipeable rail of big photo cards (the next one peeks in), with
 * a progress pill. From 1024px: a bento grid; the cards carry a light that
 * follows the mouse (spotlight + rim) and the photo leans in on hover.
 */
export function HomeServices({ services, locale }: { services: HomeContent["services"]; locale: Locale }) {
  return (
    <section id="servicii" className="relative isolate scroll-mt-24 overflow-hidden bg-bg py-24 text-ink sm:py-32">
      <div aria-hidden="true" className="dot-grid absolute inset-x-0 top-0 -z-10 h-[34rem]" />
      <Container>
        <SectionHead title={<Emph text={services.title} />} lead={services.lead} />

        <Reveal>
          <Rail label={services.title.replace(/\*/g, "")} className="lg:!m-0 lg:grid lg:auto-rows-[17.5rem] lg:grid-cols-6 lg:gap-4 lg:overflow-visible lg:!p-0 xl:auto-rows-[19rem]" dotsClassName="lg:hidden">
            {services.items.map((s, i) => (
              <li key={s.slug} className={`w-[80%] min-[480px]:w-[58%] sm:w-[44%] lg:w-auto ${BENTO[i] ?? "lg:col-span-2"}`}>
                <ServiceCard service={s} featured={i === 0} badge={services.featuredBadge} more={services.more} locale={locale} />
              </li>
            ))}
          </Rail>
        </Reveal>

        <p className="mt-10 flex flex-col gap-2 rounded-[var(--radius-media)] border border-line bg-bg-alt/60 px-6 py-5 text-lg sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-6">
          <span className="text-ink-soft">{services.toolsLine}</span>
          <L href="/neurofit" className="link-draw inline-flex min-h-11 items-center gap-1.5 self-start font-semibold text-primary sm:self-auto">
            {services.toolsLink}
            <ArrowIcon size={16} />
          </L>
        </p>
      </Container>
    </section>
  );
}

function ServiceCard({ service, featured, badge, more, locale }: { service: Service; featured: boolean; badge: string; more: string; locale: Locale }) {
  return (
    <L
      href={`/servicii/${service.slug}`}
      data-tone="dark"
      className="spotlight group press @container relative isolate flex aspect-[4/5] h-full flex-col justify-end overflow-hidden rounded-[var(--radius-media)] bg-dark p-5 text-on-dark shadow-[var(--shadow-lift)] sm:p-7 lg:aspect-auto"
    >
      <SpotRim />
      <div aria-hidden="true" className="absolute inset-0 -z-20">
        <Photo image={service.image} locale={locale} width={featured ? 1200 : 800} className="zoom-media object-[60%_center]" />
      </div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-t from-dark via-dark/45 to-dark/0" />

      <div className="absolute inset-x-5 top-5 flex items-start justify-between gap-3 sm:inset-x-7 sm:top-7">
        {featured ? <span className="media-chip">{badge}</span> : <span />}
        <span
          aria-hidden="true"
          className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-white/30 bg-dark/30 backdrop-blur-md transition-[background-color,border-color,color] duration-300 group-hover:border-transparent group-hover:bg-cta group-hover:text-on-cta"
        >
          <ArrowIcon size={17} className="-rotate-45 transition-transform duration-500 group-hover:rotate-0" />
        </span>
      </div>

      <h3 className={`leading-none tracking-[-0.03em] ${featured ? "text-[length:min(4.6rem,12.5cqi)]" : "text-[length:min(2.4rem,15cqi)]"}`}>{service.title}</h3>
      <p className={`mt-2.5 max-w-sm leading-snug text-on-dark/85 ${featured ? "text-lg sm:text-xl" : "text-base sm:text-lg"}`}>{service.eyebrow}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-base font-semibold text-accent lg:sr-only">
        {more}
        <ArrowIcon size={15} />
      </span>
    </L>
  );
}
