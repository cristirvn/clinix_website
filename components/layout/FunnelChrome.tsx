import { L } from "@/components/ui/L";
import { Logo } from "@/components/layout/Logo";
import { LangSwitch } from "@/components/layout/LangSwitch";
import { HeaderApply } from "@/components/layout/HeaderApply";
import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { CLINIC } from "@/lib/site";

/** Minimal header for landing pages / quizzes: logo, phone, language. No menu = no leaks. */
export function FunnelHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 text-ink backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-8">
        <L href="/" aria-label="Emmanuel CliniX">
          <Logo tagline={false} />
        </L>
        <div className="flex items-center gap-3">
          <a href={CLINIC.phoneHref} className="hidden items-center gap-2 font-semibold sm:flex">
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              <path
                d="M2 3.5C2 2.7 2.7 2 3.5 2h1.2c.6 0 1.1.4 1.2 1l.4 2c.1.5-.1 1-.5 1.2l-.9.5c.7 1.5 1.9 2.7 3.4 3.4l.5-.9c.3-.4.7-.6 1.2-.5l2 .4c.6.1 1 .6 1 1.2v1.2c0 .8-.7 1.5-1.5 1.5C7.6 14 2 8.4 2 3.5Z"
                fill="currentColor"
              />
            </svg>
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
    <footer className="border-t border-line bg-bg-alt text-ink-soft">
      <div className="mx-auto max-w-6xl space-y-3 px-5 py-10 text-sm sm:px-8">
        {legal && <p>{legal}</p>}
        <p className="flex flex-wrap gap-x-4 gap-y-1">
          <span>
            © {new Date().getFullYear()} {CLINIC.name}. {dict.footer.rights}
          </span>
          <a href={CLINIC.phoneHref} className="inline-block py-1.5 hover:underline">
            {CLINIC.phone}
          </a>
          <a href={`mailto:${CLINIC.email}`} className="inline-block py-1.5 hover:underline">
            {CLINIC.email}
          </a>
          <L href="/politica-de-confidentialitate" className="inline-block py-1.5 hover:underline">
            {dict.footer.privacy}
          </L>
          <L href="/termeni-si-conditii" className="inline-block py-1.5 hover:underline">
            {dict.footer.terms}
          </L>
        </p>
      </div>
    </footer>
  );
}
