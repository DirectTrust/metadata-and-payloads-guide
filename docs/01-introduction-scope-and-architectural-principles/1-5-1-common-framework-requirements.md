# 1.5 Conformance and Requirements Organization

MAP conformance is established by requirements applicable to a particular actor, transaction, and use case. The common Framework supplies cross-cutting requirements; an RTC **GenTXDef** supplies reusable transaction requirements; and a **UCTXDef** applies and specializes those requirements for a particular UC IG. A UCTXDef with no catalog source remains subject to applicable Framework requirements and its own stated obligations.

Readers should identify the responsible actor, triggering condition, required behavior, and specification layer establishing each obligation. A requirement appearing in one MAP artifact is not necessarily applicable to every actor or every transaction. Where a UCTXDef derives from a GenTXDef, applicable inherited requirements remain in force unless the generalized specification explicitly permits variation.

**SHALL**, **SHOULD**, and **MAY** express normative strength in explicitly framed requirements. Structural models may additionally use **R**, **RE**, and **O** to state field-level conformance expectations, in combination with cardinality, terminology binding, and processing conditions. These notations answer different questions and must not be conflated.

Authoring conventions, RTC governance procedures, examples, and informative explanations are not themselves exchange conformance obligations. The subsections explain the inheritance and interpretation of requirements across the specification family.
