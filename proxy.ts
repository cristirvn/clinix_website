import { NextResponse, type NextRequest } from "next/server";
import { LOCALE_COOKIE, internalizePath, isLocale, localeFromHost, localizePath, type Locale } from "@/lib/i18n";

/**
 * Language resolution for every page request:
 *
 *  1. `?lang=en|ro` — explicit switch: stored in the cookie, then redirected to
 *     the clean URL in that language.
 *  2. the `lang` cookie — the visitor's earlier choice.
 *  3. the domain — `.co.uk` → English, `.ro` → Romanian.
 *
 * The visible URL never carries the locale; the request is rewritten to
 * `/<locale>/<internal Romanian path>` (see `lib/i18n.ts`).
 */
export function proxy(request: NextRequest) {
  const { nextUrl } = request;
  const fallback: Locale = isLocale(process.env.DEFAULT_LOCALE) ? process.env.DEFAULT_LOCALE : "ro";
  const hostLocale = localeFromHost(request.headers.get("host"), fallback);

  const queryLang = nextUrl.searchParams.get("lang");
  if (isLocale(queryLang)) {
    const url = nextUrl.clone();
    url.searchParams.delete("lang");
    url.pathname = localizePath(nextUrl.pathname, queryLang);
    const res = NextResponse.redirect(url);
    res.cookies.set(LOCALE_COOKIE, queryLang, { path: "/", maxAge: 60 * 60 * 24 * 365, sameSite: "lax" });
    return res;
  }

  const cookieLang = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale: Locale = isLocale(cookieLang) ? cookieLang : hostLocale;

  // Direct hits on the internal prefix (`/en/...`) are allowed — they render as-is.
  const first = nextUrl.pathname.split("/")[1];
  if (isLocale(first)) return NextResponse.next();

  const url = nextUrl.clone();
  url.pathname = `/${locale}${internalizePath(nextUrl.pathname)}`.replace(/\/$/, "") || `/${locale}`;
  const res = NextResponse.rewrite(url);
  res.headers.set("Content-Language", locale);
  return res;
}

export const config = {
  matcher: ["/((?!api|_next|favicon|icon|apple-icon|robots.txt|sitemap.xml|.*\\.[a-z0-9]+$).*)"],
};
