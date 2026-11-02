# D.2 Bundle Requirements

FHIR R4 Collection Bundle representation and mapping requirements.

The FHIR representation of the MAP Structured Package Payload SHALL use a FHIR R4 Bundle with Bundle.type set to collection.

The Collection Bundle SHALL contain the resources necessary to represent the SubmissionSet, its submitted information objects, and applicable supporting information.

FHIR XML and FHIR JSON are permitted serializations of the outer MAP Collection Bundle. The selected serialization SHALL be identified consistently by its applicable media type, application/fhir+xml or application/fhir+json. The serialization of an independently submitted FHIR Collection Bundle carried in Binary is governed by Section D.5.

## Bundle Contents

The Collection Bundle SHALL contain:

- Exactly one FHIR List representing the current transaction SubmissionSet (List.mode=working). Additional FHIR Lists, including an original SubmissionSet identification snapshot (List.mode=snapshot), MAY be included only as specified by the applicable Transaction Definition and SHALL NOT be counted as additional current SubmissionSets.

- A DocumentReference for each submitted information object represented as a DocumentEntry.

- The resources or attachments necessary to make the submitted information objects available in accordance with the applicable packaging requirements.

The Collection Bundle MAY additionally contain:

- One Workflow Activity Task, subject to the requirements of the applicable Transaction Definition.

- Provenance resources, where applicable.

- Supporting resources necessary to interpret, resolve, or process the submitted information.

## SubmissionSet Membership

The current transaction SubmissionSet List SHALL identify its submitted information objects through List.entry references. An original SubmissionSet identification snapshot MAY omit List.entry because its purpose is to preserve identification metadata rather than reproduce the original package membership. Transaction-specific rules determine the applicable membership obligations.

The presence of a resource in Bundle.entry does not, by itself, establish that the resource is a member of the SubmissionSet.

Supporting resources MAY be included in the Collection Bundle without being represented as submitted information objects in the SubmissionSet.

## Resource Identification and References

Resources included in the Collection Bundle SHALL have sufficient identification to support resolution of references required by the applicable MAP metadata and processing requirements.

The Bundle’s resource references SHALL preserve the distinctions among:

- The identity of the SubmissionSet metadata object.

- The identity of each submitted information object.

- The identity of the FHIR resources representing those objects.

- The relationships among submitted information objects and supporting resources.

FHIR resource logical identifiers SHALL NOT be substituted for IHE-defined metadata identifiers where the applicable mapping requires a distinct identifier.

## Relationship to Transaction Definitions

This section establishes common FHIR Collection Bundle packaging requirements. The applicable Transaction Definition specifies any additional requirements concerning the presence, content, and processing of particular resources.

Transaction-specific requirements SHALL NOT be inferred solely from the presence of a resource type in the common packaging model.

