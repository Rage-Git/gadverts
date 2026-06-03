# Brand assets — drop zone

Put G Adverts brand material here so I can wire it into the design system.

## What to add (and where it plugs in)

| File | What | Plugs into |
|------|------|-----------|
| `logo.svg` (+ `logo-light.svg` / `logo-dark.svg`) | Vector logo, ideally both color modes | Header / footer / favicon source |
| `brand-guide.pdf` | Colors (hex), fonts, spacing if it exists | `app/globals.css` `:root` tokens + `layout.tsx` fonts |
| `colors.txt` | Just the hex codes if no full guide | `app/globals.css` `:root` |
| `fonts/` | Licensed font files if not on Google Fonts | `app/layout.tsx` (next/font/local) |
| `_raw/` | Heavy raw drops (PSD, big exports) — git-ignored | reference only, not shipped |

## Shipping images
Public, optimized images that the site serves go in **`/public/`**, not here:
- `/public/clients/` — client logos (see `content/clients.ts`)
- `/public/work/` — portfolio stills, branding case studies, social showcase
- Source the heavy/raw versions in `brand/_raw/` if you want them tracked loosely.

## Current state (updated — real brand in)
Logos received. Palette in `app/globals.css` now reflects the **real brand**:
warm monochrome — charcoal `#141310`/`#2B2924` + cream `#E9E5DC`, **no color accent**.
Logos staged in `public/brand/` (wordmark-black, wordmark-cream-on-charcoal, mark).

### Still wanted
- **Vector logo (SVG/AI/PDF)** — current files are raster JPG/PNG; need clean
  transparent vector for crisp scaling + favicon.
- **Exact wordmark font name** — heavy rounded lowercase grotesque (looks like a
  Fontshare/commercial face: General Sans / Clash / similar). UI display font is a
  Google-Fonts placeholder (Space Grotesk) until confirmed.
