/**
 * One codebase, two languages, two domains.
 *
 *  - emmanuelclinix.ro     → Romanian by default
 *  - emmanuelclinix.co.uk  → English by default
 *  - the visitor can switch at any time; the choice is kept in the `lang` cookie.
 *
 * Internally every page lives under `app/[locale]/…` with ROMANIAN path
 * segments (`/chestionare/somn`). English visitors see translated URLs
 * (`/tests/sleep`); `proxy.ts` translates them back segment by segment and
 * rewrites to `/<locale>/<internal path>`. Always build links with
 * `localizePath()` (or the `<L>` component) — never hard-code `/en/...`.
 *
 * This module must stay dependency-free: `proxy.ts` imports it.
 */

export const LOCALES = ["ro", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_COOKIE = "lang";

export function isLocale(value: unknown): value is Locale {
  return value === "ro" || value === "en";
}

/** Romanian (internal) path segment → English public segment. */
const RO_TO_EN: Record<string, string> = {
  chestionare: "tests",
  evaluare: "assessment",
  "cum-functioneaza": "how-it-works",
  "despre-noi": "about",
  tarife: "pricing",
  echipa: "team",
  "intrebari-frecvente": "faq",
  contact: "contact",
  articole: "articles",
  "politica-de-confidentialitate": "privacy-policy",
  "termeni-si-conditii": "terms",
  multumim: "thank-you",
  aplicatie: "application",
  anxietate: "anxiety",
  panica: "panic",
  somn: "sleep",
  "somn-b": "sleep-b",
  dispozitie: "mood",
  migrene: "migraines",
  stres: "stress",
  adictii: "addictions",
};

const EN_TO_RO: Record<string, string> = Object.fromEntries(
  Object.entries(RO_TO_EN).map(([ro, en]) => [en, ro]),
);

function splitPath(path: string): { segments: string[]; suffix: string } {
  const match = /^([^?#]*)(.*)$/.exec(path) ?? ["", path, ""];
  const segments = match[1].split("/").filter(Boolean);
  return { segments, suffix: match[2] };
}

/** Public URL path (either language) → internal Romanian path. */
export function internalizePath(path: string): string {
  const { segments, suffix } = splitPath(path);
  return "/" + segments.map((s) => EN_TO_RO[s] ?? s).join("/") + suffix;
}

/**
 * Internal path (`/chestionare/somn#x`) → public path for `locale`.
 * Accepts already-localized paths too, so it is safe to call twice.
 */
export function localizePath(path: string, locale: Locale): string {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  const { segments, suffix } = splitPath(internalizePath(path));
  const mapped = locale === "en" ? segments.map((s) => RO_TO_EN[s] ?? s) : segments;
  return "/" + mapped.join("/") + suffix;
}

/** Default language for a hostname: `.co.uk` / `.uk` → en, `.ro` → ro. */
export function localeFromHost(host: string | null | undefined, fallback: Locale = "ro"): Locale {
  const h = (host ?? "").toLowerCase().split(":")[0];
  if (h.endsWith(".uk")) return "en";
  if (h.endsWith(".ro")) return "ro";
  return fallback;
}

export const SITE_URLS: Record<Locale, string> = {
  ro: (process.env.NEXT_PUBLIC_SITE_URL_RO ?? "https://emmanuelclinix.ro").replace(/\/$/, ""),
  en: (process.env.NEXT_PUBLIC_SITE_URL_EN ?? "https://emmanuelclinix.co.uk").replace(/\/$/, ""),
};

/** `alternates` block for page metadata: canonical + hreflang on both domains. */
export function alternatesFor(internalPath: string, locale: Locale) {
  const ro = SITE_URLS.ro + localizePath(internalPath, "ro");
  const en = SITE_URLS.en + localizePath(internalPath, "en");
  return {
    canonical: locale === "ro" ? ro : en,
    languages: { "ro-RO": ro, "en-GB": en, "x-default": ro },
  };
}
