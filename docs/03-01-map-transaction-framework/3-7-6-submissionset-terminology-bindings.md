# 3.7.6 SubmissionSet Terminology Bindings

The following bindings apply to package-level metadata describing the Shared Activity, package classification, and applicable Context Instances.

| Metadata element | ValueSet or fixed value | Binding strength | Application rule |
| --- | --- | --- | --- |
| purpose | DirectTrust Transaction Types http://objects.directtrust.org/standards/terminology/ValueSet/TransactionTypesVS | Extensible | Identifies the Shared Activity independently of Task. When Task is present, Task.code SHALL carry the same transaction code and code system. The Transaction Definition specifies the activity code; it is not an information-object classification. |
| contentTypeCode | LOINC Document Ontology http://loinc.org/vs/loinc-document-ontology | Extensible | Classifies principal package content and establishes expected constituent information-object types under the Transaction Definition. Unless otherwise specified, use the principal DocumentEntry.typeCode; use a LOINC DO code when appropriate. |
| referenceIdList ContextInstance TypeCode | DirectTrust Context TypeCode Value Set http://objects.directtrust.org/standards/terminology/ValueSet/DTContextTypeCodeVS | Extensible | Identifies the kind of established Context Instance; the associated identifier identifies the instance. When Task is present, apply the same type semantics in the Task and corresponding metadata. |
| availabilityStatus | urn:oasis:names:tc:ebxml-regrep:StatusType:Approved | Fixed value | Applies to the XD SubmissionSet status. The FHIR representation preserves the corresponding package semantics using its defined mapping. |
