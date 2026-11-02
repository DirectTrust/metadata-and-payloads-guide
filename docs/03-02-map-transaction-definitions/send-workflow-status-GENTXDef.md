# send-workflow-status — Generalized Transaction Definition

## 1. Transaction Overview — WHY

send-workflow-status communicates the terminal acceptance or rejection of an originating MAP Structured Payload Package as a whole. It is a separate, correlated Transaction Instance, not a Direct transport receipt, partial-acceptance report, or indication that subsequent clinical work was completed. The reporting SubmissionSet identifies and organizes the current status-report transaction. The original SubmissionSet identification snapshot is the required Primary Information Object: it identifies the earlier package whose outcome is being reported, not a second SubmissionSet for the current transaction.

## 2. Transaction-Specific Processing — WHAT IS SPECIAL

Report correlation SHALL use the original SubmissionSet identification snapshot (List.mode=snapshot) as the Primary Information Object. The four correlation elements are: (1) original SubmissionSet.uniqueId → typed List.identifier; (2) original SubmissionSet.purpose → List.extension[map-submission-purpose].valueCodeableConcept; (3) original SubmissionSet.sourcePatientId → List.extension[map-submissionset-sourcePatientId]; and (4) original SubmissionSet.intendedRecipient → List.extension[ihe-intendedRecipient]. The original sourcePatientId, not exchange-domain patientId (List.subject), is the primary patient correlation identifier. When an original sourcePatientId or intendedRecipient was legitimately absent, the receiver SHALL use available identifiers to assess reliable correlation; if reliable correlation cannot be established, the report SHALL be recorded as an unmatched administrative event and SHALL NOT change an unverified originating transaction.

A send-workflow-status transaction reverses the business participation roles: the originating Intended Recipient is the Information Source of the report, and the originating Information Source is the Intended Recipient of the report. The report SHALL carry the original use case identifier in x-direct-useCase. The report is a separate Transaction Instance and its current SubmissionSet identifiers SHALL NOT be conflated with those in the original snapshot.

| Situation | Transaction-specific handling |
| --- | --- |
| Whole-package rejection | Report Task.status=failed and an applicable coded failure reason; do not represent rejection as successful workflow acceptance. |
| Patient or required Context unresolved | SHALL match Primary Information Object DocumentEntry.typeCode, including code and code system: FHIR List (resource-types). A GenTXDef does not override the Framework default; only an explicit UCTXDef may define an alternative. |
| No eligible reporting endpoint | Identify the current reporting transaction separately from the original. The original sourcePatientId is preserved in the snapshot through List.extension[map-submissionset-sourcePatientId], not List.subject (which represents exchange-domain patientId). |
| Missing expected report | Treat the originating outcome as unconfirmed for administrative follow-up, not as accepted, rejected or undelivered. Correlate a later report to the original transaction. |
| No recursive status | A send-workflow-status report must not request or trigger a subsequent send-workflow-status report. |
| Unmatched received workflow-status report | Record an unmatched workflow-status report anomaly; do not apply the reported outcome to any unrelated or unverified originating transaction and do not trigger a further status report. Retention follows applicable local policy. If subsequently matched, reconcile only after validating correlation. |

Reporting intervals, eligible endpoint selection, no-Task fallback, and intermediary endpoint accumulation follow the common Framework rules. No universal 60-minute deadline is imposed. This GenTXDef does not request a workflow-status report in response to its own outcome.

## 3. Direct Message and Structured Payload Requirements — WHAT

The reporting transaction follows the MAP Structured Payload Package architecture: required human-readable TXT and HTML information objects, exactly one Primary Information Object, exactly one Workflow Activity Task, zero other secondary information objects, and zero or more optional Provenance Collection Bundles. The Primary Information Object SHALL be an identification-only FHIR R4 List of the originating SubmissionSet with List.mode=snapshot and no List.entry. In XD packaging, the current transaction uses an XD SubmissionSet; its Primary Information Object is a DocumentEntry with mimeType=application/fhir+xml containing that FHIR List. The original payload SHALL NOT be retransmitted solely for correlation.

Task.status=completed reports acceptance of the entire originating package into the intended workflow, not completion of subsequent work; Task.status=failed reports rejection of the entire originating package. A failed outcome SHALL include explanatory Task.statusReason.text; a coded failure reason in Task.output.valueCodeableConcept SHOULD be provided using the Extensible MAPFailureReasonVS binding. The Task is the authoritative workflow outcome but is not the Primary Information Object. This transaction SHALL NOT request or trigger another send-workflow-status transaction.

## 4. XD Metadata Guidance — HOW

The following are additional XD metadata and information-object constraints. Unlisted metadata elements inherit their Framework definitions. The SubmissionSet in §4.1 is the current reporting transaction’s XD SubmissionSet, not the originating SubmissionSet identified by the Primary Information Object. A general MAP packaging invariant applies: SubmissionSet.contentTypeCode SHALL match the DocumentEntry.typeCode of the required Primary Information Object (same coded classification and code system). For this transaction, both classify the FHIR List resource; neither classifies acceptance or rejection.

### 4.1 SubmissionSet differential constraints

| Element | Additional send-workflow-status constraint |
| --- | --- |
| purpose | Required identification-only FHIR R4 List with List.mode=snapshot and no List.entry; preserve original SubmissionSet.uniqueId (typed List.identifier), purpose (map-submission-purpose), sourcePatientId (map-submissionset-sourcePatientId), and intendedRecipient (ihe-intendedRecipient). Preserve other available original identifiers without substituting exchange-domain patientId for sourcePatientId. In XD this is a DocumentEntry with mimeType=application/fhir+xml and typeCode=FHIR List. |
| contentTypeCode | Exactly one FHIR Task separate from the Primary Information Object. Task.status=completed for accepted, failed for rejected. On failure Task.statusReason.text SHALL explain the failure; Task.output.valueCodeableConcept SHOULD provide an applicable coded reason using MAPFailureReasonVS (Extensible), and its text SHOULD explain the reason. The Task is not the Primary Information Object. |
| sourceId / patient identifiers | Identify the current reporting transaction and its Information Source; do not mechanically copy the originating transaction’s sourceId or patient identifiers. The original identifiers are carried within the identification snapshot as applicable. |
| referenceIdList | No other secondary information objects are permitted (0..0), apart from specifically required human-readable representations, Task and optional Provenance information. |

### 4.2 DocumentEntry differential constraints

| Submitted object | Additional send-workflow-status constraint |
| --- | --- |
| Primary: originating-package snapshot | Required Primary Information Object: distinct FHIR R4 List, status=current, mode=snapshot, no List.entry; preserve original uniqueId, sourceId, submissionTime, purpose and applicable typed Context identifiers. In XD packaging this is a DocumentEntry with mimeType=application/fhir+xml and typeCode=FHIR List. It is NOT a second XD SubmissionSet. |
| Reporting Task | Required FHIR List, mode=snapshot, with no List.entry; retain original uniqueId, purpose, sourcePatientId, intendedRecipient using Appendix D mappings. The original sourcePatientId maps to List.extension[map-submissionset-sourcePatientId]; List.subject is exchange-domain patientId and not the primary patient correlation identifier. |
| Outcome Provenance Collection Bundle | Exactly one Task, distinct from the Primary Information Object; completed/failed outcome. On failure statusReason.text SHALL explain; coded output SHOULD be present using Extensible MAPFailureReasonVS. |
| Human-readable report | Required TXT and HTML information objects within the structured package; report outcome, determination time, originating-package identification, and applicable failure reason. Preserve corresponding human-readable MIME content under Framework rules. |
| Other secondary objects | No additional transaction-specific constraints proposed. |

### 4.3 Terminology and extension disposition

Use the terminology and extension bindings specified by the Framework and accompanying V9 terminology package: DTCodeSystem for Task input and failure reason codes; TaskInputVS for Task input types; MAPFailureReasonVS (Extensible) for a coded failure reason when supplied; ProvenanceActivityVS and ProvenanceAgentTypeVS for optional Provenance assertions. Provenance is not mandatory solely because a workflow outcome is reported. The Task outcome and any Provenance assertions SHALL be consistent.

## 5. FHIR Metadata Guidance — HOW

Apply the same Section 4 XD constraints through the Framework’s FHIR List, DocumentReference, Task, and extension mappings. In an XD environment the current reporting SubmissionSet remains an XD SubmissionSet; List.mode does not apply to XD SubmissionSet metadata. Only when that current SubmissionSet is represented using the FHIR mapping does its List use mode=working. The separate required Primary Information Object is always the originating SubmissionSet identification snapshot (FHIR List, mode=snapshot), carried as a DocumentEntry with mimeType=application/fhir+xml in XD. Under the FHIR mapping, preserve the same primary-object classification invariant: the reporting SubmissionSet content classification corresponds to the Primary Information Object DocumentEntry.typeCode. The Task is required, but is not primary.

| XD differential | FHIR expression / verification |
| --- | --- |
| Report SubmissionSet purpose and source | Task.status=failed and Task.statusReason.text SHALL explain rejection. An applicable coded failure reason in Task.output.valueCodeableConcept SHOULD be supplied; if supplied use MAPFailureReasonVS (Extensible). |
| Primary identification snapshot | Required Primary Information Object: FHIR R4 List with mode=snapshot, no List.entry; in XD a DocumentEntry with mimeType=application/fhir+xml and typeCode=FHIR List. Preserve originating identifiers; not another current SubmissionSet. |
| Reporting Task | Exactly one required FHIR Task, separate from Primary Information Object; terminal completed/failed outcome and originating correlation. Failed outcome SHALL include explanatory Task.statusReason.text and SHOULD include an applicable coded reason. |
| Outcome Provenance | Optional 0..n Provenance Collection Bundles, each with 1..n Provenance resources; correlate assertions to relevant originating information and avoid claims inconsistent with Task.status. |
| Submitted-object metadata | Apply the Framework DocumentReference mappings and membership conventions without introducing FHIR-only semantics. |

## 6. Context IG Guidance

TBD — pending republication of the applicable Context IG. No additional Context IG requirements are asserted.

## 7. Technical Actor Functional Requirements — WHICH TECHNICAL ROLE DOES WHAT

Sender Actor: SHALL report an actually determined terminal whole-package outcome when reporting is required by the originating transaction request or an independent Transaction Definition obligation, subject to eligible endpoint capabilities and routing. SHALL include a distinct original SubmissionSet snapshot as Primary Information Object, exactly one correlated Task, and the required human-readable information objects. SHALL NOT request recursive reporting. When reporting successful acceptance is explicitly requested using Task.input request-workflow-status=true, initiate reporting upon determination of acceptance; false or absence does not suppress independently required rejection reporting.

Receiver Actor: SHALL correlate the report to a known originating Transaction Instance using the four original snapshot correlation elements defined in Section 2. If reliable correlation cannot be established, SHALL record an unmatched-report administrative event, SHALL NOT apply the outcome to another transaction, and SHALL NOT initiate another workflow-status report. A report that is unprocessable SHALL likewise be handled administratively without recursion. Local policy governs retention.

## 8. Relevant Examples

Informative acceptance example: A receiver accepts an originating package. Its subsequent send-workflow-status transaction has a new reporting XD SubmissionSet (or FHIR List with mode=working in the FHIR mapping). The required Primary Information Object is an identification snapshot of the original SubmissionSet (FHIR List with mode=snapshot), and the required separate Task has status=completed. Optional Provenance may document receive, accept, register, or store activities with their actual agents and approved agent types; registration and storage need not be complete for acceptance.

Informative rejection example: A receiver cannot match the patient and rejects the entire originating package. The reporting transaction carries the required original SubmissionSet identification snapshot (FHIR List, mode=snapshot) as Primary Information Object and exactly one Task with status=failed, explanatory Task.statusReason.text and preferably a coded patient-not-found reason. Optional Provenance may document receive and reject activities. The reporter does not invent a sourcePatientId. If the report receiver cannot correlate the report to a prior transaction, it records an unmatched-report anomaly without changing the Task’s asserted outcome or issuing another status report.
