# D.5 Representing the Payload Objects

Status: Technical mapping text reconciled with Chapter 3; full instance/profile validation remains outstanding.

## D.5.1 Submitted Information Objects and Their Representations

Each submitted information object SHALL have a corresponding DocumentReference representing its DocumentEntry metadata and SHALL be identified as a member of the SubmissionSet. The Structured Package Payload SHALL contain one primary submitted information object and MAY contain secondary submitted information objects as permitted by Chapter 3 and the applicable Transaction Definition. A supporting resource does not become a separately submitted information object solely because it appears in the outer Collection Bundle.

## D.5.2 DocumentReference and Binary Content Representation

When a submitted information object is carried as Binary, its DocumentReference SHALL reference that Binary using DocumentReference.content.attachment.url. The DocumentReference and Binary SHALL describe the same content and have consistent media types. For primary and secondary CDA documents, both media types SHALL be application/cda+xml. The serialized information object bytes SHALL be preserved without content-changing transformation.

## D.5.3 Submitted FHIR Collection Bundles

When a submitted information object is itself a FHIR Collection Bundle, the Grouped Sender Actor SHALL serialize it as FHIR XML or FHIR JSON and SHALL carry the serialized representation in a Binary resource in the outer MAP Collection Bundle. The corresponding DocumentReference SHALL reference that Binary through DocumentReference.content.attachment.url. The DocumentReference Attachment contentType and Binary.contentType SHALL agree and use application/fhir+xml or application/fhir+json as applicable. The submitted Collection Bundle SHALL be represented in SubmissionSet membership through its DocumentReference. Resources inside the serialized Bundle SHALL NOT automatically become independent members of the outer SubmissionSet.

## D.5.4 Human-Readable Representations

The Structured Package Payload SHALL include the human-readable representations required by Chapter 3. The required text/plain and each optional text/html representation included in the structured payload SHALL be identical copies of the corresponding files in MIME Part 1. These representations SHALL NOT replace the primary submitted information object. Their exact FHIR packaging representation remains an open issue.

## D.5.5 Supporting Resources and Reference Resolution

Supporting resources MAY be included to identify patients, authors, organizations, recipients, agents, or other entities needed to interpret submitted information. Supporting resources SHALL NOT require separate DocumentReferences or SubmissionSet membership solely because they support another resource. Required exchanged-information references SHALL resolve within the transmitted structured payload, except that external canonical definitions are not exchanged-information targets. The self-containment rule for submitted Provenance Collection Bundles is specified in D.6.

## D.5.6 Content Integrity and Metadata Consistency

DocumentReference metadata SHALL accurately describe its submitted information object. Repeated content type, size, hash, creation time, and other values SHALL be consistent with the same underlying object. Exact FHIR Attachment hash encoding, size calculation, and application to serialized nested FHIR Bundles remain open for verification.

