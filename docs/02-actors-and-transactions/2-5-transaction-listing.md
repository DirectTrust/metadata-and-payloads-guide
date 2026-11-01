# 2.5 Transaction Listing (Reusable Transactions Catalog)

Section 2.5 identifies the relevant transactions in scope for this guide. For the MAP Framework, this is a listing of the transactions available in the current RTC. In a UC IG, each of these transactions will have a UCTXDefs defined in Chapter 3, to constrain the use of a generalized transaction for specific use in its use case or to define new transactions needed for its specific use case.

The RTC is unique to the MAP Framework. RTC transaction identifiers follow YYYYMMDD-XX, using the date the transaction was generalized and added into the catalog with a two-digit sequence indicator to distinguish between transactions added on the same date.

Each transaction in the RTC has its own GenTXDef chapter following the common MAP Framework Chapter 3. The RTC listing identifies reusable transaction types; it does not imply that every listed transaction applies to every UC IG. Specific generalized requirements are established in the respective GenTXDefs, not by this inventory table.

In a UC IG, chapter 2.5.1 includes the list of transactions relevant for the specific use case.

| RTC TX ID | Transaction name | TXDef source |
| --- | --- | --- |

| 20260828-01 | send-workflow-status | send-workflow-status-GENTXDef |

| 20260828-02 | send-visit-notification | send-visit-notification-GENTXDef |

| 20260828-03 | send-documents | send-documents-GENTXDef |

| 20260828-04 | send-patient-update | send-patient-update-GENTXDef |


The UC IG's Transaction Listing records the transactions needed for the use case, their identities, and the source of each definition. A reused RTC transaction becomes specialized by an applicable UCTXDef; a newly identified transaction receives a new UCTXDef. Placeholder interactions governed by external specifications or reserved for future work should be distinguished from in-scope MAP transactions.

A UC IG transaction listing SHALL include its local TX ID. If the transaction is being reused from the RTC, its transaction name SHALL NOT be changed. Where no RTC GenTXDef fits, the UC IG may define a new transaction name following similar naming conventions. External interactions and placeholder transaction are identified by noting “Not A MAP transaction” in the TXDef source column of the table.

The common MAP Transaction Framework Chapter 3 contains the shared transaction architecture and requirements. All UCTXDef chapters SHALL remain consistent with this common Framework.

## 2.5.2 Use Case Transaction Evolution and ReUse

New transactions defined as new within a UC IG SHALL be identified in this section as potential candidates for future generalization and promotion into the RTC. For each newly defined transaction, a recommendation SHALL be included stating if the new transaction should be considered a candidate for future generalization and promotion into the RTC. Rationale supporting these recommendations SHALL be included.

| New Transaction Name | Recommended for RTC (Y/N) | Rationale |
| --- | --- | --- |

|  |  |  |

|  |  |  |

|  |  |  |

|  |  |  |


Some transactions are so inherently specific to a particular use case, that generalized use is not foreseeable. That transaction may remain defined specifically in the context of a specific use case, within the UC IG that defined it. However, other UC IGs MAY reference that transaction in their Transaction Listing and point to the TXDef included in the originating UC IG as the TXDef Source.
