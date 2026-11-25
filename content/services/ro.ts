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
    conditionLink: "Citește mai mult",
    breadcrumb: "Servicii",
    testimonials: { eyebrow: "Testimoniale", title: "Ce spun pacienții", play: "Pornește testimonialul" },
  },
  index: {
    seo: {
      title: "Servicii și aparatură",
      description:
        "BrainMap (qEEG), neurofeedback, taVNS, tPBM, CES, psihoterapie, psihiatrie și EmSella la Emmanuel CliniX, în București. Ce este fiecare, cum decurge o ședință și cui îi este de folos.",
    },
    hero: {
      eyebrow: "Servicii",
      title: "Serviciile noastre.",
      lead: "Același principiu peste tot: măsurăm înainte să recomandăm.",
    },
    more: "Ce include",
    cardLink: "Află mai multe →",
    cta: {
      title: "Primul pas e să vezi harta creierului tău",
      text: "Scanarea, interpretarea și consultul psihologic, toate într-o singură vizită de aproximativ o oră.",
      primary: { label: "Programează BrainMap →", href: "/brainmap" },
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
        lead: "Vezi ce se întâmplă, de fapt, în creierul tău. Apoi decizi tu ce faci mai departe.",
        videoTitle: "Cum funcționează BrainMap",
      },
      video: "serviceBrainmap",
      what: {
        eyebrow: "Ce este",
        title: "Ce se întâmplă în cele 30 de minute",
        paragraphs: [
          "Îți punem pe cap o cască cu senzori. Stai pe scaun, întâi cu ochii închiși, apoi cu ei deschiși. Senzorii doar ascultă ce face creierul, cam cum ar face un microfon.",
          "Pe hartă se văd zonele care lucrează prea mult și cele care lucrează prea încet. De aici pornește tot planul.",
        ],
      },
      session: {
        eyebrow: "Cum decurge vizita",
        title: "Totul durează aproximativ o oră",
        steps: [
          { title: "Scanarea BrainMap", text: "Cam 30 de minute. Rămâi îmbrăcat." },
          { title: "Interpretarea hărții, pe loc", text: "Îți explicăm harta pe limba ta, fără termeni medicali." },
          { title: "Consult psihologic, în aceeași vizită", text: "Nu trebuie să mai revii pentru el." },
          {
            title: "PDF pe mail sau pe WhatsApp",
            text: "Primești interpretarea și recomandări pe care le poți pune în practică de acasă.",
          },
        ],
        facts: [
          "Scanare de 30 de minute",
          "Fără radiații, fără ace",
          "Interpretare în aceeași vizită",
          "Nu ai nevoie de trimitere",
        ],
      },
      helps: {
        eyebrow: "Pentru cine",
        title: "Când merită să faci un BrainMap",
        conditions: ["anxietate", "panica", "somn", "burnout", "focus", "dispozitie", "migrene", "stres", "adictii"],
        note: "BrainMap e o evaluare inițială. Nu ține loc de diagnostic medical.",
      },
      safety: {
        eyebrow: "Siguranță",
        title: "E sigur?",
        points: [
          "Nu are radiații, nu are ace și nu doare.",
          "Nu îți intră nimic în corp și nu primești niciun medicament.",
          "Senzorii doar citesc activitatea creierului. Nu trimit niciun semnal spre el.",
          "Te ridici de pe scaun și îți continui ziua exact cum ai plănuit-o.",
        ],
        notTitle: "Ce să ne spui înainte",
        notFor: ["Spune-ne ce medicamente iei, ca să ținem cont de ele când citim harta."],
      },
      faq: {
        eyebrow: "Întrebări",
        title: "Întrebări frecvente",
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
            q: "Cât costă?",
            a: "1.200 de lei. Intră scanarea, interpretarea pe loc, consultul psihologic și PDF-ul cu recomandări. Dacă mergi mai departe cu noi, îți scădem integral suma din program.",
          },
          {
            q: "Ce se întâmplă cu datele mele?",
            a: "Rămân confidențiale. Le folosim doar pentru evaluarea ta și nu le dăm nimănui.",
          },
        ],
      },
      cta: {
        title: "Primul pas e să vezi harta creierului tău",
        text: "Scanarea, interpretarea și consultul psihologic, toate într-o singură vizită de aproximativ o oră.",
        primary: { label: "Programează BrainMap →", href: "/brainmap" },
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
        title: "Un semnal blând pentru nervul vag",
        lead: "Un clips mic pe ureche, care poate ajuta corpul să iasă din starea de alertă și să se liniștească.",
        videoTitle: "Cum decurge o ședință de taVNS",
      },
      video: "serviceTavns",
      what: {
        eyebrow: "Ce este",
        title: "Pe scurt",
        paragraphs: [
          "O ramură a nervului vag trece chiar pe sub pielea urechii. Acolo punem un electrod mic, prins ca un clips, care trimite impulsuri foarte slabe. Nu înțeapă și nu îți intră nimic în corp.",
          "Nervul vag e cel care ajută corpul să se liniștească. Folosim taVNS ca sprijin, într-un plan făcut pe baza evaluării tale, și îți spunem de la început ce poți aștepta de la el.",
        ],
      },
      session: {
        eyebrow: "Cum decurge o ședință",
        title: "Tu stai relaxat, iar aparatul lucrează",
        steps: [
          {
            title: "Discutăm întâi",
            text: "Ne spui ce medicamente iei și ce probleme de sănătate ai. Verificăm împreună dacă taVNS ți se potrivește.",
          },
          {
            title: "Clipsul pe ureche",
            text: "Stai pe un fotoliu, îmbrăcat. Prindem electrodul pe ureche și reglăm intensitatea împreună, până ți se pare confortabilă.",
          },
          {
            title: "Ședința",
            text: "Simți o furnicătură ușoară sau chiar nimic. Poți sta cu ochii închiși sau poți asculta muzică.",
          },
          {
            title: "După ședință",
            text: "Te întorci imediat la ce aveai de făcut. Notăm ce ai simțit, ca să urmărim cum evoluezi.",
          },
        ],
        facts: [
          "Cam 20–30 de minute",
          "Rămâi îmbrăcat",
          "Fără ace, fără medicamente",
          "Nu ai nevoie de pauză după",
        ],
      },
      helps: {
        eyebrow: "Pentru cine",
        title: "Cui îi poate folosi",
        conditions: ["anxietate", "panica", "stres", "somn", "burnout", "migrene"],
        note: "După evaluare îți spunem sincer dacă taVNS ți se potrivește.",
      },
      safety: {
        eyebrow: "Siguranță",
        title: "E sigur?",
        points: [
          "E non-invaziv. Nu îți intră nimic în corp.",
          "Impulsurile sunt foarte slabe și le reglăm împreună cu tine.",
          "Efectele nedorite apar rar și trec repede. Poate fi o ușoară iritație a pielii, o amețeală sau o durere de cap.",
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
            a: "Nu. Cei mai mulți simt doar o furnicătură ușoară. Dacă ți se pare neplăcut, scădem intensitatea.",
          },
          {
            q: "Câte ședințe sunt necesare?",
            a: "Diferă de la om la om. După evaluare îți spunem ce plan ți se potrivește și cum urmărim progresul.",
          },
          {
            q: "Înlocuiește medicamentele?",
            a: "Nu. Nu opri niciun medicament de capul tău. Vorbește cu medicul care ți l-a prescris.",
          },
          {
            q: "Trebuie să fac BrainMap înainte?",
            a: "Îl recomandăm, ca să pornim de la ce arată harta ta.",
          },
        ],
      },
      cta: {
        title: "Vrei să afli dacă taVNS ți se potrivește?",
        text: "Lasă-ne numărul și te sunăm noi. Îți spunem sincer dacă te putem ajuta.",
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
        title: "Lumină infraroșie pentru creier",
        lead: "Porți o cască ce emite lumină infraroșie. Nu doare, nu are ace și nu folosește radiații de tipul celor de la radiografie.",
        videoTitle: "Cum decurge o ședință de tPBM",
      },
      video: "serviceTpbm",
      what: {
        eyebrow: "Ce este",
        title: "Pe scurt",
        paragraphs: [
          "Lumina infraroșie trece prin piele și prin os până la suprafața creierului. Studiile de până acum arată că poate susține felul în care celulele își produc energia.",
          "E o metodă care încă se studiază, așa că o recomandăm doar atunci când evaluarea ta arată că ți-ar putea folosi.",
        ],
      },
      session: {
        eyebrow: "Cum decurge o ședință",
        title: "Tu stai relaxat, iar lumina lucrează",
        steps: [
          {
            title: "Discutăm întâi",
            text: "Ne spui ce medicamente iei. Unele fac pielea mai sensibilă la lumină și trebuie să știm asta dinainte.",
          },
          {
            title: "Casca",
            text: "Stai pe un fotoliu, îmbrăcat, și îți punem casca pe cap.",
          },
          {
            title: "Ședința",
            text: "Poți simți o căldură ușoară sau nimic. E liniște și nu doare.",
          },
          {
            title: "După ședință",
            text: "Te întorci imediat la ce aveai de făcut. Urmărim împreună ce se schimbă de la o ședință la alta.",
          },
        ],
        facts: [
          "Cam 20 de minute",
          "Rămâi îmbrăcat",
          "Doar lumină, fără radiații ionizante",
          "Nu ai nevoie de pauză după",
        ],
      },
      helps: {
        eyebrow: "Pentru cine",
        title: "Cui îi poate folosi",
        conditions: ["focus", "dispozitie", "burnout"],
        note: "După evaluare îți spunem sincer dacă tPBM ți se potrivește.",
      },
      safety: {
        eyebrow: "Siguranță",
        title: "E sigur?",
        points: [
          "E non-invaziv. Lumina trece prin piele și nu îți intră nimic în corp.",
          "Nu folosește radiații ionizante, cum sunt cele de la radiografie sau de la tomograf.",
          "Poți simți o căldură ușoară, care trece imediat.",
          "Nu te uiți direct în lumină. Casca stă pe cap, deasupra ochilor.",
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
          { q: "Simt ceva?", a: "Cei mai mulți simt doar o căldură ușoară sau chiar nimic." },
          {
            q: "Lumina îmi afectează ochii?",
            a: "Nu te uiți direct în lumină, iar casca stă pe cap, deasupra ochilor. Îți arătăm exact cum să stai.",
          },
          {
            q: "Câte ședințe sunt necesare?",
            a: "Diferă de la om la om. După evaluare îți spunem ce plan ți se potrivește și cum urmărim progresul.",
          },
          {
            q: "Înlocuiește medicamentele?",
            a: "Nu. Nu opri niciun medicament de capul tău. Vorbește cu medicul care ți l-a prescris.",
          },
        ],
      },
      cta: {
        title: "Vrei să afli dacă tPBM ți se potrivește?",
        text: "Lasă-ne numărul și te sunăm noi. Îți spunem sincer dacă te putem ajuta.",
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
        title: "Impulsuri foarte fine, pentru mai mult calm",
        lead: "Două clipsuri mici pe lobii urechilor. Tu stai relaxat, iar aparatul face restul.",
        videoTitle: "Cum decurge o ședință de CES",
      },
      video: "serviceCes",
      what: {
        eyebrow: "Ce este",
        title: "Pe scurt",
        paragraphs: [
          "Aparatul trimite impulsuri electrice foarte slabe, de ordinul microamperilor, prin două clipsuri prinse de lobii urechilor. Metoda se folosește de zeci de ani ca sprijin pentru anxietate, somn și stres.",
          "Vine pe lângă ce ți-a recomandat medicul, fără să înlocuiască nimic. Îl folosim doar dacă evaluarea arată că ți se potrivește.",
        ],
      },
      session: {
        eyebrow: "Cum decurge o ședință",
        title: "Tu stai relaxat, iar aparatul lucrează",
        steps: [
          {
            title: "Discutăm întâi",
            text: "Ne spui ce medicamente iei și ce probleme de sănătate ai. Verificăm împreună dacă CES ți se potrivește.",
          },
          {
            title: "Clipsurile",
            text: "Stai pe un fotoliu, îmbrăcat. Prindem câte un clips de fiecare lob al urechii.",
          },
          {
            title: "Ședința",
            text: "Cei mai mulți nu simt nimic sau doar o furnicătură ușoară. Unii se relaxează atât de tare încât le vine somn.",
          },
          {
            title: "După ședință",
            text: "Te întorci imediat la ce aveai de făcut. Dacă ți-e somn, mai stai câteva minute înainte să te urci la volan.",
          },
        ],
        facts: [
          "Cam 20–40 de minute",
          "Rămâi îmbrăcat",
          "Fără ace, fără medicamente",
          "Intensitate reglată împreună cu tine",
        ],
      },
      helps: {
        eyebrow: "Pentru cine",
        title: "Cui îi poate folosi",
        conditions: ["anxietate", "somn", "stres"],
        note: "După evaluare îți spunem sincer dacă CES ți se potrivește.",
      },
      safety: {
        eyebrow: "Siguranță",
        title: "E sigur?",
        points: [
          "E non-invaziv. Nu îți intră nimic în corp.",
          "Impulsurile sunt foarte slabe, de ordinul microamperilor.",
          "Efectele nedorite apar rar și trec repede. Poate fi o amețeală ușoară, o durere de cap sau o iritație a pielii la ureche.",
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
          { q: "Doare?", a: "Nu. Cei mai mulți nu simt nimic sau doar o furnicătură ușoară." },
          {
            q: "Pot conduce după ședință?",
            a: "Da. Dacă ți-e somn, mai stai câteva minute în clinică înainte să pleci.",
          },
          {
            q: "Câte ședințe sunt necesare?",
            a: "Diferă de la om la om. După evaluare îți spunem ce plan ți se potrivește și cum urmărim progresul.",
          },
          {
            q: "Înlocuiește medicamentele?",
            a: "Nu. Nu opri niciun medicament de capul tău. Vorbește cu medicul care ți l-a prescris.",
          },
        ],
      },
      cta: {
        title: "Vrei să afli dacă CES ți se potrivește?",
        text: "Lasă-ne numărul și te sunăm noi. Îți spunem sincer dacă te putem ajuta.",
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
        title: "Un loc în care poți vorbi liniștit",
        lead: "Te vezi regulat cu un psihoterapeut, în ritmul tău. Tot ce spui rămâne între voi.",
        videoTitle: "Cum decurge psihoterapia la Emmanuel CliniX",
      },
      video: "servicePsihoterapie",
      what: {
        eyebrow: "Ce este",
        title: "Pe scurt",
        paragraphs: [
          "Vorbești despre ce te apasă. Încercați împreună să înțelegeți de unde vine și exersați alte feluri de a reacționa.",
          "Dacă ai făcut BrainMap, psihoterapeutul ține cont și de ce arată harta ta.",
        ],
      },
      session: {
        eyebrow: "Cum decurge",
        title: "Pas cu pas, în ritmul tău",
        steps: [
          {
            title: "Prima întâlnire",
            text: "Ne spui ce te-a adus la noi și stabilim împreună ce ai vrea să se schimbe.",
          },
          {
            title: "Ședințele",
            text: "De obicei o dată pe săptămână, la cabinet. Vorbești cât vrei și cum vrei.",
          },
          {
            title: "Între ședințe",
            text: "Uneori primești mici exerciții, ca să pui în practică ce ați discutat.",
          },
          {
            title: "Facem bilanțul",
            text: "Din când în când vedeți împreună ce s-a schimbat și ce urmează.",
          },
        ],
        facts: [
          "Ședințe de cam 50 de minute",
          "Totul rămâne confidențial",
          "Nu ai nevoie de trimitere",
          "Tu decizi ritmul",
        ],
      },
      helps: {
        eyebrow: "Pentru cine",
        title: "Cui îi poate folosi",
        conditions: ["anxietate", "panica", "dispozitie", "stres", "burnout", "adictii"],
        note: "Când e nevoie de medicamente, psihoterapia merge alături de îngrijirea medicală, fără s-o înlocuiască.",
      },
      safety: {
        eyebrow: "Ce trebuie să știi",
        title: "E pentru mine?",
        points: [
          "Totul rămâne între tine și psihoterapeut.",
          "Nimeni nu te judecă. Spui doar ce vrei să spui.",
          "Poți întreba oricând cum lucrăm și de ce.",
          "Poți schimba ritmul sau te poți opri oricând.",
        ],
        notTitle: "Când ai nevoie de altceva întâi",
        notFor: [
          "Dacă ai gânduri să îți faci rău, sună acum la 112",
          "Dacă ai nevoie de medicamente, te îndrumăm către un medic psihiatru",
        ],
      },
      faq: {
        eyebrow: "Întrebări",
        title: "Întrebări frecvente",
        items: [
          { q: "Am nevoie de un diagnostic ca să vin?", a: "Nu. Poți veni și doar pentru că simți că ceva nu merge cum ți-ai dori." },
          {
            q: "Cât durează psihoterapia?",
            a: "Depinde de ce vrei să schimbi. Unii vin câteva luni, alții mai mult. Vorbim deschis despre asta de la început.",
          },
          {
            q: "Cât costă o ședință?",
            a: "Îți spunem prețul la telefon, înainte de prima ședință, și nu apar alte costuri pe parcurs.",
          },
          {
            q: "Ce se întâmplă cu ce spun?",
            a: "Rămâne confidențial și nu ajunge la nimeni altcineva.",
          },
        ],
      },
      cta: {
        title: "Vrei să vorbim?",
        text: "Lasă-ne numărul și te sunăm noi. Te ascultăm și găsim împreună primul pas.",
        primary: { label: "Te sunăm noi →", href: "/contact" },
        secondary: { label: "Sau fă un test gratuit", href: "/chestionare" },
      },
    },

    // PROVISIONAL copy (placeholder) — the clinic sends the final text and the video.
    psihiatrie: {
      slug: "psihiatrie",
      schemaType: "MedicalTherapy",
      seo: {
        title: "Psihiatrie în București",
        description:
          "Consult psihiatric la Emmanuel CliniX, în București: evaluare, diagnostic și plan de tratament cu un medic specialist psihiatru. Poți porni și de la datele din BrainMap.",
      },
      card: {
        name: "Psihiatrie",
        short: "Consult cu un medic psihiatru: evaluare, diagnostic și plan de tratament.",
      },
      hero: {
        eyebrow: "Psihiatrie",
        title: "Un medic care te ascultă până la capăt",
        lead: "Consult cu un medic specialist psihiatru, care își face timp să înțeleagă ce ți se întâmplă și îți spune clar ce opțiuni ai.",
        videoTitle: "Cum decurge consultul psihiatric la Emmanuel CliniX",
      },
      video: "servicePsihiatrie",
      what: {
        eyebrow: "Ce este",
        title: "Pe scurt",
        paragraphs: [
          "Medicul te întreabă ce simți, de cât timp și cât de mult îți încurcă viața de zi cu zi. Apoi îți explică ce înseamnă și ce poți face.",
          "Dacă e nevoie de medicamente, ți le recomandă și te urmărește în timp. Dacă ai făcut BrainMap, medicul ține cont și de hartă, iar consultul se poate combina cu psihoterapia.",
        ],
      },
      session: {
        eyebrow: "Cum decurge",
        title: "Pas cu pas, cu explicații clare",
        steps: [
          {
            title: "Consultul",
            text: "Ne spui ce te-a adus la noi. Medicul te întreabă ce are nevoie să știe și te ascultă până la capăt.",
          },
          {
            title: "Evaluarea",
            text: "Primești o concluzie explicată pe limba ta, fără termeni medicali.",
          },
          {
            title: "Planul",
            text: "Discutați opțiunile și hotărâți împreună ce urmează.",
          },
          {
            title: "Controalele",
            text: "Revii la control, ca să vedeți ce s-a schimbat și să ajustați planul.",
          },
        ],
        facts: [
          "Consult cu un medic specialist psihiatru",
          "Totul rămâne confidențial",
          "Nu ai nevoie de trimitere",
          "Se poate combina cu psihoterapia",
        ],
      },
      helps: {
        eyebrow: "Pentru cine",
        title: "Cui îi poate folosi",
        conditions: ["anxietate", "panica", "dispozitie", "somn", "focus", "adictii"],
        note: "În caz de urgență, sună la 112. Consultul psihiatric nu ține loc de serviciile de urgență.",
      },
      safety: {
        eyebrow: "Ce trebuie să știi",
        title: "E pentru mine?",
        points: [
          "Totul rămâne între tine și medic.",
          "Nimeni nu te judecă. Spui doar ce vrei să spui.",
          "Nu iei niciun medicament fără să înțelegi de ce.",
          "Poți întreba oricând ce înseamnă un diagnostic sau o recomandare.",
        ],
        notTitle: "Când ai nevoie de altceva întâi",
        notFor: ["Dacă ai gânduri să îți faci rău, sună acum la 112", "Dacă ești într-o criză acută, mergi la cea mai apropiată unitate de primiri urgențe"],
      },
      faq: {
        eyebrow: "Întrebări",
        title: "Întrebări frecvente",
        items: [
          { q: "Am nevoie de trimitere ca să vin?", a: "Nu. Te poți programa direct." },
          {
            q: "Primesc automat medicamente?",
            a: "Nu. Medicul îți recomandă medicamente doar dacă e nevoie și numai după ce ți-a explicat de ce.",
          },
          {
            q: "Cât costă un consult?",
            a: "Îți spunem prețul la telefon, înainte de consult, și nu apar alte costuri pe parcurs.",
          },
          {
            q: "Ce se întâmplă cu ce spun?",
            a: "Rămâne confidențial și nu ajunge la nimeni altcineva.",
          },
        ],
      },
      cta: {
        title: "Vrei un consult psihiatric?",
        text: "Lasă-ne numărul și te sunăm noi, ca să stabilim împreună o programare.",
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
        lead: "Antrenament non-invaziv pentru creier, pornind de la harta ta.",
        videoTitle: "Cum funcționează neurofeedback-ul",
      },
      video: "serviceNeurofeedback",
      what: {
        eyebrow: "Ce este",
        title: "Pe scurt",
        paragraphs: [
          "Pornim de la harta ta, ca să știm exact de unde plecăm. Apoi, ședință cu ședință, creierul primește feedback și învață să se regleze singur.",
          "Scopul e ca, în timp, creierul să-și găsească singur un ritm mai stabil.",
        ],
      },
      session: {
        eyebrow: "Cum decurge o ședință",
        title: "Tu stai relaxat, iar creierul lucrează",
        steps: [
          {
            title: "Întâi BrainMap",
            text: "Harta arată ce zone lucrează prea mult și ce zone lucrează prea încet. De la ea pornește planul tău.",
          },
          {
            title: "Senzorii pe cap",
            text: "Stai pe scaun, îmbrăcat. Senzorii doar citesc activitatea creierului și nu trimit niciun semnal spre el.",
          },
          {
            title: "Ședința",
            text: "Stai relaxat pe scaun. În timpul ședinței nu simți nimic.",
          },
          {
            title: "Măsurăm din nou",
            text: "Refacem harta pe parcurs, ca să vezi ce s-a schimbat de la o etapă la alta.",
          },
        ],
        facts: [
          "Ședințe de 30–45 de minute",
          "Nu doare, fără medicamente",
          "Plan pornit de la harta ta",
          "Te întorci imediat la treabă",
        ],
      },
      helps: {
        eyebrow: "Pentru cine",
        title: "Cui îi poate folosi",
        conditions: ["anxietate", "panica", "somn", "focus", "stres", "burnout", "dispozitie"],
        note: "După BrainMap îți spunem sincer dacă neurofeedback-ul ți se potrivește.",
      },
      safety: {
        eyebrow: "Siguranță",
        title: "E sigur?",
        points: [
          "E non-invaziv. Nu îți intră nimic în corp.",
          "Senzorii doar citesc activitatea creierului. Nu trimit niciun semnal spre el.",
          "Nu primești medicamente și nu doare.",
          "După fiecare ședință te poți întoarce direct la treabă.",
        ],
        notTitle: "Ce să ne spui înainte",
        notFor: ["Spune-ne ce medicamente iei și ce probleme de sănătate ai."],
      },
      faq: {
        eyebrow: "Întrebări",
        title: "Întrebări frecvente",
        items: [
          { q: "Doare?", a: "Nu. Stai relaxat pe scaun și nu simți nimic cât durează ședința." },
          {
            q: "Trebuie să fac întâi BrainMap?",
            a: "Da. Harta ne arată de unde pornești și ne ajută să urmărim cum evoluezi.",
          },
          {
            q: "Câte ședințe sunt necesare?",
            a: "Diferă de la om la om. După BrainMap îți spunem ce plan ți se potrivește și cum urmărim progresul.",
          },
          {
            q: "Înlocuiește medicamentele?",
            a: "Nu. Nu opri niciun medicament de capul tău. Vorbește cu medicul care ți l-a prescris.",
          },
          { q: "Am nevoie de trimitere de la medicul de familie?", a: "Nu. Te poți programa direct." },
        ],
      },
      cta: {
        title: "Primul pas e să vezi harta creierului tău",
        text: "Scanarea, interpretarea și consultul psihologic, toate într-o singură vizită de aproximativ o oră.",
        primary: { label: "Programează BrainMap →", href: "/brainmap" },
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
        title: "Tu stai pe scaun, iar scaunul face antrenamentul",
        lead: "Pierderile de urină vin, de multe ori, de la un mușchi slăbit: planșeul pelvin. Iar un mușchi se poate antrena. Stai 28 de minute pe scaun, îmbrăcat.",
        videoTitle: "Cum funcționează scaunul EmSella",
      },
      video: "serviceEmsella",
      what: {
        eyebrow: "Ce este",
        title: "De cele mai multe ori, de vină e un mușchi",
        paragraphs: [
          "EmSella întărește mușchii planșeului pelvin. Un câmp electromagnetic îi contractă puternic, inclusiv fibrele de adâncime, pe care nu le poți lucra singur.",
          "E pentru cei care pierd urină la efort, simt brusc nevoia să meargă la toaletă sau se trezesc noaptea din cauza asta. Se potrivește atât femeilor, cât și bărbaților.",
        ],
      },
      session: {
        eyebrow: "Cum decurge o ședință",
        title: "Cum decurge o ședință",
        steps: [
          {
            title: "Te așezi pe scaun",
            text: "Rămâi îmbrăcat. Nu te dezbraci, nu te atinge nimeni și nu îți intră nimic în corp.",
          },
          {
            title: "Scaunul lucrează mușchiul",
            text: "Scaunul creează un câmp electromagnetic care ajunge direct la planșeul pelvin și face mușchii să se contracte puternic.",
          },
          {
            title: "Simți dacă mușchiul răspunde",
            text: "Simți contracțiile chiar din prima ședință, acolo pe scaun.",
          },
          {
            title: "Îți continui ziua",
            text: "Nu ai nevoie de pauză. Poți conduce, poți merge la muncă, îți vezi de zi.",
          },
        ],
        facts: [
          "O ședință durează 28 de minute",
          "Nu te dezbraci, nu te atinge nimeni",
          "Fără ace, fără anestezie, fără radiații",
          "Nu ai nevoie de pauză după",
        ],
      },
      helps: {
        eyebrow: "Pentru cine",
        title: "E pentru tine dacă",
        lead: "Pierzi urină când strănuți, tușești, râzi sau ridici ceva greu. Nevoia vine brusc și abia ajungi la baie. Te trezești noaptea de două-trei ori ca să mergi la toaletă.",
        conditions: ["planseu-pelvin"],
        note: "Înainte de programare, verificăm la telefon dacă ai vreo contraindicație.",
      },
      safety: {
        eyebrow: "Siguranță",
        title: "E sigur?",
        points: [
          "Nu doare. Contracțiile se simt puternic, dar nu dor.",
          "Reglăm intensitatea pentru fiecare om în parte.",
          "Fără ace, fără anestezie, fără radiații.",
          "Nu ai nevoie de pauză după.",
        ],
        notTitle: "Nu poți face EmSella dacă",
        notFor: ["Ești însărcinată", "Ai stimulator cardiac", "Ai implanturi metalice în zona pelvină", "Ai sterilet de cupru"],
      },
      faq: {
        eyebrow: "Întrebări",
        title: "Întrebări frecvente",
        items: [
          { q: "Cât durează o ședință?", a: "28 de minute, fără alt timp de pregătire înainte sau după." },
          {
            q: "Cât costă?",
            a: "250 de lei o ședință. Pachetul de 5 ședințe costă 1.150 de lei, iar cel de 10 ședințe, 2.000 de lei. Nu trebuie să iei un pachet din prima.",
          },
          { q: "Trebuie să mă dezbrac?", a: "Nu. Stai pe scaun îmbrăcat și nu te atinge nimeni." },
          {
            q: "De câte ședințe am nevoie?",
            a: "Recomandăm cel puțin 10. E antrenament pentru mușchi, iar un mușchi se întărește în timp.",
          },
          { q: "E și pentru bărbați?", a: "Da. Planșeul pelvin slăbește și la bărbați, mai ales după o operație de prostată." },
          { q: "Am nevoie de trimitere de la medicul de familie?", a: "Nu. Te poți programa direct." },
        ],
      },
      cta: {
        title: "Primul pas e un formular scurt, restul îl simți pe scaun",
        text: "Completezi formularul și te sunăm noi.",
        primary: { label: "Programează o ședință EmSella →", href: "/lp/emsella" },
        secondary: { label: "Sau sună-ne", href: "/contact" },
      },
    },
  },
};
