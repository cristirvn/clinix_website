"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "@/components/layout/LocaleProvider";
import { ConsentCheckbox, Honeypot, SelectField, TextArea, TextField } from "@/components/forms/fields";
import { buttonClass } from "@/components/ui/primitives";
import { submitLead } from "@/lib/lead";
import { localizePath } from "@/lib/i18n";
import { isPlausiblePhone, isValidEmailShape } from "@/lib/contact-validation";
import type { LpSomnBContent } from "@/content/lp-somn-b";

type Errors = { name?: string; phone?: string; email?: string; consent?: string; form?: string };

/**
 * Qualifying application for /lp/somn-b (step 2 of 3) — ported from the old `LpApplyB`.
 * Selects / textareas / radio use native `required` validation (no `noValidate`, as before);
 * name / phone / email / consent get inline messages. Field keys sent to GHL are unchanged.
 */
export function ApplyForm({ copy }: { copy: LpSomnBContent["form"] }) {
  const router = useRouter();
  const { locale } = useLocale();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (key: string) => String(fd.get(key) ?? "").trim();

    const name = get("nume");
    const phone = get("telefon");
    const email = get("email");

    const fe: Errors = {};
    if (name.length < 2) fe.name = copy.errors.name;
    if (!isPlausiblePhone(phone, locale)) fe.phone = copy.errors.phone;
    if (!isValidEmailShape(email)) fe.email = copy.errors.email;
    if (!consent) fe.consent = copy.errors.consent;
    if (Object.keys(fe).length > 0) {
      setErrors(fe);
      return;
    }
    setErrors({});
    setStatus("submitting");

    const ok = await submitLead({
      group: "brainmap",
      form: "lp-somn-b",
      locale,
      name,
      phone,
      email,
      consent: true,
      website,
      fields: {
        sursa: "lp-somn-b",
        ab_variant: "B",
        concern: "insomnie",
        varsta: get("varsta"),
        durata: get("durata"),
        incercat: get("incercat"),
        cheltuit_total: get("cheltuit_total"),
        cheltuit_lunar: get("cheltuit_lunar"),
        investi: get("investi"),
        succes: get("succes"),
        viziune_9luni: get("noua_luni"),
        potrivit: get("potrivit"),
        hotarare: get("hotarare"),
        consimtamant: "da",
      },
    });

    if (!ok) {
      setErrors({ form: typeof navigator !== "undefined" && !navigator.onLine ? copy.errors.network : copy.errors.server });
      setStatus("error");
      return;
    }
    router.push(localizePath("/lp/somn-b/multumim", locale));
  }

  return (
    <form onSubmit={handleSubmit} className="relative space-y-12">
      <Honeypot value={website} onChange={setWebsite} />

      <Group title={copy.groups[0]}>
        <TextField
          id="nume"
          label={copy.name.label}
          placeholder={copy.name.placeholder}
          autoComplete="name"
          required
          error={errors.name}
        />
        <TextField
          id="telefon"
          type="tel"
          label={copy.phone.label}
          placeholder={copy.phone.placeholder}
          autoComplete="tel"
          inputMode="tel"
          required
          error={errors.phone}
        />
        <TextField
          id="email"
          type="email"
          label={copy.email.label}
          placeholder={copy.email.placeholder}
          autoComplete="email"
          inputMode="email"
          required
          error={errors.email}
        />
        <TextField id="varsta" type="number" label={copy.age.label} placeholder={copy.age.placeholder} min={18} max={100} required />
      </Group>

      <Group title={copy.groups[1]}>
        <SelectField id="durata" label={copy.duration.label} options={copy.duration.options} placeholder={copy.choose} defaultValue="" required />
        <TextArea id="incercat" label={copy.tried.label} hint={copy.tried.hint} placeholder={copy.tried.placeholder} maxLength={2000} />
      </Group>

      <Group title={copy.groups[2]}>
        <SelectField
          id="cheltuit_total"
          label={copy.spentTotal.label}
          options={copy.spentTotal.options}
          placeholder={copy.choose}
          defaultValue=""
          required
        />
        <SelectField
          id="cheltuit_lunar"
          label={copy.spentMonthly.label}
          hint={copy.spentMonthly.hint}
          options={copy.spentMonthly.options}
          placeholder={copy.choose}
          defaultValue=""
          required
        />
        <SelectField id="investi" label={copy.invest.label} options={copy.invest.options} placeholder={copy.choose} defaultValue="" required />
      </Group>

      <Group title={copy.groups[3]}>
        <TextArea id="succes" label={copy.success.label} hint={copy.success.hint} placeholder={copy.success.placeholder} maxLength={2000} required />
        <TextArea id="noua_luni" label={copy.nineMonths.label} placeholder={copy.nineMonths.placeholder} maxLength={2000} required />
      </Group>

      <Group title={copy.groups[4]}>
        <p className="rounded-[var(--radius)] border-l-4 border-accent bg-bg-alt px-5 py-4 text-lg font-medium">{copy.fitCallout}</p>
        <TextArea id="potrivit" label={copy.fit.label} placeholder={copy.fit.placeholder} maxLength={2000} required />

        <fieldset className="rounded-[var(--radius)] border-2 border-accent/40 bg-bg-alt p-5 sm:p-6">
          <legend className="sr-only">{copy.decision.label}</legend>
          <p aria-hidden="true" className="text-lg font-bold">
            {copy.decision.label}
          </p>
          <p className="mb-4 mt-1 text-sm text-ink-soft">{copy.decision.hint}</p>
          <div className="space-y-3">
            {copy.decision.options.map((o, i) => (
              <label
                key={o.value}
                className="flex cursor-pointer items-center gap-4 rounded-[var(--radius)] border-2 border-line bg-surface px-4 py-4 text-lg transition hover:border-ink/30 has-[:checked]:border-accent has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-accent"
              >
                <input type="radio" name="hotarare" value={o.value} required={i === 0} className="h-5 w-5 flex-none accent-[var(--accent)]" />
                <span>{o.label}</span>
              </label>
            ))}
          </div>
        </fieldset>
      </Group>

      <div className="space-y-5">
        <ConsentCheckbox checked={consent} onChange={setConsent} error={errors.consent} />
        {errors.form && (
          <p className="rounded-[var(--radius)] bg-danger/10 px-4 py-3 text-sm font-medium text-danger" role="alert">
            {errors.form}
          </p>
        )}
        <button type="submit" className={buttonClass("cta", "lg", "w-full")} disabled={status === "submitting" || !consent}>
          {status === "submitting" ? copy.sending : copy.submit}
        </button>
        <p className="text-center text-sm text-ink-soft">{copy.note}</p>
      </div>
    </form>
  );
}

function Group({ title, children }: { title: string; children: ReactNode }) {
  return (
    <fieldset className="space-y-6">
      <legend className="mb-6 w-full border-b border-line pb-3 font-display text-2xl sm:text-[1.7rem]">{title}</legend>
      {children}
    </fieldset>
  );
}
