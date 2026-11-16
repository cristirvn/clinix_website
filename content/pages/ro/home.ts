import type { HomeContent } from "@/content/pages/home";

export const HOME_RO: HomeContent = {
  seo: {
    title: "Emmanuel CliniX — Clinică de neuroștiință aplicată în București",
    description:
      "Vezi ce se întâmplă, de fapt, în creierul tău cu BrainMap: o scanare de 30 de minute, fără radiații, fără ace, cu interpretare în aceeași vizită. Apoi decizi.",
  },
  hero: {
    eyebrow: "Wellness pentru creier",
    title: "Creierul tău, în cea mai bună formă",
    lead: "Măsurăm cum funcționează creierul tău, apoi îl antrenăm să lucreze mai bine: mai calm, mai limpede, cu mai multă energie, azi și peste ani.",
    benefits: ["Non-invaziv", "Măsurat, de la primul pas", "Plan construit pe datele tale"],
    cta: "Începe cu evaluarea BrainMap",
    phoneLabel: "Sună-ne",
    stats: [
      { value: "30 min", label: "durează evaluarea BrainMap" },
      { value: "1 plan", label: "construit pe harta creierului tău" },
      { value: "Lunar", label: "rutină de antrenament cu NeuroFit" },
    ],
  },
  services: {
    title: "Metodele prin care creierul funcționează mai bine",
    lead: "Fiecare plan pornește de la datele tale și folosește doar metodele de care ai nevoie.",
    more: "Află mai multe",
    featuredBadge: "Antrenament pentru creier",
    toolsLine: "Acestea sunt instrumentele. NeuroFit este programul care le folosește într-o rutină constantă.",
    toolsLink: "Descoperă NeuroFit",
    items: [
      { slug: "neurofeedback", image: "neurofeedback", eyebrow: "Creierul învață să se regleze singur.", title: "Neurofeedback" },
      { slug: "tavns", image: "tavns", eyebrow: "Stimulare blândă a nervului vag, prin ureche.", title: "taVNS" },
      { slug: "tpbm", image: "tpbm", eyebrow: "Terapie cu lumină infraroșie.", title: "tPBM" },
      { slug: "ces", image: "portrait", eyebrow: "Stimulare foarte blândă, prin clipsuri pe urechi.", title: "CES" },
      { slug: "psihoterapie", image: "consultCouch", eyebrow: "Ședințe cu un psihoterapeut, integrate în planul tău.", title: "Psihoterapie" },
    ],
  },
  start: {
    badge: "Începe de aici",
    eyebrow: "Cum începi · Evaluare qEEG",
    title: "Totul începe cu o hartă a creierului tău",
    steps: [
      { title: "Evaluarea BrainMap", text: "Porți o cască ușoară cu senzori, aproximativ 30 de minute. Fără ace, fără radiații." },
      { title: "Interpretarea, în aceeași vizită", text: "Specialistul îți arată pe ecran ce spune harta despre creierul tău." },
      { title: "Planul tău", text: "Primești recomandări construite pe datele tale. Decizi tu dacă și cum continui." },
    ],
    cta: "Programează evaluarea BrainMap",
    note: "Dacă alegi să continui cu noi, costul BrainMap se scade integral din program.",
  },
  quiz: {
    eyebrow: "Test gratuit · 2–3\u00a0minute",
    title: "Nu știi de unde să *începi?*",
    lead: "Un test scurt, gratuit. Primești o notă de la 1 la 10 și riscurile tale concrete.",
    step: "Întrebarea 1",
    next: "Următoarea întrebare",
    pickFirst: "Alege un răspuns ca să mergi mai departe.",
  },
  complex: {
    eyebrow: "Situații complexe",
    title: "Sprijin și pentru situațiile mai complexe",
    text: "Lucrăm și cu copii și adulți care trăiesc cu ADHD, autism, Parkinson sau alte afecțiuni neurologice. Programul e complementar și se construiește alături de medicul care te urmărește.",
    tags: ["ADHD", "Autism", "Parkinson", "Alte afecțiuni neurologice"],
    links: [
      { label: "Pentru copii", href: "/pentru-copii" },
      { label: "Cu ce te ajutăm", href: "/afectiuni-tratate" },
    ],
  },
  testimonials: {
    eyebrow: "Testimoniale",
    title: "Ce spun oamenii care au trecut pe la noi",
    ratingLabel: "recenzii pe Google",
    videosTitle: "Povești din clinică",
    prev: "Înapoi",
    next: "Mai departe",
    play: "Pornește povestea",
    reviewSource: "recenzie Google",
    all: "Toate testimonialele",
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
