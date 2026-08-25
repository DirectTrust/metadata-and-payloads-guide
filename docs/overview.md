---
title: Metadata and Payload Overview
---

# Metadata and Payload Overview

The Framework for Metadata and Payload via the Direct Standard® creates a reusable framework that helps Direct adopters rapidly document use case requirements and functionalities in an Implementation Guide (IG) that is derived from this base foundational framework.

The Metadata and Payload Framework offers step-by-step process and basic educational information (instructional material) to ensure all authors and readers have the essential knowledge needed to create and understand the technical aspects of a Direct Use Case IG.

It establishes a common framework for documenting a Business Use Case and one or more Technical Uses Cases required to address the scope of the Business Use Case.

This Framework establishes reusable Technical Actors and a framework for identifying the Transactions to be covered in the Technical Use Cases in scope for the derivative IG. The Technical Actor and Transactions framework is designed for re-use to reduce the time required to design a Use Case specific derivative IG and to create greater consistency across all DirectTrust IGs that derive from this foundational Framework.

The Metadata and Payload Framework doesn’t prohibit additional patterns of use for Direct Secure Messaging from being developed. It simply encourages use of existing patterns where possible and efficient.

The framework identifies ValueSets and coded concepts that can be used to communicate commonly needed metadata required for Direct exchange.

## Principles

This Framework will not define specifications for standards artifacts that should be developed in other Standards Development Organization (SDO) communities equipped with specific IG development knowledge and where high-quality specification tooling exists. For example, if a specific type of CDA document needs to be templated or a specific FHIR Resource Bundle needs to be profiled, that part of the specification should be delegated to the right SDO with the right skills, then the developed IG from that SDO would be referenced by a Metadata and Payload IG addressing how to use Direct Secure Messaging to convey those types of information artifacts.

The Metadata and Payload Framework is extensible. New patterns will be discovered over time and new versions of this Framework will accommodate those changes.

<table>
<colgroup>
<col style="width: 9%" />
<col style="width: 90%" />
</colgroup>
<tbody>
<tr>
<td><strong>#</strong></td>
<td><strong>Principle</strong></td>
</tr>
<tr>
<td>P1</td>
<td>Identifiers will always include an identifier, a namingSystem type, and an Assigning Authority</td>
</tr>
<tr>
<td>P2</td>
<td>Codes will always include a code value, a CodeSystem name and CodeSystem identifier.</td>
</tr>
<tr>
<td>P3</td>
<td>ValueSets will be fully specified with an OID and URI and will be publicly available and unencumbered by ip protection mechanisms which restrict usage.</td>
</tr>
<tr>
<td>P4</td>
<td>Functional expectations will be described for Content Creators, Message Senders and Message Receivers, Content Consumers (and middle-system information conveyors, when applicable)</td>
</tr>
<tr>
<td>P5</td>
<td><p>This Framework is intended to expand over time to flexibly support all Use Cases of Direct Secure Messaging, without limitation on the metadata or payloads required. All valueSet bindings, to the extent possible, will use an extensional binding strength.</p>
<p>Technical Actors and Transaction types are considered a “starter set” but do not limit IG authors from defining new ones as needed, so long as they are materially different from the ones already defined.</p>
<p>To report the need for additional valueSet concepts, Technical Actors or Transaction types to be established, email your request to Standards@DirectTrust.org.</p></td>
</tr>
<tr>
<td>P6</td>
<td><p>When exchanging documents using FHIR® (i.e. Bundle of type Document), HL7 FHIR document principles SHALL apply. A derivative IG MAY assert conformance to the FHIR Clinical Document IG and thereby adopt the additional document principles included in that IG. Further, those document principles MAY apply to any type of document regardless if the content subject matter is considered to be clinical, legal, administrative, social, etc. in nature.</p>
<p>When exchanging documents using CDA, HL7 CDA document principles SHALL apply. When exchanging other types of files that are not considered to be a document (i.e Bundle of type Collection or SearchSet, etc.) or event notification (i.e. V2 message) specific assumptions regarding the persistence, provenance, and custodianship of the conveyed information SHOULD be described in the derivative IG within its Principles section.</p></td>
</tr>
</tbody>
</table>

## Terms, Symbols, and Definitions

This section is used to clarify any specialized terms or symbols used. It focused on essential distinctive terms that require precise clarification for their use in an IG.

<table>
<colgroup>
<col style="width: 29%" />
<col style="width: 70%" />
</colgroup>
<tbody>
<tr>
<td><strong>Term/Symbol</strong></td>
<td><strong>Definition within this Framework</strong></td>
</tr>
<tr>
<td>Message</td>
<td>The entire digital object encompassing the Message Header, Message Content Container, and all MIME Parts. Also the full range of content in the Message Payload encompassing the Payload Metadata and the Payload Content.</td>
</tr>
<tr>
<td>Metadata</td>
<td>Data that is about the content in the message payload being exchanged. The metadata is part of the message payload, but it plays a special role, to tell about the rest of the data in the payload.</td>
</tr>
<tr>
<td>Message Metadata</td>
<td>Metadata that refers to the message itself will be called message metadata. Message metadata is the message header information which is not encrypted while the Direct Secure Message is exchanged between sender and recipient.</td>
</tr>
<tr>
<td colspan="2"><strong>For describing the physical structure of a Direct Secure Message.</strong></td>
</tr>
<tr>
<td>SMTP Message Header</td>
<td>The SMTP header of a Direct Secure Message (Direct message).</td>
</tr>
<tr>
<td>Content Container</td>
<td>The body of an SMTP message which is made up of a collection of MIME parts.</td>
</tr>
<tr>
<td>MIME Part</td>
<td>A structural component part of an SMTP message which is carried within the Message Content Container. The Message Content Container is made up of one or more MIME Parts.</td>
</tr>
<tr>
<td colspan="2"><strong>For describing the conceptual content of a Direct Secure Message.</strong></td>
</tr>
<tr>
<td>Payload</td>
<td>A general term describing everything carried in a Direct Secure Message including information in the Message Header, and all the information in the Message Content Container including the Metadata and the Payload Content.</td>
</tr>
<tr>
<td>Payload Metadata</td>
<td>Any structured information used to describe the payload of the message. Metadata may be present in the message header or the “content contain” body of the message within established locations within the structure of the payload.</td>
</tr>
<tr>
<td>Payload Content</td>
<td>The information carried in the Message Content Container that is described by the Metadata.</td>
</tr>
</tbody>
</table>
