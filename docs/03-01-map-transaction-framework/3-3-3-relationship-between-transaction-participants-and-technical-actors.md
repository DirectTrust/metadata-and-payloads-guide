# 3.3.3 Relationship Between Transaction Participants and Technical Actors

Chapter 2 defines Transaction Participation Roles; they are not redefined here. A responsible party participates in a transaction, while its system implements the Technical Actor Roles needed for that participation. The mapping below describes this relationship without assigning authorship or authority solely from a technical function.

| Transaction participation | System capabilities |
| --- | --- |
| Information Source at the initiator end | Grouped Sender Actor: Content Creator + Message Sender. |
| Information Recipient at the recipient end | Grouped Receiver Actor: Message Receiver + Content Consumer. |
| Intermediary on a processing leg | Receiver Actor capabilities for an incoming leg and Sender Actor capabilities for an outgoing leg, as applicable; a separately initiated Shared Activity establishes its own participation roles. |

For example, an OB organization is the Information Source for a a use-case transaction and acts in the business role of OB Provider. Its EHR implements Sender Actor capabilities. The hospital is the Information Recipient and its system implements Receiver Actor capabilities. When the hospital initiates TX8 report, it becomes the Information Source for that new transaction and its system implements Sender Actor capabilities. Original document authorship remains unchanged.
