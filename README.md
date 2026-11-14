# Emmanuel CliniX — website

One Next.js codebase serving two domains and two languages:

| Domain | Default language |
| --- | --- |
| `emmanuelclinix.ro` | Română |
| `emmanuelclinix.co.uk` | English |

Visitors can switch language at any time (RO/EN button in the header). The
choice is remembered in a cookie. Text is edited per language; videos and
images live in **one** place (`content/media.ts`) and appear on both sites.

## Run locally

```bash
npm ci
cp .env.example .env.local
npm run dev            # http://localhost:3000  (add ?lang=en for English)
npm run build && npm start
```

## Design options (owner choice)

Five directions are built in. Open any page with `?theme=<id>`, or use the
"Alege designul" button (bottom-left):

| id | Name | Preview |
| --- | --- | --- |
| `ivory` | Ink & Ivory — navy + gold, serif | `docs/design/theme-ivory.png` |
| `mono` | Mono — Acquisition.com style, black/white | `docs/design/theme-mono.png` |
| `petrol` | Petrol & Copper — evolved logo colours | `docs/design/theme-petrol.png` |
| `forest` | Forest & Brass — green + brass, editorial | `docs/design/theme-forest.png` |
| `midnight` | Midnight — dark premium | `docs/design/theme-midnight.png` |

When the owner picks one: set `NEXT_PUBLIC_DEFAULT_THEME=<id>` and
`NEXT_PUBLIC_DESIGN_PREVIEW=0` (hides the picker).

## Site map

Main site (menu: Cum funcționează · Despre noi · Tarife · Echipă)

| RO | EN | |
| --- | --- | --- |
| `/` | `/` | Home: 1) BrainMap button 2) quick diagnostic 3) free tests 4) FAQ 5) about & recommendations |
| `/brainmap` | `/brainmap` | General BrainMap VSL page + form |
| `/evaluare` | `/assessment` | Quick diagnostic → right test |
| `/chestionare` | `/tests` | All 9 tests |
| `/chestionare/<slug>` | `/tests/<slug>` | Test → result → matching LP |
| `/cum-functioneaza` | `/how-it-works` | Services & equipment videos |
| `/despre-noi` | `/about` | |
| `/tarife` | `/pricing` | |
| `/echipa` | `/team` | |
| `/contact` | `/contact` | Call-back form |

Landing pages (minimal header): `/lp/{anxietate,panica,burnout,focus,dispozitie,migrene,stres,adictii}`,
`/lp/somn` (+`/multumim`), `/lp/somn-b` (+`/aplicatie`, `/multumim`), `/lp/emsella`.
English uses translated slugs (e.g. `/lp/stress`, `/lp/sleep-b/application`).

Test → LP links: anxietate→/lp/anxietate · panica→/lp/panica · somn→/lp/somn ·
burnout→/lp/burnout · focus→/lp/focus · dispozitie→/lp/dispozitie ·
migrene→/lp/migrene · stres→/lp/stres · adictii→/lp/adictii.

## Leads → GoHighLevel

Every form posts to `/api/lead`, which validates, filters spam and forwards the
lead server-side to a GHL inbound webhook (`GHL_WEBHOOK_URL`, optionally one per
group — see `.env.example`). Without a webhook the site runs in demo mode
(leads are logged, not sent).

Payload highlights: `form` (e.g. `test-somn`, `lp-stres`, `brainmap-general`,
`lp-somn`, `lp-somn-b`, `emsella`, `contact`), `grup`, `limba` (ro/en),
`domeniu`, `tags`, plus the same custom fields as the previous build
(`sursa`, `test`, `scor`, `nivel`, `i5_urgenta`, `urgenta`, `riscuri`, `situatie`,
`durata`, `incercat`, `ab_variant`, …). In GHL: one workflow per webhook →
tag → email/SMS nurture sequence → follow-up task.

## Where to edit

- Interface text: `content/i18n/{ro,en}.ts`
- Pages: `content/pages/{ro,en}/*.ts`
- Tests: `content/quizzes/{ro,en}/*.ts` (RO = approved, verbatim)
- BrainMap LPs: `content/lps/{ro,en}/*.ts` + `content/lps/fixed/*`
- Other LPs: `content/lp-somn`, `content/lp-somn-b`, `content/lp-emsella`
- Videos/images (both languages): `content/media.ts`
- Phone, email, address: `lib/site.ts`

## Before launch — needs the owner

- Pick the design (see above).
- Videos: BrainMap VSL, service videos, testimonials → `content/media.ts`.
- Team members (names, roles, bios, photos), clinic photos, "recommended by" names/logos.
- Prices: neurofeedback per session, standalone psychological consult.
- Opening hours (contact page); confirm the "we call you within 24h" promise.
- Approve the new copy: general `/brainmap` page, home, how-it-works, about, pricing, team.
- Legal: privacy policy + terms must be replaced with lawyer-reviewed text (pages are `noindex` until then).
- English crisis lines add UK numbers (999 / Samaritans 116 123) next to the Romanian ones — confirm.
- GHL webhooks + workflows/sequences; GA4 / Google Ads / Clarity IDs.
- DNS: point both domains to the same deployment (e.g. Vercel project with both domains).

## Control panel (`/admin`)

The clinic edits, without a deploy: every video on the site (each key in
`content/media.ts` — landing pages, service pages, how it works, about,
children, testimonials) and the testimonials (video or text) shown on the
service pages and on `/testimoniale`. A link set in `/admin` wins over the
default in `content/media.ts`; a new video key must also be described in
`lib/cms/slots.ts` (the build fails otherwise) so it shows up in the panel.

1. Vercel → project → **Storage** → **Upstash for Redis** → Create → Connect
   to this project with Custom Prefix `KV` (it adds `KV_REST_API_URL` +
   `KV_REST_API_TOKEN`).
2. Vercel → Settings → Environment Variables → `ADMIN_PASSWORD` (long).
3. Redeploy once. Open `https://emmanuelclinix.ro/admin`.

Locally, without Redis, `/admin` saves to `.data/cms.json`. Code: `lib/cms/`,
`app/admin/`, `components/admin/`.

## AI search (GEO / AEO)

`/llms.txt` (short index, `public/`) and `/llms-full.txt` (every service,
FAQ, condition and article in RO + EN, generated from `content/`), JSON-LD on
every page, AI crawlers allowed by name in `robots.txt`.
