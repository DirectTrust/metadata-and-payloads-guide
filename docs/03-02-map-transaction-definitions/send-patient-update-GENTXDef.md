# send-patient-update

MAP Reusable Transactions Catalog • Generalized Transaction Definition • 20261101 V1 • Editorial draft

Differential specification: common MAP Framework requirements are inherited and not repeated. The maternal-health TX7 definition was reviewed as candidate source material; this parent has no dependency on that or any other UCTXDef.

## 1. Transaction Overview — WHY

send-patient-update communicates an explicit change to information describing an existing patient, enabling an authorized Information Recipient to reconcile that change with its existing patient record. It is not a patient-record creation, merge, clinical encounter update, or indiscriminate full-record replacement.

## 2. Message and Payload Requirements — WHAT

The primary information object expresses identifiable additions, removals, or replacements of supported patient information. The update SHALL provide sufficient pre-update identity evidence for the recipient to match the existing patient, and SHALL distinguish prior values from proposed new values. The representation may be a supported HL7 V2 patient-update message or a structured FHIR change list; a selected representation SHALL preserve the same operation semantics.

Candidate scope for parent review: demographic attributes and patient identifiers; exclude coverage/account identifiers, care-team and relationship updates, encounter/clinical updates, and merges. This scope is supported by the reviewed TX7 source but needs parent-level approval.

## 3. XD Metadata Guidance — HOW

### 3.1 SubmissionSet differential constraints

| Metadata / object | Proposed differential constraint | Disposition |
| --- | --- | --- |
| purpose | send-patient-update (transaction identity); Task.code aligns when a Task is present. | Promote: core invariant |
| contentTypeCode | Patient Update classification; source uses temporary DT20260927-2 pending a permanent code. | Promote concept; verify binding |
| sourcePatientId | Identify the patient using pre-update source identifier and assigning authority; do not substitute a newly asserted identifier. | Promote |
| sourcePatientInfo | Describe verified pre-update demographics supporting matching; do not substitute proposed updated values. | Promote |
| patientId | Recipient-known/agreed exchange-domain identifier only when authoritative and suitable. | Promote |
| referenceIdList | Use applicable established typed Context identifiers only; do not manufacture an episode for a demographic change. | Promote as differential clarification |

### 3.2 DocumentEntry differential constraints

| Metadata / object | Proposed differential constraint | Disposition |
| --- | --- | --- |
| Primary object typeCode | Patient Update; source currently uses DT20260927-2 from DTTemporaryCodeCS. | Verify exact code |
| Primary mimeType | Supported HL7 V2 message or FHIR List in XML/JSON; one primary update object per transaction. | Promote representation choice |
| Primary creationTime | Time update object was assembled; source change/effective time remains distinct when available. | Promote |
| Primary sourcePatientInfo / sourcePatientId | Carry reliable pre-update matching evidence, consistent with SubmissionSet. | Promote |
| Updated Patient secondary object | For FHIR change-list representation, exactly one updated Patient information object; classify as Patient, not clinical document. | Promote for FHIR option |
| Previous Patient evidence | Preserve prior-state support for Remove targets; XD source uses contained previous Patient in the change List rather than a separate DE. | Promote after reference validation |
| Provenance objects | Optional independent source/transform provenance; no blanket provenance obligation from this parent. | Keep optional; verify classification |
| Human-readable communication | Show field-level operations, prior/new values where known, identifier authorities and source timing. | Promote differential coverage |

### 3.3 Terminology and extension specialization

The reviewed TX7 uses DT20260927-2 (Patient Update) in DTTemporaryCodeCS, and Patient from the FHIR resource-types code system for the secondary updated Patient. It does not establish a permanent LOINC classification or a supported legacy formatCode. These bindings must be verified against the current vocabulary package before approval. No new MAP metadata extension is proposed here.

## 4. FHIR Metadata Guidance — HOW

Apply the same Section 3 semantics using the Framework’s FHIR metadata representation. The FHIR change-list alternative uses a primary FHIR List plus a required updated Patient, preserving a pre-update Patient snapshot for matching/removal evidence. The List represents discrete Add/Remove operations; a replacement is a linked Remove/Add pair, not an implicit overwrite. The source UCTXDef specifies targetElement-based field targeting and correction grouping; exact extension/profile constraints require artifact verification.

In the outer FHIR Collection Bundle, the primary change List and updated Patient are separate information objects with corresponding DocumentReferences; supporting previous-state resources follow the representation’s containment/reference rules. Do not flatten independent Provenance Collection Bundles or treat supporting resources as additional clinical documents.

## 5. Context IG Guidance

TBD — pending the applicable Context IG specification. No use case-specific Context constraint is introduced.

## 6. Technical Actor Functional Requirements — WHO DOES WHAT

Sender Actor: SHALL establish reliable evidence of the actual change and its prior state, preserve identifier type/authority, and communicate explicit operations without treating a populated source field as proof of change.

Receiver Actor: SHALL establish an unambiguous match to an existing patient before applying a change; SHALL validate operation targets and occurrence context; SHALL NOT replace an entire patient record based on a partial update. Common acceptance, rejection and workflow-status obligations remain inherited.

## 7. Transaction-Specific Processing — WHAT IS SPECIAL

An unresolved patient match, ambiguous identifier authority, missing reliable prior value needed for removal, or conflicting Remove target must not be resolved by guessing or overwriting unrelated data. Corrections require linked Remove/Add validation; an invalid replacement must not leave a singleton field cleared. Add must not duplicate an existing occurrence. Unmentioned or omitted fields are not implicitly removed. Repeated or already-applied identical changes may be treated idempotently when identity and effect are established.

For HL7 V2, the reviewed source distinguishes A08 (update values, not inherently a before/after change log) from A47 (correction of an incorrectly assigned PID-3 identifier using MRG-1/PID-3, not a patient merge). Version/profile-specific omission, clearing and repetition rules require explicit selection; do not assume all A08 fields changed. These are proposed parent representation rules, not inherited maternal-specific workflow obligations.

## 8. Relevant Examples — SHOW ME

Informative example: Correct an existing patient date of birth. Source evidence establishes the prior value; the update identifies removal of that value and addition of the corrected value. The receiving system matches the existing patient using prior-state identifiers before applying the correction.

Informative example: Add a newly known identifier without fabricating an old value. An unrelated omitted telephone field remains unchanged.

## Source review and promotion ledger — editorial, nonnormative

| Metadata / object | Proposed differential constraint | Disposition |
| --- | --- | --- |
| Demographics / patient identifiers | General change semantics, prior-state matching, add/remove/correction operations. | Promoted as proposed parent invariant |
| A08/A47 and FHIR change List | Representation alternatives and correction evidence; profile-specific technical details. | Promoted subject to profile verification |
| Temporary Patient Update code | DT20260927-2, DTTemporaryCodeCS; no permanent LOINC. | Provisional binding |
| Perinatal Context code | Maternal episode use is situational, not a general patient-update requirement. | Not promoted |
| Recipient-specific routing | One recipient-specific transaction; independent correlation and outcomes. | Mostly inherited Framework; not repeated |
| TX8 fallback and endpoint rules | Workflow-status reporting governed by Framework and send-workflow-status. | Not copied into parent |
| Constituent actor SHALLs | Old Content Creator / Consumer responsibilities reorganized under grouped Sender / Receiver. | Reconciled |
| Local clinical examples | Maternal scenarios do not define the parent’s applicability. | Not promoted |

Verification required before normative publication: compare all proposed constraints to the current Framework Chapter 3; validate terminology, exact List profile, targetElement extension, containment/reference rules, and approved patient-update scope. The source was cc-maternal-health-birth TX7 revision v12 (2026-10-14), extracted from the provided transaction-definition repository.
