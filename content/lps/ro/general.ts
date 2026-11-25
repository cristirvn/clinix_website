/**
 * /brainmap — the general BrainMap page (home page's main button). Same shape
 * as the condition LPs; niche copy written for no single condition.
 */
import type { BrainmapLp } from "@/content/lps/types";

export const GENERAL_LP: BrainmapLp = {
  slug: "general",
  route: "brainmap",
  concern: "brainmap-general",
  seo: {
    title: "BrainMap: vezi ce se întâmplă, de fapt, în creierul tău — Emmanuel CliniX",
  },
  hero: {
    // "ți-a" kept on one line (the browser would otherwise break the title at its hyphen).
    titleHtml: "Ai încercat de toate, dar <em>nimeni nu <span style=\"white-space:nowrap\">ți-a</span> măsurat creierul</em>",
    lede: "Somnul, stresul, concentrarea și starea ta de spirit au legătură cu felul în care lucrează creierul. În 30 de minute vezi cum arată harta lui.",
  },
  identificare: {
    cards: [
      {
        tag: "Noaptea",
        text: "Adormi greu sau te trezești la 3 și nu mai adormi. Dimineața ești obosit înainte să înceapă ziua.",
      },
      {
        tag: "La birou",
        text: "Citești același paragraf de trei ori. Ce făceai înainte într-o oră, acum îți ia o zi întreagă.",
      },
      {
        tag: "Acasă",
        text: "Te enervezi din nimic, apoi îți pare rău. Sau nu mai simți mare lucru. Și nu știi de ce.",
      },
    ],
    pull: "Situații diferite, dar aceeași întrebare: ce se întâmplă, de fapt, cu mine?",
  },
  why: {
    tried: "Ceaiuri, suplimente, concedii, sport, aplicații, poate chiar pastile. Unele au mers o vreme, altele deloc.",
    assumption: "Toate au pornit de la o presupunere. Nimeni nu s-a uitat întâi la cum lucrează creierul tău.",
    cost: "Între timp trăiești cu jumătate din energie. Se simte la muncă, acasă, în răbdarea pe care o ai cu ai tăi. Și nici nu mai știi de când e așa.",
    analogy: "Îți verifici inima și îți faci analizele de sânge an de an. Creierul nu ți l-a verificat nimeni, deși de el depinde cum dormi, cum reacționezi și cât de limpede gândești.",
  },
  mapSentence: "Vezi ce zone lucrează prea mult, ce zone lucrează prea încet și cum se leagă asta de ce simți tu zi de zi. Vorbim despre creierul tău, nu despre cazuri generale.",
  qualify: {
    fits: [
      "Simți că ceva nu merge, la somn, stres, concentrare sau stare, și nu știi exact ce",
      "Analizele ies bine, dar tu nu te simți bine",
      "Vrei să înțelegi ce se întâmplă înainte să mai încerci ceva",
    ],
    extraExclusion:
      "Ai simptome apărute brusc sau gânduri să îți faci rău. În cazul ăsta, mergi întâi la medic sau sună la 112.",
  },
  faq: [
    {
      q: "Nu am o problemă anume. Are rost să vin?",
      a: "Da. Mulți vin tocmai pentru că nu pot spune exact ce nu merge. Harta arată cum lucrează creierul tău acum, ce e în regulă și ce nu, așa că pornești de la date.",
    },
    {
      q: "E același lucru cu un RMN?",
      a: "Nu. RMN-ul arată cum e construit creierul, iar BrainMap arată cum lucrează, secundă cu secundă. Nu caută leziuni și nu pune diagnostic. Îți arată tiparele din spatele lucrurilor pe care le simți.",
    },
  ],
  form: {
    title: "Vezi ce se întâmplă în creierul tău, în loc să mai ghicești",
    situatieLabel: "Ce te deranjează cel mai mult?",
    situatieOptions: ["Somnul", "Stresul sau anxietatea", "Concentrarea sau starea de spirit"],
    durataLabel: "De cât timp e așa?",
    incercatPlaceholder: "Suplimente, concedii, sport, terapie, tratamente… scrie pe scurt. Ne ajută să știm de unde pornim.",
  },
  legal:
    "BrainMap este un instrument de evaluare inițială și nu constituie diagnostic medical. Rezultatele pot varia. Pentru simptome severe, recomandăm consultarea unui medic specialist.",
};
