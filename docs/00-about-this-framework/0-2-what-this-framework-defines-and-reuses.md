# 0.2 What This Framework Defines and Reuses

The MAP Framework establishes a coordinated specification architecture. Its three subframeworks address distinct but related aspects of interoperability: business exchange definition, technical transaction behavior, and endpoint capability expression and discovery.

The MAP Use Case Framework provides a consistent basis for identifying business needs, participating parties, actors, and required exchanges. The MAP Transaction Framework defines common technical requirements for transaction behavior. The MAP Endpoint Capability Statement Framework specifies how supported exchange capabilities are represented, published, and discovered so that participating systems can determine whether they can support the required exchanges.

The Reusable Transaction Catalog (RTC) complements the Transaction Framework by maintaining governed Generalized Transaction Definitions (GenTXDefs). Each GenTXDef describes a reusable transaction pattern and identifies permitted points of specialization. A UC IG selects applicable GenTXDefs and specializes them through Use-Case Transaction Definitions (UCTXDefs), or defines new UCTXDefs when no suitable generalized definition exists. The complete set of UCTXDefs for a UC IG appears in its Chapter 3.

The RTC identifies reusable Shared Activities and associates them with governed GenTXDefs. This enables transaction behavior to be reused without carrying forward constraints unique to an originating use case. Newly defined UCTXDefs may later be proposed for generalization through the applicable MAP governance process; publication in a UC IG alone does not make a UCTXDef a governed GenTXDef.

The MAPUC Author Kit provides templates, instructions, and validation resources for preparing UC IGs, including AI-assisted authoring approaches. It supports consistent specification development but does not independently establish technical exchange requirements for implementing actors.
