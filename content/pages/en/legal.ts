import type { LegalContent } from "@/content/pages/legal";
import { CLINIC } from "@/lib/site";

/**
 * English translation of `ro/legal.ts`.
 * TODO(owner): drafts — replace with the legally reviewed English text before launch.
 */
export const LEGAL_EN: LegalContent = {
  privacy: {
    seo: {
      title: "Privacy Policy",
      description: "How Emmanuel CliniX collects and processes personal data, in line with the GDPR.",
    },
    eyebrow: "Legal",
    title: "Privacy Policy",
    sections: [
      {
        heading: "1. Data controller",
        paragraphs: [`${CLINIC.name}, ${CLINIC.address}. Contact: ${CLINIC.phone} · ${CLINIC.email}.`],
      },
      {
        heading: "2. What data we collect",
        // TODO(owner): full details of any other data collected.
        paragraphs: [
          "Your name, phone number and, optionally, your email address, collected through the forms on this site (tests, contact page).",
        ],
      },
      {
        heading: "3. Why we process it",
        // TODO(owner): legal basis and storage period.
        paragraphs: [
          "To contact you by phone or email about the result of your assessment and to give you information about the clinic's services.",
        ],
      },
      {
        heading: "4. Your rights",
        // TODO(owner): full wording of the GDPR rights (approved legal text).
        paragraphs: ["The right of access, rectification, erasure, objection and data portability, under the GDPR."],
      },
      {
        heading: "5. Contact",
        paragraphs: [`To exercise your GDPR rights: ${CLINIC.email}.`],
      },
    ],
  },
  terms: {
    seo: {
      title: "Terms and Conditions",
      description: "Terms and conditions for using the Emmanuel CliniX website and services.",
    },
    eyebrow: "Legal",
    title: "Terms and Conditions",
    sections: [
      {
        heading: "1. Service provider",
        paragraphs: [`${CLINIC.name}, ${CLINIC.address}. Contact: ${CLINIC.phone} · ${CLINIC.email}.`],
      },
      {
        heading: "2. Use of this website",
        // TODO(owner): conditions of access and use of the information published on the site.
        paragraphs: [
          "The information on this site is for general information only and does not replace a medical consultation. The online tests are self-assessment tools, not diagnoses.",
        ],
      },
      {
        heading: "3. Appointments and medical services",
        // TODO(owner): nature of the BrainMap assessment, the indicative character of the results,
        // booking / cancellation conditions.
        paragraphs: [
          "The BrainMap assessment costs 1,200 RON and includes the scan, the on-the-spot interpretation, the psychological consultation and the PDF with recommendations. If you start a programme with us, the full amount is deducted.",
          "Appointments are made by phone: we call you and find a time that suits you.",
        ],
      },
      {
        heading: "4. Limitation of liability",
        // TODO(owner): standard limitation-of-liability clauses (approved legal text).
        paragraphs: ["The results of the online tests are indicative only and are not a medical diagnosis."],
      },
      {
        heading: "5. Contact",
        paragraphs: [`For questions about these terms: ${CLINIC.email}.`],
      },
    ],
  },
};
