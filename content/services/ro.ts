import type { ServicesLocale } from "./types";

/**
 * Service pages — Romanian.
 * BrainMap: wording reused from the approved copy (`content/pages/ro/how-it-works.ts`,
 * `content/lps/fixed/ro.ts`). taVNS, tPBM, CES and Psihoterapie are new.
 */
// PROVISIONAL copy — client to confirm (taVNS, tPBM, CES, Psihoterapie: session length,
// who it helps, contraindications, psychotherapy pricing).
export const SERVICES_RO: ServicesLocale = {
  ui: {
    conditionLink: "Vezi afecțiunea →",
    breadcrumb: "Servicii",
    testimonials: { eyebrow: "Testimoniale", title: "Ce spun pacienții", play: "Pornește testimonialul" },
  },
  index: {
    seo: {
      title: "Servicii și aparatură",
      description:
        "BrainMap (qEEG), neurofeedback, taVNS, tPBM, CES, psihoterapie și EmSella la Emmanuel CliniX, în București. Ce este fiecare, cum decurge o ședință și cui îi este de folos.",
    },
    hero: {
      eyebrow: "Servicii",
      title: "Serviciile noastre.",
      lead: "Același principiu peste tot: măsurăm înainte să recomandăm.",
    },
    more: "Ce include",
    cardLink: "Află mai multe →",
    cta: {
      title: "Primul pas: vezi harta creierului tău.",
      text: "Scanare, interpretare și consult psihologic. O oră, în București.",
      primary: { label: "Vreau BrainMap →", href: "/brainmap" },
      secondary: { label: "Sau fă un test gratuit", href: "/chestionare" },
    },
  },
  items: {
    brainmap: {
      slug: "brainmap",
      schemaType: "DiagnosticProcedure",
      seo: {
        title: "BrainMap (qEEG) — harta activității creierului",
        description:
          "BrainMap este o hartă a activității electrice a creierului (qEEG). 30 de minute, cu hainele pe tine, fără radiații și fără ace. Interpretare în aceeași vizită, în București.",
      },
      card: {
        name: "BrainMap · qEEG",
        short: "Harta activității creierului tău. 30 de minute, fără radiații, fără ace.",
      },
      hero: {
        eyebrow: "BrainMap · qEEG",
        title: "Harta activității creierului tău",
        lead: "Vezi ce se întâmplă, de fapt, în creierul tău — apoi decizi.",
        videoTitle: "Cum funcționează BrainMap",
      },
      video: "serviceBrainmap",
      what: {
        eyebrow: "Ce este",
        title: "Întâi măsurăm. Apoi recomandăm.",
        paragraphs: [
          "Îți punem o cască cu senzori. Stai pe scaun, cu ochii închiși și apoi deschiși. Senzorii doar ascultă activitatea creierului tău, ca un microfon.",
          "Pe hartă vedem zone prea active și zone prea lente. Le comparăm cu valorile normale pentru vârsta ta.",
        ],
      },
      session: {
        eyebrow: "Cum decurge vizita",
        title: "O oră în total. Atât.",
        steps: [
          { title: "Scanarea BrainMap", text: "30 de minute, cu hainele pe tine." },
          { title: "Interpretarea hărții, pe loc", text: "În cuvinte pe care le înțelegi, nu în termeni medicali." },
          { title: "Consult psihologic, în aceeași vizită", text: "Fără o a doua programare." },
          {
            title: "PDF pe mail sau pe WhatsApp",
            text: "Interpretarea completă și recomandări pe care le poți aplica acasă.",
          },
        ],
        facts: [
          "30 de minute scanarea",
          "Fără radiații, fără ace",
          "Interpretare în aceeași vizită",
          "Fără trimitere de la medicul de familie",
        ],
      },
      helps: {
        eyebrow: "Pentru cine",
        title: "Pentru cine e util",
        lead: "Somnul, stresul, concentrarea, starea de spirit se văd pe o hartă a activității creierului tău.",
        conditions: ["anxietate", "panica", "somn", "burnout", "focus", "dispozitie", "migrene", "stres", "adictii"],
        note: "BrainMap este un instrument de evaluare inițială și nu constituie diagnostic medical.",
      },
      safety: {
        eyebrow: "Siguranță",
        title: "Este sigur?",
        points: [
          "Fără radiații, fără ace, fără durere.",
          "Nu îți intră nimic în corp. Nu ți se administrează nimic.",
          "Senzorii doar citesc activitatea creierului, nu transmit nimic spre el.",
          "Te ridici de pe scaun și îți continui ziua exact cum ai plănuit-o.",
        ],
        notTitle: "Ce să ne spui înainte",
        notFor: ["Ce medicamente iei, ca să ținem cont la interpretare."],
      },
      faq: {
        eyebrow: "Întrebări",
        title: "Întrebări frecvente",
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
            q: "Cât costă?",
            a: "Un BrainMap costă 1.200 de lei și include scanarea, interpretarea pe loc, consultul psihologic și PDF-ul cu recomandări.",
          },
          {
            q: "Ce se întâmplă cu datele mele?",
            a: "Rămân confidențiale. Sunt folosite doar pentru evaluarea ta și nu se transmit mai departe.",
          },
        ],
      },
      cta: {
        title: "Primul pas: vezi harta creierului tău.",
        text: "Scanare, interpretare și consult psihologic. O oră, în București.",
        primary: { label: "Vreau BrainMap →", href: "/brainmap" },
        secondary: { label: "Sau fă un test gratuit", href: "/chestionare" },
      },
    },

    tavns: {
      slug: "tavns",
      schemaType: "TherapeuticProcedure",
      seo: {
        title: "taVNS — stimularea nervului vag prin ureche",
        description:
          "taVNS este stimularea blândă a nervului vag printr-un electrod pus pe ureche. Neinvaziv, fără ace și fără medicamente. Cum decurge o ședință și cui îi poate fi de folos.",
      },
      card: {
        name: "taVNS",
        short: "Stimularea blândă a nervului vag, printr-un clips pus pe ureche.",
      },
      hero: {
        eyebrow: "taVNS · stimulare vagală prin ureche",
        title: "Un semnal blând, către nervul vag.",
        lead: "Ajută corpul să treacă din „alertă” în „repaus”. Printr-un clips pus pe ureche.",
        videoTitle: "Cum decurge o ședință de taVNS",
      },
      video: "serviceTavns",
      what: {
        eyebrow: "Ce este",
        title: "Pe scurt",
        paragraphs: [
          "O ramură a nervului vag trece chiar sub pielea urechii. Acolo punem un electrod mic, ca un clips, care trimite impulsuri foarte slabe. Nu înțeapă, nu îți intră nimic în corp.",
          "Nervul vag ajută corpul să se liniștească. Nu e un tratament-minune și nu promitem vindecare: îl folosim ca sprijin, într-un plan făcut pe baza evaluării tale.",
        ],
      },
      session: {
        eyebrow: "Cum decurge o ședință",
        title: "Stai relaxat. Aparatul lucrează.",
        steps: [
          {
            title: "Discutăm întâi",
            text: "Ne spui ce medicamente iei și ce probleme de sănătate ai. Verificăm împreună dacă taVNS e potrivit pentru tine.",
          },
          {
            title: "Clipsul pe ureche",
            text: "Stai pe un fotoliu, cu hainele pe tine. Punem electrodul pe ureche și reglăm intensitatea împreună cu tine.",
          },
          {
            title: "Ședința",
            text: "Simți o furnicătură ușoară sau nimic. Poți sta cu ochii închiși sau poți asculta muzică.",
          },
          {
            title: "După ședință",
            text: "Îți reiei ziua imediat. Notăm ce ai simțit, ca să urmărim cum evoluezi.",
          },
        ],
        facts: [
          "Aproximativ 20–30 de minute",
          "Cu hainele pe tine",
          "Fără ace, fără medicamente",
          "Fără perioadă de recuperare",
        ],
      },
      helps: {
        eyebrow: "Pentru cine",
        title: "Cui îi poate fi de folos",
        lead: "Ca parte dintr-un plan, când corpul pare blocat în „alertă”.",
        conditions: ["anxietate", "panica", "stres", "somn", "burnout", "migrene"],
        note: "Îți spunem sincer, după evaluare, dacă taVNS are sens pentru tine.",
      },
      safety: {
        eyebrow: "Siguranță",
        title: "Este sigur?",
        points: [
          "Neinvaziv: nu îți intră nimic în corp.",
          "Curent foarte slab, reglat împreună cu tine.",
          "Efectele nedorite sunt rare și trec repede: o ușoară iritație a pielii, amețeală sau durere de cap.",
          "Poți opri ședința oricând.",
        ],
        notTitle: "Nu facem taVNS dacă",
        notFor: [
          "Ai stimulator cardiac sau alt implant electronic",
          "Ești însărcinată",
          "Ai epilepsie sau ai avut convulsii, fără acordul medicului tău",
          "Ai răni sau iritații pe ureche",
        ],
      },
      faq: {
        eyebrow: "Întrebări",
        title: "Întrebări frecvente",
        items: [
          {
            q: "Doare?",
            a: "Nu. Cei mai mulți simt o furnicătură ușoară. Dacă e neplăcut, scădem intensitatea.",
          },
          {
            q: "Câte ședințe sunt necesare?",
            a: "Depinde de situația ta. După evaluare îți spunem ce plan are sens și cum măsurăm progresul.",
          },
          {
            q: "Înlocuiește medicamentele?",
            a: "Nu. Nu opri nimic pe cont propriu. Discuți asta cu medicul care ți le-a prescris.",
          },
          {
            q: "Trebuie să fac BrainMap înainte?",
            a: "Îl recomandăm. Așa pornim de la măsurătoare, nu de la presupuneri.",
          },
        ],
      },
      cta: {
        title: "Vrei să afli dacă taVNS ți se potrivește?",
        text: "Lasă-ne numărul. Te sunăm și îți spunem sincer dacă te putem ajuta.",
        primary: { label: "Te sunăm noi →", href: "/contact" },
        secondary: { label: "Sau fă un test gratuit", href: "/chestionare" },
      },
    },

    tpbm: {
      slug: "tpbm",
      schemaType: "TherapeuticProcedure",
      seo: {
        title: "tPBM — fotobiomodulare transcraniană",
        description:
          "tPBM folosește lumină din spectrul infraroșu apropiat, aplicată pe cap. Neinvaziv, fără radiații ionizante, fără ace. Cum decurge o ședință și cui îi poate fi de folos.",
      },
      card: {
        name: "tPBM",
        short: "Lumină din spectrul infraroșu apropiat, aplicată pe cap. Fără radiații ionizante.",
      },
      hero: {
        eyebrow: "tPBM · fotobiomodulare transcraniană",
        title: "Lumină infraroșie, pentru creier.",
        lead: "O cască cu lumină din spectrul infraroșu apropiat. Fără ace, fără durere, fără radiații ionizante.",
        videoTitle: "Cum decurge o ședință de tPBM",
      },
      video: "serviceTpbm",
      what: {
        eyebrow: "Ce este",
        title: "Pe scurt",
        paragraphs: [
          "Lumina din spectrul infraroșu apropiat trece prin piele și prin craniu, până la suprafața creierului. Cercetările arată că poate susține felul în care celulele își produc energia.",
          "Este o metodă încă în studiu. Nu promitem vindecare. O recomandăm doar când evaluarea ta arată că are sens.",
        ],
      },
      session: {
        eyebrow: "Cum decurge o ședință",
        title: "Stai relaxat. Lumina lucrează.",
        steps: [
          {
            title: "Discutăm întâi",
            text: "Ne spui ce medicamente iei. Unele cresc sensibilitatea pielii la lumină și trebuie să știm.",
          },
          {
            title: "Casca",
            text: "Stai relaxat pe un fotoliu, cu hainele pe tine. Îți punem pe cap o cască cu surse de lumină.",
          },
          {
            title: "Ședința",
            text: "Poți simți o căldură ușoară sau nimic. Nu e zgomot, nu e durere.",
          },
          {
            title: "După ședință",
            text: "Îți reiei activitatea imediat. Urmărim împreună ce se schimbă de la o ședință la alta.",
          },
        ],
        facts: [
          "Aproximativ 20 de minute",
          "Cu hainele pe tine",
          "Lumină, nu radiații ionizante",
          "Fără perioadă de recuperare",
        ],
      },
      helps: {
        eyebrow: "Pentru cine",
        title: "Cui îi poate fi de folos",
        lead: "Ca sprijin, când oboseala mentală sau ceața din minte sunt pe primul plan.",
        conditions: ["focus", "dispozitie", "burnout"],
        note: "Îți spunem sincer, după evaluare, dacă tPBM are sens pentru tine.",
      },
      safety: {
        eyebrow: "Siguranță",
        title: "Este sigur?",
        points: [
          "Neinvaziv: lumina trece prin piele, nu îți intră nimic în corp.",
          "Fără radiații ionizante — nu e ca la radiografie sau la tomograf.",
          "Poți simți o căldură ușoară, care trece imediat.",
          "Nu privești direct în lumină: casca stă pe cap, nu pe ochi.",
        ],
        notTitle: "Nu facem tPBM dacă",
        notFor: [
          "Iei medicamente care cresc sensibilitatea la lumină",
          "Ești însărcinată",
          "Ai o boală oncologică activă, fără acordul medicului tău",
          "Ai o afecțiune activă a pielii în zona capului",
        ],
      },
      faq: {
        eyebrow: "Întrebări",
        title: "Întrebări frecvente",
        items: [
          { q: "Simt ceva?", a: "Cei mai mulți simt doar o căldură ușoară, sau nimic." },
          {
            q: "Lumina îmi afectează ochii?",
            a: "Nu privești direct în lumină, iar casca stă pe cap, nu pe ochi. Îți arătăm exact cum să stai.",
          },
          {
            q: "Câte ședințe sunt necesare?",
            a: "Depinde de situația ta. După evaluare îți spunem ce plan are sens și cum măsurăm progresul.",
          },
          {
            q: "Înlocuiește medicamentele?",
            a: "Nu. Nu opri nimic pe cont propriu. Discuți asta cu medicul care ți le-a prescris.",
          },
        ],
      },
      cta: {
        title: "Vrei să afli dacă tPBM ți se potrivește?",
        text: "Lasă-ne numărul. Te sunăm și îți spunem sincer dacă te putem ajuta.",
        primary: { label: "Te sunăm noi →", href: "/contact" },
        secondary: { label: "Sau fă testul de focus", href: "/chestionare/focus" },
      },
    },

    ces: {
      slug: "ces",
      schemaType: "TherapeuticProcedure",
      seo: {
        title: "CES — electrostimulare craniană",
        description:
          "CES (electrostimulare craniană) folosește un curent foarte slab, prin clipsuri puse pe urechi. Neinvaziv, fără ace și fără medicamente. Cum decurge o ședință și cui îi poate fi de folos.",
      },
      card: {
        name: "CES",
        short: "Un curent foarte slab, prin clipsuri pe urechi, care ajută creierul să se liniștească.",
      },
      hero: {
        eyebrow: "CES · electrostimulare craniană",
        title: "Un curent foarte slab, pentru calm.",
        lead: "Două clipsuri mici, pe lobii urechilor. Stai relaxat, iar aparatul face restul.",
        videoTitle: "Cum decurge o ședință de CES",
      },
      video: "serviceCes",
      what: {
        eyebrow: "Ce este",
        title: "Pe scurt",
        paragraphs: [
          "Aparatul trimite un curent foarte slab, de ordinul microamperilor, prin două clipsuri puse pe lobii urechilor. Metoda e folosită de zeci de ani ca sprijin pentru anxietate, somn și stres.",
          "Nu e un tratament-minune și nu înlocuiește tratamentul prescris de medic. Îl folosim când are sens pentru tine.",
        ],
      },
      session: {
        eyebrow: "Cum decurge o ședință",
        title: "Stai relaxat. Aparatul lucrează.",
        steps: [
          {
            title: "Discutăm întâi",
            text: "Ne spui ce medicamente iei și ce probleme de sănătate ai. Verificăm împreună dacă CES e potrivit pentru tine.",
          },
          {
            title: "Clipsurile",
            text: "Stai pe un fotoliu, cu hainele pe tine. Punem câte un clips pe fiecare lob al urechii.",
          },
          {
            title: "Ședința",
            text: "Cei mai mulți nu simt nimic, sau doar o furnicătură ușoară. Unii se simt relaxați, chiar somnoroși.",
          },
          {
            title: "După ședință",
            text: "Îți reiei ziua imediat. Dacă te simți somnoros, stai câteva minute înainte să conduci.",
          },
        ],
        facts: [
          "Aproximativ 20–40 de minute",
          "Cu hainele pe tine",
          "Fără ace, fără medicamente",
          "Curent foarte slab, reglat împreună cu tine",
        ],
      },
      helps: {
        eyebrow: "Pentru cine",
        title: "Cui îi poate fi de folos",
        lead: "Ca parte dintr-un plan, când mintea nu se oprește și somnul suferă.",
        conditions: ["anxietate", "somn", "stres"],
        note: "Îți spunem sincer, după evaluare, dacă CES are sens pentru tine.",
      },
      safety: {
        eyebrow: "Siguranță",
        title: "Este sigur?",
        points: [
          "Neinvaziv: nu îți intră nimic în corp.",
          "Curent foarte slab, de ordinul microamperilor.",
          "Efectele nedorite sunt rare și trec repede: amețeală ușoară, durere de cap sau iritație a pielii la ureche.",
          "Poți opri ședința oricând.",
        ],
        notTitle: "Nu facem CES dacă",
        notFor: [
          "Ai stimulator cardiac sau alt implant electronic",
          "Ești însărcinată",
          "Ai epilepsie sau ai avut convulsii, fără acordul medicului tău",
        ],
      },
      faq: {
        eyebrow: "Întrebări",
        title: "Întrebări frecvente",
        items: [
          { q: "Doare?", a: "Nu. Cei mai mulți nu simt nimic, sau doar o furnicătură ușoară." },
          {
            q: "Pot conduce după ședință?",
            a: "Da. Dacă te simți somnoros, stai câteva minute în clinică înainte să pleci.",
          },
          {
            q: "Câte ședințe sunt necesare?",
            a: "Depinde de situația ta. După evaluare îți spunem ce plan are sens și cum măsurăm progresul.",
          },
          {
            q: "Înlocuiește medicamentele?",
            a: "Nu. Nu opri nimic pe cont propriu. Discuți asta cu medicul care ți le-a prescris.",
          },
        ],
      },
      cta: {
        title: "Vrei să afli dacă CES ți se potrivește?",
        text: "Lasă-ne numărul. Te sunăm și îți spunem sincer dacă te putem ajuta.",
        primary: { label: "Te sunăm noi →", href: "/contact" },
        secondary: { label: "Sau fă testul de anxietate", href: "/chestionare/anxietate" },
      },
    },

    psihoterapie: {
      slug: "psihoterapie",
      schemaType: "PsychologicalTreatment",
      seo: {
        title: "Psihoterapie în București",
        description:
          "Psihoterapie la Emmanuel CliniX, în București: discuții regulate cu un psihoterapeut, confidențial, în ritmul tău. Poți porni și de la datele din BrainMap.",
      },
      card: {
        name: "Psihoterapie",
        short: "Discuții regulate cu un psihoterapeut, în clinică. Confidențial, în ritmul tău.",
      },
      hero: {
        eyebrow: "Psihoterapie",
        title: "Un loc sigur să vorbești.",
        lead: "Discuții regulate cu un psihoterapeut. Confidențial, în ritmul tău.",
        videoTitle: "Cum decurge psihoterapia la Emmanuel CliniX",
      },
      video: "servicePsihoterapie",
      what: {
        eyebrow: "Ce este",
        title: "Pe scurt",
        paragraphs: [
          "Vorbiți despre ce te apasă, înțelegeți împreună de unde vine și exersați alte moduri de a reacționa.",
          "La noi, discuția poate porni și de la date: dacă ai făcut BrainMap, psihoterapeutul ține cont de hartă.",
        ],
      },
      session: {
        eyebrow: "Cum decurge",
        title: "Pas cu pas, în ritmul tău.",
        steps: [
          {
            title: "Prima întâlnire",
            text: "Ne spui ce te aduce la noi. Stabilim împreună ce vrei să se schimbe.",
          },
          {
            title: "Ședințele",
            text: "De obicei o dată pe săptămână, în cabinet. Vorbești cât și cum vrei.",
          },
          {
            title: "Între ședințe",
            text: "Uneori primești mici exerciții, ca să aplici ce ați discutat.",
          },
          {
            title: "Facem bilanțul",
            text: "Din când în când vedeți împreună ce s-a schimbat și ce urmează.",
          },
        ],
        facts: [
          "Ședințe de aproximativ 50 de minute",
          "Totul rămâne confidențial",
          "Fără trimitere de la medicul de familie",
          "Tu decizi ritmul",
        ],
      },
      helps: {
        eyebrow: "Pentru cine",
        title: "Cui îi poate fi de folos",
        lead: "Când nu mai faci față singur sau același tipar se tot repetă.",
        conditions: ["anxietate", "panica", "dispozitie", "stres", "burnout", "adictii"],
        note: "Psihoterapia nu înlocuiește tratamentul medical, atunci când acesta este necesar.",
      },
      safety: {
        eyebrow: "Ce trebuie să știi",
        title: "Este pentru mine?",
        points: [
          "Totul rămâne între tine și psihoterapeut.",
          "Nu ești judecat. Spui doar ce vrei să spui.",
          "Poți întreba oricând cum lucrăm și de ce.",
          "Poți schimba ritmul sau te poți opri oricând.",
        ],
        notTitle: "Când ai nevoie de altceva întâi",
        notFor: [
          "Ai gânduri să îți faci rău: sună acum la 112",
          "Ai nevoie de tratament cu medicamente: te îndrumăm către un medic psihiatru",
        ],
      },
      faq: {
        eyebrow: "Întrebări",
        title: "Întrebări frecvente",
        items: [
          { q: "Am nevoie de un diagnostic ca să vin?", a: "Nu." },
          {
            q: "Cât durează psihoterapia?",
            a: "Depinde de ce vrei să schimbi. Unii oameni vin câteva luni, alții mai mult. Discutăm deschis despre asta de la început.",
          },
          {
            q: "Cât costă o ședință?",
            a: "Îți spunem prețul la telefon, înainte de prima ședință. Fără costuri ascunse.",
          },
          {
            q: "Ce se întâmplă cu ce spun?",
            a: "Rămâne confidențial. Nu se transmite mai departe.",
          },
        ],
      },
      cta: {
        title: "Vrei să vorbim?",
        text: "Lasă-ne numărul tău. Te sunăm, te ascultăm și găsim împreună primul pas.",
        primary: { label: "Te sunăm noi →", href: "/contact" },
        secondary: { label: "Sau fă un test gratuit", href: "/chestionare" },
      },
    },

    neurofeedback: {
      slug: "neurofeedback",
      schemaType: "TherapeuticProcedure",
      seo: {
        title: "Neurofeedback — creierul învață să se regleze singur",
        description:
          "Neurofeedback la Emmanuel CliniX, în București. Protocol făcut pe baza BrainMap-ului tău. Ședințe de 30–45 de minute, nedureroase, fără medicamente.",
      },
      card: {
        name: "Neurofeedback",
        short: "Creierul învață, ședință cu ședință, un ritm mai stabil.",
      },
      hero: {
        eyebrow: "Neurofeedback",
        title: "Creierul învață să se regleze singur",
        lead: "Pornim de la Brain Map-ul tău, nu de la o rețetă standard.",
        videoTitle: "Cum funcționează neurofeedback-ul",
      },
      video: "serviceNeurofeedback",
      what: {
        eyebrow: "Ce este",
        title: "Pe scurt",
        paragraphs: [
          "Pornim de la Brain Map-ul tău, nu de la o rețetă standard. Protocolul vizează exact zonele identificate la tine.",
          "Ședință cu ședință, creierul învață un ritm mai stabil. Nu mascăm simptomul: antrenăm creierul să se autoregleze.",
        ],
      },
      session: {
        eyebrow: "Cum decurge o ședință",
        title: "Stai relaxat. Creierul lucrează.",
        steps: [
          {
            title: "Întâi BrainMap",
            text: "Harta arată ce zone sunt prea active și ce zone sunt prea lente. Pe ea construim protocolul tău.",
          },
          {
            title: "Senzorii pe cap",
            text: "Stai pe un scaun, cu hainele pe tine. Senzorii doar citesc activitatea creierului, nu transmit nimic spre el.",
          },
          {
            title: "Ședința",
            text: "Stai relaxat pe un scaun și nu simți nimic în timpul ședinței.",
          },
          {
            title: "Măsurăm din nou",
            text: "Vezi în date ce s-a schimbat de la o etapă la alta.",
          },
        ],
        facts: [
          "Ședințe de 30–45 de minute",
          "Nedureroase, fără medicamente",
          "Protocol făcut pe harta ta",
          "Îți reiei activitățile imediat",
        ],
      },
      helps: {
        eyebrow: "Pentru cine",
        title: "Cui îi poate fi de folos",
        lead: "Când creierul pare blocat într-un ritm care te obosește.",
        conditions: ["anxietate", "panica", "somn", "focus", "stres", "burnout", "dispozitie"],
        note: "Îți spunem sincer, după BrainMap, dacă neurofeedback-ul are sens pentru tine.",
      },
      safety: {
        eyebrow: "Siguranță",
        title: "Este sigur?",
        points: [
          "Neinvaziv: nu îți intră nimic în corp.",
          "Senzorii doar citesc activitatea creierului, nu transmit nimic spre el.",
          "Fără medicamente, fără durere.",
          "Îți poți relua activitățile imediat după fiecare ședință.",
        ],
        notTitle: "Ce să ne spui înainte",
        notFor: ["Ce medicamente iei și ce probleme de sănătate ai."],
      },
      faq: {
        eyebrow: "Întrebări",
        title: "Întrebări frecvente",
        items: [
          { q: "Doare?", a: "Nu. Stai relaxat pe un scaun și nu simți nimic în timpul ședinței." },
          {
            q: "Trebuie să fac întâi BrainMap?",
            a: "Da. Protocolul de neurofeedback se face pe baza hărții tale, nu după o rețetă standard.",
          },
          {
            q: "Câte ședințe sunt necesare?",
            a: "Depinde de situația ta. După BrainMap îți spunem ce plan are sens și cum măsurăm progresul.",
          },
          {
            q: "Înlocuiește medicamentele?",
            a: "Nu. Nu opri nimic pe cont propriu. Discuți asta cu medicul care ți le-a prescris.",
          },
          { q: "Am nevoie de trimitere de la medicul de familie?", a: "Nu." },
        ],
      },
      cta: {
        title: "Primul pas: vezi harta creierului tău.",
        text: "Scanare, interpretare și consult psihologic. O oră, în București.",
        primary: { label: "Vreau BrainMap →", href: "/brainmap" },
        secondary: { label: "Sau fă un test gratuit", href: "/chestionare" },
      },
    },

    emsella: {
      slug: "emsella",
      schemaType: "TherapeuticProcedure",
      seo: {
        title: "EmSella — întărirea planșeului pelvin, pe scaun",
        description:
          "EmSella întărește planșeul pelvin în 28 de minute pe scaun, cu hainele pe tine — fără ace, fără recuperare. Pentru pierderi de urină la efort, urgență și treziri de noapte. În București.",
      },
      card: {
        name: "EmSella",
        short: "Întărește planșeul pelvin. 28 de minute pe scaun, cu hainele pe tine.",
      },
      hero: {
        eyebrow: "EmSella · planșeu pelvin",
        title: "Tu nu faci nimic. Scaunul face antrenamentul.",
        lead: "E planșeul pelvin, un mușchi care s-a slăbit. Un mușchi se antrenează. 28 de minute pe scaun, cu hainele pe tine.",
        videoTitle: "Cum funcționează scaunul EmSella",
      },
      video: "serviceEmsella",
      what: {
        eyebrow: "Ce este",
        title: "Nu e vârsta. E un mușchi.",
        paragraphs: [
          "EmSella întărește planșeul pelvin. Un câmp electromagnetic contractă mușchii la intensitate maximă — inclusiv fibrele profunde, pe care nu le poți controla singur.",
          "Pentru pierderi de urină la efort, senzația bruscă de urgență și trezirile de noapte. La femei și la bărbați.",
        ],
      },
      session: {
        eyebrow: "Cum decurge o ședință",
        title: "28 de minute. Cu hainele pe tine.",
        steps: [
          {
            title: "Te așezi pe scaun",
            text: "Cu hainele pe tine. Nu te dezbraci, nu te atinge nimeni, nu îți intră nimic în corp.",
          },
          {
            title: "Scaunul lucrează mușchiul",
            text: "Emite un câmp electromagnetic care ajunge direct la planșeul pelvin. Acolo, mușchii se contractă la intensitate maximă.",
          },
          {
            title: "Simți dacă mușchiul răspunde",
            text: "Chiar acolo, pe scaun. Nu aștepți săptămâni ca să afli.",
          },
          {
            title: "Îți continui ziua",
            text: "Nu există perioadă de recuperare. Poți conduce, poți merge la muncă, îți reiei activitatea.",
          },
        ],
        facts: [
          "O ședință durează 28 de minute",
          "Nu te dezbraci, nu te atinge nimeni",
          "Fără ace, fără anestezie, fără radiații",
          "Fără perioadă de recuperare",
        ],
      },
      helps: {
        eyebrow: "Pentru cine",
        title: "E pentru tine dacă",
        lead: "Pierzi urină la strănut, tuse, râs sau ridicat de greutăți. Senzația vine brusc și abia ajungi la baie. Te trezești noaptea de două sau trei ori.",
        conditions: ["planseu-pelvin"],
        note: "Verificăm contraindicațiile la telefon, înainte de programare.",
      },
      safety: {
        eyebrow: "Siguranță",
        title: "Este sigur?",
        points: [
          "Nu doare. Simți contracțiile puternic, dar nu e o senzație dureroasă.",
          "Intensitatea se reglează pentru fiecare persoană în parte.",
          "Fără ace, fără anestezie, fără radiații.",
          "Fără perioadă de recuperare.",
        ],
        notTitle: "Nu poți face EmSella dacă",
        notFor: ["Ești însărcinată", "Ai stimulator cardiac", "Ai implanturi metalice în zona pelvină", "Ai sterilet de cupru"],
      },
      faq: {
        eyebrow: "Întrebări",
        title: "Întrebări frecvente",
        items: [
          { q: "Cât durează o ședință?", a: "28 de minute. Nu ai nevoie de timp în plus înainte sau după." },
          {
            q: "Cât costă?",
            a: "250 de lei o ședință. Pachetul de 5 ședințe costă 1.150 de lei, iar pachetul de 10 ședințe costă 2.000 de lei. Nu ești obligat să iei un pachet din prima.",
          },
          { q: "Trebuie să mă dezbrac?", a: "Nu. Stai pe scaun cu hainele pe tine. Nu te atinge nimeni." },
          {
            q: "De câte ședințe am nevoie?",
            a: "Recomandăm cel puțin 10, pentru că e antrenament muscular. Un mușchi nu se întărește dintr-o dată.",
          },
          { q: "E și pentru bărbați?", a: "Da. Planșeul pelvin slăbește și la bărbați, cel mai accentuat după o operație de prostată." },
          { q: "Am nevoie de trimitere de la medicul de familie?", a: "Nu." },
        ],
      },
      cta: {
        title: "Fă primul pas. Restul se simte pe scaun.",
        text: "Completezi un formular scurt. Te sunăm noi.",
        primary: { label: "Aplică pentru o ședință EmSella →", href: "/lp/emsella" },
        secondary: { label: "Sau sună-ne", href: "/contact" },
      },
    },
  },
};
