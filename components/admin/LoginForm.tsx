"use client";

import { useActionState } from "react";
import { login } from "@/app/admin/actions";
import { LogoMark } from "@/components/layout/Logo";
import { btn, card, field, label } from "./ui";

export function LoginForm({ disabledReason }: { disabledReason?: string }) {
  const [error, action, pending] = useActionState(login, null);
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className={`${card} w-full max-w-md`}>
        <div className="flex items-center gap-3">
          <LogoMark size={40} />
          <div>
            <p className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-ink-soft">Emmanuel CliniX</p>
            <h1 className="text-2xl">Panou de control</h1>
          </div>
        </div>
        {disabledReason ? (
          <p className="mt-6 rounded-[14px] bg-bg-alt p-4 text-ink-soft">{disabledReason}</p>
        ) : (
          <form action={action} className="mt-7 space-y-5">
            <div>
              <label htmlFor="password" className={label}>
                Parola
              </label>
              <input id="password" name="password" type="password" autoComplete="current-password" required autoFocus className={field} />
            </div>
            {error && (
              <p role="alert" className="font-semibold text-danger">
                {error}
              </p>
            )}
            <button type="submit" disabled={pending} className={`${btn.primary} w-full`}>
              {pending ? "Se verifică…" : "Intră"}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
