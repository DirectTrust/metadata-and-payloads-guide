---
title: Technical Actor Framework
---

# Technical Actor Framework

A Technical Actor is an abstract actor named to describe a role played by a system in an information exchange transaction.

Given how Direct Secure Messaging works and the scope of this Framework, Part I of this Framework defines technical actors for the unsolicited and solicited messaging scenarios and for the two-actor and three-actor scenarios.

When a Use Case is defined in Part II, the identified System Actors will be shown enacting one or more of these technical actor roles. These potential combinations produce four scenarios:

1.  Point-to-Point Unsolicited Communication

2.  Point-to-Point Solicited Communication

3.  Intermediated Unsolicited Communication (See Appendix 7.4 “Three Actor” Use Case)

4.  Intermediated Solicited Communication (See Appendix 7.4 “Three Actor” Use Case)

The number of possible use cases is complicated further by recognizing that the intermediation could be included to benefit the Sender, or the Receiver, or both organizations. The diagram below shows most of the common information exchange patterns that a use case for Direct Secure Messaging might follow. Other combinations are possible, but this collection of possibilities represents a fairly comprehensive set of patterns.



![Push and pull transaction patterns for non-intermediated and intermediated message exchange, shown for both unsolicited (send) and solicited (request/response) communication.](/images/technical-actor-framework/1.png)

*Push and pull transaction patterns for non-intermediated and intermediated message exchange, shown for both unsolicited (send) and solicited (request/response) communication.*


See Appendix 7.4 “Three (or more) System Actor Formations” for more information about Intermediated Technical Actor patterns.

The following Technical Actors are defined here for Direct and are used when specifying the functional requirements for processing a successfully delivered transaction.

This Framework adds the Content Creator actor which SHALL be grouped with the Message Sender and the Content Consumer Actor which SHALL be grouped with the Message Receiver.

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 73%" />
</colgroup>
<tbody>
<tr>
<td><strong>Technical Actor Role</strong></td>
<td><strong>Description</strong></td>
</tr>
<tr>
<td>Content Creator</td>
<td>Describes a role for a system that forms the content into the specified Content format.</td>
</tr>
<tr>
<td>Message Sender</td>
<td>Describes a role for an Edge system that initiates the sending of a Direct message via some Edge Protocol that enables communication with a Message Sender HISP.</td>
</tr>
<tr>
<td>Sending Intermediary System</td>
<td><p>Describes a role for an Intermediary System which extends or augments the Message Sender’s Content Creation and Messaging Sending capabilities.</p>
<p>This role can be played by a third party organization’s system, or by the Sending STA or the Message Sender.</p></td>
</tr>
<tr>
<td>Sending STA</td>
<td>Describes a role for the STA System utilized by the Message Sender</td>
</tr>
<tr>
<td>Receiving STA</td>
<td>Describes a role for the STA System utilized by the Message Receiver</td>
</tr>
<tr>
<td>Receiving Intermediary System</td>
<td>Describes a role for an Intermediary System which extends or augments the Message Sender’s Content Creation and Messaging Receiving capabilities. This role can be played by a third party organization’s system, or by the Receiving STA or the Message Receiver.</td>
</tr>
<tr>
<td>Message Receiver</td>
<td>Describes a role for an Edge system that receives information sent in a Direct message via some Edge Protocol that enables communication with a Message Receiver HISP.</td>
</tr>
<tr>
<td>Content Consumer</td>
<td>Describes a role for a system that processes the information</td>
</tr>
</tbody>
</table>
