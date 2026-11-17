import "server-only";
import { cache } from "react";
import { readCmsPublic } from "./store";
import { isShowable, type CmsTestimonial, type TestimonialPage } from "./types";

export type { CmsData, CmsTestimonial } from "./types";

/** Admin-managed content for public pages (one read per request / build). */
export const getCms = cache(readCmsPublic);

/** A service or psychotherapist page's visible testimonials, in order. (Its video comes from the site-wide video links.) */
export async function getServiceTestimonials(slug: TestimonialPage): Promise<CmsTestimonial[]> {
  return (await getCms()).testimonials.filter((t) => isShowable(t) && t.services.includes(slug));
}

/** Every visible testimonial (for /testimoniale). */
export async function getAllCmsTestimonials(): Promise<CmsTestimonial[]> {
  return (await getCms()).testimonials.filter(isShowable);
}
