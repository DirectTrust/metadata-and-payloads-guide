---
title: About Direct Secure Messaging
---

![High-level Direct message structure showing the SMTP message header, MIME Part metadata, and the human-readable and Context IG metadata content container.](/images/direct-secure-messaging/1.png)

*High-level Direct message structure showing the SMTP message header, MIME Part metadata, and the human-readable and Context IG metadata content container.*


# About Direct Secure Messaging

Direct Secure Messaging uses SMTP, S/MIME, and X.509 certificates to securely transport health information over the Internet. Participants in exchange are identified using standard e-mail addresses associated with X.509 certificates. The data is packaged using standard MIME content types. Authentication and privacy are obtained by using Cryptographic Message Syntax (S/MIME), and confirmation delivery is accomplished using encrypted and signed Message Disposition Notification and Notification of Delivery Status messages. Certificate discovery of endpoints is accomplished using the DNS and LDAP. Advice is given for specific processing for ensuring security and trust validation on behalf of the ultimate message originator or receiver.

The [Applicability Statement for Secure Health Transport Version 1.3 (Commonly known as The Direct Standard®)](https://directtrust.org/standards/the-direct-standard/versions) is an ANSI standard which establishes the required capabilities of a Security/Trust Agent (STA), organizationally referred to as a Health Information Service Provider (HISP). A HISP acts as a Message Transfer Agent, and a Message Submission and/or Message User Agent supporting security and trust for a transaction conforming to The Direct Standard®. These responsibilities include:

- Use of Domain Names, Addresses, and Associated Certificates

- Signed and encrypted Internet Message Format documents

- Message Disposition Notification

- Trust Verification

- Certificate Discovery Through the DNS and LDAP

In summary, Direct Secure Messaging is a payload agnostic secure transport mechanism which requires trusted Edge systems called Message Senders and Message Receivers, as well as any number of potential Intermediaries to communicate through Edge Protocols with their HISP.

## Conceptual Diagrams of Direct Secure Messaging

The following diagrams illustrate examples of Direct Secure Messages represented as clear text messages.



![Direct message metadata model examples across Context IG, XD (XDR/XDM), and FHIR representations, showing where SMTP transport metadata, human-readable content, and structured metadata live in each.](/images/direct-secure-messaging/2.png)

*Direct message metadata model examples across Context IG, XD (XDR/XDM), and FHIR representations, showing where SMTP transport metadata, human-readable content, and structured metadata live in each.*




![Additional Direct message metadata model examples across Context IG, XD, and FHIR, showing FHIR Resource content nested in the payload.](/images/direct-secure-messaging/3.png)

*Additional Direct message metadata model examples across Context IG, XD, and FHIR, showing FHIR Resource content nested in the payload.*


The challenge for Direct Secure Messaging stems from the flexibility, i.e. lack of specificity imposed on the message payload. If “anything goes”, then nothing is clearly expected. This hinders interoperability where clear expectations are required for meaningful, effective information exchange.

The goal of the Metadata and Payloads Framework is to establish a methodology for documenting clear expectations for Direct messaging payloads and metadata to support various use cases. The Framework Part II establishes a template that includes a standard set of chapters which cover the full range of information needing to be documented so that expectations are clear. It also includes areas for open issues which may remain a concern for a particular use case.

The next illustration explains how Direct Secure Messaging uses SMTP, S/MIME, and X.509 certificates to securely transport health information over the Internet.



![Step-by-step S/MIME signing and encryption flow for a Direct message, from cleartext message through digital signature, session-key encryption, SMTP transport, and receiver-side decryption and validation.](/images/direct-secure-messaging/4.png)

*Step-by-step S/MIME signing and encryption flow for a Direct message, from cleartext message through digital signature, session-key encryption, SMTP transport, and receiver-side decryption and validation.*


The job of a HISP in Direct Secure Messaging is to insulate the “Edge system” Message Sender System or Message Receiver System from the complexity of the security operations performed to keep the message payload secure in transit across the internet.



![End-to-end Direct Secure Messaging flow between two HISPs, showing the Content Creator/Message Sender and Message Receiver/Content Consumer roles alongside the S/MIME signing and encryption steps.](/images/direct-secure-messaging/5.png)

*End-to-end Direct Secure Messaging flow between two HISPs, showing the Content Creator/Message Sender and Message Receiver/Content Consumer roles alongside the S/MIME signing and encryption steps.*


Edge Protocols are used to communicate directly between the Message Sender and the Message Sender’s HISP as content is provided to be sent via Direct. Edge Protocols also are used to communicate directly between the Message Receiver’s HISP and the Message Receiver when content is available to be received.

Vendors' systems may use a variety of Edge Protocols for communication between the Edge system and the HISP. While these Edge Protocols vary, the following commonly used Edge Protocols are in scope for this guide.

## Edge Protocol Options

*Figure 1 - Excerpt from [Implementation Guide for Direct Edge Protocol - Version 2.0](https://directtrust.org/standards/the-direct-standard/edge-protocol-versions)*

<table style="width:100%;">
<colgroup>
<col style="width: 99%" />
</colgroup>
<tbody>
<tr>
<td><p>The Direct Standard® uses SMTP as the protocol between HISPs and the <a href="https://directtrust.org/standards/the-direct-standard/xdr-xdm-versions">XDR and XDM for Direct Secure Messaging Specification</a> additionally describes how to transform from the IHE XDR and IHE XDM profiles to the Internet Format Messages used by SMTP and vice versa. In addition to the above specifications, vendors' systems may use a variety of Edge Protocols for communication between the Edge system and the HISP. While these Edge Protocols vary, the following commonly used Edge Protocols are covered by this guide:</p>
<ul>
<li><p>XDR and XDM for Direct Secure Messaging Specification</p></li>
<li><p>SMTP</p></li>
</ul>
<p>From an implementation standpoint:</p>
<p>HISPs SHALL support all of the following Edge Protocols for sending information to and receiving information from Edge systems:</p>
<ul>
<li><p>XDR and XDM for Direct Secure Messaging Specification</p></li>
<li><p>SMTP</p></li>
</ul>
<p>HISPs additionally MAY support one or more of the following Edge Protocols for Edge systems to retrieve information:</p>
<ul>
<li><p>IMAP4</p></li>
<li><p>POP3</p></li>
</ul>
<p>Based on conformance requirements established by the DirectTrust Implementation Guide for Direct Edge Protocols (Version 2.0, February 2025), Edge systems SHOULD support one or more of the following Edge Protocols for sending information to and receiving information from HISPs:</p>
<ul>
<li><p>XDR and XDM for Direct Secure Messaging Specification</p></li>
<li><p>SMTP</p></li>
</ul></td>
</tr>
</tbody>
</table>

Although the [Implementation Guide for Direct Edge Protocols - Version 2.0](https://directtrust.org/standards/the-direct-standard/edge-protocol-versions) does not mention permitting the use of FHIR as an Edge protocol or metadata protocol, the Direct Standard® is an open standard and capabilities which are not prohibited are permitted. Therefore, FHIR can be used for payload and metadata within Direct.

By clearly identifying all the metadata that needs to transverse to the Edge system, the Use Case specification ensures this information doesn’t get dropped or altered as it goes to the Information Recipient Edge system. If a HISP uses a custom API Edge Protocol, they SHOULD provide a mapping between the metadata elements defined in this IG and the custom data fields used in their API.

The Edge Protocol impacts the “last mile” of the message payload’s journey to the Intended Recipient. However, there’s still the last “few feet” we need to worry about for the full intent of a Use Case to be met. 

Read the chapter on Functional Requirements to learn how a Use Case specification enables IG authors to specify the information handling behavior and functional requirements within the Message Receiver system to ensure that the delivered information achieves the intended result.
