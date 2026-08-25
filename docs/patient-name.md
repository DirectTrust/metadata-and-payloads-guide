---
title: Patient Name
---

# Patient Name

Patient names are represented with slight differences across V2, CDA and FHIR.

Regardless of the standard used, a name has these parts:

- Family Name 1..1 (means “last name” in the USA)

- Given Name 1..\* (multiple given names enables a first name and a middle name to be represented.)

- Prefix 0..\*

- Suffix 0..1

The differences stem from the different metadata vocabularies available to describe the name components and the different metadata to classify the type of name itself.

CDA offers a set of qualifiers on each: [https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.11.20.9.26/expansion/Latest](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.11.20.9.26/expansion/Latest)

|              |              |
|--------------|--------------|
| **Valueset** | **Display**  |
| AC           | academic     |
| AD           | adopted      |
| BR           | birth        |
| CL           | callme       |
| IN           | initial      |
| NB           | nobility     |
| PR           | professional |
| SP           | spouse       |
| TITLE        | title        |
| VV           | voorvoegsel  |

And these values for the name use: [https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.1.11.15913/expansion/Latest](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.1.11.15913/expansion/Latest)

**Note:** Users who wish to view or utilize value sets maintained by the National Library of Medicine (NLM) must first obtain the appropriate license from NLM. Access to certain terminology resources, including value set content, may require agreement to NLM’s licensing terms prior to use.

|              |                   |
|--------------|-------------------|
| **Valueset** | **Display**       |
| A            | Artist/Stage      |
| ABC          | Alphabetic        |
| ASGN         | assigned          |
| C            | License           |
| I            | Indigenous/Tribal |
| IDE          | Ideographic       |
| L            | Legal             |
| OR           | Official registry |
| P            | pesudonym         |
| PHON         | phonetic          |
| SNDX         | Soundex           |
| SRCH         | search            |
| SYL          | Syllabic          |

**HL7 FHIR**

The following NameUse ValueSet are outlined below and additional details can be viewed [here](https://hl7.org/fhir/R4/valueset-name-use.html).

|  |  |  |  |
|----|----|----|----|
| **Lvl** | **Code** | **Display** | **Definition** |
| 0 | [usual](https://hl7.org/fhir/R4/codesystem-name-use.html#name-use-usual) | Usual | Known as/conventional/the one you normally use. |
| 0 | [official](https://hl7.org/fhir/R4/codesystem-name-use.html#name-use-official) | Official | The formal name as registered in an official (government) registry, but which name might not be commonly used. May be called "legal name". |
| 0 | [temp](https://hl7.org/fhir/R4/codesystem-name-use.html#name-use-temp) | Temp | A temporary name. Name.period can provide more detailed information. This may also be used for temporary names assigned at birth or in emergency situations. |
| 0 | [nickname](https://hl7.org/fhir/R4/codesystem-name-use.html#name-use-nickname) | Nickname | A name that is used to address the person in an informal manner, but is not part of their formal or usual name. |
| 0 | [anonymous](https://hl7.org/fhir/R4/codesystem-name-use.html#name-use-anonymous) | Anonymous | Anonymous assigned name, alias, or pseudonym (used to protect a person's identity for privacy reasons). |
| 0 | [old](https://hl7.org/fhir/R4/codesystem-name-use.html#name-use-old) | Old | This name is no longer in use (or was never correct, but retained for records). |
| 1 | [maiden](https://hl7.org/fhir/R4/codesystem-name-use.html#name-use-maiden) | Name changed for Marriage | A name used prior to changing name because of marriage. This name use is for use by applications that collect and store names that were used prior to a marriage. Marriage naming customs vary greatly around the world, and are constantly changing. This term is not gender specific. The use of this term does not imply any particular history for a person's name. |

## Handling Multiple Names

Common scenarios include using a previous name, a preferred name that differs from the legal name, or a nickname—for example, someone named Elizabeth who prefers to go by “Betsy.”

Concept mapping can be found [here](https://build.fhir.org/ig/HL7/ccda-on-fhir/ConceptMap-CF-NameUse.html).

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<tbody>
<tr>
<td><strong>Name Use Notion</strong></td>
<td><strong>FHIR</strong></td>
<td><strong>CDA</strong></td>
</tr>
<tr>
<td>Legal</td>
<td>Official</td>
<td><p>L Legal</p>
<p>C License</p></td>
</tr>
<tr>
<td>preferred</td>
<td>Usual</td>
<td>L Legal</td>
</tr>
<tr>
<td>nickname</td>
<td>Nickname</td>
<td>P Pseudonym</td>
</tr>
<tr>
<td>Previous Name</td>
<td><p>Use Official or Usual with</p>
<p>period.start and period.end</p></td>
<td><p>Use License or Legal with</p>
<p>validTime/low@value and validTime/high@value</p></td>
</tr>
</tbody>
</table>
