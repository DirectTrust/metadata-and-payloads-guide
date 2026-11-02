# 2.2 Technical Actors and System Actor Roles

Technical actors identify the system capabilities through which business entities perform transactions. The normative functional requirement targets in a MAP Transaction Definition (TX Definition) are the grouped Sender Actor and Receiver Actor. Their constituent actors explain the allocation of capabilities within each grouped actor; they are not separate normative requirement targets.

A Technical Actor is a logical system role rather than a physical deployment unit. The Sender Actor and Receiver Actor are the normative requirement targets in a TX Definition. Content Creator, Message Sender, Message Receiver, and Content Consumer describe constituent functions and are not independent conformance targets.

| Grouped actor | Constituent technical actors | Function |
| --- | --- | --- |

| Sender Actor | Content Creator + Message Sender | Creates or prepares transaction content and sends the message. |

| Receiver Actor | Message Receiver + Content Consumer | Receives the message and processes or consumes the content for the supported workflow. |


![Figure 2-2](/images/actors-and-transactions/figure-2-2.png)

![Figure 2-2. Grouped system actors and constituent functions. Normative requirements attach to the grouped actors; the diagram identifies the functional locations for content and provenance processing.](/images/actors-and-transactions/figure-2-2.png)

*Figure 2-2. Grouped system actors and constituent functions. Normative requirements attach to the grouped actors; the diagram identifies the functional locations for content and provenance processing.*

When an applicable TX Definition requires tracking, creating, preserving, or adding provenance activities, the Sender Actor fulfills its assigned requirements through its Content Creator function and the Receiver Actor through its Content Consumer function, as applicable. Message Sender and Message Receiver perform messaging functions and are not presumed to originate provenance assertions. Provenance obligations exist only when specified by the applicable TX Definition.

Functional allocation is descriptive: a Sender Actor fulfills its content and provenance requirements through its Content Creator function, and a Receiver Actor through its Content Consumer function. This does not relocate normative requirements away from the grouped actor.

A business entity labeled Information Sender is not itself the Sender Actor. Diagrams and requirement statements must preserve the distinction between the organizational role and the technical actor role. Initiator and Responder describe the relationship between a request and response; they are not substitutes for the grouped actor names. A response transaction can reverse which side supplies the Sender Actor. A Routing Target is the Direct address selected for the current message, not the Information Recipient, Intended Recipient, or Receiver Actor. The Routing Target may be an intermediary or organizational endpoint.
