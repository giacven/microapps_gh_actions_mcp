# TadaWeb Micro-Frontend Translation PoC

Demonstrates a **shell + 5 micro-frontends + 2 shared packages** architecture with **react-intl** (flat JSON, ICU plurals, variables, rich text) and **Lokalise** integration for three MFs.

## Architecture

- **Shell** (`apps/shell`) — Module Federation host, `IntlProvider`, locale switcher, message merge
- **Lokalise-connected MFs** — `mf-dashboard`, `mf-checkout`, `mf-settings` (~75 keys)
- **Local-only MFs** — `mf-reports`, `mf-notifications` (hand-maintained `de`/`fr`)
- **Shared packages** — `@tadaweb/shared-ui`, `@tadaweb/shared-business`
- **i18n utilities** — `@tadaweb/i18n-core` (merge + English fallback)

## Quick start

```bash
# Requires Node 20+ and pnpm (or: npx pnpm install)
pnpm install
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173). All six apps must run in parallel (ports 5173–5178).

| App | Port |
|-----|------|
| shell | 5173 |
| mf-dashboard | 5174 |
| mf-checkout | 5175 |
| mf-settings | 5176 |
| mf-reports | 5177 |
| mf-notifications | 5178 |

```bash
pnpm build   # build all apps
```

## Missing translation strategies

**A — App fallback (implemented):** `buildMessagesWithFallback(en, target)` merges English under the active locale so missing keys still render in English.

**B — Lokalise export fill:** When downloading via Lokalise API/CLI, enable options to include the base language for empty translations so `de`/`fr` files contain English placeholders. App merge remains a safety net.

Switch to **French** on Checkout or Settings to see partial coverage + English fallback. The sidebar **translation coverage** panel shows % translated per Lokalise MF.

## Lokalise

See [docs/lokalise-poc.md](docs/lokalise-poc.md) for MCP workflow, file paths, and the ~100-key batch limit.

Connected locale files:

- `apps/mf-dashboard/locales/en/dashboard.json`
- `apps/mf-checkout/locales/en/checkout.json`
- `apps/mf-settings/locales/en/settings.json`

## Key counts

| Unit | Keys | Lokalise |
|------|------|----------|
| shell | 20 | no |
| mf-dashboard | 22 | yes |
| mf-checkout | 28 | yes |
| mf-settings | 25 | yes |
| mf-reports | 18 | no |
| mf-notifications | 18 | no |
| shared-ui | 15 | no |
| shared-business | 15 | no |
