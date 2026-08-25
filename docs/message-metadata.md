---
title: Message Metadata
---

# Message Metadata

## Metadata in the SMTP Message Header

The derivative IG will set the values for:

- x-direct-metadata-payload-versionIdentifier

- x-direct-purpose

- x-direct-useCase

- x-direct-formatCode

- x-direct-metadataTypeCode

- x-direct-payloadMimeType

These elements are carried in the SMTP message header so that HISPs can report on transaction traffic based on this information and route or process messages more effectively.

<table>
<colgroup>
<col style="width: 20%" />
<col style="width: 13%" />
<col style="width: 14%" />
<col style="width: 51%" />
</colgroup>
<tbody>
<tr>
<td><strong>Metadata Element</strong></td>
<td><strong>Cardinality</strong></td>
<td><strong>Binding Strength</strong></td>
<td><strong>ValueSet (or Fixed Value)</strong></td>
</tr>
<tr>
<td>x-direct-metadata-payload-versionIdentifier</td>
<td>1..1</td>
<td>n/a</td>
<td>Use the Version number of the Metadata and Payload Framework which the use case messages will conform to.</td>
</tr>
<tr>
<td>x-direct-purpose</td>
<td>0..1</td>
<td>Extensional</td>
<td><p>Purpose Code from either:</p>
<p><a href="http://terminology.hl7.org/ValueSet/v3-PurposeOfUse">HL7 PurposeOfUse</a></p>
<p>Or</p>
<p><a href="https://sequoiaproject.org/SequoiaProjectHealthcareDirectoryImplementationGuide/output/ValueSet-RCEPurposeVS.html">Sequoia RCEPurposeVS</a></p>
<p>Or</p>
<p><a href="https://rce.sequoiaproject.org/wp-content/uploads/2024/08/SOP-Exchange-Purposes_CA-v3_508.pdf">TEFCA Purpose Codes.</a></p></td>
</tr>
<tr>
<td>x-direct-useCase</td>
<td>1...1</td>
<td>Extensional</td>
<td><a href="https://objects.directtrust.org/standards/terminology/valueSet/ServDescVS.json">DirectTrust SERV_DESCVS</a></td>
</tr>
<tr>
<td>x-direct-formatCode</td>
<td>0..1</td>
<td>Extensional</td>
<td><p><a href="https://objects.directtrust.org/standards/terminology/valueSet/DTFormatCodeVS.json">DirectTrust Format Codes</a></p>
<p>Or</p>
<p><a href="https://hl7.org/fhir/R4/valueset-formatcodes.html">FHIR Format Codes</a></p></td>
</tr>
<tr>
<td>x-direct-metadataTypeCode</td>
<td>1..1</td>
<td>Extensional</td>
<td><a href="https://objects.directtrust.org/standards/terminology/codeSystem/MetadataTypeCS.json">DirectTrust Metadata Type Codes</a></td>
</tr>
<tr>
<td>x-direct-payloadMimeType</td>
<td>0..*</td>
<td>Extensional</td>
<td><a href="http://hl7.org/fhir/us/ndh/ValueSet/EndpointFhirMimeTypeVS">HL7 EndpointFHIRMimeTypes</a></td>
</tr>
</tbody>
</table>

## How to Comply to Minimum Requirements

When following the Metadata and Payloads Framework, the following table provides guidance on one way to meet the minimum requirements for messages that don’t conform to a specific derivative IG.

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 14%" />
<col style="width: 21%" />
<col style="width: 38%" />
</colgroup>
<tbody>
<tr>
<td><strong>Metadata Element</strong></td>
<td><strong>Cardinality</strong></td>
<td><strong>Binding Strength</strong></td>
<td><strong>ValueSet (or Fixed Value)</strong></td>
</tr>
<tr>
<td>x-direct-metadata-payload-versionIdentifier</td>
<td>1..1</td>
<td>n/a</td>
<td>Use 1.0</td>
</tr>
<tr>
<td>x-direct-useCase</td>
<td>1..1</td>
<td>Extensional</td>
<td>Use “any-all”</td>
</tr>
<tr>
<td>x-direct-metadataTypeCode</td>
<td>1..1</td>
<td>Extensional</td>
<td><p>Use urn:dt-org:dsm:map:SMTP+XD:1.0 for XD metadata</p>
<p>Use “urn:dt-org:dsm:map:SMTP+CIG:1.0" for Context IG metadata.</p></td>
</tr>
</tbody>
</table>
