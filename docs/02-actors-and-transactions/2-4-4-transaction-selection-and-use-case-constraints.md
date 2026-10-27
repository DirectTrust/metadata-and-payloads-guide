# 2.4.4 Transaction Selection and Use-Case Constraints

Transaction selection follows identification of the **required information exchanges**, not the other way around. Each business scenario is examined for its participating parties, triggering circumstances, information needs, expected outcomes, and required Shared Activities. The resulting exchange requirements are then evaluated against the RTC's GenTXDefs.

An exchange may be supported by a catalog GenTXDef specialized into a UCTXDef, require a newly authored UCTXDef, or remain an explicitly identified external or future placeholder. The author should preserve traceability from the scenario and required exchange to that determination. Use-case constraints specify the vocabulary, cardinality, content, and processing rules necessary for implementation while respecting inherited mandatory requirements.
