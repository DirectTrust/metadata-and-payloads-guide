# 1.6 Framework Organization and Supporting Artifacts

The MAP Framework organizes common architectural concepts and requirements independently of the business objectives of any one use case. Chapter 1 establishes scope, specification layers, and foundational principles. Chapter 2 explains responsible parties, transaction participation, technical actors, and transaction interactions. Chapter 3 defines common transaction architecture and technical requirements. Chapter 4 addresses endpoint capability and discovery; Chapter 5 addresses implementation guidance. Appendices explain lifecycle and provenance, metadata, transport, terminology, examples, and references.

**Every MAP UC IG contains its complete set of in-scope UCTXDef files within its own Chapter 3.** Some UCTXDefs constrain existing **GenTXDefs** selected from the DirectTrust/MAP **RTC**, including specific vocabulary, cardinality, information content, and processing choices. Other UCTXDefs may define new use-case transactions for which no suitable GenTXDef yet exists. Such new definitions are not RTC entries unless and until they are generalized and approved through DirectTrust/MAP governance after publication.

The common Framework's Chapter 3 is not a container for all use-case UCTXDefs: it defines the technical rules they share. The RTC separately governs reusable GenTXDefs, and individual UC IGs publish their own UCTXDefs. Section 1.3 explains these relationships and the reuse feedback cycle.

The MAPUC Author Kit provides the methods, templates, and validation practices used to develop consistent specifications. Its authoring conventions and catalog governance procedures are distinct from obligations imposed on systems exchanging information.

The **MAP Use Case Framework** is established by Chapters 1 and 2; the **MAP Transaction Framework** is established by Chapter 3. In an individual UC IG, Chapter 3 contains the full set of UCTXDef files, whether they specialize GenTXDefs from the RTC or introduce new use-case transactions. The UC IG's Chapter 2 architectural analysis relates objectives and scenarios to the required exchanges, while the Chapter 3 UCTXDefs specify the in-scope MAP exchanges. These are distinct from placeholder transactions for external or future work.

The MAPUC Author Kit's Chapter 2 Workbook operationalizes this progression through objectives, scenarios, organizations, required exchanges, RTC analysis, matrix, and diagram planning. The Framework describes the relationships and their significance; the Author Kit provides the procedure for creating the artifacts.
