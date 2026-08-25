---
title: Patient Telecom
---

# Patient Telecom

A patient’s “telecom” can be their phone number or email address.

Telecom guidance for V2 and FHIR can be viewed [here](https://build.fhir.org/ig/HL7/v2-to-fhir/ConceptMap-datatype-xtn-to-contactpoint.html).

Telecom guidance for CDA and FHIR

<table style="width:100%;">
<colgroup>
<col style="width: 12%" />
<col style="width: 12%" />
<col style="width: 74%" />
</colgroup>
<tbody>
<tr>
<td><strong>CDA telecom</strong></td>
<td><strong>FHIR telecom</strong></td>
<td><strong>Transform Steps</strong></td>
</tr>
<tr>
<td>@use</td>
<td>.use</td>
<td><p><a href="https://build.fhir.org/ig/HL7/ccda-on-fhir/ConceptMap-CF-TelecomUse.html">CDA telecom use → FHIR contact point use</a></p>
<p>Note that CDA's @use='PG' is equivalent to FHIR's .system='pager'</p></td>
</tr>
<tr>
<td>@value</td>
<td><p>.system</p>
<p>&amp;</p>
<p>.value</p></td>
<td><p><a href="https://build.fhir.org/ig/HL7/ccda-on-fhir/ConceptMap-CF-TelecomType.html">CDA telecom value → FHIR contact point system</a></p>
<p>Only include information in FHIR value which comes after the CDA system prefix; other formatting may be preserved. E.g. CDA tel:+1(555)867-5309 becomes +1(555)867-5309 in FHIR.</p></td>
</tr>
</tbody>
</table>

## Handling Multiple Telecoms

Just like with address, multiple telecoms can be included. Each telecom should include a clarifying use attribute.
