# D.7 Mapping Constraints and Conformance

This section identifies constraints governing the FHIR representation of MAP metadata and submitted information objects. It supplements Sections D.2–D.6 without changing the information requirements established in Chapter 3.

## D.7.1 Governing Profiles and Constraint Precedence

The MAP FHIR profiles derive independently from applicable FHIR R4 base resources. IHE MHD conventions and extension definitions are reused where they preserve MAP semantics. The normative Chapter 3 metadata requirements and applicable Transaction Definitions govern MAP conformance; a different external profile does not override those obligations.

IHE MHD Minimal SubmissionSet and Minimal DocumentReference are alignment references, not required baseDefinition parents. Conformance to MAP profiles does not itself establish conformance to IHE MHD. Where both are claimed, each applicable profile must be validated separately.

## D.7.2 Mapping Completeness and Semantic Equivalence

The FHIR representation SHALL preserve the information content and meaning of applicable Chapter 3 SubmissionSet and DocumentEntry metadata. Mappings SHALL preserve the distinction between FHIR resource identifiers and logical identifiers of submitted information objects.

Where XD metadata is represented by FHIR extensions or combinations of elements, the representation SHALL preserve its required semantics, cardinality, and applicable terminology binding. Additional optional FHIR capabilities SHALL NOT be interpreted as permission to relax MAP constraints.

The FHIR representation SHALL preserve the distinction between submitted information objects, SubmissionSet membership, Workflow Activity Task information, and supporting resources. SubmissionSet.contentTypeCode defaults to the Primary Information Object DocumentEntry.typeCode (same code and code system); an explicit UCTXDef MAY define an alternative classification and its processing implications. GenTXDefs do not override this default.

## D.7.3 Conformance and Implementation Dependencies

A conforming MAP FHIR Collection Bundle SHALL satisfy applicable requirements of Sections D.1–D.6 and governing Chapter 3 requirements. The applicable Transaction Definition determines which optional information objects, Provenance activities, and transaction-specific constraints apply.

The accompanying MAP StructureDefinitions establish the MAP-specific extension representation. Implementations SHALL apply conditional metadata rules from Chapter 3, even where a resource profile cannot express those rules as FHIRPath invariants. Formal validator execution and full round-trip tests are outstanding quality assurance work; they are not represented here as completed.
