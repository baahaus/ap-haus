# ap.haus — AP.haus studio site

## Purpose
Client-facing site for AP.haus, Brandon's AI consulting + web studio. The job
of this site is to land paying clients: contractors and local service
businesses in Pittsburgh and the Alle-Kiski Valley. It is NOT a research-lab
site anymore — Flock/Wren/research content lives under /lab/ as credibility,
not identity.

## Hard content rules (Brandon, 2026-07-06 — do not violate)
- **AP.haus is Brandon AND Cam's company.** Studio voice is "we", never
  solo-Brandon. Who/About: Brandon = design/build/copy/client side,
  Cam = engineering, friends since first grade.
- **Never use Brandon's Graciano day job as public credibility.** No "I write
  bids at a contractor," no employer-based trust lines, anywhere. The
  graciano-redesign demo may appear as ONE portfolio item ("concept rebuild"),
  never as the hero/main thing.
- **Only finished work on the site.** DeSanto's stays OFF until it's actually
  live for the business. attirergrandeur.com is in (live, studio-run).

## Settled decisions (July 2026 redesign)
- **Positioning**: "Websites and office automation for contractors and local
  businesses. Pittsburgh." Trades-first, automation as upsell for existing
  clients only. Municipal work: parked.
- **Pricing on the site**: flat fees, shown openly, anchored low to fill the
  pipeline — Site Rebuild from $1,500, Site + Booking from $4,500, Care Plan
  $150/mo, Office Automation from $500/mo (existing clients). Never hourly.
- **Lead magnet**: free homepage rebuild ("the teardown") — standing offer on
  every page, CTA "GET A FREE MOCKUP".
- **Design concept (v4, built from Brandon's references studied LIVE — v3's
  mistake was building from descriptions without visiting the sites)**:
  - CTHDRL (cthdrl.co) = the base: scrolling ticker tagline top, mono column
    nav, em-dash uppercase display headline, mono metadata columns, thin
    circle line-work + center hairline, grain overlay, section counters.
  - Century (century.studio) = the hero: AP.HAUS logotype at billboard scale
    smashed over the before/after image panel, "Now presenting" eyebrow.
  - Exo Ape (exoape.com) = work bands: full-bleed images with giant white
    titles cropped by the image's bottom edge, description + meta below.
  Executed LIGHT (hard rule, confirmed even though the refs are dark),
  monochrome ink-on-cream, one oxide-red accent. v1 (safe serif template),
  v2 (estimate cosplay), v3 (generic tasteful editorial) all rejected —
  do not resurrect any of them.
- **Type**: Archivo variable 400–700 (uppercase display, billboard wordmark),
  Instrument Sans (body), IBM Plex Mono (metadata/labels), Silkscreen
  (small nav/footer wordmark only).
- **Hero**: draggable before/after slider with REAL screenshots of
  graciano.com vs the rebuild demo. Never fictional mock sites.
- **Case studies**: only real, verifiable claims. Graciano may be named as
  employer + demo subject. DeSanto's is "launching soon"/"in build" until the
  real site is live. No invented testimonials or metrics, ever.

## Structure
- New pages: `/` `/work/` `/services/` `/about/` `/contact/` `/lab/` — share
  `site.css` + `site.js`.
- Legacy pages: `/research/` `/products/` `/posts/` — still use old
  `style.css` + `main.js`. Do not delete; they're linked from /lab/.
- Screenshots: `assets/work/*.jpeg` (1280×800, captured via Playwright; retake
  after target sites' animations settle — scroll down/up, wait, shoot).

## Build & deploy
- No build step. Static files, GitHub Pages, CNAME `ap.haus`.
- Remote: github.com/Divagation/ap-haus (still on the old Divagation org —
  works, but repos are supposed to live under baahaus; migrate deliberately,
  not casually, since Pages + CNAME are tied to it).
- Preview: `preview_start ap-haus` (python http.server :4180, config in
  ~/.claude/launch.json).

## Open items
- `hello@ap.haus` must exist (Porkbun email forwarding) BEFORE deploying —
  it's the contact-form target AND now shown as plain text on /contact/.
  Verify with a round-trip test email.
- Testimonials to collect: Carol (S&C), DeSanto's owner, Glenn/Carol on the
  Graciano demo. Slots not yet in the design — add when real quotes exist.
- Photo of Brandon for the about badge (currently a pixel "BA" mark).
- Consider a real form backend (Formspree/own endpoint) later; today the form
  builds a mailto and the visible email is the fallback.
- Heading order h1→h3 on index/services/lab (minor a11y, deliberate skip).
