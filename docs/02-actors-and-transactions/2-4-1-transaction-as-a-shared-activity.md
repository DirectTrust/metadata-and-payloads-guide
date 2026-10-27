# 2.4.1 Transaction as a Shared Activity

A MAP transaction is a **Shared Activity** in which participating parties coordinate an information exchange for an identified purpose. The transaction is not defined merely by a transport message or an individual system operation. Its meaning includes the participants' roles, triggering circumstances, exchanged information, and the expected behavior that constitutes the activity.

The MAP Use Case Framework starts from the business outcomes to be achieved, then identifies the scenarios and required Shared Activities. Only after those exchanges are identified does the author consult the RTC to determine whether a governed GenTXDef can be reused. This prevents the available transaction inventory from silently narrowing the business requirements.

The RTC identifies reusable Shared Activities and links each to its governing GenTXDef. A UC IG's UCTXDef selects and constrains that generalized definition for the particular use case, or defines a new transaction where no suitable GenTXDef exists. A placeholder may represent a needed activity governed by another exchange method or not yet specified; it is not itself a fully defined MAP transaction.
