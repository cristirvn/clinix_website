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
    titleHtml: "Ai încercat de toate. <em>Nimeni nu a măsurat.</em>",
    lede: "Somnul, stresul, concentrarea, starea de spirit se văd pe o hartă a activității creierului tău. În 30 de minute vezi cum arată.",
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
    pull: "Situații diferite. Aceeași întrebare: ce se întâmplă, de fapt, cu mine?",
  },
  why: {
    tried: "Ceaiuri. Suplimente. Concedii. Sport. Aplicații. Poate și un tratament. Unele au mers o vreme. Altele deloc.",
    assumption: "Toate au pornit de la o presupunere. Nimeni nu s-a uitat întâi la cum lucrează creierul tău.",
    cost: "Între timp trăiești pe jumătate de energie. Munca, familia, răbdarea cu ai tăi. Plătesc toate câte puțin și nu poți spune exact de când.",
    analogy: "Inima ți-o verifici. Analizele de sânge ți le faci an de an. Creierul — niciodată. Deși el decide cum dormi, cum reacționezi și cât de limpede gândești.",
  },
  mapSentence: "Vezi ce zone sunt prea active, care sunt prea lente și cum se leagă asta de ce simți tu în fiecare zi. În cazul tău, nu în general.",
  qualify: {
    fits: [
      "Simți că ceva nu merge — somn, stres, concentrare sau stare — și nu știi exact ce",
      "Analizele ies bine, dar tu nu te simți bine",
      "Vrei să înțelegi ce se întâmplă înainte să mai încerci ceva",
    ],
    extraExclusion:
      "Ai simptome apărute brusc sau gânduri de a-ți face rău — mergi întâi la medic sau sună la 112",
  },
  faq: [
    {
      q: "Nu am o problemă anume. Are rost să vin?",
      a: "Da. Mulți vin tocmai pentru că nu pot spune exact ce nu merge. Harta arată cum lucrează creierul tău acum: ce e în regulă și ce nu. Pornești de la date, nu de la o bănuială.",
    },
    {
      q: "E același lucru cu un RMN?",
      a: "Nu. RMN-ul arată cum e construit creierul. BrainMap arată cum lucrează: activitatea lui, secundă cu secundă. Nu caută leziuni și nu pune diagnostic. Arată tiparele din spatele lucrurilor pe care le simți.",
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
