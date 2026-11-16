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
    title: "Îți antrenezi corpul. *Acum și creierul are sala lui.*",
    sub: "Sesiuni regulate, non-invazive, pentru o minte mai calmă, mai limpede și mai odihnită.",
    videoTitle: "Prezentarea NeuroFit",
    videoNote: "Câteva minute despre program, despre spațiu și despre ce simți după.",
    cta: "Rezervă prima experiență",
    ctaSub: "Lași numărul, te sunăm noi.",
    facts: [
      "Sesiuni non-invazive, pe aparatura clinicii",
      "4 experiențe: Relax, Focus, Reset, Longevity",
      "Abonament lunar, fără angajament anual",
      "Screening de siguranță înainte de prima sesiune",
    ],
  },
  experiences: {
    eyebrow: "Experiențele",
    title: "Ce simți azi și *ce poți schimba*",
    lead: "Alegi experiența după cum vrei să te simți. O poți schimba de la o sesiune la alta.",
    forWhen: "Pentru când",
    items: [
      { name: "Relax", line: "Liniște pentru o minte care nu se oprește.", situations: ["Mintea nu se oprește", "Dormi, dar nu te odihnești"] },
      { name: "Focus", line: "Claritate și atenție pentru zilele pline.", situations: ["Nu te mai concentrezi"] },
      { name: "Reset", line: "Energie pentru când ai rămas fără.", situations: ["Ești pe pilot automat", "După antrenament, ești golit"] },
      { name: "Longevity", line: "Un creier ager, peste ani.", situations: ["Vrei să rămâi ager peste ani"] },
    ],
    note: "Program de brain wellness. Ai un diagnostic? Discută mai întâi cu un specialist.",
  },
  membership: {
    eyebrow: "Abonamentul",
    title: "Cum decurge un abonament",
    lead: "O sesiune e o experiență. Constanța construiește rutina.",
    steps: [
      { title: "Prima experiență", text: "Vii la clinică. Facem screeningul de siguranță și intri în circuitul NeuroFit pentru prima dată." },
      { title: "Alegi abonamentul", text: "Abonament lunar, pe credite, fără angajament anual. Îți explicăm pachetele pe loc." },
      { title: "Rezervi când îți convine", text: "Folosești creditele în ritmul tău și alegi de fiecare dată experiența: Relax, Focus, Reset sau Longevity." },
      { title: "Repeți", text: "Grija pentru creier devine o rutină, la fel de firească precum antrenamentul." },
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
    title: "Ce vrei să știi înainte",
    items: [
      {
        q: "Ce este NeuroFit?",
        a: "Programul de brain wellness al Emmanuel CliniX: sesiuni regulate, non-invazive, pe aparatura clinicii, într-un abonament lunar. Ca o sală de antrenament, dar pentru creier.",
      },
      {
        q: "Este un tratament medical?",
        a: "Nu. NeuroFit e un program de wellness pentru oamenii care vor să se simtă mai calmi, mai limpezi și mai odihniți. Dacă ai un diagnostic, discută mai întâi cu un specialist al clinicii.",
      },
      {
        q: "E sigur? Doare?",
        a: "Toate tehnologiile sunt non-invazive: fără ace, fără radiații, nu intră nimic în corp. Înainte de prima sesiune facem un screening de siguranță.",
      },
      {
        q: "Ce se întâmplă la prima experiență?",
        a: "Facem screeningul de siguranță, alegi experiența potrivită pentru cum vrei să te simți și intri în circuitul NeuroFit.",
      },
      {
        q: "Cum funcționează abonamentul?",
        a: "Abonamentul e lunar și funcționează pe credite. Folosești creditele pentru sesiuni, în ritmul tău. Nu există angajament anual.",
      },
      {
        q: "Cât costă?",
        a: "Prețurile pachetelor le afli la telefon sau în clinică. Lasă-ne numărul și te sunăm noi.",
      },
      {
        q: "Pot continua cu NeuroFit după un tratament la clinică?",
        a: "Da. NeuroFit poate continua după un protocol, ca rezultatele să fie susținute de o rutină constantă.",
      },
    ],
  },
  book: {
    eyebrow: "Următorul pas",
    title: "Fă din brain wellness o parte din *rutina ta*",
    text: "Lasă-ne numele și numărul. Te sunăm să stabilim prima experiență și îți explicăm abonamentele.",
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
