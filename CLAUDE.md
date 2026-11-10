# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A [VitePress](https://vitepress.dev) documentation site publishing DirectTrust's *Framework for Metadata and Payloads via the Direct Standard® (Part I: Framework Foundations)* (DS2024-07-100-2026) to `https://assets.directtrust.org/metadata-and-payloads-guide/`. All content is authored in `docs/*.md`; there is no application code. See `README.md` for the full content-authoring workflow — it is written for non-developers and is the primary reference for anything content-related.

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

- **`docs/NN-*/`** — one folder per top-level chapter (`00-about-…`, `03-01-…`, `06-terms`, …), each with an `index.md` plus section pages: plain Markdown, YAML frontmatter optional (`title:` must be quoted if it contains a colon, or the build fails). `docs/index.md` is the landing page (hand-built hero, not VitePress's `home` layout).
- **Sidebar is generated, not hand-edited.** `scripts/build-sidebar.mjs` walks the `NN-*` folders and writes the **committed** `docs/.vitepress/ig-sidebar.json`, which `config.mts` imports (Version History is appended after it). Sidebar labels are each page's first `# H1` with any leading "Chapter N — " stripped, so renaming a nav entry means editing the H1 *and* re-running `node scripts/build-sidebar.mjs` and committing the JSON — neither `docs:dev` nor `docs:build` regenerates it (CI doesn't either), so it goes stale silently. Nesting comes from filename keys (`3-2-1-foo` nests under `3-2-…`). Adding a page needs no config edit once the JSON is regenerated.
- **`docs/.vitepress/config.mts`** — site title, `base` path, the top `nav` (hand-maintained; its "DirectTrust Assets Home" link points at the vanity domain `assets.directtrust.org`), and `themeConfig.publishedUrl` (used by the DRAFT banner). The site is published under the vanity domain `https://assets.directtrust.org/metadata-and-payloads-guide/`; don't reintroduce `directtrust.github.io` URLs.
- **`docs/.vitepress/theme/`** — thin wrapper (`index.ts`) that extends VitePress's default theme, `DraftBanner.vue` (the develop-channel banner), and `custom.css` for the DirectTrust color palette (#004f93 blue, #5CB172 green) plus sidebar divider tweaks. The sidebar dividers are fragile: VitePress already draws a line above every top-level sidebar group, so extra dividers (above Templates / Version History) must not stack into double lines. `build-site.sh` injects the same Version History rules for older refs, so keep the two in sync.
- **`docs/public/images/<slug>/`** — diagrams/screenshots, one folder per page, referenced from Markdown by absolute path (`/images/<slug>/1.png`), never as base64 data URIs.
- **`base: '/metadata-and-payloads-guide/'`** in `config.mts` must match the repo name — this is a GitHub Pages *project* site (not the org's root `DirectTrust.github.io` repo), so it's served under a path. If the repo is ever renamed, this value must be updated or the site 404s on its own assets despite a successful build.
- **`.github/workflows/deploy.yml`** + **`scripts/build-site.sh`** — the entire deploy pipeline. On every push to `main` or `develop` (and on release publish) the script builds `main` at the site root, `develop` at `/develop/` (with `DOCS_CHANNEL=draft`, which `config.mts` turns into the DRAFT banner + noindex), and *every git tag* at `/<tag>/`, each from its own worktree via the VitePress build API (`base` is overridden there; the CLI has no `--base`). One merged folder is published via GitHub's Pages actions. `scripts/generate-history.mjs` writes the gitignored `docs/version-history.md` (Latest/Develop + one entry per tag, text from GitHub release bodies via `gh`) into every build; `build-site.sh` also wraps the config of refs that predate it (via a `config.mts` shim) so the sidebar gets a History link; old refs are built with *this branch's* script but their own content, so site-wide fixes to the shim only reach main/tags when the script that runs is updated. Local search is per-build, so it is naturally scoped to one version. The `github-pages` environment's deployment-branch policy must allow both `main` and `develop`.
- **`scripts/convert-doc.mjs`** — one-time/occasional migration script that splits a pandoc-exported Markdown dump of the source Google Doc into the per-page files under `docs/`. Not part of routine editing; only relevant if the source document changes substantially and needs re-splitting (see README's "Regenerating content from the source Google Doc" section for the pandoc invocation and the script's line-range-based `PAGES` mapping). Its input (`scratchpad/doc.md` and extracted media) is gitignored.

## Known quirks

- Pandoc emits tables with "repeat header row" enabled on every row as all-`<thead>`/`<th>` with an empty `<tbody>`, rendering as one solid blue block. `scripts/convert-doc.mjs`'s `fixBrokenHeaderTables()` is the fix/reference for this.
