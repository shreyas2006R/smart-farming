# SmartFarm website upgrade

## What was added
- A first-visit language chooser for Kannada, Tamil, Telugu, Hindi and Malayalam.
- Independent Zone 01 / Zone 02 ON/OFF valve simulations and a 100% water-allocation graph.
- A camera-inspection demonstration with sample pipe-leak, irrigation-unit, animal-activity and crop-damage cases.
- A motor-speed (RPM) slider and start/stop simulation.
- A farmer crop/fertilizer assistant with a local fallback and an optional Gemini 3.8 Flash endpoint.
- Field notes and task reminders saved in the current browser.

## Important: demo boundaries
This repository is still a static GitHub Pages website. The irrigation controls, flow values, motor speed and camera detections are simulations; no physical equipment or camera is connected. Reminders are delivered only while the page is open. Notes and reminders are stored in the current browser, not in cloud storage. No mobile app or IoT hardware is included in this website scope.

## Gemini setup
The file \`api/gemini.js\` is a Vercel serverless function. GitHub Pages does not execute server-side functions, so the published GitHub Pages URL uses the built-in local crop-guidance fallback until the API is deployed on a compatible serverless host.

To enable live Gemini answers:
1. Revoke the API key that was pasted into a public chat and create a fresh key.
2. Deploy this repository to Vercel (the \`api/gemini.js\` function is detected automatically).
3. In Vercel Project Settings → Environment Variables, add \`GEMINI_API_KEY\` with the fresh key. Do not put the key in HTML, JavaScript, GitHub commits, or screenshots.
4. Redeploy the Vercel project and use that deployed site URL. The API uses the stable model ID \`gemini-3.8-flash\` with Google Search grounding for current answers.
5. Review the model/API usage and billing limits in Google AI Studio.

If you continue using GitHub Pages only, the rest of the website works and the assistant gives local general guidance; it cannot access the Gemini API from the Pages host.

## Privacy and safety
- Field notes and reminders stay in local browser storage on the device.
- The AI prompt asks the model not to invent shop names, stock, prices or fertilizer doses. Always verify agricultural advice against a current soil test and local agriculture/KVK guidance.
- Never use the simulation switches to operate a real motor. Real pump and electrical controls require separately engineered, tested safety hardware and a qualified installer.
