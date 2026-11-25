import type { ChildrenContent } from "./types";

// PROVISIONAL copy — client to confirm (minimum age, scan length for children, preparation, what is offered after the scan).
export const CHILDREN_RO: ChildrenContent = {
  seo: {
    title: "Pentru copii și adolescenți",
    description:
      "Atenție, somn, anxietate, învățat, prea mult timp pe ecrane. Cum vedem ce se întâmplă în creierul copilului tău cu BrainMap: neinvaziv, fără radiații, cu tine în cameră.",
  },
  hero: {
    eyebrow: "Pentru copii și adolescenți",
    title: "Întâi înțelegi ce se întâmplă, apoi decizi",
    lead: "Măsurăm cum lucrează creierul copilului tău și îți explicăm totul pe limba ta, ca să nu mai fie nevoie să ghicești.",
    primary: { label: "Hai să vorbim →", href: "/contact" },
  },
  signs: {
    eyebrow: "Ce observă părinții",
    title: "Îți sună cunoscut ceva de aici?",
    items: [
      { title: "Atenția", text: "Se ridică de la teme după cinci minute, uită ce i-ai spus și își pierde lucrurile." },
      { title: "Somnul", text: "Adoarme greu, se trezește noaptea sau e obosit dimineața." },
      { title: "Emoțiile", text: "Își face multe griji, are crize de furie sau se închide în el. Reacționează mai puternic decât ar cere situația." },
      { title: "Învățatul", text: "Învață mult, dar rezultatele nu vin. Citește și nu reține." },
      { title: "Ecranele", text: "Nu mai poate lăsa telefonul sau jocurile din mână." },
    ],
  },
  check: {
    eyebrow: "Ce verificăm",
    title: "O hartă a creierului, fără ace",
    paragraphs: [
      "Copilul poartă o cască cu senzori, care doar citesc activitatea creierului. Stă pe scaun, întâi cu ochii închiși, apoi cu ei deschiși.",
      "Pe hartă vedem ce zone lucrează prea mult și ce zone lucrează prea încet.",
    ],
    points: [
      "Nu are radiații, nu are ace și nu doare.",
      "Luăm pauză oricând are nevoie copilul.",
      "Tu stai în cameră tot timpul.",
    ],
    video: "childrenIntro",
    videoTitle: "Cum decurge BrainMap la copii",
  },
  parents: {
    eyebrow: "Cum lucrăm cu părinții",
    title: "Ești alături de copil la fiecare pas",
    steps: [
      { title: "Ne suni", text: "Ne spui ce ai observat și stabilim împreună dacă evaluarea își are rostul." },
      { title: "Veniți împreună", text: "Stai lângă copil pe toată durata scanării." },
      { title: "Îți explicăm harta", text: "Pe limba ta și, cât se poate, pe limba copilului." },
      { title: "Decizi tu", text: "Primești interpretarea și recomandările într-un PDF. Ce faci mai departe hotărăști tu." },
    ],
  },
  safety: {
    eyebrow: "Siguranță",
    title: "Ce trebuie să știi",
    points: [
      "BrainMap e o evaluare inițială. Nu ține loc de diagnostic medical.",
      "Lucrăm alături de medicul pediatru sau de psihiatrul de copii, fără să le luăm locul. Dacă vedem ceva ce ține de ei, îți spunem.",
      "Îți recomandăm doar ce are rost pentru copilul tău. Dacă nu te putem ajuta, îți spunem de la primul telefon.",
    ],
  },
  faq: {
    eyebrow: "Întrebări",
    title: "Întrebări frecvente",
    items: [
      { q: "De la ce vârstă se poate face?", a: "Depinde de copil, așa că vorbim despre asta la telefon." },
      {
        q: "Cum ne pregătim?",
        a: "E bine să vină odihnit și să fi mâncat, cu părul curat și uscat, fără gel sau fixativ. Restul îți spunem la telefon.",
      },
      {
        q: "Copilul meu ia medicamente. Le oprim înainte?",
        a: "Nu opri nimic de capul tău. Vorbește întâi cu medicul care le-a prescris. Pe noi anunță-ne la telefon ce ia, ca să ținem cont când citim harta.",
      },
    ],
  },
  cta: {
    title: "Vrei să vorbim despre copilul tău?",
    text: "Lasă-ne numărul și te sunăm noi. Îți spunem sincer dacă te putem ajuta.",
    primary: { label: "Te sunăm noi →", href: "/contact" },
    secondary: { label: "Citește mai mult despre BrainMap", href: "/servicii/brainmap" },
  },
};
