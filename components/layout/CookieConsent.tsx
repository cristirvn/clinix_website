"use client";

import { useEffect, useState } from "react";
import { L } from "@/components/ui/L";
import { buttonClass } from "@/components/ui/primitives";
import { useLocale } from "@/components/layout/LocaleProvider";
import { onCookieSettingsOpen, openCookieSettings, setConsent, useConsent } from "@/lib/consent";

/**
 * Cookie banner. Shows until the visitor picks "accept all" or "essential
 * only"; the footer's "Cookie settings" link opens it again. Both choices are
 * equally easy (GDPR) and analytics stay off until "accept all".
 */
export function CookieConsent() {
  const { dict } = useLocale();
  const consent = useConsent();
  const [reopened, setReopened] = useState(false);
  const t = dict.cookies;

  useEffect(() => onCookieSettingsOpen(() => setReopened(true)), []);

  // `undefined` = not hydrated yet: render nothing so the server HTML stays clean.
  if (consent === undefined || (consent !== null && !reopened)) return null;

  const choose = (value: "all" | "essential") => {
    setConsent(value);
    setReopened(false);
  };

  return (
    <section
      role="region"
      aria-label={t.label}
      className="animate-cookie-in fixed inset-x-2 bottom-[calc(0.5rem+env(safe-area-inset-bottom))] z-[90] mx-auto max-w-xl rounded-[var(--radius-media)] border border-line bg-surface/95 p-4 text-ink shadow-[var(--shadow-float)] backdrop-blur-xl sm:inset-x-auto sm:left-6 sm:bottom-6 sm:p-7"
    >
      <h2 className="font-display text-[1.25rem] leading-tight sm:text-[1.7rem]">{t.title}</h2>
      <p className="mt-1.5 text-base leading-snug text-ink-soft sm:mt-2 sm:leading-relaxed">
        {t.text}{" "}
        <L href="/politica-de-confidentialitate" className="font-semibold text-primary underline underline-offset-4">
          {t.policy}
        </L>
      </p>
      <div className="mt-3.5 grid grid-cols-2 gap-2 sm:mt-5 sm:gap-3">
        <button type="button" onClick={() => choose("all")} className={buttonClass("cta", "md", "!px-3")}>
          {t.accept}
        </button>
        <button type="button" onClick={() => choose("essential")} className={buttonClass("outline", "md", "!px-3")}>
          {t.essential}
        </button>
      </div>
    </section>
  );
}

/** Footer link that opens the banner again. */
export function CookieSettingsButton({ className = "" }: { className?: string }) {
  const { dict } = useLocale();
  return (
    <button type="button" onClick={openCookieSettings} className={className}>
      {dict.cookies.settings}
    </button>
  );
}
