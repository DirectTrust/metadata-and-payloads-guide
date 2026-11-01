# 1.3 Feasibility and Scope

The Framework is feasible as an incremental approach because it builds upon Direct, existing information standards, and established endpoint infrastructure. Its three subframeworks separate business exchange definition, transaction package and payload processing behavior, and endpoint capability communication, allowing each concern to be specified and maintained without unnecessarily duplicating the others.

## 1.3.1 Scope of the Three Subframeworks

The MAP Use Case Framework provides the foundation for identifying business exchange needs, participating parties and actors, and required interactions. The MAP Transaction Framework provides common technical requirements for defining and executing transactions, complemented by reusable GenTXDefs maintained in the RTC. The MAP Endpoint Capability Statement Framework addresses how endpoint capabilities are expressed, published, and discovered to support compatible exchange.

A derivative UC IG applies these frameworks to a particular business purpose, selecting or defining the transactions and constraints necessary for that use case. The Framework does not prescribe one universal set of business workflows or transaction selections.

## 1.3.2 Supported Exchange Environment

Direct is the primary exchange mechanism addressed by the MAP Framework. Each MAP Transaction Instance is conveyed in one Direct message containing exactly two MIME parts: the first carries human-readable information summarizing the transaction, and the second carries one Structured Package Payload with one SubmissionSet and its associated information objects and metadata. The required human-readable information is also preserved within the Structured Package Payload. A broader workflow may also include exchanges governed by other standards, such as query services or APIs; while interactions governed by other standards may be described generally as placeholder transactions, detailed specification of such interactions is out of scope for a UC IG that is conformant to the MAP Framework.

## 1.3.3 Applicability and Boundaries

The Framework does not replace the Direct Standard, redefine external protocols, mandate a single payload representation, or require every RTC GenTXDef to be used in every UC IG. The applicable UC IG determines which transactions and constraints govern its implementation. Workflow placeholders may describe external or future interactions but do not, by themselves, establish a complete MAP transaction definition or implementation obligation.

Direct supports flexible message composition and can accommodate more complex MIME structures and information packaging arrangements than those specified by this version of the MAP Framework. To establish a consistent, interoperable implementation baseline, this version limits each MAP Transaction Instance to one Direct message containing exactly two MIME parts, including one Structured Package Payload. Each Structured Package Payload contains exactly one SubmissionSet. These constraints define the scope of conformance to this version of the MAP Framework. They do not represent limitations of Direct or the underlying XD and FHIR technologies, nor do they preclude future versions of the MAP Framework from supporting more complex message and package structures.
