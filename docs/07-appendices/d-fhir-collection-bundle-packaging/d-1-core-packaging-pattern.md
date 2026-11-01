# D.1 Core Packaging Pattern

Status: Approved; predecessor reconciliation pending.

The MAP Framework supports a FHIR representation of the Structured Package Payload exchanged in a MAP Transaction Instance. This appendix specifies the common FHIR packaging and metadata mapping guidance applicable across MAP transactions.

A MAP Transaction Instance consists of one Direct message containing exactly two MIME parts. The first MIME part provides human-readable message content. The second MIME part contains one Structured Package Payload.

For the FHIR metadata representation, the Structured Package Payload is represented using a FHIR Collection Bundle. The Bundle contains the resources needed to represent the SubmissionSet, submitted information objects, and applicable supporting information.

The FHIR representation preserves the common MAP package architecture:

- Exactly one SubmissionSet, represented using a FHIR List.
- One primary submitted information object and zero or more secondary submitted information objects.
- Zero or one Workflow Activity Task, unless the applicable Transaction Definition imposes a more restrictive requirement.
- Supporting resources, including Provenance information where applicable.
The SubmissionSet identifies the Shared Activity independently of whether a Workflow Activity Task is present. It also identifies the submitted information objects through its membership relationships.

The FHIR Collection Bundle provides a packaging representation of the Structured Package Payload. It does not change the semantics of the Shared Activity, the SubmissionSet, or the submitted information objects.

The detailed Bundle requirements are specified in Section D.2. SubmissionSet and DocumentEntry metadata mappings are specified in Sections D.3 and D.4, respectively.

Transaction-specific processing, additional constraints, and requirements are established by the applicable Transaction Definition rather than by this common packaging pattern.
