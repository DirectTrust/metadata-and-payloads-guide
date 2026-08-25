---
title: CDA RecordTarget Structure
---

# CDA RecordTarget Structure

This example includes identifiers, demographics, address, and telecom information, conforming to CDA Release 2 and aligned with US Realm header constraints (like those in C-CDA).

<table style="width:100%;">
<colgroup>
<col style="width: 99%" />
</colgroup>
<tbody>
<tr>
<td><p>&lt;recordTarget&gt;</p>
<p>&lt;patientRole&gt;</p>
<p>&lt;!-- Patient Identifier (e.g., MRN issued by the hospital) --&gt;</p>
<p>&lt;id root="2.16.840.1.113883.19.5" extension="123456"/&gt;</p>
<p>&lt;!-- Address --&gt;</p>
<p>&lt;addr use="HP"&gt;</p>
<p>&lt;streetAddressLine&gt;123 Main Street&lt;/streetAddressLine&gt;</p>
<p>&lt;city&gt;Metropolis&lt;/city&gt;</p>
<p>&lt;state&gt;NY&lt;/state&gt;</p>
<p>&lt;postalCode&gt;10001&lt;/postalCode&gt;</p>
<p>&lt;country&gt;US&lt;/country&gt;</p>
<p>&lt;/addr&gt;</p>
<p>&lt;!-- Telecom (Home and Mobile) --&gt;</p>
<p>&lt;telecom use="HP" value="tel:+1-555-123-4567"/&gt;</p>
<p>&lt;telecom use="MC" value="tel:+1-555-987-6543"/&gt;</p>
<p>&lt;!-- Patient Element --&gt;</p>
<p>&lt;patient&gt;</p>
<p>&lt;!-- Name --&gt;</p>
<p>&lt;name use="L"&gt;</p>
<p>&lt;given&gt;John&lt;/given&gt;</p>
<p>&lt;given qualifier="CL"&gt;Alexander&lt;/given&gt;</p>
<p>&lt;family&gt;Doe&lt;/family&gt;</p>
<p>&lt;suffix&gt;III&lt;/suffix&gt;</p>
<p>&lt;prefix&gt;Mr.&lt;/prefix&gt;</p>
<p>&lt;/name&gt;</p>
<p>&lt;!-- Administrative Gender Code --&gt;</p>
<p>&lt;administrativeGenderCode code="M" codeSystem="2.16.840.1.113883.5.1" displayName="Male"/&gt;</p>
<p>&lt;!-- Birth Time --&gt;</p>
<p>&lt;birthTime value="19800101"/&gt;</p>
<p>&lt;!-- Marital Status --&gt;</p>
<p>&lt;maritalStatusCode code="M" codeSystem="2.16.840.1.113883.5.2" displayName="Married"/&gt;</p>
<p>&lt;!-- Religious Affiliation (optional) --&gt;</p>
<p>&lt;religiousAffiliationCode code="1013" codeSystem="2.16.840.1.113883.5.1076" displayName="Christianity"/&gt;</p>
<p>&lt;!-- Race Code --&gt;</p>
<p>&lt;raceCode code="2106-3" codeSystem="2.16.840.1.113883.6.238" displayName="White"/&gt;</p>
<p>&lt;!-- Ethnic Group Code --&gt;</p>
<p>&lt;ethnicGroupCode code="2186-5" codeSystem="2.16.840.1.113883.6.238" displayName="Not Hispanic or Latino"/&gt;</p>
<p>&lt;!-- Language Communication --&gt;</p>
<p>&lt;languageCommunication&gt;</p>
<p>&lt;languageCode code="en-US"/&gt;</p>
<p>&lt;modeCode code="ESP" codeSystem="2.16.840.1.113883.5.60" displayName="Expressed spoken"/&gt;</p>
<p>&lt;proficiencyLevelCode code="G" codeSystem="2.16.840.1.113883.5.61" displayName="Good"/&gt;</p>
<p>&lt;preferenceInd value="true"/&gt;</p>
<p>&lt;/languageCommunication&gt;</p>
<p>&lt;/patient&gt;</p>
<p>&lt;!-- Optional: Provider Organization (e.g., primary care clinic) --&gt;</p>
<p>&lt;providerOrganization&gt;</p>
<p>&lt;id root="2.16.840.1.113883.19.5.99999999"/&gt;</p>
<p>&lt;name&gt;Metropolis Health Center&lt;/name&gt;</p>
<p>&lt;telecom value="tel:+1-555-321-7654"/&gt;</p>
<p>&lt;addr&gt;</p>
<p>&lt;streetAddressLine&gt;456 Health Way&lt;/streetAddressLine&gt;</p>
<p>&lt;city&gt;Metropolis&lt;/city&gt;</p>
<p>&lt;state&gt;NY&lt;/state&gt;</p>
<p>&lt;postalCode&gt;10002&lt;/postalCode&gt;</p>
<p>&lt;country&gt;US&lt;/country&gt;</p>
<p>&lt;/addr&gt;</p>
<p>&lt;/providerOrganization&gt;</p>
<p>&lt;/patientRole&gt;</p>
<p>&lt;/recordTarget&gt;</p></td>
</tr>
</tbody>
</table>

Key Notes:

- recordTarget/patientRole/id: The patient identifier (root = OID of assigning authority; extension = patient ID).

- administrativeGenderCode uses values from HL7 v3 code system (2.16.840.1.113883.5.1).

- raceCode and ethnicGroupCode use CDCREC codes (2.16.840.1.113883.6.238).

- languageCommunication indicates the patient’s preferred language and communication proficiency.

- The providerOrganization is optional but often included when the document comes from a specific care delivery organization.
