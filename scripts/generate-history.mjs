// Generates docs/history.md: the "History" page listing the current, in-development and
// every released version of the guide. Run on every build (scripts/build-site.sh for the
// published site, the predocs:* npm hooks locally), so it is never edited by hand and is
// gitignored.
//
//   - "Latest" (main) and "Develop" are always listed, with fixed descriptions.
//   - Every git tag is a released version. Its description is the body of the GitHub
//     release for that tag (fetched with the gh CLI); with no release, it falls back to
//     the tag's own message.
//   - "Other working versions" is reserved for tagged working versions that follow a
//     naming convention we do not have yet, so it is empty for now.
//
// Usage: node scripts/generate-history.mjs [out-file]   (default docs/history.md)
import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SITE_BASE = '/metadata-and-payloads-guide'
const out = path.resolve(process.argv[2] ?? path.join(REPO_ROOT, 'docs', 'history.md'))

const run = (cmd, args) =>
  execFileSync(cmd, args, { cwd: REPO_ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] })

// Releases keyed by tag name. Drafts are unpublished, so they are skipped.
const releases = new Map()
try {
  const pages = run('gh', ['api', 'repos/{owner}/{repo}/releases', '--paginate', '--slurp'])
  for (const r of JSON.parse(pages).flat()) if (!r.draft) releases.set(r.tag_name, r)
} catch (e) {
  // In CI a missing release list would silently publish a History page without
  // descriptions, so fail there; locally (no gh, offline) just warn and carry on.
  if (process.env.CI) throw e
  console.warn(`generate-history: could not read GitHub releases (${e.message.split('\n')[0]}); using tag data only`)
}

const tags = run('git', ['for-each-ref', '--format=%(refname:short)%09%(creatordate:iso-strict)%09%(contents:subject)', 'refs/tags'])
  .split('\n')
  .filter(Boolean)
  .map((line) => {
    const [name, created, subject] = line.split('\t')
    const release = releases.get(name)
    return {
      name,
      date: new Date(release?.published_at ?? created),
      description: (release?.body ?? '').trim() || (release ? '' : subject ?? '')
    }
  })
  // Newest release first, so the most recent version is at the top of the list.
  .sort((a, b) => b.date - a.date)

const link = (href, text) => `<a class="vp-raw" href="${href}">${text}</a>`
const day = (d) => d.toISOString().slice(0, 10)

// Release notes are free-form Markdown. Demote headings to bold so they do not turn into
// page headings/outline entries of their own.
const demote = (md) => md.replace(/^#{1,6}\s+(.+)$/gm, '**$1**')

const entry = (t) => `### Version ${t.name}

Released ${day(t.date)} · ${link(`${SITE_BASE}/${encodeURIComponent(t.name)}/`, 'View this version')}

<div v-pre>

${demote(t.description) || '_No description provided._'}

</div>
`

const page = `---
title: History
---

# History

Versions of the Framework for Metadata and Payloads via the Direct Standard®. This page is generated automatically each time the site is built, and appears in every version of the guide.

## Current and upcoming

| Version | Description |
|---|---|
| ${link(`${SITE_BASE}/`, '**Latest**')} | Latest released version |
| ${link(`${SITE_BASE}/develop/`, '**Develop**')} | Next version in development |

## Released versions

${tags.length ? tags.map(entry).join('\n') : '_No tagged releases yet._\n'}
## Other working versions

None at this time.
`

fs.writeFileSync(out, page)
console.log(`generate-history: wrote ${path.relative(REPO_ROOT, out)} (${tags.length} released version${tags.length === 1 ? '' : 's'})`)
