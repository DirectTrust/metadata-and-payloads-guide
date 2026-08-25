---
title: Patient Preferred Language
---

# Patient Preferred Language

Language related demographic information is complex and its representation varies across HL7 standards. For simplicity, this IG includes information about the most accepted set of language codes for practical use across standards.

This value set defines a set of codes for the representation of the names of languages. It uses the list of ISO 639-2 concepts using the ISO 639-1 2-digit code for a concept where possible and the 3-digit terminological code where there is no 2-digit code.

[https://terminology.hl7.org/6.4.0/ValueSet-Languages.html](https://terminology.hl7.org/6.4.0/ValueSet-Languages.html)

In the United States, language codes for HL7 FHIR are drawn from the IETF BCP 47 standard (used in HL7 v3 and FHIR) and represented using [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646) tags like "en-US". In HL7 CDA and FHIR, the language code is typically used in languageCommunication or communication.language elements.

The most common languages spoken in the U.S., and their corresponding BCP 47 language codes, include:

|  |  |  |
|----|----|----|
| **Language** | **RFC 5646 Tag** | **Description** |
| English (United States) | en-US | Default/most common |
| Spanish (United States) | es-US | Common for Hispanic Populations |
| Chinese (Simplified) | zh-Hans | Includes Mandarin |
| Chinese (Traditional) | zh-Hant | Includes Cantonese |
| Vietnamese | vi | Southeast Asian communities |
| Tagalog (Filipino) | tl | Philippines communities |
| Korean | ko | Korean-American communities |
| Arabic | ar | Middle Eastern/North African communities |
| Russian | ru | Eastern European communities |
| French (U.S. speakers) | fr | Haitian Creole speakers often fall here |
| Haitian Creole | ht | Haitian communities |
| Portuguese | pt | Brazilian/Portuguese communities |
| German | de | Older immigrant communities |
| Hindi | hi | Indian-American communities |
| Urdu | ur | Pakistani communities |
| Japanese | ja | Japanese-American populations |
| Polish | pl | Polish-American populations |
