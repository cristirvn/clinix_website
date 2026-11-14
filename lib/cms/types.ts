import { SERVICE_SLUGS, type ServiceSlug } from "@/content/services/types";
import { VIDEOS, type VideoKey } from "@/content/media";

/**
 * Content the clinic edits itself in `/admin` (no deploy needed):
 *  - any video on the site (every key in `content/media.ts`: landing pages,
 *    service pages, "how it works", about, children, testimonials);
 *  - testimonials (video or text), each shown on one or more service pages
 *    and on /testimoniale.
 *
 * Everything else on the site still lives in `content/`.
 */

/** Romanian is required; English is optional and falls back to Romanian. */
export type Bilingual = { ro: string; en: string };

export interface CmsTestimonial {
  /** Random, stable id. */
  id: string;
  kind: "video" | "text";
  /** As it should appear: "Mihaela R.", "Doamna Paulina". */
  name: string;
  /** One short line under the name: "Pacientă, 52 de ani", "De la 4h la 7h somn". Optional. */
  detail: Bilingual;
  /** kind = "video": a YouTube / Vimeo link or a direct .mp4 link. */
  videoUrl: string;
  /** kind = "text": what the patient said. */
  quote: Bilingual;
  /** The service pages it appears on. */
  services: ServiceSlug[];
  /** Hidden testimonials stay in the list but are not shown on the site. */
  visible: boolean;
}

export interface CmsData {
  /** Video links by `content/media.ts` key (YouTube / Vimeo / .mp4). Missing → that key's default. */
  media: Partial<Record<VideoKey, string>>;
  /** In display order. */
  testimonials: CmsTestimonial[];
  updatedAt: string | null;
}

export const EMPTY_CMS: CmsData = { media: {}, testimonials: [], updatedAt: null };

export const isServiceSlug = (v: unknown): v is ServiceSlug =>
  typeof v === "string" && (SERVICE_SLUGS as readonly string[]).includes(v);

export const isVideoKey = (v: unknown): v is VideoKey => typeof v === "string" && Object.prototype.hasOwnProperty.call(VIDEOS, v);

/** Accepts YouTube, Vimeo or a direct https video file. Empty string = "no video". */
export function isAcceptedVideoUrl(url: string): boolean {
  if (!url) return true;
  let u: URL;
  try {
    u = new URL(url);
  } catch {
    return false;
  }
  if (u.protocol !== "https:") return false;
  const host = u.hostname.replace(/^www\.|^m\./, "");
  if (host === "youtube.com" || host === "youtu.be" || host === "vimeo.com" || host === "player.vimeo.com") return true;
  return /\.(mp4|webm|mov|m4v)$/i.test(u.pathname);
}

/** Defensive parse of stored JSON: unknown / broken fields are dropped, never crash a page. */
export function normalizeCms(raw: unknown): CmsData {
  if (!raw || typeof raw !== "object") return EMPTY_CMS;
  const r = raw as Record<string, unknown>;
  const str = (v: unknown, max = 4000) => (typeof v === "string" ? v.trim().slice(0, max) : "");
  const bi = (v: unknown, max = 4000): Bilingual => {
    const o = (v && typeof v === "object" ? v : {}) as Record<string, unknown>;
    return { ro: str(o.ro, max), en: str(o.en, max) };
  };

  const media: CmsData["media"] = {};
  if (r.media && typeof r.media === "object") {
    for (const [k, v] of Object.entries(r.media as Record<string, unknown>)) {
      const url = str(v, 500);
      if (isVideoKey(k) && url && isAcceptedVideoUrl(url)) media[k] = url;
    }
  }

  const testimonials: CmsTestimonial[] = [];
  if (Array.isArray(r.testimonials)) {
    for (const t of r.testimonials as Array<Record<string, unknown>>) {
      if (!t || typeof t !== "object") continue;
      const kind = t.kind === "video" ? "video" : t.kind === "text" ? "text" : null;
      const id = str(t.id, 64);
      const name = str(t.name, 120);
      if (!kind || !id || !name) continue;
      const videoUrl = str(t.videoUrl, 500);
      testimonials.push({
        id,
        kind,
        name,
        detail: bi(t.detail, 160),
        videoUrl: isAcceptedVideoUrl(videoUrl) ? videoUrl : "",
        quote: bi(t.quote, 2000),
        services: Array.isArray(t.services) ? [...new Set(t.services.filter(isServiceSlug))] : [],
        visible: t.visible !== false,
      });
    }
  }

  return { media, testimonials, updatedAt: typeof r.updatedAt === "string" ? r.updatedAt : null };
}

/** The visitor's language, falling back to Romanian when the English field is empty. */
export const pick = (b: Bilingual, locale: "ro" | "en") => (locale === "en" && b.en) || b.ro;

/** Is this testimonial complete enough to show? */
export const isShowable = (t: CmsTestimonial) =>
  t.visible && (t.kind === "video" ? Boolean(t.videoUrl) : Boolean(t.quote.ro || t.quote.en));
