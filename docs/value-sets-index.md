---
title: Value Sets Index
---

# Value Sets Index

|  |  |  |
|----|----|----|
| **Value Set Name** | **Metadata and Payload Framework - Metadata Element** | **Source** |
| [Purpose of Use Value Set by NHIN](http://healthit.gov/nhin/purposeofuse) | x-direct-purpose | NHIN |
| [RCE Purpose of Use Value Set](https://sequoiaproject.org/SequoiaProjectHealthcareDirectoryImplementationGuide/output/ValueSet-RCEPurposeVS.html) | x-direct-purpose | RCE\* |
| [Purpose of Use HL7 V3](http://terminology.hl7.org/ValueSet/v3-PurposeOfUse) | x-direct-purpose | THO |
| [Serv_DescVS](https://objects.directtrust.org/standards/terminology/valueSet/ServDescVS.json) | x-direct-useCase | DirectTrust |
| [MetadataTypeCodeVS](https://objects.directtrust.org/standards/terminology/valueSet/MetadataTypeCodeVS.json) | x-direct-metadataTypeCode | DirectTrust |
| [DTFormatCodeVS](https://objects.directtrust.org/standards/terminology/valueSet/DTFormatCodeVS.json) | x-direct-formatCode | DirectTrust |
| [HL7 FormatCode ValueSet](https://hl7.org/fhir/R4/valueset-formatcodes.html) | x-direct-formatCode | HL7 |
| [Any applicable IANA Media Type](http://hl7.org/fhir/us/ndh/ValueSet/EndpointFhirMimeTypeVS) | x-direct-payloadMimeType | National Directory (NHD) |
| [LOINC Document Ontology Code](http://hl7.org/fhir/us/core/ValueSet/us-core-documentreference-type), | submissionSet.contentTypeCode | US Core |
| [Serv_DescVS](https://objects.directtrust.org/standards/terminology/valueSet/ServDescVS.json) | submissionSet.contentTypeCode |  |
| [C80 Practice Setting Codes](http://hl7.org/fhir/ValueSet/c80-practice-codes) | submissionSet.author.specialty | THO |
| NUCC codes from [Individual and Group Specialties](https://build.fhir.org/ig/HL7/fhir-us-ndh/ValueSet-IndividualAndGroupSpecialtiesVS.html) | submissionSet.author.specialty | NHD |
| [PractitionerRole Code](https://build.fhir.org/ig/HL7/fhir-us-ndh/ValueSet-PractitionerRoleVS.html) | submissionSet.author.role | NHD |
| [CareTeamMemberFunction](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1099.30/expansion) | submissionSet.author.role | US Core |
| [Personal and Legal Relationship Role Type](http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.11.20.12.1) | submissionSet.author.role | VSAC |
| An IHE value set | submissionSet.referenceList.contextInstanceType | IHE |
| A DirectTrust value set | submissionSet.referenceList.contextInstanceType | DirectTrust |
| [C80 Practice Setting Codes](http://hl7.org/fhir/ValueSet/c80-practice-codes) | documentEntry.author.specialty | THO |
| NUCC codes from [Individual and Group Specialties](https://build.fhir.org/ig/HL7/fhir-us-ndh/ValueSet-IndividualAndGroupSpecialtiesVS.html) | documentEntry.author.specialty | NHD |
| [PractitionerRole Code](https://build.fhir.org/ig/HL7/fhir-us-ndh/ValueSet-PractitionerRoleVS.html) | document.Entry.author.role | NHD |
| [CareTeamMemberFunction](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1099.30/expansion) | document.Entry.author.role | US Core |
| [Personal and Legal Relationship Role Type](http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.11.20.12.1) | documentEntry..author.role | VSAC |
| [LOINC Document Ontology Code](http://hl7.org/fhir/us/core/ValueSet/us-core-documentreference-type), | documentEntry.classCode | MAP derivative IG further constrains |
| [ConfidentialityCode](https://hl7.org/fhir/R4/v3/ConfidentialityClassification/vs.html) | documentEntry.confidentialityCode | FHIR |
| [HL7 Format Codes](http://terminology.hl7.org/ValueSet/v3-HL7FormatCodes) | documentEntry.formatCode | THO |
| [DirectTrust Format Codes](https://objects.directtrust.org/standards/terminology/valueSet/DTFormatCodeVS.json) | documentEntry.formatCode | DirectTrust |
| [ServiceDeliveryLocationRoleType](http://terminology.hl7.org/5.5.0/ValueSet-v3-ServiceDeliveryLocationRoleType.html) | documentEntry.healthcareFacilityTypeCode | US Core |
| [Healthcare Service Location Type Combined](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1267.31/expansion) | documentEntry.healthcareFacilityTypeCode | US Core |
| [NUBC Place of Service (POS) codes](http://terminology.hl7.org/ValueSet/CMSPlaceOfServiceCodes) | documentEntry.healthcareFacilityTypeCode | US Core |
| [https://hl7.org/fhir/R4/valueset-languages.html](https://hl7.org/fhir/R4/valueset-languages.html) | documentEntry.languageCode | FHIR |
| [http://hl7.org/fhir/ValueSet/mimetypes](http://hl7.org/fhir/ValueSet/mimetypes) | documentEntry.mimeType | FHIR |
| [Any applicable IANA Media Type](http://hl7.org/fhir/us/ndh/ValueSet/EndpointFhirMimeTypeVS) | documentEntry.mimeType | NHD |
| See Appendix 7.5. | documentEntry.objectType | XD |
| [FHIR Practice Setting Code Value Set](http://hl7.org/fhir/ValueSet/c80-practice-codes) | documentEntry.practiceSettingCode | FHIR |
| Context Instance ID | documentEntry.referenceIdList | XD |
| [Name Use](https://hl7.org/fhir/R4/valueset-name-use.html) | Patient Name Use | FHIR |
| [Name Use](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.1.11.15913/expansion/Latest) | Patient Name Use | CDA |
| [Administrative Gender](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.1.11.1/expansion) | Patient Administrative Gender | US Core, C-CDA |
| [Telecom Use](https://build.fhir.org/ig/HL7/v2-to-fhir/ConceptMap-datatype-xtn-to-contactpoint.html) | Patient Telecom Use | V2 and FHIR |
| [Telecom Use](https://build.fhir.org/ig/HL7/ccda-on-fhir/ConceptMap-CF-TelecomUse.html) | Patient Telecom Use | CDA and FHIR |
| [Race ValueSet](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.4.642.2.575/expansion) | Patient Race | US Core, C-CDA |
| [Ethnicity ValueSet](https://hl7.org/fhir/us/core/STU8/StructureDefinition-us-core-ethnicity.html) | Patient Ethnicity | US Core, C-CDA |
| [Language](https://terminology.hl7.org/6.4.0/ValueSet-Languages.html) | Patient Preferred Language |  |

RCE Purpose ValueSet code definitions can be viewed [here](https://rce.sequoiaproject.org/wp-content/uploads/2024/07/SOP-Exchange-Purposes_CA-v2_508.pdf).

------------------------------------------------------------------------
