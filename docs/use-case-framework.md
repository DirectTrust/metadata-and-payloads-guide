---
title: Use Case Framework
---

# Use Case Framework

Part I of this Framework doesn’t define any specific Use Cases. It establishes a framework for describing a Use Case which will subsequently be used in derivative IG’s.

## Business Scenario Framework

Today, Direct Secure Messaging provides a secure, trusted transport mechanism that is payload agnostic. It can carry anything. This open-ended potential could be leveraged, but how does a community interested in using Direct to exchange data for a specific use case, document the needed agreements about what to place in the message metadata that enables efficient message routing and processing, and what information to include in the payload in order to support the needs of the use case?

Without a template to help innovators accurately describe an envisioned use of Direct for information exchange, the potential of Direct is underutilized. Its strength as a payload agnostic standard becomes a weakness without a wide array of specific use case oriented specifications.

Utilizing Direct for information exchange is a proven and therefore lower-risk solution to deploy and using Direct for more use cases means greater productivity from prior and less costly investments.

The business scenario follows a common framework to express the problem, idea, solution, and value proposition. It also identifies a key beneficiary because clarifying the organizations or roles with the most to gain from the solution helps to identify stakeholders who could be advocates or early adopters of the use case. For use cases that involve innovative leaps in capability, identifying technical proofpoints that provide evidence of technical feasibility for the solution helps readers understand why the solution is possible.

*Figure 2 Content Components of the Business Scenario*

<table style="width:100%;">
<colgroup>
<col style="width: 99%" />
</colgroup>
<tbody>
<tr>
<td><ul>
<li><p>Problem</p></li>
<li><p>Idea (why is Direct right for this need)</p></li>
<li><p>Solution (Describe your idea in as much detail as possible.)</p></li>
<li><p>Value Proposition (What’s the benefit and who has the most to gain.)</p></li>
<li><p>Key Beneficiary</p></li>
<li><p>Technical Feasibility (What could be done to pilot or test the idea on a smaller scale to show the likelihood of the solution being successful.)</p></li>
</ul></td>
</tr>
</tbody>
</table>

## In Scope

This Framework defines several foundational Technical Actors and Direct Secure Messaging Transaction that can be used in other IG’s to specify expected uses of Direct Secure Messaging for a specific use case.

This Framework addresses three metadata and payload approaches:

- It covers solicited as well as unsolicited messages.

- It covers two-actor as well as three-or-more actor scenarios.

- It covers an open range of “purpose” scenarios.

The Framework supports a full range of potential mediaTypes and file formats. CDA documents, V2 messages, FHIR documents, pdf document, video and image file types, other types of structured data or unstructured information such as word documents, excel sheets, rtf files, etc.

When existing referenced specifications are “open” or require further constraints, this Framework may offer additional guidance to take advantage of that openness or supply additional constraint guidance. However, this Framework doesn’t inherently offer validation mechanisms to accompany the constraint representations.

## Out of Scope

- Does not address creating Payload Content specifications, which is to say the IG is intended to reference and reuse existing FHIR Profiles, CDA Document Templates, FHIR Document Profiles, and existing V2 Message types.

- Where referenced specifications are insufficiently precise for the given use case, this IG may provide clarifying guidance to narrow the possibilities and focus expectations for implementers.

- Validation conformance to the additional constraints and guidance it provides.

- Does not define specific Use Cases for Direct messaging, nor does it define specific transactions needed to accomplish a certain Use Case. The work of defining specific Use Cases and specific Direct Secure Messaging Transactions will be done in derivative IGs building from this Framework as a foundation.

- Payload creation (Content Creator) and payload processing (Content Consumer) is out of scope. We assume the Message Initiator is the Content Creator and the Message Receiver is the Content Consumer. Functional requirements for the Content Creator and Content Consumer shall be documented in the Use Case specific derivative IG.
