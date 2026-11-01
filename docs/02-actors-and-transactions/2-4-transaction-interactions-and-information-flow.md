# 2.4 Transaction Interactions and Information Flow

The MAP Framework establishes a repeatable analysis from accepted objectives to scenarios, required information exchange activities, and the transactions or other architectural mechanisms needed to address them. In the Framework, objectives O1–O6 describe generalized architecture; derivative UC IGs apply the same sequence to their own business objectives and workflows.

## 2.4.1 Identifying Required Information Exchange Activities

The Objective–Scenario–Required Information Exchange Activity Mapping below is the resulting Chapter 2 analysis of the accepted Chapter 2 Author Input. It reflects all six completed Objective Entry Blocks, including Direct’s payload-agnostic nature, broad participation, optional intermediaries, endpoint capability differences, progressive structuring, and requirements traceability. Scenario identifiers and activity identifiers are local analytical references, not RTC transaction identifiers.

| Objective | Scenario | Required activity | Description of required information exchange or architectural activity |
| --- | --- | --- | --- |

| O1 | S1-A — Direct information sharing across different entity types | A1.1 | Characterize trigger, Information Source, Intended Recipient, business roles, information representation (HL7 V2, CDA, FHIR, or other file), and intended use; support viewing, import, incorporation, or identifiable metadata recording. |

| O1 | S1-B — Point-to-point or intermediated sharing, including mixed HIPAA status | A1.2 | Identify each organizational exchange hop and intermediary responsibilities; determine consent considerations for sharing with non-covered entities and the intended recipient’s outcome. |

| O2 | S2-A — Human-initiated or system-triggered Direct exchange | A2.1 | Characterize initiating condition, grouped actor participation, information movement, and reusable behavior independent of a particular clinical use case or attachment format. |

| O2 | S2-B — Community reuses common exchange behavior across IGs | A2.2 | Identify common transaction behavior, candidate RTC GenTXDef, and the constraints needed for the particular UC IG without redefining shared requirements. |

| O3 | S3-A — Sender or IG author checks whether an address supports an intended exchange | A3.1 | Discover and interpret endpoint declarations for supported exchange functions, transaction support, and information representations; distinguish addressability from capability. |

| O3 | S3-B — Intermediary and ultimate recipient expose different capabilities | A3.2 | Determine relevant capabilities at each endpoint and hop, including directory-linked declarations and changes in declared support. |

| O4 | S4-A — Recipient handles human-readable or structured exchanged information | A4.1 | Identify content and applicable identity, context, and metadata; support recognition, presentation, and structured processing as supported by the receiver. |

| O4 | S4-B — Exchange produces distinct technical and workflow outcomes | A4.2 | Distinguish transport disposition, structured payload acceptance, and later workflow outcomes; track provenance only where the applicable transaction defines it. |

| O5 | S5-A — Community increases information structure without replacing Direct | A5.1 | Identify a useful baseline representation and purposeful options for richer metadata, minimal structuring, or structured processing while preserving meaning. |

| O5 | S5-B — Participating endpoints adopt improvements at different rates | A5.2 | Determine supported representations and processing capabilities; constrain permitted alternatives through the applicable transaction and UC IG. |

| O6 | S6-A — Author develops a derivative UC IG from Framework and RTC sources | A6.1 | Trace accepted objectives and scenarios to required activities, needed transactions, GenTXDef inheritance, UCTXDef constraints, and applicable requirements. |

| O6 | S6-B — Implementer or tester assesses obligations for selected transactions | A6.2 | Identify grouped actor obligations and testable outcomes, distinguish common and specialized requirements, and preserve unambiguous conformance scope. |


Note: An activity is not automatically a single transaction, and a scenario may require more than one transaction or supporting capability to be addressed.

## 2.4.2 Evaluating Reusable Transactions

The RTC provides reusable generalized transaction types. Compatibility is evaluated against the actual GenTXDef requirements, not solely the transaction name. The evaluation considers purpose, initiating context, grouped Sender and Receiver Actors, direction, information exchanged, expected behavior, permitted representations, lifecycle, and the proposed UC IG constraints. A derivative UCTXDef may specialize a compatible GenTXDef but may not contradict inherited mandatory behavior.

| Evaluation outcome | Meaning | Disposition |
| --- | --- | --- |

| Compatible | A complete GenTXDef supports the required activity and permits the needed specialization. | Select the RTC transaction and document UCTXDef constraints. |

| Incompatible | A substantive requirement or actor/behavior boundary conflicts with the activity. | Do not force reuse; evaluate a new UCTXDef or external specification. |

| Undetermined | The available GenTXDef or capability evidence is insufficient to establish compatibility. | Record the dependency; do not claim conformance or coverage. |


## 2.4.3 Determining Needed Transactions and Assessing Coverage

The activities in Section 2.4.1 are consolidated by behavior and compared with reusable transaction definitions. The resulting coverage assessment distinguishes candidate runtime transaction families from supporting architectural provisions. “Candidate” is an analytical association and is not a finding of GenTXDef compatibility.

| Objective | Activities | Needed Information Exchange Capability | RTC association |
| --- | --- | --- | --- |

| O1 | A1.1–A1.2 | Exchange of documents, notifications, other payloads; point-to-point and through intermediated formations | send-documents; send-visit-notification; send-patient-update |

| O2 | A2.1–A2.2 | Common exchange behavior for similar exchange functions | All RTC entries potentially relevant depending on selected UC IG send-documents; send-visit-notification; send-patient-update; send-workflow-status |

| O3 | A3.1–A3.2 | Endpoint capability expression, discovery, and interpretation of receiver support for specified exchange capabilities. | Use of Capability Statement and inclusion of a reference to an endpoint’s Capability Statement in the DirectTrust Aggregated Directory. |

| O4 | A4.1–A4.2 | Usable content, identity/context, distinct transport/payload/workflow outcomes | send-workflow-status when a workflow status report is required |

| O5 | A5.1–A5.2 | Supported progression of representations and processing | Relies on Progressive Structuring Principle and use of Minimally Structured Documents. |

| O6 | A6.1–A6.2 | Traceable authoring, inheritance, and testable conformance | Supported by inclusion of Provenance information within Transactions. |


The assessment establishes an initial traceable inventory of candidate needs, not a certification that the four initial RTC GenTXDefs satisfy all activities. A derivative UC IG must make the transaction selections applicable to its specific scenarios, identify external or placeholder interactions separately, and document uncovered activities. Requirements concerning provenance are limited to activities explicitly identified by the applicable transaction definition.
