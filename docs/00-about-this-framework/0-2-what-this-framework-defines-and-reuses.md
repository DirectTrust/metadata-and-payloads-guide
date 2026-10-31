# 0.2 What This Framework Defines and Reuses

The MAP Framework establishes architecture, terminology, and technical requirements that can be applied across multiple use cases. Its specification model distinguishes shared rules, reusable transaction patterns, and requirements specialized for a particular business workflow.

The Reusable Transaction Catalog (RTC) contains governed Generalized Transaction Definitions (GenTXDefs). Each GenTXDef describes a reusable transaction pattern and identifies the choices or constraints that a use case may specialize. A UC IG selects applicable patterns and specifies their use through Use-Case Transaction Definitions (UCTXDefs) in its Chapter 3. If no suitable GenTXDef exists, a UC IG may define a new UCTXDef.

The RTC identifies reusable Shared Activities and associates them with governed GenTXDefs. This allows a transaction pattern to be reused without carrying forward terminology or constraints unique to the use case in which it originated.

A new transaction pattern defined in a UC IG may later be evaluated for generalization and inclusion in the RTC through DirectTrust MAP governance. Publishing a UCTXDef does not, by itself, establish it as a governed GenTXDef.

The MAPUC Author Kit provides templates, instructions, and validation practices for preparing UC IGs, including approaches that support AI-assisted analysis and documentation. The Author Kit guides specification development; it does not itself establish exchange conformance requirements for implementing actors.
