# 4.5 Optional Machine-Processable CapabilityStatements

An endpoint operator MAY additionally publish a machine-processable FHIR CapabilityStatement describing its supported interoperability capabilities.

A FHIR CapabilityStatement may provide a structured representation of information also communicated through the human-readable capability description, supporting automated interpretation, configuration, or testing.

The MAP capability model may inform the representation of supported use cases, transactions, sender and receiver functions, exchange options, identifier capabilities, terminology capabilities, and workflow responsibilities.

Implementers choosing to publish a FHIR CapabilityStatement should use applicable FHIR specifications and established MAP profiles or extensions where available and appropriate.

The proposed MAP Endpoint CapabilityStatement profile, identified by the canonical URL:

http://objects.directtrust.org/standards/fhir/StructureDefinition/map-endpoint-capabilitystatement

may serve as a basis for further development and implementation experimentation, subject to verification of its published status and technical constraints.

Publishing a FHIR CapabilityStatement does not imply that the endpoint operates a FHIR REST API or uses the FHIR messaging protocol for Direct exchanges.

Where both human-readable and machine-processable capability descriptions are published, the endpoint operator SHOULD maintain consistency between them.

The MAP Framework does not require publication of a FHIR CapabilityStatement, implementation of the proposed profile, or automated retrieval and processing of capability information.
