# T.3 Use Case, Transaction, Workflow, and Routing Terminology

These definitions distinguish business objectives, reusable exchange specifications, transported messages, requested work, performed activities, and reported outcomes. The distinctions are fundamental to applying the MAP Framework consistently across use cases.

## T.3.1 Use Case Framework and Architectural Roles

The MAP Use Case Framework connects Information Exchange Objectives to business scenarios, responsible parties, required exchanges, and transaction architecture. The following terms distinguish business accountability, participation in an exchange, and the technical functions that implement it.

| Term | Meaning and use |
| --- | --- |
| Responsible Party | An individual or organization accountable for an aspect of the business use case. |
| Business Role | The business responsibility fulfilled by a Responsible Party. |
| Transaction Participant | A party participating in a Shared Activity under an applicable transaction definition. |
| Transaction Participation Role | The role fulfilled by a Transaction Participant in a particular Shared Activity. It describes participation in the exchange rather than the system functions used to perform it. |
| Technical Actor | A logical system role assigned specific technical responsibilities under an applicable transaction definition. A Technical Actor need not correspond to a separate deployed system. |
| Sender Actor | A grouped Technical Actor comprising the Content Creator and Message Sender functions. |
| Receiver Actor | A grouped Technical Actor comprising the Message Receiver and Content Consumer functions. |

The individual Technical Actors are described below. These descriptions identify functions for architectural discussion; they do not independently establish conformance obligations.

| Technical Actor | Primary function |
| --- | --- |
| Content Creator | Prepares information content and the applicable structured payload. |
| Message Sender | Constructs and submits the Direct message for transmission. |
| Message Receiver | Receives the Direct message and performs applicable message-level processing. |
| Content Consumer | Processes the received structured payload for the intended receiving workflow. |

A Responsible Party may fulfill a Transaction Participation Role through one or more Technical Actors. Grouping technical functions into a Sender Actor or Receiver Actor does not require their deployment in a single physical system. Identifying a Technical Actor does not, by itself, establish business accountability or an assertion of provenance. Chapter 2 describes the relationships among participants, roles, and technical actors; Chapter 3 and the applicable transaction definitions specify technical obligations.

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

A *Provenance Activity* is an activity affecting the provenance of information and described in a provenance assertion, including participants and relevant information objects as applicable. A *Provenance Assertion* records information about such an activity. A *Provenance Agent* is a person, organization, or system identified as participating in an activity described by a provenance assertion. The agent's asserted participation in that historical activity is distinct from the Technical Actor's assigned function or a Transaction Participant's role in an exchange.

An actor preserves or reports provenance according to the requirements assigned by the applicable transaction definition; the terminology does not impose universal reporting of every intermediary activity. Appendix E explains the relationship to document lifecycle and provenance.
