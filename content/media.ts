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
  servicePsihiatrie: { src: "", duration: "" },
  /** /psihoterapeut/<slug> — each psychotherapist's VSL at the top of their page. */
  therapistPatriciaVsl: { src: "", duration: "" },
  therapistAnielaVsl: { src: "", duration: "" },
  /** /pentru-copii — short video for parents. */
  childrenIntro: { src: "", duration: "" },
  /** Testimonials (BrainMap LPs, home "who recommends us"). */
  testimonialErnesto: { src: "", duration: "2:14" },
  testimonialGabriela: { src: "", duration: "1:47" },
  testimonialPaulina: { src: "", duration: "3:02" },
  /** /neurofit — the NeuroFit programme video (VSL). */
  neurofitVsl: { src: "", duration: "" },
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
 * Photos. `/photos/…` are the clinic's own (shot at the clinic, exported as
 * WebP from the originals: max ~2000px, metadata stripped). The rest are
 * Unsplash stand-ins (free licence) for things the clinic has no photo of yet;
 * Unsplash URLs get resized automatically by <Photo>.
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
  /** Home hero — the specialist walks a patient (iMediSync headset on) through her brain map. */
  homeHero: {
    src: "/photos/home-hero.webp",
    alt: {
      ro: "Specialistul îi arată pacientei harta creierului ei, pe laptop, în timp ce ea poartă casca iMediSync",
      en: "The specialist shows a patient her brain map on a laptop while she wears the iMediSync headset",
    },
  },
  /** Neurofeedback — live EEG on the tablet. */
  neurofeedback: {
    src: "/photos/neurofeedback-eeg.webp",
    alt: { ro: "Semnalul EEG în timp real, pe tableta din cabinet", en: "The live EEG signal on the clinic's tablet" },
  },
  /** BrainMap / qEEG — the map on screen, patient wearing the iMediSync headset. */
  scan: {
    src: "/photos/brainmap-harta.webp",
    alt: {
      ro: "Harta BrainMap explicată pe laptop, pacienta purtând casca iMediSync",
      en: "The BrainMap explained on a laptop, the patient wearing the iMediSync headset",
    },
  },
  /** Consultation with a patient. */
  consult: {
    src: "/photos/consult.webp",
    alt: { ro: "Consult în cabinet", en: "A consultation at the clinic" },
  },
  consultWarm: {
    src: "/photos/consult-cald.webp",
    alt: { ro: "Discuție cu un specialist, în cabinet", en: "Talking with a specialist at the clinic" },
  },
  /** Consultation at the desk, seen over the patient's shoulder. */
  consultDesk: {
    src: "/photos/consult-birou.webp",
    alt: { ro: "Consult la birou, în cabinet", en: "A consultation at the desk, at the clinic" },
  },
  consultCouch: {
    src: "/photos/consult-discutie.webp",
    alt: { ro: "Discuție liniștită cu un specialist", en: "A calm talk with a specialist" },
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
  /** tPBM — session with the iMediSync headset, protocol on the tablet. */
  tpbm: {
    src: "/photos/tpbm-sedinta.webp",
    alt: {
      ro: "Pacientă în timpul unei ședințe tPBM, cu casca iMediSync și tableta cu protocolul",
      en: "A patient during a tPBM session, wearing the iMediSync headset, the protocol on the tablet",
    },
  },
  /** The iMediSync headset, seen from behind, the session on a tablet (NeuroFit; no staff in frame). */
  helmet: {
    src: "/photos/imedisync-casca.webp",
    alt: {
      ro: "Casca iMediSync în timpul unei sesiuni, cu tableta în fundal",
      en: "The iMediSync headset during a session, the tablet in the background",
    },
  },
  /** EmSella chair and its console. */
  emsella: {
    src: "/photos/emsella.webp",
    alt: { ro: "Scaunul EmSella și consola lui, în clinică", en: "The EmSella chair and its console at the clinic" },
  },
} satisfies Record<string, MediaImage>;

export type ImageKey = keyof typeof IMAGES;
