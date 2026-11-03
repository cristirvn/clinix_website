import type { Locale } from "@/lib/i18n";
import type { QuoteTestimonial, Testimonial, TestimonialsPageContent, VideoTestimonial } from "./types";
import { TESTIMONIALS } from "./items";
import { TESTIMONIALS_PAGE_RO } from "./ro";
import { TESTIMONIALS_PAGE_EN } from "./en";

export type { QuoteTestimonial, Testimonial, TestimonialsPageContent, VideoTestimonial };
export { TESTIMONIALS };

export function getTestimonialsPage(locale: Locale): TestimonialsPageContent {
  return locale === "en" ? TESTIMONIALS_PAGE_EN : TESTIMONIALS_PAGE_RO;
}

export const videoTestimonials = (): VideoTestimonial[] =>
  TESTIMONIALS.filter((t): t is VideoTestimonial => t.kind === "video");

export const quoteTestimonials = (): QuoteTestimonial[] =>
  TESTIMONIALS.filter((t): t is QuoteTestimonial => t.kind === "quote");
