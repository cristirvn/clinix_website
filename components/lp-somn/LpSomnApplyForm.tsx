"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Honeypot, SelectField, TextArea, TextField } from "@/components/forms/fields";
import { L } from "@/components/ui/L";
import { buttonClass } from "@/components/ui/primitives";
import { useLocale } from "@/components/layout/LocaleProvider";
import { submitLead } from "@/lib/lead";
import { localizePath } from "@/lib/i18n";
import { isPlausiblePhone, isValidEmailShape } from "@/lib/contact-validation";
import type { LpSomnFormCopy } from "@/content/lp-somn";

/**
 * Application form of `/lp/somn` (variant A). Field set, validation order and
 * the GHL field keys are ported 1:1 from the previous build's `LpApply`.
 * `ab_variant` attributes the lead to this page in the A/B test vs `/lp/somn-b`.
 */
const AB_VARIANT = "A";

type ErrorKey = "name" | "age" | "phone" | "email" | "situatie" | "durata" | "pretOk" | "consent" | "form";
type Errors = Partial<Record<ErrorKey, string>>;

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

export function LpSomnApplyForm({ copy }: { copy: LpSomnFormCopy }) {
  const router = useRouter();
  const { locale } = useLocale();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [situatie, setSituatie] = useState("");
  const [durata, setDurata] = useState("");
  const [incercat, setIncercat] = useState("");
  const [pretOk, setPretOk] = useState(false);
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");

  const e = copy.errors;
  const valueOf = (options: LpSomnFormCopy["situatie"]["options"], label: string) =>
    options.find((o) => o.label === label)?.value ?? "";

  async function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const n = name.trim();
    const a = age.trim();
    const p = phone.trim();
    const m = email.trim();
    const t = incercat.trim();

    const fe: Errors = {};
    if (n.length < 2) fe.name = e.name;
    if (!a) fe.age = e.ageMissing;
    else if (!/^\d{1,3}$/.test(a) || Number(a) < 10 || Number(a) > 110) fe.age = e.ageInvalid;
    if (!isPlausiblePhone(p, locale)) fe.phone = e.phone;
    if (!m || !isValidEmailShape(m)) fe.email = e.email;
    if (!situatie) fe.situatie = e.situatie;
    if (!durata) fe.durata = e.durata;
    if (!pretOk) fe.pretOk = e.pretOk;
    if (!consent) fe.consent = e.consent;
    if (Object.keys(fe).length > 0) {
      setErrors(fe);
      return;
    }
    setErrors({});
    setStatus("submitting");

    const ok = await submitLead({
      group: "brainmap",
      form: "lp-somn",
      locale,
      name: n,
      phone: p,
      email: m,
      consent: true,
      website,
      fields: {
        concern: "insomnie",
        sursa: "lp-somn",
        ab_variant: AB_VARIANT,
        varsta: a,
        situatie: valueOf(copy.situatie.options, situatie),
        i3_durata: valueOf(copy.durata.options, durata),
        pret_confirmat: "da",
        consimtamant: "da",
        ...(t ? { incercat: t } : {}),
      },
    });
    if (!ok) {
      setErrors({ form: e.form });
      setStatus("error");
      return;
    }
    router.push(localizePath("/lp/somn/multumim", locale));
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="relative space-y-6">
      <Honeypot value={website} onChange={setWebsite} />

      <TextField
        id="nume"
        label={copy.name.label}
        placeholder={copy.name.placeholder}
        autoComplete="name"
        value={name}
        onChange={(ev) => setName(ev.target.value)}
        error={errors.name}
      />
      <TextField
        id="varsta"
        type="number"
        inputMode="numeric"
        min={10}
        max={110}
        label={copy.age.label}
        placeholder={copy.age.placeholder}
        value={age}
        onChange={(ev) => setAge(ev.target.value)}
        error={errors.age}
      />
      <TextField
        id="telefon"
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        label={copy.phone.label}
        placeholder={copy.phone.placeholder}
        value={phone}
        onChange={(ev) => setPhone(ev.target.value)}
        error={errors.phone}
      />
      <TextField
        id="email"
        type="email"
        inputMode="email"
        autoComplete="email"
        label={copy.email.label}
        placeholder={copy.email.placeholder}
        value={email}
        onChange={(ev) => setEmail(ev.target.value)}
        error={errors.email}
      />
      <SelectField
        id="situatie"
        label={copy.situatie.label}
        placeholder={copy.situatie.placeholder}
        options={copy.situatie.options.map((o) => o.label)}
        value={situatie}
        onChange={(ev) => setSituatie(ev.target.value)}
        error={errors.situatie}
      />
      <SelectField
        id="durata"
        label={copy.durata.label}
        placeholder={copy.durata.placeholder}
        options={copy.durata.options.map((o) => o.label)}
        value={durata}
        onChange={(ev) => setDurata(ev.target.value)}
        error={errors.durata}
      />
      <TextArea
        id="incercat"
        maxLength={1000}
        label={
          <>
            {copy.incercat.label} <span className="font-normal text-ink-soft">{copy.incercat.optional}</span>
          </>
        }
        placeholder={copy.incercat.placeholder}
        value={incercat}
        onChange={(ev) => setIncercat(ev.target.value)}
      />

      <p className="rounded-[var(--radius)] border border-line bg-bg-alt px-5 py-4 text-base">{copy.priceNote}</p>

      <div className="space-y-4">
        <Check checked={pretOk} onChange={setPretOk} error={errors.pretOk}>
          {copy.priceConfirm}
        </Check>
        <Check checked={consent} onChange={setConsent} error={errors.consent}>
          {copy.consent}{" "}
          <L href="/politica-de-confidentialitate" target="_blank" className="text-ink-soft underline underline-offset-2">
            {copy.privacyLink}
          </L>
        </Check>
      </div>

      {errors.form && (
        <p className="rounded-[var(--radius)] bg-danger/10 px-4 py-3 text-sm font-medium text-danger" role="alert">
          {errors.form}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting" || !consent || !pretOk}
        className={buttonClass("cta", "lg", "w-full")}
      >
        {status === "submitting" ? copy.sending : copy.submit}
      </button>
      <p className="text-center text-sm text-ink-soft">{copy.microcopy}</p>
    </form>
  );
}
