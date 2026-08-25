# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A [VitePress](https://vitepress.dev) documentation site publishing DirectTrust's *Framework for Metadata and Payloads via the Direct Standard® (Part I: Framework Foundations)* (DS2024-07-100-2026) to `https://directtrust.github.io/metadata-and-payloads-guide/`. All content is authored in `docs/*.md`; there is no application code. See `README.md` for the full content-authoring workflow — it is written for non-developers and is the primary reference for anything content-related.

## Commands

```bash
npm install          # one-time setup
npm run docs:dev      # dev server with hot reload — http://localhost:5173/metadata-and-payloads-guide/
npm run docs:build     # production build to docs/.vitepress/dist — also the closest thing to a test/lint step:
                        # fails on broken Markdown/config and on dead internal links
npm run docs:preview   # serve the production build locally
```

There is no separate test suite or linter; `npm run docs:build` is the validation step to run after editing content or config.

## Architecture

- **`docs/*.md`** — one page per file, plain Markdown with YAML frontmatter (`title:` must be quoted if it contains a colon, or the build fails).
- **`docs/.vitepress/config.mts`** — site title, `base` path, and the `nav`/`sidebar` structures. Adding a new `.md` file does *not* make it appear in navigation — it must be added manually to `sidebar` (and rarely `nav`) in this file, or it's only reachable by direct URL. `sidebar` nests arbitrarily deep via `items`.
- **`docs/.vitepress/theme/`** — thin wrapper (`index.ts`) that extends VitePress's default theme, plus `custom.css` for the DirectTrust color palette (#004f93 blue, #5CB172 green).
- **`docs/public/images/<slug>/`** — diagrams/screenshots, one folder per page, referenced from Markdown by absolute path (`/images/<slug>/1.png`), never as base64 data URIs.
- **`base: '/metadata-and-payloads-guide/'`** in `config.mts` must match the repo name — this is a GitHub Pages *project* site (not the org's root `DirectTrust.github.io` repo), so it's served under a path. If the repo is ever renamed, this value must be updated or the site 404s on its own assets despite a successful build.
- **`.github/workflows/deploy.yml`** — the entire deploy pipeline. On every push to `main`: `npm ci`, `npm run docs:build`, then publishes `docs/.vitepress/dist/` via GitHub's Pages actions. No manual deploy step, no Jekyll.
- **`scripts/convert-doc.mjs`** — one-time/occasional migration script that splits a pandoc-exported Markdown dump of the source Google Doc into the per-page files under `docs/`. Not part of routine editing; only relevant if the source document changes substantially and needs re-splitting (see README's "Regenerating content from the source Google Doc" section for the pandoc invocation and the script's line-range-based `PAGES` mapping). Its input (`scratchpad/doc.md` and extracted media) is gitignored.

## Known quirks

- Pandoc emits tables with "repeat header row" enabled on every row as all-`<thead>`/`<th>` with an empty `<tbody>`, rendering as one solid blue block. `scripts/convert-doc.mjs`'s `fixBrokenHeaderTables()` is the fix/reference for this.
