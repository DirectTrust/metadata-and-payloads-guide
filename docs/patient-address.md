---
title: Patient Address
---

# Patient Address

Patient address information is complex and includes many fields. The structures differ slightly between V2, CDA and FHIR.

**Sample HL7 V2**

The following table outlines HL7 V2 Patient address information. Additional details can be viewed [here](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.11).

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| **Field** | **Length** | **Data Type** | **Optionality** | **Repeatability (No (-) or Unlimited (∞))** | **Table (Additional Values)** |
| [PID.11.1 Street Address](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.11.1) | 184 | [SAD](https://hl7-definition.caristix.com/v2/HL7v2.5.1/DataTypes/SAD) | O | \- | [Street](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Tables/Street) |
| [PID.11.2 - Other Designation](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.11.2) | 120 | [ST](https://hl7-definition.caristix.com/v2/HL7v2.5.1/DataTypes/ST) | O | \- |  |
| [PID.11.3 - City](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.11.3) | 50 | [ST](https://hl7-definition.caristix.com/v2/HL7v2.5.1/DataTypes/ST) | O | \- | [City](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Tables/City) |
| [PID.11.4 - State or Province](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.11.4) | 50 | [ST](https://hl7-definition.caristix.com/v2/HL7v2.5.1/DataTypes/ST) | O | \- | [State](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Tables/State) |
| [PID.11.5 - Zip or Postal Code](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.11.5) | 12 | [ST](https://hl7-definition.caristix.com/v2/HL7v2.5.1/DataTypes/ST) | O | \- | [ZipCode](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Tables/ZipCode) |
| [PID.11.6 - Country](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.11.6) | 3 | [ID](https://hl7-definition.caristix.com/v2/HL7v2.5.1/DataTypes/ID) | O | \- | [0399](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Tables/0399) |
| [PID.11.7 - Address Type](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.11.7) | 3 | [ID](https://hl7-definition.caristix.com/v2/HL7v2.5.1/DataTypes/ID) | O | \- | [0190](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Tables/0190) |
| [PID.11.8 - Other Geographic Designation](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.11.8) | 50 | [ST](https://hl7-definition.caristix.com/v2/HL7v2.5.1/DataTypes/ST) | O | \- |  |
| [PID.11.9 - County/Parish Code](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.11.9) | 20 | [IS](https://hl7-definition.caristix.com/v2/HL7v2.5.1/DataTypes/IS) | O | \- | [0289](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Tables/0289) |
| [PID.11.10 - Census Tract](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.11.10) | 20 | [IS](https://hl7-definition.caristix.com/v2/HL7v2.5.1/DataTypes/IS) | O | \- | [0288](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Tables/0288) |
| [PID.11.11 - Address Representation Code](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.11.11) | 1 | [ID](https://hl7-definition.caristix.com/v2/HL7v2.5.1/DataTypes/ID) | O | \- | [0465](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Tables/0465) |
| [PID.11.12 - Address Validity Range](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.11.12) | 53 | [DR](https://hl7-definition.caristix.com/v2/HL7v2.5.1/DataTypes/DR) | B | \- |  |
| [PID.11.13 - Effective Date](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.11.13) | 26 | [TS](https://hl7-definition.caristix.com/v2/HL7v2.5.1/DataTypes/TS) | O | \- |  |
| [PID.11.14 - Expiration Date](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.11.14) | 26 | [TS](https://hl7-definition.caristix.com/v2/HL7v2.5.1/DataTypes/TS) | O | \- |  |

## Handling Multiple Addresses

The key for including multiple addresses is to distinguish them correctly. Each address should have an address type ([PID-11.7](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.11.7)) and a prior address would include an expiration date: [PID-11.14](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.11.14).

The below table describes [HL7 V2 Values for Address type](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Tables/0190).

|  |  |
|----|----|
| **Value** | **Description** |
| B | Firm/Business |
| BA | Bad address |
| BDL | Birth delivery location (address where birth occurred) |
| BR | Residence at birth (home address at time of birth) |
| C | Current or Temporary |
| F | Country of Origin |
| H | Home |
| L | Legal Address |
| M | Mailing |
| N | Birth (nee) (birth address, not otherwise specified) |
| O | Office |
| P | Permanent |
| RH | Registry home. Refers to the information system, typically managed by a public health agency, that stores patient information such as immunization histories or cancer data, regardless of where the patient obtains services. |
