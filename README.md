# CleverClick

Simple, accessible web app that teaches safer choices online through interactive scenarios.

## Quick start
```bash
npm i
npm run dev
```

Open http://localhost:5173

## Project structure
- `src/data` — scenarios as JSON (10 steps + index.json)
- `src/components/ScenarioRunner.tsx` — core UI for steps
- `staticwebapp.config.json` — Azure Static Web Apps routing & headers
- `.github/workflows/ci-build.yml` — CI (lint, typecheck, build)
- `.github/workflows/azure-swa.yml` — optional deploy to Azure SWA (requires secret)

## Add a scenario
1. Create a new JSON file in `src/data`.
2. Add the new `id` to `src/data/index.json` order.

## Deploy to Azure Static Web Apps (recommended)
**Option A (Portal auto-setup):**
1. Push this repo to GitHub.
2. Azure Portal → *Static Web Apps* → *Create* → Source: *GitHub* → choose repo & branch.
3. Build details: App location `/`, Build command `npm run build`, Output location `dist`.
4. Azure will create a GitHub Actions workflow and deploy automatically.

**Option B (manual token):**
1. In Azure SWA → *Manage deployment token* → copy token.
2. In GitHub repo → *Settings* → *Secrets and variables* → *Actions* → New secret:
   - Name: `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - Value: (paste token)
3. Push to `main` or run the `deploy-azure-swa` workflow.

## Security notes
- Do not collect personal data in this demo.
- Keep dependencies updated (Dependabot).
- Review PRs and keep `main` protected.

## License
MIT