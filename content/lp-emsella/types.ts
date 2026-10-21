/** Copy of the EmSella product LP (`/lp/emsella`). Romanian = approved text, word for word. */
export interface LpEmsellaStep {
  label: string;
  title: string;
  text: string;
}

export interface LpEmsellaLeadText {
  /** Bold opening phrase. */
  lead: string;
  text: string;
}

export interface LpEmsellaOption {
  /** Value sent to GoHighLevel — kept identical in both languages. */
  value: string;
  label: string;
}

export interface LpEmsellaContent {
  meta: { title: string; description: string };
  /** The single call to action repeated through the page. */
  cta: string;
  hero: {
    titleLead: string;
    titleEm: string;
    sub: string;
    videoTitle: string;
    videoNote: string;
    ctaSub: string;
    facts: string[];
  };
  signs: { eyebrow: string; title: string; cards: Array<{ tag: string; text: string }>; pull: string };
  cause: {
    eyebrow: string;
    title: string;
    /** Paragraphs in order; `highlight` marks the emphasised line. */
    paragraphs: Array<{ text: string; highlight?: boolean }>;
  };
  mechanism: { eyebrow: string; title: string; steps: LpEmsellaStep[]; note: string };
  muscle: {
    eyebrow: string;
    title: string;
    columns: Array<{ title: string; paragraphs: string[] }>;
    note: string;
  };
  process: { eyebrow: string; title: string; steps: Array<{ title: string; text: string }> };
  benefits: { eyebrow: string; title: string; items: string[] };
  offer: {
    eyebrow: string;
    title: string;
    items: LpEmsellaLeadText[];
    prices: Array<{ label: string; amount: string }>;
    notes: string[];
  };
  proof: { eyebrow: string; title: string; lead: string; name: string; role: string };
  fit: {
    eyebrow: string;
    title: string;
    forTitle: string;
    forItems: string[];
    notTitle: string;
    notItems: string[];
    note: string;
  };
  promise: { eyebrow: string; title: string; rows: LpEmsellaLeadText[] };
  faq: { eyebrow: string; title: string; items: Array<{ q: string; a: string }> };
  apply: { title: string; sub: string; note: string };
  /** Footer disclaimer. */
  legal: string;
  /** Mobile sticky bar label. */
  sticky: string;
  form: {
    name: { label: string; placeholder: string };
    age: { label: string; placeholder: string };
    phone: { label: string; placeholder: string };
    email: { label: string; placeholder: string };
    situatie: { label: string; placeholder: string; options: LpEmsellaOption[] };
    durata: { label: string; placeholder: string; options: LpEmsellaOption[] };
    incercat: { label: string; optional: string; placeholder: string };
    contraindicatii: string;
    priceNote: string;
    pretOk: string;
    consent: string;
    submit: string;
    sending: string;
    microcopy: string;
    errors: {
      name: string;
      ageMissing: string;
      ageInvalid: string;
      phone: string;
      email: string;
      situatie: string;
      durata: string;
      contraindicatii: string;
      pretOk: string;
      consent: string;
      form: string;
    };
  };
  calendar: {
    title: string;
    sub: string;
    iframeTitle: string;
    preferPhone: string;
    preferPhoneConfirm: string;
    /** Shown instead of the calendar when no booking URL is configured. */
    fallbackTitle: string;
    fallbackText: string;
  };
}
