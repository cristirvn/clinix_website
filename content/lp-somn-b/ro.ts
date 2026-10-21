import type { LpSomnBContent, Review, VideoTestimonial } from "./types";

const VIDEOS: VideoTestimonial[] = [
  { name: "Mihaela R.", role: "De la 3h la 6h somn" },
  { name: "Bogdan S.", role: "Fără pastile de somn de 2 luni" },
  { name: "Corina L.", role: "Cauza găsită la prima evaluare" },
];

const REVIEWS_PAGE: Review[] = [
  { initials: "AM", name: "Andreea M.", city: "Cluj-Napoca", quote: "Dorm prima noapte întreagă din ultimii 2 ani. Nu-mi vine să cred." },
  { initials: "RP", name: "Radu P.", city: "București", quote: "Mi-au explicat DE CE nu dorm, nu doar ce să iau. Asta a schimbat tot." },
  { initials: "ID", name: "Ioana D.", city: "Timișoara", quote: "Energia de dimineață s-a întors. Familia a observat prima." },
  { initials: "GV", name: "Gheorghe V.", city: "Brașov", quote: "La 63 de ani credeam că e prea târziu. M-am înșelat frumos." },
];

const REVIEWS_APPLICATION: Review[] = [
  { initials: "AM", name: "Andreea M.", city: "Cluj-Napoca", quote: "Prima noapte întreagă din ultimii 2 ani. Am plâns de bucurie." },
  { initials: "RP", name: "Radu P.", city: "București", quote: "Mi-au spus DE CE nu dorm. Nimeni nu-mi spusese asta în 5 ani." },
  { initials: "GV", name: "Gheorghe V.", city: "Brașov", quote: "La 63 de ani credeam că e prea târziu. Nu era." },
  { initials: "ID", name: "Ioana D.", city: "Timișoara", quote: "Energia de dimineață s-a întors complet." },
  { initials: "CB", name: "Cristian B.", city: "Iași", quote: "Nu mai iau pastile de somn. Dorm natural acum." },
  { initials: "MT", name: "Maria T.", city: "Constanța", quote: "Ceața din minte a dispărut. Gândesc din nou clar." },
  { initials: "EN", name: "Elena N.", city: "Sibiu", quote: "Soțul meu mi-a zis că par alt om. Mai calmă, mai odihnită." },
  { initials: "DP", name: "Dan P.", city: "Oradea", quote: "Plan făcut pentru mine, nu sfaturi de pe internet." },
];

export const lpSomnBRo: LpSomnBContent = {
  meta: {
    page: {
      title: "Emmanuel CliniX — Somn odihnitor, fără pastile | Studiu de caz real",
      description:
        "Vezi cum o femeie de 49 de ani care nu mai dormise bine de 6 ani a ajuns să se trezească odihnită — fără pastile, fără operații, fără radiații. Aplică pentru BrainMap.",
    },
    application: {
      title: "Aplică pentru BrainMap — Emmanuel CliniX",
      description: "Completează aplicația pentru evaluarea BrainMap. Lucrăm doar cu oameni potriviți și implicați.",
    },
    thankYou: {
      title: "Am primit aplicația ta — Emmanuel CliniX",
      description: "Felicitări! Am primit aplicația ta pentru BrainMap. Iată ce urmează.",
    },
  },
  progress: {
    stepOf: "Pasul {n} din 3",
    labels: ["Studiu de caz", "Aplicație", "Confirmare"],
    aria: "Progres",
  },
  legal:
    "BrainMap este un instrument de evaluare inițială și nu constituie diagnostic medical. Rezultatele pot varia de la persoană la persoană. Pentru simptome severe, recomandăm consultarea unui medic specialist.",
  cta: {
    apply: "Aplică pentru BrainMap",
    applyArrow: "Aplică pentru BrainMap →",
  },

  page: {
    hero: {
      eyebrow: "Studiu de caz real · Insomnie",
      titleBefore: "Dormi din nou adânc și trezește-te ",
      titleEm: "plin de energie",
      titleAfter: "",
      subLine: "Fără pastile. Fără operații. Fără radiații.",
      subStrong: "Vezi cum a reușit o femeie de 49 de ani",
      subRest: " care nu mai dormise bine de 6 ani.",
      videoTag: "Studiu de caz · Emmanuel CliniX",
      videoLen: "Povestea ei · 7 min",
      videoNote: "7 minute. Vezi de unde a pornit, prin ce a trecut și cum arată viața ei acum.",
      ctaSub: "Locuri limitate în fiecare lună · Aplicarea este gratuită",
      stats: [
        { num: "6 ani", label: "de insomnie, rezolvați" },
        { num: "2 săpt.", label: "până la primele nopți bune" },
        { num: "Fără", label: "pastile de somn" },
      ],
    },
    whatWeDo: {
      kicker: "Asta e ce facem noi",
      title: "Nu îți dăm încă o pastilă. Găsim cauza reală.",
      text: "Insomnia nu vine „din senin\". De cele mai multe ori, cauza este în felul în care lucrează creierul tău noaptea. BrainMap ne arată exact unde este dezechilibrul — și abia apoi facem un plan doar pentru tine.",
      benefits: [
        "Adormi mai ușor, seara",
        "Te trezești mai rar noaptea",
        "Dimineți cu energie, nu cu ceață",
        "Minte limpede toată ziua",
        "Stare de spirit mai calmă",
        "Control asupra somnului, nu noroc",
      ],
    },
    story: {
      kicker: "Povestea ei, pe scurt",
      title: "A încercat totul, 6 ani. Nimic n-a ținut.",
      lead: "La 49 de ani, după o infecție care i-a lăsat urme, nu mai putea dormi. Nopți albe, ceață în minte, epuizare permanentă.",
      text: "A fost de la un specialist la altul. A ținut diete. A încercat meditații, perfuzii, consultații peste consultații. Fiecare i-a spus altceva. Niciunul nu i-a spus de ce. Se obișnuise cu gândul că „așa va rămâne\".",
      beforeTag: "Înainte",
      before: [
        "Nopți întregi fără somn",
        "Ceață mentală, fără concentrare",
        "Epuizată din prima oră a zilei",
        "Nervi la orice lucru mic",
        "Nu mai putea munci ca înainte",
      ],
      afterTag: "După 2 săptămâni",
      after: [
        "Doarme și se trezește odihnită",
        "Ceața mentală a dispărut",
        "Energie și entuziasm din nou",
        "Calmă, stabilă emoțional",
        "A început proiecte noi. Scrie o carte.",
      ],
      closing: "Prima oară în 6 ani, se simte ea însăși.",
    },
    brainmap: {
      kicker: "Ce este BrainMap",
      title: "O hartă clară a creierului tău. În 20 de minute.",
      text: "Fără durere. Fără ace. Fără radiații. Doar o citire a activității creierului tău, ca să vedem de ce nu dormi — și ce se poate face.",
      steps: [
        { title: "Aplici", text: "Ne spui pe scurt despre somnul tău. Durează 3 minute." },
        { title: "Evaluare BrainMap", text: "Citim activitatea creierului tău. 20 de minute, în clinică." },
        { title: "Discuție 1-la-1", text: "Îți arătăm ce am găsit, pe înțelesul tău." },
        { title: "Plan personal", text: "Pași clari, făcuți pentru cazul tău. Nimic generic." },
      ],
      ctaSub: "Aplicarea durează 3 minute și nu te obligă la nimic.",
    },
    proof: {
      kicker: "Nu e un caz singular",
      title: "Ce spun oamenii care au trecut prin asta",
      videos: VIDEOS,
      reviews: REVIEWS_PAGE,
    },
    notFor: {
      kicker: "Ca să fim onești",
      title: "Pentru cine NU e BrainMap",
      items: [
        "Nu aplica dacă cauți doar o rețetă pentru somnifere — noi nu prescriem tratament fără evaluare.",
        "Nu aplica dacă nu poți veni la o evaluare de 20 de minute, în clinică, în București.",
        "Nu aplica dacă nu ești dispus să urmezi un plan minim 4-6 săptămâni — schimbările reale au nevoie de timp.",
        "Nu aplica dacă vrei doar o părere, fără să faci ceva concret cu ea.",
        "Nu aplica dacă bugetul pentru evaluare e o problemă chiar acum — mai bine aștepți momentul potrivit.",
      ],
    },
    faq: {
      kicker: "Întrebări frecvente",
      title: "Poate te întrebi și tu asta",
      items: [
        {
          q: "Nu am un diagnostic de insomnie. E pentru mine?",
          a: "Da. Majoritatea oamenilor care aplică nu au unul. Tocmai de-asta facem evaluarea — ca să aflăm cauza.",
        },
        { q: "Îmi dați somnifere?", a: "Scopul nostru nu este să te ținem pe pastile. Găsim cauza și lucrăm la ea." },
        {
          q: "Sunt în vârstă. Mai are rost?",
          a: "Da. Vârsta nu este o piedică. Lucrăm cu oameni de toate vârstele și rezultatele apar la fel.",
        },
        { q: "E dureros sau periculos?", a: "Nu. Evaluarea BrainMap este nedureroasă, fără ace și fără radiații." },
        {
          q: "Cât durează până văd o schimbare?",
          a: "La mulți oameni, primele schimbări apar în 1–2 săptămâni. Fiecare caz este diferit, iar noi îți spunem sincer la ce să te aștepți.",
        },
      ],
      ctaSub: "Locuri limitate în fiecare lună.",
    },
  },

  application: {
    intro: {
      kicker: "Ultimul pas înainte de evaluare",
      title: "Aplică pentru BrainMap",
      text: "Urmărește scurt video-ul de mai jos ca să vezi cum arată să lucrezi cu noi. Apoi completează aplicația — durează în jur de 3 minute.",
      videoTag: "Cum lucrăm împreună",
      videoLen: "4 min",
    },
    proof: {
      kicker: "De ce merită să duci aplicația până la capăt",
      title: "Oameni ca tine. Rezultate reale.",
      videos: VIDEOS,
      reviews: REVIEWS_APPLICATION,
    },
    formBox: {
      title: "Aplicația ta",
      sub: "Răspunde sincer. Ne ajută să vedem dacă te putem ajuta cu adevărat.",
    },
  },

  form: {
    groups: [
      "1 · Datele tale de contact",
      "2 · Situația ta cu somnul",
      "3 · Cât te-a costat până acum problema asta",
      "4 · Cum arată succesul pentru tine",
      "5 · De ce ești tu persoana potrivită",
    ],
    name: { label: "Nume complet", placeholder: "Ex: Maria Popescu" },
    phone: { label: "Număr de telefon", placeholder: "07xx xxx xxx" },
    email: { label: "Adresă de email", placeholder: "nume@exemplu.com" },
    age: { label: "Vârsta", placeholder: "Ex: 58" },
    choose: "Alege...",
    duration: {
      label: "De cât timp ai probleme cu somnul?",
      options: ["Sub 3 luni", "3 – 12 luni", "1 – 3 ani", "3 – 6 ani", "Peste 6 ani"],
    },
    tried: {
      label: "Ce ai încercat deja ca să rezolvi problema?",
      hint: "Pastile, ceaiuri, specialiști, diete, aplicații… scrie tot ce-ți vine.",
      placeholder: "Ex: somnifere de la farmacie, două consultații, meditații pe telefon...",
    },
    spentTotal: {
      label: "Cât ai cheltuit până acum, în total, încercând să rezolvi problema?",
      options: ["Sub 500 lei", "500 – 2.000 lei", "2.000 – 5.000 lei", "5.000 – 10.000 lei", "Peste 10.000 lei"],
    },
    spentMonthly: {
      label: "Cât cheltui în prezent, în fiecare lună, pentru problema asta?",
      hint: "Pastile, tratamente, consultații etc.",
      options: [
        "Aproape nimic",
        "Sub 200 lei / lună",
        "200 – 500 lei / lună",
        "500 – 1.000 lei / lună",
        "Peste 1.000 lei / lună",
      ],
    },
    invest: {
      label:
        "Dacă am găsi cauza reală și ți-am da un plan care funcționează, cât ai fi dispus să investești ca să rezolvi definitiv problema?",
      options: [
        "Prefer să discutăm la telefon",
        "Până în 3.000 lei",
        "3.000 – 6.000 lei",
        "6.000 – 10.000 lei",
        "Fac tot ce e nevoie ca să rezolv",
      ],
    },
    success: {
      label: "Ce rezultat ar trebui să-ți aducă acest serviciu ca să spui că a fost un succes?",
      hint: "Fii cât mai concret. Ex: „să dorm 7 ore fără trezire”.",
      placeholder: "Scrie aici...",
    },
    nineMonths: {
      label:
        "Dacă am avea discuția asta peste 9 luni și te-ai uita înapoi — ce ar trebui să se fi întâmplat în acest timp ca să fii mulțumit de progres?",
      placeholder: "Scrie aici...",
    },
    fitCallout:
      "Vrem să lucrăm doar cu oameni 100% potriviți și implicați. Alături de ei dăm cele mai bune rezultate — și de-asta îi alegem cu grijă.",
    fit: { label: "De ce crezi că ești o persoană potrivită pentru acest serviciu?", placeholder: "Scrie aici..." },
    decision: {
      label: "Cât de hotărât ești să rezolvi problema asta acum?",
      hint: "Alege varianta care ți se potrivește cel mai bine.",
      options: [
        { value: "acum", label: "Vreau să rezolv problema acum, cât mai repede" },
        { value: "viitor", label: "Vreau să rezolv cândva problema, în viitorul apropiat" },
        { value: "informare", label: "Doar mă informez, nu vreau să rezolv problema acum" },
      ],
    },
    errors: {
      name: "Te rugăm să îți scrii numele.",
      phone: "Numărul de telefon pare incorect sau incomplet.",
      email: "Adresa de email nu pare validă.",
      consent: "Trebuie să bifezi acordul de a fi contactat ca să poți trimite formularul.",
      server: "A apărut o eroare. Te rugăm să încerci din nou.",
      network: "A apărut o eroare de conexiune. Te rugăm să încerci din nou.",
    },
    submit: "Trimite aplicația →",
    sending: "Se trimite…",
    note: "Datele tale sunt confidențiale și nu sunt date nimănui. Îți răspundem în maximum 24 de ore.",
  },

  thankYou: {
    hero: {
      eyebrow: "Aplicație primită",
      title: "Felicitări! Am primit aplicația ta.",
      subLine: "Ai făcut primul pas real spre nopți odihnitoare.",
      subStrong: "Iată exact ce urmează",
      subRest: " — și ce poți face acum ca să fii pe lista scurtă.",
    },
    letter: {
      kicker: "Un cuvânt de la noi",
      title: "De ce citim fiecare aplicație personal",
      paragraphs: [
        "Salut și îți mulțumesc din suflet că ai avut curajul să aplici.",
        "Știu cum e. Ai mai auzit promisiuni. Ai încercat lucruri care n-au ținut. Poate o parte din tine se întreabă dacă merită să mai speri încă o dată. Te înțeleg — și de-asta nu tratăm pe nimeni „la grămadă\".",
        "Rezultatul pe care l-ai văzut în studiul de caz este real. Dar la fel de important e cine merge cu tine pe drumul ăsta. Noi vrem să fim siguri că te putem ajuta cu adevărat înainte să-ți promitem ceva. De-asta citim fiecare aplicație cu atenție, cu mâna noastră, nu cu un robot.",
        "Dacă suntem potriviți unul pentru celălalt, o să-ți dăm tot ce avem mai bun. Iar dacă vezi mai jos, îți spun exact ce urmează și ce poți face chiar acum.",
      ],
      signName: "Echipa Emmanuel CliniX",
      signTag: "Longevity · Wellness · Neuro",
    },
    next: {
      kicker: "Ce urmează",
      title: "Următorii pași, pas cu pas",
      steps: [
        {
          title: "Îți verificăm aplicația (în 24 de ore)",
          text: "Un specialist din echipă citește ce ne-ai scris și vede dacă evaluarea BrainMap este potrivită pentru situația ta.",
        },
        {
          title: "Vorbim la telefon",
          text: "Te sunăm ca să ne cunoaștem, să-ți răspundem la întrebări și să stabilim împreună când vii la evaluare. Fără presiune, fără obligații.",
        },
        {
          title: "Faci evaluarea BrainMap (20 de minute)",
          text: "În clinică. Nedureros, fără ace, fără radiații. La final știi cauza reală și primești un plan făcut pentru tine.",
        },
      ],
    },
    homework: {
      kicker: "Tema ta până vorbim",
      title: "Două lucruri mici, dar importante",
      text: "Oamenii care fac asta înainte de apel ajung mult mai repede la rezultate.",
      write: {
        title: "Scrie pe o foaie cum ți-ar schimba viața un somn bun",
        text: "Ce ai face cu energia pe care o câștigi? Cu mintea limpede? Notează — o să conteze în discuția noastră.",
      },
      rewatch: {
        title: "Mai vezi o dată studiul de caz",
        text: "Uită-te încă o dată la povestea din prima pagină. Notează ce ți se pare cel mai asemănător cu situația ta.",
      },
      rewatchLink: "→ Vezi mai multe studii de caz asemănătoare",
    },
    call: {
      eyebrow: "Vrei mai repede?",
      title: "Sună-ne tu și treci pe lista scurtă",
      text: "Locurile pentru evaluare sunt limitate în fiecare lună. Cine ne sună primul, e văzut primul. Dacă nu ne suni, nu-i nimic — te sunăm noi în 24 de ore.",
      button: "Sună acum →",
      hours: "Program: Luni–Vineri, 09:00–18:00",
    },
    trust: ["Aplicație verificată de un specialist", "Fără obligații", "Datele tale, confidențiale"],
  },
};
