# NASA IPTV Next — Astro / GitHub Pages

Modern bilingual (English / Arabic) static product catalogue with WhatsApp ordering.

## Local setup

```bash
npm install
npm run dev
npm run build
```

## GitHub Pages deployment

1. Create a **public** GitHub repository (e.g. `nasa-iptv-next`).
2. Upload the **contents** of this project to the repository root, on branch `main` (include `.github/workflows/deploy.yml`).
3. Open **Settings → Pages → Build and deployment** and select **GitHub Actions**.
4. The included workflow installs dependencies, builds Astro and publishes `dist/` after each push to `main`.
5. To test on the default `username.github.io/repository` URL before switching DNS, edit `astro.config.mjs`: set `site: 'https://USERNAME.github.io'` and `base: '/REPOSITORY'`. **Important:** all internal links and asset paths are currently root-relative and require a custom domain or path adaptation for subpath testing. Easiest preview: use a `USERNAME.github.io` repository and `site: 'https://USERNAME.github.io'` (root deployment), or local `npm run dev`.
6. Once verified, set `site: 'https://nasa-iptv.net'`, add `public/CNAME` with `nasa-iptv.net`, and configure GitHub Pages custom domain and DNS. **Do not switch DNS before testing and checking domain ownership.**

## Editing products

Edit `src/data/products.js` to change prices, descriptions, or add/remove products. Product pages are generated automatically at `/product/SLUG/`. WhatsApp number is configured in that file. Update contact links in layout/pages if the number changes.

## What this build does / does not do

- Fast static pages, responsive styling, language switcher, product listings, product detail pages, WhatsApp ordering, app references, FAQ, sitemap, SEO basics.
- No WooCommerce, backend, payment gateway, account management, order history, or automatic fulfillment.
- Images of ORA promotional products were provided in this conversation; other product visuals are lightweight CSS graphics. Confirm all images and pricing rights before publishing.
- Product inventory is a curated subset of the current website and may differ from live inventory. Review regional prices, plans, license terms, download URLs and policy copy.
- GitHub Pages can only serve static files. Use a separate system if you later need dynamic checkout.

## SEO migration

Keep old WordPress live until the new site is fully reviewed. Set up permanent 301 redirects for old URLs that changed (including WooCommerce categories and legacy pages) using a proxy/CDN or other redirect-capable host; GitHub Pages does not provide native HTTP 301 redirect rules. Preserve canonical domain and test indexing after cutover.
