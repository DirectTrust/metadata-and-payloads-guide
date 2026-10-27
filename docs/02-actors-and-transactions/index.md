# Chapter 2 — Actors and Transactions

This chapter explains the participating parties, business roles, technical actors, transaction identities, and interaction patterns used in MAP models. It introduces how Generalized Transaction Definitions (GenTXDefs) in the Reusable Transaction Catalog (RTC) relate to Use-Case Transaction Definitions (UCTXDefs) in Use-Case Implementation Guides (UC IGs) and how external placeholder transactions can appear without creating MAP obligations.
The use-case analysis progresses from objectives to scenarios, responsible organizations, required exchanges, RTC evaluation, and architectural outputs. Transactions are selected only after the required exchanges are understood.

> Proposed 20260828 development baseline, reconstructed October 2026; Author review required.

- [2.1.1 Responsible Parties](./2-1-1-responsible-parties.md)
- [2.1.2 Organizational and Individual Capacities](./2-1-2-organizational-and-individual-capacities.md)
- [2.1.3 Business Roles and Responsibilities](./2-1-3-business-roles-and-responsibilities.md)
- [2.2 Transaction Participants and Participation Roles](./2-2-transaction-participants-and-participation-roles.md)
- [2.2.1 Sender and Receiver Participation](./2-2-1-sender-and-receiver-participation.md)
- [2.2.2 Initiator and Responder Relationships](./2-2-2-initiator-and-responder-relationships.md)
- [2.2.3 Participation Across Organizational Boundaries](./2-2-3-participation-across-organizational-boundaries.md)
- [2.3 Technical Actors and System Formations](./2-3-technical-actors-and-system-formations.md)
- [2.3.1 Technical Actor Responsibilities](./2-3-1-technical-actor-responsibilities.md)
- [2.3.2 Actor Grouping](./2-3-2-actor-grouping.md)
- [2.3.3 Intermediaries and Delegated Processing](./2-3-3-intermediaries-and-delegated-processing.md)
- [2.3.4 Relationship Between Participants and Technical Actors](./2-3-4-relationship-between-participants-and-technical-actors.md)
- [2.4 MAP Transactions and Transaction Definitions](./2-4-map-transactions-and-transaction-definitions.md)
- [2.4.1 Transaction as a Shared Activity](./2-4-1-transaction-as-a-shared-activity.md)
- [2.4.2 Transaction Identity and Instances](./2-4-2-transaction-identity-and-instances.md)
- [2.4.3 Reusable Transaction Definitions](./2-4-3-reusable-transaction-definitions.md)
- [2.4.4 Transaction Selection and Use-Case Constraints](./2-4-4-transaction-selection-and-use-case-constraints.md)
- [2.4.5 Relationship to Transaction Processing Requirements](./2-4-5-relationship-to-transaction-processing-requirements.md)
- [2.5 Transaction Interactions and Information Flow](./2-5-transaction-interactions-and-information-flow.md)
- [2.5.1 Transaction Initiation and Response](./2-5-1-transaction-initiation-and-response.md)
- [2.5.2 Solicited and Unsolicited Exchanges](./2-5-2-solicited-and-unsolicited-exchanges.md)
- [2.5.3 Multi-Transaction Workflows](./2-5-3-multi-transaction-workflows.md)
- [2.5.4 Exchange Across Intermediaries](./2-5-4-exchange-across-intermediaries.md)
- [2.6 Architectural Diagrams and Examples](./2-6-architectural-diagrams-and-examples.md)
- [2.6.1 Basic Two-Party Transaction](./2-6-1-basic-two-party-transaction.md)
- [2.6.2 Grouped Technical Actors](./2-6-2-grouped-technical-actors.md)
- [2.6.3 Intermediated Exchange](./2-6-3-intermediated-exchange.md)
- [2.6.4 Multiple Transactions Supporting a Business Workflow](./2-6-4-multiple-transactions-supporting-a-business-workflow.md)

# 2.1 Responsible Parties and Business Roles

Information exchange involves people and organizations accountable for business activities. Their roles must be understood separately from the technical systems that send, relay, or receive messages. A responsible party may operate through multiple systems, and a system may support several parties or roles under explicit arrangements.
