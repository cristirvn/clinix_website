/**
 * The [FIX] copy of the BrainMap LP template — identical on every condition
 * page and on /brainmap. Romanian is word for word from the approved build
 * (`LpBrainmapTemplate.tsx`, `LpBrainmapForm.tsx`, `LpBrainmapProof.tsx`).
 */
export interface BrainmapFixedPoint {
  title: string;
  text: string;
}

export interface BrainmapFixed {
  /** "Programează BrainMap" — header / sticky bar button. */
  headerCta: string;
  /** Primary CTA (with arrow). */
  cta: string;
  hero: { micro: string; facts: string[] };
  identificare: { eyebrow: string; title: string };
  why: { eyebrow: string; title: string; kicker: string; closing: string };
  vsl: {
    eyebrow: string;
    title: string;
    lede: string;
    /** Label on the player frame. */
    playerTitle: string;
    points: BrainmapFixedPoint[];
  };
  mechanism: {
    eyebrow: string;
    /** Two lines, rendered with a line break between them. */
    title: [string, string];
    steps: Array<{ badge: string; title: string; text: string | null }>;
    note: string;
  };
  visit: {
    eyebrow: string;
    title: string;
    rows: BrainmapFixedPoint[];
    totalLabel: string;
    price: string;
    keep: string;
  };
  proof: {
    eyebrow: string;
    title: string;
    lede: string;
    caption: string;
    playLabel: string;
    prev: string;
    next: string;
    dot: string;
    dotsLabel: string;
  };
  qualify: {
    eyebrow: string;
    title: string;
    fitsTitle: string;
    /** Appended after the three niche rows. */
    fitsFixed: string[];
    notTitle: string;
    notFixed: string[];
  };
  promise: {
    eyebrow: string;
    title: string;
    bands: Array<{ strong: string; rest: string }>;
  };
  faq: { eyebrow: string; title: string; items: Array<{ q: string; a: string }> };
  formSection: {
    eyebrow: string;
    lede: string;
    flow: Array<{ n: string; a: string; b: string }>;
  };
  form: {
    nameLabel: string;
    namePlaceholder: string;
    ageLabel: string;
    agePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    selectPlaceholder: string;
    situatieExtra: string;
    durataOptions: string[];
    incercatLabel: string;
    optional: string;
    priceNoteStrong: string;
    priceNoteRest: string;
    priceCheck: string;
    gdprBefore: string;
    gdprLink: string;
    gdprAfter: string;
    errName: string;
    errAge: string;
    errConsent: string;
    submit: string;
    submitting: string;
    callNote: string;
    confidential: string;
    successTitle: string;
    successBody: string;
  };
  sticky: { label: string; sub: string };
  footer: { tagline: string; pageTitle: string; links: { video: string; results: string; faq: string; apply: string }; contactTitle: string };
}
