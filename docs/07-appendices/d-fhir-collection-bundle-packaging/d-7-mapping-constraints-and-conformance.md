# D.7 Mapping Constraints and Conformance

This section identifies constraints governing the FHIR representation of MAP metadata and submitted information objects. It supplements Sections D.2–D.6 without changing the information requirements established in Chapter 3.

### D.7.1 Governing Profiles and Constraint Precedence

The FHIR Collection Bundle representation SHALL conform to the applicable MAP FHIR profiles and the requirements established in this appendix. The MAP SubmissionSet List and DocumentReference representations SHALL preserve the corresponding Chapter 3 metadata requirements, including required elements, cardinalities, identifier semantics, and terminology bindings.

IHE MHD Minimal SubmissionSet and Minimal DocumentReference are preferred profile foundations, subject to compatibility verification. Selection of a Minimal profile SHALL NOT reduce any Chapter 3 metadata obligation. Additional applicable Transaction Definition requirements remain in force.

### D.7.2 Mapping Completeness and Semantic Equivalence

The FHIR representation SHALL preserve the information content and meaning of applicable Chapter 3 SubmissionSet and DocumentEntry metadata. Mappings SHALL preserve the distinction between FHIR resource identifiers and logical identifiers of submitted information objects.

Where XD metadata is represented by FHIR extensions or combinations of elements, the representation SHALL preserve its required semantics, cardinality, and applicable terminology binding. Additional optional FHIR capabilities SHALL NOT be interpreted as permission to relax MAP constraints.

The FHIR representation SHALL preserve the distinction between submitted information objects, SubmissionSet membership, Workflow Activity Task information, and supporting resources.

### D.7.3 Conformance and Implementation Dependencies

A conforming MAP FHIR Collection Bundle SHALL satisfy applicable requirements of Sections D.1–D.6 and governing Chapter 3 requirements. The applicable Transaction Definition determines which optional information objects, Provenance activities, and transaction-specific constraints apply.

Conformance claims dependent on mappings or profile compatibility under verification require those dependencies to be resolved in the applicable MAP FHIR artifacts. This appendix SHALL NOT be interpreted as requiring conformance to an entire IHE MHD transaction specification unless explicitly required elsewhere in MAP.
