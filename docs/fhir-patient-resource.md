---
title: FHIR Patient Resource
---

# FHIR Patient Resource

Below is a HL7 FHIR R4 Patient resource in JSON format, suitable for use in real-world interoperability scenarios (e.g., aligned with US Core profiles). It includes identifiers, names, contact info, demographics, language, and managing organization.

<table style="width:100%;">
<colgroup>
<col style="width: 99%" />
</colgroup>
<tbody>
<tr>
<td><p>{</p>
<p>"resourceType": "Patient",</p>
<p>"id": "example-patient-001",</p>
<p>"meta": {</p>
<p>"profile": [</p>
<p>"http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient"</p>
<p>]</p>
<p>},</p>
<p>"identifier": [</p>
<p>{</p>
<p>"use": "usual",</p>
<p>"type": {</p>
<p>"coding": [</p>
<p>{</p>
<p>"system": "http://terminology.hl7.org/CodeSystem/v2-0203",</p>
<p>"code": "MR",</p>
<p>"display": "Medical Record Number"</p>
<p>}</p>
<p>]</p>
<p>},</p>
<p>"system": "http://hospital.smarthealth.org/mrn",</p>
<p>"value": "123456"</p>
<p>},</p>
<p>{</p>
<p>"use": "official",</p>
<p>"type": {</p>
<p>"coding": [</p>
<p>{</p>
<p>"system": "http://terminology.hl7.org/CodeSystem/v2-0203",</p>
<p>"code": "SS",</p>
<p>"display": "Social Security Number"</p>
<p>}</p>
<p>]</p>
<p>},</p>
<p>"system": "http://hl7.org/fhir/sid/us-ssn",</p>
<p>"value": "987-65-4321"</p>
<p>}</p>
<p>],</p>
<p>"name": [</p>
<p>{</p>
<p>"use": "official",</p>
<p>"family": "Doe",</p>
<p>"given": ["John", "Alexander"],</p>
<p>"prefix": ["Mr."],</p>
<p>"suffix": ["III"]</p>
<p>}</p>
<p>],</p>
<p>"telecom": [</p>
<p>{</p>
<p>"system": "phone",</p>
<p>"value": "+1-555-123-4567",</p>
<p>"use": "home"</p>
<p>},</p>
<p>{</p>
<p>"system": "phone",</p>
<p>"value": "+1-555-987-6543",</p>
<p>"use": "mobile"</p>
<p>},</p>
<p>{</p>
<p>"system": "email",</p>
<p>"value": "john.doe@example.com",</p>
<p>"use": "home"</p>
<p>}</p>
<p>],</p>
<p>"gender": "male",</p>
<p>"birthDate": "1980-01-01",</p>
<p>"address": [</p>
<p>{</p>
<p>"use": "home",</p>
<p>"line": ["123 Main Street"],</p>
<p>"city": "Metropolis",</p>
<p>"state": "NY",</p>
<p>"postalCode": "10001",</p>
<p>"country": "US"</p>
<p>}</p>
<p>],</p>
<p>"maritalStatus": {</p>
<p>"coding": [</p>
<p>{</p>
<p>"system": "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",</p>
<p>"code": "M",</p>
<p>"display": "Married"</p>
<p>}</p>
<p>]</p>
<p>},</p>
<p>"communication": [</p>
<p>{</p>
<p>"language": {</p>
<p>"coding": [</p>
<p>{</p>
<p>"system": "urn:ietf:bcp:47",</p>
<p>"code": "en-US",</p>
<p>"display": "English (United States)"</p>
<p>}</p>
<p>]</p>
<p>},</p>
<p>"preferred": true</p>
<p>}</p>
<p>],</p>
<p>"extension": [</p>
<p>{</p>
<p>"url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race",</p>
<p>"extension": [</p>
<p>{</p>
<p>"url": "ombCategory",</p>
<p>"valueCoding": {</p>
<p>"system": "urn:oid:2.16.840.1.113883.6.238",</p>
<p>"code": "2106-3",</p>
<p>"display": "White"</p>
<p>}</p>
<p>},</p>
<p>{</p>
<p>"url": "text",</p>
<p>"valueString": "White"</p>
<p>}</p>
<p>]</p>
<p>},</p>
<p>{</p>
<p>"url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity",</p>
<p>"extension": [</p>
<p>{</p>
<p>"url": "ombCategory",</p>
<p>"valueCoding": {</p>
<p>"system": "urn:oid:2.16.840.1.113883.6.238",</p>
<p>"code": "2186-5",</p>
<p>"display": "Not Hispanic or Latino"</p>
<p>}</p>
<p>},</p>
<p>{</p>
<p>"url": "text",</p>
<p>"valueString": "Not Hispanic or Latino"</p>
<p>}</p>
<p>]</p>
<p>}</p>
<p>],</p>
<p>"managingOrganization": {</p>
<p>"reference": "Organization/health-center-001",</p>
<p>"display": "Metropolis Health Center"</p>
<p>}</p>
<p>}</p></td>
</tr>
</tbody>
</table>
