import type { CtaBandContent, PageSeo } from "@/content/pages/blocks";
import type { ScoredQuizSlug } from "@/content/quizzes/types";
import type { ServiceSlug } from "@/content/services/types";

/**
 * `/afectiuni-tratate` — the conditions the clinic works with. Each one links
 * to its free test (`/chestionare/<quiz>`), its campaign LP (`lp`) and the
 * services that help. Ids double as `#anchors` on the page.
 */
export type ConditionId = ScoredQuizSlug | "planseu-pelvin";

export interface ConditionItem {
  id: ConditionId;
  title: string;
  /**
   * Plain description. Omit it for conditions that have a test: the approved
   * test-card text from `content/quizzes/hub/<locale>.ts` is used instead.
   */
  description?: string;
  /** Free test, when one exists. */
  quiz?: ScoredQuizSlug;
  /** Internal path of the matching landing page, when one exists. */
  lp?: string;
  services: ServiceSlug[];
}

export interface ConditionsContent {
  seo: PageSeo;
  hero: { eyebrow: string; title: string; lead: string };
  ui: {
    takeTest: string;
    lpLink: string;
    /** Shown instead of the test button when there is no test (EmSella). */
    lpPrimary: string;
    servicesLabel: string;
  };
  items: ConditionItem[];
  cta: CtaBandContent;
}
