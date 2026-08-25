---
title: Patient Identifiers
---

# Patient Identifiers

Patient identifiers improve patient matching and are required or recommended when known in the metadata fields that support document exchange. An identifier value alone is insufficient for determining what type of identifier it is and who assigned it.

Different base standards represent identifier data types differently.

**Each identifier should include the following elements:**

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 13%" />
<col style="width: 53%" />
</colgroup>
<tbody>
<tr>
<td><strong>Patient Identifier Element</strong></td>
<td><strong>Cardinality</strong></td>
<td><strong>Description</strong></td>
</tr>
<tr>
<td>identifier value</td>
<td>1..1</td>
<td>The identifier value itself.</td>
</tr>
<tr>
<td>Naming system</td>
<td>1..1</td>
<td><p>An identifier of the naming system for this identifier. This can be an OID or URN.</p>
<p>The OID or URN needs to be “associated” with the Assigning Authority by virtue of the Assigning Authority being the “attributed owner” of the NamingSystem.</p></td>
</tr>
<tr>
<td>Assigning Authority</td>
<td>1..1</td>
<td>A string holding the name of the Organization who assigned this identifier value to the patient in the context of this NamingSystem.</td>
</tr>
<tr>
<td>identifier type</td>
<td>0..1</td>
<td><p>HL7 standards such as V2, CDA, and FHIR enable an identifier type to be explicitly described so that its type (purpose) can be known</p>
<p>Identifier types recognize the following identifier types:</p>
<p><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Tables/0203">https://hl7-definition.caristix.com/v2/HL7v2.5.1/Tables/0203</a></p></td>
</tr>
</tbody>
</table>

**HL7 V2**

In a V2 PID Segment, there are a couple of places for a Patient Identifier. [PID-2](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.29) is a single Patient ID. This field has been retained for backward compatibility. It is data type CX-Extended Composite ID with Check Digit. [PID-3](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.30) is the Patient Identifier List which supports multiple patient identifiers to be included. [PID-4](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.4) supports a list of other Alternate Patient IDs.

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| **Field** | **Length** | **Data Type** | **Optionality** | **Repeatability (No (-) or Unlimited (∞))** | **Table (Additional Values)** |
| [PID.1 - Set ID - PID](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.1) | 4 | [SI](https://hl7-definition.caristix.com/v2/HL7v2.5.1/DataTypes/SI) | O | \- |  |
| [PID.2 - Patient ID](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.2) | 20 | [CX](https://hl7-definition.caristix.com/v2/HL7v2.5.1/DataTypes/CX) | B | \- |  |
| [PID.3 - Patient Identifier List](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.3) | 250 | [CX](https://hl7-definition.caristix.com/v2/HL7v2.5.1/DataTypes/CX) | R | ∞ |  |
| [PID.4 - Alternate Patient ID - PID](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.4) | 20 | [CX](https://hl7-definition.caristix.com/v2/HL7v2.5.1/DataTypes/CX) | B | ∞ |  |
| [PID.5 - Patient Name](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.5) | 250 | [XPN](https://hl7-definition.caristix.com/v2/HL7v2.5.1/DataTypes/XPN) | R | ∞ |  |
| [PID.6 - Mother’s Maiden Name](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.6) | 250 | [XPN](https://hl7-definition.caristix.com/v2/HL7v2.5.1/DataTypes/XPN) | O | ∞ |  |
| [PID.7 - Date/Time of Birth](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.7) | 26 | [TS](https://hl7-definition.caristix.com/v2/HL7v2.5.1/DataTypes/TS) | O | \- |  |
| [PID.8 - Administrative Sex](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.8) | 1 | [IS](https://hl7-definition.caristix.com/v2/HL7v2.5.1/DataTypes/IS) | O | \- | [0001](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Tables/0001) |
| [PID.9 - Patient Alias](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.9) | 250 | [XPN](https://hl7-definition.caristix.com/v2/HL7v2.5.1/DataTypes/XPN) | B | ∞ |  |
| [PID.10 - Race](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.10) | 250 | CE | O | ∞ | [0005](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Tables/0005) |
| [PID.11 - Patient Address](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.11) | 250 | [XAD](https://hl7-definition.caristix.com/v2/HL7v2.5.1/DataTypes/XAD) | O | ∞ |  |
