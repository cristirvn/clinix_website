import "server-only";
import { cache } from "react";
import type { ServiceSlug } from "@/content/services/types";
import { readCmsPublic } from "./store";
import { isShowable, type CmsTestimonial } from "./types";

export type { CmsData, CmsTestimonial } from "./types";

/** Admin-managed content for public pages (one read per request / build). */
export const getCms = cache(readCmsPublic);

/** What a service page needs: its explainer video (if set in /admin) and its visible testimonials, in order. */
export async function getServiceCms(slug: ServiceSlug): Promise<{ videoUrl: string | null; testimonials: CmsTestimonial[] }> {
  const cms = await getCms();
  return {
    videoUrl: cms.videos[slug] || null,
    testimonials: cms.testimonials.filter((t) => isShowable(t) && t.services.includes(slug)),
  };
}

/** Every visible testimonial (for /testimoniale). */
export async function getAllCmsTestimonials(): Promise<CmsTestimonial[]> {
  return (await getCms()).testimonials.filter(isShowable);
}
