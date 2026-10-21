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
    lead: string;
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
    title: "Nu pornim de la simptom. Pornim de la măsurătoare.",
    lead: "Cinci pași simpli. Știi de la început ce urmează și vezi în date ce s-a schimbat.",
    primary: { label: "Vreau BrainMap →", href: "/brainmap" },
    secondary: { label: "Fac un test gratuit", href: "/chestionare" },
  },
  journey: {
    eyebrow: "Drumul tău",
    title: "Cinci pași. Atât.",
    steps: [
      {
        title: "Un test gratuit sau un telefon",
        text: "Faci un test online, în câteva minute, sau ne suni. Ne spui pe scurt care e situația ta.",
      },
      {
        title: "Scanarea BrainMap",
        text: "30 de minute, cu hainele pe tine. Senzorii citesc activitatea electrică a creierului tău.",
      },
      {
        title: "Interpretarea și planul",
        text: "Îți explicăm harta pe înțelesul tău, în aceeași vizită. Pleci știind care e situația și ce urmează.",
      },
      {
        title: "Ședințele de tratament",
        text: "De exemplu neurofeedback: ședințe nedureroase, în care creierul învață treptat să-și mențină un ritm mai stabil.",
      },
      {
        title: "Măsurăm din nou",
        text: "Repetăm Brain Map-ul de control la fiecare 10 ședințe. Vezi în date, nu în impresii, ce s-a schimbat.",
      },
    ],
  },
  services: {
    eyebrow: "Aparatura și serviciile",
    title: "Vezi exact ce se întâmplă, înainte să vii.",
    lead: "Câte un video scurt pentru fiecare serviciu. Pe înțelesul tău, fără termeni medicali.",
    feelsTitle: "Cum se simte",
    items: [
      {
        id: "brainmap",
        eyebrow: "BrainMap · qEEG",
        title: "Harta activității creierului tău",
        video: "serviceBrainmap",
        videoTitle: "Cum funcționează BrainMap",
        paragraphs: [
          "Îți punem o cască cu senzori. Stai pe scaun, cu hainele pe tine, cu ochii închiși și apoi deschiși. Senzorii citesc activitatea electrică pe care creierul tău o produce oricum, în fiecare secundă. Ca un microfon care ascultă creierul vorbind.",
          "Pe hartă vedem zone prea active și zone prea lente. Le comparăm cu valorile normale pentru vârsta ta.",
        ],
        feels: [
          "30 de minute, cu hainele pe tine.",
          "Fără radiații, fără ace, fără durere.",
          "Nu îți intră nimic în corp. Nu ți se administrează nimic.",
          "Te ridici de pe scaun și îți continui ziua exact cum ai plănuit-o.",
        ],
        link: { label: "Află tot despre BrainMap →", href: "/brainmap" },
      },
      {
        id: "neurofeedback",
        eyebrow: "Neurofeedback",
        title: "Creierul învață să se regleze singur",
        video: "serviceNeurofeedback",
        videoTitle: "Cum funcționează neurofeedback-ul",
        // TODO(owner): list the related protocols you offer alongside neurofeedback (names + one line each).
        paragraphs: [
          "Pornim de la Brain Map-ul tău, nu de la o rețetă standard. Protocolul vizează exact zonele identificate la tine.",
          "Ședință cu ședință, creierul învață să-și mențină un ritm electric mai stabil. Nu mascăm simptomul, cum face un medicament. Antrenăm creierul să se autoregleze, iar efectul se construiește în timp.",
        ],
        feels: [
          "Ședințe de 30–45 de minute, nedureroase.",
          "Senzorii doar citesc activitatea creierului, nu transmit nimic spre el.",
          "Stai relaxat pe un scaun și nu simți nimic în timpul ședinței.",
          "Îți poți relua activitățile imediat după fiecare ședință.",
        ],
      },
      {
        id: "consult",
        eyebrow: "Consult psihologic",
        title: "Consult psihologic, în aceeași vizită",
        video: "serviceConsult",
        videoTitle: "Cum decurge consultul psihologic",
        paragraphs: [
          "Harta arată ce se întâmplă în creier. Discuția cu psihologul arată ce înseamnă asta pentru viața ta de zi cu zi.",
          "Discutăm ce arată harta și ce opțiuni ai mai departe. Decizi tu. Nu ești obligat la nimic.",
        ],
        feels: [
          "Fără o a doua programare.",
          "În cuvinte pe care le înțelegi, nu în termeni medicali.",
          "Primești PDF-ul cu interpretarea și recomandările tale, pe mail sau pe WhatsApp.",
        ],
      },
      {
        id: "emsella",
        eyebrow: "EmSella",
        title: "Tu nu faci nimic. Scaunul face antrenamentul.",
        video: "serviceEmsella",
        videoTitle: "Cum funcționează scaunul EmSella",
        paragraphs: [
          "EmSella întărește planșeul pelvin. Scaunul emite un câmp electromagnetic care ajunge direct la planșeul pelvin. Acolo, mușchii se contractă la intensitate maximă — inclusiv fibrele profunde, pe care nu le poți controla conștient, oricât ai încerca.",
          "Pentru pierderi de urină la efort, senzația bruscă de urgență și trezirile de noapte. La femei și la bărbați.",
        ],
        feels: [
          "28 de minute. Cu hainele pe tine.",
          "Nu te dezbraci, nu te atinge nimeni, nu îți intră nimic în corp.",
          "Simți contracțiile puternic, dar nu e o senzație dureroasă.",
          "Fără perioadă de recuperare. Te ridici și îți continui ziua imediat.",
        ],
        link: { label: "Află tot despre EmSella →", href: "/lp/emsella" },
      },
    ],
  },
  about: {
    eyebrow: "Despre noi",
    title: "Cine suntem și cine ne recomandă",
    text: "Emmanuel CliniX este o clinică de neuroștiință aplicată din București. Măsurăm înainte să recomandăm.",
    recommendedTitle: "Ne recomandă",
    // TODO(owner): names / logos of the doctors, clinics or organisations that recommend you.
    recommendedBy: [],
    placeholderLabel: "Partener",
    link: { label: "Despre noi →", href: "/despre-noi" },
  },
  cta: {
    title: "Primul pas: vezi harta creierului tău.",
    text: "Scanare, interpretare pe loc, consult psihologic și PDF cu recomandări. O oră în clinică, în București.",
    primary: { label: "Vreau BrainMap →", href: "/brainmap" },
    secondary: { label: "Sau fă un test gratuit", href: "/chestionare" },
  },
};
