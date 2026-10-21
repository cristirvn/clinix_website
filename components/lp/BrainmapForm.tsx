"use client";

import { useRef, useState, type FormEvent } from "react";
import { Honeypot, SelectField, SubmitError, TextArea, TextField } from "@/components/forms/fields";
import { L } from "@/components/ui/L";
import { buttonClass } from "@/components/ui/primitives";
import { useLocale } from "@/components/layout/LocaleProvider";
import { submitLead } from "@/lib/lead";
import { isPlausiblePhone, isValidEmailShape } from "@/lib/contact-validation";
import { CLINIC } from "@/lib/site";
import type { BrainmapLp } from "@/content/lps/types";
import type { BrainmapFixed } from "@/content/lps/fixed/types";

type Errors = Partial<Record<"name" | "age" | "phone" | "email" | "consent", string>>;

/**
 * BrainMap application form (LPs + /brainmap). Ported from the approved build:
 * same fields, same two gating checkboxes (price + GDPR), same GHL keys
 * (`sursa`, `lp`, `concern`, `acord_pret`, `varsta`, `lp_situatie`,
 * `lp_durata`, `lp_incercat`). After success it shows the inline thank-you.
 */
export function BrainmapForm({ lp, copy, formId }: { lp: BrainmapLp; copy: BrainmapFixed["form"]; formId: string }) {
  const { locale, dict } = useLocale();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [situatie, setSituatie] = useState("");
  const [durata, setDurata] = useState("");
  const [incercat, setIncercat] = useState("");
  const [website, setWebsite] = useState("");
  const [agreedPrice, setAgreedPrice] = useState(false);
  const [agreedGdpr, setAgreedGdpr] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "error" | "done">("idle");
  const doneRef = useRef<HTMLDivElement>(null);
  const consentOk = agreedPrice && agreedGdpr;
  const uid = lp.slug;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fe: Errors = {};
    if (name.trim().length < 2) fe.name = copy.errName;
    const ageNumber = Number(age);
    if (age.trim() && (!Number.isFinite(ageNumber) || ageNumber < 16 || ageNumber > 100)) fe.age = copy.errAge;
    if (!isPlausiblePhone(phone, locale)) fe.phone = dict.form.invalidPhone;
    if (!isValidEmailShape(email)) fe.email = dict.form.invalidEmailGeneric;
    if (!consentOk) fe.consent = copy.errConsent;
    setErrors(fe);
    if (Object.keys(fe).length > 0) {
      const first = Object.keys(fe)[0];
      document.getElementById(first === "consent" ? `pret-${uid}` : `${first}-${uid}`)?.focus();
      return;
    }

    setStatus("submitting");
    const ok = await submitLead({
      group: "brainmap",
      form: formId,
      locale,
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      consent: true,
      website,
      fields: {
        sursa: formId,
        lp: lp.slug,
        concern: lp.concern,
        acord_pret: "da",
        ...(age.trim() ? { varsta: age.trim() } : {}),
        ...(situatie ? { lp_situatie: situatie } : {}),
        ...(durata ? { lp_durata: durata } : {}),
        ...(incercat.trim() ? { lp_incercat: incercat.trim() } : {}),
      },
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

  const check = "mt-0.5 h-6 w-6 flex-none accent-[var(--accent)]";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="relative space-y-6 rounded-[var(--radius)] border border-line bg-surface p-6 text-ink shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)] sm:p-10"
    >
      <Honeypot value={website} onChange={setWebsite} />

      <TextField
        id={`name-${uid}`}
        label={copy.nameLabel}
        placeholder={copy.namePlaceholder}
        autoComplete="name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={errors.name}
      />
      <div className="grid gap-6 sm:grid-cols-[9rem_1fr]">
        <TextField
          id={`age-${uid}`}
          label={copy.ageLabel}
          placeholder={copy.agePlaceholder}
          type="number"
          inputMode="numeric"
          min={16}
          max={100}
          value={age}
          onChange={(e) => setAge(e.target.value)}
          error={errors.age}
        />
        <TextField
          id={`phone-${uid}`}
          label={copy.phoneLabel}
          placeholder={copy.phonePlaceholder}
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          error={errors.phone}
        />
      </div>
      <TextField
        id={`email-${uid}`}
        label={copy.emailLabel}
        placeholder={copy.emailPlaceholder}
        type="email"
        inputMode="email"
        autoComplete="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
      />
      <SelectField
        id={`situatie-${uid}`}
        label={lp.form.situatieLabel}
        placeholder={copy.selectPlaceholder}
        options={[...lp.form.situatieOptions, copy.situatieExtra]}
        value={situatie}
        onChange={(e) => setSituatie(e.target.value)}
      />
      <SelectField
        id={`durata-${uid}`}
        label={lp.form.durataLabel}
        placeholder={copy.selectPlaceholder}
        options={copy.durataOptions}
        value={durata}
        onChange={(e) => setDurata(e.target.value)}
      />
      <TextArea
        id={`incercat-${uid}`}
        label={
          <>
            {copy.incercatLabel} <span className="font-normal text-ink-soft">{copy.optional}</span>
          </>
        }
        placeholder={lp.form.incercatPlaceholder}
        maxLength={1000}
        value={incercat}
        onChange={(e) => setIncercat(e.target.value)}
      />

      <div className="rounded-[var(--radius)] border-l-4 border-accent bg-bg-alt px-5 py-4 text-ink-soft">
        <b className="text-ink">{copy.priceNoteStrong}</b>
        {copy.priceNoteRest}
      </div>

      <div className="space-y-4">
        <label className="flex cursor-pointer items-start gap-3 text-[0.95rem] leading-snug">
          <input
            id={`pret-${uid}`}
            type="checkbox"
            checked={agreedPrice}
            onChange={(e) => setAgreedPrice(e.target.checked)}
            className={check}
            aria-invalid={errors.consent && !agreedPrice ? true : undefined}
          />
          <span>{copy.priceCheck}</span>
        </label>
        <label className="flex cursor-pointer items-start gap-3 text-[0.95rem] leading-snug text-ink-soft">
          <input
            type="checkbox"
            checked={agreedGdpr}
            onChange={(e) => setAgreedGdpr(e.target.checked)}
            className={check}
            aria-invalid={errors.consent && !agreedGdpr ? true : undefined}
          />
          <span>
            {copy.gdprBefore}
            <L href="/politica-de-confidentialitate" target="_blank" className="font-semibold text-ink underline underline-offset-2">
              {copy.gdprLink}
            </L>
            {copy.gdprAfter}
          </span>
        </label>
        {errors.consent && (
          <p className="text-sm font-medium text-danger" role="alert">
            {errors.consent}
          </p>
        )}
      </div>

      <SubmitError show={status === "error"} />

      <button type="submit" className={buttonClass("cta", "lg", "w-full")} disabled={status === "submitting" || !consentOk}>
        {status === "submitting" ? copy.submitting : copy.submit}
      </button>
      <div className="space-y-1 text-center text-sm text-ink-soft">
        <p>{copy.callNote}</p>
        <p>{copy.confidential}</p>
      </div>
    </form>
  );
}
