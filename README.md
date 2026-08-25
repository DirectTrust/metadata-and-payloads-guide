# metadata-and-payloads-guide

Documentation site for **DS2024-07-100-2026 — Framework for Metadata and Payloads via the Direct Standard® (Part I: Framework Foundations)**, published by DirectTrust.

This content originates from the DirectTrust standards Google Doc and is published as a standalone [VitePress](https://vitepress.dev) site, written in Markdown, at `https://directtrust.github.io/metadata-and-payloads-guide/` via GitHub Pages.

## Where the files live

```
metadata-and-payloads-guide/
├── docs/                          ← everything you'll actually edit
│   ├── .vitepress/
│   │   ├── config.mts             ← site title, nav, sidebar structure, search
│   │   └── theme/
│   │       ├── index.ts           ← extends VitePress's default theme
│   │       └── custom.css         ← DirectTrust color palette (#004f93 blue, #5CB172 green)
│   ├── public/images/<doc-slug>/  ← diagrams extracted from the source document, one folder per page
│   ├── index.md                   ← home page (hero)
│   ├── document-info.md
│   ├── overview.md
│   └── ... (one .md file per doc page)
├── scripts/convert-doc.mjs        ← one-time source-doc → Markdown migration script (kept for reference only)
├── .github/workflows/deploy.yml   ← builds + publishes on every push to main
└── package.json
```

## Commands

```bash
npm install            # one-time setup
npm run docs:dev       # local dev server with hot reload — http://localhost:5173/metadata-and-payloads-guide/
npm run docs:build     # production build to docs/.vitepress/dist (same as CI)
npm run docs:preview   # serve the built dist/ output locally
```

Requires Node.js 18+ and npm. No Ruby, Jekyll, or other toolchain needed.

Note: because of the `base: '/metadata-and-payloads-guide/'` config, visiting `http://localhost:5173/` alone redirects to the `/metadata-and-payloads-guide/` path — that's expected, not a broken dev server.

## Adding or editing a page

1. Edit or create `docs/<slug>.md` with YAML frontmatter:
   ```markdown
   ---
   title: My Page
   ---

   # My Page

   Content goes here...
   ```
2. Add it to the `sidebar` (and, rarely, `nav`) array in `docs/.vitepress/config.mts`. A page not listed in `sidebar` is unreachable via navigation even though it still builds and is reachable by direct URL.

Screenshots/diagrams go in `docs/public/images/<slug>/`, referenced with an absolute path plus an italic caption line underneath:

```markdown
![Description of the diagram](/images/<slug>/1.png)

*Description of the diagram*
```

## How it gets hosted

GitHub Pages is configured to deploy from GitHub Actions (repo **Settings → Pages → Build and deployment → Source → GitHub Actions**), not from a branch. `.github/workflows/deploy.yml` runs on every push to `main`: checks out the repo, installs dependencies, runs `docs:build`, and publishes the `dist/` output via GitHub's official Pages deploy action. A push to `main` is live at `https://directtrust.github.io/metadata-and-payloads-guide/` shortly after.

If this repository is ever renamed, `base` in `docs/.vitepress/config.mts` must be updated to match, or the site 404s on its own assets/images even though the build succeeds.
