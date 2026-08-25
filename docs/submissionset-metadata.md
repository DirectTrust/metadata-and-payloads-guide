---
title: SubmissionSet Metadata
---

**XDM and XDR Vocabulary Bindings and Terminology Guidance**

Guidance supplied in the Metadata and Payloads Framework acts as an overlay to further constrain the guidance already provided within [XDR and XDM for Direct Secure Messaging Specification](https://directtrust.org/standards/the-direct-standard/xdr-xdm-versions).

Vocabulary binding specifications apply to metadata for XD, Context IG, and FHIR metadata content types. Mappings between XD metadata concepts specified below and FHIR metadata content types are provided in Appendix 7.3 FHIR over Direct Metadata and Payload Guidance and Mapping Instructions Mappings between XD metadata and Context IG metadata are deferred while the re-write of the Context IG is under development.

# SubmissionSet Metadata

The IHE specification describes the SubmissionSet object as the set of metadata that is common to all DocumentEntry objects it contains. The [XDR and XDM for Direct Secure Messaging Specification](https://directtrust.org/standards/the-direct-standard/xdr-xdm-versions) defines the requirements within Direct for the various elements of the SubmissionSet metadata object. The Metadata and Payloads Framework does not further constrain those element cardinality requirements. The cardinality column in the table below is provided for convenience and is not considered the source of truth. The Metadata and Payloads Framework provides more explicit vocabulary binding expectations to align with standards like HL7 C-CDA and HL7 US Core and to clarify options for non-medical use cases such as social care, legal, administrative etc.

The SubmissionSet acts as a structure that organizes the one to many attached object(s) contained within it.

<table style="width:96%;">
<colgroup>
<col style="width: 28%" />
<col style="width: 15%" />
<col style="width: 15%" />
<col style="width: 36%" />
</colgroup>
<thead>
<tr>
<th><strong>Metadata Element</strong></th>
<th><strong>Cardinality</strong></th>
<th><strong>Vocabulary Binding Strength</strong></th>
<th><strong>ValueSet (or Fixed Value)</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.3.1">author</a></td>
<td>1..*</td>
<td>n/a</td>
<td><p>The authorTelecommunication component (<a href="https://directtrust.org/standards/the-direct-standard/xdr-xdm-versions">Section 6.2.2 of the XDR and XDM for Direct Secure Messaging Specification</a>) SHALL contain the Direct address as it is or would be present in the SMTP MAIL FROM command.</p>
<p>For the entire structure is in the HIE Specification</p>
<p><em>Note, this author element does not necessarily contain the same author information as contained in the author element of all the DocumentEntry components. This metadata element answers the question, “Who compiled this set of documents?” not, “Who is the author of each document being sent?” Often times, the entity sending the message also is the entity compiling the set of documents.</em></p></td>
</tr>
<tr>
<td><a href="https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.3.10">submissionTime</a></td>
<td>1..1</td>
<td>n/a</td>
<td>In case of transformations from Internet Message Format (<a href="https://datatracker.ietf.org/doc/html/rfc5322">RFC 5322</a> ), implementations SHOULD use the value of the date header, the IHE definition notwithstanding.</td>
</tr>
<tr>
<td><a href="https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.3.4">contentTypeCode</a></td>
<td>1..1</td>
<td>Extensible</td>
<td><p>This often is a <a href="http://hl7.org/fhir/us/core/ValueSet/us-core-documentreference-type">LOINC Document Ontology Code</a>, but if the needed concept is not present in this value set (all codes from the LOINC DO codeSystem), codes from other codeSystems can be used as well.</p>
<p>A derivative IG defines the allowable set of codes to be used in the field and defines the mapping between each specified contentTypeCodes and a code from the <a href="https://objects.directtrust.org/standards/terminology/valueSet/ServDescVS.json">DirectTrust SERV_DESC Endpoint Use Case</a>.</p></td>
</tr>
<tr>
<td><a href="https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.3.12">uniqueId</a></td>
<td>1..1</td>
<td>n/a</td>
<td><p>No additional constraints.</p>
<p>The globally unique identifier for the SubmissionSet assigned by the entity that contributed the SubmissionSet.</p></td>
</tr>
<tr>
<td><a href="https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.3.11">title</a></td>
<td>0..1</td>
<td>n/a</td>
<td>This attribute MAY be used to convey the subject field of a wrapped <a href="https://datatracker.ietf.org/doc/html/rfc5322">RFC 5322</a> message.</td>
</tr>
<tr>
<td><a href="https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.3.7">intendedRecipient</a></td>
<td>0..*</td>
<td>n/a</td>
<td><p>No additional constraints.</p>
<p>The telecommunication component SHALL contain the Direct address as it is, or would be, present in the SMTP RCPT TO command.</p></td>
</tr>
<tr>
<td><a href="https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.3.8">patientId</a></td>
<td>0..*</td>
<td>n/a</td>
<td><p>No additional constraints.</p>
<p>This is populated by the message sender. It uses a patient identifier known to the receiver.</p>
<p>The exact mechanism of how the sender obtains this knowledge is outside the scope of this framework.</p>
<p>Options for gaining this knowledge include:</p>
<ol type="1">
<li><p>Use of a record locator service</p></li>
<li><p>Query the Intended Recipient Organization via Carequality and get the associated patient identifier</p>
<ol type="a">
<li><p>NamingSystem uses HomeCommunityID OID</p></li>
<li><p>Identifier is the returned identifier for the matched Pt.</p></li>
<li><p>AssigningAuthority is the name of this Organization as published in the Carequality Directory.</p></li>
</ol></li>
<li><p>Subscriptions need more guidance in general (a good future use case for M&amp;P), but suffice it to say that the subscription information would specify these three values for the patient at the Intended Recipient Organization (Subscription Holder)</p>
<ol type="a">
<li><p>Naming System</p></li>
<li><p>Naming System Identifier</p></li>
<li><p>Assigning Authority</p></li>
</ol></li>
</ol></td>
</tr>
<tr>
<td><a href="https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.3.9">sourcePatientId</a></td>
<td>0..*</td>
<td></td>
<td><p>No additional constraints.</p>
<p>This is populated by the message sender. It uses a patient identifier known to the sender.</p></td>
</tr>
<tr>
<td><a href="https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.2.23">sourcePatientInfo</a></td>
<td>0..1</td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.2.28">referenceIdList</a></td>
<td>0..1</td>
<td>Extensible</td>
<td><p>[0..*]</p>
<p>This attribute allows for the sending of additional context instance identifiers (e.g. accession numbers, encounter ID, referral ID, visit ID, etc.) that provide enhanced information for this transaction, allowing a set of transactions to be related to a single visit or referral, for example.</p>
<p><a href="https://hl7.org/fhir/valueset-identifier-type.html">https://hl7.org/fhir/valueset-identifier-type.html</a></p></td>
</tr>
<tr>
<td><a href="https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.3.13">limitedMetadata</a></td>
<td>0..1</td>
<td>n/a</td>
<td>No additional constraints.</td>
</tr>
<tr>
<td>Slot/@name</td>
<td>0..*</td>
<td></td>
<td><p>The SubmissionSet may contain any number of custom attributes as described in the IHE ITI Volume 2 specification in Section 4.2.3.1.6 <em>Extra Metadata Attributes.</em></p>
<p><em>Custom attributes defined in other DirectTrust Implementation Guides shall use a name containing a URN in the format urn:dt-org:&lt;igNAME&gt;.&lt;other&gt;.&lt;pertinent&gt;.&lt;information&gt; where the other pertinent information is determined by each IG. Implementation guides</em></p>
<p><em>defined by other Standards Organizations SHALL use names that are different from urn:dt-org.</em></p></td>
</tr>
<tr>
<td><a href="https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.3.5">entryUUID</a></td>
<td>1..*</td>
<td></td>
<td><p>No additional constraints.</p>
<p>Each entryUUID attribute is a globally unique identifier primarily intended for internal document management purposes. The UUID of each DocumentEntry is represented in a SubmissionSet.entryUUID.</p></td>
</tr>
</tbody>
</table>

Examples of identifiers that can be used in the referenceIdList

<table style="width:100%;">
<colgroup>
<col style="width: 33%" />
<col style="width: 66%" />
</colgroup>
<tbody>
<tr>
<td><strong>URN</strong></td>
<td><strong>Context Type</strong></td>
</tr>
<tr>
<td>urn:ihe:iti:xds:2013:accession</td>
<td><p>This code shall be used when the identifier is an accession number. It shall contain:</p>
<p>The accession number, and for accession values that are not globally unique, the Assigning Authority shall be included.</p>
<p>For example when the accession number has a value of "2013001" and the assigning authority is "1.2.3.4.5.6" then the CXi value is 2013001^^^&amp;1.2.3.4.5.6&amp;ISO^urn:ihe:iti:xds:2013:accession</p></td>
</tr>
<tr>
<td>urn:ihe:iti:xds:2013:referral</td>
<td><p>Referral number and assigning authority shall be present.</p>
<p>For example:</p>
<p>201300001^^^&amp;1.2.3.4.5.6&amp;ISO^urn:ihe:iti:xds:2013:referral</p></td>
</tr>
<tr>
<td>urn:ihe:iti:xds:2013:order</td>
<td><p>Order number and assigning authority shall be present.</p>
<p>For example:</p>
<p>134467653^^^&amp;1.2.3.4.5.42.1&amp;ISO^urn:ihe:iti:xds:2013:order</p></td>
</tr>
<tr>
<td>urn:ihe:iti:xds:2013:studyInstanceUID</td>
<td><p>This code shall be used when the identifier is a DICOM Study Instance UID.</p>
<p>CXi.1 shall contain the value of Study Instance UID. Only the CXi.1 and CXi.5 components shall be present.</p>
<p>For example when the Study Instance UID has a value of "1.2.3.45.678" then the CXi value is</p>
<p>1.2.3.45.678^^^^urn:ihe:iti:xds:2016:studyInstanceUID</p></td>
</tr>
<tr>
<td>urn:ihe:iti:xds:2013:encounterId</td>
<td><p>Encounter identifier (also known as visit number) and assigning authority shall be present.</p>
<p>For example:</p>
<p>245348841^^^&amp;1.2.840.113619.6.197&amp;ISO^urn:ihe:iti:xds:2015:encounterId</p></td>
</tr>
</tbody>
</table>
