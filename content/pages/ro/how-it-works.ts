import type { CtaBandContent, PageHeroContent, PageLink, PageSeo } from "@/content/pages/blocks";
import type { VideoKey } from "@/content/media";

/** `/cum-functioneaza` — patient journey + one block per service / piece of equipment. */
export interface HowItWorksContent {
  seo: PageSeo;
  hero: PageHeroContent;
  journey: {
    eyebrow: string;
    title: string;
    steps: Array<{ title: string; text: string }>;
  };
  services: {
    eyebrow: string;
    title: string;
    lead?: string;
    feelsTitle: string;
    items: Array<{
      id: string;
      eyebrow: string;
      title: string;
      video: VideoKey;
      videoTitle: string;
      paragraphs: string[];
      feels: string[];
      link?: PageLink;
    }>;
  };
  about: {
    eyebrow: string;
    title: string;
    text: string;
    recommendedTitle: string;
    /** Partner / referrer names. Empty → neutral placeholders are shown. */
    recommendedBy: string[];
    placeholderLabel: string;
    link: PageLink;
  };
  cta: CtaBandContent;
}

export const howItWorks: HowItWorksContent = {
  seo: {
    title: "Cum funcționează",
    description:
      "De la testul gratuit la harta creierului tău și la progresul pe care îl vezi în date. Cum funcționează BrainMap, neurofeedback-ul, consultul psihologic și EmSella.",
  },
  hero: {
    eyebrow: "Cum funcționează",
    title: "Întâi măsurăm, abia apoi recomandăm",
    lead: "Cinci pași, de la primul telefon până când vezi pe hartă ce s-a schimbat.",
    primary: { label: "Programează BrainMap →", href: "/brainmap" },
    secondary: { label: "Fă testul gratuit", href: "/chestionare" },
  },
  journey: {
    eyebrow: "Drumul tău",
    title: "Cinci pași, nimic în plus",
    steps: [
      {
        title: "Un test gratuit sau un telefon",
        text: "Faci testul online în 2–3 minute sau ne suni direct.",
      },
      {
        title: "Scanarea BrainMap",
        text: "Stai pe scaun, îmbrăcat, cam 30 de minute. Senzorii din cască înregistrează activitatea electrică a creierului.",
      },
      {
        title: "Interpretarea și planul",
        text: "În aceeași vizită îți explicăm harta pe limba ta și stabilim împreună ce urmează.",
      },
      {
        title: "Ședințele de antrenament",
        text: "De exemplu, neurofeedback. Ședințele nu dor, iar creierul învață, încet-încet, un ritm mai stabil.",
      },
      {
        title: "Măsurăm din nou",
        text: "La fiecare 10 ședințe refacem BrainMap-ul. Așa vezi pe hartă ce s-a schimbat de la început.",
      },
    ],
  },
  services: {
    eyebrow: "Aparatura și serviciile",
    title: "Vezi cum arată totul înainte să vii",
    feelsTitle: "Cum se simte",
    items: [
      {
        id: "brainmap",
        eyebrow: "BrainMap · qEEG",
        title: "Harta activității creierului tău",
        video: "serviceBrainmap",
        videoTitle: "Cum funcționează BrainMap",
        paragraphs: [
          "Îți punem pe cap o cască cu senzori. Stai pe scaun, întâi cu ochii închiși, apoi cu ei deschiși. Senzorii doar ascultă ce face creierul, cam cum ar face un microfon.",
          "Pe hartă se văd zonele care lucrează prea mult și cele care lucrează prea încet. De aici pornește tot planul.",
        ],
        feels: [
          "Durează cam 30 de minute și rămâi îmbrăcat.",
          "Nu are radiații, nu are ace și nu doare.",
          "Te ridici de pe scaun și îți continui ziua exact cum ai plănuit-o.",
        ],
        link: { label: "Citește tot despre BrainMap →", href: "/brainmap" },
      },
      {
        id: "neurofeedback",
        eyebrow: "Neurofeedback",
        title: "Creierul învață să se regleze singur",
        video: "serviceNeurofeedback",
        videoTitle: "Cum funcționează neurofeedback-ul",
        // TODO(owner): list the related protocols you offer alongside neurofeedback (names + one line each).
        paragraphs: [
          "Pornim de la harta ta, ca să știm exact de unde plecăm. Apoi, ședință cu ședință, creierul primește feedback și învață să se regleze singur.",
          "Scopul e ca, în timp, creierul să-și găsească singur un ritm mai stabil.",
        ],
        feels: [
          "O ședință durează 30–45 de minute și nu doare.",
          "Stai relaxat pe scaun. În timpul ședinței nu simți nimic.",
          "După ședință te poți întoarce direct la treabă.",
        ],
        link: { label: "Citește tot despre neurofeedback →", href: "/servicii/neurofeedback" },
      },
      {
        id: "consult",
        eyebrow: "Consult psihologic",
        title: "Consult psihologic, în aceeași vizită",
        video: "serviceConsult",
        videoTitle: "Cum decurge consultul psihologic",
        paragraphs: [
          "Harta arată ce se întâmplă în creier. Discuția cu psihologul te ajută să înțelegi ce înseamnă asta pentru viața ta de zi cu zi.",
          "După consult, decizi tu dacă mergi mai departe. Nu te obligă nimeni la nimic.",
        ],
        feels: [
          "Nu ai nevoie de o a doua programare.",
          "Vorbim simplu, fără termeni medicali.",
          "Primești interpretarea și recomandările într-un PDF, pe mail sau pe WhatsApp.",
        ],
      },
      {
        id: "emsella",
        eyebrow: "EmSella",
        title: "Tu stai pe scaun, iar scaunul face antrenamentul",
        video: "serviceEmsella",
        videoTitle: "Cum funcționează scaunul EmSella",
        paragraphs: [
          "EmSella întărește mușchii planșeului pelvin. Un câmp electromagnetic îi contractă puternic, inclusiv fibrele de adâncime, pe care nu le poți lucra singur.",
          "E pentru cei care pierd urină la efort, simt brusc nevoia să meargă la toaletă sau se trezesc noaptea din cauza asta. Se potrivește atât femeilor, cât și bărbaților.",
        ],
        feels: [
          "O ședință durează 28 de minute și rămâi îmbrăcat.",
          "Nu te dezbraci, nu te atinge nimeni, nu îți intră nimic în corp.",
          "Contracțiile se simt puternic, dar nu dor.",
        ],
        link: { label: "Citește tot despre EmSella →", href: "/servicii/emsella" },
      },
    ],
  },
  about: {
    eyebrow: "Despre noi",
    title: "Cine suntem și cine ne recomandă",
    text: "Emmanuel CliniX e o clinică din București pentru sănătatea creierului. Măsurăm înainte să recomandăm, la fiecare pas.",
    recommendedTitle: "Ne recomandă",
    // TODO(owner): names / logos of the doctors, clinics or organisations that recommend you.
    recommendedBy: [],
    placeholderLabel: "[Logo partener real]",
    link: { label: "Despre noi →", href: "/despre-noi" },
  },
  cta: {
    title: "Primul pas e să vezi harta creierului tău",
    text: "Scanarea, interpretarea și consultul psihologic, toate într-o singură vizită de aproximativ o oră.",
    primary: { label: "Programează BrainMap →", href: "/brainmap" },
    secondary: { label: "Sau fă un test gratuit", href: "/chestionare" },
  },
};
