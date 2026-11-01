# D.3 SubmissionSet to FHIR List Mapping

Status: Five-part organization approved. Tables are working mappings; candidate paths are not approved normative mappings.

### D.3.1 Mapping Principles and Governing Profiles

Approved design direction: use IHE MHD Minimal SubmissionSet as the preferred base for the MAP SubmissionSet List profile, subject to technical compatibility validation. Selecting Minimal does not reduce the metadata obligations already approved in MAP Chapter 3; it avoids inheriting additional constraints from MHD Comprehensive. The applicable GenTXDef may impose further transaction-specific requirements.

### D.3.2 Standard SubmissionSet Metadata Mapping

| XD field | FHIR candidate or mapping | Status |
| --- | --- | --- |
| entryUUID | List.identifier:entryUUID | Agreed; verify profile |
| uniqueId | List.identifier:uniqueId | Agreed; verify profile |
| sourceId | IHE ihe-sourceId extension | Verify path |
| submissionTime | List.date candidate | Verify |
| contentTypeCode | MHD content classification | Verify |
| patientId | List.subject candidate | Verify |
| author | List.source / MHD author representation | Verify |
| author.authorPerson | Author representation | Verify |
| author.authorInstitution | List.source / ihe-authorOrg as applicable | Verify |
| author.authorRole | Author representation | Verify |
| author.authorSpecialty | Author representation | Verify |
| author.authorTelecommunication | Author representation | Verify |
| intendedRecipient | MHD intended recipient | Verify |
| title | List.title candidate | Verify |
| comments | List.note candidate | Verify |
| availabilityStatus | MHD metadata status | Verify |
| homeCommunityId | IHE community identifier | Verify |
| limitedMetadata | IHE limited metadata | Verify |


### D.3.3 MAP-defined SubmissionSet Extension Mappings

| Extension | XD Slot | FHIR mapping status |
| --- | --- | --- |
| purpose | urn:dt-org:dsm:map:purpose | Verify map-submission-purpose; Required vs Extensible conflict |
| sourcePatientId | urn:dt-org:dsm:map:sourcePatientId | Exact FHIR representation pending |
| sourcePatientInfo | urn:dt-org:dsm:map:sourcePatientInfo | Exact FHIR representation pending |
| referenceIdList | urn:dt-org:dsm:map:referenceIdList | Exact representation and DTContextTypeCodeVS binding pending |


### D.3.4 SubmissionSet Membership and Identifier Relationships

List.entry represents SubmissionSet membership; Bundle.entry alone does not. List.id and Bundle.identifier must not replace IHE SubmissionSet uniqueId or entryUUID. The representation must preserve relationships between submitted information objects and supporting resources.

### D.3.5 Conformance and Unresolved Mapping Constraints

MAP-OI-001: validate compatibility of the IHE MHD Minimal SubmissionSet profile with MAP Chapter 3 requirements, identifier slices, four extensions, cardinalities, and bindings. Do not finalize unverified element paths or profile inheritance.
