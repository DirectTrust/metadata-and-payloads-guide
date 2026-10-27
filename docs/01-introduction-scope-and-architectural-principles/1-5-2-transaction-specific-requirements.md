# 1.5.2 Transaction-Specific Requirements

A GenTXDef establishes the reusable transaction contract: purpose, participating roles, applicable triggering circumstances, sender and receiver responsibilities, and transaction-specific processing. A UCTXDef derived from that GenTXDef inherits applicable requirements and identifies its source so that implementers can trace the basis of conformance.

The UCTXDef may specialize permitted choices such as vocabulary bindings, field cardinalities, payload representations, and conditional processing rules. It must not silently contradict mandatory behavior in the source GenTXDef. When a new UCTXDef has no source GenTXDef, its requirements are stated directly and remain subject to common Framework rules.

Transaction-specific Provenance obligations belong in the applicable TX Definition: Chapter 6 addresses sender and receiver functional responsibilities, while Chapter 7 may specify processing, representation, and communication details. The Framework does not require every intermediary to report every provenance-significant activity; an obligation exists only when the applicable transaction explicitly establishes it.
