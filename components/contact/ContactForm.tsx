"use client";

import { useState, type FormEvent } from "react";
import { ConsentCheckbox, Honeypot, SubmitError, TextArea, TextField } from "@/components/forms/fields";
import { buttonClass } from "@/components/ui/primitives";
import { useLocale } from "@/components/layout/LocaleProvider";
import { submitLead } from "@/lib/lead";
import { isPlausiblePhone, isValidEmailShape } from "@/lib/contact-validation";
import type { ContactContent } from "@/content/pages/contact";

type Errors = Partial<Record<"name" | "phone" | "email" | "consent", string>>;

/** "Te sunăm noi" callback form → GHL (group `contact`, form `contact`). */
export function ContactForm({ copy }: { copy: ContactContent["form"] }) {
  const { locale, dict } = useLocale();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
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
      group: "contact",
      form: "contact",
      locale,
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim() || undefined,
      fields: { mesaj: message.trim() },
      consent: true,
      website,
    });
    setStatus(ok ? "done" : "error");
  }

  if (status === "done") {
    return (
      <div role="status" aria-live="polite" className="py-6 text-center">
        <span
          aria-hidden="true"
          className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent text-2xl font-bold text-on-accent"
        >
          ✓
        </span>
        <h2 className="mt-6 text-3xl">{copy.successTitle}</h2>
        <p className="mt-3 text-lg text-ink-soft">{copy.successText}</p>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="relative space-y-6">
      <div>
        <h2 className="text-[1.9rem] sm:text-4xl">{copy.title}</h2>
        <p className="mt-3 text-ink-soft">{copy.text}</p>
      </div>
      <TextField
        id="contact-name"
        label={dict.form.name}
        placeholder={dict.form.namePlaceholder}
        autoComplete="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={errors.name}
        required
      />
      <TextField
        id="contact-phone"
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
        id="contact-email"
        type="email"
        inputMode="email"
        label={copy.emailLabel}
        placeholder={dict.form.emailPlaceholder}
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
      />
      <TextArea
        id="contact-message"
        label={dict.form.message}
        placeholder={copy.messagePlaceholder}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <ConsentCheckbox checked={consent} onChange={setConsent} error={errors.consent} />
      <Honeypot value={website} onChange={setWebsite} />
      <SubmitError show={status === "error"} />
      <button type="submit" disabled={status === "sending"} className={buttonClass("cta", "lg", "w-full")}>
        {status === "sending" ? dict.form.sending : copy.submit}
      </button>
      <p className="text-center text-sm text-ink-soft">{dict.form.privacyNote}</p>
    </form>
  );
}
