import type { TherapistsLocale } from "./types";

// PROVISIONAL copy (placeholder) — built only from the facts on /echipa. The
// clinic sends the final texts, the VSLs (set in /admin) and the testimonials
// (added in /admin, ticked for each psychotherapist's page).
export const THERAPISTS_RO: TherapistsLocale = {
  ui: {
    serviceName: "Psihoterapie",
    cta: "Programează o ședință la {name}",
    heroMicro: "Te sunăm noi și stabilim împreună ziua și ora.",
    videoTitle: "Află cum lucrează {name}",
    testimonials: {
      title: "Ce spun pacienții",
      lede: "Oameni care au lucrat cu {name}, în cuvintele lor.",
      play: "Pornește testimonialul",
      placeholder: "Testimonial în curând",
    },
    qualify: {
      title: "Este potrivit pentru tine?",
      fitsTitle: "E pentru tine dacă",
      notTitle: "Ai nevoie de altceva întâi dacă",
    },
    faqTitle: "Întrebări frecvente",
    form: {
      title: "Programează o ședință la {name}",
      lede: "Lasă-ne datele tale. Te sunăm în cel mult o zi lucrătoare și stabilim împreună prima ședință.",
      submit: "Vreau o programare",
      successTitle: "Mulțumim. Te sunăm curând.",
      successBody: "Te sunăm în cel mult o zi lucrătoare ca să stabilim prima ședință. Dacă vrei să vorbim mai repede, sună-ne la",
      callNote: "Nu plătești nimic acum.",
    },
    sticky: { sub: "Psihoterapeut · te sunăm noi", cta: "Programează-te" },
    pageNav: { title: "Pe această pagină", video: "Video", about: "Despre", testimonials: "Testimoniale", faq: "Întrebări", book: "Programare" },
    legal:
      "Informațiile de pe această pagină au caracter informativ și nu înlocuiesc consultul medical. Dacă ai gânduri să îți faci rău, sună acum la 112.",
    carousel: {
      title: "Alege-ți psihoterapeutul",
      lead: "Vezi cine e fiecare și cum lucrează, apoi îți faci direct programarea.",
      more: "Citește mai mult despre {name}",
      prev: "Înapoi",
      next: "Mai departe",
    },
  },
  items: {
    "patricia-cihodaru": {
      slug: "patricia-cihodaru",
      name: "Patricia Cihodaru",
      firstName: "Patricia",
      role: "Psiholog și psihoterapeut",
      photo: "/photos/echipa/patricia-cihodaru.webp",
      video: "therapistPatriciaVsl",
      seo: {
        title: "Patricia Cihodaru, psihoterapeut în București",
        description:
          "Psihoterapie cu Patricia Cihodaru la Emmanuel CliniX, în București. Peste 20 de ani de experiență cu adulți, copii și adolescenți. Programează o ședință.",
      },
      card: {
        short: "Face psihoterapie de peste 20 de ani. Lucrează cu adulți, adolescenți și copii.",
        focus: ["Psihoterapie experiențială", "CBT", "Psihoterapie transpersonală"],
      },
      hero: {
        lede: "Peste 20 de ani de psihoterapie. Un cadru sigur și empatic, în care spui doar ce vrei să spui, în ritmul tău.",
        facts: ["Peste 20 de ani de experiență", "Adulți, copii și adolescenți", "Ședințe de aproximativ 50 de minute", "Totul rămâne confidențial"],
      },
      about: {
        title: "Cine este Patricia",
        paragraphs: [
          "Patricia Cihodaru este psiholog și psihoterapeut, cu peste 20 de ani de psihoterapie. Lucrează cu adulți, copii și adolescenți, într-un cadru sigur și empatic.",
          "Integrează metode experiențiale, cognitiv-comportamentale și transpersonale. Alege împreună cu tine ce ți se potrivește, nu aplică aceeași rețetă pentru toată lumea.",
          "La Emmanuel CliniX, ședințele pot porni și de la datele din BrainMap: dacă ai făcut harta, Patricia ține cont de ea.",
        ],
      },
      helps: {
        title: "Cu ce te poate ajuta",
        items: [
          { title: "Anxietate și stres", text: "Când grijile nu se mai opresc și corpul stă mereu în alertă." },
          { title: "Emoții greu de gestionat", text: "Când reacționezi mai puternic decât ai vrea și nu știi de ce." },
          { title: "Copii și adolescenți", text: "Când copilul trece printr-o perioadă grea și are nevoie de un spațiu doar al lui." },
          { title: "Momente de schimbare", text: "Pierderi, despărțiri, decizii mari: când ai nevoie să pui lucrurile în ordine." },
        ],
      },
      approach: {
        title: "Cum lucrează Patricia",
        steps: [
          { title: "Prima întâlnire", text: "Îi spui ce te aduce. Stabiliți împreună ce vrei să se schimbe." },
          { title: "Ședințele", text: "De obicei o dată pe săptămână, în cabinet. Vorbești cât și cum vrei." },
          { title: "Între ședințe", text: "Uneori primești mici exerciții, ca să aplici ce ați discutat." },
          { title: "Bilanțul", text: "Din când în când vedeți împreună ce s-a schimbat și ce urmează." },
        ],
      },
      qualify: {
        fits: [
          "Simți că nu mai poți duce singur ce te apasă",
          "Vrei să înțelegi de unde vin reacțiile tale",
          "Cauți un psihoterapeut cu experiență, care să te asculte cu adevărat",
        ],
        notFit: ["Ai gânduri să îți faci rău: sună acum la 112", "Ai nevoie de tratament cu medicamente: te îndrumăm către medicul psihiatru"],
      },
      faq: [
        { q: "Am nevoie de un diagnostic ca să vin?", a: "Nu." },
        { q: "Lucrează și cu copii?", a: "Da. Patricia lucrează cu adulți, copii și adolescenți." },
        { q: "Cât costă o ședință?", a: "Îți spunem prețul la telefon, înainte de prima ședință. Fără costuri ascunse." },
        { q: "Ce se întâmplă cu ce spun?", a: "Rămâne confidențial. Nu se transmite mai departe." },
      ],
    },
    "aniela-sircu": {
      slug: "aniela-sircu",
      name: "Aniela Sîrcu",
      firstName: "Aniela",
      role: "Psiholog și psihoterapeut",
      photo: "/photos/echipa/aniela-sircu.webp",
      video: "therapistAnielaVsl",
      seo: {
        title: "Aniela Sîrcu, psihoterapeut în București",
        description:
          "Psihoterapie cu Aniela Sîrcu la Emmanuel CliniX, în București: terapie cognitiv-comportamentală, de cuplu și familie. 20 de ani de experiență. Programează o ședință.",
      },
      card: {
        short: "Lucrează de 20 de ani cu adolescenți, adulți și cupluri.",
        focus: ["CBT", "Cuplu și familie", "Sexologie"],
      },
      hero: {
        lede: "20 de ani de experiență cu adolescenți, adulți și cupluri. Lucrează concret, pe ce vrei tu să schimbi.",
        facts: ["20 de ani de experiență", "Adolescenți, adulți și cupluri", "Ședințe de aproximativ 50 de minute", "Totul rămâne confidențial"],
      },
      about: {
        title: "Cine este Aniela",
        paragraphs: [
          "Aniela Sîrcu este psiholog, formată în psihoterapie cognitiv-comportamentală, psihoterapie de cuplu și familie și sexologie.",
          "Are 20 de ani de experiență cu adolescenți, adulți și cupluri. Lucrează concret: înțelegeți împreună ce se întâmplă și exersați pas cu pas alte moduri de a reacționa.",
          "La Emmanuel CliniX, ședințele pot porni și de la datele din BrainMap: dacă ai făcut harta, Aniela ține cont de ea.",
        ],
      },
      helps: {
        title: "Cu ce te poate ajuta",
        items: [
          { title: "Anxietate și gânduri care nu se opresc", text: "Când mintea merge înainte și tu nu reușești să o oprești." },
          { title: "Relația de cuplu", text: "Când certurile se repetă sau nu mai știți cum să vorbiți unul cu celălalt." },
          { title: "Familie", text: "Când tensiunile din casă îi afectează pe toți." },
          { title: "Viața intimă", text: "Când apar dificultăți despre care e greu să vorbești cu altcineva." },
        ],
      },
      approach: {
        title: "Cum lucrează Aniela",
        steps: [
          { title: "Prima întâlnire", text: "Îi spui ce te aduce. Stabiliți împreună ce vrei să se schimbe." },
          { title: "Ședințele", text: "Individual sau în cuplu, de obicei o dată pe săptămână, în cabinet." },
          { title: "Între ședințe", text: "Primești exerciții scurte, ca să aplici ce ați lucrat." },
          { title: "Bilanțul", text: "Din când în când vedeți împreună ce s-a schimbat și ce urmează." },
        ],
      },
      qualify: {
        fits: [
          "Vrei să lucrezi concret, cu pași clari",
          "Treceți printr-o perioadă grea în cuplu sau în familie",
          "Vrei să vorbești deschis despre ce e greu de spus altundeva",
        ],
        notFit: ["Ai gânduri să îți faci rău: sună acum la 112", "Ai nevoie de tratament cu medicamente: te îndrumăm către medicul psihiatru"],
      },
      faq: [
        { q: "Am nevoie de un diagnostic ca să vin?", a: "Nu." },
        { q: "Putem veni în cuplu?", a: "Da. Aniela lucrează și cu cupluri și familii." },
        { q: "Cât costă o ședință?", a: "Îți spunem prețul la telefon, înainte de prima ședință. Fără costuri ascunse." },
        { q: "Ce se întâmplă cu ce spun?", a: "Rămâne confidențial. Nu se transmite mai departe." },
      ],
    },
  },
};
