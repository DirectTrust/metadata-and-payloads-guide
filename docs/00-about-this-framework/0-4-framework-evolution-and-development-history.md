# 0.4 Framework Evolution and Development History

The MAP Framework was first published February 26, 2026 as a foundational framework for metadata and payload exchange using Direct. The material in this section explains the rationale for the proposed later development baseline; it is historical and informative, not a claim of a later publication.

## 0.4.1 Summer 2026 Workshop — Framework Piloting and Evolution

From June through August 2026, a Summer Workshop piloted development of MAP-based Implementation Guides. Experience with workflow-status, ADT notification, and maternal-health use cases exposed recurring distinctions among common architecture, reusable transaction behavior, and use-case constraints. The workshop informed a more stable specification model, with subsequent development and reconciliation work refining that model.

## 0.4.2 Key Evolutionary Improvements

The workshop findings can be organized into twelve connected improvements. Together they distinguish reusable architectural obligations, governed transaction patterns, and use-case specialization while strengthening the technical and editorial practices used to produce interoperable specifications.

1. **Clearer separation of architectural, transaction, use-case, and authoring responsibilities.** Common MAP requirements, RTC-governed GenTXDefs, use-case-specific UCTXDefs, and the separate MAPUC Author Kit.
2. **More precise transaction architecture and identity.** Shared activity, transaction instances, message exchanges, and correlation.
3. **Improved actor roles, responsibilities, and accountability.** Business participants, technical actors, intermediaries, and provenance.
4. **More mature structured payload and workflow-unit architecture.** SubmissionSets, information objects, Tasks, cardinalities, and lifecycle.
5. **Stronger information identity and contextualization.** Patient identity, assigning authorities, context, and status distinctions.
6. **More consistent metadata and terminology practices.** Common metadata, classification, and generalizable bindings.
7. **More complete message packaging and human-readable interoperability.** Structured payload and narrative consistency.
8. **More precise workflow-status and exception handling.** Delivery, acceptance, processing, conditional reporting, and anomalies.
9. **Improved endpoint capability and routing architecture.** Capability discovery, representations, and status routing.
10. **Greater attention to document lifecycle and progressive structuring.** Authentication, provenance, lifecycle, and minimally structured documents.
11. **More reusable implementation guidance and examples.** Common patterns and reusable reference material.
12. **More systematic Implementation Guide authoring and validation.** Author inputs, reusable Transaction Definitions, reconciliation, and QA.

## 0.4.3 Evolution Toward a Reusable Architectural Foundation

The Summer Workshop highlighted a problem in the initial specification approach: the published Framework combined architectural rules with instructions for authoring a derivative IG. Those instructions were useful, but they made it difficult to distinguish exchange obligations from authoring workflow.

The revised model identifies four complementary artifacts: **(1) MAP Framework** for common architecture and technical requirements; **(2) reusable TX Definitions** for transaction-specific behavior; **(3) use-case IGs** for business objectives, selected transactions, and domain constraints; and **(4) the MAPUC Author Kit** for repeatable authoring, templates, and validation. Only the first three are layers of exchange specification; the Author Kit supports their production.

## 0.4.4 Implications for the Framework's Organization

Chapter 1 now states the Framework's purpose, scope, architecture, and principles, rather than prescribing the business scenario of a particular use case. Chapter 2 defines parties, actors, transaction participation, and interaction patterns, rather than providing a particular IG's objective-to-transaction matrix. Chapter 3 establishes common transaction technical requirements. TX Definitions and use-case IGs apply those rules; the Author Kit describes how to produce those artifacts.

This separation does not discard the 20260226 authoring material. It relocates the *method* to the Author Kit while retaining and refining architectural concepts in the Framework.

## 0.4.5 August 28, 2026 Development Baseline

August 28, 2026 is an **attribution date for the Summer 2026 development baseline**. The consolidated repository was **retrospectively reconstructed in October 2026**; it was **not published on August 28**. The February 26, 2026 publication remains the historical published source. This reconstruction requires Author review and reconciliation before it can be treated as an approved specification revision.

## 0.4.6 The RTC and the GenTXDef–UCTXDef Feedback Cycle

The Summer Workshop also demonstrated that reusable transaction patterns require a governed home. The RTC houses GenTXDefs approved through DirectTrust/MAP governance, preserving the common behavior while allowing defined choices in vocabulary and cardinality. UC IGs select and constrain those patterns into UCTXDefs in their Chapter 3; when no catalog pattern is suitable, they may define new UCTXDefs. Following publication, these new patterns may undergo governance review and generalization for future inclusion in the RTC. The RTC is therefore a governed reusable catalog, not a collection of all use-case transaction files.

This distinction complements the separation between the Framework's architectural requirements and the MAPUC Author Kit's authoring methodology. It also preserves the status of the August 28, 2026 development baseline as a retrospective workshop-informed baseline rather than a claim of publication on that date.

### Workshop learning: from objectives to reusable transaction architecture

The Summer 2026 pilots also clarified the analytic pathway for authoring UC IGs. Authors begin with Information Exchange Objectives, develop the business scenarios in which they must be achieved, identify responsible organizations and required exchanges, and only then consult the RTC to select and specialize existing GenTXDefs or identify new transaction needs. The resulting Objective-to-Transaction Matrix and Actor Transaction Diagrams provide traceability and communication of the architecture; they are not substitutes for the underlying analysis.

This experience reinforced the RTC's role as a governed catalog of reusable Shared Activities and their GenTXDefs, and the complementary role of the MAPUC Author Kit in turning the architecture into a repeatable authoring practice. New UCTXDefs developed for published UC IGs may be considered by DirectTrust's MAP Framework Consensus Body for generalization and eventual catalog inclusion.
