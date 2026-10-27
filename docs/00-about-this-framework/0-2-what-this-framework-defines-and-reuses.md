# 0.2 What This Framework Defines and Reuses

The MAP Framework defines common architecture, terminology, and technical requirements for information exchange. Its reusable transaction ecosystem distinguishes the **Reusable Transaction Catalog (RTC)**, containing DirectTrust/MAP-governed **Generalized Transaction Definitions (GenTXDefs)**, from the **Use-Case Transaction Definitions (UCTXDefs)** published in each UC IG.

The RTC provides generalized transaction patterns with deliberately identified points of variation. A UC IG applies and constrains those patterns for a business use case and may define new UCTXDefs where no suitable GenTXDef exists. The MAPUC Author Kit supplies the authoring process and quality practices. Neither catalog governance nor Author Kit formatting conventions automatically creates exchange conformance obligations.

These boundaries allow common rules to remain stable, transactions to be reused, and new implementation experience to inform subsequent RTC governance without conflating the published specifications.

The RTC identifies **Shared Activities** available for reuse and connects each to its governed GenTXDef. The Framework defines the common architectural rules for those activities, while a UC IG selects and constrains them in its UCTXDefs. This separation permits reuse without importing an originating use case's specialized terminology and cardinality into the RTC.
