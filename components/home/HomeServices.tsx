import { Container, Eyebrow } from "@/components/ui/primitives";
import { L } from "@/components/ui/L";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { Emph } from "@/components/ui/Emph";
import { ArrowIcon } from "@/components/ui/icons";
import type { HomeContent } from "@/content/pages/home";
import type { Locale } from "@/lib/i18n";

type Service = HomeContent["services"]["items"][number];

/**
 * Section 3 — five services without a cramped row of five: BrainMap is the
 * tall featured card (it is where everyone starts), the four treatments sit
 * beside it in a 2×2 grid. On phones the four become slim rows (thumbnail +
 * text) so the section stays short and easy to scan.
 */
export function HomeServices({ services, locale }: { services: HomeContent["services"]; locale: Locale }) {
  const [featured, ...rest] = services.items;
  return (
    <section id="servicii" className="scroll-mt-24 bg-bg pb-20 pt-16 text-ink sm:pb-28 sm:pt-24">
      <Container>
        <div className="mb-10 grid gap-6 sm:mb-14 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow index="01">{services.eyebrow}</Eyebrow>
            <h2 className="text-[2.4rem] leading-[1.05] sm:text-[3.4rem] lg:text-[4rem]">
              <Emph text={services.title} />
            </h2>
          </div>
          <p className="max-w-md text-lg text-ink-soft sm:text-xl lg:col-span-5 lg:justify-self-end lg:pb-2">{services.lead}</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-12 lg:gap-6">
          <Reveal className="min-w-0 lg:col-span-5">
            <FeaturedCard service={featured} badge={services.featuredBadge} more={services.more} locale={locale} />
          </Reveal>
          <ul className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5 lg:col-span-7 lg:gap-6">
            {rest.map((s, i) => (
              <li key={s.slug}>
                <Reveal delay={i * 90} className="h-full">
                  <ServiceCard service={s} more={services.more} locale={locale} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

function FeaturedCard({ service, badge, more, locale }: { service: Service; badge: string; more: string; locale: Locale }) {
  return (
    <L
      href={`/servicii/${service.slug}`}
      data-tone="dark"
      className="group relative isolate flex h-full min-h-[26rem] flex-col justify-end overflow-hidden rounded-[var(--radius)] bg-dark p-6 text-on-dark sm:min-h-[32rem] sm:p-9"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-20">
        <Photo image={service.image} locale={locale} width={1100} className="zoom-media object-[60%_center]" />
      </div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-t from-dark via-dark/60 to-dark/25" />

      <span className="liquid-glass absolute left-5 top-5 rounded-full px-4 py-2 text-[0.875rem] font-semibold uppercase tracking-[0.16em] sm:left-7 sm:top-7">
        {badge}
      </span>

      <p className="text-[0.875rem] font-semibold uppercase tracking-[0.18em] text-accent">{service.eyebrow}</p>
      <h3 className="mt-2 text-[2.8rem] leading-none sm:text-[3.6rem]">{service.title}</h3>
      <p className="mt-4 max-w-sm text-lg text-on-dark/90">{service.text}</p>
      <span className="mt-7 inline-flex min-h-12 items-center gap-2.5 self-start rounded-full bg-cta px-6 py-3 font-semibold text-on-cta shadow-[inset_0_1px_0_rgb(255_255_255_/_0.18)] transition group-hover:brightness-110">
        {more}
        <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </L>
  );
}

function ServiceCard({ service, more, locale }: { service: Service; more: string; locale: Locale }) {
  return (
    <L
      href={`/servicii/${service.slug}`}
      className="group flex h-full gap-4 overflow-hidden rounded-[var(--radius)] border border-line bg-surface p-3 text-ink transition duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[var(--shadow-card)] sm:flex-col sm:gap-0 sm:p-0"
    >
      <div className="relative w-[6.5rem] flex-none self-stretch overflow-hidden rounded-[14px] bg-bg-alt sm:aspect-[16/10] sm:w-full sm:rounded-none lg:aspect-[16/9]">
        <div className="absolute inset-0">
          <Photo image={service.image} locale={locale} width={700} className="zoom-media" />
        </div>
      </div>
      <div className="flex min-w-0 flex-1 flex-col py-1 pr-1 sm:p-6 sm:pt-5">
        <p className="text-[0.875rem] font-semibold uppercase tracking-[0.16em] text-accent">{service.eyebrow}</p>
        <h3 className="mt-1.5 text-[1.75rem] leading-none sm:text-[2.1rem]">{service.title}</h3>
        <p className="mt-2.5 text-[0.98rem] leading-snug text-ink-soft sm:text-base">{service.text}</p>
        <div className="mt-3 sm:mt-auto sm:pt-6">
          <span className="inline-flex items-center gap-2 font-semibold text-primary sm:min-h-11 sm:rounded-full sm:border sm:border-primary/30 sm:px-5 sm:py-2 sm:transition sm:group-hover:border-primary sm:group-hover:bg-primary sm:group-hover:text-on-primary">
            {more}
            <ArrowIcon size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </L>
  );
}
