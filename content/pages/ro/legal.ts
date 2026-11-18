import type { LegalContent } from "@/content/pages/legal";
import { CLINIC } from "@/lib/site";

/**
 * Ported from the previous build's placeholder legal pages.
 * TODO(owner): BOTH texts are drafts — they must be replaced by the clinic's
 * legally reviewed text (GDPR / health data) before launch. The pages stay
 * `noindex` until then (see the page files).
 */
export const LEGAL_RO: LegalContent = {
  privacy: {
    seo: {
      title: "Politica de Confidențialitate",
      description: "Cum colectează și prelucrează Emmanuel CliniX datele cu caracter personal, conform GDPR.",
    },
    eyebrow: "Legal",
    title: "Politica de Confidențialitate",
    sections: [
      {
        heading: "1. Operatorul de date",
        paragraphs: [`${CLINIC.address}. Contact: ${CLINIC.phone} · ${CLINIC.email}.`],
      },
      {
        heading: "2. Ce date colectăm",
        // TODO(owner): full details of any other data collected.
        paragraphs: [
          "Nume, telefon și, opțional, e-mail, colectate prin formularele de pe site (chestionare, pagină de contact).",
        ],
      },
      {
        heading: "3. Scopul prelucrării",
        // TODO(owner): legal basis and storage period.
        paragraphs: [
          "Pentru a te contacta telefonic sau prin e-mail în legătură cu rezultatul evaluării și pentru a-ți oferi informații despre serviciile clinicii.",
        ],
      },
      {
        heading: "4. Drepturile tale",
        // TODO(owner): full wording of the GDPR rights (approved legal text).
        paragraphs: ["Dreptul de acces, rectificare, ștergere, opoziție și portabilitate a datelor, conform GDPR."],
      },
      {
        heading: "5. Contact",
        paragraphs: [`Pentru exercitarea drepturilor GDPR: ${CLINIC.email}.`],
      },
    ],
  },
  terms: {
    seo: {
      title: "Termeni și Condiții",
      description: "Termenii și condițiile de utilizare a site-ului și serviciilor Emmanuel CliniX.",
    },
    eyebrow: "Legal",
    title: "Termeni și Condiții",
    sections: [
      {
        heading: "1. Furnizorul serviciului",
        paragraphs: [`${CLINIC.address}. Contact: ${CLINIC.phone} · ${CLINIC.email}.`],
      },
      {
        heading: "2. Utilizarea site-ului",
        // TODO(owner): conditions of access and use of the information published on the site.
        // Interim text = the approved footer disclaimer.
        paragraphs: [
          "Informațiile de pe acest site au caracter informativ și nu înlocuiesc consultul medical. Testele online sunt instrumente de auto-evaluare, nu diagnostice.",
        ],
      },
      {
        heading: "3. Programări și servicii medicale",
        // TODO(owner): nature of the BrainMap assessment, the indicative character of the results,
        // booking / cancellation conditions. Interim text = approved facts only.
        paragraphs: [
          "Evaluarea BrainMap costă 1.200 de lei și include scanarea, interpretarea pe loc, consultul psihologic și PDF-ul cu recomandări. Dacă începi un program cu noi, suma se scade integral.",
          "Programările se fac telefonic: te sunăm și găsim împreună o oră care ți se potrivește.",
        ],
      },
      {
        heading: "4. Limitarea răspunderii",
        // TODO(owner): standard limitation-of-liability clauses (approved legal text).
        paragraphs: ["Rezultatele testelor online au caracter orientativ și nu reprezintă un diagnostic medical."],
      },
      {
        heading: "5. Contact",
        paragraphs: [`Pentru întrebări legate de acești termeni: ${CLINIC.email}.`],
      },
    ],
  },
};
