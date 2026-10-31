# 0.3 How to Use This Framework

The Framework is intended for both authors developing MAP UC IGs and implementers applying them. Its chapters progress from the use-case specification model through common transaction requirements, endpoint capabilities, and implementation guidance.

Chapters 1 and 2 establish the MAP Use Case Framework, covering the use-case specification model, participating parties and technical actors, and the distinction between generalized and use-case-specific transaction definitions. Chapter 3 establishes the MAP Transaction Framework and its common technical requirements; the RTC complements it with governed GenTXDefs. Chapter 4 addresses Direct Endpoint Capability Statements and capability discovery. Chapter 5 provides implementation guidance. The Terms chapter and appendices provide definitions, supporting explanations, mappings, examples, and references.

To develop a UC IG, authors first identify information exchange objectives, business scenarios, responsible organizations, and the exchanges needed to meet those objectives. They then evaluate reusable patterns in the RTC and define the use case’s transaction architecture. The MAPUC Author Kit provides a structured pathway, supporting templates, validation methods, and AI-assisted authoring approaches for carrying out and documenting this analysis. The analysis begins with the business need, not with the existing catalog inventory.

Each UC IG identifies its applicable UCTXDefs in Chapter 3. These definitions specialize selected GenTXDefs as needed—for example, by constraining vocabulary bindings, cardinalities, actor responsibilities, and processing requirements—or specify new use-case transactions. A GenTXDef is not applicable to a use case merely because it appears in the RTC; the UC IG must select it.

Implementers apply the normative requirements of the relevant UC IG, including its UCTXDefs and applicable inherited Framework and GenTXDef requirements. A placeholder transaction used to describe a workflow is not a complete transaction specification and does not independently establish implementation conformance obligations.
