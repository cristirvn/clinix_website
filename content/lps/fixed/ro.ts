/** [FIX] copy of the BrainMap LPs — Romanian, word for word from the approved build. */
import type { BrainmapFixed } from "./types";

export const BRAINMAP_FIXED_RO: BrainmapFixed = {
  headerCta: "Programează BrainMap",
  cta: "Programează BrainMap →",
  hero: {
    micro: "Completezi un formular scurt și te sunăm noi.",
    facts: [
      "Scanare de 30 de minute",
      "Fără radiații, fără ace",
      "Interpretare în aceeași vizită",
      "Nu ai nevoie de trimitere",
    ],
  },
  identificare: {
    eyebrow: "Situația de acum",
    title: "Te regăsești în vreuna dintre situațiile astea?",
  },
  why: {
    eyebrow: "De ce nimic nu a ținut",
    title: "Ai încercat multe și ești tot acolo",
    kicker: "Nimeni nu ți-a arătat, concret, ce se întâmplă",
    closing: "E greu să îmbunătățești ceva ce n-ai văzut niciodată.",
  },
  vsl: {
    eyebrow: "Ce urmează",
    title: "Uite ce măsurăm, concret",
    lede: "În 4 minute și jumătate, Cristi îți arată o hartă adevărată.",
    playerTitle: "Emmanuel CliniX",
    points: [
      { title: "Ce citesc senzorii", text: "Activitatea electrică pe care creierul o produce oricum, în fiecare secundă." },
      { title: "Cum arată o hartă", text: "Zone care lucrează prea mult și zone care lucrează prea încet, pe o hartă reală explicată pe loc." },
      { title: "Ce faci cu ea", text: "Cum te ajută harta să alegi ce faci mai departe." },
    ],
  },
  mechanism: {
    eyebrow: "Mecanismul",
    title: ["Întâi măsurăm,", "abia apoi recomandăm"],
    steps: [
      {
        badge: "30 min",
        title: "Scanarea",
        text: "Îți punem pe cap o cască cu senzori. Stai pe scaun, îmbrăcat, întâi cu ochii închiși, apoi cu ei deschiși. Senzorii citesc activitatea electrică pe care creierul o produce oricum, în fiecare secundă. E ca un microfon care ascultă ce face creierul.",
      },
      { badge: "Pe ecran", title: "Harta activității creierului tău", text: null },
      {
        badge: "Aceeași zi",
        title: "Interpretarea, pe loc",
        text: "Îți explicăm harta pe limba ta, în aceeași vizită. Pleci știind unde ești și ce urmează.",
      },
    ],
    note: "Nu îți intră nimic în corp și nu primești niciun medicament. Nu are radiații, nu are ace și nu doare. Te ridici de pe scaun și îți continui ziua exact cum ai plănuit-o.",
  },
  visit: {
    eyebrow: "Ce include vizita",
    title: "Totul durează aproximativ o oră",
    rows: [
      { title: "Scanarea BrainMap", text: "Cam 30 de minute. Rămâi îmbrăcat." },
      { title: "Interpretarea hărții, pe loc", text: "Îți explicăm harta pe limba ta, fără termeni medicali." },
      { title: "Consult psihologic, în aceeași vizită", text: "Nu trebuie să mai revii pentru el." },
      {
        title: "PDF pe mail sau pe WhatsApp",
        text: "Interpretarea completă și recomandări făcute pentru tine, pe care le poți pune în practică singur, acasă, fără alte costuri.",
      },
    ],
    totalLabel: "Tot ce e mai sus, într-o singură vizită",
    price: "1.200 lei",
    keep: "Harta și PDF-ul rămân ale tale, orice ai alege să faci mai departe. Dacă mergi mai departe cu noi, îți scădem integral suma din program.",
  },
  proof: {
    eyebrow: "Dovezi",
    title: "Nu trebuie să ne crezi pe cuvânt",
    lede: "Au pornit exact de unde ești tu acum.",
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
      "Vrei date despre tine, în loc de sfaturi generale",
    ],
    notTitle: "Nu e pentru tine dacă",
    notFixed: [
      "Cauți o rețetă rapidă și atât",
      "Vrei garanția că totul se rezolvă după o singură vizită",
      "Nu poți veni la o evaluare de o oră, în clinică, în București",
      "Bugetul pentru evaluare e o problemă chiar acum",
    ],
  },
  promise: {
    eyebrow: "Înainte să te programezi",
    title: "Ce îți promitem și ce nu",
    bands: [
      {
        strong: "Ce îți putem promite e că pleci de la noi știind clar unde ești și ce urmează.",
        rest: "Restul se construiește în timp.",
      },
      {
        strong: "Dacă vedem că nu te putem ajuta, îți spunem de la telefon, înainte să plătești ceva și înainte să vii la clinică.",
        rest: "Programăm doar oamenii pe care chiar îi putem ajuta.",
      },
    ],
  },
  faq: {
    eyebrow: "Întrebări",
    title: "FAQ",
    items: [
      { q: "Am nevoie de trimitere de la medicul de familie?", a: "Nu. Te poți programa direct." },
      {
        q: "Iau deja medicamente. Le opresc înainte?",
        a: "Nu opri nimic de capul tău. Vorbește întâi cu medicul care ți le-a prescris. Pe noi anunță-ne la telefon ce iei, ca să ținem cont când citim harta.",
      },
      {
        q: "Ce se întâmplă după scanare?",
        a: "Ne uităm împreună pe hartă și îți spunem ce opțiuni ai. Hotărăști tu dacă mergi mai departe, fără nicio obligație.",
      },
      {
        q: "Cât se așteaptă pentru o programare?",
        a: "Depinde de locurile libere. Te sunăm în cel mai scurt timp și găsim împreună o oră care ți se potrivește.",
      },
      {
        q: "Ce se întâmplă cu datele mele?",
        a: "Rămân confidențiale. Le folosim doar pentru evaluarea ta și nu le dăm nimănui.",
      },
    ],
  },
  formSection: {
    eyebrow: "Primul pas",
    lede: "Completează formularul și te sunăm noi pentru programare.",
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
    selectPlaceholder: "Alege varianta cea mai apropiată",
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
    errConsent: "Bifează ambele căsuțe ca să poți trimite cererea.",
    submit: "Trimite cererea →",
    submitting: "Se trimite…",
    callNote: "Te sunăm noi, în cel mai scurt timp.",
    confidential: "Datele tale sunt confidențiale.",
    successTitle: "Cererea a fost trimisă.",
    successBody: "Te sunăm în cel mai scurt timp, ca să programăm. Dacă vrei să ne prinzi mai repede, ne poți suna la",
  },
  sticky: { label: "BrainMap · 1.200 lei", sub: "O oră în clinică, în București" },
  footer: {
    tagline: "Longevity · Wellness · Neuro",
    pageTitle: "Pagină",
    links: { video: "Video", results: "Rezultate", faq: "FAQ", apply: "Programează-te" },
    contactTitle: "Contact",
  },
};
