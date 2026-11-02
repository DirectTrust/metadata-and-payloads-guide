# send-workflow-status

Generalized Transaction Definition (GenTXDef)  •  20261102  •  V2  •  Differential working draft

Interpretation: Only transaction-specific constraints are stated here. All unmentioned MAP Framework requirements remain applicable. This GenTXDef does not depend on any UCTXDef. Proposed normative language requires author review.

## 1. Transaction Overview — WHY

send-workflow-status communicates the terminal acceptance or rejection of an originating MAP Structured Payload Package as a whole. It is a separate, correlated Transaction Instance, not a Direct transport receipt, partial-acceptance report, or indication that subsequent clinical work was completed. The reporting SubmissionSet identifies and organizes the current status-report transaction. The original SubmissionSet identification snapshot is the required Primary Information Object: it identifies the earlier package whose outcome is being reported, not a second SubmissionSet for the current transaction.

## 2. Message and Payload Requirements — WHAT

The reporting transaction follows the MAP Structured Payload Package architecture: required human-readable TXT and HTML information objects, exactly one required Primary Information Object, zero or more other Information Objects, and zero or more Provenance Collection Bundles. Unlike other generalized transactions, send-workflow-status SHALL include exactly one reporting FHIR Task. The Primary Information Object SHALL be an identification-only FHIR R4 List of the originating SubmissionSet, with List.mode=snapshot and no List.entry. In XD packaging, the current transaction uses an XD SubmissionSet; its Primary Information Object is a DocumentEntry with mimeType=application/fhir+xml containing that FHIR List. The original clinical payload is not retransmitted solely for correlation. Provenance Collection Bundles remain optional (0..n).

Task.status=completed reports acceptance of the entire originating package into the intended workflow, not completion of subsequent work; Task.status=failed reports rejection of the entire originating package. A failed outcome SHALL include a coded failure reason in Task.output.valueCodeableConcept and human-readable explanatory text, including Task.statusReason as applicable. The Task is the authoritative workflow outcome but is not the Primary Information Object. This transaction SHALL NOT request or trigger another send-workflow-status transaction.

## 3. XD Metadata Guidance — HOW

The following are additional XD metadata and information-object constraints. Unlisted metadata elements inherit their Framework definitions. The SubmissionSet in §3.1 is the current reporting transaction’s XD SubmissionSet, not the originating SubmissionSet identified by the Primary Information Object. A general MAP packaging invariant applies: SubmissionSet.contentTypeCode SHALL match the DocumentEntry.typeCode of the required Primary Information Object (same coded classification and code system). For this transaction, both classify the FHIR List resource; neither classifies acceptance or rejection.

### 3.1 SubmissionSet differential constraints

| Element | Additional send-workflow-status constraint |
| --- | --- |
| purpose | Identify the Shared Activity as send-workflow-status using the approved transaction terminology; align with reporting Task.code. |
| contentTypeCode | SHALL match the Primary Information Object DocumentEntry.typeCode: FHIR List (resource-types). This classifies the original SubmissionSet identification snapshot, not the completed/failed outcome; List.mode distinguishes the snapshot. |
| sourceId / patient identifiers | Identify the current reporting transaction and its Information Source; do not mechanically copy the originating transaction’s sourceId or patient identifiers. The original identifiers are carried within the identification snapshot as applicable. |
| referenceIdList | Preserve applicable typed originating Context Instance identifiers when supplied; do not replace correlation to the originating Transaction Instance. |

### 3.2 DocumentEntry differential constraints

| Submitted object | Additional send-workflow-status constraint |
| --- | --- |
| Primary: originating-package snapshot | Required Primary Information Object: distinct FHIR R4 List, status=current, mode=snapshot, no List.entry; preserve original uniqueId, sourceId, submissionTime, purpose and applicable typed Context identifiers. In XD packaging this is a DocumentEntry with mimeType=application/fhir+xml and typeCode=FHIR List. It is NOT a second XD SubmissionSet. |
| Reporting Task | Exactly one required FHIR Task in the Structured Payload Package, separate from the Primary Information Object. Task.status=completed means whole-package acceptance; failed means rejection. On failure include coded reason in Task.output.valueCodeableConcept and explanatory text including Task.statusReason as applicable. |
| Outcome Provenance Collection Bundle | Optional (0..n) Provenance Collection Bundles, each represented by its own DocumentEntry when included. Each collection Bundle contains 1..n Provenance resources. Included activities and agents SHALL be accurately attributed and consistent with the Task outcome; Provenance.target.identifier, where used for the originating package, matches its business identifier in the snapshot. Do not require Provenance as a condition of a valid report. |
| Human-readable report | Required TXT and HTML information objects within the structured package; report outcome, determination time, originating-package identification, and applicable failure reason. Preserve corresponding human-readable MIME content under Framework rules. |
| Other secondary objects | No additional transaction-specific constraints proposed. |

### 3.3 Terminology and extension disposition

Use the Framework’s terminology and extension rules. Proposed specific bindings carried forward for verification: MAPFailureReasonVS (Extensible) for failed Task outcome; optional Provenance activities from ProvenanceActivityVS and agent roles from ProvenanceAgentTypeVS; and existing Provenance Information Object classification. Informative optional Provenance examples (Workflow outcome / Provenance Activity / Provenance Agent / Provenance Agent Type): completed / receive / receiving system / performer; completed / accept / accepting organization or system / performer; completed / register / registry service / performer; completed / store / repository service / performer; failed / receive / receiving system / performer; failed / reject / rejecting organization or system / performer. These are not required steps or a mandated sequence; register and store may follow acceptance. Confirm canonical URLs and code systems before normative publication. No new SubmissionSet or DocumentEntry extension is proposed.

## 4. FHIR Metadata Guidance — HOW

Apply the same Section 3 constraints through the Framework’s FHIR List, DocumentReference, Task, and extension mappings. In an XD environment the current reporting SubmissionSet remains an XD SubmissionSet; List.mode does not apply to XD SubmissionSet metadata. Only when that current SubmissionSet is represented using the FHIR mapping does its List use mode=working. The separate required Primary Information Object is always the originating SubmissionSet identification snapshot (FHIR List, mode=snapshot), carried as a DocumentEntry with mimeType=application/fhir+xml in XD. Under the FHIR mapping, preserve the same primary-object classification invariant: the reporting SubmissionSet content classification corresponds to the Primary Information Object DocumentEntry.typeCode. The Task is required, but is not primary.

| XD differential | FHIR expression / verification |
| --- | --- |
| Report SubmissionSet purpose and source | Current reporting transaction metadata, distinct from original identifiers. In XD this is an XD SubmissionSet; in FHIR mapping use List.mode=working. Its contentTypeCode SHALL match the primary snapshot DocumentEntry.typeCode (FHIR List). |
| Primary identification snapshot | Required Primary Information Object: FHIR R4 List with mode=snapshot, no List.entry; in XD a DocumentEntry with mimeType=application/fhir+xml and typeCode=FHIR List. Preserve originating identifiers; not another current SubmissionSet. |
| Reporting Task | Exactly one required FHIR Task, separate from Primary Information Object; terminal completed/failed outcome and originating correlation. Failed outcome includes coded reason and explanatory text. |
| Outcome Provenance | Optional 0..n Provenance Collection Bundles, each with 1..n Provenance resources; correlate assertions to relevant originating information and avoid claims inconsistent with Task.status. |
| Submitted-object metadata | Apply the Framework DocumentReference mappings and membership conventions without introducing FHIR-only semantics. |

## 5. Context IG Guidance

TBD — pending the applicable Context IG specification. No additional Context IG-specific constraints are asserted.

## 6. Technical Actor Functional Requirements — WHO DOES WHAT

Sender Actor: ensure the report reflects an actually determined terminal whole-package outcome, includes the required original SubmissionSet identification snapshot as Primary Information Object, exactly one correlated Task, required human-readable TXT and HTML objects, and optional Provenance only when available. Ensure the current reporting SubmissionSet and originating snapshot identifiers are not conflated; do not request recursive status reporting.

Receiver Actor: attempt to correlate the reported outcome to a known originating Transaction Instance using the original SubmissionSet identification snapshot and applicable correlation identifiers, distinguishing the originating package’s disposition from receipt or processing of this report. If no reliable correlation can be established, the Receiver Actor SHALL record an unmatched workflow-status report anomaly, SHALL NOT apply the outcome to an unrelated or unverified Transaction Instance, and SHALL NOT initiate another send-workflow-status report. Retention of the report and related information is governed by applicable local policy. The unmatched anomaly does not alter the outcome asserted by the reporting Task.

## 7. Transaction-Specific Processing — WHAT IS SPECIAL

| Situation | Transaction-specific handling |
| --- | --- |
| Whole-package rejection | Report Task.status=failed and an applicable coded failure reason; do not represent rejection as successful workflow acceptance. |
| Patient or required Context unresolved | Report the corresponding applicable anomaly where it prevents acceptance; do not manufacture a local patient identifier. |
| No eligible reporting endpoint | Do not dispatch to an unverified destination; record inability to fulfill the reporting obligation without changing the originating disposition. |
| Missing expected report | Treat the originating outcome as unconfirmed for administrative follow-up, not as accepted, rejected or undelivered. Correlate a later report to the original transaction. |
| No recursive status | A send-workflow-status report must not request or trigger a subsequent send-workflow-status report. |
| Unmatched received workflow-status report | Record an unmatched workflow-status report anomaly; do not apply the reported outcome to any unrelated or unverified originating transaction and do not trigger a further status report. Retention follows applicable local policy. If subsequently matched, reconcile only after validating correlation. |

The reporting interval, endpoint fallback behavior, intermediary handling and status-Provenance obligation require explicit reconciliation with current Framework rules before publication; no universal 60-minute default is asserted in this draft.

## 8. Relevant Examples — SHOW ME

Informative acceptance example: A receiver accepts an originating package. Its subsequent send-workflow-status transaction has a new reporting XD SubmissionSet (or FHIR List with mode=working in the FHIR mapping). The required Primary Information Object is an identification snapshot of the original SubmissionSet (FHIR List with mode=snapshot), and the required separate Task has status=completed. Optional Provenance may document receive, accept, register, or store activities with their actual agents and approved agent types; registration and storage need not be complete for acceptance.

Informative rejection example: A receiver cannot match the patient and rejects the entire originating package. The reporting transaction carries the required original SubmissionSet identification snapshot (FHIR List, mode=snapshot) as Primary Information Object and exactly one Task with status=failed, a coded patient-not-found reason where supported, and explanatory text. Optional Provenance may document receive and reject activities. The reporter does not invent a sourcePatientId. If the report receiver cannot correlate the report to a prior transaction, it records an unmatched-report anomaly without changing the Task’s asserted outcome or issuing another status report.

## Editorial verification and approval gates (not part of normative GenTXDef)

- Validate the canonical send-workflow-status purpose code, failure-reason ValueSet, Provenance activity binding and Provenance Information object type.

- Confirm exact XD-to-FHIR mapping paths for the primary List snapshot, Task, Provenance Bundle, and typed correlation identifiers.

- Confirm the optional 0..n Provenance Collection Bundle model and the approved ProvenanceActivityVS / ProvenanceAgentTypeVS codes used in informative examples; do not convert examples into mandatory workflow steps.

- Resolve endpoint routing, no-Task fallback, intermediary endpoint accumulation, and whether any reporting-interval default belongs in this parent definition.

- Validate whether the proposed Section 6 and 7 obligations are truly differential rather than already covered by the Framework.
