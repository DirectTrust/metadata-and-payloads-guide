# metadata-and-payloads-guide

Documentation site for **DS2024-07-100-2026 — Framework for Metadata and Payloads via the Direct Standard® (Part I: Framework Foundations)**, published by DirectTrust.

This content originates from the DirectTrust standards Google Doc and is published as a standalone [VitePress](https://vitepress.dev) site, written in Markdown, at `https://directtrust.github.io/metadata-and-payloads-guide/` via GitHub Pages.

This repo is a project site (not the org's special `DirectTrust.github.io` root-domain repo), so it's served under a path rather than at the bare `directtrust.github.io` domain. VitePress is configured with `base: '/metadata-and-payloads-guide/'` in `docs/.vitepress/config.mts` to match — if this repo is ever renamed, that value has to be updated to match, or every internal link/image/asset path breaks.

This README is for anyone writing or editing documentation content, not just developers — the day-to-day workflow only requires editing Markdown files and running two npm commands.

## Where the files live

```
metadata-and-payloads-guide/
├── docs/                          ← everything you'll actually edit
│   ├── .vitepress/
│   │   ├── config.mts             ← site title, nav, sidebar structure, search
│   │   └── theme/
│   │       ├── index.ts           ← extends VitePress's default theme
│   │       └── custom.css         ← DirectTrust color palette (#004f93 blue, #5CB172 green)
│   ├── public/
│   │   ├── directtrust-logo.png
│   │   └── images/<doc-slug>/     ← diagrams extracted from the source document, one folder per page
│   ├── index.md                   ← home page (hero)
│   ├── document-info.md
│   ├── overview.md
│   └── ... (one .md file per doc page)
├── scripts/convert-doc.mjs        ← one-time source-doc → Markdown migration script (kept for reference only)
├── .github/workflows/deploy.yml   ← builds + publishes on every push to main
├── package.json / package-lock.json
└── .gitignore
```

## How Markdown becomes HTML

`vitepress build docs` (wired up as `npm run docs:build`) reads every `.md` file under `docs/`, runs it through VitePress's Markdown pipeline, wraps it in the Vue-based theme (nav, sidebar, search, the custom CSS), and outputs static HTML/CSS/JS to `docs/.vitepress/dist/`. That output directory is what actually gets hosted — nobody writes or edits raw HTML.

## How it gets hosted

GitHub Pages is configured to deploy from GitHub Actions (repo **Settings → Pages → Build and deployment → Source → GitHub Actions**), not from a branch. `.github/workflows/deploy.yml` runs on every push to `main`: checks out the repo, installs dependencies, runs `docs:build`, and hands the `dist/` folder to GitHub's official Pages deploy action. No separate server, no Jekyll — the workflow *is* the deploy pipeline. A push to `main` is live at `https://directtrust.github.io/metadata-and-payloads-guide/` about a minute later. You can watch progress under the repo's **Actions** tab.

## Workflow for writing or editing content

### 1. One-time setup

```bash
git clone https://github.com/DirectTrust/metadata-and-payloads-guide.git
cd metadata-and-payloads-guide
npm install
```

Requires Node.js (18+) and npm. No Ruby, Jekyll, or other toolchain needed.

### 2. Recommended editor setup

Use **VS Code** to write and edit `.md` files (the built-in Markdown support, or the Markdown All in One extension, is enough — no special VitePress plugin required). Alongside it, keep a terminal open running:

```bash
npm run docs:dev
```

and a browser tab open on `http://localhost:5173/metadata-and-payloads-guide/`. This is the setup to use for both authoring and previewing:

- **VS Code** is where you write and edit the Markdown source.
- **The dev server tab** is where you check the result — it's the only accurate preview of what the published page will actually look like, because it renders through the real VitePress theme (nav, sidebar, custom CSS, search) and understands VitePress-only syntax like `::: tip` callout boxes and frontmatter-driven titles. VS Code's own Markdown preview does *not* understand any of that, so don't rely on it to judge how a page will really appear once published.
- The dev server hot-reloads on save, so keep both windows open side by side while you work and the browser tab updates automatically as you edit.

### 3. Editing an existing page

Open the relevant `docs/<slug>.md` file and edit it directly — it's plain Markdown:
- `#`, `##`, `###` for headings
- `-` for bullet lists, `1.` for numbered lists
- `**bold**`, `*italic*`
- `| col | col |` tables (standard GitHub-flavored Markdown), or raw `<table>` HTML for anything with merged/complex cells — VitePress renders both
- `::: tip\nSome note here.\n:::` for a green callout box, if you want one

If a page's frontmatter `title:` contains a colon (e.g. `Patient Demographics: Foundations for Patient Matching`), it must be quoted (`title: "..."`) or the YAML parser fails the build.

### 4. Adding a new page

1. Create `docs/<new-slug>.md` with a frontmatter title:
   ```markdown
   ---
   title: My New Page
   ---

   # My New Page

   Content goes here...
   ```
2. Add it to the navigation in `docs/.vitepress/config.mts`. Nothing generates navigation automatically from the files in `docs/` — if a page isn't added here, it won't show up in the nav or sidebar (it's still reachable by direct URL, just not discoverable). There are two separate structures in that file:

   - **`sidebar`** — the left-hand nav pane, and where almost every page belongs. It's a nested tree of objects: `{ text: 'Label', link: '/slug', items: [...] }`. Each `items` array is a collapsible group of children (use `collapsed: true` to start it closed), and `items` can nest inside `items` to any depth — that's how the current Appendices → Patient Demographics Coding and Representation → Sample Patient Demographic Representations → V2/CDA/FHIR hierarchy is built (four levels deep).
   - **`nav`** — the top nav bar. Only used for a couple of top-level entry points (currently "Introduction", "About This Document", and "Appendices"); most new pages do **not** need an entry here.

   To add a page under an existing section, find its parent object in `sidebar` and append a `{ text, link }` entry to that parent's `items` array. For example, adding a new page under "Message Payload Framework":
   ```ts
   {
     text: 'Message Payload Framework',
     link: '/message-payload-framework',
     items: [
       { text: 'Message Metadata', link: '/message-metadata' },
       { text: 'My New Page', link: '/my-new-page' } // new entry
     ]
   }
   ```
   To nest a page *under* the one you just added (another level deep), give it its own `items: [...]` array the same way. To add a whole new top-level section (a sibling of "Message Payload Framework"), add a new object directly to the root `sidebar` array instead of inside an existing `items`.

### 5. Adding or updating diagrams/screenshots

Save the image file directly into `docs/public/images/<slug>/` (create the folder if it doesn't exist) and reference it in the Markdown with an absolute path plus an italic caption line underneath:

```markdown
![Description of the diagram](/images/<slug>/1.png)

*Description of the diagram*
```

Never paste an image in as a base64 data URI — always save it as a real image file and reference it by path. This keeps `.md` files small and diffable in pull requests.

### 6. Test your changes locally

The `npm run docs:dev` server from step 2 is what you should already have running as you write — it's the day-to-day way to check that content, links, images, and nav placement look right before publishing. Because of the `base` setting mentioned above, the site is served under a path rather than at the server root: go to `http://localhost:5173/metadata-and-payloads-guide/` (visiting `http://localhost:5173/` alone will redirect you there).

To double check exactly what will ship (the real production build, not the dev server), you can also run:

```bash
npm run docs:build      # builds docs/.vitepress/dist, same as CI does
npm run docs:preview    # serves that built output locally so you can verify it
```

`npm run docs:build` is also the closest thing to a lint/test step this repo has — it fails on broken Markdown/config and (with default VitePress settings) on dead internal links.

### 7. Publish

Commit your change and push (or open a PR and merge) to `main`:

```bash
git add docs/
git commit -m "Update SubmissionSet Metadata documentation"
git push
```

That's it — no manual build or deploy step. The GitHub Actions workflow builds the site and publishes it to `https://directtrust.github.io/metadata-and-payloads-guide/` automatically.

## Regenerating content from the source Google Doc

`scripts/convert-doc.mjs` is the one-time migration script that produced the current `docs/*.md` pages from the source Google Doc (DS2024-07-100-2026). It is **not** part of the normal day-to-day editing workflow described above — once a page exists as Markdown, edit it directly. The script is kept for reference in case the source document changes substantially and needs to be re-split.

To regenerate: export the Google Doc as **File → Download → Microsoft Word (.docx)**, then convert it with [pandoc](https://pandoc.org/) (`brew install pandoc`) into the Markdown-plus-extracted-media format the script expects:

```bash
pandoc source.docx -f docx -t gfm --extract-media=scripts/../scratchpad -o scratchpad/doc.md --wrap=none
node scripts/convert-doc.mjs
```

The script's `PAGES` array hand-maps line ranges in the exported `doc.md` to page slugs, titles, heading-level shifts, and per-image captions — it does not auto-detect page boundaries, since the source document's heading levels are inconsistent in places (e.g. sibling sections at mismatched heading depths) and need editorial judgment to split sensibly. `scratchpad/` (the exported `doc.md` and extracted media) is gitignored and never committed.

## Known quirks

- Word tables with "repeat header row" enabled on *every* row cause pandoc to emit the entire table as `<thead>`/`<th>` with an empty `<tbody>`, which visually renders as one solid blue block (the theme styles `<th>` with the brand color). `scripts/convert-doc.mjs` has a `fixBrokenHeaderTables()` post-processing step that demotes every row after the first back to normal `<td>` — if a newly-converted table shows this symptom, that function (or a similar manual fix) is the place to look.
- If this repository is ever renamed, `base` in `docs/.vitepress/config.mts` must be updated to match the new repo name (`/<new-name>/`), or the site 404s on all its own assets/images even though the build succeeds — GitHub Pages happily builds and deploys a site with the wrong base path, it just won't render correctly. This is also why the site is *not* at the bare `https://directtrust.github.io/` you might expect: only a repo named exactly `DirectTrust.github.io` gets that root-domain treatment; anything else is a project page served under `/repo-name/`.
