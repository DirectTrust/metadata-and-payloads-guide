# D.6 Provenance Collection Bundles and Target Resolution

Status: Working draft approved with the common Binary packaging, self-contained supporting resources, and logical identifier matching decisions. Exact FHIR reference representation remains subject to verification.

### D.6.1 Provenance Information Object and Packaging

Each submitted Provenance information object SHALL be a separate FHIR Collection Bundle containing 1..* Provenance resources. The Grouped Sender Actor SHALL serialize the Collection Bundle as FHIR XML or FHIR JSON and carry it in a Binary resource in the outer MAP Collection Bundle under D.5. Its DocumentReference SHALL reference that Binary and SHALL be a member of the SubmissionSet. Entries in the serialized Provenance Collection Bundle are not peer entries of the outer Bundle or independently submitted objects solely by their inclusion.

### D.6.2 Provenance Assertions and Attribution

Each Provenance resource SHALL identify its asserted activity, applicable time, responsible agent or agents, and target or targets. Distinct activities SHALL have distinct Provenance assertions; one activity MAY have multiple targets. An actor SHALL assert only activities it can authoritatively attribute. Preserving an upstream assertion does not create an endorsement or reassertion.

### D.6.3 Provenance Target Identification and Matching

A Provenance target SHALL identify the resource or information object to which the activity applies. References to supporting resources inside the Provenance Collection Bundle SHALL resolve within that Bundle. When a target identifies another submitted information object, Provenance.target SHALL use Reference.identifier and the established logical identifier of that information object. The Grouped Receiver Actor SHALL match the logical identifier to the corresponding information object represented in the Structured Package Payload. DocumentReference.id, Binary.id, and Bundle entry position SHALL NOT substitute for the submitted object logical identifier. Target identification SHALL NOT rely on an implicit search outward through enclosing Bundles. Identifier systems, version handling, and earlier originating-package snapshot conventions are further constrained by the applicable Transaction Definition.

### D.6.4 Self-Contained Supporting Resources

Each Provenance Collection Bundle SHALL contain the supporting resources necessary to interpret its assertions, including applicable agent identities. References to those supporting resources SHALL resolve within that Provenance Collection Bundle; a Provenance assertion SHALL NOT reference a contained supporting resource in another submitted information object. Supporting resources do not require independent DocumentReferences or SubmissionSet membership solely by supporting an assertion. Self-containment does not require copying other submitted information objects identified as Provenance targets.

### D.6.5 Preservation and Additional Provenance

An actor MAY preserve and share upstream Provenance Collection Bundles without changing their assertions where the Transaction Definition permits. An actor MAY create additional independently attributable Provenance Collection Bundles where permitted or required. New assertions SHALL preserve upstream attribution. Activities after structured payload finalization SHALL NOT be inserted retrospectively into that transmitted payload; they MAY be recorded locally or communicated through a later applicable transaction.

### D.6.6 Transaction-Specific Provenance Requirements

The applicable Transaction Definition establishes required and permitted Provenance activities and assigns obligations to the Grouped Sender Actor and Grouped Receiver Actor. Originating SubmissionSet snapshots, acceptance/rejection target conventions, and related send-workflow-status requirements belong in that GenTXDef, not in common Appendix D. Common packaging does not independently require creation of Provenance for every transaction.
