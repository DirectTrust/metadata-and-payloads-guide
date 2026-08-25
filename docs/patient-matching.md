---
title: "Patient Demographics: Foundations for Patient Matching"
---

# Patient Demographics: Foundations for Patient Matching

## Common Patient Demographic Data Elements Used in Patient Matching

For the purpose of patient matching, a smaller set of patient demographic data elements form the basis for identifying a patient since a single universal identifier is not supported in the United States. Four key fields are considered the minimum required for patient matching: last name, first name, date of birth, and administrative gender. However, additional data elements and identifiers are often provided to increase the confidence of the matching algorithms to find an associated patient.

<table style="width:98%;">
<colgroup>
<col style="width: 42%" />
<col style="width: 15%" />
<col style="width: 39%" />
</colgroup>
<tbody>
<tr>
<td><strong>Patient Demographic Data Element</strong></td>
<td><strong>Cardinality</strong></td>
<td><strong>ValueSet (or Fixed Value)</strong></td>
</tr>
<tr>
<td><p>Patient Identifiers</p>
<p>such as:</p>
<p>Medical Record Number</p>
<p>Account Number</p>
<p>State Driver’s License Number</p></td>
<td>1..*</td>
<td>See Appendix “Patient Identifiers” for additional guidance</td>
</tr>
<tr>
<td>Patient Name</td>
<td>1..*</td>
<td>See Appendix “Patient Name” for additional guidance. The name SHALL include a Last Name and a First Name at a minimum.</td>
</tr>
<tr>
<td>Patient Date of Birth</td>
<td>1..1</td>
<td>See Appendix “Patient Date of Birth" for additional guidance</td>
</tr>
<tr>
<td>Patient Administrative Gender (Sex)</td>
<td>1..1</td>
<td><p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.1.11.1/expansion">https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.1.11.1/expansion</a></p>
<p>See Appendix “Patient Administrative Gender (Sex)" for additional guidance</p></td>
</tr>
<tr>
<td>Patient Address</td>
<td>0..*</td>
<td>See Appendix “Patient Address" for additional guidance</td>
</tr>
<tr>
<td><p>Patient Telecom</p>
<p>Such as:</p>
<p>Mobile Number</p>
<p>Home Number</p>
<p>E-mail address</p>
<p>Direct address</p></td>
<td>0..*</td>
<td>See Appendix “Patient Telecom" for additional guidance</td>
</tr>
</tbody>
</table>
