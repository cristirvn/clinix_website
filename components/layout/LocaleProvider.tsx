"use client";

import { createContext, useContext } from "react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/content/i18n/ro";

const LocaleContext = createContext<{ locale: Locale; dict: Dictionary } | null>(null);

export function LocaleProvider({
  locale,
  dict,
  children,
}: {
  locale: Locale;
  dict: Dictionary;
  children: React.ReactNode;
}) {
  return <LocaleContext.Provider value={{ locale, dict }}>{children}</LocaleContext.Provider>;
}

/** Current language + interface strings, for client components. */
export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale() must be used under <LocaleProvider>");
  return ctx;
}
