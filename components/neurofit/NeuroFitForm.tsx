"use client";

import { useState, type FormEvent } from "react";
import { ConsentCheckbox, Honeypot, SubmitError, TextField } from "@/components/forms/fields";
import { buttonClass } from "@/components/ui/primitives";
import { useLocale } from "@/components/layout/LocaleProvider";
import { submitLead } from "@/lib/lead";
import { isPlausiblePhone, isValidEmailShape } from "@/lib/contact-validation";
import { CLINIC } from "@/lib/site";
import type { NeuroFitContent } from "@/content/neurofit";

type Errors = Partial<Record<"name" | "phone" | "email" | "consent", string>>;

/**
 * "Book your first experience" → GHL (group `neurofit`, form `neurofit`).
 * Name, mobile, optional email, the experience they're drawn to (optional,
 * one tap), consent. The clinic calls back; no prices, no calendar.
 */
export function NeuroFitForm({ copy }: { copy: NeuroFitContent["book"] }) {
  const { locale, dict } = useLocale();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  function validate(): Errors {
    const e: Errors = {};
    if (!name.trim()) e.name = dict.form.required;
    else if (name.trim().length < 3) e.name = dict.form.invalidName;
    if (!phone.trim()) e.phone = dict.form.required;
    else if (!isPlausiblePhone(phone, locale)) e.phone = dict.form.invalidPhone;
    if (email.trim() && !isValidEmailShape(email)) e.email = dict.form.invalidEmailGeneric;
    if (!consent) e.consent = dict.form.consentRequired;
    return e;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    setStatus("sending");
    const ok = await submitLead({
      group: "neurofit",
      form: "neurofit",
      locale,
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim() || undefined,
      fields: { sursa: "neurofit", experienta: experience },
      consent: true,
      website,
    });
    setStatus(ok ? "done" : "error");
  }

  if (status === "done") {
    return (
      <div role="status" aria-live="polite" className="py-8 text-center">
        <span aria-hidden="true" className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent text-2xl font-bold text-on-accent">
          ✓
        </span>
        <p className="mt-6 font-display text-3xl">{copy.successTitle}</p>
        <p className="mt-3 text-lg text-ink-soft">{copy.successText}</p>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="relative space-y-6">
      <TextField
        id="nf-name"
        label={dict.form.name}
        placeholder={dict.form.namePlaceholder}
        autoComplete="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={errors.name}
        required
      />
      <TextField
        id="nf-phone"
        type="tel"
        inputMode="tel"
        label={dict.form.phone}
        placeholder={dict.form.phonePlaceholder}
        autoComplete="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        error={errors.phone}
        required
      />
      <TextField
        id="nf-email"
        type="email"
        inputMode="email"
        label={copy.emailLabel}
        placeholder={dict.form.emailPlaceholder}
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
      />

      <fieldset>
        <legend className="mb-3 text-base font-semibold">{copy.experienceLabel}</legend>
        <div className="flex flex-wrap gap-2.5">
          {copy.experienceOptions.map((o) => {
            const on = experience === o;
            return (
              <label
                key={o}
                className={`flex min-h-12 cursor-pointer items-center rounded-full border-2 px-5 text-base font-semibold transition has-[:focus-visible]:outline has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent ${
                  on ? "border-accent bg-accent text-on-accent" : "border-line text-ink hover:border-accent/60"
                }`}
              >
                <input type="radio" name="nf-experience" value={o} checked={on} onChange={() => setExperience(o)} className="sr-only" />
                {o}
              </label>
            );
          })}
        </div>
      </fieldset>

      <ConsentCheckbox checked={consent} onChange={setConsent} error={errors.consent} />
      <Honeypot value={website} onChange={setWebsite} />
      <SubmitError show={status === "error"} />
      <button type="submit" disabled={status === "sending"} className={buttonClass("cta", "lg", "w-full")}>
        {status === "sending" ? dict.form.sending : copy.submit}
      </button>
      <p className="text-center text-base text-ink-soft">
        {copy.orCall}{" "}
        <a href={CLINIC.phoneHref} className="whitespace-nowrap font-semibold text-ink underline underline-offset-4">
          {CLINIC.phone}
        </a>
      </p>
    </form>
  );
}
