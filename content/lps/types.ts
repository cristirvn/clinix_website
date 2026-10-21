/** Per-condition ([NIȘAT]) copy of the BrainMap campaign LPs (`/lp/<slug>`). Fixed ([FIX]) copy shared by all of them lives in `content/lps/fixed/<locale>.ts`. */
/** One of the three identification cards (section 2). */
export interface IdentificationCard {
  /** The moment or context — "Luni dimineața", "La birou", "În criză". */
  tag: string;
  text: string;
}

export interface BrainmapFaq {
  q: string;
  a: string;
}

export interface BrainmapLp {
  slug: string;
  /** Route under `/lp/<route>`. */
  route: string;
  /** Sent to GoHighLevel as the lead's `concern` — a `content/conditions.ts` slug. */
  concern: string;
  seo: { title: string };
  hero: {
    /** Contains an `<em>` the client uses to tint two to four words. */
    titleHtml: string;
    lede: string;
  };
  identificare: {
    cards: IdentificationCard[];
    /** The pivot line that hands over to the next section. */
    pull: string;
  };
  /** Section 3, in the client's mandated order, around the fixed kicker. */
  why: {
    /** What they've already tried, as a concrete list. */
    tried: string;
    /** Why it didn't hold: assumptions, not measurements. */
    assumption: string;
    /** What standing still costs — no medical fear. */
    cost: string;
    /** Closes the heart / blood-test / brain analogy. */
    analogy: string;
  };
  /** Section 5, step 2 — the one sentence naming this condition. */
  mapSentence: string;
  qualify: {
    /** The first three "e pentru tine dacă" rows; the last two are fixed. */
    fits: string[];
    /**
     * An extra "nu aplica dacă" row for conditions that need a safety
     * carve-out (panic → rule out cardiac causes first; migraine → sudden or
     * new headaches; addiction → physical withdrawal; mood → self-harm).
     * `null` where the client didn't add one.
     */
    extraExclusion: string | null;
  };
  /** The two niched FAQ entries; the rest of the list is fixed. */
  faq: BrainmapFaq[];
  form: {
    title: string;
    situatieLabel: string;
    /** Three condition-specific options; "Mai multe dintre ele" is appended. */
    situatieOptions: string[];
    durataLabel: string;
    incercatPlaceholder: string;
  };
  /** The footer's medical disclaimer — several pages add a condition-specific warning. */
  legal: string;
}
