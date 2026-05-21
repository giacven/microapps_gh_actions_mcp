<!-- LOKALISE:platform:BEGIN -->
## Lokalise Translation Rules

**Lokalise conventions version: v6**

This project uses Lokalise for translations via the Lokalise MCP server.

All paths referenced below live at the **git repository root**.

### Settings file shape

`.lokalise/settings.json` — see committed file. This PoC uses `l10nLibrary: "react-intl"` (not react-i18next).

### Translation workflow

1. `create_project` — one-time setup
2. `translate_keys` — stage keys (~100 cap per job)
3. `submit_translation_job` — flush; write `.lokalise/jobs/<jobId>.json`
4. `get_job_status` — poll until `SUCCEEDED`
5. `get_translations` — write `de`/`fr` locale files

### Lokalise-connected files

- `apps/mf-dashboard/locales/en/dashboard.json`
- `apps/mf-checkout/locales/en/checkout.json`
- `apps/mf-settings/locales/en/settings.json`

Context: `.lokalise/context/*.context.json` (single source of truth before `translate_keys`).

### Plurals

ICU MessageFormat in flat JSON values; same shape on upload and download.

<!-- LOKALISE:platform:END -->

<!-- LOKALISE:framework:react:BEGIN -->
## Lokalise Translation - React Conventions

**Lokalise React conventions version: v2**

This project uses **react-intl** (override: not react-i18next).

### Key naming

`dot.notation` flat keys per MF file (e.g. `checkout.items_count`).

### File layout

`apps/<mf>/locales/<locale>/<namespace>.json`

Shell merges all bundles via `@tadaweb/i18n-core`.

<!-- LOKALISE:framework:react:END -->
