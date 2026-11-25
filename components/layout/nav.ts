/**
 * Main menu. Keys are `dict.nav.*` labels, hrefs are INTERNAL (Romanian) paths.
 *
 * Top level: how it works ▾ · NeuroFit (its own product page) · conditions we
 * treat · for children · About us ▾
 * "About us" opens a small panel with the clinic's own pages.
 */
export const NAV_MAIN = [
  { key: "howItWorks", href: "/cum-functioneaza" },
  { key: "neurofit", href: "/neurofit" },
  { key: "conditions", href: "/afectiuni-tratate" },
  { key: "children", href: "/pentru-copii" },
] as const;

export const NAV_ABOUT = [
  { key: "aboutClinic", href: "/despre-noi" },
  { key: "servicesPricing", href: "/tarife" },
  { key: "team", href: "/echipa" },
  { key: "testimonials", href: "/testimoniale" },
  { key: "articles", href: "/articole" },
  { key: "contact", href: "/contact" },
  { key: "careers", href: "/cariere" },
] as const;

/**
 * The service pages — the "Cum funcționează" dropdown, the mobile menu and the
 * footer, in this order. `name` is the product name (the same in both
 * languages, except psychotherapy); `sub` is one plain-words line shown under
 * it in the menu, for visitors who don't know what "taVNS" means.
 */
export const NAV_SERVICES = [
  { slug: "brainmap", ro: "BrainMap", en: "BrainMap", sub: { ro: "Harta activității creierului tău", en: "A map of your brain’s activity" } },
  { slug: "neurofeedback", ro: "Neurofeedback", en: "Neurofeedback", sub: { ro: "Creierul învață să se regleze singur", en: "The brain learns to regulate itself" } },
  { slug: "tavns", ro: "taVNS", en: "taVNS", sub: { ro: "Stimularea blândă a nervului vag, prin ureche", en: "Gentle vagus nerve stimulation, via the ear" } },
  { slug: "tpbm", ro: "tPBM", en: "tPBM", sub: { ro: "Lumină infraroșie, printr-o cască ușoară", en: "Infrared light, through a light headset" } },
  { slug: "ces", ro: "CES", en: "CES", sub: { ro: "Impulsuri foarte fine, prin două clipsuri pe urechi", en: "Very fine pulses, through two ear clips" } },
  { slug: "psihoterapie", ro: "Psihoterapie", en: "Psychotherapy", sub: { ro: "Ședințe cu un psihoterapeut", en: "Sessions with a psychotherapist" } },
  { slug: "psihiatrie", ro: "Psihiatrie", en: "Psychiatry", sub: { ro: "Consult cu un medic psihiatru", en: "A consultation with a psychiatrist" } },
  { slug: "emsella", ro: "EmSella", en: "EmSella", sub: { ro: "Întărirea planșeului pelvin", en: "Strengthening the pelvic floor" } },
] as const;

/** Is `href` (internal) the page we are on, or a parent of it? `path` is the internal current path. */
export function isActivePath(path: string, href: string): boolean {
  if (href === "/") return path === "/";
  return path === href || path.startsWith(href + "/");
}
