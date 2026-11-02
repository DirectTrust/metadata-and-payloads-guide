# 2.1 Business Entities and Information Exchange Roles

This section defines the business entities and roles used to describe an end-to-end information exchange and each organizational exchange boundary. These labels refer to people or organizations, not to their software systems. A business entity may occupy more than one role, depending on the exchange and its direction.

A Responsible Party is a person or business entity accountable for an aspect of the use case; a Business Role is the responsibility or capacity fulfilled. A Transaction Participant is a business entity participating in a specified Shared Activity, and its Transaction Participation Role describes its participation in that activity. These concepts do not substitute for the end-to-end Information Source and Intended Recipient or the hop-specific Information Sender and Information Recipient.

| Business role | Definition and use |
| --- | --- |

| Information Source | The business entity from which the information originates for the overall exchange purpose. |

| Intended Recipient | The business entity for whose use the information is ultimately intended. |

| Intermediary | A business entity between the Information Source and Intended Recipient that routes, relays, processes, or otherwise handles information under its applicable role. |

| Information Sender | The business entity sending information across a particular organizational exchange boundary or hop. |

| Information Recipient | The business entity receiving information across that particular boundary or hop. |

| Provenance Agent | The entity that performed, was responsible for, or can attest to a specified completed provenance activity, as supported by the applicable provenance assertion. |


Information Source and Intended Recipient identify the end-to-end business relationship. Information Sender and Information Recipient are relative to a particular hop; an Intermediary may be an Information Recipient on one hop and an Information Sender on the next. Neither business role determines which software component sends or receives the message.

![Figure 2-1](/images/actors-and-transactions/figure-2-1.png)

![Figure 2-1. Business entity roles across a two-hop exchange. The hop-specific labels change at the intermediary; the end-to-end Information Source and Intended Recipient do not.](/images/actors-and-transactions/figure-2-1.png)

*Figure 2-1. Business entity roles across a two-hop exchange. The hop-specific labels change at the intermediary; the end-to-end Information Source and Intended Recipient do not.*

A Provenance Agent is not automatically the Information Sender, Information Recipient, or technical actor. Each assertion must identify the entity appropriate to the activity attested. An intermediary may attest to an activity it performed or reliably observed, but cannot automatically attest to activities within other organizations. The applicable TX Definition determines which provenance activities and assertions must be recorded or communicated.

Provenance Agent identifies a person, organization, or system participating in a completed Provenance Activity. The entity able to attest that the activity occurred, the agent performing it, and the system recording the Provenance Assertion may be different. The applicable TX Definition alone determines which completed activities require tracking or communication; Provenance Agent Type classifies the agent’s role.
