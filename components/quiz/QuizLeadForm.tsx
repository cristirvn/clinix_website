"use client";

import { useState, type FormEvent } from "react";
import { useLocale } from "@/components/layout/LocaleProvider";
import { Honeypot, SubmitError, TextField } from "@/components/forms/fields";
import { L } from "@/components/ui/L";
import type { QuizUi } from "@/content/quizzes/ui";
import { buttonClass } from "@/components/ui/primitives";
import { isPlausibleEmail, isPlausiblePhone } from "@/lib/contact-validation";
import { submitLead } from "@/lib/lead";
import { CalculatingOverlay, calcDelayMs } from "@/components/quiz/CalculatingOverlay";

type Errors = { name?: string; phone?: string; email?: string; consent?: string };

/**
 * Name + phone + email behind the mandatory consent box. The result unlocks
 * only after `/api/lead` accepts the lead; then the "calculating" moment plays
 * and `onSuccess` reveals the result.
 */
export function QuizLeadForm({
  form,
  fields,
  submitLabel,
  calculatingMessage,
  ui,
  onSuccess,
}: {
  /** GHL form id / tag, e.g. `test-somn`. */
  form: string;
  fields: Record<string, string>;
  submitLabel: string;
  calculatingMessage: string;
  ui: QuizUi;
  onSuccess: (name: string) => void;
}) {
  const { locale, dict } = useLocale();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [consentTerms, setConsentTerms] = useState(false);
  const [consentContact, setConsentContact] = useState(false);
  const consentOk = consentTerms && consentContact;
  const [website, setWebsite] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "error" | "calculating">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next: Errors = {};
    if (name.trim().length < 2) next.name = dict.form.invalidName;
    if (!isPlausiblePhone(phone, locale)) next.phone = dict.form.invalidPhone;
    if (!isPlausibleEmail(email, locale)) next.email = dict.form.invalidEmail;
    if (!consentOk) next.consent = ui.consentError;
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("sending");
    const ok = await submitLead({
      group: "quiz",
      form,
      locale,
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      consent: true,
      website,
      fields: { ...fields, consimtamant_contact: "da" },
    });
    if (!ok) {
      setStatus("error");
      return;
    }
    setStatus("calculating");
    await new Promise((r) => setTimeout(r, calcDelayMs()));
    onSuccess(name.trim());
  }

  if (status === "calculating") return <CalculatingOverlay message={calculatingMessage} />;

  return (
    <form onSubmit={handleSubmit} className="relative space-y-6" noValidate>
      <Honeypot value={website} onChange={setWebsite} />
      <TextField
        id="quiz-name"
        label={dict.form.name}
        type="text"
        autoComplete="name"
        placeholder={dict.form.namePlaceholder}
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={errors.name}
        required
      />
      <TextField
        id="quiz-phone"
        label={dict.form.phone}
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        placeholder={dict.form.phonePlaceholder}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        error={errors.phone}
        required
      />
      <TextField
        id="quiz-email"
        label={dict.form.email}
        type="email"
        inputMode="email"
        autoComplete="email"
        placeholder={dict.form.emailPlaceholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
        required
      />
      <div className="space-y-4">
        <label className="flex cursor-pointer items-start gap-3 text-base leading-snug text-ink">
          <input
            type="checkbox"
            checked={consentTerms}
            onChange={(e) => setConsentTerms(e.target.checked)}
            required
            className="mt-0.5 h-6 w-6 flex-none accent-[var(--accent)]"
          />
          <span>
            {ui.consentTerms.before}{" "}
            <L href="/termeni-si-conditii" target="_blank" className="font-semibold underline underline-offset-2">
              {ui.consentTerms.termsLink}
            </L>{" "}
            {ui.consentTerms.and}{" "}
            <L href="/politica-de-confidentialitate" target="_blank" className="font-semibold underline underline-offset-2">
              {ui.consentTerms.privacyLink}
            </L>
            . <span className="text-danger">*</span>
          </span>
        </label>
        <label className="flex cursor-pointer items-start gap-3 text-base leading-snug text-ink">
          <input
            type="checkbox"
            checked={consentContact}
            onChange={(e) => setConsentContact(e.target.checked)}
            required
            className="mt-0.5 h-6 w-6 flex-none accent-[var(--accent)]"
          />
          <span>
            {ui.consentContact} <span className="text-danger">*</span>
          </span>
        </label>
        {errors.consent && (
          <p className="text-sm font-medium text-danger" role="alert">
            {errors.consent}
          </p>
        )}
      </div>
      <SubmitError show={status === "error"} />
      <button type="submit" disabled={status === "sending" || !consentOk} className={buttonClass("cta", "lg", "w-full")}>
        {status === "sending" ? dict.form.sending : submitLabel}
      </button>
      <p className="text-center text-base text-ink-soft">{dict.form.privacyNote}</p>
    </form>
  );
}
