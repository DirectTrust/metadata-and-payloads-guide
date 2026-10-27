# 3.7.3 DocumentEntry Metadata Inventory

The DocumentEntry inventory identifies the metadata fields describing each included information object, its identity, classification, authorship, clinical times, and package location.

| Metadata field | Conf. | Cardinality | MAP extension | Meaning and population rule | XD encoding |
| --- | --- | --- | --- | --- | --- |
| entryUUID | R | 1..1 | No | Metadata entry identity; distinct from uniqueId. | @id |
| uniqueId | R | 1..1 | No | Artifact identity assigned by its creator; preserve an established identifier. | ExternalIdentifier |
| objectType | R | 1..1 | No | Stable DocumentEntry for a packaged file; UUID urn:uuid:7edca82f-054d-47f2-a032-9b2a5b5186c1. | @objectType |
| mimeType | R | 1..1 | No | Actual IANA media type of the described object. For every primary or secondary CDA document, SHALL be application/cda+xml. See Section 3.5.4 and Appendix D. | @mimeType |
| URI | R | 1..1 | No | Relative XDM package locator that resolves to the actual file. | Slot: URI |
| hash | R | 1..1 | No | SHA-1 hash of the exact packaged bytes. | Slot: hash |
| size | R | 1..1 | No | Byte count of the same packaged file. | Slot: size |
| title | O | 0..1 | No | Human-readable artifact title. | Name |
| comments | O | 0..1 | No | Additional explanation about the artifact. | Description |
| classCode | RE | 0..1 | No | Broad object classification; common binding or artifact-specific fixed value applies. Document Category alignment is governed by the declared exchange policy; see Chapter T. | Classification |
| typeCode | R | 1..1 | No | Specific information-object type; standard LOINC code or explicitly defined temporary code. SHALL NOT be omitted or replaced by a Shared Activity code. For clinical documents, this is Document Type as defined in Chapter T. | Classification |
| formatCode | RE | 0..1 | No | Established technical format/profile; omit when unknown. | Classification |
| confidentialityCode | RE | 0..* | No | Applicable security/privacy classifications; do not assume N universally. | Classification(s) |
| languageCode | RE | 0..1 | No | Known human language of the character content. | Slot: languageCode |
| creationTime | RE | 0..1 | No | CDA: Assembler/Composer time; effectiveTime fallback. HL7 V2: MSH-7. Preserve source meaning under Section 3.6.4. | Slot: creationTime |
| serviceStartTime | RE | 0..1 | No | Known start of the service documented by the artifact. | Slot: serviceStartTime |
| serviceStopTime | RE | 0..1 | No | Known end of that service. | Slot: serviceStopTime |
| eventCodeList | O | 0..* | No | Clinical acts/events documented by the artifact; not the MAP transaction code. | Classification(s) |
| healthcareFacilityTypeCode | RE | 0..1 | No | Facility type associated with the documented activity; common binding applies. | Classification |
| practiceSettingCode | RE | 0..1 | No | Clinical practice setting associated with the documented activity. | Classification |
| patientId | C | 0..1 | No | Required when the recipient/exchange patient ID is known; consistent with SubmissionSet.patientId. | ExternalIdentifier |
| sourcePatientId | RE | 0..1 | No | Patient ID in the local source domain of the described information. | Slot: sourcePatientId |
| sourcePatientInfo | RE | 0..* fields | No | Source patient demographics, using IHE PID-field encoding. | Slot: sourcePatientInfo |
| referenceIdList | C | 0..* | No | Context identifiers required for this artifact by the TX Definition; CXi encoding. | Slot: referenceIdList |
| author | RE | 0..* | No | Known human/device author of the artifact; distinguish package author from artifact author. | Author Classification |
| author.authorPerson | RE | 0..1 / author | No | Known individual author; XCN encoding. | Author Slot: authorPerson |
| author.authorInstitution | RE | 0..* / author | No | Known associated institution(s); XON encoding. | Author Slot: authorInstitution |
| author.authorRole | RE | 0..* / author | No | Known activity-specific author function; common binding. | Author Slot: authorRole |
| author.authorSpecialty | RE | 0..* / author | No | Known specialty; common binding. | Author Slot: authorSpecialty |
| author.authorTelecommunication | RE | 0..* / author | No | Known contact information, including Direct where applicable; XTN encoding. | Author Slot: authorTelecommunication |
| legalAuthenticator | O | 0..1 | No | Established artifact legal authenticator; do not infer attestation from packaging. | Slot: legalAuthenticator |
| availabilityStatus | O | 0..1 | No | DocumentEntry availability status when supplied; distinct from workflow status or Task.status. | @status |
| homeCommunityId | O | 0..1 | No | Established community ID when relevant; not the source organization OID. | @home |
| repositoryUniqueId | O | 0..1 | No | Established repository OID if relevant; do not invent one for a ZIP. | Slot: repositoryUniqueId |
| limitedMetadata | O | 0..1 flag | No | Use only to indicate applicable metadata-limited treatment; not a generic missing-field flag. | Classification |

FHIR mapping. These tables specify XD metadata for MAP Direct/XDM packaging. Appendix D, FHIR Collection Bundle Packaging, defines the corresponding FHIR elements, IHE MHD extensions, and mappings for MAP extensions. Metadata semantics and transaction requirements remain consistent across representations.
