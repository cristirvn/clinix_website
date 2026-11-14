import { L } from "@/components/ui/L";
import { Logo } from "@/components/layout/Logo";
import { LangSwitch } from "@/components/layout/LangSwitch";
import { HeaderApply } from "@/components/layout/HeaderApply";
import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { CLINIC } from "@/lib/site";
import { PhoneIcon } from "@/components/ui/icons";
import { CookieSettingsButton } from "@/components/layout/CookieConsent";

/** Minimal header for landing pages / quizzes: logo, phone, language. No menu = no leaks. */
export function FunnelHeader() {
  return (
    <header className="sticky top-0 z-50 h-[var(--header-h)] border-b border-line bg-bg/90 text-ink backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-3 px-5 sm:gap-4 sm:px-8">
        <L href="/" aria-label="Emmanuel CliniX">
          <Logo eager />
        </L>
        <div className="flex items-center gap-3">
          <a href={CLINIC.phoneHref} className="hidden items-center gap-2 font-semibold text-ink-soft transition hover:text-primary sm:flex">
            <PhoneIcon size={18} className="text-primary" />
            {CLINIC.phone}
          </a>
          <LangSwitch />
          <HeaderApply />
        </div>
      </div>
    </header>
  );
}

export function FunnelFooter({ locale, legal }: { locale: Locale; legal?: string }) {
  const dict = getDictionary(locale);
  return (
    <footer className="border-t border-line bg-bg text-ink-soft">
      <div className="mx-auto max-w-6xl space-y-3 px-5 py-10 text-sm sm:px-8">
        {legal && <p>{legal}</p>}
        <p className="flex flex-wrap gap-x-4 gap-y-1">
          <span>
            © {new Date().getFullYear()} {CLINIC.name}. {dict.footer.rights}
          </span>
          <a href={CLINIC.phoneHref} className="inline-flex min-h-11 items-center py-1.5 hover:underline">
            {CLINIC.phone}
          </a>
          <a href={`mailto:${CLINIC.email}`} className="inline-flex min-h-11 items-center py-1.5 hover:underline">
            {CLINIC.email}
          </a>
          <L href="/politica-de-confidentialitate" className="inline-flex min-h-11 items-center py-1.5 hover:underline">
            {dict.footer.privacy}
          </L>
          <L href="/termeni-si-conditii" className="inline-flex min-h-11 items-center py-1.5 hover:underline">
            {dict.footer.terms}
          </L>
          <CookieSettingsButton className="inline-flex min-h-11 items-center py-1.5 hover:underline" />
        </p>
      </div>
    </footer>
  );
}
