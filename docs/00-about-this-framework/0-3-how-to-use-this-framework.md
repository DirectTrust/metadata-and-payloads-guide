# 0.3 How to Use This Framework

The MAP Framework is intended for authors developing UC IGs and implementers applying them. Its chapters progress from foundational concepts through actors and transactions, common technical requirements, endpoint capabilities and discovery, and implementation guidance.

**Chapter 1 — MAP Framework Foundations** establishes the purpose, objectives, feasibility and scope, foundational principles, and requirements and conformance expectations of the MAP Framework as a whole.

**Chapter 2 — Actors and Transactions** complements Chapter 1 by describing participating parties, technical actors, responsibilities, and transaction relationships. Chapters 1 and 2 together establish the MAP Use Case Framework.

**Chapter 3 — Common Transaction Architecture and Requirements** establishes the MAP Transaction Framework. The RTC complements this chapter with governed GenTXDefs available for selection and specialization.

**Chapter 4 — Endpoint Capability and Discovery** establishes the MAP Endpoint Capability Statement Framework, including the expression, publication, and discovery of endpoint-supported exchange capabilities.

**Chapter 5 — Implementation Guidance** provides additional guidance for applying the Framework. The Terms chapter and appendices provide definitions, supporting explanations, mappings, examples, and references.

Authors developing a UC IG begin with the business problem, Information Exchange Objectives, participating organizations, and required exchanges. They then evaluate reusable patterns in the RTC and develop use-case-specific transaction definitions and other applicable constraints. The MAPUC Author Kit supports this work with structured authoring and validation resources. The analysis begins with the business need, not the existing catalog inventory.

Each UC IG identifies its complete set of UCTXDefs in Chapter 3, including definitions that specialize selected GenTXDefs and new use-case transactions. A GenTXDef does not apply merely because it appears in the RTC. A workflow may also describe external or future interactions as placeholders; these do not independently establish complete MAP transaction specifications or implementation conformance obligations.

Implementers use the applicable UC IG to determine their obligations, including inherited Framework requirements, applicable transaction definitions, and endpoint capability requirements. Informative authoring resources do not independently establish implementer conformance obligations.
