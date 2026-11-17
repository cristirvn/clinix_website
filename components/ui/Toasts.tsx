"use client";

import { Toaster } from "sonner";

/**
 * Sonner toaster (sonner.emilkowal.ski), styled with the site tokens: a calm
 * card that drops in from the top centre — above the phone action bar and
 * the cookie banner, where nothing covers it. Call `toast.success(...)` /
 * `toast.error(...)` from "sonner" anywhere on the client.
 */
export function Toasts() {
  return (
    <Toaster
      position="top-center"
      offset={{ top: "calc(var(--header-h) + 0.75rem)" }}
      mobileOffset={{ top: "calc(var(--header-h) + 0.5rem)", left: "0.75rem", right: "0.75rem" }}
      toastOptions={{
        classNames: {
          toast:
            "!rounded-[var(--radius)] !border !border-line !bg-surface !text-ink !shadow-[var(--shadow-float)] !font-body !text-base !gap-3 !px-5 !py-4",
          title: "!text-[1.02rem] !font-semibold",
          description: "!text-ink-soft !text-[0.95rem]",
          success: "[&_[data-icon]]:!text-success",
          error: "[&_[data-icon]]:!text-danger",
        },
      }}
    />
  );
}
