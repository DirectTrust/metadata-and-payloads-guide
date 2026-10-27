# Chapter 5 — Implementation Guidance

This chapter provides implementation guidance for applying the Use Case Framework (Chapters 1 and 2), Transaction Framework (Chapter 3), and Endpoint Capability and Discovery (Chapter 4). It includes Progressive Structuring, source preservation, deterministic controls, AI accountability, and testing.

**Retrospective development baseline (20260828):** The Reusable Transaction Catalog (RTC) is established conceptually but contains **no Generalized Transaction Definitions (GenTXDefs)**. Use-Case Transaction Definitions (UCTXDefs) may be authored directly from the Framework. Material generalized from October 2026 maternal-health drafts is adapted here as a reconstruction, not represented as already published on August 28. Later transaction-specific requirements and provisional technical artifacts do not become universal requirements by their appearance in the source drafts.

## Sections

- [5 1 1 information collections have identity scope provenance and lifecycle](5-1-1-information-collections-have-identity-scope-provenance-and-lifecycle.md)
- [5 1 2 identity context and status answer different questions](5-1-2-identity-context-and-status-answer-different-questions.md)
- [5 1 3 metadata classifies different aspects of the exchange](5-1-3-metadata-classifies-different-aspects-of-the-exchange.md)
- [5 1 4 representation is not the same as meaning](5-1-4-representation-is-not-the-same-as-meaning.md)
- [5 1 5 responsibility and provenance must survive exchange](5-1-5-responsibility-and-provenance-must-survive-exchange.md)
- [5 10 implementation checklist](5-10-implementation-checklist.md)
- [5 11 where to go next](5-11-where-to-go-next.md)
- [5 2 normative boundary](5-2-normative-boundary.md)
- [5 3 1 progressive structuring and source preservation](5-3-1-progressive-structuring-and-source-preservation.md)
- [5 3 2 the minimally structured document as an interoperability strategy](5-3-2-the-minimally-structured-document-as-an-interoperability-strategy.md)
- [5 3 3 information object representation is not an interoperability maturity ranki](5-3-3-information-object-representation-is-not-an-interoperability-maturity-ranki.md)
- [5 3 progressive structuring and narrative interoperability](5-3-progressive-structuring-and-narrative-interoperability.md)
- [5 4 implementation roadmap](5-4-implementation-roadmap.md)
- [5 5 implementing a reusable transaction](5-5-implementing-a-reusable-transaction.md)
- [5 6 1 endpoint semantics and capability](5-6-1-endpoint-semantics-and-capability.md)
- [5 6 2 workflow status update endpoints](5-6-2-workflow-status-update-endpoints.md)
- [5 6 3 workflow status monitoring across organizations](5-6-3-workflow-status-monitoring-across-organizations.md)
- [5 6 endpoint capability and representation selection](5-6-endpoint-capability-and-representation-selection.md)
- [5 7 1 ai assisted content creators and content consumers](5-7-1-ai-assisted-content-creators-and-content-consumers.md)
- [5 7 2 deterministic metadata and ai derived meaning](5-7-2-deterministic-metadata-and-ai-derived-meaning.md)
- [5 7 3 assistance authority and autonomous processing](5-7-3-assistance-authority-and-autonomous-processing.md)
- [5 7 4 identity authority accountability and provenance](5-7-4-identity-authority-accountability-and-provenance.md)
- [5 7 5 logging privacy human oversight and remediation](5-7-5-logging-privacy-human-oversight-and-remediation.md)
- [5 7 6 example ai enabled mailroom utility](5-7-6-example-ai-enabled-mailroom-utility.md)
- [5 7 ai assisted and autonomous implementation considerations](5-7-ai-assisted-and-autonomous-implementation-considerations.md)
- [5 8 conformance and testing](5-8-conformance-and-testing.md)
- [5 9 implementation artifacts examples and tools](5-9-implementation-artifacts-examples-and-tools.md)

# 5.1 How This Collection Fits Together

Chapters 1 and 2 apply the Use Case Framework to the objectives, participants, and workflows of this use case. The MAP Reusable Transaction Catalog identifies the defining specifications for selected transactions. Chapter 3 supplies their common requirements; Chapter 4 identifies endpoint-specific capabilities; this chapter explains how to apply and test those requirements together. a use-case transaction provides the use-case-specific birth notification, while a use-case transaction remains an out-of-scope query placeholder. Other transactions are reusable specifications associated with their defining guides.

The implementation foundations are integrated into this chapter. They explain the conceptual background that helps an implementer understand why the architecture is designed as it is. The four appendices provide deeper learning and reference material. Readers can use them selectively; their guidance is applied together with the common framework and transaction requirements.

| Learning module | Use it when you need to understand… | Relationship to implementation |
| --- | --- | --- |
| Appendix A — Understanding Clinical Documents as Information Collections | document classification, information-collection scope, authorship/authentication, lifecycle, clinical time, and derivation | Supports correct construction and interpretation of clinical information objects. |
| Appendix B — Understanding Identity, Context, and Status | patient and organization identity, assigning authorities, Context Instances, encounters, status, and identifier handshake | Supports correct correlation and prevents identifiers for different things from being conflated. |
| Appendix C — Understanding XD Classification Metadata | the distinct purposes of DocumentEntry.classCode, DocumentEntry.typeCode, and SubmissionSet.contentTypeCode | Provides the conceptual model needed to apply XD metadata requirements correctly. |
| Appendix D — FHIR Collection Bundle Packaging | the FHIR Collection Bundle representation and its mapping to collection-level and entry-level metadata | Specifies FHIR packaging and XD-to-FHIR mappings applied with Chapter 3 and the Transaction Definitions. |
