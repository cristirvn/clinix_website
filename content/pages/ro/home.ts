import type { HomeContent } from "@/content/pages/home";

export const HOME_RO: HomeContent = {
  seo: {
    title: "Emmanuel CliniX — Wellness și longevitate pentru creier, în București",
    description:
      "Vezi cum lucrează creierul tău cu BrainMap, în 30 de minute, apoi antrenează-l cu metode non-invazive, aici în București.",
  },
  hero: {
    eyebrow: "Wellness pentru creier",
    title: "Creierul tău, în cea mai bună formă",
    lead: "Pentru cei care vor să doarmă bine și să-și păstreze mintea ageră și peste ani. Întâi vedem cum lucrează creierul tău acum. Apoi îl antrenăm, pas cu pas.",
    benefits: ["Non-invaziv", "Măsurăm înainte să recomandăm", "Plan făcut pe datele tale"],
    cta: "Începe cu evaluarea BrainMap",
    phoneLabel: "Sună-ne",
    stats: [
      { value: "30 min", label: "cât durează evaluarea BrainMap" },
      { value: "4,9 /5", label: "nota de pe Google, din 100+ recenzii" },
      { value: "100+", label: "pacienți noi în fiecare lună" },
    ],
  },
  services: {
    title: "Metode non-invazive, alese după cum lucrează creierul tău",
    lead: "Folosim doar metodele de care ai nevoie și le combinăm în ordinea potrivită pentru tine. Toate ședințele au loc aici, în clinică.",
    more: "Află mai multe",
    featuredBadge: "Antrenament pentru creier",
    toolsLine: "Vrei să faci asta constant? NeuroFit adună aceleași aparate într-un abonament lunar.",
    toolsLink: "Descoperă NeuroFit",
    items: [
      { slug: "neurofeedback", image: "neurofeedback", eyebrow: "Creierul primește feedback pe loc și învață, ședință cu ședință, să se regleze singur.", title: "Neurofeedback" },
      { slug: "tavns", image: "tavns", eyebrow: "Un electrod mic, prins la ureche, stimulează blând nervul vag.", title: "taVNS" },
      { slug: "tpbm", image: "tpbm", eyebrow: "Lumină infraroșie, printr-o cască ușoară pe care o porți cât durează ședința.", title: "tPBM" },
      { slug: "ces", image: "portrait", eyebrow: "Două clipsuri pe urechi trimit impulsuri atât de fine încât abia le simți.", title: "CES" },
      { slug: "psihoterapie", image: "consultCouch", eyebrow: "Discuții cu un psihoterapeut, ca parte din planul tău.", title: "Psihoterapie" },
    ],
  },
  start: {
    badge: "Începe de aici",
    eyebrow: "Primul pas · Evaluarea BrainMap",
    title: "Totul începe cu o hartă a creierului tău",
    steps: [
      { title: "Evaluarea BrainMap", text: "Stai comod pe scaun, cu o cască ușoară pe cap, cam 30 de minute. Nu doare, nu are ace și nu folosește radiații." },
      { title: "Interpretarea, în aceeași vizită", text: "Specialistul se uită cu tine pe ecran și îți explică, pe limba ta, ce arată harta." },
      { title: "Planul tău", text: "Pleci acasă cu recomandări făcute pentru tine. Dacă și cum continui, hotărăști tu." },
    ],
    cta: "Programează evaluarea BrainMap",
    note: "Dacă mergi mai departe cu noi, îți scădem integral costul BrainMap din program.",
  },
  quiz: {
    eyebrow: "Test gratuit · 2–3\u00a0minute",
    title: "Nu știi de unde să *începi?*",
    lead: "Răspunzi la câteva întrebări simple. La final primești un scor de la 1 la 10 și afli ce înseamnă el pentru tine.",
    step: "Întrebarea 1",
    next: "Următoarea întrebare",
    pickFirst: "Alege un răspuns ca să mergi mai departe.",
  },
  // PROVISIONAL copy (client's draft) — the client is writing the final text.
  neurofit: {
    eyebrow: "NeuroFit by Emmanuel CliniX",
    title: "Îți antrenezi corpul, *acum și creierul are sala lui*",
    text: "Vii regulat, faci ședințe non-invazive pe aparatele clinicii și alegi cum vrei să te simți. Cu timpul, grija pentru creier devine un obicei, la fel ca mersul la sală.",
    experiences: ["Relax", "Focus", "Reset", "Longevity"],
    audienceTitle: "Pentru cine e",
    audience: ["Antreprenori", "Joburi solicitante", "Sportivi"],
    note: "Abonament lunar, fără contract pe un an. Merge bine și după ce termini un program la clinică.",
    cta: "Descoperă NeuroFit",
  },
  complex: {
    eyebrow: "Situații complexe",
    title: "Sprijin și pentru situațiile mai complexe",
    text: "Lucrăm și cu copii și adulți cu ADHD, autism, Parkinson sau alte afecțiuni neurologice. Programul vine pe lângă îngrijirea medicală și îl facem împreună cu medicul care te urmărește.",
    tags: ["ADHD", "Autism", "Parkinson", "Alte afecțiuni neurologice"],
    links: [
      { label: "Pentru copii", href: "/pentru-copii" },
      { label: "Cu ce te ajutăm", href: "/afectiuni-tratate" },
    ],
  },
  testimonials: {
    eyebrow: "Testimoniale",
    title: "Ce spun oamenii care au trecut pragul clinicii",
    ratingLabel: "recenzii pe Google",
    videosTitle: "Povești din clinică",
    prev: "Înapoi",
    next: "Mai departe",
    play: "Pornește povestea",
    reviewSource: "recenzie Google",
    all: "Toate testimonialele",
  },
  final: {
    title: "Nimeni nu ți-a arătat, concret, ce se întâmplă",
    cta: "Programează evaluarea BrainMap",
    note: "Dacă mergi mai departe cu noi, îți scădem integral costul BrainMap din program.",
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
        a: "Evaluarea costă 1.200 de lei și include scanarea, interpretarea pe loc, consultul psihologic și PDF-ul cu recomandări. Dacă începi un program cu noi, suma se scade integral.",
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
