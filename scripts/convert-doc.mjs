// One-time migration script: converts the pandoc-generated Markdown export of the
// "Framework for Metadata and Payloads via the Direct Standard" Google Doc into
// per-page VitePress Markdown files, remapping heading levels per page and
// extracting the embedded images into docs/public/images/<slug>/.
//
// Usage: node scripts/convert-doc.mjs
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.resolve(__dirname, '..')
// Pandoc-converted export of the source Google Doc (DS2024-07-100-2026):
//   pandoc source.docx -f docx -t gfm --extract-media=scratchpad -o scratchpad/doc.md --wrap=none
// where source.docx is that Google Doc exported as "Microsoft Word (.docx)".
// Kept outside version control (see .gitignore) — regenerate before re-running this script.
const SRC_DIR = path.join(REPO_ROOT, 'scratchpad')
const SRC_MD = path.join(SRC_DIR, 'doc.md')
const SRC_MEDIA = path.join(SRC_DIR, 'media')
const DOCS_DIR = path.join(REPO_ROOT, 'docs')
const IMAGES_ROOT = path.join(DOCS_DIR, 'public', 'images')

const raw = fs.readFileSync(SRC_MD, 'utf8')
const lines = raw.split('\n')

// 1-indexed, [start, end) line ranges taken from the source doc.md
const PAGES = [
  { slug: 'overview', title: 'Metadata and Payload Overview', start: 254, end: 373, shift: 0 },
  { slug: 'direct-secure-messaging', title: 'About Direct Secure Messaging', start: 373, end: 460, shift: 1,
    images: [
      { num: 13, caption: 'High-level Direct message structure showing the SMTP message header, MIME Part metadata, and the human-readable and Context IG metadata content container.' },
      { num: 2, caption: 'Direct message metadata model examples across Context IG, XD (XDR/XDM), and FHIR representations, showing where SMTP transport metadata, human-readable content, and structured metadata live in each.' },
      { num: 8, caption: 'Additional Direct message metadata model examples across Context IG, XD, and FHIR, showing FHIR Resource content nested in the payload.' },
      { num: 10, caption: 'Step-by-step S/MIME signing and encryption flow for a Direct message, from cleartext message through digital signature, session-key encryption, SMTP transport, and receiver-side decryption and validation.' },
      { num: 12, caption: 'End-to-end Direct Secure Messaging flow between two HISPs, showing the Content Creator/Message Sender and Message Receiver/Content Consumer roles alongside the S/MIME signing and encryption steps.' }
    ] },

  { slug: 'use-case-framework', title: 'Use Case Framework', start: 460, end: 522, shift: 0 },
  { slug: 'actor-transaction-framework', title: 'Actor and Transaction Framework', start: 522, end: 528, shift: 1 },
  { slug: 'business-actors-framework', title: 'Business Actors Framework', start: 528, end: 595, shift: 2 },
  { slug: 'system-actors-framework', title: 'System Actors Framework', start: 595, end: 636, shift: 2 },
  { slug: 'technical-actor-framework', title: 'Technical Actor Framework', start: 636, end: 708, shift: 2,
    images: [
      { num: 9, caption: 'Push and pull transaction patterns for non-intermediated and intermediated message exchange, shown for both unsolicited (send) and solicited (request/response) communication.' }
    ] },
  { slug: 'message-transaction-framework', title: 'Message Transaction Framework', start: 708, end: 741, shift: 2 },
  { slug: 'technical-use-case-framework', title: 'Technical Use Case Framework', start: 741, end: 782, shift: 2 },
  { slug: 'actor-transaction-diagrams', title: 'Actor Transaction Diagrams', start: 782, end: 810, shift: 2,
    images: [
      { num: 5, caption: 'Understanding the difference between a Push transaction and a Pull transaction between two System Actors.' },
      { num: 6, caption: 'Two Push transactions used asynchronously to emulate a Pull transaction (a request followed by a response).' },
      { num: 11, caption: 'Some use cases require only a single Push transaction to complete the information exchange.' },
      { num: 1, caption: 'A Two System Actor formation uses one of these unsolicited (send) or solicited (request/response) actor-transaction patterns.' }
    ] },
  { slug: 'transaction-summary', title: 'Transaction Summary', start: 810, end: 832, shift: 2 },

  { slug: 'message-payload-framework',
    title: 'Framework for Specifying Message Payload, Metadata, and Technical Actor Functional Requirements',
    start: 832, end: 844, shift: 0 },
  { slug: 'message-metadata', title: 'Message Metadata', start: 844, end: 964, shift: 1 },
  { slug: 'payload-components', title: 'Payload Components', start: 964, end: 1075, shift: 1 },
  { slug: 'submissionset-metadata', title: 'SubmissionSet Metadata', start: 1075, end: 1259,
    overrides: { 1075: 0, 1081: 1 } },
  { slug: 'documententry-metadata', title: 'DocumentEntry Metadata', start: 1259, end: 1490, shift: 4 },
  { slug: 'functional-requirements', title: 'Functional Requirements', start: 1490, end: 1587, shift: 1 },

  { slug: 'patient-matching', title: 'Patient Demographics: Foundations for Patient Matching', start: 1587, end: 1648, shift: 0 },
  { slug: 'endpoint-use-case-mapping', title: 'Mapping Endpoint Use Case to SubmissionSet.contentTypeCode Metadata', start: 1648, end: 1662, shift: 0 },
  { slug: 'endpoint-capability-declaration', title: 'Endpoint Capability Declaration Document', start: 1662, end: 1670, shift: 0 },

  { slug: 'specification-references', title: 'Specification References', start: 1672, end: 1686, shift: 1 },
  { slug: 'value-sets-index', title: 'Value Sets Index', start: 1686, end: 1739, shift: 1 },
  { slug: 'fhir-over-direct', title: 'FHIR over Direct Metadata and Payload Guidance and Mapping Instructions', start: 1739, end: 1753, shift: 1 },
  { slug: 'three-system-actor-formations', title: 'Three (or more) System Actor Formations', start: 1753, end: 1779, shift: 1,
    images: [
      { num: 7, caption: 'Eight intermediated actor-transaction patterns (Patterns #1-8) for a Three System Actor formation, covering unsolicited and solicited exchange through an Intermediary System.' },
      { num: 14, caption: 'Example event notification workflows via Direct, showing how an Intermediary relays ADT event notifications from a sending Organization to a Receiving Edge System.' }
    ] },
  { slug: 'xdm-documententry-objecttype', title: 'Clarification of IHE XDM DocumentEntry.objectType', start: 1779, end: 1809, shift: 1 },

  { slug: 'patient-demographics-coding', title: 'Patient Demographics Coding and Representation', start: 1809, end: 1852, shift: 1 },
  { slug: 'sample-patient-demographic-representations', title: 'Sample Patient Demographic Representations', start: 1852, end: 1856, shift: 2 },
  { slug: 'v2-pid-segment', title: 'V2 PID Segment', start: 1856, end: 2033, shift: 3 },
  { slug: 'cda-recordtarget-structure', title: 'CDA RecordTarget Structure', start: 2033, end: 2119, shift: 3 },
  { slug: 'fhir-patient-resource', title: 'FHIR Patient Resource', start: 2119, end: 2273, shift: 3 },
  { slug: 'patient-identifiers', title: 'Patient Identifiers', start: 2273, end: 2338, shift: 2 },
  { slug: 'patient-identifier-list', title: 'Patient Identifier List', start: 2338, end: 2417, shift: 2,
    images: [
      { num: 3, caption: 'Example FHIR Patient.identifier entry representing a Medical Record Number (MRN) using the v2-0203 identifier type code system.' }
    ] },
  { slug: 'patient-name', title: 'Patient Name', start: 2417, end: 2529, shift: 2 },
  { slug: 'patient-date-of-birth', title: 'Patient Date of Birth', start: 2529, end: 2533, shift: 2 },
  { slug: 'patient-administrative-gender', title: 'Patient Administrative Gender (Sex)', start: 2533, end: 2554, shift: 2 },
  { slug: 'patient-address', title: 'Patient Address', start: 2554, end: 2603, shift: 2 },
  { slug: 'patient-telecom', title: 'Patient Telecom', start: 2603, end: 2644, shift: 2 },
  { slug: 'patient-race-ethnicity', title: 'Patient Race and Ethnicity', start: 2644, end: 2864,
    overrides: { 2644: 1, 2672: 2, 2689: 3, 2778: 2 },
    images: [
      { num: 4, caption: 'CDA RecordTarget/Patient class model showing raceCode and ethnicGroupCode attributes drawn from the CDCREC code system, alongside PatientRole and LanguageCommunication structures.' }
    ] },
  { slug: 'patient-preferred-language', title: 'Patient Preferred Language', start: 2864, end: 2896, shift: 2 }
]

// Word tables with "repeat header row" enabled on every row make pandoc emit
// every row as <th> inside <thead>, with an empty <tbody> — collapsing the
// whole table into one solid header-styled block. Demote every row after the
// first back into a normal <tbody> of <td> cells.
function fixBrokenHeaderTables(markdown) {
  return markdown.replace(
    /<thead>([\s\S]*?)<\/thead>\s*<tbody>\s*<\/tbody>/g,
    (_match, theadContent) => {
      const rows = theadContent.match(/<tr>[\s\S]*?<\/tr>/g) || []
      if (rows.length <= 1) return _match
      const [headerRow, ...bodyRows] = rows
      const bodyHtml = bodyRows
        .map((row) => row.replace(/<th>/g, '<td>').replace(/<\/th>/g, '</td>'))
        .join('\n')
      return `<thead>\n${headerRow}\n</thead>\n<tbody>\n${bodyHtml}\n</tbody>`
    }
  )
}

function stripFormattingSpans(text) {
  return text
    .replace(/<span class="mark">([\s\S]*?)<\/span>/g, '$1')
    .replace(/<mark>([\s\S]*?)<\/mark>/g, '$1')
    .replace(/<u>([\s\S]*?)<\/u>/g, '$1')
}

const IMG_RE = /<img\b[^>]*?\bsrc="pandoc-out\/media\/image(\d+)\.(png|jpe?g|gif|svg)"[^>]*?(?:\balt="([^"]*)")?[^>]*>/g

fs.mkdirSync(DOCS_DIR, { recursive: true })

for (const page of PAGES) {
  const { slug, title, start, end, shift = 0, overrides = {}, images = [] } = page
  const slice = lines.slice(start - 1, end - 1)

  const usedImages = new Map(images.map((img, i) => [img.num, { destIndex: i + 1, caption: img.caption }]))

  const outLines = slice.map((line, i) => {
    const absoluteLine = start + i
    const headingMatch = line.match(/^(#{1,6})\s+(.*)$/)
    let result = line

    if (headingMatch) {
      const origLevel = headingMatch[1].length
      const text = headingMatch[2].trim()
      const newLevel = Object.prototype.hasOwnProperty.call(overrides, absoluteLine)
        ? overrides[absoluteLine]
        : origLevel - shift
      if (newLevel < 1) {
        // Demote to a bold lead-in paragraph rather than an invalid heading level
        result = `**${text}**`
      } else {
        result = `${'#'.repeat(newLevel)} ${text}`
      }
    }

    result = stripFormattingSpans(result)

    result = result.replace(IMG_RE, (_m, num) => {
      const n = Number(num)
      const entry = usedImages.get(n)
      if (!entry) {
        // Image present on the page but not declared in PAGES config — skip silently
        return ''
      }
      const ext = path.extname(fs.readdirSync(SRC_MEDIA).find((f) => f.startsWith(`image${n}.`))).slice(1)
      const destName = `${entry.destIndex}.${ext === 'jpeg' ? 'jpg' : ext}`
      const srcFile = path.join(SRC_MEDIA, `image${n}.${ext}`)
      const destDir = path.join(IMAGES_ROOT, slug)
      fs.mkdirSync(destDir, { recursive: true })
      fs.copyFileSync(srcFile, path.join(destDir, destName))
      const safeAlt = entry.caption.replace(/"/g, "'")
      return `\n\n![${safeAlt}](/images/${slug}/${destName})\n\n*${entry.caption}*\n`
    })

    return result
  })

  let markdown = fixBrokenHeaderTables(outLines.join('\n').trim())
  const yamlTitle = /[:#]/.test(title) ? `"${title.replace(/"/g, '\\"')}"` : title
  const frontmatter = `---\ntitle: ${yamlTitle}\n---\n\n`
  const outPath = path.join(DOCS_DIR, `${slug}.md`)
  fs.writeFileSync(outPath, frontmatter + markdown + '\n')
  console.log(`wrote ${path.relative(REPO_ROOT, outPath)}${images.length ? ` (${images.length} image${images.length > 1 ? 's' : ''})` : ''}`)
}

console.log('\nDone.')
