# SmartFarm — Smart Irrigation & Intelligent Farm Management

An animated, responsive static website for the college project **IoT-Based Smart Irrigation and Intelligent Farm Management System with Automated Water Distribution and Remote Monitoring**.

## Files
- `index.html` — semantic website structure and content.
- `style.css` — responsive layout, visual system, dashboard, and animations.
- `script.js` — mobile navigation, reveal animations, interactive demo pump, sample zones, checklist, and alerts.
- `.github/workflows/pages.yml` — automatic GitHub Pages deployment.

## Run locally
Open `index.html` in a browser. No build process or package installation is required.

## Publish with GitHub Pages
The workflow deploys this static site to GitHub Pages when changes are pushed to `main`. In **Settings → Pages**, set **Build and deployment → Source** to **GitHub Actions** if needed. Then check the **Actions** tab and open the deployed site at:

`https://shreyas2006R.github.io/smart-farming/`

The first deployment can take a few minutes after the workflow is enabled.

## Demo limitations and safety
All dashboard readings are illustrative sample values. This site does not connect to physical sensors, a motor, camera, weather API, crop-market feed, API, or database. The pump switch is a frontend simulation only and cannot operate real equipment.

Live features require connected hardware, secure authentication, a backend and verified data providers. Never connect mains voltage directly to an ESP32; a real motor-control panel should use appropriate isolation and protection and be checked by a qualified person.