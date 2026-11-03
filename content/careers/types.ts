import type { PageSeo } from "@/content/pages/blocks";

/** An open role. Add one object to `roles` in `ro.ts` AND `en.ts` to publish it. */
export interface CareerRole {
  /** Stable id (kebab-case), sent to GoHighLevel as `rol`. Same in both languages. */
  id: string;
  title: string;
  /** e.g. "Normă întreagă · București". */
  meta: string;
  text: string;
}

export interface CareersContent {
  seo: PageSeo;
  hero: { eyebrow: string; title: string; lead: string };
  why: { eyebrow: string; title: string; items: Array<{ title: string; text: string }> };
  roles: {
    eyebrow: string;
    title: string;
    /** Empty → the friendly "send us your CV" block is shown instead. */
    items: CareerRole[];
    applyLabel: string;
    emptyTitle: string;
    emptyText: string;
    emailLabel: string;
  };
  form: {
    title: string;
    text: string;
    roleLabel: string;
    rolePlaceholder: string;
    /** First option of the role select when roles exist. */
    roleOpen: string;
    emailLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    cvNote: string;
    submit: string;
    successTitle: string;
    successText: string;
  };
}
