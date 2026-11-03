import type { Article, ArticlesPageContent } from "../types";
import { ARTICLE as BRAINMAP } from "./ce-este-brainmap-qeeg";
import { ARTICLE as ANXIETATE_PANICA } from "./anxietate-sau-panica";
import { ARTICLE as SOMN } from "./somnul-si-creierul";

/** Newest first. Same slugs and same order as `../ro/index.ts`. */
export const ARTICLES_EN: Article[] = [BRAINMAP, ANXIETATE_PANICA, SOMN];

// PROVISIONAL copy — client to confirm.
export const ARTICLES_PAGE_EN: ArticlesPageContent = {
  seo: {
    title: "Articles",
    description:
      "Short, plain-English articles about the brain, sleep, anxiety, stress and BrainMap. From the Emmanuel CliniX team in Bucharest.",
  },
  hero: {
    eyebrow: "Articles",
    title: "The brain, in short.",
    lead: "Short explanations, no medical jargon. So you can understand what is happening to you and what you can do.",
  },
  readMore: "Read →",
  minutes: "min read",
  published: "Published",
  updated: "Updated",
  back: "← All articles",
  disclaimer: "The information on this site is for general information only and does not replace a medical consultation.",
};
