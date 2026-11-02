# send-documents

MAP RTC • Generalized Transaction Definition • 20261101 V1 • Differential editorial working draft

This GenTXDef states only constraints specific to send-documents. The MAP Framework supplies the inherited requirements. Existing TX5 material was used to identify potential reusable constraints; this parent does not depend on any UCTXDef.

## 1. Transaction Overview — WHY

send-documents exchanges one or more independently identifiable documents for an authorized receiving workflow. It can be used for an unsolicited communication or a response to a prior request; the type of document and the associated workflow do not redefine this transaction.

## 2. Message and Payload Requirements — WHAT

Each send-documents transaction designates one primary document and may include secondary documents supporting the same requested activity. A Workflow Activity Task is optional (zero or one). Each submitted document retains its own identity, media type, clinical authorship, and applicable content-profile requirements. Document content is governed by its own specification; this GenTXDef governs exchange-specific constraints.

## 3. XD Metadata Guidance — HOW

Only the following differences from the Framework metadata inventories are proposed. Elements not listed are governed by the Framework without additional constraints.

### 3.1 SubmissionSet metadata and extensions

| Element / object | Additional send-documents constraint (proposed) |
| --- | --- |
| purpose | Fixed transaction code send-documents from the applicable MAP transaction CodeSystem. When a Task is present, its Task.code identifies the same transaction. |
| contentTypeCode | Derive from the designated primary DocumentEntry.typeCode, rather than using send-documents as a content classification. |
| title / description | When populated, characterize the document package and primary document; do not imply that the package title replaces any individual document title. |
| sourceId / author | Identify the package source and author independently of the clinical authors of submitted documents. Do not overwrite source document authorship with the transmitting organization. |
| Patient Info / patientId | Derive patient matching evidence from authoritative source information; use a recipient-appropriate or agreed-domain patientId only when known. Do not populate it with a sender-local identifier merely to satisfy a field. |
| Context identifiers | Carry applicable established typed Context Instance identifiers, where available; a document exchange does not itself establish closure of a continuing request or referral. |
| Extensions | Use the existing MAP SubmissionSet extension slots and bindings; no new send-documents-specific extension is proposed. |

### 3.2 DocumentEntry metadata and document relationships

| Element / object | Additional send-documents constraint (proposed) |
| --- | --- |
| Primary DocumentEntry | Exactly one submitted document is designated primary for the requested activity. Its typeCode, formatCode, mimeType, uniqueId, title, and author describe the actual document, not the transaction. |
| Secondary DocumentEntry(s) | Each submitted secondary document has its own DocumentEntry, identity, type classification, media type and provenance. Secondary designation does not change the clinical meaning or authorship of the document. |
| DocumentEntry.typeCode | Bind to the actual document type from the applicable document terminology/profile; do not use send-documents as a document type. |
| DocumentEntry.formatCode | Use the applicable content profile’s format identification when specified; do not assign a universal formatCode to all documents. |
| DocumentEntry.creationTime — CDA | For a CDA representation, prefer the version-appropriate Assembler/time or Composer/time when it identifies assembly of the exchanged representation. If absent, use ClinicalDocument/effectiveTime as a fallback when available; preserve which source was used. Do not substitute the transmission or encounter time. |
| DocumentEntry.uniqueId — CDA | Map to the current ClinicalDocument/id; preserve setId/versionNumber and relatedDocument semantics separately when present. |
| DocumentEntry.author — CDA | Preserve the actual CDA clinical author(s) and represented organization(s), independently of package source, sender, and recipient. |
| DocumentEntry.serviceStartTime / serviceStopTime — CDA | Where supplied and applicable, derive from documentationOf/serviceEvent effectiveTime boundaries, not from document assembly time. |
| DocumentEntry.sourcePatientId / sourcePatientInfo — CDA | Derive from recordTarget/patientRole source identifiers and demographics with assigning authority; do not substitute a newly invented recipient-domain identifier. |
| Human-readable information object(s) | Identify the accompanying communication separately from the clinical documents; preserve identical copies as required by the Framework. |
| Provenance information object(s) | Optional unless required by an applicable more specific specification; when supplied, preserve independently attributable assertions without replacing CDA header provenance. |

### 3.3 Terminology and extensions

The document type, document format, and clinical classification are determined by the submitted document and applicable content specification. No send-documents-specific SubmissionSet or DocumentEntry extension is introduced. Verify exact binding identifiers and the CDA assembly-time precedence against the current Framework before normative approval.

## 4. FHIR Metadata Guidance — HOW

Apply the same Section 3 constraints using the Framework FHIR List, DocumentReference, and extension mappings. The FHIR metadata option does not convert CDA or other submitted documents into FHIR clinical resources, change their bytes, or change their document identity.

| Element / object | Additional send-documents constraint (proposed) |
| --- | --- |
| SubmissionSet List | Carry send-documents transaction purpose; derive package content classification from the primary document and preserve distinct package and clinical author identities. |
| Primary and secondary DocumentReferences | Represent each submitted document as its own DocumentReference with the corresponding type, content format, identifiers, author, dates, and package membership. Distinguish the designated primary object. |
| CDA content | Preserve CDA XML and document header semantics; use the same source-to-metadata mappings as the XD option. |
| Task and Provenance | When present, represent them as distinct information objects under the common Framework rules; do not conflate them with clinical documents. |
| Extensions | Use the Framework-defined extension mappings only; no independent FHIR-only send-documents constraints are proposed. |

## 5. Context IG Guidance

TBD — pending the applicable Context IG specification. No additional Context IG requirements are asserted.

## 6. Technical Actor Functional Requirements — WHO DOES WHAT

Sender Actor: Proposed additional obligation — designate the primary document and preserve each submitted document’s source identity, content, authorship, and applicable metadata when packaging or transforming it. Receiver Actor: Proposed additional obligation — evaluate the required primary document and all included supporting documents as the intended workflow unit before determining whole-package acceptance. Common Sender/Receiver requirements are inherited and not repeated.

## 7. Transaction-Specific Processing — WHAT IS SPECIAL

A missing primary document, unsupported required document profile, defective mandatory document content, or unresolved inconsistency between document content and its metadata may prevent acceptance. The recipient evaluates the documents as one independently processable workflow unit. A defect preventing patient association of any included document can prevent whole-package acceptance; the outcome should identify the affected document when known. Omission of an optional document or optional content does not by itself justify rejection.

For a solicited response, retain established request/Context correlation as applicable. Each subsequent document exchange is a new Transaction Instance. Acceptance of the document package does not itself establish completion of a referral, order, or other continuing workflow. Apply common workflow-status and anomaly-reporting requirements without repeating them here.

## 8. Relevant Examples — SHOW ME

Informative example A: A sender communicates one CDA clinical summary as the primary document. SubmissionSet.purpose identifies send-documents, while the primary DocumentEntry.typeCode identifies the actual summary type. Its CDA authorship and document identifier are preserved.

Informative example B: A sender communicates a primary referral document with a separate supporting document. Each document has its own DocumentEntry and clinical identity. The package is evaluated as one workflow unit, without making the supporting document the transaction identity.

## Editorial review and source disposition — not normative

- Promoted as proposed reusable concepts: one primary document; optional secondary documents; optional Task; independent package and document authorship; document-specific classification; CDA document identity and timestamp mapping; whole-package document association.

- Not promoted: pregnancy, birth, antepartum, perinatal Context, specific clinical document types, maternal examples, and use case-specific workflow expectations.

- Inherited rather than repeated: MIME packaging, human-readable copy preservation, general patient matching, Context identifier mechanics, Task correlation, workflow status, provenance packaging, and common metadata inventories.

- Open verification: exact CDA creationTime precedence and whether it is already normative in Framework 3.6.4; precise primary designation mapping; current code system canonical; whether optional Task cardinality is already fully specified in Framework; role of non-CDA document formats.
