import type { NeuroFitContent } from "./types";

// PROVISIONAL copy — drafted from the client's notes and neurofit.ro; the client is writing the final text.
export const NEUROFIT_RO: NeuroFitContent = {
  seo: {
    title: "NeuroFit — sala ta pentru creier, în București",
    description:
      "NeuroFit by Emmanuel CliniX: sesiuni regulate, non-invazive, de brain wellness, într-un abonament lunar. Relax, Focus, Reset, Longevity.",
  },
  nav: {
    label: "Meniu NeuroFit",
    items: [
      { label: "Experiențe", href: "#experiente" },
      { label: "Cum funcționează", href: "#abonament" },
      { label: "Întrebări", href: "#intrebari" },
    ],
    cta: "Rezervă prima experiență",
    ctaShort: "Rezervă",
    back: "Emmanuel CliniX",
  },
  hero: {
    eyebrow: "Brain wellness în București",
    title: "Îți antrenezi corpul, *acum și creierul are sala lui*",
    sub: "Vii regulat la sesiuni non-invazive și pleci cu mintea mai liniștită și mai limpede.",
    videoTitle: "Prezentarea NeuroFit",
    videoNote: "Câteva minute în care vezi spațiul și afli cum decurge o sesiune.",
    cta: "Rezervă prima experiență",
    ctaSub: "Lași numărul și te sunăm noi.",
    facts: [
      "Sesiuni non-invazive, pe aparatura clinicii",
      "4 experiențe: Relax, Focus, Reset, Longevity",
      "Abonament lunar, fără contract pe un an",
      "Verificare de siguranță înainte de prima sesiune",
    ],
  },
  experiences: {
    eyebrow: "Experiențele",
    title: "Ce simți azi și *ce poți schimba*",
    lead: "Alegi experiența după cum vrei să te simți în ziua aia și o poți schimba de la o sesiune la alta.",
    forWhen: "Pentru zilele în care",
    items: [
      { name: "Relax", line: "Liniște pentru o minte care nu se oprește.", situations: ["Mintea nu se oprește", "Dormi, dar nu te odihnești"] },
      { name: "Focus", line: "Mintea limpede în zilele aglomerate.", situations: ["Nu te mai poți concentra"] },
      { name: "Reset", line: "Pentru când simți că ai rămas fără energie.", situations: ["Ești pe pilot automat", "După sală te simți golit"] },
      { name: "Longevity", line: "Ca să rămâi ager și peste ani.", situations: ["Vrei să-ți păstrezi mintea ageră"] },
    ],
    note: "Program de brain wellness. Ai un diagnostic? Discută mai întâi cu un specialist.",
  },
  membership: {
    eyebrow: "Abonamentul",
    title: "Cum decurge un abonament",
    lead: "O sesiune te ajută pe moment. Rutina o construiești venind constant.",
    steps: [
      { title: "Prima experiență", text: "Vii la clinică, facem verificarea de siguranță și intri pentru prima dată în circuitul NeuroFit." },
      { title: "Alegi abonamentul", text: "Abonamentul e lunar, pe credite, fără contract pe un an. Îți explicăm pachetele pe loc." },
      { title: "Rezervi când îți convine", text: "Folosești creditele când îți convine și alegi de fiecare dată experiența: Relax, Focus, Reset sau Longevity." },
      { title: "Repeți", text: "Cu timpul, grija pentru creier devine un obicei, la fel ca mersul la sală." },
    ],
    note: "Prețurile pachetelor le afli la telefon sau în clinică.",
  },
  reviews: {
    eyebrow: "Recenzii Google · Emmanuel CliniX",
    title: "Oamenii ne recomandă",
    ratingLabel: "recenzii pe Google",
    source: "recenzie Google",
  },
  faq: {
    eyebrow: "Întrebări",
    title: "Ce ai vrea să știi înainte",
    items: [
      {
        q: "Ce este NeuroFit?",
        a: "E programul de brain wellness al Emmanuel CliniX. Vii regulat la sesiuni non-invazive pe aparatele clinicii, cu un abonament lunar. Seamănă cu o sală de sport, doar că lucrezi cu creierul.",
      },
      {
        q: "E un program medical?",
        a: "Nu. NeuroFit e un program de wellness, pentru cei care vor să se simtă mai liniștiți și mai limpezi la minte. Dacă ai un diagnostic, vorbește întâi cu un specialist al clinicii.",
      },
      {
        q: "E sigur? Doare?",
        a: "Toate aparatele sunt non-invazive: nu au ace, nu folosesc radiații și nu îți intră nimic în corp. Înainte de prima sesiune facem o verificare de siguranță.",
      },
      {
        q: "Ce se întâmplă la prima experiență?",
        a: "Facem verificarea de siguranță, alegi experiența după cum vrei să te simți și intri în circuitul NeuroFit.",
      },
      {
        q: "Cum funcționează abonamentul?",
        a: "Abonamentul e lunar și merge pe credite. Le folosești pentru sesiuni, când îți convine, și nu semnezi nimic pe un an.",
      },
      {
        q: "Cât costă?",
        a: "Prețurile pachetelor ți le spunem la telefon sau în clinică. Lasă-ne numărul și te sunăm noi.",
      },
      {
        q: "Pot continua cu NeuroFit după un program la clinică?",
        a: "Da. NeuroFit e potrivit și după un program la clinică, ca să-ți păstrezi o rutină constantă.",
      },
    ],
  },
  book: {
    eyebrow: "Următorul pas",
    title: "Fă din brain wellness o parte din *rutina ta*",
    text: "Lasă-ne numele și numărul de telefon. Te sunăm noi ca să stabilim prima experiență și îți explicăm abonamentele.",
    emailLabel: "Email (opțional)",
    experienceLabel: "Ce experiență te interesează?",
    experienceOptions: ["Relax", "Focus", "Reset", "Longevity", "Nu știu încă"],
    submit: "Rezervă prima experiență",
    successTitle: "Mulțumim. Te sunăm curând.",
    successText: "Un coleg te contactează în cel mult o zi lucrătoare, ca să stabilim prima experiență.",
    orCall: "Sau sună-ne direct:",
  },
  footer: {
    line: "NeuroFit by Emmanuel CliniX · Program de brain wellness.",
    disclaimer: "Informațiile de pe această pagină nu înlocuiesc evaluarea, diagnosticul sau tratamentul medical.",
    back: "Mergi la Emmanuel CliniX",
  },
};
