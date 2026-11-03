import type { Locale } from "@/lib/i18n";
import type { ChildrenContent } from "./types";
import { CHILDREN_RO } from "./ro";
import { CHILDREN_EN } from "./en";

export type { ChildrenContent };

export function getChildren(locale: Locale): ChildrenContent {
  return locale === "en" ? CHILDREN_EN : CHILDREN_RO;
}
