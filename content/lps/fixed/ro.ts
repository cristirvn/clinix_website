/** [FIX] copy of the BrainMap LPs — Romanian, word for word from the approved build. */
import type { BrainmapFixed } from "./types";

export const BRAINMAP_FIXED_RO: BrainmapFixed = {
  headerCta: "Aplică pentru BrainMap",
  cta: "Aplică pentru BrainMap →",
  hero: {
    micro: "Completezi un formular scurt. Te sunăm noi.",
    facts: [
      "30 de minute scanarea",
      "Fără radiații, fără ace",
      "Interpretare în aceeași vizită",
      "Fără trimitere de la medicul de familie",
    ],
  },
  identificare: {
    eyebrow: "Situația de acum",
    title: "Recunoști una dintre situațiile astea?",
  },
  why: {
    eyebrow: "De ce nimic nu a ținut",
    title: "Ai încercat. Și tot acolo ești.",
    kicker: "Nimeni nu ți-a arătat, concret, ce se întâmplă.",
    closing: "E greu să repari ceva ce n-ai văzut niciodată cum arată.",
  },
  vsl: {
    eyebrow: "Ce urmează",
    title: "Uite ce măsurăm, înainte să spunem ceva",
    lede: "Patru minute și jumătate. Cristi îți arată ce este BrainMap, cum arată o hartă reală și de ce pornim de la măsurătoare, nu de la simptom.",
    playerTitle: "Emmanuel CliniX",
    points: [
      { title: "Ce citesc senzorii", text: "Activitatea electrică pe care creierul o produce oricum, în fiecare secundă." },
      { title: "Cum arată o hartă", text: "Zone prea active, zone prea lente. Vezi una reală, explicată pe loc." },
      { title: "Ce faci cu ea", text: "De ce o măsurătoare schimbă discuția despre ce urmează." },
    ],
  },
  mechanism: {
    eyebrow: "Mecanismul",
    title: ["Nu pornim de la simptom.", "Pornim de la măsurătoare."],
    steps: [
      {
        badge: "30 min",
        title: "Scanarea",
        text: "Îți punem o cască cu senzori. Stai pe scaun, cu hainele pe tine, cu ochii închiși și apoi deschiși. Senzorii citesc activitatea electrică pe care creierul tău o produce oricum, în fiecare secundă. Ca un microfon care ascultă creierul vorbind.",
      },
      { badge: "Pe ecran", title: "Harta activității creierului tău", text: null },
      {
        badge: "Aceeași zi",
        title: "Interpretarea, pe loc",
        text: "Îți explicăm harta pe înțelesul tău, în aceeași vizită. Pleci știind care e situația și ce urmează.",
      },
    ],
    note: "Nu îți intră nimic în corp. Nu ți se administrează nimic. Fără radiații, fără ace, fără durere. Te ridici de pe scaun și îți continui ziua exact cum ai plănuit-o.",
  },
  visit: {
    eyebrow: "Ce include vizita",
    title: "O oră în total. Atât.",
    rows: [
      { title: "Scanarea BrainMap", text: "30 de minute, cu hainele pe tine." },
      { title: "Interpretarea hărții, pe loc", text: "În cuvinte pe care le înțelegi, nu în termeni medicali." },
      { title: "Consult psihologic, în aceeași vizită", text: "Fără o a doua programare." },
      {
        title: "PDF pe mail sau pe WhatsApp",
        text: "Interpretarea completă și recomandări personalizate pe care le poți aplica acasă, pe cont propriu, fără costuri în plus.",
      },
    ],
    totalLabel: "Tot ce e mai sus, într-o singură vizită",
    price: "1.200 lei",
    keep: "Harta și PDF-ul rămân ale tale, indiferent ce alegi să faci mai departe.",
  },
  proof: {
    eyebrow: "Dovezi",
    title: "Nu trebuie să ne crezi pe cuvânt",
    lede: "Ernesto, Gabriela și Paulina au început exact de unde ești tu acum: de la harta creierului lor.",
    caption: "Testimonial complet",
    playLabel: "Pornește testimonialul",
    prev: "Testimonialul anterior",
    next: "Testimonialul următor",
    dot: "Testimonialul",
    dotsLabel: "Navighează printre testimoniale",
  },
  qualify: {
    eyebrow: "Ca să fim onești",
    title: "Pentru cine e și pentru cine nu e",
    fitsTitle: "E pentru tine dacă",
    fitsFixed: [
      "Ai încercat deja mai multe lucruri și niciunul nu a ținut",
      "Vrei să vezi date despre tine, nu sfaturi generale",
    ],
    notTitle: "Nu aplica dacă",
    notFixed: [
      "Cauți o rețetă rapidă și atât",
      "Vrei garanția că totul se rezolvă după o singură vizită",
      "Nu poți veni la o evaluare de o oră, în clinică, în București",
      "Bugetul pentru evaluare e o problemă chiar acum",
    ],
  },
  promise: {
    eyebrow: "Înainte să aplici",
    title: "Ce îți promitem și ce nu",
    bands: [
      {
        strong: "Nu îți promitem că se rezolvă totul după o vizită.",
        rest: "Îți promitem că pleci de la noi știind clar care e problema și ce urmează.",
      },
      {
        strong: "Dacă vedem că nu te putem ajuta, îți spunem la telefon.",
        rest: "Înainte să plătești ceva și înainte să vii la clinică. Nu programăm pe cineva doar ca să programăm.",
      },
    ],
  },
  faq: {
    eyebrow: "Întrebări",
    title: "FAQ",
    items: [
      { q: "Am nevoie de trimitere de la medicul de familie?", a: "Nu." },
      {
        q: "Iau deja medicamente. Le opresc înainte?",
        a: "Nu opri nimic pe cont propriu. Discuți asta cu medicul care ți le-a prescris. Ne spui la telefon ce iei, ca să ținem cont la interpretare.",
      },
      {
        q: "Ce se întâmplă după scanare?",
        a: "Discutăm ce arată harta și ce opțiuni ai mai departe. Decizi tu. Nu ești obligat la nimic.",
      },
      {
        q: "Cât se așteaptă pentru o programare?",
        a: "Depinde de intervalele libere. Te sunăm în cel mai scurt timp și găsim împreună o oră care ți se potrivește.",
      },
      {
        q: "Ce se întâmplă cu datele mele?",
        a: "Rămân confidențiale. Sunt folosite doar pentru evaluarea ta și nu se transmit mai departe.",
      },
    ],
  },
  formSection: {
    eyebrow: "Primul pas",
    lede: "Completează formularul de mai jos. Te sunăm noi în cel mai scurt timp, ca să programăm.",
    flow: [
      { n: "01", a: "Completezi", b: "formularul" },
      { n: "02", a: "Te sunăm", b: "și programăm" },
      { n: "03", a: "O oră", b: "în clinică" },
      { n: "04", a: "Pleci cu", b: "harta ta" },
    ],
  },
  form: {
    nameLabel: "Nume și prenume",
    namePlaceholder: "Cum să ți ne adresăm",
    ageLabel: "Vârsta",
    agePlaceholder: "Ex.: 47",
    phoneLabel: "Telefon",
    phonePlaceholder: "Ca să te putem programa",
    emailLabel: "Email",
    emailPlaceholder: "Aici îți trimitem confirmarea",
    selectPlaceholder: "Alege varianta apropiată",
    situatieExtra: "Mai multe dintre ele",
    durataOptions: ["De câteva săptămâni", "De 3 până la 12 luni", "De 1 până la 3 ani", "De peste 3 ani"],
    incercatLabel: "Ce ai încercat până acum?",
    optional: "(opțional)",
    priceNoteStrong: "Un BrainMap costă 1.200 de lei",
    priceNoteRest: " și include scanarea, interpretarea pe loc, consultul psihologic și PDF-ul cu recomandări.",
    priceCheck: "Am citit și sunt de acord cu acest preț.",
    gdprBefore: "Sunt de acord să fiu contactat în legătură cu aplicarea mea și cu prelucrarea datelor conform ",
    gdprLink: "politicii de confidențialitate",
    gdprAfter: ".",
    errName: "Te rugăm să îți scrii numele.",
    errAge: "Vârsta pare incorectă.",
    errConsent: "Bifează ambele căsuțe ca să poți trimite aplicarea.",
    submit: "Trimite aplicarea →",
    submitting: "Se trimite…",
    callNote: "Te sunăm noi, în cel mai scurt timp.",
    confidential: "Datele tale sunt confidențiale.",
    successTitle: "Aplicarea a fost trimisă.",
    successBody: "Te sunăm în cel mai scurt timp, ca să programăm. Dacă vrei să ne prinzi mai repede, ne poți suna la",
  },
  sticky: { label: "BrainMap · 1.200 lei", sub: "O oră în clinică, în București" },
  footer: {
    tagline: "Longevity · Wellness · Neuro",
    pageTitle: "Pagină",
    links: { video: "Video", results: "Rezultate", faq: "FAQ", apply: "Aplică acum" },
    contactTitle: "Contact",
  },
};
