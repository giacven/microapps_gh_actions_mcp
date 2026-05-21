# Lokalise PoC workflow

This repo connects **three micro-frontends** to Lokalise via the MCP server (`user-lokalise-translation-preview`). Total staged keys: **~75** (under the ~100-key batch cap).

## Lokalise file paths (Items)

| `file` parameter | Repository path |
|------------------|-----------------|
| `apps/mf-dashboard/locales/en/dashboard.json` | Dashboard MF English source |
| `apps/mf-checkout/locales/en/checkout.json` | Checkout MF English source |
| `apps/mf-settings/locales/en/settings.json` | Settings MF English source |

On feature branches (not `main` / `bootstrapBranch`), prefix: `<slug>:<path>` per `AGENTS.md`.

## MCP sequence

1. Ensure `.lokalise/context/*.context.json` entries exist for every key.
2. `translate_keys` — stage all keys from each file (reuse `jobId` across files).
3. `submit_translation_job` — flush job; write `.lokalise/jobs/<jobId>.json`.
4. Poll `get_job_status` until `SUCCEEDED`.
5. `get_translations` per file — write `apps/*/locales/de/*.json` and `fr/*.json`.
6. Surface any `pendingReview` message to the user before marking complete.

## react-intl notes

- Flat JSON keys use `dot.notation` (e.g. `checkout.items_count`).
- ICU plurals and rich tags stay **inside JSON values** (native react-intl shape).
- On upload, Lokalise receives ICU MessageFormat on the wire; on download, expand back to the same flat key.

## Missing translations

- **Strategy A:** Shell uses `buildMessagesWithFallback` from `@tadaweb/i18n-core`.
- **Strategy B:** Lokalise export with “fill empty with base language” — see README.

## First-time project setup

Run `create_project` via MCP, then update `.lokalise/settings.json` with returned `projectId`, `workspaceId`, and language UUIDs from the first `translate_keys` response.
