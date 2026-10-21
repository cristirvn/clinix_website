import { L } from "@/components/ui/L";
import { Logo } from "@/components/layout/Logo";
import { NAV_ITEMS } from "@/components/layout/nav";
import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { CLINIC } from "@/lib/site";
import { getQuizCards } from "@/content/quizzes";

export function Footer({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const tests = getQuizCards(locale);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-on-dark">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-5">
          <Logo />
          <p className="max-w-xs text-on-dark-soft">{dict.footer.description}</p>
        </div>

        <div>
          <h3 className="mb-5 font-body text-sm font-bold uppercase tracking-[0.18em] text-accent">{dict.footer.clinic}</h3>
          <ul className="space-y-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <L href={item.href} className="hover:underline">
                  {dict.nav[item.key]}
                </L>
              </li>
            ))}
            <li>
              <L href="/brainmap" className="hover:underline">
                BrainMap
              </L>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-body text-sm font-bold uppercase tracking-[0.18em] text-accent">{dict.footer.freeTests}</h3>
          <ul className="space-y-3">
            {tests.slice(0, 5).map((t) => (
              <li key={t.slug}>
                <L href={`/chestionare/${t.slug}`} className="hover:underline">
                  {t.title}
                </L>
              </li>
            ))}
            <li>
              <L href="/chestionare" className="font-semibold hover:underline">
                {dict.footer.allTests}
              </L>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-body text-sm font-bold uppercase tracking-[0.18em] text-accent">{dict.footer.contact}</h3>
          <ul className="space-y-3 text-on-dark-soft">
            <li>
              <a href={CLINIC.phoneHref} className="text-on-dark hover:underline">
                {CLINIC.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${CLINIC.email}`} className="text-on-dark hover:underline">
                {CLINIC.email}
              </a>
            </li>
            <li>
              <a href={CLINIC.mapsHref} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {CLINIC.address}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-on-dark/10">
        <div className="mx-auto max-w-7xl space-y-3 px-5 py-8 text-sm text-on-dark-soft sm:px-8">
          <p>{dict.footer.disclaimer}</p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <span>
              © {year} {CLINIC.name}. {dict.footer.rights}
            </span>
            <L href="/politica-de-confidentialitate" className="hover:underline">
              {dict.footer.privacy}
            </L>
            <L href="/termeni-si-conditii" className="hover:underline">
              {dict.footer.terms}
            </L>
          </p>
        </div>
      </div>
    </footer>
  );
}
