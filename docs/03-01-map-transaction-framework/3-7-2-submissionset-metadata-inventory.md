# 3.7.2 SubmissionSet Metadata Inventory

The SubmissionSet inventory identifies the package-level fields used to describe the workflow unit, its participants, patient information, and context.

| Metadata field | Conf. | Cardinality | MAP extension | Meaning and population rule | XD encoding |
| --- | --- | --- | --- | --- | --- |
| entryUUID | R | 1..1 | No | Metadata entry identity; distinct from uniqueId. | @id |
| uniqueId | R | 1..1 | No | SubmissionSet Workflow Activity identifier; matches designated Task.identifier when Task is present. | ExternalIdentifier |
| sourceId | R | 1..1 | No | Organization Identity OID of the contributor of this SubmissionSet; apply the current transaction perspective. | ExternalIdentifier |
| submissionTime | R | 1..1 | No | Time the creating entity assembled the SubmissionSet; not clinical encounter time. | Slot: submissionTime |
| contentTypeCode | RE | 0..1 | No | Package-content classification; establishes expectations for constituent DocumentEntry.typeCode values. Principal DocumentEntry typeCode unless the Transaction Definition specifies otherwise; other permitted objects may differ. | Classification |
| purpose | R | 1..1 | Yes | Shared Activity; aligns with Task.code when Task is present and the common binding. | MAP Slot: urn:dt-org:dsm:map:purpose |
| patientId | C | 0..1 | No | Required when a recipient/exchange-domain patient identifier is known. Do not substitute the source local ID. | ExternalIdentifier |
| sourcePatientId | C | 0..* | Yes; promoted | For a single-patient package, include known Information Source patient IDs, with assigning authorities. | MAP Slot: urn:dt-org:dsm:map:sourcePatientId |
| sourcePatientInfo | C | 0..1 set | Yes; promoted | Required when all DocumentEntries concern one patient, even when patientId is known; preserve source demographic semantics. | MAP Slot: urn:dt-org:dsm:map:sourcePatientInfo |
| referenceIdList | C | 0..* | Yes; promoted | Include established Context identifiers required by the TX Definition; preserve CXi type and authority. | MAP Slot: urn:dt-org:dsm:map:referenceIdList |
| author | R | 1..1 | No | Exactly one package author identifies the Organization initiating the requested Shared Activity and MAY identify a person acting for that Organization. The Content Creator SHALL isolate this author from other artifact authors. Author Organization and contributing source Organization are distinct roles, even when the same Organization fulfills both. | Author Classification |
| author.authorPerson | RE | 0..1 / author | No | Known individual author; XCN encoding. | Author Slot: authorPerson |
| author.authorInstitution | R | 1..1 / author | No | Organization initiating the requested Shared Activity; exactly one institution, encoded as XON. May be accompanied by an author person acting for that Organization. | Author Slot: authorInstitution |
| author.authorRole | RE | 0..* / author | No | Known activity-specific author function; common binding. | Author Slot: authorRole |
| author.authorSpecialty | RE | 0..* / author | No | Known specialty; common binding. | Author Slot: authorSpecialty |
| author.authorTelecommunication | RE | 0..* / author | No | Known contact information, including Direct where applicable; XTN encoding. | Author Slot: authorTelecommunication |
| intendedRecipient | RE | 0..* | No | Intended organizations/persons; not automatically every transport intermediary. | Slot: intendedRecipient |
| title | O | 0..1 | No | Human-readable collection/workflow-unit title. | Name |
| comments | O | 0..1 | No | Additional package explanation. | Description |
| availabilityStatus | O | 0..1 | No | SubmissionSet status: Approved when supplied; distinct from workflow status or Task.status. | @status |
| homeCommunityId | O | 0..1 | No | Established community ID when relevant; not the source organization OID. | @home |
| limitedMetadata | O | 0..1 flag | No | Use only to indicate applicable metadata-limited treatment; not a generic missing-field flag. | Classification |

FHIR mapping. These tables specify XD metadata for MAP Direct/XDM packaging. Appendix D, FHIR Collection Bundle Packaging, defines the corresponding FHIR elements, IHE MHD extensions, and mappings for MAP extensions. Metadata semantics and transaction requirements remain consistent across representations.

FHIR SubmissionSet List profile. For the FHIR Metadata option, the current SubmissionSet for each workflow unit SHALL be represented by a FHIR R4 List conforming to the DirectTrust MAP SubmissionSet List StructureDefinition (http://objects.directtrust.org/standards/fhir/StructureDefinition/map-submissionset-list). This profile is based on FHIR R4 List and adopts selected IHE MHD elements and extensions; its use does not, by itself, assert conformance to the complete IHE MHD SubmissionSet or ITI-65 transaction profiles. TX8 originating-package identification snapshot is a separate information object governed by its dedicated snapshot profile and SHALL NOT be treated as the current SubmissionSet List.

FHIR SubmissionSet source organization mapping. When FHIR metadata is selected, SubmissionSet.sourceId SHALL be represented by exactly one List-level extension with URL https://profiles.ihe.net/ITI/MHD/StructureDefinition/ihe-sourceId. Its valueIdentifier.value SHALL contain the established Organization Identity OID of the entity contributing the current SubmissionSet, expressed as `urn:oid:<OID>`. This uses the IHE MHD sourceId mapping; a separate MAP source-organization extension SHALL NOT substitute for it.

Author and source roles. List.source represents the author who or device that defined the List contents. In FHIR R4 its allowed reference targets are Practitioner, PractitionerRole, Patient and Device; it SHALL NOT directly reference an Organization. When the author organization is represented through the IHE mapping, the optional extension https://profiles.ihe.net/ITI/MHD/StructureDefinition/ihe-authorOrg SHALL be placed on List.source and carry a valueReference to the author Organization. The author organization and the contributing source identified by ihe-sourceId are distinct roles; their identities MAY coincide when the same organization actually performs both roles.

Transaction perspective. The ihe-sourceId value SHALL identify the source of the current MAP Transaction Instance. In TX8 it identifies the entity contributing the return Workflow Status SubmissionSet, rather than automatically copying the sourceId of the originating transaction. This mapping applies across the Transaction Definitions that use FHIR SubmissionSet metadata.

IHE mapping reference: Mobile access to Health Documents (MHD), SubmissionSet Minimal profile, https://profiles.ihe.net/ITI/MHD/StructureDefinition-IHE.MHD.Minimal.SubmissionSet.html, and sourceId example, https://profiles.ihe.net/ITI/MHD/List-ex-minimalSubmissionSet.json.html. These sources were reviewed in publication 4.2.5-comment, based on FHIR R4. Adoption of this sourceId mapping does not by itself assert conformance to every constraint of an MHD SubmissionSet profile.
