"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { Honeypot, SelectField, TextArea, TextField } from "@/components/forms/fields";
import { useLocale } from "@/components/layout/LocaleProvider";
import { buttonClass } from "@/components/ui/primitives";
import { isPlausiblePhone, isValidEmailShape } from "@/lib/contact-validation";
import { submitLead, type LeadPayload } from "@/lib/lead";
import { CLINIC } from "@/lib/site";
import type { LpEmsellaContent } from "@/content/lp-emsella/types";

type Errors = Partial<
  Record<"name" | "age" | "phone" | "email" | "situatie" | "durata" | "contraindicatii" | "pretOk" | "consent" | "form", string>
>;
type Contact = { name: string; phone: string; email: string };

function Check({
  checked,
  onChange,
  error,
  children,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label className="flex cursor-pointer items-start gap-3 text-base leading-snug">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          aria-invalid={error ? true : undefined}
          className="mt-0.5 h-6 w-6 flex-none accent-[var(--accent)]"
        />
        <span>{children}</span>
      </label>
      {error && (
        <p className="mt-2 text-sm font-medium text-danger" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

/**
 * EmSella application, two steps (ported from the old `LpEmsellaApply`):
 *  1. contact + qualifier form → real lead (group "emsella")
 *  2. GHL booking calendar (NEXT_PUBLIC_GHL_BOOKING_URL) with a "prefer phone"
 *     opt-out that sends a best-effort follow-up note.
 */
export function EmsellaApply({ form: t, calendar: cal }: { form: LpEmsellaContent["form"]; calendar: LpEmsellaContent["calendar"] }) {
  const { locale } = useLocale();
  const [step, setStep] = useState<"form" | "programare">("form");
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [website, setWebsite] = useState("");
  const [consent, setConsent] = useState(false);
  const [contraindicatii, setContraindicatii] = useState(false);
  const [pretOk, setPretOk] = useState(false);
  const [contact, setContact] = useState<Contact | null>(null);
  const [preferPhone, setPreferPhone] = useState(false);
  const [phonePrefSent, setPhonePrefSent] = useState(false);
  const stepHeading = useRef<HTMLHeadingElement>(null);

  const bookingUrl = process.env.NEXT_PUBLIC_GHL_BOOKING_URL;

  useEffect(() => {
    if (step !== "programare") return;
    stepHeading.current?.focus();
    stepHeading.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [step]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();
    const name = get("name");
    const age = get("age");
    const phone = get("phone");
    const email = get("email");
    const situatie = get("situatie");
    const durata = get("durata");
    const incercat = get("incercat");

    const fe: Errors = {};
    if (name.length < 2) fe.name = t.errors.name;
    if (!age) fe.age = t.errors.ageMissing;
    else if (!/^\d{1,3}$/.test(age) || Number(age) < 18 || Number(age) > 100) fe.age = t.errors.ageInvalid;
    if (!isPlausiblePhone(phone, locale)) fe.phone = t.errors.phone;
    if (!email || !isValidEmailShape(email)) fe.email = t.errors.email;
    if (!situatie) fe.situatie = t.errors.situatie;
    if (!durata) fe.durata = t.errors.durata;
    if (!contraindicatii) fe.contraindicatii = t.errors.contraindicatii;
    if (!pretOk) fe.pretOk = t.errors.pretOk;
    if (!consent) fe.consent = t.errors.consent;
    if (Object.keys(fe).length > 0) {
      setErrors(fe);
      return;
    }
    setErrors({});
    setStatus("submitting");

    const ok = await submitLead({
      group: "emsella",
      form: "emsella",
      locale,
      name,
      phone,
      email,
      consent: true,
      website,
      fields: {
        sursa: "lp-emsella",
        varsta: age,
        situatie,
        durata,
        fara_contraindicatii: "da",
        pret_confirmat: "da",
        consimtamant: "da",
        ...(incercat ? { incercat } : {}),
      },
    });
    if (!ok) {
      setErrors({ form: t.errors.form });
      setStatus("error");
      return;
    }
    setStatus("idle");
    setContact({ name, phone, email });
    setStep("programare");
  }

  async function handlePreferPhone(checked: boolean) {
    setPreferPhone(checked);
    if (!checked || phonePrefSent || !contact) return;
    setPhonePrefSent(true);
    // Best-effort follow-up note — the lead already landed at step 1. Posted
    // directly (not via submitLead) so the ad conversion isn't counted twice.
    const payload: LeadPayload = {
      group: "emsella",
      form: "emsella",
      locale,
      ...contact,
      consent: true,
      fields: { sursa: "lp-emsella", consimtamant: "da", programare_telefonica: "da" },
    };
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, page: window.location.href }),
      });
    } catch {
      // ignore
    }
  }

  if (step === "programare") {
    if (!bookingUrl) {
      return (
        <div className="py-4 text-center" aria-live="polite">
          <span aria-hidden="true" className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-2xl font-bold text-on-accent">
            ✓
          </span>
          <h3 ref={stepHeading} tabIndex={-1} className="scroll-mt-28 text-2xl focus:outline-none sm:text-3xl">
            {cal.fallbackTitle}
          </h3>
          <p className="mt-3 text-lg text-ink-soft">{cal.fallbackText}</p>
          <p className="mt-6 text-lg font-semibold">
            <a href={CLINIC.phoneHref} className="underline underline-offset-4">
              {CLINIC.phone}
            </a>
          </p>
        </div>
      );
    }
    return (
      <div aria-live="polite">
        <h3 ref={stepHeading} tabIndex={-1} className="scroll-mt-28 text-2xl focus:outline-none sm:text-3xl">
          {cal.title}
        </h3>
        <p className="mt-2 text-lg text-ink-soft">{cal.sub}</p>

        <div
          className={`mt-6 overflow-hidden rounded-[var(--radius)] border border-line bg-bg transition ${
            preferPhone ? "pointer-events-none opacity-40" : ""
          }`}
          aria-hidden={preferPhone || undefined}
        >
          <iframe src={bookingUrl} title={cal.iframeTitle} className="block h-[760px] w-full border-0" />
        </div>

        <label
          className={`mt-6 flex cursor-pointer items-center gap-4 rounded-[var(--radius)] border-2 px-5 py-4 text-lg font-semibold transition ${
            preferPhone ? "border-accent bg-bg-alt" : "border-line bg-surface hover:border-ink/30"
          }`}
        >
          <input
            type="checkbox"
            checked={preferPhone}
            onChange={(e) => handlePreferPhone(e.target.checked)}
            className="h-6 w-6 flex-none accent-[var(--accent)]"
          />
          <svg width="22" height="22" viewBox="0 0 16 16" aria-hidden="true" className="flex-none text-accent">
            <path
              d="M2 3.5C2 2.7 2.7 2 3.5 2h1.2c.6 0 1.1.4 1.2 1l.4 2c.1.5-.1 1-.5 1.2l-.9.5c.7 1.5 1.9 2.7 3.4 3.4l.5-.9c.3-.4.7-.6 1.2-.5l2 .4c.6.1 1 .6 1 1.2v1.2c0 .8-.7 1.5-1.5 1.5C7.6 14 2 8.4 2 3.5Z"
              fill="currentColor"
            />
          </svg>
          <span>{cal.preferPhone}</span>
        </label>
        {preferPhone && (
          <p className="mt-4 font-semibold text-success" role="status">
            {cal.preferPhoneConfirm}
          </p>
        )}
      </div>
    );
  }

  const canSubmit = consent && contraindicatii && pretOk && status !== "submitting";

  return (
    <form onSubmit={handleSubmit} noValidate className="relative space-y-6">
      <Honeypot value={website} onChange={setWebsite} />

      <TextField id="name" label={t.name.label} placeholder={t.name.placeholder} autoComplete="name" required error={errors.name} />
      <div className="grid gap-6 sm:grid-cols-[9rem_1fr]">
        <TextField
          id="age"
          type="number"
          label={t.age.label}
          placeholder={t.age.placeholder}
          min={18}
          max={100}
          inputMode="numeric"
          required
          error={errors.age}
        />
        <TextField
          id="phone"
          type="tel"
          label={t.phone.label}
          placeholder={t.phone.placeholder}
          autoComplete="tel"
          inputMode="tel"
          required
          error={errors.phone}
        />
      </div>
      <TextField
        id="email"
        type="email"
        label={t.email.label}
        placeholder={t.email.placeholder}
        autoComplete="email"
        inputMode="email"
        required
        error={errors.email}
      />
      <SelectField
        id="situatie"
        label={t.situatie.label}
        placeholder={t.situatie.placeholder}
        options={t.situatie.options}
        defaultValue=""
        error={errors.situatie}
      />
      <SelectField
        id="durata"
        label={t.durata.label}
        placeholder={t.durata.placeholder}
        options={t.durata.options}
        defaultValue=""
        error={errors.durata}
      />
      <TextArea
        id="incercat"
        label={
          <>
            {t.incercat.label} <span className="font-normal text-ink-soft">{t.incercat.optional}</span>
          </>
        }
        placeholder={t.incercat.placeholder}
        maxLength={1000}
      />

      <div className="space-y-5 rounded-[var(--radius)] border border-line bg-bg-alt p-5 sm:p-6">
        <Check checked={contraindicatii} onChange={setContraindicatii} error={errors.contraindicatii}>
          {t.contraindicatii}
        </Check>
        <p className="border-t border-line pt-5 font-semibold">{t.priceNote}</p>
        <Check checked={pretOk} onChange={setPretOk} error={errors.pretOk}>
          {t.pretOk}
        </Check>
        <Check checked={consent} onChange={setConsent} error={errors.consent}>
          {t.consent}
        </Check>
      </div>

      {errors.form && (
        <p className="rounded-[var(--radius)] bg-danger/10 px-4 py-3 text-sm font-medium text-danger" role="alert">
          {errors.form}{" "}
          <a href={CLINIC.phoneHref} className="underline">
            {CLINIC.phone}
          </a>
        </p>
      )}

      <button type="submit" disabled={!canSubmit} className={buttonClass("cta", "lg", "w-full")}>
        {status === "submitting" ? t.sending : t.submit}
      </button>
      <p className="text-center text-ink-soft">{t.microcopy}</p>
    </form>
  );
}
