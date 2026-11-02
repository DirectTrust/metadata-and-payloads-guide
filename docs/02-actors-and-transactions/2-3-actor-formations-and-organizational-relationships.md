# 2.3 Actor Formations and Organizational Relationships

A grouped actor represents logical capabilities, not a required product boundary. One implementation may combine the Content Creator and Message Sender in one system, while another distributes those functions across cooperating systems. The same applies to Message Receiver and Content Consumer. Such formations do not change which grouped actor bears the applicable functional requirements.

Routing and notification endpoints are separate from actor roles. A Routing Target is the Direct address selected for the current message under applicable routing rules. The Designated Notification Recipient is the endpoint designated for transport-level MDNs by Disposition-Notification-To; a Workflow Status Update Endpoint receives a correlated Workflow Status Report when required. These may use different Direct addresses, even when associated with the same organization. For a status report, its designated Workflow Status Update Endpoint is the Routing Target for that report. Refer to Chapter 5.6 for Direct address identity, routing, and endpoint capability.

![Figure 2-3](/images/actors-and-transactions/figure-2-3.png)

![Figure 2-3. Organization B operates Receiver Actor B for the first hop and Sender Actor B for the second hop. Each outgoing message has its own Routing Target, a technical endpoint rather than a business entity role.](/images/actors-and-transactions/figure-2-3.png)

*Figure 2-3. Organization B operates Receiver Actor B for the first hop and Sender Actor B for the second hop. Each outgoing message has its own Routing Target, a technical endpoint rather than a business entity role.*

An Information Source, Intermediary, or Intended Recipient may operate its own grouped actors or delegate their operation under an appropriate arrangement. Diagrams should show business entities and technical actor formations in distinguishable layers. An intermediary that participates in two hops may use a Receiver Actor for one transaction and a Sender Actor for the next; those roles must not be collapsed into one unlabeled arrow. The next technical destination for each outgoing Direct message is its Routing Target. Routing Target identifies an address, not a business entity or a grouped actor; it does not by itself confer authority to accept a structured payload.

The sender-side and receiver-side responsibilities may be distributed across products or services. In a multi-hop exchange, each hop has its own sending and receiving business entities, its own Sender Actor and Receiver Actor roles, and its own Routing Target. An intermediary may operate both grouped actor roles across consecutive hops.

Responsibility for the Shared Activity, technical message custody, and provenance of completed activities are related but distinct. The original author of a document may differ from the Information Sender and from the system operating the Sender Actor. An intermediary may preserve an existing assertion without becoming the Provenance Agent for the underlying activity.
