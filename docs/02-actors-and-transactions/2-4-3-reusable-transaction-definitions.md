# 2.4.3 Generalized and Use-Case Transaction Definitions

The **Reusable Transaction Catalog (RTC)** maintains governed **GenTXDefs** that define reusable Shared Activities. Each GenTXDef identifies the common transaction behavior, participating roles, responsibilities, and processing semantics, while preserving explicitly permitted flexibility in vocabulary bindings, cardinalities, and other choices.

Each UC IG's Chapter 3 contains the complete set of **UCTXDefs** for its in-scope MAP exchanges. An existing GenTXDef may be selected and specialized as a UCTXDef, with traceable inherited requirements and use-case-specific constraints. If no suitable catalog transaction exists, the UC IG may introduce a new UCTXDef. That new definition does not automatically become a GenTXDef: following publication, DirectTrust's MAP Framework Consensus Body may review it for generalization and catalog acceptance.

RTC governance and Author Kit formatting conventions concern specification maintenance and authoring. They do not independently establish exchange conformance requirements for implementing actors.
