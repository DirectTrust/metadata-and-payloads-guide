---
title: Patient Identifier List
---

# Patient Identifier List

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| **Field** | **Length** | **Data Type** | **Optionality** | **Repeatability (No (-) or Unlimited (∞))** | **Table (Additional Values)** |
| [PID.3.1 - ID Number](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.3.1) | 15 | [ST](https://hl7-definition.caristix.com/v2/HL7v2.5.1/DataTypes/ST) | R | \- |  |
| [PID.3.2 - Check Digit](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.3.2) | 1 | [ST](https://hl7-definition.caristix.com/v2/HL7v2.5.1/DataTypes/ST) | O | \- |  |
| [PID.3.3 - Check Digit Scheme](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.3.3) | 3 | [ID](https://hl7-definition.caristix.com/v2/HL7v2.5.1/DataTypes/ID) | O | \- | [0061](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Tables/0061) |
| [PID.3.4 - Assigning Authority](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.3.4) | 227 | [HD](https://hl7-definition.caristix.com/v2/HL7v2.5.1/DataTypes/HD) | O | \- | [0363](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Tables/0363) |
| [PID.3.5 - Identifier Type Code](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Tables/0203) | 5 | [ID](https://hl7-definition.caristix.com/v2/HL7v2.5.1/DataTypes/ID) | O | \- | [0203](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Tables/0203) |
| [PID.3.6 - Assigning Facility](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.3.6) | 227 | [HD](https://hl7-definition.caristix.com/v2/HL7v2.5.1/DataTypes/HD) | O | \- |  |
| [PID.3.7 - Effective Date](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.3.7) | 8 | [DT](https://hl7-definition.caristix.com/v2/HL7v2.5.1/DataTypes/DT) | O | \- |  |
| [PID.3.8 - Expiration Date](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.3.8) | 8 | [DT](https://hl7-definition.caristix.com/v2/HL7v2.5.1/DataTypes/DT) | O | \- |  |
| [PID.3.9 - Assigning Jurisdiction](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.3.9) | 705 | [CWE](https://hl7-definition.caristix.com/v2/HL7v2.5.1/DataTypes/DT) | O | \- |  |
| [PID.3.10 - Assigning Agency or Department](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.3.10) | 705 | [CWE](https://hl7-definition.caristix.com/v2/HL7v2.5.1/DataTypes/DT) | O | \- |  |

In V2, the key information for each patient identifier uses the following fields:

- [PID-3.1](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.3.1) - Id Number ST

- [PID-3.4](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.3.4) - Assigning Authority HD (This is how you know who this ID belongs to.)

**The HD data type includes these fields:**

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| **Field** | **Length** | **Data Type** | **Optionality** | **Repeatability (No (-) or Unlimited (∞))** | **Table (Additional Values)** |
| [HD.1 - Namespace Id](https://hl7-definition.caristix.com/v2/HL7v2.5.1/DataTypes/HD.1) | 20 | [IS](https://hl7-definition.caristix.com/v2/HL7v2.5.1/DataTypes/IS) | O | \- | [0300](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Tables/0300) |
| [HD.2 - Universal Id](https://hl7-definition.caristix.com/v2/HL7v2.5.1/DataTypes/HD.2) | 199 | [ST](https://hl7-definition.caristix.com/v2/HL7v2.5.1/DataTypes/ST) | C | \- |  |
| [HD.3 - Universal Id Type](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Tables/0301) | 6 | [ID](https://hl7-definition.caristix.com/v2/HL7v2.5.1/DataTypes/ID) | C | \- | [0301](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Tables/0301) |

**HL7 CDA**

In CDA, the Patient demographic information is in the RecordTarget structure of the document’s header area. Patient identifiers are recorded within recordTarget.patientRole.id. The sdtc:identifiedBy extension to hold the identifier type.

<table style="width:100%;">
<colgroup>
<col style="width: 99%" />
</colgroup>
<tbody>
<tr>
<td><p>&lt;patientRole&gt;</p>
<p>&lt;id extension="d580858d0d83427381cd9d2237580048" root="2.16.840.1.113883.15.15.500.1"/&gt;</p>
<p>&lt;id assigningAuthorityName="Social Security Administration" extension="123-45-9999" root="2.16.840.1.113883.4.1"/&gt;</p>
<p>&lt;sdtc:identifiedBy typeCode="REL"&gt;</p>
<p>&lt;sdtc:alternateIdentification classCode="IDENT"&gt;</p>
<p>&lt;sdtc:id extension="123-45-9999" root="2.16.840.1.113883.4.1"/&gt;</p>
<p>&lt;sdtc:code&gt;</p>
<p>&lt;originalText&gt;Social Security Number&lt;/originalText&gt;</p>
<p>&lt;/sdtc:code&gt;</p>
<p>&lt;/sdtc:alternateIdentification&gt;</p>
<p>&lt;/sdtc:identifiedBy&gt;</p>
<p>&lt;sdtc:identifiedBy typeCode="REL"&gt;</p>
<p>&lt;sdtc:alternateIdentification classCode="IDENT"&gt;</p>
<p>&lt;sdtc:id extension="d580858d0d83427381cd9d2237580048" root="2.16.840.1.113883.15.15.500.1"/&gt;</p>
<p>&lt;sdtc:code&gt;</p>
<p>&lt;originalText&gt;A|D Vault Exchange Master Patient Identifier&lt;/originalText&gt;</p>
<p>&lt;/sdtc:code&gt;</p>
<p>&lt;/sdtc:alternateIdentification&gt;</p>
<p>&lt;/sdtc:identifiedBy&gt;</p>
<p>.</p>
<p>.</p>
<p>.</p>
<p>&lt;/patientRole&gt;</p>
<p>&lt;/recordTarget&gt;</p></td>
</tr>
</tbody>
</table>

**HL7 FHIR**

In FHIR you use the Patient Resource to represent patient information. Patient.identifier holds the patient ids.

[The Patient Example](https://build.fhir.org/ig/HL7/US-Core/Patient-example.json.html) in US Core FHIR IG includes this example of a patient identifier holding the patient’s medical record number at an organization which defines its MRNs in a naming system called “http://example.org/patient/identifiers”.

|  |
|----|
| 

![Example FHIR Patient.identifier entry representing a Medical Record Number (MRN) using the v2-0203 identifier type code system.](/images/patient-identifier-list/1.png)

*Example FHIR Patient.identifier entry representing a Medical Record Number (MRN) using the v2-0203 identifier type code system.*
 |
