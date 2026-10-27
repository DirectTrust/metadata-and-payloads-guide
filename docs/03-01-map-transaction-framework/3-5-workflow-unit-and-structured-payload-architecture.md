# 3.5 Workflow Unit and Structured Payload Architecture

Each workflow unit comprises a SubmissionSet representation, an optional Workflow Activity Task (unless required by the applicable Transaction Definition), and the information objects needed to perform the requested activity, carried together in a structured payload. This section establishes their nesting and cardinalities and the completeness and reference-resolution requirements needed for independent processing.

Inside Out Information Model

Information → Classification → Context → Provenance → Human Readability → Workflow Activity → Structured Payload → Direct message

This model begins with the information to be shared, establishes its classification, Context, and Provenance, and preserves human readability. When present, the Workflow Activity Task provides a machine-processable expression of the requested Shared Activity. The structured payload organizes these components, and the Direct message transports it. DocumentEntry identifiers identify metadata entries; their order does not determine the explanatory order of a Transaction Definition.
