# T.3 Use Case, Transaction, Workflow, and Routing Terminology

These definitions distinguish business objectives, reusable exchange specifications, transported messages, requested work, performed activities, and reported outcomes. The distinctions are fundamental to applying the MAP Framework consistently across use cases.

## T.3.1 Business Entities and Information Exchange Roles

These terms identify business entities and their roles in an end-to-end exchange or an individual organizational hop. They must not be used interchangeably with technical actor names or endpoint addresses. Chapter 2 applies these distinctions when analyzing scenarios and labeling diagrams.

| Term | Meaning and use |
| --- | --- |
| Responsible Party | A person or business entity accountable for an aspect of the business use case. |
| Business Role | A business responsibility or capacity fulfilled by a Responsible Party. |
| Information Source | The business entity from which information originates for the purpose of the exchange, regardless of which entity transmits a subsequent message. |
| Intended Recipient | The business entity for whose use the information is ultimately intended; it is not necessarily the recipient of the next message. |
| Intermediary | A business entity participating between the Information Source and Intended Recipient, for example by forwarding, routing, or processing information under applicable authority. Intermediary participation does not itself confer authority to accept information into the Intended Recipient's workflow. |
| Information Sender | The business entity sending information across a particular organizational boundary or hop. It may be the Information Source or an Intermediary. |
| Information Recipient | The business entity receiving information across a particular organizational boundary or hop. It may be an Intermediary or the Intended Recipient. |
| Transaction Participant | A business entity participating in a specified Shared Activity under the applicable Transaction Definition. |
| Transaction Participation Role | The role fulfilled by a Transaction Participant in that Shared Activity, distinguished from the technical functions or physical systems used to perform it. |

For example, in an A → B → C exchange, A may be the Information Source, B the Intermediary, and C the Intended Recipient. For the A → B hop, A is Information Sender and B is Information Recipient. For the B → C hop, B is Information Sender and C is Information Recipient. The end-to-end roles remain unchanged. A Provenance Agent, defined in T.3.6, is a distinct participation concept concerning a completed activity, not a synonym for any of these routing roles.

### Technical actor terminology used with these business roles

| Term | Meaning and use |
| --- | --- |
| Technical Actor | A logical system role carrying specified technical functions; it need not correspond one-to-one with a deployed system or organization. |
| Sender Actor | The grouped Technical Actor comprising the Content Creator and Message Sender functions. Sender-side normative functional requirements in a Transaction Definition are assigned to this grouped actor. |
| Receiver Actor | The grouped Technical Actor comprising the Message Receiver and Content Consumer functions. Receiver-side normative functional requirements in a Transaction Definition are assigned to this grouped actor. |
| Content Creator | The sender-side function preparing information and structured payload, including recording or tracking completed Provenance Activities when required of the Sender Actor. |
| Message Sender | The sender-side function constructing and transmitting the Direct message to the selected Routing Target. |
| Message Receiver | The receiver-side function receiving the Direct message and carrying out applicable message-level processing. |
| Content Consumer | The receiver-side function processing the structured payload for the intended workflow, including recording or tracking completed Provenance Activities when required of the Receiver Actor. |

The **Sender Actor** and **Receiver Actor** are the normative functional requirement targets; the constituent functions explain internal allocation and do not independently establish separate conformance targets. Functions may be distributed across deployed systems. An organization may operate both grouped actors, as an intermediary often does. Chapter 2.2 explains technical actor roles and Chapter 2.3 addresses actor formations and deployment relationships. A Routing Target is a technical destination for the current message, not a business entity or grouped actor; see T.3.5.

## T.3.2 Shared Activities and Transaction Definitions

A Shared Activity is a defined exchange activity involving coordinated participation across a transaction boundary, distinct from all subsequent clinical or operational work that a Task may request. Required exchanges are identified from business scenarios before the Reusable Transaction Catalog (RTC) is consulted for technical reuse.

| Term | Meaning and use |
| --- | --- |
| Transaction | A defined unit of exchange between technical actors governed by its applicable Transaction Definition. |
| Transaction Definition | The specification governing a transaction’s participants, functional requirements, processing, and exchange behavior. |
| Generalized Transaction Definition (GenTXDef) | A reusable specification of a Shared Activity, governed for inclusion in the RTC. |
| Use Case Transaction Definition (UCTXDef) | The transaction definition within a Use Case Implementation Guide (UC IG), specifying the applicable requirements for that use case. It may constrain a GenTXDef or define a new use case transaction. |
| Reusable Transaction Catalog (RTC) | The governed catalog of reusable Shared Activities and their GenTXDefs. Inclusion does not make every catalog transaction applicable to every use case. |
| Placeholder Transaction | A clearly labeled workflow representation of an exchange not fully specified as a MAP transaction in the UC IG. It does not independently impose MAP transaction conformance obligations. |

A new UCTXDef may later be generalized and approved for the RTC by the DirectTrust MAP Framework Consensus Body; publication of the UC IG alone does not confer that approval.

## T.3.3 Message, Transaction, Task, and Activity Lifecycles

These lifecycles have different boundaries and must not be collapsed into a single notion of completion. Document Lifecycle and Document Status are addressed in T.2.

| Term | Meaning and use |
| --- | --- |
| Message Lifecycle | Progression of an individual Direct message from creation and submission through transport to delivery or terminal transport failure. Each message, including a Workflow Status Report, has its own lifecycle. Delivery does not establish workflow acceptance or completion of work. |
| Transaction Lifecycle | Progression of a transaction from initiation to the receiving workflow's acceptance or rejection of the entire structured payload. When the outcome is not confirmed within the applicable reporting interval, the originating system may close its tracking context as unconfirmed under the applicable requirements; that administrative closure is not evidence of acceptance or rejection. A subsequent status-reporting transaction does not extend the originating transaction through Task completion. |
| Task | A requested unit of work with an intended outcome, responsibility, and trackable state. A Task may require multiple Activities. A Workflow Activity Task represents the requested Shared Activity when specified by the applicable transaction. |
| Task Lifecycle | Progression of requested work through creation, decisions about execution, performance, and an applicable terminal outcome. Payload acceptance alone does not establish acceptance of the Task for execution or its completion. |
| Activity | An operational action or service performed or attempted by a person, organization, or system. Several sequential or concurrent Activities may contribute to a Task. |
| Activity Lifecycle | Conceptual progression of an Activity through planning, initiation, performance, and conclusion, including successful or unsuccessful outcomes. These concepts do not prescribe status codes. |

## T.3.4 Workflow Status and Transport Disposition

These terms distinguish transport delivery, acceptance of the structured payload into the receiving workflow, and subsequent work. Their precise processing and reporting obligations are established in Chapter 3 and the applicable Transaction Definition.

| Term | Meaning and use |
| --- | --- |
| Delivery Notification | A transport-level notification about delivery or disposition of an individual Direct message under the applicable transport specification; it is not a Workflow Status Report. |
| Transport Disposition | The transport-level outcome for an individual message, including delivery or failure; it does not establish receiving-workflow acceptance or rejection. |
| Structured Payload Disposition | The transaction-level acceptance or rejection of the entire structured payload into the intended receiving workflow, interpreted under the applicable Transaction Definition. |
| Workflow Status | Acceptance or rejection of the entire structured payload into the intended receiving workflow; it does not establish acceptance or completion of the Task, later Activities, or the status of an included document. |
| Workflow Status Report | A correlated communication of Workflow Status under the applicable reporting transaction. It is distinct from a Delivery Notification and from Task Status or Activity Status. |
| Task Status | The status of the requested Task under the applicable workflow and resource specification, distinct from Workflow Status. |
| Activity Status | The status of a particular operational Activity under the applicable workflow, distinct from Workflow Status and Task Status. |

A status report communicates an already-established disposition; its receipt does not itself determine when the originating transaction concluded. The handling of missing or late reports is governed by the applicable Transaction Definition rather than imposed by this terminology chapter.

## T.3.5 Routing Targets and Notification Endpoints

Routing and notification addresses serve different purposes even when the same Direct address happens to be used for more than one purpose. The Routing Target is the **next technical destination**, not necessarily the end-to-end Intended Recipient or the Information Recipient's individual address.

| Term | Meaning and use |
| --- | --- |
| Routing Target | The Direct address selected for the current transaction's message under applicable routing rules. It may identify an organizational endpoint or an intermediary, may coincide with or differ from the Intended Recipient's endpoint, and does not itself establish authority to accept the structured payload into the intended workflow. |
| Designated Notification Recipient | The endpoint designated to receive transport-level Message Disposition Notifications (MDNs), identified by the Direct message's `Disposition-Notification-To` header. It is not automatically a Workflow Status Update Endpoint. |
| Workflow Status Update Endpoint | A Direct endpoint designated to receive a correlated Workflow Status Report under the applicable reporting transaction. It is distinct in purpose from the Routing Target of the originating message and from the Designated Notification Recipient. |

For a workflow status report, the selected Workflow Status Update Endpoint is a Routing Target **for that report**, not retroactively the Routing Target of the originating message. The applicable transaction determines endpoint designation, preservation, accumulation, deduplication, and reporting obligations. A Direct address may also function as an identity-bound identifier; identity and communication endpoint roles must not be conflated. See Chapter 5.6 for Direct address identity, routing, and endpoint capability guidance.

## T.3.6 Provenance Activities and Assertions

Provenance describes activities that occurred and the agents participating in them. A Provenance Activity is recorded retrospectively upon completion; it is not a prospective Task or an independently tracked Activity Lifecycle.

| Term | Meaning and use |
| --- | --- |
| Provenance Activity | A completed activity affecting the provenance of information, described in a provenance assertion with relevant agents, times, and information objects where applicable. |
| Provenance Assertion | Recorded information describing a completed Provenance Activity and its relevant participants and information objects. |
| Provenance Agent | A person, organization, or system identified as participating in a completed Provenance Activity. The accountable organization or other entity attesting that an activity occurred must have a basis for the assertion; the agent performing an activity, the entity attesting to it, and the system recording it need not be identical. |
| Provenance Agent Type | Classification of the role in which an identified Provenance Agent participated in the completed activity, under the applicable provenance vocabulary. |

Where required by the applicable Transaction Definition, the grouped Sender Actor or Receiver Actor records, tracks, or communicates relevant Provenance Activities. These functions are allocated to the Content Creator or Content Consumer side of the respective grouped actor. This terminology does not create a universal requirement to record every activity or make every intermediary an attesting agent. Chapter 3.10 and the applicable transaction requirements govern provenance handling.
