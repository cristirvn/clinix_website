import type { Article } from "../types";

// PROVISIONAL copy — client to confirm.
export const ARTICLE: Article = {
  slug: "anxietate-sau-panica",
  title: "Anxietate sau panică? Cum le deosebești",
  description:
    "Sunt înrudite, dar arată diferit în viața de zi cu zi. Ce înseamnă fiecare, când mergi întâi la medic și care e primul pas.",
  category: "Anxietate",
  published: "2026-11-03",
  readingMinutes: 4,
  author: "Emmanuel CliniX",
  image: "portrait",
  topics: ["anxietate", "panica"],
  body: [
    {
      type: "p",
      text: "Mulți oameni folosesc cuvintele „anxietate” și „panică” ca și cum ar însemna același lucru. Sunt înrudite, dar arată diferit în viața de zi cu zi.",
    },
    { type: "h2", text: "Anxietatea: o alarmă care nu se oprește" },
    {
      type: "p",
      text: "Anxietatea stă de obicei în fundal. Îngrijorare care nu se oprește și tensiune în corp — mintea rămâne în alertă chiar și când nu e niciun pericol. Poate dura zile, săptămâni sau luni.",
    },
    { type: "h2", text: "Panica: un val scurt și puternic" },
    {
      type: "p",
      text: "Un atac de panică vine brusc și atinge vârful în câteva minute. Inima o ia razna, aerul nu ajunge, apar amețeala și tremurul. Analizele ies bune — și rămâne teama că urmează încă unul.",
    },
    { type: "h2", text: "Pe scurt" },
    {
      type: "list",
      items: [
        "Anxietatea: îngrijorare constantă, de fundal, care durează.",
        "Panica: episoade bruște și intense, de câteva minute.",
        "Pot apărea împreună: frica de următorul atac este ea însăși o formă de anxietate.",
      ],
    },
    { type: "h2", text: "Când mergi întâi la medic" },
    {
      type: "p",
      text: "Dacă ai pentru prima dată dureri în piept, lipsă de aer sau palpitații, mergi întâi la medic sau sună la 112. Cauzele care țin de inimă trebuie excluse înainte de orice altceva.",
    },
    { type: "h2", text: "Care e primul pas" },
    {
      type: "p",
      text: "Află unde stai. Testele noastre gratuite durează 2–3 minute și îți dau o notă de la 1 la 10. Dacă vrei să vezi ce se întâmplă, de fapt, în creier, BrainMap îți arată harta activității lui.",
    },
    {
      type: "links",
      items: [
        { label: "Testul de anxietate →", href: "/chestionare/anxietate" },
        { label: "Testul pentru atacuri de panică →", href: "/chestionare/panica" },
      ],
    },
  ],
  cta: {
    title: "Nu ghici. Măsoară.",
    text: "Fă testul gratuit în 2–3 minute și vezi ce indică răspunsurile tale.",
    primary: { label: "Fă testul de anxietate →", href: "/chestionare/anxietate" },
  },
};
