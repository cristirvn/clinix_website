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
      className="animate-cookie-in fixed inset-x-3 bottom-3 z-[90] mx-auto max-w-xl rounded-[var(--radius)] border border-line bg-surface p-6 text-ink shadow-[var(--shadow-soft)] sm:inset-x-auto sm:left-6 sm:bottom-6 sm:p-7"
    >
      <h2 className="font-display text-[1.7rem] leading-tight">{t.title}</h2>
      <p className="mt-2 text-base text-ink-soft">
        {t.text}{" "}
        <L href="/politica-de-confidentialitate" className="font-semibold text-primary underline underline-offset-4">
          {t.policy}
        </L>
      </p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={() => choose("all")} className={buttonClass("cta", "md", "flex-1")}>
          {t.accept}
        </button>
        <button type="button" onClick={() => choose("essential")} className={buttonClass("outline", "md", "flex-1")}>
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
