import { L } from "@/components/ui/L";
import { buttonClass } from "@/components/ui/primitives";
import { ArrowIcon, PhoneIcon, PinIcon } from "@/components/ui/icons";
import { LangSwitch } from "@/components/layout/LangSwitch";
import { CookieSettingsButton } from "@/components/layout/CookieConsent";
import { NeuroFitWordmark } from "@/components/neurofit/brand";
import type { NeuroFitContent } from "@/content/neurofit";
import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { CLINIC } from "@/lib/site";

/**
 * NeuroFit's own header: its wordmark, three anchors on this page, a quiet
 * way back to the clinic site, language, and the one gold action. No clinic
 * menu, so the page feels like a separate, private place.
 */
export function NeuroFitHeader({ nav }: { nav: NeuroFitContent["nav"] }) {
  return (
    <header className="sticky top-0 z-50 h-[var(--header-h)] border-b border-line bg-bg/85 text-ink backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-2 px-5 sm:gap-4 sm:px-8">
        <L href="/neurofit" aria-label="NeuroFit by Emmanuel CliniX" className="flex-none">
          <NeuroFitWordmark />
        </L>

        <nav aria-label={nav.label} className="hidden items-center gap-9 lg:flex">
          {nav.items.map((item) => (
            <a key={item.href} href={item.href} className="py-2 text-[0.95rem] font-medium text-ink-soft transition hover:text-ink">
              {item.label}
            </a>
          ))}
          <L href="/" className="flex items-center gap-1.5 py-2 text-[0.95rem] font-medium text-ink-soft transition hover:text-ink">
            {nav.back}
            <ArrowIcon size={14} className="-rotate-45" />
          </L>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LangSwitch />
          <a href="#rezerva" className={buttonClass("cta", "md", "!min-h-11 !px-4 !py-2 text-[0.95rem] sm:!px-6")}>
            <span className="sm:hidden">{nav.ctaShort}</span>
            <span className="hidden sm:inline">{nav.cta}</span>
          </a>
        </div>
      </div>
    </header>
  );
}

/** Quiet black footer: wordmark, how to reach the clinic, the wellness disclaimer, the way back, legal links. */
export function NeuroFitFooter({ footer, locale }: { footer: NeuroFitContent["footer"]; locale: Locale }) {
  const dict = getDictionary(locale);
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-bg text-ink">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-12">
        <div className="space-y-4 lg:col-span-5">
          <NeuroFitWordmark />
          <p className="max-w-sm text-ink-soft">{footer.line}</p>
          <L href="/" className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent">
            {footer.back}
            <ArrowIcon size={15} />
          </L>
        </div>
        <ul className="space-y-1 lg:col-span-4">
          <li>
            <a href={CLINIC.phoneHref} className="inline-flex min-h-11 items-center gap-3 text-lg font-semibold">
              <PhoneIcon size={18} className="text-accent" />
              {CLINIC.phone}
            </a>
          </li>
          <li>
            <a href={CLINIC.mapsHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-start gap-3 py-2 text-ink-soft hover:text-ink">
              <PinIcon size={18} className="mt-1 flex-none text-accent" />
              {CLINIC.address}
            </a>
          </li>
        </ul>
        <p className="text-sm text-ink-soft lg:col-span-3">{footer.disclaimer}</p>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-6 gap-y-1 px-5 py-5 text-sm text-ink-soft sm:px-8">
          <span>
            © {year} {CLINIC.name}. {dict.footer.rights}
          </span>
          <L href="/politica-de-confidentialitate" className="inline-block py-1.5 hover:text-ink hover:underline">
            {dict.footer.privacy}
          </L>
          <L href="/termeni-si-conditii" className="inline-block py-1.5 hover:text-ink hover:underline">
            {dict.footer.terms}
          </L>
          <CookieSettingsButton className="inline-block py-1.5 hover:text-ink hover:underline" />
        </p>
      </div>
    </footer>
  );
}
