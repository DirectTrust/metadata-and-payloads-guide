# Appendix D — FHIR Metadata and Payload Mapping

MAP Framework 20261016 • Consolidated Technical Mapping Draft V6 • 2026-11-02

Coordinated mapping revision: preserves the independent FHIR R4 List profiling model, current working List and original snapshot List distinction, and the original sourcePatientId correlation mapping.

FHIR Profiling Approach and Alignment with IHE MHD. The MAP Framework adopts independent FHIR profiling with deliberate alignment to IHE Mobile Access to Health Documents (MHD). MAP FHIR profiles are defined against applicable FHIR R4 base resources and do not require formal inheritance from IHE MHD profiles. MAP reuses established IHE MHD metadata conventions, extensions, and resource representation patterns wherever appropriate. MAP-specific profiles and extensions express requirements established by the MAP Framework, including requirements not addressed by IHE MHD or requiring a different representation. Differences from IHE MHD are documented where they affect interoperability or implementation expectations. Alignment does not itself establish conformance to IHE MHD profiles; conformance claims require satisfaction of applicable requirements and appropriate validation evidence. This appendix specifies FHIR mappings for MAP metadata. Governing metadata semantics, cardinalities, and obligations remain those established by the normative MAP Framework requirements.


- [D.1](d-1-core-packaging-pattern.md)
- [D.2](d-2-bundle-requirements.md)
- [D.3](d-3-submissionset-to-fhir-list-mapping.md)
- [D.4](d-4-documententry-to-fhir-documentreference-mapping.md)
- [D.5](d-5-representing-the-payload-objects.md)
- [D.6](d-6-provenance-collection-bundles-and-target-resolution.md)
- [D.7](d-7-mapping-constraints-and-conformance.md)
