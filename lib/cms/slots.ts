import type { VideoKey } from "@/content/media";

/**
 * Every video place on the site, described for the /admin list: what it is and
 * where it shows. Typed as a full Record so a new key in `content/media.ts`
 * fails the build until it is described here (and so shows up in /admin).
 */
export interface VideoSlot {
  /** What the clinic calls it. */
  label: string;
  /** Pages it appears on, as shown in /admin. */
  where: string;
  /** One page to open and check it. */
  href: string;
}

const BRAINMAP_LPS = "/brainmap și cele 8 landing pages BrainMap (/lp/anxietate, /lp/panica, /lp/burnout, /lp/focus, /lp/dispozitie, /lp/migrene, /lp/stres, /lp/adictii)";

export const VIDEO_SLOTS: Record<VideoKey, VideoSlot> = {
  brainmapVsl: { label: "Video principal BrainMap (VSL)", where: BRAINMAP_LPS, href: "/brainmap" },
  testimonialErnesto: { label: "Testimonial video — Ernesto", where: "Acasă, landing pages BrainMap, Despre noi, Testimoniale", href: "/brainmap" },
  testimonialGabriela: { label: "Testimonial video — Gabriela", where: "Acasă, landing pages BrainMap, Despre noi, Testimoniale", href: "/brainmap" },
  testimonialPaulina: { label: "Testimonial video — Paulina", where: "Acasă, landing pages BrainMap, Despre noi, Testimoniale", href: "/brainmap" },

  neurofitVsl: { label: "Video principal NeuroFit (VSL)", where: "/neurofit", href: "/neurofit" },

  lpEmsellaVsl: { label: "Video principal EmSella (VSL)", where: "/lp/emsella", href: "/lp/emsella" },
  lpEmsellaTestimonial: { label: "Testimonial video EmSella", where: "/lp/emsella, Testimoniale", href: "/lp/emsella" },

  lpSomnVsl: { label: "Video principal Somn (VSL)", where: "/lp/somn", href: "/lp/somn" },
  lpSomnTestimonialMihai: { label: "Testimonial video — Mihai T.", where: "/lp/somn, Testimoniale", href: "/lp/somn" },
  lpSomnTestimonialSimona: { label: "Testimonial video — Simona V.", where: "/lp/somn, Testimoniale", href: "/lp/somn" },
  lpSomnTestimonialCristian: { label: "Testimonial video — Cristian B.", where: "/lp/somn, Testimoniale", href: "/lp/somn" },

  lpSomnBCaseStudy: { label: "Studiu de caz (sus pe pagină)", where: "/lp/somn-b", href: "/lp/somn-b" },
  lpSomnBHowWeWork: { label: "„Cum lucrăm împreună”", where: "/lp/somn-b/aplicatie", href: "/lp/somn-b/aplicatie" },
  lpSomnBTestimonialMihaela: { label: "Testimonial video — Mihaela", where: "/lp/somn-b, /lp/somn-b/aplicatie, Testimoniale", href: "/lp/somn-b" },
  lpSomnBTestimonialBogdan: { label: "Testimonial video — Bogdan", where: "/lp/somn-b, /lp/somn-b/aplicatie, Testimoniale", href: "/lp/somn-b" },
  lpSomnBTestimonialCorina: { label: "Testimonial video — Corina", where: "/lp/somn-b, /lp/somn-b/aplicatie, Testimoniale", href: "/lp/somn-b" },

  childrenIntro: { label: "Video pentru părinți", where: "Pentru copii", href: "/pentru-copii" },
  serviceConsult: { label: "Video despre consult", where: "Cum funcționează", href: "/cum-functioneaza" },

  serviceBrainmap: { label: "Video explicativ BrainMap · qEEG", where: "Pagina serviciului BrainMap, Cum funcționează", href: "/servicii/brainmap" },
  serviceNeurofeedback: { label: "Video explicativ Neurofeedback", where: "Pagina serviciului Neurofeedback, Cum funcționează", href: "/servicii/neurofeedback" },
  serviceEmsella: { label: "Video explicativ EmSella", where: "Pagina serviciului EmSella, Cum funcționează", href: "/servicii/emsella" },
  serviceTavns: { label: "Video explicativ taVNS", where: "Pagina serviciului taVNS", href: "/servicii/tavns" },
  serviceTpbm: { label: "Video explicativ tPBM", where: "Pagina serviciului tPBM", href: "/servicii/tpbm" },
  serviceCes: { label: "Video explicativ CES", where: "Pagina serviciului CES", href: "/servicii/ces" },
  servicePsihoterapie: { label: "Video explicativ Psihoterapie", where: "Pagina serviciului Psihoterapie", href: "/servicii/psihoterapie" },
};

/** The /admin "Toate videoclipurile" list, grouped by page. */
export const VIDEO_GROUPS: Array<{ title: string; keys: VideoKey[] }> = [
  { title: "Landing pages BrainMap", keys: ["brainmapVsl", "testimonialErnesto", "testimonialGabriela", "testimonialPaulina"] },
  { title: "Landing page EmSella", keys: ["lpEmsellaVsl", "lpEmsellaTestimonial"] },
  { title: "Landing page Somn", keys: ["lpSomnVsl", "lpSomnTestimonialMihai", "lpSomnTestimonialSimona", "lpSomnTestimonialCristian"] },
  {
    title: "Landing page Somn B",
    keys: ["lpSomnBCaseStudy", "lpSomnBHowWeWork", "lpSomnBTestimonialMihaela", "lpSomnBTestimonialBogdan", "lpSomnBTestimonialCorina"],
  },
  { title: "Alte pagini", keys: ["childrenIntro", "serviceConsult"] },
  {
    title: "Pagini de servicii",
    keys: ["serviceBrainmap", "serviceNeurofeedback", "serviceEmsella", "serviceTavns", "serviceTpbm", "serviceCes", "servicePsihoterapie"],
  },
];
