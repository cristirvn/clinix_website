import { CLINIC } from "@/lib/site";
import { LOCALES, SITE_URLS, localizePath, type Locale } from "@/lib/i18n";
import { getServiceList } from "@/content/services";
import { conditionDescription, getConditions } from "@/content/conditions";
import { getArticles } from "@/content/articles";
import { BRAINMAP_LP_SLUGS, getBrainmapFixed, getBrainmapLp } from "@/content/lps";
import { getTherapistList } from "@/content/therapists";

/**
 * `/llms-full.txt` — the whole site's facts as one plain Markdown file, for
 * AI assistants (ChatGPT, Claude, Perplexity, Gemini…) that read it instead of
 * crawling every page (GEO / AEO). Built from the same content files as the
 * pages, so it never goes out of date. `/llms.txt` (in /public) is the short
 * index that points here.
 */
export const dynamic = "force-static";

const url = (locale: Locale, path: string) => SITE_URLS[locale] + localizePath(path, locale);

function section(locale: Locale): string {
  const en = locale === "en";
  const out: string[] = [];
  const services = getServiceList(locale);
  const names = Object.fromEntries(services.map((s) => [s.slug, s.card.name]));

  out.push(en ? "# Emmanuel CliniX — English" : "# Emmanuel CliniX — Română", "");

  out.push(en ? "## Services" : "## Servicii", "");
  for (const s of services) {
    out.push(`### ${s.card.name}`, "", `${s.hero.lead}`, "", `Page: ${url(locale, `/servicii/${s.slug}`)}`, "");
    out.push(...s.what.paragraphs.flatMap((p) => [p, ""]));
    out.push(`**${s.session.title}**`, "");
    for (const step of s.session.steps) out.push(`- ${step.title}: ${step.text}`);
    for (const f of s.session.facts) out.push(`- ${f}`);
    out.push("");
    out.push(`**${s.safety.title}**`, "");
    for (const p of s.safety.points) out.push(`- ${p}`);
    if (s.safety.notFor.length) {
      out.push("", `${s.safety.notTitle}:`);
      for (const p of s.safety.notFor) out.push(`- ${p}`);
    }
    out.push("", `**${s.faq.title}**`, "");
    for (const q of s.faq.items) out.push(`- Q: ${q.q}`, `  A: ${q.a}`);
    out.push("");
  }

  const therapists = getTherapistList(locale);
  out.push(en ? "## Psychotherapists" : "## Psihoterapeuți", "");
  for (const t of therapists) {
    out.push(`### ${t.name} — ${t.role}`, "", t.hero.lede, "", `Page: ${url(locale, `/psihoterapeut/${t.slug}`)}`, "");
    out.push(...t.about.paragraphs.flatMap((p) => [p, ""]));
    out.push(`**${t.helps.title}**`, "");
    for (const h of t.helps.items) out.push(`- ${h.title}: ${h.text}`);
    out.push("", ...t.faq.flatMap((q) => [`- Q: ${q.q}`, `  A: ${q.a}`]), "");
  }

  // Condition landing pages (BrainMap campaign): what each one says, plus the FAQ they share.
  const fixed = getBrainmapFixed(locale);
  out.push(en ? "## Condition pages" : "## Pagini pe afecțiuni", "");
  for (const slug of BRAINMAP_LP_SLUGS) {
    const lp = getBrainmapLp(locale, slug);
    if (!lp) continue;
    const title = lp.hero.titleHtml.replace(/<[^>]+>/g, "");
    out.push(`### ${title}`, "", lp.hero.lede, "", `Page: ${url(locale, `/lp/${slug}`)}`, "");
    out.push(lp.why.tried, "", lp.why.assumption, "", lp.mapSentence, "");
    for (const q of lp.faq) out.push(`- Q: ${q.q}`, `  A: ${q.a}`);
    out.push("");
  }
  out.push(`**${fixed.faq.title}**`, "");
  for (const q of fixed.faq.items) out.push(`- Q: ${q.q}`, `  A: ${q.a}`);
  out.push("");

  const conditions = getConditions(locale);
  out.push(en ? "## Conditions we help with" : "## Afecțiuni cu care lucrăm", "");
  for (const c of conditions.items) {
    const helps = c.services.map((s) => names[s]).filter(Boolean).join(", ");
    out.push(
      `- **${c.title}** — ${conditionDescription(locale, c)}` +
        (helps ? ` ${en ? "What can help" : "Ce poate ajuta"}: ${helps}.` : "") +
        (c.quiz ? ` ${en ? "Free test" : "Test gratuit"}: ${url(locale, `/chestionare/${c.quiz}`)}` : ""),
    );
  }
  out.push("");

  const articles = getArticles(locale);
  if (articles.length) {
    out.push(en ? "## Articles" : "## Articole", "");
    for (const a of articles) {
      out.push(`### ${a.title}`, "", a.description, "", `${url(locale, `/articole/${a.slug}`)} (${a.updated ?? a.published})`, "");
      for (const b of a.body) {
        if (b.type === "p") out.push(b.text, "");
        else if (b.type === "h2") out.push(`#### ${b.text}`, "");
        else if (b.type === "list") out.push(...b.items.map((i) => `- ${i}`), "");
      }
    }
  }
  return out.join("\n");
}

export function GET() {
  const head = [
    "# Emmanuel CliniX",
    "",
    "> Applied neuroscience clinic in Bucharest, Romania. We measure before we recommend: every plan starts from BrainMap, a qEEG map of the brain's electrical activity. Non-invasive methods: neurofeedback, taVNS, tPBM, CES, psychotherapy, psychiatry and EmSella.",
    "",
    `- Address: ${CLINIC.address}, Romania`,
    `- Phone / WhatsApp: ${CLINIC.phone}`,
    `- Email: ${CLINIC.email}`,
    `- Websites: ${SITE_URLS.ro} (Română) · ${SITE_URLS.en} (English)`,
    "- BrainMap visit: 1,200 RON — scan, on-the-spot interpretation, psychological consultation and a PDF with recommendations. No GP referral needed.",
    "- BrainMap is an initial assessment tool, not a medical diagnosis. The online tests are self-assessment tools, not diagnoses. Nothing here replaces a medical consultation.",
    "",
  ].join("\n");
  const body = head + "\n" + LOCALES.map(section).join("\n\n");
  return new Response(body, {
    headers: { "Content-Type": "text/markdown; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
