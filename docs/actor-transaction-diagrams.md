---
title: Actor Transaction Diagrams
---

# Actor Transaction Diagrams

For each in scope technical use case, you create an actor transaction diagram. Below is some additional information to explain how to illustrate the Direct transactions in the diagrams.

## Understanding Push Versus Pull Transactions

The difference between a push and a pull transaction is subtle but significant. It centers on the direction of the flow of data relative to the direction of the transaction. In a pull transaction the transaction goes from point-A to point-B but the data of interest flows the opposite way from point-B to point-A. In a push transaction the transaction goes from point-A to point-B and the data of interest flows the same way, from point-A to point-B.



![Understanding the difference between a Push transaction and a Pull transaction between two System Actors.](/images/actor-transaction-diagrams/1.png)

*Understanding the difference between a Push transaction and a Pull transaction between two System Actors.*


Direct Secure Messaging runs on push-based transactions. Information is always flowing in the same direction as the transactions are flowing. (Often the actor transaction diagram foreshortens the HISPs out of the diagram, but you can imagine the HISPs who facilitate these transactions to be directly behind each Business Actor, blocked from view in the picture.

Pull transactions are “simulated” by linking together two push transactions where the first transaction delivers a request and the second transaction delivers a response to that request. The two transactions happen asynchronously, which adds the benefit of injecting additional processing in between them. Additional system or human processing can be sandwiched between the request and the response transactions. This is a very powerful feature of Direct Secure Messaging processing workflows.



![Two Push transactions used asynchronously to emulate a Pull transaction (a request followed by a response).](/images/actor-transaction-diagrams/2.png)

*Two Push transactions used asynchronously to emulate a Pull transaction (a request followed by a response).*


Push based messaging doesn’t need to emulate Pull based transactions all the time. In some use cases a single push transaction is all that’s needed. For example, in the use-case of an Event Notification, a single push transaction carrying the information about the event that occurred is sufficient.



![Some use cases require only a single Push transaction to complete the information exchange.](/images/actor-transaction-diagrams/3.png)

*Some use cases require only a single Push transaction to complete the information exchange.*


## Two System Actor Formation

When the use case covers a two System Actor scenario, one of these Actor-Transaction patterns likely will be used.



![A Two System Actor formation uses one of these unsolicited (send) or solicited (request/response) actor-transaction patterns.](/images/actor-transaction-diagrams/4.png)

*A Two System Actor formation uses one of these unsolicited (send) or solicited (request/response) actor-transaction patterns.*


For a discussion of a three or more system actor formation, see the Appendix 7.4, “Three (or more) System Actor Formation”.
