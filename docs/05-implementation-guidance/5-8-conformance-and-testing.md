# 5.8 Conformance and Testing

Conformance requires observable behavior as well as syntactically valid artifacts. Test each endpoint against its declared use-case, transaction, Technical Actor Role, metadata representation, and information-object capabilities. Verify package completeness, correlation, reference resolution, identity and Context semantics, and provenance. Distinguish message delivery from structured payload receipt, workflow acceptance or rejection, and later processing.

Where an applicable transaction requires workflow-status reporting, test correlation, recipient capability, status consistency, missing-report handling, and any explicitly specified timing requirements. No workflow-status transaction or reporting interval is assumed universally in this baseline.
