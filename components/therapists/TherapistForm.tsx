"use client";

import { useRef, useState, type FormEvent } from "react";
import { ConsentCheckbox, Honeypot, SubmitError, TextField } from "@/components/forms/fields";
import { buttonClass } from "@/components/ui/primitives";
import { useLocale } from "@/components/layout/LocaleProvider";
import { submitLead } from "@/lib/lead";
import { isPlausiblePhone, isValidEmailShape } from "@/lib/contact-validation";
import { CLINIC } from "@/lib/site";

type Errors = Partial<Record<"name" | "phone" | "email" | "consent", string>>;

/**
 * "Programează o ședință la X" — name, phone, email (+ the mandatory consent),
 * like the other forms. Goes to GoHighLevel through the contact webhook,
 * tagged `psihoterapeut-<slug>`; the psychotherapist's name travels in
 * `psihoterapeut` so the clinic knows who the session is with.
 */
export function TherapistForm({
  slug,
  therapistName,
  copy,
}: {
  slug: string;
  therapistName: string;
  copy: { submit: string; successTitle: string; successBody: string; callNote: string };
}) {
  const { locale, dict } = useLocale();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "error" | "done">("idle");
  const doneRef = useRef<HTMLDivElement>(null);
  const form = `psihoterapeut-${slug}`;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fe: Errors = {};
    if (name.trim().length < 2) fe.name = dict.form.invalidName;
    if (!isPlausiblePhone(phone, locale)) fe.phone = dict.form.invalidPhone;
    if (!email.trim() || !isValidEmailShape(email)) fe.email = dict.form.invalidEmailGeneric;
    if (!consent) fe.consent = dict.form.consentRequired;
    setErrors(fe);
    if (Object.keys(fe).length > 0) {
      const first = Object.keys(fe)[0];
      if (first !== "consent") document.getElementById(`${first}-${form}`)?.focus();
      return;
    }

    setStatus("submitting");
    const ok = await submitLead({
      group: "contact",
      form,
      locale,
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      consent: true,
      website,
      fields: { sursa: form, serviciu: "psihoterapie", psihoterapeut: therapistName },
    });
    if (!ok) {
      setStatus("error");
      return;
    }
    setStatus("done");
    requestAnimationFrame(() => doneRef.current?.focus());
  }

  if (status === "done") {
    return (
      <div
        ref={doneRef}
        tabIndex={-1}
        role="status"
        className="rounded-[var(--radius)] border-2 border-accent bg-surface p-8 text-center text-ink focus:outline-none sm:p-12"
      >
        <span aria-hidden="true" className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-2xl text-on-accent">
          ✓
        </span>
        <h3 className="text-3xl sm:text-4xl">{copy.successTitle}</h3>
        <p className="mx-auto mt-4 max-w-md text-lg text-ink-soft">
          {copy.successBody}{" "}
          <a href={CLINIC.phoneHref} className="font-semibold whitespace-nowrap text-ink underline underline-offset-2">
            {CLINIC.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="relative space-y-6 rounded-[var(--radius)] border border-line bg-surface p-6 text-ink shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)] sm:p-10"
    >
      <Honeypot value={website} onChange={setWebsite} />
      <TextField
        id={`name-${form}`}
        label={dict.form.name}
        placeholder={dict.form.namePlaceholder}
        autoComplete="name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={errors.name}
      />
      <TextField
        id={`phone-${form}`}
        label={dict.form.phone}
        placeholder={dict.form.phonePlaceholder}
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        required
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        error={errors.phone}
      />
      <TextField
        id={`email-${form}`}
        label={dict.form.email}
        placeholder={dict.form.emailPlaceholder}
        type="email"
        inputMode="email"
        autoComplete="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
      />
      <ConsentCheckbox checked={consent} onChange={setConsent} error={errors.consent} />
      <SubmitError show={status === "error"} />
      <button type="submit" className={buttonClass("cta", "lg", "w-full")} disabled={status === "submitting"}>
        {status === "submitting" ? dict.form.sending : copy.submit}
      </button>
      <div className="space-y-1 text-center text-sm text-ink-soft">
        <p>{copy.callNote}</p>
        <p>{dict.form.privacyNote}</p>
      </div>
    </form>
  );
}
