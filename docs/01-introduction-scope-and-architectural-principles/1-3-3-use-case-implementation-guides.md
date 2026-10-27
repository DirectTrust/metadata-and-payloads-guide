# 1.3.3 Use-Case Implementation Guides and Use-Case Transaction Definitions

A **Use-Case Implementation Guide (UC IG)** applies the MAP Framework to a defined business purpose. Its principal transaction-development activity is to select suitable **GenTXDefs** from the RTC and constrain them as **Use-Case Transaction Definitions (UCTXDefs)**. The UCTXDefs establish the specific vocabulary, cardinality, information content, actor responsibilities, and processing decisions needed for that use case.

Each UC IG contains a complete set of UCTXDef files for its in-scope MAP transactions, organized within the IG's Chapter 3. A UCTXDef that specializes a catalog GenTXDef identifies its source and retains applicable inherited requirements. The UC IG may also define a new UCTXDef where no suitable GenTXDef exists; such a transaction is valid within the scope of the UC IG but is not automatically part of the RTC.

After publication, new use-case transaction patterns enter the applicable DirectTrust/MAP governance review process for possible generalization. That process separates reusable behavior from use-case constraints, evaluates compatibility with existing catalog entries, and may approve a new or revised GenTXDef for inclusion in the RTC. Publication alone does not confer RTC status. In this way, UC IGs both consume the catalog and supply evidence for its evolution.

Placeholder transactions, by contrast, may describe external or future exchanges and are not necessarily UCTXDefs. Section 1.2.1 establishes their modeling purpose and limits.

The use-case architecture is determined by the business objectives and scenarios before catalog selection. The UC IG's Objective-to-Transaction Matrix and Actor Transaction Diagrams document the results of this analysis; the Author Kit's Chapter 2 Workbook supports the method. A UC IG may include placeholders for external or future exchanges, but those placeholders are not complete UCTXDefs.
