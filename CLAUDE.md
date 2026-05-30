# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing landing site for **АМИГО ПЛЮС** — sun-protection systems (blinds, roller shades, pleated shades, electric drives) and metal furniture in Новополоцк/Полоцк, Belarus. Russian-language, SEO-focused, single-page-per-product React SPA. Originated from Google AI Studio (`https://ai.studio/apps/2cd720a7-8acd-401a-be10-9d52fa824515`).

## Commands

```bash
npm install        # install deps
npm run dev        # dev: tsx server.ts → Express + Vite middleware on :3000 (NOT vite dev)
npm run build      # vite build (→ dist/) + esbuild bundles server.ts → dist/server.cjs
npm run start      # production: NODE_ENV=production node dist/server.cjs
npm run lint       # tsc --noEmit (typecheck only; no ESLint, no test suite)
npm run clean      # rm -rf dist
```

There are **no tests** and no linter beyond `tsc --noEmit`.

## Architecture

**Routing & pages.** `src/App.tsx` defines all routes via `react-router-dom` (`BrowserRouter`). Each product route renders a page in `src/pages/` (`HomePage`, `ElectroPage`, `RollerPage`, `BlindsPage`, `PleatsPage`, `MetalPage`, `NotFoundPage`). Product pages are thin wrappers around `src/components/ProductLayout.tsx`, which supplies the shared hero, SEO/breadcrumb schema, contact CTA, header, and footer — to add a product page, render `<ProductLayout title subtitle image badge seoDescription>` with page-specific children. `ScrollHandler` in `App.tsx` manages manual scroll restoration and smooth-scroll to hash anchors (e.g. `#consult`).

**Two server entry points share one origin.** `server.ts` is an Express app: in dev it mounts Vite as middleware (`appType: "spa"`); in prod it serves `dist/` static + SPA fallback to `dist/index.html`. It also exposes a POST contact endpoint at **both** `/api/contact` and `/contact.php`, rate-limited to 20 req/15 min per IP, forwarding submissions to Telegram via `TELEGRAM_BOT_TOKEN` / `TELEGRAM_CHAT_ID`.

**The PHP fallback is the real production path.** `public/contact.php` is a standalone PHP reimplementation of the same Telegram-forwarding endpoint. `ContactForm.tsx` POSTs to `/contact.php` (not `/api/contact`). This site is deployed to PHP shared hosting (e.g. activecloud.by), where `contact.php` handles submissions and `server.ts`/Express is **not** run. The bot token + chat ID for production live hardcoded (currently empty) in `public/contact.php` — fill `$botToken`/`$chatId` there before deploy. The Express endpoint exists mainly for local dev.

**Images.** Product images live in `/images/` at the repo **root** (not in `public/`), and are referenced by absolute paths like `/images/blind.png`. They are not part of Vite's `public/` dir, so they must be present at the deployed site root. `public/` only holds `contact.php`, `favicon.svg`, `robots.txt`, `sitemap.xml`.

**Styling.** Tailwind v4 via `@tailwindcss/vite` (no `tailwind.config.js`). The brand theme is defined entirely in `src/index.css` `@theme` tokens — `brand-primary` (terracotta `#C05640`), `brand-secondary`, `brand-surface`, `brand-header`, `brand-text`, plus `font-display` (Montserrat) / `font-sans` (Inter). Custom utilities (`.cta-gradient`, `.terracotta-soft`, `.glass`) are in the same file. Animations use `motion/react`. Use these tokens/utilities rather than raw hex values.

**SEO.** `src/components/SEO.tsx` (via `react-helmet-async`, provider wired in `main.tsx`) renders title/meta/OG/Twitter/JSON-LD per page. The canonical domain is hardcoded as `https://amigoplus.by` in `SEO.tsx` and `ProductLayout.tsx` — update both if the domain changes.

## Environment

`.env` (gitignored; see `.env.example`): `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID` drive the Express dev contact endpoint. `GEMINI_API_KEY` / `APP_URL` are AI-Studio scaffolding leftovers and not currently used by app code. Production Telegram credentials go in `public/contact.php`, not `.env`.
