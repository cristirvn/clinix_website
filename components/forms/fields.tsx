"use client";

import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { L } from "@/components/ui/L";
import { useLocale } from "@/components/layout/LocaleProvider";
import { CLINIC } from "@/lib/site";

/**
 * Form controls shared by every form (quizzes, LPs, contact). Large inputs and
 * labels for a 40–50+ audience. Submit through `submitLead()` from `lib/lead.ts`.
 */

const INPUT =
  "block w-full rounded-[14px] border-2 border-line bg-surface px-4 py-3.5 text-lg text-ink placeholder:text-ink-soft/60 transition focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 aria-[invalid=true]:border-danger";

function Field({ label, error, hint, htmlFor, children }: { label: ReactNode; error?: string | null; hint?: ReactNode; htmlFor: string; children: ReactNode }) {
  return (
    <div className="space-y-2">
      <label htmlFor={htmlFor} className="block text-base font-semibold">
        {label}
      </label>
      {children}
      {hint && !error && <p className="text-sm text-ink-soft">{hint}</p>}
      {error && (
        <p className="text-sm font-medium text-danger" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export function TextField({
  label,
  error,
  hint,
  id,
  ...input
}: { label: ReactNode; error?: string | null; hint?: ReactNode; id: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <Field label={label} error={error} hint={hint} htmlFor={id}>
      <input id={id} name={id} aria-invalid={error ? true : undefined} className={INPUT} {...input} />
    </Field>
  );
}

export function TextArea({
  label,
  error,
  hint,
  id,
  ...input
}: { label: ReactNode; error?: string | null; hint?: ReactNode; id: string } & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <Field label={label} error={error} hint={hint} htmlFor={id}>
      <textarea id={id} name={id} rows={4} aria-invalid={error ? true : undefined} className={INPUT} {...input} />
    </Field>
  );
}

export function SelectField({
  label,
  error,
  hint,
  id,
  options,
  placeholder,
  ...select
}: {
  label: ReactNode;
  error?: string | null;
  hint?: ReactNode;
  id: string;
  /** Plain strings, or `{ value, label }` when the stored value differs from the visible text. */
  options: Array<string | { value: string; label: string }>;
  placeholder?: string;
} & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <Field label={label} error={error} hint={hint} htmlFor={id}>
      <select id={id} name={id} aria-invalid={error ? true : undefined} className={INPUT} {...select}>
        {placeholder !== undefined && <option value="">{placeholder}</option>}
        {options.map((o) => {
          const { value, label: text } = typeof o === "string" ? { value: o, label: o } : o;
          return (
            <option key={value} value={value}>
              {text}
            </option>
          );
        })}
      </select>
    </Field>
  );
}

/** Large tappable radio options (used by multi-step forms). */
export function ChoiceGroup({
  name,
  label,
  options,
  value,
  onChange,
  error,
}: {
  name: string;
  label: ReactNode;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  error?: string | null;
}) {
  return (
    <fieldset className="space-y-3">
      <legend className="mb-3 text-base font-semibold">{label}</legend>
      {options.map((o) => (
        <label
          key={o}
          className={`flex cursor-pointer items-center gap-3 rounded-[18px] border-2 px-4 py-3.5 text-lg transition ${
            value === o ? "border-primary bg-primary/[0.06]" : "border-line bg-surface hover:border-primary/40"
          }`}
        >
          <input type="radio" name={name} value={o} checked={value === o} onChange={() => onChange(o)} className="h-5 w-5 accent-[var(--primary)]" />
          {o}
        </label>
      ))}
      {error && (
        <p className="text-sm font-medium text-danger" role="alert">
          {error}
        </p>
      )}
    </fieldset>
  );
}

/** Mandatory GDPR consent (health data = special category). */
export function ConsentCheckbox({ checked, onChange, error }: { checked: boolean; onChange: (v: boolean) => void; error?: string | null }) {
  const { dict } = useLocale();
  return (
    <div>
      <label className="flex cursor-pointer items-start gap-3 text-[0.95rem] leading-snug text-ink-soft">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="mt-0.5 h-6 w-6 flex-none accent-[var(--accent)]"
          aria-invalid={error ? true : undefined}
        />
        <span>
          {dict.form.consent}{" "}
          <L href="/politica-de-confidentialitate" target="_blank" className="font-semibold text-ink underline underline-offset-2">
            {dict.form.consentLink}
          </L>
          .
        </span>
      </label>
      {error && (
        <p className="mt-2 text-sm font-medium text-danger" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

/** Off-screen honeypot field — bots fill it, people never see it. */
export function Honeypot({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
      <label>
        Website
        <input tabIndex={-1} autoComplete="off" value={value} onChange={(e) => onChange(e.target.value)} />
      </label>
    </div>
  );
}

/** Generic "couldn't send" message with the phone number. */
export function SubmitError({ show }: { show: boolean }) {
  const { dict } = useLocale();
  if (!show) return null;
  return (
    <p className="rounded-[var(--radius)] bg-danger/10 px-4 py-3 text-sm font-medium text-danger" role="alert">
      {dict.form.error}{" "}
      <a href={CLINIC.phoneHref} className="underline">
        {CLINIC.phone}
      </a>
      .
    </p>
  );
}
