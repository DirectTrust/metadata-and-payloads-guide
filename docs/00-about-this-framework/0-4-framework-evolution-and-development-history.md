# 0.4 Framework Evolution and Development History

The MAP Framework was first published on February 26, 2026. Subsequent pilot work clarified the three-subframework architecture, the distinction between reusable transaction definitions and use-case-specific requirements, and the role of supporting authoring resources. This section describes that evolution for context; it does not imply that a later development baseline has been formally published or approved.

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

Early MAP materials placed architectural requirements and guidance for preparing UC IGs alongside one another. Pilot experience demonstrated the value of distinguishing requirements governing information exchange from instructions supporting the development of specifications.

The evolving architecture organized the MAP Framework into three complementary subframeworks: the MAP Use Case Framework, the MAP Transaction Framework, and the MAP Endpoint Capability Statement Framework. The latter encompasses both the expression of supported endpoint capabilities and mechanisms for publishing and discovering those declarations.

The RTC complements the Transaction Framework with governed reusable GenTXDefs. Individual UC IGs establish use-case-specific requirements, while the MAPUC Author Kit provides separate authoring and validation resources. This organization supports reuse and consistent implementation expectations while allowing each component to evolve within its defined responsibility.

## 0.4.4 Implications for the Framework’s Organization

The chapter organization separates overall foundations, use-case architecture, common transaction requirements, and endpoint capability expression and discovery into distinct but coordinated areas.

Chapter 1 establishes the foundations of the entire MAP Framework. Chapter 2 completes the MAP Use Case Framework. Chapter 3 establishes the MAP Transaction Framework, and Chapter 4 establishes the MAP Endpoint Capability Statement Framework, including capability discovery mechanisms. Chapter 5 provides implementation guidance.

The Framework's architectural and technical requirements remain distinct from the MAPUC Author Kit's authoring procedures. Each UC IG identifies the requirements applicable to its defined use case, together with relevant inherited requirements.

## 0.4.5 October 16, 2026 Development Baseline

The October 16, 2026 version is a development baseline reflecting refinements made after the February 26, 2026 publication. The February publication remains the historical published source. The October baseline is subject to review, reconciliation, and the applicable approval process before it can be treated as a formally approved revision. Authors evaluating it for new UC IG work should distinguish its development status from that of published specifications.

## 0.4.6 Growing the Reusable Transaction Catalog

The Reusable Transaction Catalog (RTC) contains Generalized Transaction Definitions (GenTXDefs) approved for reuse across multiple use cases. When developing a Use Case Implementation Guide (UC IG), authors can select an existing GenTXDef and specialize it into a Use-Case Transaction Definition (UCTXDef) by specifying the vocabulary, cardinalities, and other requirements needed for their particular use case. If no suitable GenTXDef exists, authors can develop a new UCTXDef.

New UCTXDefs may introduce transaction patterns that could benefit other use cases. These patterns can be proposed to DirectTrust’s MAP Framework Consensus Body for review and generalization. Through this process, requirements specific to the originating use case are separated from the common transaction behavior, and appropriate points of variation are identified. Once approved, the resulting GenTXDef is added to the RTC and becomes available for reuse in future UC IGs.

This approach allows the RTC to grow through practical experience while maintaining a consistent set of governed, reusable transaction definitions.
