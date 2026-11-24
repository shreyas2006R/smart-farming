# SmartFarm Gemini AI translation Worker

This Cloudflare Worker translates the visible website text into Kannada, Hindi, Tamil, Telugu, Malayalam or English. The Gemini key stays on the server, not in the public GitHub Pages JavaScript.

## One-time GitHub setup

1. In Cloudflare, create an API token with **Workers Scripts: Edit** permission for the account that will host the Worker. Copy the account ID from the Cloudflare dashboard.
2. In the GitHub repository, open **Settings → Secrets and variables → Actions → New repository secret**.
3. Add these three secrets (never paste their values into chat or source code):
   - `CLOUDFLARE_API_TOKEN` — Cloudflare API token
   - `CLOUDFLARE_ACCOUNT_ID` — Cloudflare account ID
   - `GEMINI_API_KEY` — a fresh Gemini API key
4. Open **Actions → Deploy SmartFarm translation Worker** and run the workflow, or push a change under `translation-worker/`.
5. When it succeeds, open the workflow run and its deployment log. Copy the exact `workers.dev` URL printed by Wrangler, for example `https://smartfarm-ai-translation.YOUR-SUBDOMAIN.workers.dev`.

The workflow deploys the Worker and uploads `GEMINI_API_KEY` as a Cloudflare Worker secret. Do not commit any API keys. If a Gemini key was ever shared publicly or in a chat, revoke it and create a fresh one first.

## Connect the website

In the repository's root `index.html`, set the configuration line to the exact Worker URL from the successful deployment:

```js
window.SMARTFARM_TRANSLATION_API = 'https://smartfarm-ai-translation.YOUR-SUBDOMAIN.workers.dev';
```

Do not add `/translate` unless your own Worker deployment explicitly uses that route; this Worker accepts POST requests at its root URL. Commit the change to `main`, then wait for GitHub Pages to publish.

## Language pages

The website uses `?lang=kn`, `?lang=hi`, `?lang=ta`, `?lang=te`, and `?lang=ml` for shareable language-specific views. English uses the base URL. The Worker supports all six languages and processes page text in batches of up to 35 strings.

## Security

Never put the Gemini API key in `index.html`, `advanced.js`, or any other browser-side file. Keep it only in GitHub Actions Secrets and the Cloudflare Worker secret store.
