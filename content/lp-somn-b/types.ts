/**
 * Copy for the sleep campaign, variant B — the 3-page funnel
 * `/lp/somn-b` (case study) → `/lp/somn-b/aplicatie` (application) → `/lp/somn-b/multumim` (thank you).
 * `ro.ts` is the approved Romanian, word for word; `en.ts` mirrors it.
 */

export interface Review {
  /** Initials shown in the avatar. */
  initials: string;
  name: string;
  city: string;
  quote: string;
}

export interface VideoTestimonial {
  name: string;
  role: string;
}

export interface Step {
  title: string;
  text: string;
}

export interface Option {
  value: string;
  label: string;
}

export interface LpSomnBContent {
  meta: {
    page: { title: string; description: string };
    application: { title: string; description: string };
    thankYou: { title: string; description: string };
  };
  progress: {
    /** "Pasul {n} din 3" — `{n}` is replaced. */
    stepOf: string;
    labels: [string, string, string];
    /** Screen-reader label for the progress list. */
    aria: string;
  };
  /** Disclaimer printed in the footer of all three pages. */
  legal: string;
  cta: {
    apply: string;
    applyArrow: string;
  };

  page: {
    hero: {
      eyebrow: string;
      titleBefore: string;
      titleEm: string;
      titleAfter: string;
      subLine: string;
      subStrong: string;
      subRest: string;
      videoTag: string;
      videoLen: string;
      videoNote: string;
      ctaSub: string;
      stats: Array<{ num: string; label: string }>;
    };
    whatWeDo: { kicker: string; title: string; text: string; benefits: string[] };
    story: {
      kicker: string;
      title: string;
      lead: string;
      text: string;
      beforeTag: string;
      before: string[];
      afterTag: string;
      after: string[];
      closing: string;
    };
    brainmap: { kicker: string; title: string; text: string; steps: Step[]; ctaSub: string };
    proof: { kicker: string; title: string; videos: VideoTestimonial[]; reviews: Review[] };
    notFor: { kicker: string; title: string; items: string[] };
    faq: { kicker: string; title: string; items: Array<{ q: string; a: string }>; ctaSub: string };
  };

  application: {
    intro: { kicker: string; title: string; text: string; videoTag: string; videoLen: string };
    proof: { kicker: string; title: string; videos: VideoTestimonial[]; reviews: Review[] };
    formBox: { title: string; sub: string };
  };

  form: {
    groups: [string, string, string, string, string];
    name: { label: string; placeholder: string };
    phone: { label: string; placeholder: string };
    email: { label: string; placeholder: string };
    age: { label: string; placeholder: string };
    choose: string;
    duration: { label: string; options: string[] };
    tried: { label: string; hint: string; placeholder: string };
    spentTotal: { label: string; options: string[] };
    spentMonthly: { label: string; hint: string; options: string[] };
    invest: { label: string; options: string[] };
    success: { label: string; hint: string; placeholder: string };
    nineMonths: { label: string; placeholder: string };
    fitCallout: string;
    fit: { label: string; placeholder: string };
    decision: { label: string; hint: string; options: Option[] };
    errors: {
      name: string;
      phone: string;
      email: string;
      consent: string;
      server: string;
      network: string;
    };
    submit: string;
    sending: string;
    note: string;
  };

  thankYou: {
    hero: { eyebrow: string; title: string; subLine: string; subStrong: string; subRest: string };
    letter: { kicker: string; title: string; paragraphs: string[]; signName: string; signTag: string };
    next: { kicker: string; title: string; steps: Step[] };
    homework: {
      kicker: string;
      title: string;
      text: string;
      write: Step;
      rewatch: Step;
      rewatchLink: string;
    };
    call: { eyebrow: string; title: string; text: string; button: string; hours: string };
    trust: string[];
  };
}
