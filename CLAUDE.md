@AGENTS.md
# Cova Systems — Company Website
## covasystems.com

---

## Project Overview

Company website for Cova Systems, a web development and automation agency serving small local businesses across Canada. This is a single-page marketing site built to convert local business owners into leads via a free demo offer.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui |
| Animation | GSAP + ScrollTrigger, Framer Motion, Lenis (installed, not yet active) |
| Icons | Lucide React |
| Deployment | Vercel |

---

## Project Structure
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # All sections assembled here
│   ├── globals.css         # @theme tokens and base resets only
│   └── api/contact/        # Contact form handler (future)
├── components/
│   ├── blocks/             # Full-width page sections
│   │   ├── nav.tsx
│   │   ├── hero.tsx
│   │   ├── services-overview.tsx
│   │   ├── web-dev-section.tsx
│   │   ├── gbp-callout.tsx
│   │   ├── automation-section.tsx
│   │   ├── how-it-works.tsx
│   │   ├── why-cova.tsx
│   │   ├── testimonials.tsx
│   │   ├── pricing.tsx
│   │   ├── faq.tsx
│   │   ├── final-cta.tsx
│   │   └── footer.tsx
│   └── ui/                 # Reusable primitives
└── lib/
└── utils.ts            # cn() utility

---

## Coding Conventions

- **TypeScript strictly** — no `any`, explicit prop interfaces for every component
- **Tailwind utilities only** — all styling via inline Tailwind classes on JSX elements. No CSS Modules, no styled-components, no `<style>` blocks anywhere
- **globals.css is sacred** — only `@theme {}` tokens and base resets live here. Never add component styles. Never overwrite existing rules — append only
- **No inline `style={{}}` props** except for dynamic runtime values (GSAP targets, dynamic widths/positions)
- **RSC by default** — every component is a React Server Component unless it requires hooks or browser APIs, in which case add `"use client"` at the top
- **Named exports only** — `export function ComponentName()`, never default exports
- **File naming** — kebab-case files, PascalCase component names
- **Class merging** — always use `cn()` from `src/lib/utils.ts` for conditional classes
- **Mobile-first** — default styles target 375px, scale up with `sm:` `md:` `lg:` `xl:`

---

## Brand & Styling System

**Tailwind v4 — important differences from v3:**
- Design tokens go in `@theme {}` in `globals.css` — NOT in `:root {}`
- Component styles go in `@layer components` — NOT in `@layer base`
- Never put component styles in `globals.css` — they belong in the component file as Tailwind utilities

**Brand Colors:**
- Primary blue: `#054bec`
- Blue gradient: `#0066FF → #0551ef → #054bec`
- White: `#ffffff`
- Light grey (section alternate): `#f7f7f7`
- Text primary: `#111111`
- Text secondary: `#6b7280`
- Border: `#e5e7eb`
- Blue tint: `#eff4ff`

**Typography:**
- Font family: Inter (variable font)
- Headings: Inter bold / extrabold
- Body: Inter regular / medium
- All type scales via Tailwind — no hardcoded font sizes

**Brand Voice (for any copy additions or edits):**
- Professional but warm
- Plain language — no jargon
- Speak directly to a local business owner
- Confident without being corporate

**Section Layout Pattern:**
- Sections alternate white and light grey `#f7f7f7` backgrounds
- Never two same-colored sections adjacent
- Spacing is generous — this site breathes

---

## Animation Plan (not yet implemented)

Animations are installed but inactive in the current build. They will be added section by section after the base layout is complete and verified.

Planned animations per section:
- **Hero** — entrance fade + stagger on load (Framer Motion)
- **Web Dev** — GSAP sticky scroll, right-side content blocks rise and stack as user scrolls
- **Automation** — hover-expand cards (CSS transition or Framer Motion)
- **How It Works** — entrance fade on scroll (Framer Motion)
- **FAQ** — accordion open/close (Framer Motion AnimatePresence)
- **General** — Lenis smooth scroll active globally

**GSAP rule:** always use `gsap.set()` for initial hidden states — never use CSS or Tailwind opacity/transform classes to hide elements that GSAP will animate. This prevents conflicts.

---

## Section Status

| Section | Status | Notes |
|---|---|---|
| Nav | ⏳ Pending | |
| Hero | ⏳ Pending | Demo cards are a mapped `demos` array — swap `src` per card |
| Services Overview | ⏳ Pending | |
| Web Dev | ⏳ Pending | Sticky scroll animation pending |
| GBP Callout | ⏳ Pending | |
| Automation | ⏳ Pending | Hover-expand animation pending |
| How It Works | ⏳ Pending | |
| Why Cova | ⏳ Pending | |
| Testimonials | ⏳ Pending | Conditionally rendered — hidden until content added |
| Pricing | ⏳ Pending | Tabbed layout |
| FAQ | ⏳ Pending | Accordion |
| Final CTA | ⏳ Pending | |
| Footer | ⏳ Pending | |

---

## Key Assets

| File | Location | Notes |
|---|---|---|
| Logo (color) | `/public/logo.png` | Blue C mark + wordmark |
| Logo (white) | `/public/logo-white.png` | For dark footer |
| Hero demo screenshots | `/public/images/demos/` | 3 placeholder images, swappable |

---

## Contact

**Email:** tyler@covasolutions.com
**Copyright:** © 2026 Cova Systems