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
    title: "Întâi înțelegi. Apoi decizi.",
    lead: "Nu trebuie să ghicești. Măsurăm întâi, apoi îți explicăm pe înțelesul tău.",
    primary: { label: "Vreau să vorbim →", href: "/contact" },
  },
  signs: {
    eyebrow: "Ce observă părinții",
    title: "Recunoști ceva din astea?",
    lead: "De obicei, un singur lucru se repetă și nu trece.",
    items: [
      { title: "Atenția", text: "Se ridică de la teme după cinci minute, uită ce i s-a spus, pierde lucrurile." },
      { title: "Somnul", text: "Adoarme greu, se trezește noaptea sau e obosit dimineața." },
      { title: "Emoțiile", text: "Îngrijorare, crize de furie sau retragere. Reacții mai mari decât situația." },
      { title: "Învățatul", text: "Muncește mult, dar rezultatele nu vin. Citește și nu reține." },
      { title: "Ecranele", text: "Nu se mai desprinde de telefon sau de jocuri." },
    ],
  },
  check: {
    eyebrow: "Ce verificăm",
    title: "O hartă a creierului. Fără ace.",
    paragraphs: [
      "Copilul poartă o cască cu senzori care doar citesc activitatea creierului. Stă pe scaun, cu ochii închiși și apoi deschiși.",
      "Comparăm harta cu valorile normale pentru vârsta lui și vedem zonele prea active sau prea lente.",
    ],
    points: [
      "Fără radiații, fără ace, fără durere.",
      "Facem pauze oricând e nevoie.",
      "Tu stai în cameră tot timpul.",
    ],
    video: "childrenIntro",
    videoTitle: "Cum decurge BrainMap la copii",
  },
  parents: {
    eyebrow: "Cum lucrăm cu părinții",
    title: "Tu ești parte din fiecare pas.",
    steps: [
      { title: "Ne suni", text: "Ne spui ce observi. Stabilim împreună dacă evaluarea are sens." },
      { title: "Veniți împreună", text: "Stai lângă copil pe toată durata scanării." },
      { title: "Îți explicăm harta", text: "Pe înțelesul tău și, pe cât se poate, și pe al copilului." },
      { title: "Decizi tu", text: "Primești PDF-ul cu interpretarea și recomandările. Nu ești obligat la nimic." },
    ],
  },
  safety: {
    eyebrow: "Siguranță",
    title: "Ce trebuie să știi",
    points: [
      "BrainMap este un instrument de evaluare inițială și nu constituie diagnostic medical.",
      "Nu înlocuim medicul pediatru sau psihiatrul pentru copii. Dacă vedem ceva ce ține de ei, îți spunem.",
      "Nu recomandăm nimic doar ca să recomandăm. Dacă nu te putem ajuta, îți spunem la telefon.",
    ],
  },
  faq: {
    eyebrow: "Întrebări",
    title: "Întrebări frecvente",
    items: [
      { q: "De la ce vârstă se poate face?", a: "Vârsta potrivită o discutăm la telefon, în funcție de copil." },
      {
        q: "Cum ne pregătim?",
        a: "Copilul să fie odihnit și să fi mâncat. Părul curat și uscat, fără gel sau spray. Restul îți spunem la telefon.",
      },
      {
        q: "Copilul meu ia medicamente. Le oprim înainte?",
        a: "Nu opriți nimic pe cont propriu. Discută asta cu medicul care le-a prescris. Ne spui la telefon ce ia, ca să ținem cont la interpretare.",
      },
    ],
  },
  cta: {
    title: "Vrei să vorbim despre copilul tău?",
    text: "Lasă-ne numărul. Te sunăm și îți spunem sincer dacă te putem ajuta.",
    primary: { label: "Te sunăm noi →", href: "/contact" },
    secondary: { label: "Află mai multe despre BrainMap", href: "/servicii/brainmap" },
  },
};
