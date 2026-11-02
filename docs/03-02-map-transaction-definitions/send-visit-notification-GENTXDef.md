# send-visit-notification

Generalized Transaction Definition (GenTXDef)  •  20261101  •  V3  •  Differential editorial draft

Interpretation: This definition adds constraints to the MAP Framework. All unmentioned Framework requirements remain applicable. It does not depend on any particular Use Case Transaction Definition (UCTXDef). Proposed constraints below require author approval before normative adoption.

## 1. Transaction Overview — WHY

The send-visit-notification transaction communicates that a patient-related visit event has occurred or changed state. It supports notification of the event to a receiving party without presuming a particular care setting, event classification, recipient workflow, or subsequent action.

## 2. Message and Payload Requirements — WHAT

The primary submitted information object conveys the visit event notification. The notification identifies the patient and the event sufficiently for the receiving party to interpret the notification in the context of its declared capabilities. The MAP Framework governs the message, structured package, and supporting objects; no alternative packaging model is introduced here.

## 3. XD Metadata Guidance — HOW

Only the following proposed differential constraints apply to the XD representation. Metadata fields not listed retain their Framework-defined meaning, cardinality, conformance and binding.

### 3.1 SubmissionSet differential constraints

| Element / extension | Proposed narrowing for this GenTXDef | Rationale / decision |
| --- | --- | --- |
| purpose | Identify the Shared Activity as send-visit-notification using an approved transaction code from the applicable DirectTrust transaction terminology. | Exact code/system URI requires vocabulary confirmation; do not invent a code. |
| contentTypeCode | When populated, classify the primary submitted visit-notification information object; do not substitute the event classification for the information-object classification. | Inherits Framework terminology binding and cardinality. |
| referenceIdList (Context Instance) | When a visit/encounter context identifier is supplied, preserve its typed identifier and association with the notification. | No new unconditional requirement to supply an encounter identifier. |
| SubmissionSet extensions | No additional extension is introduced by this GenTXDef. Existing Framework extensions retain their inherited rules. | A future UCTXDef may narrow permitted values where allowed. |

### 3.2 DocumentEntry differential constraints

| Element | Proposed narrowing for primary notification DocumentEntry | Rationale / decision |
| --- | --- | --- |
| typeCode | Classify the primary object as a visit-event notification using an applicable code from the inherited terminology framework. | Specific type code/value set subset remains to be selected and validated. |
| classCode | When populated, use the broader classification consistent with the selected notification typeCode. | Do not conflate classCode and typeCode. |
| eventCodeList | When supplied, express the particular visit-event classification or state without treating the GenTXDef as an exhaustive event catalog. | No closed list of outpatient, admission, discharge or other events in parent. |
| creationTime | When populated, represent the creation time of the information object, not automatically the event occurrence time. | Event timing may be carried in the information object. |
| serviceStartTime / serviceStopTime | When populated, represent the interval to which the notification pertains, consistent with the actual event semantics. | No universal requirement that both be present for every event. |
| referenceIdList | When populated, retain typed event/visit correlation identifiers according to the Framework. | Avoid imposing one identifier scheme on all future specializations. |

### 3.3 Terminology and extension disposition

The Framework’s SubmissionSet and DocumentEntry terminology bindings remain in force. This draft proposes no new CodeSystem, ValueSet, extension, fixed event code, or change to inherited cardinalities. Before publication, the transaction purpose and primary notification typeCode need verified terminology assignments. If a narrower binding is approved, document its canonical identifier, strength and allowed codes here.

## 4. FHIR Metadata Guidance — HOW

The FHIR representation expresses the same transaction-specific constraints stated in Section 3 using the Framework’s corresponding SubmissionSet/List, DocumentReference and extension mappings. No independent FHIR-only semantic constraints are introduced. Exact element paths and profiles must be checked against the approved MAP FHIR mapping and current vocabulary package before normative publication.

| XD differential | FHIR representation rule |
| --- | --- |
| SubmissionSet purpose | Apply the Framework-defined purpose mapping and the same approved send-visit-notification code. |
| SubmissionSet contentTypeCode / context identifiers | Apply corresponding Framework-defined List/extension mappings, preserving semantics and typed identifiers. |
| DocumentEntry typeCode / classCode | Apply corresponding DocumentReference mappings, preserving type versus broader category distinctions. |
| DocumentEntry eventCodeList / times / references | Use Framework-defined mappings where available; do not invent FHIR elements or extensions. |

## 5. Context IG Guidance

TBD — pending the applicable Context IG specification. No Context IG-specific constraint is asserted in this GenTXDef.

## 6. Technical Actor Functional Requirements — WHO DOES WHAT

No additional Sender Actor or Receiver Actor functional requirements are proposed beyond those inherited from the MAP Framework and the constraints in Sections 2–4. Constituent technical actors are not assigned separate normative obligations here.

## 7. Transaction-Specific Processing — WHAT IS SPECIAL

The receiver interprets the notification according to the identified visit event and its declared supported capabilities. An event classification that the receiver does not support is not equivalent to a transport delivery failure. Any rejection or workflow status reporting follows the common MAP processing and anomaly provisions. No transaction-specific rejection code or mandatory follow-up behavior is proposed until the applicable anomaly terminology and processing rules are verified.

## 8. Relevant Examples — SHOW ME

Informative example (non-normative): A sender notifies a receiver that a patient visit has changed state. The SubmissionSet identifies the shared activity as send-visit-notification; the primary DocumentEntry classifies the notification object; an event classification, when supplied, distinguishes the specific state change. A future UCTXDef may narrow event values and required identifiers without changing the parent transaction meaning.

## Editorial decisions needed before normative approval

- Verify the exact approved transaction-purpose code and its canonical code system.

- Select and validate the primary notification DocumentEntry typeCode and any narrower terminology bindings.

- Confirm the authoritative FHIR mapping paths for every Section 3 differential.

- Determine whether any additional mandatory visit-event identifier or event time is genuinely invariant across all possible future specializations.

- Confirm whether a transaction-specific anomaly requires a distinct code or whether Framework processing is sufficient.
