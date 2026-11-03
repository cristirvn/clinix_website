/**
 * schema.org builders for JSON-LD (Google, Bing and AI search engines read
 * these to understand who the clinic is and what each page is about).
 * Facts come from `lib/site.ts`; URLs from `lib/i18n.ts` so they always match
 * the canonical URLs in the page metadata.
 */
import { CLINIC } from "@/lib/site";
import { SITE_URLS, localizePath, type Locale } from "@/lib/i18n";
import type { FaqEntry } from "@/content/pages/blocks";
import type { Article } from "@/content/articles/types";
import type { ServiceContent } from "@/content/services/types";
import { IMAGES } from "@/content/media";

type Node = Record<string, unknown>;

/** Same entity on both domains. */
export const CLINIC_ID = `${SITE_URLS.ro}/#clinic`;

/** Structured form of `CLINIC.address`. Update both together. */
const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "Str. Pictor Alexandru Romano nr. 26",
  postalCode: "030167",
  addressLocality: "București",
  addressRegion: "București",
  addressCountry: "RO",
};

/**
 * Opening hours as published on /lp/somn-b (Mon–Fri 09:00–18:00).
 * TODO(owner): confirm; set to [] to leave them out of the structured data.
 */
const OPENING_HOURS = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
];

export function absoluteUrl(internalPath: string, locale: Locale): string {
  const path = localizePath(internalPath, locale);
  return SITE_URLS[locale] + (path === "/" ? "/" : path);
}

function imageUrl(src: string, locale: Locale): string {
  if (src.startsWith("https://images.unsplash.com/")) return `${src}?auto=format&fit=crop&w=1200&q=75`;
  return src.startsWith("http") ? src : SITE_URLS[locale] + src;
}

/** The clinic + the website — injected once, in the locale layout. */
export function siteGraph(locale: Locale): Node {
  const en = locale === "en";
  const url = SITE_URLS[locale] + "/";
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": CLINIC_ID,
        name: CLINIC.name,
        description: en
          ? "Applied neuroscience clinic in Bucharest. BrainMap (qEEG) brain mapping, neurofeedback, taVNS, tPBM, CES, psychotherapy and EmSella."
          : "Clinică de neuroștiință aplicată în București. BrainMap (qEEG), neurofeedback, taVNS, tPBM, CES, psihoterapie și EmSella.",
        url,
        logo: `${SITE_URLS[locale]}/logo.svg`,
        image: `${SITE_URLS[locale]}/logo.svg`,
        telephone: CLINIC.phoneHref.replace("tel:", ""),
        email: CLINIC.email,
        address: ADDRESS,
        hasMap: CLINIC.mapsHref,
        areaServed: { "@type": "City", name: en ? "Bucharest" : "București" },
        availableLanguage: ["ro", "en"],
        ...(OPENING_HOURS.length ? { openingHoursSpecification: OPENING_HOURS } : {}),
        isAcceptingNewPatients: true,
        knowsAbout: ["qEEG", "BrainMap", "Neurofeedback", "taVNS", "Transcranial photobiomodulation", "Cranial electrotherapy stimulation", "Psychotherapy"],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URLS[locale]}/#website`,
        url,
        name: CLINIC.name,
        inLanguage: en ? "en-GB" : "ro-RO",
        publisher: { "@id": CLINIC_ID },
      },
    ],
  };
}

/** BreadcrumbList. `items` = internal paths + visible names, WITHOUT home (added here). */
export function breadcrumbs(locale: Locale, homeName: string, items: Array<{ name: string; path: string }>): Node {
  const all = [{ name: homeName, path: "/" }, ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path, locale),
    })),
  };
}

export function faqPage(items: FaqEntry[]): Node {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleNode(article: Article, locale: Locale): Node {
  const url = absoluteUrl(`/articole/${article.slug}`, locale);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    inLanguage: locale === "en" ? "en-GB" : "ro-RO",
    datePublished: article.published,
    dateModified: article.updated ?? article.published,
    mainEntityOfPage: url,
    url,
    ...(article.image ? { image: imageUrl(IMAGES[article.image].src, locale) } : {}),
    author: { "@type": "Organization", name: article.author, url: SITE_URLS[locale] + "/" },
    publisher: { "@id": CLINIC_ID },
  };
}

/** A service page: the procedure itself + the clinic offering it. */
export function serviceNodes(service: ServiceContent, locale: Locale): Node {
  const url = absoluteUrl(`/servicii/${service.slug}`, locale);
  const procedure: Node = {
    "@type": service.schemaType,
    name: service.card.name,
    description: service.seo.description,
    url,
    ...(service.schemaType === "PsychologicalTreatment"
      ? {}
      : { procedureType: "https://schema.org/NoninvasiveProcedure" }),
    howPerformed: service.session.steps.map((s) => `${s.title}: ${s.text}`).join(" "),
  };
  return {
    "@context": "https://schema.org",
    "@graph": [
      procedure,
      {
        "@type": "Service",
        name: service.card.name,
        description: service.card.short,
        url,
        serviceType: service.card.name,
        provider: { "@id": CLINIC_ID },
        areaServed: { "@type": "City", name: locale === "en" ? "Bucharest" : "București" },
      },
    ],
  };
}
