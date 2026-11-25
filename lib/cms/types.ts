import { SERVICE_SLUGS, type ServiceSlug } from "@/content/services/types";
import { THERAPIST_SLUGS, type TherapistSlug } from "@/content/therapists/types";
import { VIDEOS, type VideoKey } from "@/content/media";

/**
 * Content the clinic edits itself in `/admin` (no deploy needed):
 *  - any video on the site (every key in `content/media.ts`: landing pages,
 *    service pages, "how it works", about, children, testimonials);
 *  - testimonials (video or text): all on /testimoniale; videos ticked "Acasă"
 *    also in the home carousel; plus any service / psychotherapist pages
 *    ticked. The site's starting video cards are seeded in (`./seed.ts`).
 *    Videos can be uploaded from /admin (Vercel Blob) or linked.
 *
 * Everything else on the site still lives in `content/`.
 */

/** Romanian is required; English is optional and falls back to Romanian. */
export type Bilingual = { ro: string; en: string };

export interface CmsTestimonial {
  /** Random, stable id ("site-…" for the cards the site started with). */
  id: string;
  kind: "video" | "text";
  /** As it should appear: "Mihaela R.", "Doamna Paulina". */
  name: string;
  /** The name on the English site, when it differs (e.g. a placeholder). Empty → `name`. */
  nameEn: string;
  /** One short line under the name: "Pacientă, 52 de ani", "Despre somn". Optional. */
  detail: Bilingual;
  /**
   * kind = "video": a YouTube / Vimeo link, a direct .mp4 link, or a file
   * uploaded from /admin (Vercel Blob). Empty → `videoKey`'s video, else the
   * card shows "Video în curând".
   */
  videoUrl: string;
  /** The site video slot this card started from (`content/media.ts`); used while `videoUrl` is empty. */
  videoKey: VideoKey | null;
  /** kind = "video": shown in the home-page carousel too. */
  home: boolean;
  /** The service shown as the small tag on /testimoniale. Null → the first page in `services`. */
  topic: ServiceSlug | null;
  /** kind = "text": what the patient said. */
  quote: Bilingual;
  /**
   * The pages it appears on: service pages and psychotherapist pages. (Named
   * `services` because that is how it is stored; psychotherapist slugs never
   * clash with service slugs.)
   */
  services: TestimonialPage[];
  /** Hidden testimonials stay in the list but are not shown on the site. */
  visible: boolean;
}

export interface CmsData {
  /** Video links by `content/media.ts` key (YouTube / Vimeo / .mp4). Missing → that key's default. */
  media: Partial<Record<VideoKey, string>>;
  /** In display order. */
  testimonials: CmsTestimonial[];
  /**
   * True once the site's starting testimonial cards (`content/testimonials/items.ts`)
   * have been saved into this list. Until then they are added on every read
   * (`lib/cms/seed.ts`), so the clinic sees and edits them like any other.
   */
  seeded: boolean;
  updatedAt: string | null;
}

export const EMPTY_CMS: CmsData = { media: {}, testimonials: [], seeded: false, updatedAt: null };

export const isServiceSlug = (v: unknown): v is ServiceSlug =>
  typeof v === "string" && (SERVICE_SLUGS as readonly string[]).includes(v);

/** A page a testimonial can be shown on: `/servicii/<slug>` or `/psihoterapeut/<slug>`. */
export type TestimonialPage = ServiceSlug | TherapistSlug;

export const isTestimonialPage = (v: unknown): v is TestimonialPage =>
  isServiceSlug(v) || (typeof v === "string" && (THERAPIST_SLUGS as readonly string[]).includes(v));

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
        nameEn: str(t.nameEn, 120),
        detail: bi(t.detail, 160),
        videoUrl: isAcceptedVideoUrl(videoUrl) ? videoUrl : "",
        videoKey: isVideoKey(t.videoKey) ? t.videoKey : null,
        // Saved before the field existed: video testimonials were on the home page.
        home: kind === "video" && t.home !== false,
        topic: isServiceSlug(t.topic) ? t.topic : null,
        quote: bi(t.quote, 2000),
        services: Array.isArray(t.services) ? [...new Set(t.services.filter(isTestimonialPage))] : [],
        visible: t.visible !== false,
      });
    }
  }

  return { media, testimonials, seeded: r.seeded === true, updatedAt: typeof r.updatedAt === "string" ? r.updatedAt : null };
}

/** The visitor's language, falling back to Romanian when the English field is empty. */
export const pick = (b: Bilingual, locale: "ro" | "en") => (locale === "en" && b.en) || b.ro;

/** The name in the visitor's language. */
export const nameOf = (t: CmsTestimonial, locale: "ro" | "en") => (locale === "en" && t.nameEn) || t.name;

/** Is this testimonial complete enough to show? A video card without a video shows "Video în curând". */
export const isShowable = (t: CmsTestimonial) => t.visible && (t.kind === "video" || Boolean(t.quote.ro || t.quote.en));

/** Max upload size for a video file from /admin (also enforced by the upload token). */
export const MAX_VIDEO_BYTES = 2 * 1024 * 1024 * 1024;
/** File types /admin accepts for upload. */
export const VIDEO_UPLOAD_TYPES = ["video/mp4", "video/quicktime", "video/webm", "video/x-m4v"];
