import { Container, buttonClass } from "@/components/ui/primitives";
import { L } from "@/components/ui/L";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { Emph } from "@/components/ui/Emph";
import { ArrowIcon } from "@/components/ui/icons";
import type { HomeContent } from "@/content/pages/home";
import type { Locale } from "@/lib/i18n";

type Service = HomeContent["services"]["items"][number];

/**
 * Section 3 — the methods ("the tools"), picture-led. Neurofeedback is the
 * tall featured card (brain training); the four other methods are photo
 * tiles beside it, 2×2: the name, plus one plain line from the tablet up.
 * BrainMap has its own section next ("how to start").
 */
export function HomeServices({ services, locale }: { services: HomeContent["services"]; locale: Locale }) {
  const [featured, ...rest] = services.items;
  return (
    <section id="servicii" className="scroll-mt-24 bg-bg py-24 text-ink sm:py-32">
      <Container>
        <div className="mb-12 max-w-3xl sm:mb-16">
          <h2 className="text-[2.4rem] leading-[1.04] sm:text-[3.4rem] lg:text-[4rem]">
            <Emph text={services.title} />
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft sm:text-xl">{services.lead}</p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:gap-5 lg:grid-cols-12">
          <Reveal className="min-w-0 lg:col-span-5">
            <FeaturedCard service={featured} badge={services.featuredBadge} more={services.more} locale={locale} />
          </Reveal>
          <ul className="grid min-w-0 grid-cols-2 gap-3 sm:gap-5 lg:col-span-7">
            {rest.map((s, i) => (
              <li key={s.slug} className="min-w-0">
                <Reveal delay={i * 80} className="h-full">
                  <ServiceTile service={s} more={services.more} locale={locale} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 flex flex-col gap-2 text-lg sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4">
          <span className="text-ink-soft">{services.toolsLine}</span>
          <L
            href="/neurofit"
            className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-primary underline decoration-primary/30 underline-offset-4 transition hover:decoration-primary"
          >
            {services.toolsLink}
            <ArrowIcon size={16} />
          </L>
        </p>
      </Container>
    </section>
  );
}

function FeaturedCard({ service, badge, more, locale }: { service: Service; badge: string; more: string; locale: Locale }) {
  return (
    <L
      href={`/servicii/${service.slug}`}
      data-tone="dark"
      className="group relative isolate flex h-full min-h-[27rem] flex-col justify-end overflow-hidden rounded-[var(--radius)] bg-dark p-6 text-on-dark sm:min-h-[36rem] sm:p-10"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-20">
        <Photo image={service.image} locale={locale} width={1100} className="zoom-media object-[60%_center]" />
      </div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-t from-dark via-dark/55 to-dark/5" />

      <span className="liquid-glass absolute left-5 top-5 rounded-full px-4 py-2 text-[0.875rem] font-semibold uppercase tracking-[0.16em] sm:left-8 sm:top-8">
        {badge}
      </span>

      <h3 className="text-[2.1rem] leading-none min-[400px]:text-[2.4rem] sm:text-[3.4rem] lg:text-[3rem] xl:text-[3.5rem]">{service.title}</h3>
      <p className="mt-3 text-lg text-on-dark/90">{service.eyebrow}</p>
      <span className={buttonClass("cta", "md", "mt-7 self-start")}>
        {more}
        <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </L>
  );
}

function ServiceTile({ service, more, locale }: { service: Service; more: string; locale: Locale }) {
  return (
    <L
      href={`/servicii/${service.slug}`}
      data-tone="dark"
      aria-label={`${service.title} — ${service.eyebrow}. ${more}`}
      className="group relative isolate flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[var(--radius)] bg-dark p-3.5 text-on-dark sm:aspect-auto sm:h-full sm:min-h-[17rem] sm:p-6"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-20">
        <Photo image={service.image} locale={locale} width={700} className="zoom-media" />
      </div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-t from-dark via-dark/45 to-dark/0" />

      <span aria-hidden="true" className="lg lg-smoke absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full sm:right-5 sm:top-5">
        <ArrowIcon size={17} className="-rotate-45 transition-transform duration-500 group-hover:rotate-0" />
      </span>

      <h3 className="text-[1.2rem] leading-none min-[400px]:text-[1.5rem] sm:text-[2.4rem]">{service.title}</h3>
      <p className="mt-2 hidden text-base leading-snug text-on-dark/85 sm:block">{service.eyebrow}</p>
    </L>
  );
}
