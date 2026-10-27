# Chapter 1 — Introduction, Scope, and Architectural Principles

This chapter establishes the scope, architectural model, foundational principles, and conformance boundaries of MAP. It explains how a UC IG selects and constrains RTC GenTXDefs as UCTXDefs and why authoring governance is not the same as exchange conformance.
The framework distinguishes common architectural requirements, governed catalog GenTXDefs, and UC IG UCTXDefs; it also separates exchange conformance from authoring governance.

> Proposed 20260828 development baseline, reconstructed October 2026; Author review required.

- [1.2 Scope and Applicability](./1-2-scope-and-applicability.md)
- [1.2.1 Information Exchange Scope](./1-2-1-information-exchange-scope.md)
- [1.2.2 Exchange Technologies and Representations](./1-2-2-exchange-technologies-and-representations.md)
- [1.2.3 Relationship to Existing Standards and Implementation Guides](./1-2-3-relationship-to-existing-standards-and-implementation-guides.md)
- [1.2.4 What the MAP Framework Does Not Specify](./1-2-4-what-the-map-framework-does-not-specify.md)
- [1.3 MAP Architectural Model](./1-3-map-architectural-model.md)
- [1.3.1 Common Framework Requirements](./1-3-1-common-framework-requirements.md)
- [1.3.2 Reusable Transaction Definitions](./1-3-2-reusable-transaction-definitions.md)
- [1.3.3 Use-Case Implementation Guides](./1-3-3-use-case-implementation-guides.md)
- [1.3.4 Relationship to the MAPUC Author Kit](./1-3-4-relationship-to-the-mapuc-author-kit.md)
- [1.4 Foundational Architectural Principles](./1-4-foundational-architectural-principles.md)
- [1.4.1 Two-Party Information Exchange](./1-4-1-two-party-information-exchange.md)
- [1.4.2 Separation of Business Intent and Technical Exchange](./1-4-2-separation-of-business-intent-and-technical-exchange.md)
- [1.4.3 Human-Readable Communication and Structured Payloads](./1-4-3-human-readable-communication-and-structured-payloads.md)
- [1.4.4 Progressive Interoperability and Minimally Structured Documents](./1-4-4-progressive-interoperability-and-minimally-structured-documents.md)
- [1.4.5 Preservation of Information Identity, Context, and Provenance](./1-4-5-preservation-of-information-identity-context-and-provenance.md)
- [1.4.6 Reuse, Specialization, and Extensibility](./1-4-6-reuse-specialization-and-extensibility.md)
- [1.5 Conformance and Requirements Organization](./1-5-conformance-and-requirements-organization.md)
- [1.5.1 Common Framework Requirements](./1-5-1-common-framework-requirements.md)
- [1.5.2 Transaction-Specific Requirements](./1-5-2-transaction-specific-requirements.md)
- [1.5.3 Use-Case-Specific Constraints](./1-5-3-use-case-specific-constraints.md)
- [1.5.4 Normative and Informative Content](./1-5-4-normative-and-informative-content.md)
- [1.6 Framework Organization and Supporting Artifacts](./1-6-framework-organization-and-supporting-artifacts.md)

# 1.1 Purpose of the MAP Framework

MAP establishes a reusable architectural foundation for interoperable information exchange over Direct and related edge arrangements. Its purpose is to make exchange agreements more explicit and consistent: who is participating, what shared activity a transaction represents, how information is identified and packaged, and which processing obligations apply.

The original February 2026 Framework also offered step-by-step guidance for IG authors. The Summer 2026 pilot experience showed that architectural rules and authoring methodology should be maintained separately. This chapter therefore describes the architecture; the MAPUC Author Kit explains how to author derivative specifications.
