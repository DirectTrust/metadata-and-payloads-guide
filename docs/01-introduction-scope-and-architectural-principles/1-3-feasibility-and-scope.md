## 1.3 Feasibility and Scope

The Framework is feasible as an incremental approach because it builds upon Direct, existing information standards, and established endpoint infrastructure. Its three subframeworks separate business exchange definition, transaction package and payload processing behavior, and endpoint capability communication, allowing each concern to be specified and maintained without unnecessarily duplicating the others.

### 1.3.1 Scope of the Three Subframeworks

The MAP Use Case Framework provides the foundation for identifying business exchange needs, participating parties and actors, and required interactions. The MAP Transaction Framework provides common technical requirements for defining and executing transactions, complemented by reusable GenTXDefs maintained in the RTC. The MAP Endpoint Capability Statement Framework addresses how endpoint capabilities are expressed, published, and discovered to support compatible exchange.

A derivative UC IG applies these frameworks to a particular business purpose, selecting or defining the transactions and constraints necessary for that use case. The Framework does not prescribe one universal set of business workflows or transaction selections.

### 1.3.2 Supported Exchange Environment

Direct is the primary exchange mechanism addressed by the MAP Framework. Exchanges may carry human-readable content, structured payloads, or both, as specified by the applicable UC IG and transaction definition. A broader workflow may also include exchanges governed by other standards, such as query services or APIs; while interactions governed by other standards may be described generally as placeholder transactions, detailed specification of such interactions are out of scope for a UC IG that is conformant to the MAP Framework.

### 1.3.3 Applicability and Boundaries

The Framework does not replace the Direct Standard, redefine external protocols, mandate a single payload representation, or require every RTC GenTXDef to be used in every UC IG. The applicable UC IG determines which transactions and constraints govern its implementation. Workflow placeholders may describe external or future interactions but do not, by themselves, establish a complete MAP transaction definition or implementation obligation.
