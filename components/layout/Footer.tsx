import { L } from "@/components/ui/L";
import { ButtonLink } from "@/components/ui/primitives";
import { ArrowIcon } from "@/components/ui/icons";
import { Logo } from "@/components/layout/Logo";
import { EegTrace } from "@/components/home/EegTrace";
import { NAV_ABOUT, NAV_MAIN, NAV_SERVICES } from "@/components/layout/nav";
import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { CLINIC } from "@/lib/site";
import { CookieSettingsButton } from "@/components/layout/CookieConsent";

const LINK = "inline-flex min-h-11 items-center py-1.5 text-on-dark/85 transition hover:text-on-dark hover:underline underline-offset-4";
const HEAD = "mb-4 text-[0.875rem] font-semibold uppercase tracking-[0.18em] text-accent";

/** Navy footer: the clinic's one-line belief, one action, then plain link columns. */
export function Footer({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const year = new Date().getFullYear();

  return (
    <footer data-tone="dark" className="bg-vital text-on-dark">
      <div className="mx-auto max-w-7xl px-5 pt-16 sm:px-8 sm:pt-24">
        <div className="footer-cta grid gap-10 border-b border-line pb-14 lg:grid-cols-12 lg:items-end lg:pb-20">
          <div className="lg:col-span-8">
            <EegTrace className="mb-8 w-48 sm:w-60" strokeWidth={1.8} />
            <p className="font-display text-[2.4rem] leading-[1.04] tracking-[-0.02em] sm:text-6xl lg:text-[4.4rem]">{dict.footer.statement}</p>
          </div>
          <div className="flex flex-col gap-4 lg:col-span-4 lg:items-end">
            <ButtonLink href="/brainmap" size="lg" className="group w-full sm:w-auto">
              {dict.nav.cta}
              <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
            </ButtonLink>
            <a href={CLINIC.phoneHref} className="inline-flex min-h-11 items-center justify-center text-lg font-semibold text-on-dark/90 hover:underline sm:justify-start lg:justify-end">
              {dict.common.callUs} · <span className="whitespace-nowrap">{CLINIC.phone}</span>
            </a>
          </div>
        </div>

        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-5 lg:col-span-4">
            <Logo onDark className="logo-classic h-14" />
            <Logo className="logo-aqua h-14" />
            <p className="max-w-xs text-on-dark-soft">{dict.footer.description}</p>
          </div>

          <nav aria-label={dict.footer.clinic} className="lg:col-span-3">
            <h2 className={`${HEAD} font-body`}>{dict.footer.clinic}</h2>
            <ul>
              {[...NAV_MAIN, ...NAV_ABOUT].map((item) => (
                <li key={item.key}>
                  <L href={item.href} className={LINK}>
                    {dict.nav[item.key]}
                  </L>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={dict.footer.services} className="lg:col-span-2">
            <h2 className={`${HEAD} font-body`}>{dict.footer.services}</h2>
            <ul>
              {NAV_SERVICES.map((s) => (
                <li key={s.slug}>
                  <L href={`/servicii/${s.slug}`} className={LINK}>
                    {s[locale]}
                  </L>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className={`${HEAD} font-body`}>{dict.footer.contact}</h2>
            <ul className="[overflow-wrap:anywhere]">
              <li>
                <a href={CLINIC.phoneHref} className={`${LINK} font-semibold !text-on-dark`}>
                  {CLINIC.phone}
                </a>
              </li>
              <li>
                <a href={CLINIC.whatsappHref} target="_blank" rel="noopener noreferrer" className={LINK}>
                  {dict.common.whatsapp}
                </a>
              </li>
              <li>
                <a href={`mailto:${CLINIC.email}`} className={LINK}>
                  {CLINIC.email}
                </a>
              </li>
              <li>
                <a href={CLINIC.mapsHref} target="_blank" rel="noopener noreferrer" className={LINK}>
                  {CLINIC.address}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="border-t border-line py-8 text-sm text-on-dark-soft">{dict.footer.disclaimer}</p>
      </div>

      <div className="border-t border-line">
        <p className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-6 gap-y-1 px-5 py-5 text-sm text-on-dark-soft sm:px-8">
          <span>
            © {year} {CLINIC.name}. {dict.footer.rights}
          </span>
          <L href="/politica-de-confidentialitate" className="inline-block py-1.5 hover:text-on-dark hover:underline">
            {dict.footer.privacy}
          </L>
          <L href="/termeni-si-conditii" className="inline-block py-1.5 hover:text-on-dark hover:underline">
            {dict.footer.terms}
          </L>
          <CookieSettingsButton className="inline-block py-1.5 hover:text-on-dark hover:underline" />
        </p>
      </div>
    </footer>
  );
}
