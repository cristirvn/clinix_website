import type { HomeContent } from "@/content/pages/home";

export const HOME_RO: HomeContent = {
  seo: {
    title: "Emmanuel CliniX — Clinică de neuroștiință aplicată în București",
    description:
      "Vezi ce se întâmplă, de fapt, în creierul tău cu BrainMap: o scanare de 30 de minute, fără radiații, fără ace, cu interpretare în aceeași vizită. Apoi decizi.",
  },
  hero: {
    eyebrow: "Longevity. Wellness. Neuro.",
    title: "Vezi ce se întâmplă, de fapt, în creierul tău.",
    lead: "BrainMap citește activitatea electrică a creierului tău în 30 de minute. Îți explicăm harta pe înțelesul tău, în aceeași vizită. Apoi decizi.",
    cta: "Vreau să văd ce se întâmplă în creierul meu",
    secondary: "Diagnosticare rapidă · 2 minute →",
    facts: [
      "30 de minute scanarea",
      "Fără radiații, fără ace",
      "Interpretare în aceeași vizită",
      "Fără trimitere de la medicul de familie",
    ],
  },
  marquee: ["BrainMap", "Neurofeedback", "Somn", "Stres", "Anxietate", "Concentrare", "Dispoziție", "EmSella"],
  triage: {
    eyebrow: "Diagnosticare rapidă · gratuit",
    title: "Cu ce te confrunți cel mai des?",
    lead: "Alege ce te descrie cel mai bine acum. Te ducem direct la testul potrivit — durează 2–3 minute.",
  },
  tests: {
    eyebrow: "Teste gratuite",
    title: "Află unde stai, de fapt.",
    lead: "Alege testul care te descrie cel mai bine. La final primești o notă de la 1 la 10 și riscurile concrete pe care le indică răspunsurile tale.",
    all: "Vezi toate testele gratuite →",
  },
  faq: {
    eyebrow: "Întrebări",
    title: "Ce vrei să știi înainte.",
    items: [
      {
        q: "Ce este BrainMap?",
        a: "O scanare a activității electrice a creierului (qEEG). Îți punem o cască cu senzori. Stai pe scaun, cu hainele pe tine, cu ochii închiși și apoi deschiși. Senzorii citesc activitatea electrică pe care creierul tău o produce oricum, în fiecare secundă.",
      },
      {
        q: "Doare? E periculos?",
        a: "Nu. Senzorii doar citesc activitatea pe care creierul o produce oricum. Nu se administrează nimic, nu intră nimic în corp, nu există radiații și nu există perioadă de recuperare.",
      },
      {
        q: "Cât durează, în total?",
        a: "O oră. 30 de minute scanarea, restul interpretarea hărții și consultul psihologic.",
      },
      {
        q: "Cât costă?",
        a: "Evaluarea costă 1.200 de lei și include scanarea, interpretarea pe loc, consultul psihologic și PDF-ul cu recomandări. Dacă începi tratamentul cu noi, suma se scade integral.",
      },
      { q: "Am nevoie de trimitere de la medicul de familie?", a: "Nu." },
      {
        q: "Iau deja medicamente. Le opresc înainte?",
        a: "Nu opri nimic pe cont propriu. Discuți asta cu medicul care ți le-a prescris. Ne spui la telefon ce iei, ca să ținem cont la interpretare.",
      },
      {
        q: "Ce se întâmplă după scanare?",
        a: "Discutăm ce arată harta și ce opțiuni ai mai departe. Decizi tu. Nu ești obligat la nimic. Harta și PDF-ul rămân ale tale, indiferent ce alegi să faci mai departe.",
      },
      {
        q: "Ce se întâmplă cu datele mele?",
        a: "Rămân confidențiale. Sunt folosite doar pentru evaluarea ta și nu se transmit mai departe.",
      },
    ],
  },
  about: {
    eyebrow: "Cine suntem",
    title: "Măsurăm înainte să recomandăm.",
    paragraphs: [
      "Clinică de neuroștiință aplicată din București.",
      "Nu pornim de la simptom. Pornim de la măsurătoare. E greu să repari ceva ce n-ai văzut niciodată cum arată.",
    ],
    link: "Despre noi →",
  },
  proof: {
    eyebrow: "Dovezi",
    title: "Nu trebuie să ne crezi pe cuvânt",
    lead: "Ernesto, Gabriela și Paulina au început exact de unde ești tu acum: de la harta creierului lor.",
    caption: "Testimonial complet",
    testimonials: [
      { name: "Ernesto", video: "testimonialErnesto" },
      { name: "Gabriela", video: "testimonialGabriela" },
      { name: "Paulina", video: "testimonialPaulina" },
    ],
    recommendedLabel: "Ne recomandă",
    // TODO(owner): add the partners / doctors / publications that recommend the clinic
    // (name + logo file in /public + optional link). The strip is hidden until this has entries.
    recommendedBy: [],
  },
  final: {
    title: "Nimeni nu ți-a arătat, concret, ce se întâmplă.",
    lead: "BrainMap · 1.200 lei. O oră în clinică, în București.",
    cta: "Vreau să văd ce se întâmplă în creierul meu",
    note: "Dacă începi tratamentul cu noi, suma se scade integral.",
  },
};
