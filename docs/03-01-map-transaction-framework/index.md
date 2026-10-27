# Chapter 3 — MAP Transaction Framework

The common MAP Transaction Framework defines the Shared Activity model, transaction identity, Technical Actor responsibilities, structured payloads, metadata, message packaging, workflow status concepts, and provenance. It applies to use-case transaction definitions without requiring a preexisting catalog entry.

**Retrospective development baseline (20260828):** The Reusable Transaction Catalog (RTC) is established conceptually but contains **no Generalized Transaction Definitions (GenTXDefs)**. Use-Case Transaction Definitions (UCTXDefs) may be authored directly from the Framework. Material generalized from October 2026 maternal-health drafts is adapted here as a reconstruction, not represented as already published on August 28. Later transaction-specific requirements and provisional technical artifacts do not become universal requirements by their appearance in the source drafts.

> **20261016 working RTC integration:** Eight provisional transaction-definition source files are available under [03-02 MAP Transaction Definitions](../03-02-map-transaction-definitions/). They are copied from the Maternal Health Birth IG and have not yet undergone GenTXDef generalization. Historical 20260828 baseline statements below describe the earlier baseline, not the October working inventory.

## Sections

- [3 1 1 standard transaction definition structure](3-1-1-standard-transaction-definition-structure.md)
- [3 10 provenance across the transaction lifecycle](3-10-provenance-across-the-transaction-lifecycle.md)
- [3 11 putting the framework together](3-11-putting-the-framework-together.md)
- [3 2 1 a transaction is a two party shared activity](3-2-1-a-transaction-is-a-two-party-shared-activity.md)
- [3 2 2 transaction identity follows the shared activity](3-2-2-transaction-identity-follows-the-shared-activity.md)
- [3 2 3 transaction instance and transport correlation](3-2-3-transaction-instance-and-transport-correlation.md)
- [3 2 4 each transaction instance establishes its own perspective](3-2-4-each-transaction-instance-establishes-its-own-perspective.md)
- [3 2 transaction model and identifiers](3-2-transaction-model-and-identifiers.md)
- [3 3 1 three independent accountability lenses](3-3-1-three-independent-accountability-lenses.md)
- [3 3 2 technical actor roles and grouping](3-3-2-technical-actor-roles-and-grouping.md)
- [3 3 3 relationship between transaction participants and technical actors](3-3-3-relationship-between-transaction-participants-and-technical-actors.md)
- [3 3 technical actor roles and accountability](3-3-technical-actor-roles-and-accountability.md)
- [3 4 transaction processing lifecycle and the message to payload handoff](3-4-transaction-processing-lifecycle-and-the-message-to-payload-handoff.md)
- [3 5 1 independently processable workflow unit](3-5-1-independently-processable-workflow-unit.md)
- [3 5 2 submissionset and its relationship to the task](3-5-2-submissionset-and-its-relationship-to-the-task.md)
- [3 5 3 workflow activity task](3-5-3-workflow-activity-task.md)
- [3 5 4 structured payload contents](3-5-4-structured-payload-contents.md)
- [3 5 5 structured payload completeness and resource references](3-5-5-structured-payload-completeness-and-resource-references.md)
- [3 5 workflow unit and structured payload architecture](3-5-workflow-unit-and-structured-payload-architecture.md)
- [3 6 1 patient identity and patient matching for push transactions](3-6-1-patient-identity-and-patient-matching-for-push-transactions.md)
- [3 6 2 context instance identifiers and type codes](3-6-2-context-instance-identifiers-and-type-codes.md)
- [3 6 3 information classification and metadata derivation](3-6-3-information-classification-and-metadata-derivation.md)
- [3 6 4 clinical snapshot and document assembly time](3-6-4-clinical-snapshot-and-document-assembly-time.md)
- [3 6 patient identity context and information classification](3-6-patient-identity-context-and-information-classification.md)
- [3 7 1 inventory scope and conformance](3-7-1-inventory-scope-and-conformance.md)
- [3 7 2 submissionset metadata inventory](3-7-2-submissionset-metadata-inventory.md)
- [3 7 3 documententry metadata inventory](3-7-3-documententry-metadata-inventory.md)
- [3 7 4 map extension slots and membership associations](3-7-4-map-extension-slots-and-membership-associations.md)
- [3 7 5 common terminology binding rules](3-7-5-common-terminology-binding-rules.md)
- [3 7 6 submissionset terminology bindings](3-7-6-submissionset-terminology-bindings.md)
- [3 7 7 documententry terminology bindings](3-7-7-documententry-terminology-bindings.md)
- [3 7 xd metadata requirements and terminology bindings](3-7-xd-metadata-requirements-and-terminology-bindings.md)
- [3 8 1 map message header metadata direct transport requirements](3-8-1-map-message-header-metadata-direct-transport-requirements.md)
- [3 8 2 map message header metadata xd edge transport requirements](3-8-2-map-message-header-metadata-xd-edge-transport-requirements.md)
- [3 8 3 map message header metadata additional requirements](3-8-3-map-message-header-metadata-additional-requirements.md)
- [3 8 4 common mime packaging and human readable content preservation](3-8-4-common-mime-packaging-and-human-readable-content-preservation.md)
- [3 8 5 direct message delivery notification and workflow status updates](3-8-5-direct-message-delivery-notification-and-workflow-status-updates.md)
- [3 8 message and transport requirements](3-8-message-and-transport-requirements.md)
- [3 9 1 structured payload acceptance reporting](3-9-1-structured-payload-acceptance-reporting.md)
- [3 9 2 structured payload rejection reporting](3-9-2-structured-payload-rejection-reporting.md)
- [3 9 3 terminal outcome semantics](3-9-3-terminal-outcome-semantics.md)
- [3 9 4 correlation and multiple send workflow status deliveries](3-9-4-correlation-and-multiple-send-workflow-status-deliveries.md)
- [3 9 5 send workflow status terminates workflow status chaining](3-9-5-send-workflow-status-terminates-workflow-status-chaining.md)
- [3 9 6 common processing anomalies and transaction specific requirements](3-9-6-common-processing-anomalies-and-transaction-specific-requirements.md)
- [3 9 7 workflow status update endpoint accumulation](3-9-7-workflow-status-update-endpoint-accumulation.md)
- [3 9 8 missing workflow status and follow up](3-9-8-missing-workflow-status-and-follow-up.md)
- [3 9 workflow status and processing anomalies](3-9-workflow-status-and-processing-anomalies.md)

# 3.1 Framework and Transaction Definition Responsibilities

Chapter 2 selects and composes reusable Shared Activities from the MAP Reusable Transaction Catalog (MAP RTC) to address the use-case objectives. This chapter applies the Transaction Framework established in the MAP Framework Reference Guide: the common semantics, Technical Actor responsibilities, lifecycle, Workflow Activity Task, metadata, Context and correlation, transport, workflow status, and Provenance requirements. Each Transaction Definition specializes those requirements for a Shared Activity.

Common transaction requirements apply through the MAP Transaction Framework. The corresponding Transaction Definition establishes requirements specific to its Shared Activity. A use case selects and composes reusable transactions and states the additional clinical, participant, Context, and workflow requirements applicable to that use case.
