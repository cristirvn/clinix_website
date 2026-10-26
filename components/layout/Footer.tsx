import { L } from "@/components/ui/L";
import { Logo } from "@/components/layout/Logo";
import { NAV_ITEMS } from "@/components/layout/nav";
import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { CLINIC } from "@/lib/site";
import { getQuizCards } from "@/content/quizzes";
import { CookieSettingsButton } from "@/components/layout/CookieConsent";

export function Footer({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const tests = getQuizCards(locale);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface text-ink">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-12 pt-14 sm:gap-12 sm:px-8 sm:pb-16 sm:pt-20 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-5">
          <Logo />
          <p className="max-w-xs text-ink-soft">{dict.footer.description}</p>
        </div>

        <div>
          <h3 className="mb-5 font-body text-sm font-semibold uppercase tracking-[0.14em] text-primary">{dict.footer.clinic}</h3>
          <ul className="space-y-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <L href={item.href} className="inline-block py-1.5 hover:text-primary hover:underline">
                  {dict.nav[item.key]}
                </L>
              </li>
            ))}
            <li>
              <L href="/brainmap" className="inline-block py-1.5 hover:text-primary hover:underline">
                BrainMap
              </L>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-body text-sm font-semibold uppercase tracking-[0.14em] text-primary">{dict.footer.freeTests}</h3>
          <ul className="space-y-1">
            {tests.slice(0, 5).map((t) => (
              <li key={t.slug} className="hidden sm:list-item">
                <L href={`/chestionare/${t.slug}`} className="inline-block py-1.5 hover:text-primary hover:underline">
                  {t.title}
                </L>
              </li>
            ))}
            <li>
              <L href="/chestionare" className="inline-block py-1.5 font-semibold hover:text-primary hover:underline">
                {dict.footer.allTests}
              </L>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-body text-sm font-semibold uppercase tracking-[0.14em] text-primary">{dict.footer.contact}</h3>
          <ul className="space-y-1 text-ink-soft [overflow-wrap:anywhere]">
            <li>
              <a href={CLINIC.phoneHref} className="inline-block py-1.5 text-on-dark hover:text-primary hover:underline">
                {CLINIC.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${CLINIC.email}`} className="inline-block py-1.5 text-on-dark hover:text-primary hover:underline">
                {CLINIC.email}
              </a>
            </li>
            <li>
              <a href={CLINIC.mapsHref} target="_blank" rel="noopener noreferrer" className="inline-block py-1.5 hover:text-primary hover:underline">
                {CLINIC.address}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <p className="mx-auto max-w-7xl px-6 py-8 text-sm text-ink-soft sm:px-8">{dict.footer.disclaimer}</p>
      </div>

      <div data-tone="dark" className="bg-primary text-on-primary">
        <p className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-6 gap-y-1 px-6 py-5 text-sm sm:px-8">
          <span>
            © {year} {CLINIC.name}. {dict.footer.rights}
          </span>
          <L href="/politica-de-confidentialitate" className="inline-block py-1.5 hover:underline">
            {dict.footer.privacy}
          </L>
          <L href="/termeni-si-conditii" className="inline-block py-1.5 hover:underline">
            {dict.footer.terms}
          </L>
          <CookieSettingsButton className="inline-block py-1.5 hover:underline" />
        </p>
      </div>
    </footer>
  );
}
