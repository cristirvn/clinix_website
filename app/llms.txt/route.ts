import { getHome } from "@/content/pages/home";
import { getQuizCards } from "@/content/quizzes";
import { getArticles } from "@/content/articles";
import { getDictionary } from "@/lib/dictionary";
import { CLINIC } from "@/lib/site";
import { absoluteUrl } from "@/lib/structured-data";
import { requestLocale } from "@/lib/public-pages";

/**
 * /llms.txt (https://llmstxt.org) — a plain summary of the clinic for AI
 * assistants (ChatGPT, Claude, Perplexity…): who we are, what BrainMap is,
 * prices, the key pages and the free tests. Built from the site's own copy,
 * so it stays in sync; served in the language of the domain asked.
 */
export async function GET() {
  const locale = await requestLocale();
  const en = locale === "en";
  const home = getHome(locale);
  const nav = getDictionary(locale).nav;
  const link = (label: string, path: string, note?: string) =>
    `- [${label}](${absoluteUrl(path, locale)})${note ? `: ${note}` : ""}`;

  const lines = [
    `# ${CLINIC.name}`,
    "",
    `> ${home.seo.description}`,
    "",
    en
      ? `Applied neuroscience clinic in Bucharest, Romania (${CLINIC.address}). Phone ${CLINIC.phone}, email ${CLINIC.email}. Main service: BrainMap, a qEEG scan of the brain's electrical activity, followed by psychotherapy and neurofeedback where needed.`
      : `Clinică de neuroștiință aplicată în București (${CLINIC.address}). Telefon ${CLINIC.phone}, email ${CLINIC.email}. Serviciul principal: BrainMap, o scanare qEEG a activității electrice a creierului, urmată de psihoterapie și neurofeedback, când e nevoie.`,
    "",
    en ? "## Main pages" : "## Pagini principale",
    "",
    link("BrainMap", "/brainmap", home.hero.lead),
    link(nav.howItWorks, "/cum-functioneaza"),
    link(nav.pricing, "/tarife"),
    link(nav.team, "/echipa"),
    link(nav.about, "/despre-noi"),
    link("Contact", "/contact"),
    "",
    en ? "## Free online tests (self-assessment, not a diagnosis)" : "## Teste online gratuite (auto-evaluare, nu diagnostic)",
    "",
    ...getQuizCards(locale).map((c) => link(c.title, `/chestionare/${c.slug}`, c.description)),
    "",
  ];

  const articles = getArticles();
  if (articles.length > 0) {
    lines.push(en ? "## Articles" : "## Articole", "");
    for (const a of articles) lines.push(link(a.body[locale].title, `/articole/${a.slug}`, a.body[locale].summary));
    lines.push("");
  }

  lines.push(en ? "## Frequently asked questions" : "## Întrebări frecvente", "");
  for (const item of home.faq.items) lines.push(`### ${item.q}`, "", item.a, "");

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
