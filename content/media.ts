/**
 * Every video / image used on the site, in ONE place, shared by both
 * languages. Add a video here once and it appears on the .ro and .co.uk
 * site at the same time.
 *
 * `src` accepts a YouTube / Vimeo URL or a direct .mp4 URL. Leave it empty
 * ("") and the player shows a clean placeholder frame until the clinic sends
 * the file. Use `en` only when a separate English recording exists.
 */
export interface MediaVideo {
  src: string;
  /** Optional English-language recording; falls back to `src`. */
  en?: string;
  /** Optional poster image (absolute URL or /public path). */
  poster?: string;
  /** Display length, e.g. "4:30". */
  duration?: string;
}

export const VIDEOS = {
  /** Home + /brainmap — the main VSL about BrainMap. */
  brainmapVsl: { src: "", duration: "4:30" },
  /** "Cum funcționează" — one video per piece of equipment / service. */
  serviceBrainmap: { src: "", duration: "" },
  serviceNeurofeedback: { src: "", duration: "" },
  serviceEmsella: { src: "", duration: "" },
  serviceConsult: { src: "", duration: "" },
  /** Testimonials (BrainMap LPs, home "who recommends us"). */
  testimonialErnesto: { src: "", duration: "2:14" },
  testimonialGabriela: { src: "", duration: "1:47" },
  testimonialPaulina: { src: "", duration: "3:02" },
  /** /lp/emsella — EmSella VSL + the EmSella testimonial (Paulina, 2:40 in the old build). */
  lpEmsellaVsl: { src: "", duration: "4:30" },
  lpEmsellaTestimonial: { src: "", duration: "2:40" },
  /** /lp/somn (sleep campaign LP, variant A) — VSL + its three sleep testimonials. */
  lpSomnVsl: { src: "", duration: "9:14" },
  lpSomnTestimonialMihai: { src: "", duration: "2:14" },
  lpSomnTestimonialSimona: { src: "", duration: "1:47" },
  lpSomnTestimonialCristian: { src: "", duration: "3:02" },
  /** /lp/somn-b — sleep case study (7 min), "how we work together" (4 min) and 3 video testimonials. */
  lpSomnBCaseStudy: { src: "", duration: "" },
  lpSomnBHowWeWork: { src: "", duration: "" },
  lpSomnBTestimonialMihaela: { src: "", duration: "1:58" },
  lpSomnBTestimonialBogdan: { src: "", duration: "2:22" },
  lpSomnBTestimonialCorina: { src: "", duration: "1:35" },
} satisfies Record<string, MediaVideo>;

export type VideoKey = keyof typeof VIDEOS;
