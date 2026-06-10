# Multilingual ecommerce upgrade — Herbolario Spa La Tejita

Adds a real shopping cart and a 4-language (ES/EN/DE/IT) i18n layer to the existing site without redesigning it.

## 1. Language architecture

**URL strategy**: language-prefixed routes for all four locales. No unprefixed content URLs.

```
/                  -> server-side 308 redirect (loader -> throw redirect) to /es
/es, /en, /de, /it -> localized home
/{lang}/tienda, /{lang}/tratamientos, /{lang}/sobre-nosotros,
/{lang}/blog, /{lang}/contacto, /{lang}/carrito, /{lang}/checkout
```

- `/` performs a **server-side redirect** in its loader to `/es` (neutral default; no IP geo, no Accept-Language sniffing).
- After the user picks a language from the switcher, the choice is persisted in:
  - `localStorage.tejita-lang`
  - cookie `tejita-lang` (1 year, `SameSite=Lax`) so future visits to `/` can be redirected client-side to the persisted locale via a tiny effect on the `/` route (the server redirect to `/es` remains the SEO-safe default; the client-side hop only fires when the cookie disagrees).
- Slugs stay identical across languages (e.g. `tienda`, not `shop`/`laden`/`negozio`) to keep the route tree simple. Canonical + hreflang make this safe for SEO.

**Route layout**: TanStack layout route `src/routes/$lang.tsx`:
- Loader validates `params.lang ∈ ['es','en','de','it']` (else `notFound`).
- Provides `<I18nProvider>` with the active dictionary.
- Sets `<html lang>` via root shell reading the active match.
- Emits hreflang alternates in `head()` (see SEO).

Each existing page moves under `$lang.*`:
- `$lang.index.tsx`, `$lang.tienda.tsx`, `$lang.tratamientos.tsx`, `$lang.sobre-nosotros.tsx`, `$lang.blog.tsx`, `$lang.contacto.tsx`, `$lang.carrito.tsx`, `$lang.checkout.tsx`.

Old bare routes (`tienda.tsx`, etc.) → loader `throw redirect()` to `/es/...` for backward compatibility with any external links.

**Dictionaries**: `src/i18n/{es,en,de,it}.ts` exporting a flat `Dict` of nested keys (nav, cta, cart, shop, footer, forms, checkout). Hook `useT()` returns `{ t, lang }`.

**Language selector**: dropdown in `Header` (desktop + mobile menu) that swaps the `$lang` segment, preserving the rest of the path via `router.navigate`, and writes the cookie + localStorage.

## 2. SEO — hreflang, canonical, sitemap

**Per page** (`head()` in `$lang.*` routes):
- `<html lang={lang}>` set from the active match in the root shell.
- Canonical = the current localized URL.
- `<link rel="alternate" hreflang="es|en|de|it" href=".../{lang}/path">` for every locale.
- `<link rel="alternate" hreflang="x-default" href=".../neutral/path">` — pointing at a **neutral fallback** route, NOT `/es`.

**x-default**: served by a small neutral entry point. `/` is the natural x-default target — its server loader 308-redirects to `/es`, which is the standard pattern for x-default. So:
```
<link rel="alternate" hreflang="x-default" href="https://herbolariospa-la-tejita.lovable.app/" />
```
This is the user's requested neutral fallback (the root URL is locale-agnostic; the redirect is a server response, not embedded content).

**Sitemap**: `src/routes/sitemap[.]xml.ts` server route emits one `<url>` per `(locale, path)` pair with full `<xhtml:link rel="alternate" hreflang="…">` annotations on each entry, plus `x-default` pointing to `/`. Routes enumerated: `/`, `/{lang}`, `/{lang}/tienda`, `/{lang}/tratamientos`, `/{lang}/sobre-nosotros`, `/{lang}/blog`, `/{lang}/contacto`. (Cart/checkout excluded — non-indexable.)

`public/robots.txt`: keep open crawl, add `Sitemap: https://herbolariospa-la-tejita.lovable.app/sitemap.xml`.

## 3. Cart architecture

**State**: zustand store `src/stores/cart.ts` persisted to `localStorage` (`tejita-cart-v1`):
```ts
type CartItem = { key: string; nameI18n: Partial<Record<Lang,string>>; price: number; img: string; qty: number }
type CartState = { items: CartItem[]; add(p, qty?); remove(key); setQty(key, qty); clear(); subtotal(): number; count(): number }
```
- Prices: numeric EUR (`priceEur`) added to each product in `site-data.ts`.
- SSR-safe: rehydrate on mount; render `count=0` during SSR to avoid hydration mismatch.

**UI**:
- `CartButton` in `Header` — icon + count badge, opens `MiniCart`.
- `MiniCart` — shadcn `Sheet` (slide-out) with line items, qty +/−, remove, subtotal, "Ver carrito" + "Pagar" CTAs.
- `/{lang}/carrito` — full cart page (stacked on mobile, table on desktop).
- `/{lang}/checkout` — guest form (contact, shipping address, notes); submit composes a WhatsApp deep link with the order summary (matches current sales flow). Clear "Request to order — confirmed via WhatsApp" copy. No payment gateway wired yet.
- Product cards: primary "Add to cart" + secondary WhatsApp.

## 4. Files

**New**
- `src/i18n/{types.ts,index.ts,es.ts,en.ts,de.ts,it.ts,I18nProvider.tsx}`
- `src/stores/cart.ts`
- `src/components/site/{LanguageSwitcher,CartButton,MiniCart}.tsx`
- `src/routes/$lang.tsx` (+ `$lang.index`, `$lang.tienda`, `$lang.tratamientos`, `$lang.sobre-nosotros`, `$lang.blog`, `$lang.contacto`, `$lang.carrito`, `$lang.checkout`)
- `src/routes/sitemap[.]xml.ts`
- `public/robots.txt` (if missing)

**Changed**
- `src/routes/index.tsx` → loader `throw redirect({ to: '/$lang', params: { lang: 'es' } })`.
- Old `tienda.tsx`, `tratamientos.tsx`, `sobre-nosotros.tsx`, `blog.tsx`, `contacto.tsx` → redirect loaders to `/es/...`.
- `src/routes/__root.tsx` → set `<html lang>` from active match.
- `src/components/site/Header.tsx` → translated nav, `LanguageSwitcher`, `CartButton`.
- `src/components/site/Footer.tsx` → translated strings.
- `src/lib/site-data.ts` → add `priceEur` per product.

**Deps**: `zustand`.

## 5. Scope / non-goals

- **Translation coverage**: nav, header, footer, cart, checkout, shop chrome (filters, badges, trust strip), CTAs, generic page chrome → fully translated in 4 langs. Long-form copy (treatment descriptions, blog bodies, about story) stays in Spanish with a small "Contenido en español" notice on EN/DE/IT — flagged as needing real translation, not machine-translated.
- No payment gateway (WhatsApp order flow).
- No taxes/shipping calculator (subtotal only; trust strip explains rules).
- No accounts (guest checkout).
- No IP-based redirects.

## 6. Open items (need real data)

- Real EN/DE/IT translations for treatments, blog, about body copy.
- Final shipping rules + tax handling.
- Payment provider (Stripe seamless recommended).
- Per-SKU product photography.

## Technical notes

- Cookie write happens on language switch only; the `/` server redirect always returns `/es` (deterministic for crawlers). The persisted-language client redirect is a small one-shot effect on `$lang.index` that only fires when cookie ≠ `es` AND the visitor landed via the `/` redirect, so it never creates a loop and never affects bots.
- `hreflang` set covers `es, en, de, it, x-default`. `x-default` → `/` (locale-agnostic root that 308s to `/es`).
- Sitemap entries are grouped: each URL carries `xhtml:link` alternates for all four locales plus `x-default`.
