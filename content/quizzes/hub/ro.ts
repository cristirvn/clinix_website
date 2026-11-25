import type { QuizHub, Triage } from "./types";

/** Approved Romanian copy (verbatim from the previous build). */
export const HUB_RO: QuizHub = {
  seo: {
    title: "Chestionare — află unde stai, de fapt",
    description:
      "Nouă teste de auto-evaluare, în 2–3 minute: anxietate, atacuri de panică, somn, burnout, focus, dispoziție, migrene, stres și dependența de un obicei. La final primești o notă de la 1 la 10 și riscurile pe care le indică răspunsurile tale.",
  },
  hero: {
    eyebrow: "Chestionare",
    title: "Află unde stai, de fapt.",
    subtitle:
      "Alege testul care te descrie. Primești o notă de la 1 la 10.",
  },
  /** The promise, restated as three scannable facts above the cards. */
  promise: [
    { label: "2–3 minute", text: "Întrebări scurte, cu variante clare de răspuns." },
    { label: "O notă de la 1 la 10", text: "Vezi exact cât de serioasă e situația ta acum." },
    { label: "Riscuri explicate", text: "Ce arată răspunsurile tale, pe înțelesul tuturor." },
  ],
  cards: [
    {
      slug: "anxietate",
      audience: "Pentru tine",
      title: "Nivelul de anxietate",
      description:
        "Îngrijorare care nu se oprește și tensiune în corp — mintea rămâne în alertă chiar și când nu e niciun pericol.",
    },
    {
      slug: "panica",
      audience: "Pentru tine",
      title: "Atacurile de panică",
      description:
        "Episoade în care inima o ia razna și aerul nu ajunge, analize care ies bune — și teama că urmează încă unul.",
    },
    {
      slug: "somn",
      audience: "Pentru tine",
      title: "Calitatea somnului",
      description:
        "Adormi greu, te trezești noaptea sau prea devreme, iar dimineața ești mai obosit decât seara.",
    },
    {
      slug: "burnout",
      audience: "Pentru tine",
      title: "Epuizarea profesională",
      description:
        "Munca ți-a golit rezervorul: nu te mai reface nici weekendul și te trezești deja obosit.",
    },
    {
      slug: "focus",
      audience: "Pentru tine",
      title: "Focus și productivitate",
      description:
        "Minte încețoșată, amâni ce e important, sari de la una la alta — și simți că îți irosești potențialul.",
    },
    {
      slug: "dispozitie",
      audience: "Pentru tine",
      title: "Starea de spirit și energia",
      description:
        "Nu mai ai chef de nimic, nu te mai bucuri de ce îți plăcea, iar energia a scăzut fără un motiv clar.",
    },
    {
      slug: "migrene",
      audience: "Pentru tine",
      title: "Dureri de cap și migrene",
      description:
        "Dureri de cap frecvente sau migrene care îți taie zile întregi și te fac să trăiești cu analgezice la îndemână.",
    },
    {
      slug: "stres",
      audience: "Pentru tine",
      title: "Nivelul de stres",
      description:
        "Presiune constantă, nervi întinși, corpul care nu se mai relaxează nici când, teoretic, ai timp liber.",
    },
    {
      slug: "adictii",
      audience: "Pentru tine",
      title: "Dependența de un obicei",
      description:
        "Telefon, jocuri, alcool, țigări, pariuri, cumpărături — un obicei care îți ia mai mult timp și control decât ai vrea.",
    },
  ],
  /** Fallback for people who don't fit a card — the triage screen at `/evaluare`. */
  general: {
    title: "Nu știi pe care să-l alegi?",
    text: "Răspunde la o singură întrebare despre ce te deranjează cel mai des și te trimitem direct la testul potrivit.",
    button: "Ajută-mă să aleg →",
  },
};

export const TRIAGE_RO: Triage = {
  seo: {
    title: "Cu ce te confrunți? — alege testul potrivit",
    description:
      "Spune-ne într-o singură întrebare ce te deranjează cel mai des și îți dăm testul de auto-evaluare potrivit: o notă de la 1 la 10 și riscurile pe care le indică răspunsurile tale.",
  },
  eyebrow: "Evaluare gratuită",
  question: "Cu ce te confrunți cel mai des?",
  help: "Alege ce ți se potrivește cel mai bine în perioada asta.",
  options: [
    { label: "Anxietate, îngrijorare constantă", slug: "anxietate" },
    { label: "Atacuri de panică", slug: "panica" },
    { label: "Probleme cu somnul — adorm greu sau mă trezesc obosit", slug: "somn" },
    { label: "Epuizare profesională, mă simt ars de muncă", slug: "burnout" },
    { label: "Brain fog — minte încețoșată, concentrare slabă", slug: "focus" },
    { label: "Lipsă de chef, dispoziție scăzută, nu mă mai bucur de nimic", slug: "dispozitie" },
    { label: "Dureri de cap frecvente sau migrene", slug: "migrene" },
    { label: "Stres general, presiune constantă", slug: "stres" },
    { label: "Simt că am pierdut controlul asupra unui obicei (alcool, telefon, jocuri etc.)", slug: "adictii" },
  ],
  /** Secondary path for people who'd rather talk than fill in a test. */
  direct: {
    text: "Preferi să vorbești cu cineva din clinică?",
    button: "Te sunăm noi →",
    href: "/contact",
  },
};
