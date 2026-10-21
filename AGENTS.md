# Emmanuel CliniX — build conventions (read before touching code)

Next.js 16 App Router + React 19 + Tailwind v4 + TypeScript. No other UI libraries.

## The brief (owner)
- Style: like Acquisition.com (Hormozi) — simple, clear, short, to the point, easy to follow. Big confident headlines, lots of white space, ONE obvious next step per section.
- Premium, NOT Gen-Z. Audience is 40–50+: large text (18px base), high contrast, big buttons, plain words, no gimmicks, no emoji, no slang.
- Approved Romanian copy from the old build must stay **word for word**. Only the design changes. Do not "improve" approved text.
- Two languages, one codebase (see i18n below). Every page must exist in RO and EN.
- Every form sends its lead to GoHighLevel via `/api/lead` (webhook → email sequences/follow-up in GHL).

## Source of the approved content (read-only)
`/tmp/claude-1000/-home-cristi-Desktop-new-website-emmanuel-clinix/6e097c39-234a-4faa-80e0-4a740c7e07d8/scratchpad/quizes/`
(the previous build). Copy TEXT from there; do NOT copy its design, CSS or markup structure.

## i18n — `lib/i18n.ts`, `proxy.ts`
- Pages live in `app/[locale]/(site)/…` (full menu + footer) or `app/[locale]/(funnel)/…` (minimal header, for LPs and quizzes). Folder names = ROMANIAN segments (`chestionare`, `lp/somn`, `despre-noi`).
- English URLs are translated automatically (segment map in `lib/i18n.ts`). If you add a new route segment, add its English twin to `RO_TO_EN`.
- Every page: `export function generateStaticParams()` is inherited from the locale layout; read `const { locale } = await params` (type it with `Locale`). Use `generateMetadata` with `alternates: alternatesFor("/internal/path", locale)`.
- Links: ALWAYS `<L href="/internal/ro/path">` (components/ui/L.tsx) or `ButtonLink`. Never hard-code `/en/` or English slugs. `router.push(localizePath(path, locale))` in client code.
- Interface strings: `getDictionary(locale)` (server) / `useLocale().dict` (client) from `content/i18n/{ro,en}.ts`. Add keys to BOTH files if needed.
- Page copy: typed content files per locale, e.g. `content/pages/ro/home.ts` + `content/pages/en/home.ts` sharing one exported interface. Pages pick by locale. Never put user-facing text inline in components unless it is truly language-neutral.
- English copy: natural British English, same tone (short, direct, warm, no hype). Prices stay in lei → write "1,200 RON" in English. Clinic stays in Bucharest. Phone/email unchanged.
- Shared media (videos/images) ONLY in `content/media.ts` — one entry serves both languages.

## Design system — `app/globals.css`, `components/ui/primitives.tsx`
- Five switchable themes (ivory, mono, petrol, forest, midnight) via CSS variables. Use ONLY token classes: `bg-bg`, `bg-bg-alt`, `bg-surface`, `bg-dark`, `text-ink`, `text-ink-soft`, `text-on-dark`, `text-on-dark-soft`, `border-line`, `bg-primary`/`text-on-primary`, `text-accent`/`bg-accent`/`text-on-accent`, `bg-cta`/`text-on-cta`, `text-danger`, `text-success`, `font-display`, `rounded-[var(--radius)]`. NEVER raw hex colours or `text-white`/`bg-black` etc. (midnight theme is dark — test mentally that it still reads).
- Building blocks: `Section` (tone default|alt|surface|dark), `Container`, `SectionHead`, `Eyebrow`, `ButtonLink`/`buttonClass()`, `CheckItem`, `Faq`, `Card`, `Reveal`, `VideoPlayer` (`components/ui/VideoPlayer.tsx`), `Logo`.
- Forms: `components/forms/fields.tsx` (TextField, TextArea, SelectField, ChoiceGroup, ConsentCheckbox, Honeypot, SubmitError) + `submitLead()` from `lib/lead.ts`. Validate phone/email with `lib/contact-validation.ts` (`isPlausiblePhone(v, locale)`, `isPlausibleEmail(v, locale)`), error strings from `dict.form`. Consent checkbox is mandatory on every form.
- Headline sizes: H1 `text-[2.6rem] sm:text-6xl lg:text-7xl`, H2 via `SectionHead`. Body text ≥ 1rem (18px), lead text `text-lg sm:text-xl`. Mobile first; must look right at 375px.
- Dark sections (`tone="dark"`) for emphasis/CTA bands; alternate default/alt for rhythm. Generous spacing (Section already has py-20/28).
- Accessibility: semantic headings in order, labels on inputs, `aria-*` where needed, focus visible.

## Leads → GoHighLevel
`submitLead({ group, form, locale, name, phone, email?, fields, consent: true, website })`
- group: `quiz` (tests) · `brainmap` (/brainmap + /lp/*) · `emsella` · `contact`.
- form: kebab id, becomes a GHL tag — `test-<slug>`, `lp-<slug>`, `brainmap-general`, `lp-somn`, `lp-somn-b`, `emsella`, `contact`.
- fields: keep the OLD field keys from the previous build (e.g. `sursa`, `test`, `scor`, `nivel`, `urgenta`, `i5_urgenta`, `riscuri`, `situatie`, `durata`, `incercat`, `ab_variant` …) so the existing GHL mapping keeps working. Values may be in the visitor's language.

## Verification rules for agents
- Do NOT run `next build` or `next dev` (other agents work in parallel; the lead runs the build). Check your work with `npx tsc --noEmit 2>&1 | grep <your paths>` and `npx eslint <your files>`.
- Only edit files you own. If you need a change in a shared file (primitives, i18n, dictionaries), keep it additive and minimal.
