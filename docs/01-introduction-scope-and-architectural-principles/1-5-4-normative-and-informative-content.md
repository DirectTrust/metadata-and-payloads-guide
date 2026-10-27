# 1.5.4 Normative and Informative Content

MAP specifications use several complementary expressions of conformance. They should be interpreted in context rather than treated as interchangeable notations. A behavioral requirement, a field-population expectation, a multiplicity constraint, and a vocabulary binding each express a different dimension of implementation.

| Expression | Primary purpose | Interpretation |
| --- | --- | --- |
| SHALL / SHOULD / MAY | Normative requirement strength | Mandatory, recommended, or permitted behavior under stated conditions |
| R | Required field | Populate when the containing structure applies, subject to stated conditions and cardinality |
| RE | Required if Existent | Populate when relevant information exists and is available to the responsible actor; absence requires the stated condition for omission |
| O | Optional field | May populate when permitted by the applicable specification |
| `0..1`, `1..1`, `0..*`, `1..*` | Cardinality | Permitted number of occurrences; not a substitute for population or processing obligations |
| Terminology binding strength | Coded-value constraint | Identifies how a specified value set or code system constrains permissible values |

R/RE/O meanings may differ across referenced standards families. The applicable structural model SHALL identify or reference its controlling semantics. In particular, **RE does not authorize omission merely because a sender elects not to obtain information it is obligated to make available**. Structural conformance may also impose distinct sender and receiver processing expectations, which must be stated rather than inferred.

Examples, diagrams, background explanations, and Author Kit or RTC formatting rules remain informative or governance-oriented unless expressly incorporated into applicable normative requirements. This boundary prevents an authoring-template convention from being mistaken for an exchange obligation.
