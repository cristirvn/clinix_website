/** Small building-block types shared by the page content files in `content/pages/{ro,en}/`. */

/** A call to action. `href` is an INTERNAL (Romanian) path. */
export interface PageLink {
  label: string;
  href: string;
}

export interface PageSeo {
  title: string;
  description: string;
}

export interface PageHeroContent {
  eyebrow: string;
  title: string;
  lead: string;
  /** Omit both buttons when the next block already carries the CTA (e.g. pricing). */
  primary?: PageLink;
  secondary?: PageLink;
}

export interface CtaBandContent {
  title: string;
  text: string;
  primary: PageLink;
  secondary?: PageLink;
}

export interface FaqEntry {
  q: string;
  a: string;
}
