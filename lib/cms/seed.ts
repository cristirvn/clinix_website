import { videoTestimonials } from "@/content/testimonials";
import type { VideoTestimonial } from "@/content/testimonials/types";
import type { CmsData, CmsTestimonial } from "./types";

/**
 * The video testimonial cards the site started with (`content/testimonials/items.ts`:
 * Ernesto, Gabriela, Paulina and the client's "[Nume pacient]" placeholders),
 * turned into /admin testimonials so the clinic can change the video, the
 * name and the line under it whenever it wants.
 *
 * Until the first save in /admin they are added on every read (after the
 * clinic's own testimonials, as before); the first save stores them with
 * `seeded: true`, and from then on /admin is the only source — a card the
 * clinic deletes stays deleted.
 */
function toCms(t: VideoTestimonial): CmsTestimonial {
  const name = typeof t.name === "string" ? { ro: t.name, en: t.name } : t.name;
  // The home carousel showed eight cards: no EmSella, and not the last placeholder.
  const home = t.topic !== "emsella" && t.id !== "pending-6";
  // One line per card now (it was different on the home page for a few cards).
  const line = home ? (t.home ?? t.role) : t.role;
  return {
    id: `site-${t.id}`,
    kind: "video",
    name: name.ro,
    nameEn: name.en === name.ro ? "" : name.en,
    detail: { ro: line.ro, en: line.en },
    videoUrl: "",
    videoKey: t.video,
    home,
    topic: t.topic === "brainmap" || t.topic === "emsella" ? t.topic : null,
    quote: { ro: "", en: "" },
    // Tag only — no new sections on the service pages.
    services: [],
    visible: true,
  };
}

export function withSiteSeed(data: CmsData): CmsData {
  if (data.seeded) return data;
  const have = new Set(data.testimonials.map((t) => t.id));
  const seed = videoTestimonials()
    .map(toCms)
    .filter((t) => !have.has(t.id));
  return { ...data, testimonials: [...data.testimonials, ...seed] };
}
