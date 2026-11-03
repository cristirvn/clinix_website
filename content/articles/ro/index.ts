import type { Article, ArticlesPageContent } from "../types";
import { ARTICLE as BRAINMAP } from "./ce-este-brainmap-qeeg";
import { ARTICLE as ANXIETATE_PANICA } from "./anxietate-sau-panica";
import { ARTICLE as SOMN } from "./somnul-si-creierul";

/** Newest first. Add a new article file in this folder, then list it here (and in `../en/index.ts`). */
export const ARTICLES_RO: Article[] = [BRAINMAP, ANXIETATE_PANICA, SOMN];

// PROVISIONAL copy — client to confirm.
export const ARTICLES_PAGE_RO: ArticlesPageContent = {
  seo: {
    title: "Articole",
    description:
      "Articole scurte, pe înțelesul tuturor, despre creier, somn, anxietate, stres și BrainMap. De la echipa Emmanuel CliniX, București.",
  },
  hero: {
    eyebrow: "Articole",
    title: "Pe scurt, despre creier.",
    lead: "Explicații scurte, fără termeni medicali. Ca să înțelegi ce ți se întâmplă și ce poți face.",
  },
  readMore: "Citește →",
  minutes: "min de citit",
  published: "Publicat",
  updated: "Actualizat",
  back: "← Toate articolele",
  disclaimer:
    "Informațiile de pe acest site au caracter informativ și nu înlocuiesc consultul medical.",
};
