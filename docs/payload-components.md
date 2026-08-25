---
title: Payload Components
---

# Payload Components

For readability, this Framework names different mime parts by adding a number to distinguish one mime part from another. These identifying numbers in the name do not necessarily imply an expected order when included within the message. The Framework includes an expectation of order for the mime parts, that expectation will be clearly defined in the IG.

## MIME Part I Human Readable Information

Specifications that derive from the Metadata and Payloads Framework SHALL always include human readable information in MIME Part 1. This requirement ensures equitable interoperability. As a minimum, all message recipients receive the same human readable information.

The packaged machine processable information in MIME Part 2 MAY include human readable information as well. If it does, the human readable information in MIME Part 2 SHALL be identical to the human readable information included in MIME Part 1.

### SMTP MIME Part I Metadata

When using the XDR and XDM payload format and conforming to the Metadata and Payloads Framework, the message payload will contain two SMTP MIME Parts.

The first MIME Part will hold a human readable text message conveying the needed information in a format that requires no special data processing to render the information.

*Note: The second MIME Part will hold at least one machine processable payload which includes a human readable component comprising the identical human readable information as contained in MIME Part 1.*

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<tbody>
<tr>
<td><strong>Context Element</strong></td>
<td><strong>Context/Metadata Requirement</strong></td>
<td><strong>Fixed Value or Value Set</strong></td>
</tr>
<tr>
<td>Content-Type</td>
<td>R</td>
<td>Multipart/alternative</td>
</tr>
<tr>
<td>For various alternate parts the following Content-Type codes can be used.</td>
<td><p>R</p>
<p>O</p>
<p>O</p></td>
<td><p>test/plain; charset=UTF-8</p>
<p>text/rtf</p>
<p>test/html</p></td>
</tr>
<tr>
<td>Content-Transfer-Encoding</td>
<td>Conditional based on Content-Type</td>
<td>Values for this field are specified in section 6.1 of <a href="https://datatracker.ietf.org/doc/html/rfc2045">RFC2045</a>.</td>
</tr>
</tbody>
</table>

The derived use case IG shall provide clear complete instructions about the content that needs to be represented in the human readable communication. This could be documented by populating a table which describes the data elements to be rendered and describes how to populate each data element value.

**Sample Table**

|  |  |  |
|----|----|----|
| **Data Element Name** | **Conformance (R, RE, O)** | **How to populate each Data Element Value** |
| Facility Name | R | Include the name of the facility relevant for this use case. |
| Event Date | R | Include the date and time when the event occurred. |
| Event Type | R | Include the type of event that occurred. |

## MIME Part II Machine Processable Structured Information

MIME Part 2 SHALL contain a machine processable structured information collection with a structure, content, and payload metadata defined within the derived IG. This could be an XDM package containing a SubmissionSet and two or more DocumentEntries or a FHIR or Context IG equivalent. One component within the structured information collection SHALL contain the human readable Communication (identical in content to what is in MIME Part 1).

### SMTP MIME Part II Metadata

The following table describes metadata included with MIME Part 2 in a Direct message.

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<tbody>
<tr>
<td><strong>Context Element</strong></td>
<td><strong>Context/Metadata Requirement</strong></td>
<td><strong>Fixed Value or Value Set</strong></td>
</tr>
<tr>
<td>Content-Type</td>
<td>Conditional based on MedatdataTypeCode</td>
<td><p>For XD: application/zip</p>
<p>For FHIR: application/fhir+json</p>
<p>For FHIR: application/fhir+xml</p>
<p>For Context IG: (See Issues and Comment Resolution)</p></td>
</tr>
<tr>
<td>Content-Transfer-Encoding</td>
<td>Conditional based on Content-Type</td>
<td>Values for this field are specified in section 6.1 of <a href="https://datatracker.ietf.org/doc/html/rfc2045">RFC2045</a>.</td>
</tr>
<tr>
<td>Content-ID</td>
<td>O</td>
<td></td>
</tr>
<tr>
<td>Content-Disposition</td>
<td>R</td>
<td><p>attachment;</p>
<p>filename={some file name}</p>
<p>Example: filename=2cdd98cb-e4ac-4037-8c78-822d01824d17-xdm.zip</p></td>
</tr>
</tbody>
</table>
