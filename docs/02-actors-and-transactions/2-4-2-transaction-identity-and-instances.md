# 2.4 MAP Transactions, GenTXDefs, and UCTXDefs

A MAP transaction is a defined shared information exchange activity between participating roles. Its identity derives from its purpose and expected behavior, not from a single transport hop, message filename, or particular clinical use case. The distinction between a transaction type and a transaction instance allows reusable requirements to be applied to individual exchanges.

The RTC contains governed **GenTXDefs** that specify reusable transaction behavior. Each UC IG's Chapter 3 contains **UCTXDefs** that specialize selected GenTXDefs or define new use-case transactions. The subsections distinguish transaction identity, catalog reuse, use-case specialization, and the relationship between architectural concepts and the detailed processing requirements in Chapter 3 of the Framework.
