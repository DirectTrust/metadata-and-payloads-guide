# 2.4.6 RTC Governance and Transaction Evolution

The transaction architecture supports a cycle of reuse, specialization, implementation experience, and governed generalization. A UC IG may reveal a transaction pattern not represented in the RTC. After publication, the pattern can be evaluated for common behavior, unnecessary use-case constraints, overlap with existing GenTXDefs, and suitability for independent reuse.

Approval creates or revises a GenTXDef under DirectTrust/MAP governance; it does not silently revise an already published UCTXDef. This separation preserves stable use-case specifications while allowing the catalog to evolve. Section 1.3.5 explains the governance boundary; the MAPUC Author Kit supplies the authoring and validation process.

The catalog's governing body reviews newly developed UCTXDefs for reusable Shared Activity patterns, distinguishing common behavior from specialized clinical or administrative bindings. Governance may approve a new GenTXDef, revise an existing one, or decline generalization. A UC IG's publication alone does not modify the RTC.
