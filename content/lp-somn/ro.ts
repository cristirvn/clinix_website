import type { LpSomnContent } from "./types";

/** Approved Romanian copy — word for word from the previous build (`app/lp/somn`, `LpApply`). */
export const lpSomnRo: LpSomnContent = {
  meta: {
    title: "Ai Insomnie? Află Cauza.",
    description:
      "BrainMap îți arată în 20 de minute cauza reală din spatele insomniei tale — și planul ca să dormi din nou.",
  },
  ctaLabel: "Aplică pentru BrainMap →",
  hero: {
    titleStart: "Dormi opt ore și te trezești ",
    titleEm: "ca și cum n-ai fi dormit deloc",
    sub: "Somnul tău prost se vede pe o hartă a activității creierului tău. Într-o oră afli exact de unde pleacă.",
    videoTitle: "VSL · Emmanuel CliniX",
    videoNote:
      "9 minute. Vezi de ce nimic din ce ai încercat n-a ținut — și ce măsurăm noi înainte să spunem ceva.",
    btnSub: "Completezi un formular scurt. Te sunăm noi.",
    facts: [
      "30 de minute scanarea",
      "Fără radiații, fără ace",
      "Interpretare în aceeași vizită",
      "Fără trimitere de la medicul de familie",
    ],
  },
  problem: {
    eyebrow: "Situația de acum",
    title: "Recunoști una dintre situațiile astea?",
    cards: [
      { tag: "Seara", text: "Stai în pat cu ochii în tavan. Ore în șir. Corpul e frânt, dar capul nu se oprește." },
      { tag: "La trei noaptea", text: "Adormi repede. Și la trei noaptea ești treaz. Nu te mai ia somnul, orice ai face." },
      { tag: "Dimineața", text: "Dormi opt ore și te trezești fără pic de energie. Ca și cum ai tras de tine toată noaptea." },
    ],
    pull: "Trei situații diferite. Aceeași întrebare la toți: de ce tocmai la mine?",
  },
  why: {
    eyebrow: "De ce nimic nu a ținut",
    title: "Ai încercat. Și tot acolo ești.",
    first:
      "Ceaiuri. Melatonină. Telefonul scos din dormitor. Aplicații de respirație. Ora fixă de culcare. Poate a mers o săptămână. Poate deloc.",
    p1: "Toate au fost presupuneri. Soluții generale pentru o problemă care nu e generală.",
    highlight: "Nimeni nu ți-a arătat, concret, ce se întâmplă.",
    p2: "Inima ți-o verifici. Analizele de sânge ți le faci an de an. Creierul — niciodată. Deși el decide dacă dormi sau nu.",
    p3: "E greu să repari ceva ce n-ai văzut niciodată cum arată.",
  },
  mechanism: {
    eyebrow: "Mecanismul",
    title: "Nu pornim de la simptom. Pornim de la măsurătoare.",
    steps: [
      {
        label: "30 min",
        title: "Scanarea",
        text: "Îți punem o cască cu senzori. Stai pe scaun, cu hainele pe tine, cu ochii închiși și apoi deschiși. Senzorii citesc activitatea electrică pe care creierul tău o produce oricum, în fiecare secundă. Ca un microfon care ascultă creierul vorbind.",
      },
      {
        label: "Pe ecran",
        title: "Harta activității creierului tău",
        text: "Vezi ce zone sunt prea active, care sunt prea lente și unde exact se întrerupe somnul adânc. În cazul tău, nu în general.",
      },
      {
        label: "Aceeași zi",
        title: "Interpretarea, pe loc",
        text: "Îți explicăm harta pe înțelesul tău, în aceeași vizită. Pleci știind care e situația și ce urmează.",
      },
    ],
    note: "Nu îți intră nimic în corp. Nu ți se administrează nimic. Fără radiații, fără ace, fără durere. Te ridici de pe scaun și îți continui ziua exact cum ai plănuit-o.",
  },
  expect: {
    eyebrow: "Proces",
    title: "La ce să te aștepți de la noi",
    steps: [
      { num: "01", title: "Completezi formularul", text: "Un minut. Ne spui cum arată nopțile tale." },
      { num: "02", title: "Te sunăm noi", text: "Vorbim despre situația ta și facem programarea la telefon." },
      { num: "03", title: "Vii la evaluare", text: "O oră în clinică: scanare, interpretare, consult psihologic." },
      { num: "04", title: "Pleci cu harta ta", text: "Plus un PDF cu interpretarea și recomandările tale." },
    ],
  },
  benefits: {
    eyebrow: "Rezultat",
    title: "Ce beneficii o să vezi",
    items: [
      "Adormi mai ușor",
      "Te trezești mai rar noaptea",
      "Energie constantă toată ziua",
      "Minte limpede, fără ceață",
      "Stare de spirit mai stabilă",
      "Control, nu noroc",
    ],
  },
  includes: {
    eyebrow: "Ce include vizita",
    title: "O oră în total. Atât.",
    items: [
      { bold: "Scanarea BrainMap.", text: "Stai pe scaun, 30 de minute, cu hainele pe tine." },
      { bold: "Interpretarea hărții, pe loc.", text: "În cuvinte pe care le înțelegi, nu în termeni medicali." },
      { bold: "Consult psihologic, în aceeași vizită.", text: "Fără o a doua programare." },
      {
        bold: "PDF pe mail sau pe WhatsApp.",
        text: "Interpretarea completă și recomandări personalizate pe care le poți aplica acasă, pe cont propriu, fără costuri în plus.",
      },
    ],
    priceLabel: "Tot ce e mai sus, într-o singură vizită",
    price: "1.200 lei",
    note: "Harta și PDF-ul rămân ale tale, indiferent ce alegi să faci mai departe.",
  },
  results: {
    eyebrow: "Dovezi",
    title: "Ce rezultate au avut alte persoane",
    videos: [
      { video: "lpSomnTestimonialMihai", name: "Mihai T.", role: "De la 4h la 7h somn" },
      { video: "lpSomnTestimonialSimona", name: "Simona V.", role: "Cauza găsită în 20 min" },
      { video: "lpSomnTestimonialCristian", name: "Cristian B.", role: "Fără somnifere acum" },
    ],
    reviews: [
      {
        quote: "Credeam că sunt condamnată la nopți albe. Acum dorm prima noapte întreagă din ultimii 2 ani.",
        initials: "AM",
        name: "Andreea M.",
        role: "34 ani, Cluj-Napoca",
      },
      {
        quote: "BrainMap mi-a explicat DE CE nu dorm, nu doar ce să fac. Plan pentru mine, nu generic.",
        initials: "RP",
        name: "Radu P.",
        role: "41 ani, București",
      },
      {
        quote: "Energia mea de dimineață s-a schimbat complet. Colegii mi-au zis primii că arăt altfel.",
        initials: "ID",
        name: "Ioana D.",
        role: "29 ani, Timișoara",
      },
    ],
    starsLabel: "5 din 5 stele",
  },
  qualify: {
    eyebrow: "Ca să fim onești",
    title: "Pentru cine e și pentru cine NU e BrainMap",
    forTitle: "E pentru tine dacă",
    forItems: [
      "Nu poți adormi seara, deși ești frânt",
      "Te trezești noaptea și nu mai adormi",
      "Dormi destul și te trezești fără energie",
      "Ai încercat deja mai multe lucruri și niciunul n-a ținut",
      "Vrei să vezi date despre tine, nu sfaturi generale",
    ],
    notTitle: "Nu aplica dacă",
    notItems: [
      "Cauți o rețetă rapidă și atât",
      "Vrei garanția că totul se rezolvă după o singură vizită",
      "Nu poți veni la o evaluare de o oră, în clinică, în București",
      "Bugetul pentru evaluare e o problemă chiar acum",
    ],
  },
  promise: {
    eyebrow: "Înainte să aplici",
    title: "Ce îți promitem și ce nu",
    rows: [
      {
        bold: "Nu îți promitem că se rezolvă totul după o vizită.",
        text: "Îți promitem că pleci de la noi știind clar care e problema și ce urmează.",
      },
      {
        bold: "Dacă vedem că nu te putem ajuta, îți spunem la telefon.",
        text: "Înainte să plătești ceva și înainte să vii la clinică. Nu programăm pe cineva doar ca să programăm.",
      },
    ],
  },
  faq: {
    eyebrow: "Întrebări",
    title: "FAQ",
    items: [
      { q: "Nu am diagnostic de insomnie. E pentru mine?", a: "Da. Majoritatea aplicanților nu au unul. De-asta facem evaluarea.", open: true },
      { q: "Îmi dați somnifere?", a: "Nu. Găsim cauza. Nu prescriem pastile." },
      { q: "Cât durează, în total?", a: "O oră. 30 de minute scanarea, restul interpretarea hărții și consultul psihologic." },
      {
        q: "Doare? E periculos?",
        a: "Nu. Senzorii doar citesc activitatea pe care creierul o produce oricum. Nu se administrează nimic, nu intră nimic în corp, nu există radiații și nu există perioadă de recuperare.",
      },
      { q: "Cât durează până văd rezultate?", a: "De obicei 1-2 săptămâni." },
      {
        q: "Cât costă?",
        a: "Evaluarea costă 1.200 de lei și include scanarea, interpretarea pe loc, consultul psihologic și PDF-ul cu recomandări. Dacă începi un program cu noi, suma se scade integral.",
      },
      { q: "Am nevoie de trimitere de la medicul de familie?", a: "Nu." },
      {
        q: "Iau deja medicamente pentru somn. Le opresc înainte?",
        a: "Nu opri nimic pe cont propriu. Discuți asta cu medicul care ți le-a prescris. Ne spui la telefon ce iei, ca să ținem cont la interpretare.",
      },
      {
        q: "Cu ce plec acasă?",
        a: "Harta activității creierului tău și un PDF cu interpretarea completă și recomandări personalizate. Rămân ale tale.",
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
      { q: "Dacă aplic și nu sunt un fit?", a: "Îți spunem direct. Nu plătești nimic." },
    ],
  },
  apply: {
    title: "Spune-ne cum arată nopțile tale",
    sub: "Un minut. Îți răspunde un om din echipă, în 24 de ore.",
    note: "Datele tale sunt confidențiale.",
    form: {
      name: { label: "Nume și prenume", placeholder: "Cum să ți ne adresăm" },
      age: { label: "Vârsta", placeholder: "Ex.: 47" },
      phone: { label: "Telefon", placeholder: "Ca să te putem programa" },
      email: { label: "Email", placeholder: "Aici îți trimitem răspunsul scris" },
      situatie: {
        label: "Care e situația ta?",
        placeholder: "Alege varianta apropiată",
        options: [
          { value: "nu-adorm", label: "Nu pot adormi seara" },
          { value: "trezire-noapte", label: "Mă trezesc noaptea și nu mai adorm" },
          { value: "energie-scazuta", label: "Dorm destul, dar mă trezesc fără energie" },
          { value: "mai-multe", label: "Mai multe dintre ele" },
        ],
      },
      durata: {
        label: "De cât timp nu dormi bine?",
        placeholder: "Alege varianta apropiată",
        options: [
          { value: "cateva-saptamani", label: "De câteva săptămâni" },
          { value: "3-12-luni", label: "De 3 până la 12 luni" },
          { value: "1-3-ani", label: "De 1 până la 3 ani" },
          { value: "peste-3-ani", label: "De peste 3 ani" },
        ],
      },
      incercat: {
        label: "Ce ai încercat până acum?",
        optional: "(opțional)",
        placeholder: "Somnifere, suplimente, medici, terapie... scrie pe scurt. Ne ajută să știm de unde pornim.",
      },
      priceNote:
        "Evaluarea costă 1.200 de lei și include scanarea, interpretarea pe loc, consultul psihologic și PDF-ul cu recomandări. Dacă începi un program cu noi, suma se scade integral.",
      priceConfirm: "Am citit și sunt de acord cu acest preț.",
      consent: "Sunt de acord să fiu contactat în legătură cu aplicarea mea.",
      privacyLink: "Politica de confidențialitate",
      submit: "Trimite aplicarea →",
      sending: "Se trimite…",
      microcopy:
        "Îți răspunde un om din echipă, nu un robot. Dacă vedem că nu suntem noi răspunsul potrivit pentru tine, îți spunem direct.",
      errors: {
        name: "Scrie-ne numele, ca să știm cum să ți ne adresăm.",
        ageMissing: "Scrie-ne și vârsta. Contează pentru cum citim evaluarea.",
        ageInvalid: "Scrie vârsta în cifre, te rugăm.",
        phone: "Avem nevoie de un număr valid, altfel nu te putem programa.",
        email: "Verifică adresa — pare să lipsească ceva.",
        emailImplausible: "Introdu o adresă personală Gmail sau Yahoo validă (nu una de test).",
        situatie: "Alege varianta care se potrivește cel mai bine.",
        durata: "Alege de cât timp durează, ca să știm de unde pornim.",
        pretOk: "Trebuie să confirmi că ești de acord cu prețul ca să poți trimite formularul.",
        consent: "Fără bifa asta nu avem voie să îți răspundem.",
        form: "Ceva n-a mers la trimitere. Mai încearcă o dată, iar dacă nu merge nici acum, scrie-ne la contact@emmanuelclinix.ro.",
      },
    },
  },
  legal:
    "BrainMap este un instrument de evaluare inițială și nu constituie diagnostic medical. Rezultatele pot varia. Pentru simptome severe, recomandăm consultarea unui medic specialist.",
  thanks: {
    meta: { title: "Am primit aplicarea ta" },
    title: "Am primit-o. Mulțumim că ne-ai scris.",
    p1: "Un om din echipă îți citește aplicarea personal și îți răspunde în cel mult 24 de ore. Până atunci nu trebuie să faci nimic.",
    p2: "Dacă din ce ne-ai scris reiese că nu suntem noi răspunsul potrivit, îți spunem și asta, direct, și îți spunem încotro să te uiți.",
    contactLead: "Dacă vrei să ne întrebi ceva între timp:",
    or: "sau",
  },
};
