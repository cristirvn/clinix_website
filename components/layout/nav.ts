/**
 * Main menu. Keys are `dict.nav.*` labels, hrefs are INTERNAL (Romanian) paths.
 *
 * Top level: how it works · conditions we treat · for children · About us ▾
 * "About us" opens a small panel with the clinic's own pages.
 */
export const NAV_MAIN = [
  { key: "howItWorks", href: "/cum-functioneaza" },
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

/** The five service pages (footer, menus). Titles are product names, the same in both languages, except psychotherapy. */
export const NAV_SERVICES = [
  { slug: "brainmap", ro: "BrainMap", en: "BrainMap" },
  { slug: "tavns", ro: "taVNS", en: "taVNS" },
  { slug: "tpbm", ro: "tPBM", en: "tPBM" },
  { slug: "ces", ro: "CES", en: "CES" },
  { slug: "psihoterapie", ro: "Psihoterapie", en: "Psychotherapy" },
] as const;

/** Is `href` (internal) the page we are on, or a parent of it? `path` is the internal current path. */
export function isActivePath(path: string, href: string): boolean {
  if (href === "/") return path === "/";
  return path === href || path.startsWith(href + "/");
}
