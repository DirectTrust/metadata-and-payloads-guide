# 3.5.4 Structured Payload Contents

The structured payload contains its SubmissionSet metadata representation, any included Workflow Activity Task, primary information object, permitted secondary information objects, Provenance information objects, human-readable files, and any supporting resources required to resolve references. Its SubmissionSet organizes the submitted information objects through metadata and membership relationships; it does not physically contain every file or Bundle entry.

| Component per workflow unit | Cardinality | Role in the structured payload |
| --- | --- | --- |
| SubmissionSet representation | 1..1 | Metadata and membership representation: IHE SubmissionSet in METADATA.XML or FHIR List in the Collection Bundle. Organizes submitted information objects; its references do not imply physical nesting of their files. |
| Workflow Activity Task | 0..1; TX8 and transaction-specific requirements may require 1..1 | Machine-processable expression of the specific Workflow Activity being performed or requested, including applicable Context Instance associations, correlation information, and Workflow Status instructions. No more than one is associated with each independently processable workflow unit; TX8 requires exactly one. |
| Primary Data Object | 1..1 | Principal clinical, administrative, or workflow information object being exchanged to accomplish the Shared Activity. |
| Secondary Data Object(s) | 0..* | Additional information objects needed or useful for performing the Shared Activity. Zero or more may be included when permitted by the Transaction Definition. |
| Provenance Information | 0..* | Separate FHIR Collection Bundles, each containing 1..* independently attributable Provenance resources. Each bundle has its own metadata description and SubmissionSet membership. Required activities are specified by the Transaction Definition. |
| Human-Readable Representation(s) | 1 text/plain; 0..* text/html | Identical copies of the required text/plain file and every optional text/html alternative supplied in MIME Part 1. |
| Supporting resources | 0..* as needed | Identities and other resources needed to resolve references. Carried with the structured payload; not separate submitted information objects solely because they support a reference. |

These cardinalities apply per workflow unit. The Transaction Definition MAY constrain optional categories or specify their permitted repetition. XD and FHIR representations SHALL preserve the same information-object roles and semantics. Transaction Definition Section 2.1 SHALL show both the Direct message MIME structure and the nested structured payload composition.

CDA media type. For every information object that is a CDA document, DocumentEntry.mimeType SHALL be application/cda+xml, the IANA-registered CDA media type. This requirement applies to both primary and secondary CDA documents. The FHIR metadata representation SHALL carry the same media type in DocumentReference.content.attachment.contentType and the corresponding Binary.contentType, as specified in Appendix D. A CDA file remains XML regardless of the serialization selected for native FHIR resources.

The human-readable objects in the structured payload SHALL include the same human-readable files supplied in the outer MIME Part 1, as required by Section 3.8.4.
