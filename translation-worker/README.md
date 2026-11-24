# SmartFarm Gemini AI translation Worker

This Worker translates the visible website text with Gemini while keeping the API key off the public GitHub Pages site.

## Deploy once

1. Install Node.js, then open a terminal in this folder.
2. Run `npm install -g wrangler` (or use `npx wrangler`).
3. Sign in to Cloudflare: `npx wrangler login`.
4. Add your fresh Gemini API key as a Worker secret:

   `npx wrangler secret put GEMINI_API_KEY`

   Paste the key only into the terminal prompt. Do not commit it to GitHub or place it in `index.html`.
5. Deploy:

   `npx wrangler deploy`

Cloudflare prints a URL similar to `https://smartfarm-ai-translation.YOUR-SUBDOMAIN.workers.dev`.

## Connect the website

In the repository's `index.html`, set:

```js
window.SMARTFARM_TRANSLATION_API = 'https://smartfarm-ai-translation.YOUR-SUBDOMAIN.workers.dev';
```

Use the exact URL Cloudflare prints. Commit the change to `main`, then wait for GitHub Pages to publish.

## Supported languages

The Worker accepts `kn` Kannada, `hi` Hindi, `ta` Tamil, `te` Telugu, `ml` Malayalam and `en` English. It accepts up to 35 strings per request. The website sends page text in batches and restores the original English strings when English is selected.

## Key safety

The Gemini key previously pasted into a chat should be revoked and replaced before deployment. The Worker uses the `GEMINI_API_KEY` secret; never expose the key in browser JavaScript.
