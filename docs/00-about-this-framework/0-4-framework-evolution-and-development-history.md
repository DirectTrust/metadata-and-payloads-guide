# 0.4 Framework Evolution and Development History

The MAP Framework was first published on February 26, 2026. Subsequent pilot work clarified the distinction between common architecture, reusable transaction definitions, and use-case-specific requirements. This section describes that evolution for context; it does not imply that a later development baseline has been formally published or approved.

## 0.4.1 Summer 2026 Workshop — Framework Piloting and Evolution

From June through August 2026, a Summer Workshop applied MAP concepts to workflow-status, ADT notification, maternal-health, and referral-related use cases. These pilots identified the need to distinguish common architectural rules from reusable transaction behavior and use-case constraints. They also highlighted the complexity of documenting the detailed requirements that implementers need, prompting improvements in authoring guidance and validation support.

## 0.4.2 Key Evolutionary Improvements

The pilot experience led to refinements in the specification model and its technical guidance. Key areas included:

- Separation of Framework architecture, RTC-governed GenTXDefs, UC IG requirements, and Author Kit guidance.
- Transaction identity and correlation, including Shared Activities, transaction instances, and message exchanges.
- Clearer distinctions among business participants, technical actors, intermediaries, and provenance agents.
- Structured payload and workflow-unit conventions, including SubmissionSets, information objects, Tasks, cardinalities, and lifecycle.
- Patient identity, assigning authorities, contextual information, and status distinctions.
- Consistent metadata, classification, vocabulary, and terminology practices.
- Message packaging and consistency between structured and human-readable content.
- Workflow status and exception handling, including delivery, acceptance, processing, and anomaly reporting.
- Endpoint capability discovery, routing, and workflow-status reporting destinations.
- Document lifecycle, authentication, provenance, and progressive structuring.
- Reusable implementation examples and reference material.
- More consistent methods for authoring and validating UC IGs.

## 0.4.3 Evolution Toward a Reusable Architectural Foundation

Early MAP materials placed architectural requirements and guidance for preparing UC IGs alongside one another. Pilot experience demonstrated the value of distinguishing requirements that govern an information exchange from instructions that help authors develop its specification.

The resulting specification model includes the MAP Use Case Framework and MAP Transaction Framework for common architecture and requirements; Direct Endpoint Capability Statements for describing endpoint-supported exchange capabilities; the RTC for governed reusable transaction patterns; and UC IGs for use-case-specific objectives, workflows, and requirements. The MAPUC Author Kit provides a separate set of authoring and validation resources. The Framework, applicable GenTXDefs, and UC IGs establish exchange requirements; the Author Kit supports the development of those specifications.

## 0.4.4 Implications for the Framework’s Organization

The chapter organization reflects these distinctions. Chapter 1 introduces the use-case specification model. Chapter 2 describes participating parties, actors, and interaction patterns. Chapter 3 defines common transaction architecture and requirements, which applicable GenTXDefs and UCTXDefs further specify. Chapter 4 addresses endpoint capabilities and discovery, and Chapter 5 provides implementation guidance. The Author Kit supplies methods and templates for preparing UC IG artifacts.

Although the Framework helps authors understand how to apply the specification model, its architectural and technical requirements must be distinguished from the Author Kit’s authoring procedures. Each UC IG identifies the requirements that apply to its defined use case, together with the relevant inherited requirements.

## 0.4.5 October 16, 2026 Development Baseline

The October 16, 2026 version is a development baseline reflecting refinements made after the February 26, 2026 publication. The February publication remains the historical published source. The October baseline is subject to review, reconciliation, and the applicable approval process before it can be treated as a formally approved revision. Authors evaluating it for new UC IG work should distinguish its development status from that of published specifications.

## 0.4.6 The RTC and the GenTXDef–UCTXDef Feedback Cycle

The RTC provides a governed collection of transaction patterns intended for reuse across use cases. GenTXDefs retain common behavior while identifying permitted variation, including vocabulary bindings and cardinalities. A UC IG selects and constrains applicable patterns in its UCTXDefs, or defines new UCTXDefs when the RTC does not contain a suitable pattern.

A new UCTXDef may subsequently be evaluated, generalized, and approved for inclusion in the RTC through DirectTrust’s MAP Framework Consensus Body. This feedback cycle enables lessons from use-case implementations to improve reusable specifications without treating every use-case-specific transaction as a catalog entry.

The feedback cycle does not change the starting point for use-case analysis: authors first establish objectives, business scenarios, responsible organizations, and required exchanges. Objective-to-Transaction Matrices and Actor Transaction Diagrams document and communicate the resulting architecture, but they do not substitute for that analysis.
