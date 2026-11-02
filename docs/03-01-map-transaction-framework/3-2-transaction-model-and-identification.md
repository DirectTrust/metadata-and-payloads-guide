# 3.2 Transaction Model and Identification

A transaction is a two-party Shared Activity, not necessarily a single transport hop. Its identity reflects the activity being performed. RTC transaction identifiers identify generalized transaction types; local TX identifiers identify transactions within a particular Use Case IG. Transaction instances require distinguishable identity and correlation.

## 3.2.1 Two-Party Shared Activity

A MAP Transaction describes more than transmission of a message. The Transaction is the Shared Activity performed between two Business Entity Actors: the Information Source and the Intended Recipient. The functional requirements assigned to the Sender Actor acting on behalf of the Information Source, the Receiver Actor acting on behalf of the Intended Recipient, and any Technical Actors operated by Intermediaries define the complementary technical responsibilities required to perform that Shared Activity.

## 3.2.2 Transaction Identity

A new Direct message, processing link, technical boundary, or change in Technical Actor function does not by itself create a new Transaction. A subsequent separately authorized workflow action is a new Transaction even if it exists to exchange the same, copied, or derived information.

## 3.2.3 Instance and Correlation

The SMTP Message-ID identifies and correlates an individual Direct message. It is not the transaction identifier of the workflow activity. Each independently processable workflow unit is identified by its SubmissionSet business identifier and may complete or fail independently.

## 3.2.4 Transaction Perspective

Each Transaction Instance is interpreted from the perspective of its own Shared Activity and participating parties. Information Source, Intended Recipient, Intermediary, Information Sender, and Information Recipient describe Business Entity participation roles associated with a particular Transaction Instance or information exchange. Sender Actor and Receiver Actor describe the grouped Technical Actors performing the required functions. These roles and functions are assigned in the context of the applicable Transaction Instance or exchange and are not permanent attributes of an organization. An Intermediary does not become the Information Source merely by forwarding or transforming information. A related transaction establishes its own role assignments, even when it carries information about a preceding transaction.
