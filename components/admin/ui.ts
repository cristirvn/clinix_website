/** Shared class names for the /admin screens: big, calm, obvious (the people using it are not technical). */
export const btn = {
  primary:
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cta px-6 text-[1rem] font-semibold text-on-cta transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50",
  outline:
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-ink/20 bg-surface px-5 text-[1rem] font-semibold text-ink transition hover:border-ink/50 disabled:cursor-not-allowed disabled:opacity-50",
  small:
    "inline-flex min-h-10 items-center justify-center gap-1.5 rounded-full border border-line bg-surface px-3.5 text-[0.9rem] font-semibold text-ink transition hover:border-ink/40 disabled:cursor-not-allowed disabled:opacity-40",
  danger:
    "inline-flex min-h-10 items-center justify-center gap-1.5 rounded-full border border-danger/30 bg-surface px-3.5 text-[0.9rem] font-semibold text-danger transition hover:border-danger disabled:opacity-40",
};

export const field =
  "block w-full rounded-[14px] border border-ink/20 bg-surface px-4 py-3 text-[1rem] text-ink placeholder:text-ink-soft/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/25";

export const label = "mb-1.5 block text-[0.95rem] font-semibold";
export const hint = "mt-1.5 text-[0.88rem] text-ink-soft";
export const card = "rounded-[22px] bg-surface p-5 shadow-[var(--shadow-card)] ring-1 ring-line sm:p-7";
