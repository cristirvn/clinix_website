import type { HomeContent } from "@/content/pages/home";

export const HOME_RO: HomeContent = {
  seo: {
    title: "Emmanuel CliniX — Clinică de neuroștiință aplicată în București",
    description:
      "Vezi ce se întâmplă, de fapt, în creierul tău cu BrainMap: o scanare de 30 de minute, fără radiații, fără ace, cu interpretare în aceeași vizită. Apoi decizi.",
  },
  hero: {
    title: "Harta creierului tău, într-o oră.",
    benefits: ["Fără ace", "Fără radiații", "Rezultate pe loc"],
    cta: "Vreau harta creierului meu",
    phoneLabel: "Sună-ne",
    stats: [
      { value: 15, suffix: "+", label: "probleme tratate" },
      { value: 0, label: "riscuri · aparatură non-invazivă" },
      { value: 99.7, decimals: 1, suffix: "%", label: "pacienți mulțumiți" },
    ],
  },
  services: {
    title: "Cinci metode. *Un singur plan.*",
    more: "Află mai multe",
    featuredBadge: "Începe de aici",
    items: [
      {
        slug: "brainmap",
        image: "scan",
        eyebrow: "Evaluare qEEG",
        title: "BrainMap",
      },
      {
        slug: "tavns",
        image: "tavns",
        eyebrow: "Stimularea nervului vag",
        title: "taVNS",
      },
      {
        slug: "tpbm",
        image: "tpbm",
        eyebrow: "Fotobiomodulare",
        title: "tPBM",
      },
      {
        slug: "ces",
        image: "portrait",
        eyebrow: "Stimulare electrică craniană",
        title: "CES",
      },
      {
        slug: "psihoterapie",
        image: "consultCouch",
        eyebrow: "Consiliere psihologică",
        title: "Psihoterapie",
      },
    ],
  },
  quiz: {
    eyebrow: "Test gratuit · 2–3\u00a0minute",
    title: "Nu știi de unde să *începi?*",
    lead: "Un test scurt, gratuit. Primești o notă de la 1 la 10 și riscurile tale concrete.",
    step: "Întrebarea 1",
    next: "Următoarea întrebare",
    pickFirst: "Alege un răspuns ca să mergi mai departe.",
  },
  final: {
    title: "Nimeni nu ți-a arătat, concret, ce se întâmplă.",
    cta: "Vreau harta creierului meu",
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
