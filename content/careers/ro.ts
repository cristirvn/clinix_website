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
    title: "Lucrează cu noi.",
    lead: "Căutăm oameni care măsoară înainte să recomande.",
  },
  why: {
    eyebrow: "De ce la noi",
    title: "Ce găsești aici",
    items: [
      { title: "Lucru pe date", text: "Pornim de la măsurătoare, nu de la presupuneri. Vezi rezultatul muncii tale." },
      { title: "O echipă mică", text: "Te cunoaștem pe nume. Deciziile se iau repede." },
      { title: "Aparatură modernă", text: "Lucrezi cu BrainMap, neurofeedback și alte metode neinvazive." },
      { title: "Învățare continuă", text: "Te ajutăm să te formezi pe metodele pe care le folosim." },
    ],
  },
  roles: {
    eyebrow: "Posturi deschise",
    title: "Pe cine căutăm",
    // Add a role: { id: "psiholog-clinician", title: "Psiholog clinician", meta: "Normă întreagă · București", text: "…" }
    items: [],
    applyLabel: "Aplică →",
    emptyTitle: "Acum nu avem un post deschis.",
    emptyText: "Dar ne bucurăm să te cunoaștem. Trimite-ne CV-ul și câteva rânduri despre tine. Te contactăm când apare ceva potrivit.",
    emailLabel: "Trimite CV-ul pe email →",
  },
  form: {
    title: "Spune-ne cine ești",
    text: "Lasă-ne datele tale. Te sunăm noi pentru o discuție scurtă.",
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
