---
title: Patient Administrative Gender (Sex)
---

# Patient Administrative Gender (Sex)

The administrative gender field is used by many master patient index and record locator types of systems in conjunction with last name, first name, and date birth. It is important to note that matching on administrative gender implies several complexities because this cannot be handled as an “exact match” type of comparison.

A patient query is not required to include an administrative gender code. In fact, other search parameters such as cell phone number and email address may provide a higher confidence match than inclusion of administrative gender.

If the master patient record includes a value of UN, any administrative gender value should match.

If the patient query includes a value of UN, any administrative gender value in the master patient record should match.

## Administrative Gender Mapping

|  |  |  |
|----|----|----|
| **[HL7 FHIR](https://hl7.org/fhir/R4/valueset-administrative-gender.html) (US Core-USCDI V3))** | **[HL7 CDA (C-CDA)](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.1.11.1/expansion/Latest) - ValueSet Administrative Gender (HL7 V3)** | [**HL7 V2**](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Tables/0001) |
| male | Male | Male (M) |
| female | Female | Female (F) |
| unknown | Not Given | Unknown (U) |
| other | Other | Other (O) |
| other | Transgender | Other (O) |
