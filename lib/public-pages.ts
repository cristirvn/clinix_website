import { headers } from "next/headers";
import { QUIZ_SLUGS } from "@/content/quizzes";
import { getArticles } from "@/content/articles";
import { isLocale, localeFromHost, type Locale } from "@/lib/i18n";

/**
 * Pages that should be found by search engines and AI assistants (internal
 * Romanian paths). Landing pages (/lp/*), thank-you pages and the draft legal
 * pages are noindex and stay out on purpose.
 */
export function indexablePaths(): string[] {
  return [
    "/",
    "/brainmap",
    "/cum-functioneaza",
    "/despre-noi",
    "/tarife",
    "/echipa",
    "/contact",
    "/evaluare",
    "/chestionare",
    ...QUIZ_SLUGS.map((s) => `/chestionare/${s}`),
    ...(getArticles().length > 0 ? ["/articole", ...getArticles().map((a) => `/articole/${a.slug}`)] : []),
  ];
}

/** Language of the domain serving this request (.ro → ro, .co.uk → en), same rule as `proxy.ts`. */
export async function requestLocale(): Promise<Locale> {
  const fallback: Locale = isLocale(process.env.DEFAULT_LOCALE) ? process.env.DEFAULT_LOCALE : "ro";
  return localeFromHost((await headers()).get("host"), fallback);
}
