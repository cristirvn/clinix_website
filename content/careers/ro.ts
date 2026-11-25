import type { CareersContent } from "./types";

// PROVISIONAL copy — client to confirm (why work with us, roles).
export const CAREERS_RO: CareersContent = {
  seo: {
    title: "Cariere",
    description:
      "Lucrează cu noi la Emmanuel CliniX, clinică de neuroștiință aplicată din București. Posturi deschise și cum ne trimiți CV-ul.",
  },
  hero: {
    eyebrow: "Cariere",
    title: "Lucrează cu noi",
    lead: "Căutăm oameni care, ca și noi, măsoară înainte să recomande.",
  },
  why: {
    eyebrow: "De ce la noi",
    title: "Ce găsești aici",
    items: [
      { title: "Lucrezi pe date", text: "Pornim mereu de la măsurători și vezi concret rezultatul muncii tale." },
      { title: "O echipă mică", text: "Ne știm toți pe nume, iar deciziile se iau repede." },
      { title: "Aparatură modernă", text: "Lucrezi cu BrainMap, neurofeedback și alte metode non-invazive." },
      { title: "Învățare continuă", text: "Te ajutăm să te formezi pe metodele cu care lucrăm." },
    ],
  },
  roles: {
    eyebrow: "Posturi deschise",
    title: "Pe cine căutăm",
    // Add a role: { id: "psiholog-clinician", title: "Psiholog clinician", meta: "Normă întreagă · București", text: "…" }
    items: [],
    applyLabel: "Aplică →",
    emptyTitle: "Acum nu avem niciun post deschis",
    emptyText: "Ne bucurăm totuși să te cunoaștem. Trimite-ne CV-ul și câteva rânduri despre tine, iar când apare ceva potrivit te contactăm.",
    emailLabel: "Trimite CV-ul pe email →",
  },
  form: {
    title: "Spune-ne cine ești",
    text: "Lasă-ne datele tale și te sunăm pentru o discuție scurtă.",
    roleLabel: "Ce rol te interesează?",
    rolePlaceholder: "ex. psiholog, asistent medical, recepție",
    roleOpen: "Candidatură spontană",
    emailLabel: "Email",
    messageLabel: "Câteva rânduri despre tine (opțional)",
    messagePlaceholder: "Experiența ta, pe scurt",
    cvNote: "CV-ul îl trimiți pe email, la",
    submit: "Trimite",
    successTitle: "Mulțumim. Am primit datele tale.",
    successText: "Te contactăm în cel mai scurt timp.",
  },
};
