import { useSyncExternalStore } from "react";

/**
 * Cookie consent, kept in the visitor's browser. Analytics scripts load only
 * after "all"; "essential" (or no answer yet) keeps them off.
 */
export type Consent = "all" | "essential";

const KEY = "ec-cookie-consent";
const CHANGE = "ec-cookie-consent-change";
const OPEN = "ec-cookie-settings-open";

// Fallback when storage is blocked, so the banner still closes.
let memory: Consent | null = null;

function read(): Consent | null {
  try {
    const v = window.localStorage.getItem(KEY);
    return v === "all" || v === "essential" ? v : null;
  } catch {
    return null;
  }
}

export function setConsent(value: Consent) {
  try {
    window.localStorage.setItem(KEY, value);
  } catch {
    // Storage blocked: the choice still applies for this page view.
  }
  memory = value;
  window.dispatchEvent(new Event(CHANGE));
}

function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CHANGE, onChange);
    window.removeEventListener("storage", onChange);
  };
}

/** Current choice: `undefined` on the server / before hydration, `null` when not answered yet. */
export function useConsent(): Consent | null | undefined {
  return useSyncExternalStore(
    subscribe,
    () => read() ?? memory,
    () => undefined,
  );
}

/** Re-open the banner (footer "Cookie settings" link). */
export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN));
}

export function onCookieSettingsOpen(handler: () => void) {
  window.addEventListener(OPEN, handler);
  return () => window.removeEventListener(OPEN, handler);
}
