import { CLINIC } from "@/lib/site";
import { SITE_URLS, localizePath, type Locale } from "@/lib/i18n";

/** Absolute public URL of an internal path on the domain for `locale`. */
export function absoluteUrl(internalPath: string, locale: Locale): string {
  return SITE_URLS[locale] + localizePath(internalPath, locale);
}

/** The clinic as a schema.org MedicalClinic — referenced by id from the other blocks. */
export function clinicSchema(locale: Locale) {
  const en = locale === "en";
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${SITE_URLS[locale]}/#clinic`,
    name: CLINIC.name,
    url: absoluteUrl("/", locale),
    logo: `${SITE_URLS[locale]}/logo.svg`,
    telephone: CLINIC.phone,
    email: CLINIC.email,
    address: { "@type": "PostalAddress", ...CLINIC.postalAddress },
    areaServed: en ? "Bucharest, Romania" : "București, România",
    description: en
      ? "Applied neuroscience clinic in Bucharest. BrainMap (qEEG brain mapping), neurofeedback and psychological consultation for sleep, anxiety, stress, focus and mood."
      : "Clinică de neuroștiință aplicată în București. BrainMap (cartografiere cerebrală qEEG), neurofeedback și consult psihologic pentru somn, anxietate, stres, concentrare și dispoziție.",
    availableService: [
      {
        "@type": "MedicalTest",
        name: "BrainMap (qEEG)",
        description: en
          ? "A 30-minute scan of the brain's electrical activity, no radiation, no needles, explained in the same visit."
          : "O scanare de 30 de minute a activității electrice a creierului, fără radiații, fără ace, cu interpretare în aceeași vizită.",
        url: absoluteUrl("/brainmap", locale),
      },
      { "@type": "MedicalTherapy", name: "Neurofeedback", url: absoluteUrl("/cum-functioneaza", locale) },
    ],
    priceRange: en ? "BrainMap 1,200 RON" : "BrainMap 1.200 lei",
  };
}

export function websiteSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URLS[locale]}/#website`,
    name: CLINIC.name,
    url: absoluteUrl("/", locale),
    inLanguage: locale === "en" ? "en-GB" : "ro-RO",
    publisher: { "@id": `${SITE_URLS[locale]}/#clinic` },
  };
}

export function faqSchema(items: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function breadcrumbSchema(locale: Locale, crumbs: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path, locale),
    })),
  };
}
