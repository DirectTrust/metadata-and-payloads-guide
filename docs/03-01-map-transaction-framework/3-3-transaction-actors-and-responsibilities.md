# 3.3 Transaction Actors and Responsibilities

The MAP Transaction Framework defines two grouped Technical Actors that work together to perform a Transaction: the **Sender Actor** and the **Receiver Actor**.

Normative functional requirements in MAP Transaction Definitions are assigned to the grouped Sender Actor and Receiver Actor. The constituent Technical Actors describe how those functions may be distributed among implementing systems and organizations, including Intermediaries, without changing the normative responsibilities assigned to the grouped actors.

## 3.3.1 Sender and Receiver Actor Groupings

The Sender Actor and Receiver Actor retain their functional responsibilities defined by Direct. MAP adds Content Creator and Content Consumer responsibilities and groups them with the Direct actors to describe the capabilities needed at each end of the transaction.

| **Technical Actor Role** | **Common responsibility**                                                                                                                                                                                                                                                                                                   |
|--------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Content Creator          | Creates at least the minimum Information Source information needed to initiate the transaction. Completes preparation of information objects, metadata, any applicable Task, Provenance, and structured payload together with the Message Sender; internal responsibilities MAY be divided according to the implementation. |
| Message Sender           | Completes preparation and packaging responsibilities assigned within the grouped Sender Actor, constructs and transmits the Direct message to the selected Routing Target.                                                                                                                                                  |
| Message Receiver         | Takes delivery of and validates the Direct message and makes its payload, metadata, message controls and transport evidence available for receiver-side processing.                                                                                                                                                         |
| Content Consumer         | Receives the structured payload, evaluates its acceptance or rejection into the intended workflow, and performs subsequent processing of information objects according to the applicable requirements.                                                                                                                      |

Grouped Sender Actor = Content Creator + Message Sender. Grouped Receiver Actor = Message Receiver + Content Consumer. These grouped Technical Actors describe the combined capabilities a system implements at the initiator and recipient ends, respectively. Grouping does not require separate applications or prescribe internal system architecture.

## 3.3.2 Participants and Technical Actors

Chapter 2 defines Transaction Participation Roles; they are not redefined here. A responsible party participates in a transaction, while its system implements the Technical Actor Roles needed for that participation. The mapping below describes this relationship without assigning authorship or authority solely from a technical function.

| **Transaction participation**              | **System capabilities**                                                                                                                                                                           |
|--------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Information Source at the initiator end    | Grouped Sender Actor: Content Creator + Message Sender.                                                                                                                                           |
| Information Recipient at the recipient end | Grouped Receiver Actor: Message Receiver + Content Consumer.                                                                                                                                      |
| Intermediary on a processing leg           | Receiver Actor capabilities for an incoming leg and Sender Actor capabilities for an outgoing leg, as applicable; a separately initiated Shared Activity establishes its own participation roles. |

For example, an OB organization is the Information Source for a a use-case transaction and acts in the business role of OB Provider. Its EHR implements Sender Actor capabilities. The hospital is the Information Recipient and its system implements Receiver Actor capabilities. When the hospital initiates a workflow-status report, it becomes the Information Source for that new transaction and its system implements Sender Actor capabilities.
