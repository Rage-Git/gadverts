# G Adverts — Website (project SSOT)

Source-of-truth for this repo. Keep it current. Global rules live in
`~/.claude/CLAUDE.md` (Amr's operating rules) — this file never contradicts them.

## What this is
Marketing / brochure website **for the client G Adverts**, a MENA social-media &
digital advertising agency (founded 2022). This is a **client deliverable**, built
design-forward — the site itself is a portfolio piece. It is NOT Felukaa Ops and
NOT the felukaa marketing site.

- Location: `C:\dev\gadverts\`
- Deploy domain: **gadverts.com** (client already purchased it)
- Source brief: `G Adverts Company Profile - May 26.pdf` (in repo root)

## Stack (mirrors felukaa's proven setup)
- Next.js **14.2.35** (App Router) + TypeScript + Tailwind **3.4.15**
- `framer-motion` ^11, `lucide-react` for icons
- Fonts via `next/font/google` (PLACEHOLDER: Space Grotesk + Inter)
- No backend yet — fully static. Contact is a placeholder (Amr's call).

## Architecture decisions
- **English-first, i18n-ready.** `lang`/`dir` centralized in `app/layout.tsx`;
  copy lives in `content/`; use logical CSS (no hard-coded left/right). Arabic/RTL
  can be added later without a rewrite. (felukaa already runs `/ar`.)
- **Color is one file.** All brand color = CSS variables in `app/globals.css`
  `:root`, mapped in `tailwind.config.ts`. Palette is derived from the real logos:
  **warm monochrome** — near-black charcoal (`#141310`/`#2B2924`) + cream paper
  (`#E9E5DC`). **No chromatic accent**; contrast IS the pop. Retune in one file.
- **Logo / identity.** Heavy rounded lowercase grotesque wordmark `-g adverts.`
  (leading dash, trailing period, `EST22` lozenge). `-g.` is the standalone mark.
  Assets in `public/brand/`: `wordmark-black.png`, `wordmark-cream-on-charcoal.png`,
  `mark.png`. **Need vector (SVG) versions** + the exact wordmark font name (looks
  like a Fontshare/commercial rounded grotesque, e.g. General Sans / Clash) — UI
  display font is currently a Google placeholder (Space Grotesk).
- **Data-driven content.** All profile facts live in typed files under `content/`
  (`site`, `services`, `clients`, `work`) — pages render from data, not hard-coded copy.

## Layout
```
app/            App Router (layout, globals, page = holding page for now)
content/        Typed site data lifted from the company profile (SSOT for copy)
components/     UI components (empty until structure review approved)
brand/          Drop zone for logo/colors/fonts (see brand/README.md)
public/         Shipping images: /clients, /work
```

## Status — 2026-06-03
- ✅ Scaffold + design-system layer + typed content. Holding page only.
- ⛔ No real UI yet — **stop-for-review gate** per Amr before building pages.
- Planned pages (default agency IA): Home / Work / Services / About / Contact.

## Blocking inputs needed from client/Amr
1. Logo (vector) + real brand colors/fonts → swaps placeholders.
2. Portfolio visuals (campaign stills, social showcase, client logos) → `/public/work`, `/public/clients`.
3. Confirm English-only vs bilingual (Arabic/RTL) — affects nothing built yet, decide before launch.
4. Which "X Assembly" client logos are contractually OK to display.

## Commands
- `npm run dev` — local dev
- `npm run build` — production build (use to verify scaffold compiles)

## Rules specific to this repo
- Verify before acting; deliver complete files; Windows CMD for shell commands.
- Stop and show structure before building real UI.
- Confirm displayable client logos before publishing the Work page (white-label/NDA risk).
