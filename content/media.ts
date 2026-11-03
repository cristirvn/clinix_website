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
  /** /servicii/<slug> — one video at the top of each service page. */
  serviceTavns: { src: "", duration: "" },
  serviceTpbm: { src: "", duration: "" },
  serviceCes: { src: "", duration: "" },
  servicePsihoterapie: { src: "", duration: "" },
  /** /pentru-copii — short video for parents. */
  childrenIntro: { src: "", duration: "" },
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

/**
 * Photos. TEMPORARY stand-ins from Unsplash (free licence) until the clinic
 * sends its own — replace `src` with a file in /public (e.g. "/photos/cabinet.jpg")
 * or any absolute URL. Unsplash URLs get resized automatically by <Photo>.
 */
export interface MediaImage {
  src: string;
  /** Alt text per language. */
  alt: { ro: string; en: string };
}

const U = "https://images.unsplash.com/";

export const IMAGES = {
  /** Home hero — glowing brain drawn over the blue (black background blends away). */
  heroBrain: { src: `${U}photo-1711409645921-ef3db0501f96`, alt: { ro: "", en: "" } },
  /** Neurofeedback session — headset, armchair. */
  neurofeedback: {
    src: `${U}photo-1715866404130-67627c9828e1`,
    alt: { ro: "Pacient în timpul unei ședințe de neurofeedback", en: "A patient during a neurofeedback session" },
  },
  /** BrainMap / qEEG — cap with sensors, results on screen. */
  scan: {
    src: `${U}photo-1715866734224-0b9eb2ac5fd6`,
    alt: { ro: "Montarea senzorilor pentru scanarea BrainMap", en: "Fitting the sensors for a BrainMap scan" },
  },
  /** Consultation with a patient. */
  consult: {
    src: `${U}photo-1758691462858-f1286e5daf40`,
    alt: { ro: "Consult în cabinet", en: "A consultation at the clinic" },
  },
  consultWarm: {
    src: `${U}photo-1631217868264-e5b90bb7e133`,
    alt: { ro: "Discuție cu un specialist", en: "Talking with a specialist" },
  },
  consultCouch: {
    src: `${U}photo-1758691462321-9b6c98c40f7e`,
    alt: { ro: "Discuție relaxată cu un specialist", en: "A relaxed talk with a specialist" },
  },
  /** Calm portrait — stress / mood. */
  portrait: {
    src: `${U}photo-1746410848551-ca40cdb57674`,
    alt: { ro: "Femeie privind pe fereastră", en: "A woman looking out of the window" },
  },
  /** Sleep. */
  sleep: {
    src: `${U}photo-1603259186149-13e44113c3cb`,
    alt: { ro: "Om treaz în pat, noaptea", en: "Someone lying awake at night" },
  },
  /** taVNS — headband and ear electrode, relaxed in an armchair. */
  tavns: {
    src: `${U}photo-1715866420139-c33e0c0932ae`,
    alt: {
      ro: "Pacientă relaxată în fotoliu, cu un electrod mic la ureche",
      en: "A patient relaxing in an armchair with a small ear electrode",
    },
  },
  /** tPBM — light therapy session. */
  tpbm: {
    src: `${U}photo-1761819921158-c3fa28f39bf0`,
    alt: {
      ro: "Ședință de terapie cu lumină, pacienta întinsă pe un fotoliu",
      en: "A light therapy session, the patient reclining in a chair",
    },
  },
  /** Clinic room. */
  room: {
    src: `${U}photo-1665231795856-769fb08a90bc`,
    alt: { ro: "Cabinet", en: "Treatment room" },
  },
} satisfies Record<string, MediaImage>;

export type ImageKey = keyof typeof IMAGES;
