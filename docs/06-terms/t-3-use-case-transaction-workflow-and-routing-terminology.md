# T.3 Use Case, Transaction, Workflow, and Routing Terminology

These definitions distinguish business objectives, reusable exchange specifications, transported messages, requested work, performed activities, and reported outcomes. The distinctions are fundamental to applying the MAP Framework consistently across use cases.

## T.3.1 Use Case Framework and Architectural Roles

The MAP Use Case Framework connects Information Exchange Objectives to business scenarios, responsible parties, required exchanges, and transaction architecture. A *Responsible Party* is an individual or organization accountable for an aspect of the business use case; a *Business Role* describes its business responsibility. A *Transaction Participation Role* describes how a participant takes part in a specified exchange, while a *Technical Actor* is the system role assigned technical transaction responsibilities.

## T.3.2 Shared Activities and Transaction Definitions

A Shared Activity is an exchange activity involving coordinated participation under an applicable transaction definition. Required exchanges are identified from business scenarios before the Reusable Transaction Catalog (RTC) is consulted for technical reuse.

| Term | Meaning and use |
| --- | --- |
| Transaction | A defined unit of exchange between technical actors governed by its applicable transaction definition. |
| Generalized Transaction Definition (GenTXDef) | A reusable specification of a Shared Activity, governed for inclusion in the RTC. |
| Use-Case Transaction Definition (UCTXDef) | The transaction definition within a Use-Case Implementation Guide (UC IG), specifying the applicable requirements for that use case. It may constrain a GenTXDef or define a new use-case transaction. |
| Reusable Transaction Catalog (RTC) | The governed catalog of reusable Shared Activities and their GenTXDefs. Inclusion does not make every catalog transaction applicable to every use case. |
| Placeholder Transaction | A clearly labeled workflow representation of an exchange not fully specified as a MAP transaction in the UC IG. It does not independently impose MAP transaction conformance obligations. |

A new UCTXDef may later be generalized and approved for the RTC by the DirectTrust MAP Framework Consensus Body; publication of the UC IG alone does not confer that approval.

## T.3.3 Message, Transaction, Task, and Activity Lifecycles

The following lifecycles have different boundaries and must not be collapsed into a single notion of completion.

| Term | Meaning and use |
| --- | --- |
| Message Lifecycle | Progression of an individual Direct message through submission, transport, delivery, or terminal transport failure. |
| Transaction Lifecycle | Progression of a transaction from initiation to the receiving workflow's disposition of the structured payload, with separate tracking of an unconfirmed outcome when applicable. |
| Task | A requested unit of work with an intended outcome and responsible performer. The Workflow Activity Task identifies the requested Shared Activity under applicable transaction requirements. |
| Task Lifecycle | Progression of requested work through execution decisions, performance, and an applicable terminal outcome. |
| Activity | An operational service or action performed or attempted by a person, organization, or system; a Task may require several Activities. |
| Activity Lifecycle | The conceptual progression of an Activity through planning, initiation, performance, outcome determination, and conclusion. An Activity may conclude successfully, unsuccessfully, or with another defined outcome. These stages describe conceptual boundaries rather than prescribing a particular set of status codes. |

## T.3.4 Workflow Status and Transport Disposition

*Transport Disposition* concerns message-level delivery or failure. *Workflow Status* concerns acceptance or rejection of the entire structured payload into the intended receiving workflow. *Workflow Status Report* is the correlated communication of that decision where the applicable transaction requires reporting. *Task Status* and *Activity Status* describe subsequent work, not the payload's acceptance. A report of successful delivery must not be mistaken for workflow acceptance or task completion.

## T.3.5 Routing Targets and Notification Endpoints

A *Routing Target* is the Direct address selected for a particular message under the applicable routing rules; it need not be the Intended Recipient. A *Designated Notification Recipient* receives transport-level Message Disposition Notifications (MDNs). A *Workflow Status Update Endpoint* is designated to receive a workflow-status report under the applicable reporting transaction. These endpoints are not necessarily the same. Transaction-specific routing and reporting requirements belong in Chapter 3 and the applicable definitions.

## T.3.6 Provenance Activities and Assertions

A *Provenance Activity* is an activity affecting the provenance of information and described in a provenance assertion, including participants and relevant information objects as applicable. A *Provenance Assertion* records information about such an activity. An actor preserves or reports provenance according to the requirements assigned by the applicable transaction definition; the terminology does not impose universal reporting of every intermediary activity. Appendix E explains the relationship to document lifecycle and provenance.
