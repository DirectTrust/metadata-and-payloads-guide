# 1.4.6 Reuse, Specialization, and Extensibility

MAP promotes reuse by separating generalized transaction requirements from the constraints necessary for a particular business use case. This separation allows common transaction behavior to be governed and maintained in the RTC while supporting multiple UC IGs with different implementation needs.

**GenTXDefs** define reusable actor responsibilities and transaction processing requirements. Their vocabulary bindings, cardinalities, and configurable aspects are generalized only to the extent needed for legitimate reuse. **UCTXDefs** select applicable GenTXDefs and establish the vocabulary bindings, cardinalities, information requirements, and processing constraints necessary for a specific use case. An inherited mandatory requirement must not be silently relaxed; permitted points of variation should be explicit.

If a use case requires a transaction not adequately represented in the RTC, it may introduce a new UCTXDef. Following publication, the new pattern is considered through DirectTrust/MAP governance for possible generalization into a GenTXDef. Generalization is a review and approval process, not an automatic consequence of publication.

Extensibility means defined and governed variation, not unrestricted alteration of common semantics. Identifiers retain appropriate assigning authorities or namespaces, coded concepts identify their code systems, and terminology bindings identify their scope and binding strength. Chapter 3 supplies the detailed technical requirements for those representations; Section 1.4.5 explains their relationship to identity, context, and provenance.
