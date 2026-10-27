# 3.3.2 Technical Actor Roles and Grouping

Message Sender and Message Receiver retain their functional responsibilities defined by Direct. MAP adds Content Creator and Content Consumer responsibilities and groups them with the Direct actors to describe the capabilities needed at each end of the transaction.

| Technical Actor Role | Common responsibility |
| --- | --- |
| Content Creator | Creates at least the minimum Information Source information needed to initiate the transaction. Completes preparation of information objects, metadata, any applicable Task, Provenance, and structured payload together with the Message Sender; internal responsibilities MAY be divided according to the implementation. |
| Message Sender | Completes preparation and packaging responsibilities assigned within the grouped Sender Actor, constructs and transmits the Direct message to the selected Routing Target. |
| Message Receiver | Takes delivery of and validates the Direct message and makes its payload, metadata, message controls and transport evidence available for receiver-side processing. |
| Content Consumer | Receives the structured payload, evaluates its acceptance or rejection into the intended workflow, and performs subsequent processing of information objects according to the applicable requirements. |

Grouped Sender Actor = Content Creator + Message Sender. Grouped Receiver Actor = Message Receiver + Content Consumer. These grouped Technical Actors describe the combined capabilities a system implements at the initiator and recipient ends, respectively. Grouping does not require separate applications or prescribe internal system architecture.
