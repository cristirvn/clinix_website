/** Copy of the sleep campaign LP `/lp/somn` (variant A) + its thank-you page + application form. */

export interface LpSomnOption {
  /** Sent to GoHighLevel as-is — language-neutral, keep identical across locales. */
  value: string;
  label: string;
}

export interface LpSomnFormCopy {
  name: { label: string; placeholder: string };
  age: { label: string; placeholder: string };
  phone: { label: string; placeholder: string };
  email: { label: string; placeholder: string };
  situatie: { label: string; placeholder: string; options: LpSomnOption[] };
  durata: { label: string; placeholder: string; options: LpSomnOption[] };
  incercat: { label: string; optional: string; placeholder: string };
  priceNote: string;
  priceConfirm: string;
  consent: string;
  /** Link label to the privacy policy shown under the consent line. */
  privacyLink: string;
  submit: string;
  sending: string;
  microcopy: string;
  errors: {
    name: string;
    ageMissing: string;
    ageInvalid: string;
    phone: string;
    email: string;
    /** Shape is fine but the address is rejected by the plausibility check. */
    emailImplausible: string;
    situatie: string;
    durata: string;
    pretOk: string;
    consent: string;
    form: string;
  };
}

export interface LpSomnContent {
  meta: { title: string; description: string };
  ctaLabel: string;
  hero: {
    titleStart: string;
    titleEm: string;
    sub: string;
    videoTitle: string;
    videoNote: string;
    btnSub: string;
    facts: string[];
  };
  problem: {
    eyebrow: string;
    title: string;
    cards: Array<{ tag: string; text: string }>;
    pull: string;
  };
  why: {
    eyebrow: string;
    title: string;
    first: string;
    p1: string;
    highlight: string;
    p2: string;
    p3: string;
  };
  mechanism: {
    eyebrow: string;
    title: string;
    steps: Array<{ label: string; title: string; text: string }>;
    note: string;
  };
  expect: {
    eyebrow: string;
    title: string;
    steps: Array<{ num: string; title: string; text: string }>;
  };
  benefits: { eyebrow: string; title: string; items: string[] };
  includes: {
    eyebrow: string;
    title: string;
    items: Array<{ bold: string; text: string }>;
    priceLabel: string;
    price: string;
    note: string;
  };
  results: {
    eyebrow: string;
    title: string;
    videos: Array<{ video: "lpSomnTestimonialMihai" | "lpSomnTestimonialSimona" | "lpSomnTestimonialCristian"; name: string; role: string }>;
    reviews: Array<{ quote: string; initials: string; name: string; role: string }>;
    starsLabel: string;
  };
  qualify: {
    eyebrow: string;
    title: string;
    forTitle: string;
    forItems: string[];
    notTitle: string;
    notItems: string[];
  };
  promise: {
    eyebrow: string;
    title: string;
    rows: Array<{ bold: string; text: string }>;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: Array<{ q: string; a: string; open?: boolean }>;
  };
  apply: {
    title: string;
    sub: string;
    note: string;
    form: LpSomnFormCopy;
  };
  /** Legal line in the funnel footer. */
  legal: string;
  thanks: {
    meta: { title: string };
    title: string;
    p1: string;
    p2: string;
    contactLead: string;
    or: string;
  };
}
