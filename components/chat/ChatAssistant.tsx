"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { L } from "@/components/ui/L";
import { buttonClass } from "@/components/ui/primitives";
import { LogoMark } from "@/components/layout/Logo";
import { useLocale } from "@/components/layout/LocaleProvider";
import { ConsentCheckbox, Honeypot, SubmitError, TextField } from "@/components/forms/fields";
import { submitLead } from "@/lib/lead";
import { isPlausiblePhone } from "@/lib/contact-validation";
import { CLINIC } from "@/lib/site";

/** Must match CONTACT_FORM_MARKER in lib/chat/knowledge.ts (server-only, so not imported here). */
const FORM_MARKER = "[[CONTACT_FORM]]";
const ERROR_SENTINEL = "\u0000ERROR";

type Msg = { role: "user" | "assistant"; content: string };

/**
 * Floating AI assistant (bottom-right) — the site's ONE floating button; call
 * and WhatsApp sit at the top of its panel. Streams answers from /api/chat. When
 * the assistant decides the visitor wants a call-back it writes a marker, and
 * this widget shows a short lead form (name, phone, consent) that goes to
 * GoHighLevel like every other form.
 */
export function ChatAssistant() {
  const { dict, locale } = useLocale();
  const t = dict.chat;
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [failed, setFailed] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, open]);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  async function send(text: string) {
    const question = text.trim();
    if (!question || busy) return;
    const history: Msg[] = [...messages, { role: "user", content: question.slice(0, 1500) }];
    setMessages([...history, { role: "assistant", content: "" }]);
    setInput("");
    setBusy(true);
    setFailed(false);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // The form marker is UI-only; send the assistant's words without it.
        body: JSON.stringify({
          locale,
          messages: history.slice(-30).map((m) => ({ ...m, content: m.content.replace(FORM_MARKER, "").trim() || "…" })),
        }),
      });
      if (!res.ok || !res.body) throw new Error(String(res.status));

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let answer = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        answer += decoder.decode(value, { stream: true });
        if (answer.includes(ERROR_SENTINEL)) throw new Error("stream");
        setMessages([...history, { role: "assistant", content: answer }]);
      }
      if (!answer.trim()) throw new Error("empty");
    } catch {
      setFailed(true);
      setMessages(history);
    } finally {
      setBusy(false);
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    void send(input);
  }

  const transcript = messages
    .map((m) => `${m.role === "user" ? "Vizitator" : "Asistent"}: ${m.content.replace(FORM_MARKER, "").trim()}`)
    .join("\n")
    .slice(-1800);

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={t.open}
          className="fixed bottom-4 right-4 z-[56] flex h-14 items-center gap-2.5 rounded-full bg-primary pl-4 pr-4 text-on-primary shadow-[0_14px_30px_-12px_rgb(18_38_39_/_0.6)] transition hover:-translate-y-0.5 sm:pr-6 print:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 4v-4h0A1.5 1.5 0 0 1 4 14.5v-9Z"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinejoin="round"
            />
            <path d="M8.5 9.5h7M8.5 12.5h4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
          <span className="hidden font-semibold sm:inline">{t.launcher}</span>
        </button>
      )}

      {open && (
        <section
          role="dialog"
          aria-label={t.title}
          className="fixed inset-x-2 bottom-2 top-[calc(var(--header-h)+0.5rem)] z-[80] flex flex-col overflow-hidden rounded-[var(--radius)] border border-line bg-surface text-ink shadow-[var(--shadow-soft)] sm:inset-x-auto sm:right-4 sm:bottom-4 sm:top-auto sm:h-[min(40rem,calc(100svh-7rem))] sm:w-[26rem]"
        >
          <header data-tone="dark" className="bg-dark flex items-center gap-3 px-5 py-4 text-on-dark">
            <LogoMark size={30} className="flex-none" />
            <div className="min-w-0 flex-1">
              <p className="font-display text-xl leading-tight">{t.title}</p>
              <p className="text-sm text-on-dark-soft">{t.subtitle}</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t.close}
              className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-on-dark/25 text-lg transition hover:bg-on-dark/10"
            >
              ✕
            </button>
          </header>

          <div className="grid grid-cols-2 gap-2 border-b border-line bg-surface p-3">
            <a href={CLINIC.phoneHref} className={buttonClass("outline", "md", "!min-h-11 !px-3 text-primary")}>
              {dict.common.callUs}
            </a>
            <a href={CLINIC.whatsappHref} target="_blank" rel="noopener noreferrer" className={buttonClass("outline", "md", "!min-h-11 !px-3 text-primary")}>
              WhatsApp
            </a>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto bg-bg-alt px-4 py-5" aria-live="polite">
            <Bubble role="assistant">{t.greeting}</Bubble>

            {messages.length === 0 && (
              <div className="flex flex-wrap gap-2">
                {t.suggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => void send(s)}
                    className="rounded-full border border-primary/30 bg-surface px-4 py-2 text-[0.95rem] font-medium text-primary transition hover:border-primary"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {messages.map((m, i) => {
              const showForm = m.role === "assistant" && m.content.includes(FORM_MARKER);
              const text = m.content.replace(FORM_MARKER, "").trim();
              return (
                <div key={i} className="space-y-3">
                  {text ? <Bubble role={m.role}>{m.role === "assistant" ? <Rich text={text} /> : text}</Bubble> : busy && i === messages.length - 1 ? <Bubble role="assistant"><span className="text-ink-soft">{t.thinking}</span></Bubble> : null}
                  {showForm && !(busy && i === messages.length - 1) && <CallbackForm transcript={transcript} />}
                </div>
              );
            })}

            {failed && (
              <Bubble role="assistant">
                {t.error}{" "}
                <a href={CLINIC.phoneHref} className="font-semibold text-primary underline">
                  {CLINIC.phone}
                </a>{" "}
                ·{" "}
                <a href={CLINIC.whatsappHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline">
                  WhatsApp
                </a>
              </Bubble>
            )}
          </div>

          <form onSubmit={onSubmit} className="border-t border-line bg-surface p-3">
            <div className="flex items-end gap-2">
              <label htmlFor="chat-input" className="sr-only">
                {t.placeholder}
              </label>
              <textarea
                ref={inputRef}
                id="chat-input"
                rows={1}
                value={input}
                maxLength={1500}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    void send(input);
                  }
                }}
                placeholder={t.placeholder}
                className="max-h-32 min-h-12 flex-1 resize-none rounded-[calc(var(--radius)/1.5)] border-2 border-line bg-surface px-4 py-2.5 text-base text-ink placeholder:text-ink-soft/70 focus:border-accent focus:outline-none"
              />
              <button type="submit" disabled={busy || !input.trim()} aria-label={t.send} className={buttonClass("cta", "md", "!min-h-12 !w-12 !px-0")}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M2 9h13M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <p className="mt-2 px-1 text-xs text-ink-soft">{t.disclaimer}</p>
          </form>
        </section>
      )}
    </>
  );
}

function Bubble({ role, children }: { role: Msg["role"]; children: ReactNode }) {
  return (
    <div className={`flex ${role === "user" ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[88%] whitespace-pre-line rounded-[calc(var(--radius)/1.4)] px-4 py-3 text-base leading-relaxed ${
          role === "user" ? "rounded-br-md bg-primary text-on-primary" : "rounded-bl-md bg-surface text-ink shadow-[var(--shadow-card)]"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

/** Tiny Markdown subset the assistant uses: **bold**, internal [links](/path) and "- " list lines. */
function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split("\n").map((line, i) => {
        const item = /^\s*[-*•]\s+/.test(line);
        const content = inline(line.replace(/^\s*[-*•]\s+/, ""), i);
        return item ? (
          <span key={i} className="flex gap-2">
            <span aria-hidden="true" className="text-accent">•</span>
            <span>{content}</span>
            {"\n"}
          </span>
        ) : (
          <span key={i}>
            {content}
            {"\n"}
          </span>
        );
      })}
    </>
  );
}

function inline(line: string, key: number): ReactNode[] {
  const parts: ReactNode[] = [];
  const re = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(line))) {
    if (m.index > last) parts.push(line.slice(last, m.index));
    if (m[1]) {
      parts.push(<strong key={`${key}-${m.index}`}>{m[1]}</strong>);
    } else if (m[3].startsWith("/") && !m[3].startsWith("//")) {
      parts.push(
        <L key={`${key}-${m.index}`} href={m[3]} className="font-semibold text-primary underline underline-offset-2">
          {m[2]}
        </L>,
      );
    } else {
      // External links are not allowed: keep the text only.
      parts.push(m[2]);
    }
    last = m.index + m[0].length;
  }
  if (last < line.length) parts.push(line.slice(last));
  return parts;
}

/** Call-back request shown inside the chat. Same consent + validation as every other form. */
function CallbackForm({ transcript }: { transcript: string }) {
  const { dict, locale } = useLocale();
  const t = dict.chat;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string; consent?: string }>({});
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next = {
      name: name.trim().length < 2 ? dict.form.invalidName : undefined,
      phone: !isPlausiblePhone(phone, locale) ? dict.form.invalidPhone : undefined,
      consent: !consent ? dict.form.consentRequired : undefined,
    };
    setErrors(next);
    if (next.name || next.phone || next.consent) return;
    setState("sending");
    const ok = await submitLead({
      group: "contact",
      form: "chatbot",
      locale,
      name: name.trim(),
      phone: phone.trim(),
      fields: { sursa: "chatbot", conversatie: transcript },
      consent: true,
      website,
    });
    setState(ok ? "sent" : "error");
  }

  if (state === "sent") {
    return (
      <div className="rounded-[calc(var(--radius)/1.4)] border border-success/30 bg-surface p-5">
        <p className="font-display text-xl text-success">{t.sentTitle}</p>
        <p className="mt-1 text-ink-soft">
          {t.sentText}{" "}
          <a href={CLINIC.phoneHref} className="font-semibold text-ink underline">
            {CLINIC.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative space-y-4 rounded-[calc(var(--radius)/1.4)] border-t-4 border-primary bg-surface p-5 shadow-[var(--shadow-card)]">
      <div>
        <p className="font-display text-2xl leading-tight">{t.formTitle}</p>
        <p className="mt-1 text-[0.95rem] text-ink-soft">{t.formText}</p>
      </div>
      <TextField id="chat-name" label={dict.form.name} placeholder={dict.form.namePlaceholder} autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} error={errors.name} />
      <TextField
        id="chat-phone"
        label={dict.form.phone}
        placeholder={dict.form.phonePlaceholder}
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        error={errors.phone}
      />
      <ConsentCheckbox checked={consent} onChange={setConsent} error={errors.consent} />
      <Honeypot value={website} onChange={setWebsite} />
      <SubmitError show={state === "error"} />
      <button type="submit" disabled={state === "sending"} className={buttonClass("cta", "md", "w-full")}>
        {state === "sending" ? dict.form.sending : t.submit}
      </button>
    </form>
  );
}
