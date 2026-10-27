# 5.1.5 Responsibility and Provenance Must Survive Exchange

Technology roles do not automatically become information-responsibility roles. An Intermediary can receive, route, assemble, transform, or retransmit information without becoming the original Information Source. Implementations should preserve upstream provenance and add provenance for the activities they actually perform rather than overwriting the story of where the information came from.

Appendix A provides deeper document-oriented treatment of authorship, authentication, transformation, and lifecycle. The current Transaction Framework and Transaction Definitions specify the provenance that must be represented for particular exchanges.

Each Provenance information object is a separate FHIR Collection Bundle containing one or more Provenance resources. The structured payload may carry multiple such bundles, each with its own DocumentEntry/DocumentReference metadata and SubmissionSet/List membership. An intermediary can add independently attributable assertions without modifying bundles supplied by others. Required and permitted activities are specified in Section 2.4 and assigned to grouped Actors in Section 6 of the applicable Transaction Definition.

Share the required Provenance for activities occurring during the transaction, and permitted additional assertions useful to the distributed workflow. Assertions available at package finalization may travel in that structured payload; later activities may be recorded locally or communicated in subsequent transactions. Include targeted information objects and apply Appendix D’s reference rules; do not assume that a nested Bundle can resolve an outer target through implicit scope.
