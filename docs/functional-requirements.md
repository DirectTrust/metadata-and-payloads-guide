---
title: Functional Requirements
---

# Functional Requirements

The functional requirements chapter specified functional requirements for the Content Creator Technical Actor grouped with the Message Sender and the Content Consumer technical actor grouped with the Message Receiver. While the Message Sender and Message Receiver have very specific functional responsibilities defined by Direct, the Content Creator and Content Consumer actors contribute expected functionality beyond the start and end of the functionality defined by Direct.

It is important to recognize that these actor grouping pairs, the Content Creator with Message Sender and the Content Consumer with Message Receiver, inherit and conform to all the constraints of the Direct Standard®. Message delivery notification requirements remain the same.

However, in the context of a Use Case IG based on the Metadata and Payloads framework, additional information handling and response functionality can be specified by defining required functionality for the Content Creator or Content Consumer part of the paired technical actor.

For Direct messages that are successfully delivered to the Receiving Edge system, the Content Consumer grouped with the Message Receiver SHALL support the following functional requirements specified for this Technical Actor.

And, when the use case requires certain assumptions to be true about the information or the system engaged in initiating the message, the Content Creator grouped with the Message Sender SHALL support the following functional requirements specified for this technical actor.

## Requirements for Expected Function

**Example 1:**

The Message Sender SHALL be grouped with a Content Creator. The Content Creator SHALL create the human readable text that contains the relevant information in human readable form which can be displayed without any special information processing capabilities other than basic text rendering.

The Message Receiver SHALL be grouped with a Content Consumer. The Content Consumer SHALL support rendering the human readable information from either MIME Part 1, or the Document Entry in the XDM package which contains the identical human readable message.

When human readable information is provided in MIME Part 1 and human readable communication is included in a Document Entry in the XDM package, the Content Consumer SHALL process only one or the other and not both.

When a Content Creator prepares the information to be sent via Direct, the human readable communication included in the XDM package SHALL be identical to the human readable communication included in MIME Part 1.

<table style="width:100%;">
<colgroup>
<col style="width: 49%" />
<col style="width: 49%" />
</colgroup>
<tbody>
<tr>
<td><strong>General Functionality</strong></td>
<td><strong>Functionality Requirements</strong></td>
</tr>
<tr>
<td>Content-Creator Requirements</td>
<td>Enable human users to render the human readable content from the Human Communication MIME Part or the Human Readable Content DocumentEntry, but not both.</td>
</tr>
<tr>
<td>Content Consumer Requirements</td>
<td><p>Enable the Receiving Edge system to Render the included Payload Content.</p>
<p>Enable the Receiving Edge system to store (with Provenance and metadata retained using standard metadata labels) via an automated or human mediated process, messages which are not anomalies for the specified use case.</p>
<p>Enable the Receiving Edge system to Store (with Provenance logged) the included Payload Content via an automated system process that enables subsequent End User access to content consumed from the Payload Content.</p></td>
</tr>
</tbody>
</table>

## Requirements for Handling Anticipated Anomalies

The following table describes required functionality under anticipated scenarios where messages are received by an endpoint that does not support the use case being defined by the IG i.e. metadata requirements are not met. It also addresses potential responses when messages are received which do comply with the metadata requirements of IG, but the Content Consumer determines the payload provided in the message can’t be processed as required for the use case.

Under these anticipated anomalies for the use case, the following Functional Requirements shall be supported by the Content Consumer which is grouped with a Message Recipient. Note also, under the requirements of the Metadata and Payloads Framework, a System Actors SHALL support all four technical actors:

- Content Consumer grouped with Message Receiver

- Content Creator grouped with Message Sender

At a minimum, this area of a derivative IG SHALL address situations where a Direct endpoint which has a Directory listing for the Message Receiver publicizing support for a certain use case and one of the following anticipated anomalies for the use case occur:

A successfully delivered message comes from an Entity which is not authorized in the Receiving Edge system to send message transactions to the recipient Endpoint established for declared use case.

A successfully delivered message includes metadata for a use case that is not declared as a supported use case for the endpoint in the DirectTrust Aggregated Directory.

The message payload content provided is not compliant with the use case indicated in the metadata or does not meet the functional capabilities declared for the endpoint in the DirectTrust Aggregated Directory.

The Sending Edge system SHOULD establish a Direct Endpoint to support the redirect-anomaly-processing use case. This endpoint supports receiving notifications about message processing anomalies resulting from messages they have sent which are successfully delivered to other Direct endpoints but trigger an anticipated anomaly scenario.

<table style="width:100%;">
<colgroup>
<col style="width: 49%" />
<col style="width: 49%" />
</colgroup>
<tbody>
<tr>
<td><strong>Anticipated Anomaly Scenario</strong></td>
<td><strong>Required System Functionality</strong></td>
</tr>
<tr>
<td>A Direct endpoint receives a message from an Entity that is not authorized by the Receiving Organization to participate in this Use Case.</td>
<td>Send a Direct message to the Sending Organization’s Direct address explaining the process for becoming authorized for the use case and include a link to the Endpoint Capability Declaration document.</td>
</tr>
<tr>
<td><p>A Direct endpoint receives a message from an Entity that is documented in the Receiving Edge system as authorized for the Use Case published for the endpoint in the DirectTrust Aggregate Directory.</p>
<p>However (See below two rows):</p></td>
<td></td>
</tr>
<tr>
<td>The Receiving Edge system has no information about the associated Patient.</td>
<td>Send a Direct message to the Sending Direct address explaining the Patient was not found. Include information on how to register a Patient.</td>
</tr>
<tr>
<td>The Receiving Edge system has no information about the associated Patient Context Identifier.</td>
<td>Send a Direct message to the Sending Direct address explaining the Patient Context Identifier was not found.</td>
</tr>
</tbody>
</table>
