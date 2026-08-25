---
title: Patient Demographics Coding and Representation
---

# Patient Demographics Coding and Representation

## Patient Demographics/Information

In USCDI, the [Patient Demographic Data Class](https://www.healthit.gov/isp/uscdi-data-class/patient-demographicsinformation#uscdi-v3-1) is very broad. It includes many data elements that are not treated as patient demographic data in HL7 Standards.

The below Data Elements are used to categorize individuals for identification, records matching, and other purposes.

|  |  |
|----|----|
| **Data Element** | **Description** |
| [First Name](https://www.healthit.gov/isp/taxonomy/term/706/uscdi-v3-1) |  |
| [Last Name](https://www.healthit.gov/isp/taxonomy/term/711/uscdi-v3-1) |  |
| [Middle Name](https://www.healthit.gov/isp/taxonomy/term/721/uscdi-v3-1) |  |
| [Name Suffix](https://www.healthit.gov/isp/taxonomy/term/726/uscdi-v3-1) | Name component following family name that may be used to describe a person's position in a family. |
| [Previous Name](https://www.healthit.gov/isp/taxonomy/term/716/uscdi-v3-1) |  |
| [Date of Birth](https://www.healthit.gov/isp/taxonomy/term/736/uscdi-v3-1) | Known or estimated year, month, and day of the patient's birth. |
| [Date of Death](https://www.healthit.gov/isp/taxonomy/term/2726/uscdi-v3-1) | Known or estimated year, month, and day of the patient's death. |
| [Race](https://www.healthit.gov/isp/taxonomy/term/741/uscdi-v3-1) |  |
| [Ethnicity](https://www.healthit.gov/isp/taxonomy/term/746/uscdi-v3-1) |  |
| [Tribal Affiliation](https://www.healthit.gov/isp/taxonomy/term/3691/uscdi-v3-1) | Tribe or band with which an individual associates. |
| [Sex](https://www.healthit.gov/isp/taxonomy/term/731/uscdi-v3-1) | Documentation of a specific instance of sex. |
| [Preferred Language](https://www.healthit.gov/isp/taxonomy/term/751/uscdi-v3-1) |  |
| [Current Address](https://www.healthit.gov/isp/taxonomy/term/756/uscdi-v3-1) | Place where a person is located or may be contacted |
| [Previous Address](https://www.healthit.gov/isp/taxonomy/term/911/uscdi-v3-1) | Prior place where a person may have been located or could have been contacted. |
| [Phone Number](https://www.healthit.gov/isp/taxonomy/term/761/uscdi-v3-1) | Numbers and symbols to contact an individual when using a phone. |
| [Phone Number Type](https://www.healthit.gov/isp/taxonomy/term/916/uscdi-v3-1) | Contact point when using a phone (e.g., home, work, mobile). |
| [Email Address](https://www.healthit.gov/isp/taxonomy/term/921/uscdi-v3-1) | Unique identifier of an individual's email account that is used to send and receive email messages. |
| [Related Person’s Name](https://www.healthit.gov/isp/taxonomy/term/2696/uscdi-v3-1) | Name of a person with a legal or familial relationship to a patient. |
| [Related Person’s Relationship](https://www.healthit.gov/isp/taxonomy/term/2671/uscdi-v3-1) | Relationship of a person to a patient. (e.g., parent, next-of-kin, guardian, custodian) |
| [Occupation](https://www.healthit.gov/isp/taxonomy/term/3381/uscdi-v3-1) | Type of work of a person. (e.g., infantry, business analyst, social worker) |
| [Occupation Industry](https://www.healthit.gov/isp/taxonomy/term/3376/uscdi-v3-1) | Type of business that compensates for work or assigns work to an unpaid worker or volunteer. (e.g., U.S. Army, cement manufacturing, children and youth services) |

## Patient Demographic Representation Variation Across Standards

Due to differences in guidance provided in various standards, some coded patient demographic data may require mapping logic to be applied for proper comparison. If mapping information is needed, the consensus guidance developed by HL7 should be consulted directly. A large body of work is emerging in this area and continues to evolve and improve at this time.

|  |  |  |
|----|----|----|
| **Mapping Document** | **Current Version** | **Evolving Version** |
| V2 and FHIR | [https://hl7.org/fhir/us/ccda/](https://hl7.org/fhir/us/ccda/) | [https://build.fhir.org/ig/HL7/ccda-on-fhir/](https://build.fhir.org/ig/HL7/ccda-on-fhir/) |
| CDA and FHIR | [https://hl7.org/fhir/uv/v2mappings/2024Jan/](https://hl7.org/fhir/uv/v2mappings/2024Jan/) | [https://build.fhir.org/ig/HL7/v2-to-fhir/](https://build.fhir.org/ig/HL7/v2-to-fhir/) |
