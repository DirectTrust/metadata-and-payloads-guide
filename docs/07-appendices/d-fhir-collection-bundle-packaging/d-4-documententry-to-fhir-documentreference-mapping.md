# D.4 DocumentEntry to FHIR DocumentReference Mapping

Status: Seven-part organization approved; field-level mappings are a working inventory, subject to FHIR R4 / IHE MHD Minimal DocumentReference compatibility verification. The approved Chapter 3 inventory contains 35 DocumentEntry fields; none may be silently omitted or relaxed.

### D.4.1 Mapping Principles and Governing Profiles

Use IHE MHD Minimal DocumentReference as the preferred profile foundation, subject to compatibility verification. Preserve Chapter 3 cardinalities, terminology bindings, metadata semantics, and distinct FHIR resource versus IHE DocumentEntry identifiers.

### D.4.2 DocumentEntry Identity and Lifecycle Metadata

uniqueId maps to DocumentReference.masterIdentifier (with optional MHD identifier:uniqueId alignment); entryUUID maps to DocumentReference.identifier:entryUUID, not DocumentReference.id. creationTime maps to DocumentReference.content.attachment.creation, not DocumentReference.date. availabilityStatus to DocumentReference.status requires semantic conversion; objectType and limitedMetadata remain open.

### D.4.3 Document Classification and Clinical Context

Working mappings: classCode → category; typeCode → type; formatCode → content.format; confidentialityCode → securityLabel; languageCode → content.attachment.language; serviceStartTime/serviceStopTime → context.period; eventCodeList → context.event; healthcareFacilityTypeCode → context.facilityType; practiceSettingCode → context.practiceSetting. Preserve XD cardinalities where FHIR allows additional repetitions.

### D.4.4 Patient, Author, and Organizational Metadata

Working mappings: patientId → subject; sourcePatientId → context.sourcePatientInfo.identifier; sourcePatientInfo → context.sourcePatientInfo.reference; legalAuthenticator → authenticator. Author subfields and exact sourcePatientInfo representation require verification.

### D.4.5 Content Location, Format, and Integrity

Working mappings: mimeType → content.attachment.contentType; URI → content.attachment.url; hash → content.attachment.hash; size → content.attachment.size; title → content.attachment.title; comments → description. repositoryUniqueId mapping remains open. CDA contentType SHALL be application/cda+xml for primary and secondary CDA documents.

### D.4.6 Relationships and Context Identifiers

referenceIdList is a candidate for context.encounter and/or context.related, subject to Context TypeCode and identifier semantics verification. homeCommunityId maps to the applicable ihe-HomeCommunityId extension subject to verification.

### D.4.7 Conformance and Mapping Constraints

All 35 DocumentEntry fields and nine Extensible terminology bindings from Chapter 3 remain governing requirements. This summary records accepted design decisions and candidate mappings, not final validation of every FHIR path. Chapter 3 establishes no MAP-defined DocumentEntry extensions.
