# D.4 DocumentEntry to FHIR DocumentReference Mapping

SubmissionSet-to-FHIR List mapping inventory.

## D.4.1 Mapping Principles and Governing Profiles

MAP DocumentEntry metadata is represented by FHIR R4 DocumentReference, using native elements where they preserve the Chapter 3 meaning and dedicated MAP extensions where no native field can preserve it. These mappings do not imply that a FHIR DocumentReference is itself the source document. The packaged object and its integrity metadata remain distinct.

## D.4.2 DocumentEntry Identity and Lifecycle Metadata

entryUUID → DocumentReference.identifier (typed entryUUID); uniqueId → DocumentReference.masterIdentifier; availabilityStatus → DocumentReference.status (Approved maps to current, with mapping documented); creationTime → DocumentReference.date only where the time denotes document creation and is consistent with Chapter 3; title → content.attachment.title; comments → description. Distinguish FHIR logical id from both business identifiers.

## D.4.3 Document Classification and Clinical Context

classCode → category; typeCode → type; formatCode → content.format; confidentialityCode → securityLabel; languageCode → content.attachment.language; serviceStartTime/serviceStopTime → context.period.start/end; eventCodeList → context.event; healthcareFacilityTypeCode → context.facilityType; practiceSettingCode → context.practiceSetting. Preserve coding system and source code; do not substitute the MAP purpose for DocumentEntry.typeCode.

## D.4.4 Patient, Author, and Organizational Metadata

patientId → subject when exchange-domain patient identity is known; sourcePatientId → context.sourcePatientInfo.identifier where appropriate; sourcePatientInfo → context.sourcePatientInfo (Patient resource/reference) only where original demographics are preserved; otherwise retain exact XD PID fields through a dedicated preservation extension. author → author references and associated organizations; legalAuthenticator → authenticator only when established. Package author and DocumentEntry author are not interchangeable.

## D.4.5 Content Location, Format, and Integrity

mimeType → content.attachment.contentType; URI → content.attachment.url (resolvable packaged object); hash → content.attachment.hash (FHIR R4 base64Binary representation of SHA-1 bytes, not the hexadecimal XD string); size → content.attachment.size (byte count); title → content.attachment.title; formatCode → content.format. The hash and size SHALL describe the exact packaged bytes. CreationTime is not automatically the attachment creation timestamp.

## D.4.6 Relationships and Context Identifiers

referenceIdList → context.encounter for encounter references where semantically appropriate; otherwise a dedicated typed Context Instance extension is needed to preserve CXi type, identifier and authority. homeCommunityId, repositoryUniqueId, and limitedMetadata require explicit extension representation if populated; do not fabricate these values. DocumentReference.relatesTo conveys supported document relationships, not SubmissionSet membership.

## D.4.7 Conformance and Mapping Constraints

All 35 DocumentEntry fields and Chapter 3 terminology bindings govern. The complete field-by-field mapping table below identifies native FHIR paths, MAP preservation extensions, and conditional population. When a native element cannot represent an XD distinction losslessly, retain source encoding in the preservation extension; do not silently discard it.

## D.4.7.1 Complete DocumentEntry Mapping Inventory

This inventory complements D.4.2–D.4.7. MAP preservation extensions referenced here are defined in the accompanying terminology package. Use them only when the native FHIR mapping cannot retain required XD semantics. Chapter 3 V10 cardinalities and bindings govern.

| Chapter 3 field                | FHIR R4 mapping                                                                       | Mapping note                                                                                                       |
|--------------------------------|---------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------|
| entryUUID                      | DocumentReference.identifier (typed entryUUID)                                        | Chapter 3 V10 cardinality and XD semantics govern; preserve source encoding where native FHIR cannot represent it. |
| uniqueId                       | DocumentReference.masterIdentifier                                                    | Chapter 3 V10 cardinality and XD semantics govern; preserve source encoding where native FHIR cannot represent it. |
| objectType                     | DocumentReference.content / stable DocumentEntry semantics; no direct FHIR element    | Chapter 3 V10 cardinality and XD semantics govern; preserve source encoding where native FHIR cannot represent it. |
| mimeType                       | DocumentReference.content.attachment.contentType                                      | Chapter 3 V10 cardinality and XD semantics govern; preserve source encoding where native FHIR cannot represent it. |
| URI                            | DocumentReference.content.attachment.url                                              | Chapter 3 V10 cardinality and XD semantics govern; preserve source encoding where native FHIR cannot represent it. |
| hash                           | DocumentReference.content.attachment.hash (base64 SHA-1)                              | Chapter 3 V10 cardinality and XD semantics govern; preserve source encoding where native FHIR cannot represent it. |
| size                           | DocumentReference.content.attachment.size                                             | Chapter 3 V10 cardinality and XD semantics govern; preserve source encoding where native FHIR cannot represent it. |
| title                          | DocumentReference.content.attachment.title                                            | Chapter 3 V10 cardinality and XD semantics govern; preserve source encoding where native FHIR cannot represent it. |
| comments                       | DocumentReference.description                                                         | Chapter 3 V10 cardinality and XD semantics govern; preserve source encoding where native FHIR cannot represent it. |
| classCode                      | DocumentReference.category                                                            | Chapter 3 V10 cardinality and XD semantics govern; preserve source encoding where native FHIR cannot represent it. |
| typeCode                       | DocumentReference.type                                                                | Chapter 3 V10 cardinality and XD semantics govern; preserve source encoding where native FHIR cannot represent it. |
| formatCode                     | DocumentReference.content.format                                                      | Chapter 3 V10 cardinality and XD semantics govern; preserve source encoding where native FHIR cannot represent it. |
| confidentialityCode            | DocumentReference.securityLabel                                                       | Chapter 3 V10 cardinality and XD semantics govern; preserve source encoding where native FHIR cannot represent it. |
| languageCode                   | DocumentReference.content.attachment.language                                         | Chapter 3 V10 cardinality and XD semantics govern; preserve source encoding where native FHIR cannot represent it. |
| creationTime                   | DocumentReference.date when semantically aligned; otherwise preservation extension    | Chapter 3 V10 cardinality and XD semantics govern; preserve source encoding where native FHIR cannot represent it. |
| serviceStartTime               | DocumentReference.context.period.start                                                | Chapter 3 V10 cardinality and XD semantics govern; preserve source encoding where native FHIR cannot represent it. |
| serviceStopTime                | DocumentReference.context.period.end                                                  | Chapter 3 V10 cardinality and XD semantics govern; preserve source encoding where native FHIR cannot represent it. |
| eventCodeList                  | DocumentReference.context.event                                                       | Chapter 3 V10 cardinality and XD semantics govern; preserve source encoding where native FHIR cannot represent it. |
| healthcareFacilityTypeCode     | DocumentReference.context.facilityType                                                | Chapter 3 V10 cardinality and XD semantics govern; preserve source encoding where native FHIR cannot represent it. |
| practiceSettingCode            | DocumentReference.context.practiceSetting                                             | Chapter 3 V10 cardinality and XD semantics govern; preserve source encoding where native FHIR cannot represent it. |
| patientId                      | DocumentReference.subject → Patient.identifier                                        | Chapter 3 V10 cardinality and XD semantics govern; preserve source encoding where native FHIR cannot represent it. |
| sourcePatientId                | DocumentReference.context.sourcePatientInfo.identifier                                | Chapter 3 V10 cardinality and XD semantics govern; preserve source encoding where native FHIR cannot represent it. |
| sourcePatientInfo              | DocumentReference.context.sourcePatientInfo (Patient) plus raw preservation as needed | Chapter 3 V10 cardinality and XD semantics govern; preserve source encoding where native FHIR cannot represent it. |
| referenceIdList                | DocumentReference.context.encounter or MAP typed-context extension                    | Chapter 3 V10 cardinality and XD semantics govern; preserve source encoding where native FHIR cannot represent it. |
| author                         | DocumentReference.author                                                              | Chapter 3 V10 cardinality and XD semantics govern; preserve source encoding where native FHIR cannot represent it. |
| author.authorPerson            | DocumentReference.author → Practitioner                                               | Chapter 3 V10 cardinality and XD semantics govern; preserve source encoding where native FHIR cannot represent it. |
| author.authorInstitution       | DocumentReference.author → Organization                                               | Chapter 3 V10 cardinality and XD semantics govern; preserve source encoding where native FHIR cannot represent it. |
| author.authorRole              | DocumentReference.author → PractitionerRole.code                                      | Chapter 3 V10 cardinality and XD semantics govern; preserve source encoding where native FHIR cannot represent it. |
| author.authorSpecialty         | DocumentReference.author → PractitionerRole.specialty                                 | Chapter 3 V10 cardinality and XD semantics govern; preserve source encoding where native FHIR cannot represent it. |
| author.authorTelecommunication | Author resource telecom; preservation extension if needed                             | Chapter 3 V10 cardinality and XD semantics govern; preserve source encoding where native FHIR cannot represent it. |
| legalAuthenticator             | DocumentReference.authenticator                                                       | Chapter 3 V10 cardinality and XD semantics govern; preserve source encoding where native FHIR cannot represent it. |
| availabilityStatus             | DocumentReference.status (Approved → current)                                         | Chapter 3 V10 cardinality and XD semantics govern; preserve source encoding where native FHIR cannot represent it. |
| homeCommunityId                | MAP preservation extension                                                            | Chapter 3 V10 cardinality and XD semantics govern; preserve source encoding where native FHIR cannot represent it. |
| repositoryUniqueId             | MAP preservation extension                                                            | Chapter 3 V10 cardinality and XD semantics govern; preserve source encoding where native FHIR cannot represent it. |
| limitedMetadata                | MAP preservation extension                                                            | Chapter 3 V10 cardinality and XD semantics govern; preserve source encoding where native FHIR cannot represent it. |

MAP XD preservation extension: http://objects.directtrust.org/standards/fhir/StructureDefinition/map-xd-metadata-preservation. Each repetition contains fieldName and xdValue. It is supplemental where native FHIR elements are also populated, and required when no native FHIR representation can preserve a populated XD field. Source values SHALL not be fabricated. The FHIR-to-XD reconstruction SHALL retain the original value and field identity.

