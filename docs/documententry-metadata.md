---
title: DocumentEntry Metadata
---

# DocumentEntry Metadata

As defined in [XDR and XDM for Direct Secure Messaging Specification Version 2.1](https://directtrust.box.com/s/ydqcw1jpki1j6i94oyovcpn8rtwg8yqz) , the XDM metadata requirements only differ from limited metadata by requiring the size, hash, and URL attributes for DocumentEntry.

<table style="width:100%;">
<colgroup>
<col style="width: 24%" />
<col style="width: 14%" />
<col style="width: 15%" />
<col style="width: 45%" />
</colgroup>
<tbody>
<tr>
<td><strong>Metadata Element</strong></td>
<td><strong>Cardinality</strong></td>
<td><strong>Vocabulary Binding Strength</strong></td>
<td><strong>ValueSet (or Fixed Value)</strong></td>
</tr>
<tr>
<td><a href="https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.2.16">patientId</a></td>
<td>0..1</td>
<td></td>
<td><p>Contains the patient identifier as known to the receiver.</p>
<p>This field includes these three values for the patient id</p>
<ul>
<li><p>Identifier</p></li>
<li><p>Assigning Authority</p></li>
</ul>
<p>The identifier type needs to be discernible from the Assigning Authority OID.</p>
<p><a href="https://hl7.org/fhir/valueset-identifier-type.html">https://hl7.org/fhir/valueset-identifier-type.html</a></p></td>
</tr>
<tr>
<td><a href="https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.2.22">sourcePatientId</a></td>
<td>0..1</td>
<td></td>
<td>The patient ID as known and recognized by the sender.</td>
</tr>
<tr>
<td><a href="https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.2.23">sourcePatientInfo</a></td>
<td>0..1</td>
<td></td>
<td>See Chapter on Patient Demographics and Matching.</td>
</tr>
<tr>
<td><a href="https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.2.1">Author</a></td>
<td>0..*</td>
<td>n/a</td>
<td><p>This metadata answers the question, “Who is the author of this specific document?”</p>
<p>When the author is a practitioner, this component should include the author person and the author’s organization.</p>
<p>Refer to additional guidance on Provenance Author in C-CDA v4.0. Or FHIR US CORE Provenance Guidance.</p></td>
</tr>
<tr>
<td>Author.specialty</td>
<td>0..*</td>
<td>Extensible</td>
<td>This is the author person’s specialty codes can be found in this value set: <a href="http://hl7.org/fhir/ValueSet/c80-practice-codes">http://hl7.org/fhir/ValueSet/c80-practice-codes</a></td>
</tr>
<tr>
<td>Author.specialty</td>
<td>0..*</td>
<td>Extensible</td>
<td>NUCC codes from <a href="https://build.fhir.org/ig/HL7/fhir-us-ndh/ValueSet-IndividualAndGroupSpecialtiesVS.html">Individual and Group Specialties</a></td>
</tr>
<tr>
<td>Author.role</td>
<td>0..*</td>
<td>Preferred</td>
<td><p>This field corresponds to PractitionerRole.code and the role concept comes from this value set: <a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1099.30/expansion">Care Team Member Function</a></p>
<p>When the author is an individual person, this role concept comes this value set: <a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.11.20.12.1/expansion">Personal and Legal Relationship Role type</a>.</p>
<p>This concept aligns with PractitionerRole.code.</p></td>
</tr>
<tr>
<td>Author.role</td>
<td>0..*</td>
<td>Extensible</td>
<td>One row per ValueSet in Appendix 7.2 Value Sets Index.</td>
</tr>
<tr>
<td><a href="https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.2.3">classCode</a></td>
<td></td>
<td>Preferred</td>
<td><p>This corresponds to the document’s “Category Code”.</p>
<p>If supplied, for documents about a patient, implementations SHOULD draw from a set of codes from the LOINC Document Ontology determined to be “high-level” category codes.</p>
<p>Such codes also would be used in</p>
<ul>
<li><p>CDA ClinicalDocument.sdtc:category or Composition.category or</p></li>
<li><p>FHIR DocumentReference.category.</p></li>
</ul>
<p>The derived use case IG sets clear expectations regarding expected classCode metadata.</p></td>
</tr>
<tr>
<td><a href="https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.2.5">confidentialityCode</a></td>
<td></td>
<td>Preferred?</td>
<td><p>If supplied, for a clinical document about a patient, implementations SHOULD draw from the FHIR Confidentiality Value Set (OID: 2.16.840.1.113883.1.11.10228)</p>
<p><a href="https://hl7.org/fhir/R4/v3/ConfidentialityClassification/vs.html">https://hl7.org/fhir/R4/v3/ConfidentialityClassification/vs.html</a></p></td>
</tr>
<tr>
<td><a href="https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.2.6">creationTime</a></td>
<td></td>
<td></td>
<td>This timestamp represents when the document (or document entry artifact) was created (origination time). If this artifact has an associated creation time or date known to the sender, it SHOULD be sent in this attribute. Implementations SHALL NOT copy transaction-related dates/times, including the value of the <a href="https://datatracker.ietf.org/doc/html/rfc5322">RFC 5322</a> Date header.</td>
</tr>
<tr>
<td><a href="https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.2.7">entryUUID</a></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.2.9">formatCode</a></td>
<td></td>
<td>Extensional</td>
<td><a href="http://terminology.hl7.org/ValueSet/v3-HL7FormatCodes">HL7FormatCodes</a></td>
</tr>
<tr>
<td><a href="https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.2.17">practiceSettingCode</a></td>
<td></td>
<td></td>
<td><p>When available, implementations SHOULD draw from the <a href="http://hl7.org/fhir/ValueSet/c80-practice-codes">FHIR Practice Setting Code Value Set</a>, (OID: 2.16.840.1.113883.3.88.12.80.72) if</p>
<p>an appropriate code exists in the value set. Additional codings can be specified by the derivative IG for Use Cases where medical specialties do not apply.</p></td>
</tr>
<tr>
<td><a href="https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.2.17">practiceSettingCode</a></td>
<td></td>
<td></td>
<td><p>When available, implementations SHOULD draw from the <a href="http://hl7.org/fhir/ValueSet/c80-practice-codes">FHIR Practice Setting Code Value Set</a>, (OID: 2.16.840.1.113883.3.88.12.80.72) if</p>
<p>An appropriate code exists in the value set. Additional codings can be specified by the derivative IG for Use Cases where medical specialities do not apply.</p></td>
</tr>
<tr>
<td><a href="https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.2.11">healthcareFacilityTypeCode</a></td>
<td></td>
<td>Extensible</td>
<td><p>Location.type now includes additional bindings:</p>
<p><a href="http://terminology.hl7.org/5.5.0/ValueSet-v3-ServiceDeliveryLocationRoleType.html">ServiceDeliveryLocationRoleType</a></p>
<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1267.31/expansion">Healthcare Service Location Type Combined</a> USCDI applicable vocabulary standard Healthcare Service Location Codes (HSLOC) or SNOMED-CT Healthcare Facility Type codes</p>
<p><a href="http://terminology.hl7.org/ValueSet/CMSPlaceOfServiceCodes">NUBC Place of Service (POS) codes</a></p></td>
</tr>
<tr>
<td><a href="https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.2.13">languageCode</a></td>
<td></td>
<td>Required</td>
<td><p>Value Set: CommonLanguages</p>
<p><a href="https://hl7.org/fhir/R4/valueset-languages.html">https://hl7.org/fhir/R4/valueset-languages.html</a></p>
<p>OID: 2.16.840.1.113883.4.642.3.20</p>
<p><em>Note English can be en or en-US.</em></p></td>
</tr>
<tr>
<td><a href="https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.2.29">limitedMetadata</a></td>
<td></td>
<td>n/a</td>
<td><p>XDM metadata requirements only differ from limitedMetadata requirements by requiring the size, hash, and URL attributes for DocumentEntry.</p>
<p>As a consequence, the presence of the limitedMetadata attribute in the XDM metadata us optional (i.e. the limitedMetadata flag may be set for any incoming XDM package)</p></td>
</tr>
<tr>
<td><a href="https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.2.15">mimeType</a></td>
<td></td>
<td>Required</td>
<td><p>When converting to/from MIME Entities, SHALL contain the same media type as the applicable message MIME part Content-Type header for the entry.</p>
<p>(<a href="https://directtrust.box.com/s/hx096896zd8ysi4l81c93cn066m9n3x4">See spreadsheet for mimeTypes used with common attachment types.)</a></p>
<p>ValueSet: mimeTypes</p>
<p><a href="http://hl7.org/fhir/ValueSet/mimetypes">http://hl7.org/fhir/ValueSet/mimetypes</a></p>
<p><em>OID</em>: 2.16.840.1.113883.4.642.3.1024</p>
<p>[Add specialized xml and json mimetypes for CDA and JSON.]</p>
<p>Add pointer to the IANA media types list.</p></td>
</tr>
<tr>
<td><a href="https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.2.30">objectType</a></td>
<td></td>
<td></td>
<td>See Appendix 7.5 Clarification of IHE XDM DocumentEntry.objectType for more information on objectType.</td>
</tr>
<tr>
<td><a href="https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.2.28">referenceIdList</a></td>
<td></td>
<td></td>
<td><p>[0..*]</p>
<p>This attribute allows for the sending of additional identifiers (e.g. accession numbers, encounter ID, referral ID, visit ID, document setId and versionNumber, etc.) that provide enhanced information for this transaction, allowing a set of transactions to be related to a single visit or referral, for example:</p>
<p>Identifier types follow provided identifier datatypes.</p>
<p>The challenge is determining the correct OID or urn for the Naming System and the Assigning Authority.</p></td>
</tr>
<tr>
<td><a href="https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.2.19">serviceStartTime</a></td>
<td></td>
<td></td>
<td>This is the start of the range of time covered by the document, <strong>if it is known.</strong></td>
</tr>
<tr>
<td><a href="https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.2.20">serviceStopTime</a></td>
<td></td>
<td></td>
<td>This is the end of the range of time covered by the document <strong>if it is known</strong>.</td>
</tr>
<tr>
<td><a href="https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.2.26">uniqueId</a></td>
<td></td>
<td></td>
<td><p>The globally unique ID of the document.</p>
<p>ClinicalDocument.id</p>
<p>CDA documents, FHIR documents and V2 messages, and other artifacts contain a unique identifier which should be used here.</p>
<p>Implementations SHOULD use a unique id extracted from the content.</p>
<p>If the content does not include a unique identifier, implementers SHALL use a UUID URN generated for the transaction.</p>
<p>This value shall be different from the uniqueId specified in the Submission Set metadata.</p></td>
</tr>
<tr>
<td><a href="https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.2.21">size</a></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.2.10">hash</a></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.2.27">URI</a></td>
<td></td>
<td></td>
<td>This is the link that is used to reference the documentEntry from the submissionSet.</td>
</tr>
<tr>
<td>Slot/@name</td>
<td></td>
<td></td>
<td>The SubmissionSet may contain any number of custom attributes as described in the IHE ITI Volume 2 specification in Section 4.2.3.1.6 <em>Extra Metadata Attributes.</em></td>
</tr>
</tbody>
</table>
