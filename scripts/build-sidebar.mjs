// Generates docs/.vitepress/ig-sidebar.json (imported by config.mts) from the
// chapter folders under docs/. Titles come from each page's first H1.
//
// Layout rules:
//   - each NN-* folder under docs/ is one top-level sidebar group; its index.md is the group landing page
//   - within a folder, a file keyed "3-2-1-..." nests under the sibling keyed "3-2-..." (parent key = key minus last token)
//   - subfolders (e.g. the appendices) become nested groups, linked to their own index.md
//
// Usage: node scripts/build-sidebar.mjs
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const DOCS_DIR = path.join(REPO_ROOT, 'docs')
const SKIP = new Set(['public'])

const titleOf = (file, fallback) => {
  const m = fs.readFileSync(file, 'utf8').match(/^#\s+(.+?)\s*$/m)
  return m ? m[1].replace(/[*_`]/g, '') : fallback
}

// "3-2-1-foo" -> ["3","2","1"]; "f-10-telecom" -> ["f","10"]; null if not a numbered section file
const keyOf = (name) => {
  const m = name.match(/^((?:[a-z]|\d+)(?:-\d+)*)-[a-z]/)
  return m ? m[1].split('-') : null
}

const cmpKeys = (a, b) => {
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    if (a[i] === undefined) return -1
    if (b[i] === undefined) return 1
    const [x, y] = [a[i], b[i]]
    const d = /^\d+$/.test(x) && /^\d+$/.test(y) ? Number(x) - Number(y) : x.localeCompare(y)
    if (d) return d
  }
  return 0
}

const toLink = (p) => '/' + path.relative(DOCS_DIR, p).replace(/\\/g, '/').replace(/\.md$/, '').replace(/(^|\/)index$/, '$1')

function pagesIn(dir) {
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md') && f !== 'index.md')
  const pages = files.map((f) => {
    const name = f.replace(/\.md$/, '')
    return { name, key: keyOf(name), file: path.join(dir, f), items: [] }
  })
  const byKey = new Map(pages.filter((p) => p.key).map((p) => [p.key.join('-'), p]))
  const roots = []
  for (const p of pages) {
    const parent = p.key && p.key.length > 1 ? byKey.get(p.key.slice(0, -1).join('-')) : null
    ;(parent ? parent.items : roots).push(p)
  }
  const sort = (list) => {
    list.sort((a, b) => (a.key && b.key ? cmpKeys(a.key, b.key) : a.name.localeCompare(b.name)))
    list.forEach((p) => sort(p.items))
  }
  sort(roots)
  const toItem = (p) => {
    const item = { text: titleOf(p.file, p.name), link: toLink(p.file) }
    if (p.items.length) Object.assign(item, { collapsed: true, items: p.items.map(toItem) })
    return item
  }
  return roots.map(toItem)
}

function groupFor(dir) {
  const index = path.join(dir, 'index.md')
  const items = [
    ...fs.readdirSync(dir, { withFileTypes: true })
      .filter((e) => e.isDirectory())
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((e) => groupFor(path.join(dir, e.name))),
    ...pagesIn(dir),
  ]
  // drop the "Chapter N — " prefix; the page's own H1 keeps it
  const group = { text: titleOf(index, path.basename(dir)).replace(/^Chapter \w+\s+—\s+/, ''), link: toLink(index) }
  if (items.length) Object.assign(group, { collapsed: true, items })
  return group
}

const sidebar = fs.readdirSync(DOCS_DIR, { withFileTypes: true })
  .filter((e) => e.isDirectory() && /^\d/.test(e.name) && !SKIP.has(e.name))
  .sort((a, b) => a.name.localeCompare(b.name))
  .map((e) => groupFor(path.join(DOCS_DIR, e.name)))

fs.writeFileSync(path.join(DOCS_DIR, '.vitepress', 'ig-sidebar.json'), JSON.stringify(sidebar, null, 2) + '\n')
console.log(`Wrote sidebar: ${sidebar.length} chapters`)
