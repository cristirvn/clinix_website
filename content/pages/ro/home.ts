import type { HomeContent } from "@/content/pages/home";

export const HOME_RO: HomeContent = {
  seo: {
    title: "Emmanuel CliniX — Clinică de neuroștiință aplicată în București",
    description:
      "Vezi ce se întâmplă, de fapt, în creierul tău cu BrainMap: o scanare de 30 de minute, fără radiații, fără ace, cu interpretare în aceeași vizită. Apoi decizi.",
  },
  hero: {
    eyebrow: "BrainMap · harta creierului",
    title: "Află ce se întâmplă în creierul tău",
    subtitle: "Și optimizează-l",
    benefits: [
      "Rezultatele și interpretarea pe loc, în doar câteva minute.",
      "O cască EEG moale, non-invazivă: fără ace, fără radiații, fără durere.",
      "Îți vezi pe ecran harta activității creierului tău.",
    ],
    cta: "Vreau harta creierului meu",
    note: "1.200 lei · o oră în clinică, în București",
    phoneLabel: "Programări la telefon",
    stats: [
      { value: 15, suffix: "+", label: "probleme diferite tratate în clinici" },
      { value: 0, label: "riscuri. Aparatură non-invazivă, fără radiații" },
      { value: 99.7, decimals: 1, suffix: "%", label: "din pacienți au avut rezultate și au fost mulțumiți" },
    ],
  },
  actions: {
    label: "Programează-te",
    online: "Programează-te online",
    whatsapp: "Programează-te pe WhatsApp",
    call: "Sună-ne",
  },
  services: {
    eyebrow: "Servicii",
    title: "Cinci metode. *Un singur plan.*",
    lead: "Pornim de la harta creierului tău. Apoi alegem împreună ce te ajută, pas cu pas.",
    more: "Află mai multe",
    featuredBadge: "Începe de aici",
    items: [
      {
        slug: "brainmap",
        image: "scan",
        eyebrow: "Evaluare qEEG",
        title: "BrainMap",
        text: "Harta activității electrice a creierului tău, explicată pe loc, în aceeași vizită.",
      },
      {
        slug: "tavns",
        image: "tavns",
        eyebrow: "Stimularea nervului vag",
        title: "taVNS",
        text: "Impulsuri blânde, prin ureche, care ajută corpul să iasă din starea de alertă.",
      },
      {
        slug: "tpbm",
        image: "tpbm",
        eyebrow: "Fotobiomodulare",
        title: "tPBM",
        text: "Lumină în infraroșu apropiat, care susține energia celulelor creierului.",
      },
      {
        slug: "ces",
        image: "portrait",
        eyebrow: "Stimulare electrică craniană",
        title: "CES",
        text: "Microcurenți foarte slabi, pentru mai multă liniște și un somn mai bun.",
      },
      {
        slug: "psihoterapie",
        image: "consultCouch",
        eyebrow: "Consiliere psihologică",
        title: "Psihoterapie",
        text: "Discuții cu un psiholog, ca schimbarea să rămână și în viața de zi cu zi.",
      },
    ],
  },
  quiz: {
    eyebrow: "Evaluare gratuită · 2–3 minute",
    title: "Nu știi de unde să *începi?*",
    lead: "Un test scurt, gratuit. La final primești o notă de la 1 la 10 și riscurile concrete pe care le indică răspunsurile tale.",
    step: "Întrebarea 1",
    next: "Următoarea întrebare",
    pickFirst: "Alege un răspuns ca să mergi mai departe.",
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
    reach: "Ne găsești aici",
    address: "Adresa",
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
};
