"use client";

import { usePathname } from "next/navigation";
import { LOCALE_COOKIE, localizePath } from "@/lib/i18n";
import { useLocale } from "@/components/layout/LocaleProvider";

/**
 * RO ⇄ EN. Stores the choice in the `lang` cookie (read by `proxy.ts`) and
 * reloads the same page in the other language.
 */
export function LangSwitch({ className = "" }: { className?: string }) {
  const { locale, dict } = useLocale();
  const pathname = usePathname() ?? "/";
  const target = locale === "ro" ? "en" : "ro";

  function switchLang() {
    document.cookie = `${LOCALE_COOKIE}=${target}; path=/; max-age=31536000; samesite=lax`;
    window.location.assign(localizePath(pathname, target) + window.location.search + window.location.hash);
  }

  return (
    <button
      type="button"
      onClick={switchLang}
      className={`inline-flex items-center gap-1.5 rounded-full border border-current/25 px-3 py-1.5 text-sm font-semibold tracking-wide transition hover:border-current/60 ${className}`}
      aria-label={dict.switchTo}
      title={dict.switchTo}
    >
      <span aria-hidden="true" className="opacity-50">
        {locale.toUpperCase()}
      </span>
      <span aria-hidden="true" className="opacity-40">
        /
      </span>
      <span>{dict.switchToShort}</span>
    </button>
  );
}
