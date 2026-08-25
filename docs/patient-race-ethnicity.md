---
title: Patient Race and Ethnicity
---

# Patient Race and Ethnicity

**Sample HL7 V2**

- [PID-10](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.10) Race - follows same rules as FHIR for OMB-5

- [PID-22](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.22) Ethnic Group - follows same rules as FHIR for OMB-2

**Sample HL7 CDA**

In C-CDA, Race and Ethnicity are encoded in the patientRole/patient element using:

- \<raceCode\> and \<ethnicGroupCode\>

- Codes from the same **CDCREC** code system as used by FHIR



![CDA RecordTarget/Patient class model showing raceCode and ethnicGroupCode attributes drawn from the CDCREC code system, alongside PatientRole and LanguageCommunication structures.](/images/patient-race-ethnicity/1.png)

*CDA RecordTarget/Patient class model showing raceCode and ethnicGroupCode attributes drawn from the CDCREC code system, alongside PatientRole and LanguageCommunication structures.*


**Sample HL7 FHIR**

To be compliant with HL7 standards (C-CDA and US Core FHIR) and the ONC/ASTP U.S. Core Data for Interoperability (USCDI) requirements, the correct values for Race and Ethnicity are based on code systems and value sets specified by:

- HL7 Version 3

- USCDI v3 (or latest adopted version)

- Office of Management and Budget (OMB) Directive 15

## Race

The OMB 1997 standard categories for race are required, and should come from the CDC Race & Ethnicity – CDCREC code system (urn:oid:2.16.840.1.113883.6.238).

OMB minimum required race categories:

|          |                                           |
|----------|-------------------------------------------|
| **Code** | **Display**                               |
| 1002-5   | American Indian or Alaska Native          |
| 2028-9   | Asian                                     |
| 2054-5   | Black or African American                 |
| 2076-8   | Native Hawaiian or Other Pacific Islander |
| 2106-3   | White                                     |

You may also include more granular race details (e.g., "Filipino," "Japanese") as extensions or detailed codes under the main OMB categories, using the same code system.

### FHIR and C-CDA CodeSystem Mapping

<table>
<colgroup>
<col style="width: 16%" />
<col style="width: 16%" />
<col style="width: 16%" />
<col style="width: 16%" />
<col style="width: 16%" />
<col style="width: 16%" />
</colgroup>
<tbody>
<tr>
<td><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.4.642.2.575/expansion"><strong>FHIR Code</strong></a></td>
<td><strong>Urn:oid</strong></td>
<td><strong>FHR Display</strong></td>
<td><p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.2074.1.1.3/expansion/Latest"><strong>C-CDA Code</strong></a></p>
<p><em><strong>Note: C-CDA uses this ValueSet but then the template permits the use of NullFlavors</strong></em></p></td>
<td><strong>Urn:oid</strong></td>
<td><strong>C-CDA Display</strong></td>
</tr>
<tr>
<td>1002-5</td>
<td>2.16.840.1.113883.6.238</td>
<td>American Indian or Alaska Native</td>
<td>1002-5</td>
<td>2.16.840.1.113883.6.238</td>
<td>American Indian or Alaska Native</td>
</tr>
<tr>
<td>2028-9</td>
<td>2.16.840.1.113883.6.238</td>
<td>Asian</td>
<td>2028-9</td>
<td>2.16.840.1.113883.6.238</td>
<td>Asian</td>
</tr>
<tr>
<td>2054-5</td>
<td>2.16.840.1.113883.6.238</td>
<td>Black or African American</td>
<td>2054-5</td>
<td>2.16.840.1.113883.6.238</td>
<td>Black or African American</td>
</tr>
<tr>
<td>2076-8</td>
<td>2.16.840.1.113883.6.238</td>
<td>Native Hawaiian or Other Pacific Islander</td>
<td>2076-8</td>
<td>2.16.840.1.113883.6.238</td>
<td>Native Hawaiian or Other Pacific Islander</td>
</tr>
<tr>
<td>2106-3</td>
<td>2.16.840.1.113883.6.238</td>
<td>White</td>
<td>2106-3</td>
<td>2.16.840.1.113883.6.238</td>
<td>White</td>
</tr>
<tr>
<td>ASKU</td>
<td>2.16.840.1.113883.5.1008</td>
<td>Asked but unknown</td>
<td>ASKU</td>
<td>2.16.840.1.113883.5.1008</td>
<td>Asked but unknown</td>
</tr>
<tr>
<td>UNK</td>
<td>2.16.840.1.113883.5.1008</td>
<td>Unknown</td>
<td>UNK</td>
<td>2.16.840.1.113883.5.1008</td>
<td>Unknown</td>
</tr>
<tr>
<td><p>Asked-</p>
<p>declined</p></td>
<td>2.16.840.1.113883.4.642.4.1048</td>
<td>Asked but declined</td>
<td>Asked-declined</td>
<td>2.16.840.1.113883.4.642.4.1048</td>
<td>Asked but declined</td>
</tr>
</tbody>
</table>

## Ethnicity

Ethnicity values are also taken from the CDC Race & Ethnicity – CDCREC code system, matching OMB standards.

[OMB minimum required ethnicity categories](https://hl7.org/fhir/us/core/STU8/StructureDefinition-us-core-ethnicity.html):

|          |                        |
|----------|------------------------|
| **Code** | **Display**            |
| 2135-2   | Hispanic or Latino     |
| 2186-5   | Not-Hispanic or Latino |

Like race, you may include more granular ethnicity codes under these categories, though only the above two are required for minimum interoperability. The option of “Not Hispanic or Latino” has no subcategories.

Additional nullflavor options are also supported outlined below:

<table>
<colgroup>
<col style="width: 16%" />
<col style="width: 16%" />
<col style="width: 16%" />
<col style="width: 16%" />
<col style="width: 16%" />
<col style="width: 16%" />
</colgroup>
<tbody>
<tr>
<td><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.4.642.2.575/expansion"><strong>FHIR Code</strong></a></td>
<td><strong>Urn:oid</strong></td>
<td><strong>FHIR Display</strong></td>
<td><p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.2074.1.1.3/expansion/Latest"><strong>C-CDA Code</strong></a></p>
<p><em><strong>Note: C-CDA uses this ValueSet but then the template permits the use of NullFlavors</strong></em></p></td>
<td><strong>Urn:oid</strong></td>
<td><strong>C-CDA Display</strong></td>
</tr>
<tr>
<td>ASKU</td>
<td>2.16.840.1.113883.5.1008</td>
<td>Asked but unknown</td>
<td>ASKU</td>
<td>2.16.840.1.113883.5.1008</td>
<td>Asked but unknown</td>
</tr>
<tr>
<td>UNK</td>
<td>2.16.840.1.113883.5.1008</td>
<td>Unknown</td>
<td>UNK</td>
<td>2.16.840.1.113883.5.1008</td>
<td>Unknown</td>
</tr>
<tr>
<td><p>Asked-</p>
<p>declined</p></td>
<td>2.16.840.1.113883.4.642.4.1048</td>
<td>Asked but declined</td>
<td><p>Asked-</p>
<p>declined</p></td>
<td>2.16.840.1.113883.4.642.4.1048</td>
<td>Asked but declined</td>
</tr>
</tbody>
</table>

*Note: USCDI and HL7 Implementation*

FHIR US Core Profile references these codes in:

- Patient.extension\[race\]

- Patient.extension\[ethnicity\]

HL7® FHIR® US Core Implementation Guide uses these extensions:

- [http://hl7.org/fhir/us/core/StructureDefinition/us-core-race](http://hl7.org/fhir/us/core/StructureDefinition/us-core-race)

- [http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity](http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity)

Both extensions support:

- OMB Category (required)

- Detailed code (optional)

- Text (optional narrative)
