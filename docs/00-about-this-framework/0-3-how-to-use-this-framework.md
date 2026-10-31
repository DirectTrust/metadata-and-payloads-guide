# 0.3 How to Use This Framework

The MAP Framework is intended for authors developing UC IGs and implementers applying them. Its chapters progress from foundational concepts through actors and transactions, common technical requirements, endpoint capabilities and discovery, and implementation guidance.

**Chapter 1 — MAP Framework Foundations** establishes the purpose, objectives, feasibility and scope, foundational principles, and requirements and conformance expectations of the MAP Framework as a whole.

**Chapter 2 — Actors and Transactions** complements Chapter 1 by describing participating parties, technical actors, responsibilities, and transaction relationships. Chapters 1 and 2 together establish the MAP Use Case Framework.

**Chapter 3 — Common Transaction Architecture and Requirements** establishes the MAP Transaction Framework. The RTC complements this chapter with governed GenTXDefs available for selection and specialization.

**Chapter 4 — Endpoint Capability and Discovery** establishes the MAP Endpoint Capability Statement Framework, including the expression, publication, and discovery of endpoint-supported exchange capabilities.

**Chapter 5 — Implementation Guidance** provides additional guidance for applying the Framework. The Terms chapter and appendices provide definitions, supporting explanations, mappings, examples, and references.

The MAP Framework IG and a derivative Use Case IG use corresponding chapter organization to address different levels of specification. The Framework establishes general architecture, reusable requirements, and implementation guidance; a derivative UC IG applies and specializes those provisions for a particular business purpose. This parallel organization does not require duplication of inherited requirements or identical chapter content.

**Figure 0-1. Parallel Organization of the MAP Framework IG and Derivative Use Case IGs**

| Chapter | MAP Framework IG | Derivative Use Case IG |
| --- | --- | --- |
| **1. Foundations** | Defines the Framework's purpose, objectives, feasibility and scope, principles, and conformance model. | Defines these elements for the particular use case. |
| **2. Actors and Transactions** | Establishes the architecture for responsible parties, business roles, transaction participants, technical actors, and transaction interactions; Section 2.5 presents the current reusable transactions in the RTC. | Analyzes required information exchanges and identifies participating parties, actors, and interactions; Section 2.5 lists the transactions needed for the use case, indicating for each whether it specializes an RTC GenTXDef or requires a new UCTXDef. |
| **3. Transaction Framework** | Establishes common transaction architecture and requirements and supports reusable GenTXDefs in the RTC. | Inherits common requirements and provides the applicable UCTXDefs, including specialized GenTXDefs and new transactions where necessary. |
| **4. Endpoint Capability and Discovery** | Establishes how endpoint capabilities are expressed, published, and discovered. | Specifies the endpoint capabilities required to support the use case. |
| **5. Implementation Guidance** | Provides common implementation guidance. | Supplements common guidance with instructions specific to the use case. |

*Figure 0-1 is informative. Corresponding chapters address related concerns without necessarily containing identical material. Applicable requirements are determined by the Framework, the selected transaction definitions, and the derivative UC IG.*

In both documents, Section 2.4 addresses transaction interactions and information flow before Section 2.5 presents the transaction listing. The Framework's listing describes available reusable transactions; the UC IG's listing records the outcome of its use case analysis. Detailed UCTXDefs belong in Chapter 3, not in the Chapter 2 listing. External or future placeholder interactions are identified separately from transactions with applicable UCTXDefs.

Authors developing a UC IG begin with the business problem, Information Exchange Objectives, participating organizations, and required exchanges. They then evaluate reusable patterns in the RTC and develop use-case-specific transaction definitions and other applicable constraints. The MAPUC Author Kit supports this work with structured authoring and validation resources. The analysis begins with the business need, not the existing catalog inventory.

Each UC IG identifies its complete set of UCTXDefs in Chapter 3, including definitions that specialize selected GenTXDefs and new use-case transactions. A GenTXDef does not apply merely because it appears in the RTC. A workflow may also describe external or future interactions as placeholders; these do not independently establish complete MAP transaction specifications or implementation conformance obligations.

Implementers use the applicable UC IG to determine their obligations, including inherited Framework requirements, applicable transaction definitions, and endpoint capability requirements. Informative authoring resources do not independently establish implementer conformance obligations.
