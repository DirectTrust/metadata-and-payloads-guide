# 5.7.6 Example: AI-Enabled Mailroom Utility

Consider an FQHC that operates a Mailroom Utility for incoming and outgoing Direct information. The organization maintains a broad service that tracks outside visits for all primary-care patients and a narrower maternal-care service that tracks relevant events for patients receiving OB care.

| Processing step | What should be explicit | What AI may assist with | Governance / provenance consideration |
| --- | --- | --- | --- |
| Take delivery of the Direct message | Endpoint, use case, canonical transaction, structured payload metadata representation, return-routing controls | Prioritization or operational triage | An MDN establishes transport delivery, not structured payload receipt or acceptance. |
| Identify the patient and relevant contexts | Required patient and Context Instance identifiers | Matching assistance when deterministic identifiers are insufficient | Preserve identifiers and evidence used; do not silently convert an inference into source truth. |
| Determine applicable internal workflows | Canonical transaction and explicit workflow/context metadata when available | Recognize that the same event may be relevant to multiple authorized workflows | AI-assisted routing must operate within delegated authority. |
| Interpret information-object content | Original narrative remains available | Extract, classify, summarize, or highlight clinically relevant information | Derived assertions remain traceable to the original information object and AI activity. |
| Evaluate acceptance into the intended workflow | Authorized decision, requested Task, and applicable package requirements | Assist evaluation within delegated authority | TX8 reports package acceptance or rejection. Either implies sufficient receipt, not successful parsing or processing of every attachment. |
| Create or send downstream information | Explicitly authorized transaction and recipient | Draft or assemble content when authorized | Do not attribute AI-derived assertions to the original Information Source; record applicable provenance. |

The governing principle is straightforward: use explicit structure for information that controls interoperability behavior, preserve narrative and source information that already carries meaning, and use AI to increase the utility of that information without erasing responsibility, provenance, or human accountability.
