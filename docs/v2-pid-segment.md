---
title: V2 PID Segment
---

# V2 PID Segment

Here's a well-populated example of an HL7 v2.x PID (Patient Identification) segment, using fields commonly present in production systems. This example follows HL7 v2.5.1 format but remains broadly compatible with most v2.x versions.

**Example:** PID\|1\|\|123456^^^HOSPITAL^MR\|\|Doe^John^A^III^Mr.^L\|\|19800101\|M\|\|2106-3^White^CDCREC\|123 Main St^^Metropolis^NY^10001^USA^H\|\|555-123-4567^PRN^PH^^^555^1234567\|555-765-4321^WPN^PH^^^555^7654321\|[johndoe@example.com](mailto:johndoe@example.com)^NET^Internet\|S\|ENG\|111223333\|\|\|M\|\|123456789\|987-65-4321\|\|\|N

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 26%" />
<col style="width: 46%" />
</colgroup>
<tbody>
<tr>
<td><strong>Field</strong></td>
<td><strong>Description</strong></td>
<td><strong>Example Value</strong></td>
</tr>
<tr>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.1">PID-1</a></td>
<td>Set ID</td>
<td>1</td>
</tr>
<tr>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.2">PID-2</a></td>
<td>Patient ID (Deprecated in later versions)</td>
<td></td>
</tr>
<tr>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.3">PID-3</a></td>
<td>Patient Identifier List</td>
<td><p>123456^^^HOSPITAL^MR</p>
<p>(MR = Medical Record Number)</p>
<p><em>Note: Repeating identifiers (like MRN, SSN, national ID) go in PID-3, separated by ~.</em></p>
<p><em>Note: The assigning authority for identifiers can be shown using subcomponents in PID-3: ID^^^AssigningAuthority^IdentifierTypeCode.</em></p></td>
</tr>
<tr>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.4">PID-4</a></td>
<td>Alternate Patient ID</td>
<td></td>
</tr>
<tr>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.5">PID-5</a></td>
<td>Patient Name</td>
<td>Doe^John^A^III^Mr.^L</td>
</tr>
<tr>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.6">PID-6</a></td>
<td>Mothers Maiden Name</td>
<td></td>
</tr>
<tr>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.7">PID-7</a></td>
<td>Date of Birth</td>
<td>19800101 (YYYYMMDD)</td>
</tr>
<tr>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.8">PID-8</a></td>
<td>Administrative Sex</td>
<td>M (Male)</td>
</tr>
<tr>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.9">PID-9</a></td>
<td>Patient Alias</td>
<td></td>
</tr>
<tr>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.10">PID-10</a></td>
<td>Race</td>
<td>2106-3^White^CDCREC (CDC code for White)</td>
</tr>
<tr>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.11">PID-11</a></td>
<td>Patient Address</td>
<td><p>123 Main St^^Metropolis^NY^10001^USA^H</p>
<p><em>Note: PID-11 supports structured address components; multiple addresses can be separated by ~.</em></p></td>
</tr>
<tr>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.12">PID-12</a></td>
<td>County Code</td>
<td></td>
</tr>
<tr>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.13">PID-13</a></td>
<td>Phone Number - Home</td>
<td>555-123-4567^PRN^PH^^^555^1234567</td>
</tr>
<tr>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.14">PID-14</a></td>
<td>Phone Number - Business</td>
<td>555-765-4321^WPN^PH^^^555^7654321</td>
</tr>
<tr>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.15">PID-15</a></td>
<td>Primary Language</td>
<td>ENG</td>
</tr>
<tr>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.16">PID-16</a></td>
<td>Marital Status</td>
<td>S (Single)</td>
</tr>
<tr>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.17">PID-17</a></td>
<td>Religion</td>
<td></td>
</tr>
<tr>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.18">PID-18</a></td>
<td>Patient Account Number</td>
<td>111223333</td>
</tr>
<tr>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.19">PID-19</a></td>
<td>SSN Number - Patient</td>
<td>987-65-4321</td>
</tr>
<tr>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.20">PID-20</a></td>
<td>Drivers License Number</td>
<td></td>
</tr>
<tr>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.21">PID-21</a></td>
<td>Mother’s Identifier</td>
<td></td>
</tr>
<tr>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.22">PID-22</a></td>
<td>Ethnic Group</td>
<td></td>
</tr>
<tr>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.23">PID-23</a></td>
<td>Birth Place</td>
<td></td>
</tr>
<tr>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.24">PID-24</a></td>
<td>Multiple Birth Indicator</td>
<td></td>
</tr>
<tr>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.25">PID-25</a></td>
<td>Birth Order</td>
<td></td>
</tr>
<tr>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.26">PID-26</a></td>
<td>Citizenship</td>
<td></td>
</tr>
<tr>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.27">PID-27</a></td>
<td>Veterans Military Status</td>
<td></td>
</tr>
<tr>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.28">PID-28</a></td>
<td>Nationality</td>
<td></td>
</tr>
<tr>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.29">PID-29</a></td>
<td>Patient Death Date and Time</td>
<td></td>
</tr>
<tr>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.30">PID-30</a></td>
<td>Patient Death Indicator</td>
<td>N (Not deceased)</td>
</tr>
</tbody>
</table>

*Note: All values should align with HL7 data types: XPN (names), XAD (addresses), XTN (telecom), CX (identifiers), etc.*
