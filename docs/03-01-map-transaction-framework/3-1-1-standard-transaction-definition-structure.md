# 3.1.1 Standard Transaction Definition Structure

Every Reusable Transaction Definition SHALL use the complete heading structure defined in this section. The section and subsection numbering, titles, and order SHALL remain consistent across the Reusable Transaction Catalog. This invariant structure allows an implementer to find the same concept in the same location in every Transaction Definition.

When a standard section is relevant but imposes no additional transaction-specific requirements, its heading SHALL remain present and state that the common Transaction Framework requirements apply without modification. When the concept does not apply, its heading SHALL remain present and state “Intentionally blank — Not Applicable.” Additional material MAY be organized in lower-level subsections beneath the appropriate heading; the standard headings and their order SHALL remain consistent.

| Section / subsection | Standard heading |
| --- | --- |
| 1 | Transaction Overview — WHY |
| 1.1 | Purpose and Scope |
| 1.2 | Transaction Identity |
| 1.3 | Framework Relationship |
| 2 | Direct Message and Structured Payload Requirements — WHAT |
| 2.1 | Direct Message and Structured Payload Structure |
| 2.2 | Workflow Activity Task |
| 2.2.1 | Workflow Activity Identification |
| 2.2.2 | Context Instance Association |
| 2.2.3 | Transaction Correlation |
| 2.2.4 | Workflow Status Instructions |
| 2.3 | Human-Readable Content |
| 2.4 | Provenance Requirements |
| 2.5 | Direct Message and Transport Requirements |
| 3 | XD Metadata Guidance — HOW |
| 3.1 | SubmissionSet |
| 3.2 | Workflow Activity Task DocumentEntry |
| 3.3 | Primary DocumentEntry |
| 3.4 | Provenance DocumentEntry(s) |
| 3.5 | Human-Readable DocumentEntry |
| 3.6 | Secondary Information Object DocumentEntry(s) |
| 4 | FHIR Metadata Guidance — HOW |
| 4.1 | SubmissionSet Representation |
| 4.2 | Workflow Activity Task |
| 4.3 | Primary Information Object Representation |
| 4.4 | Provenance Collection Bundle(s) |
| 4.5 | Human-Readable Content |
| 4.6 | Secondary Information Object(s) |
| 5 | Context IG Guidance |
| 6 | Technical Actor Functional Requirements — WHO DOES WHAT |
| 6.1 | Sender Actor |
| 6.2 | Receiver Actor |
| 7 | Transaction-Specific Processing — WHAT IS SPECIAL |
| 8 | Relevant Examples |

Section 7, Transaction-Specific Processing, SHALL describe additional processing rules or anomaly qualifications specific to the Shared Activity. Common processing anomaly handling and Workflow Status reporting SHALL be applied as defined in Section 3.9.6 and TX8 workflow-status reporting Transaction Definition; they need not be repeated in each initiating Transaction Definition. When no additional transaction-specific rules apply, Section 7 SHALL state that the common requirements apply without modification.

Section 8, Relevant Examples, MAY contain illustrative snippets and patterns appropriate to the transaction, including XD and FHIR representations. Examples SHALL illustrate requirements without replacing them. Example subsection titles and numbering are transaction-specific. Common acceptance and rejection patterns are described in TX8 Transaction Definition; transaction requirements SHALL NOT depend on versioned whole-sample filenames.

Section 5, Context IG Guidance, is reserved in each Transaction Definition. When no additional requirements apply, state that the common Context guidance applies without modification.

When a Workflow Activity Task is included or required, it provides a machine-processable expression of the transaction-specific workflow request. Section 2.2 therefore identifies the Workflow Activity, the Context Instance(s) in which that activity occurs, applicable transaction correlation, and Workflow Status instructions. Sections 3 and 4 then describe how those semantics are represented in XD and FHIR metadata, respectively.

Chapter 3 supplies the common transaction requirements. A Transaction Definition specifies the Shared Activity and the information objects exchanged to perform it. Implementers SHALL apply both; omission of a common requirement from transaction-specific prose does not remove that requirement. Section 2.4 identifies required and permitted Provenance activities. Sections 6.1 and 6.2 assign functional and Provenance requirements to the grouped Sender Actor and Receiver Actor.
