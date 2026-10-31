## 1.5 Requirements and Conformance

The MAP Framework organizes requirements across common architectural rules, transaction definitions, endpoint capability specifications, and use-case-specific constraints. These layers serve different purposes and must be read together where applicable.

### 1.5.1 Requirements Organization

Common requirements established by the Framework apply according to their stated scope and relevance. GenTXDefs in the reusable transaction catalog (RTC) define reusable transaction behavior; UCTXDefs in a UC IG select and specialize associated GenTXDefs or define new use-case transactions where necessary. Endpoint capability requirements govern how supported exchange functions are described, published, and discovered. A UC IG identifies the requirements applicable to its actors, transactions, and endpoint interactions.

### 1.5.2 Conformance Expectations

Authors may claim that a UC IG conforms to the MAP Framework when it satisfies the applicable Framework requirements. Implementers claim conformance to the applicable UC IG, not directly to the MAP Framework. That UC IG establishes implementation obligations, including inherited Framework and GenTXDef requirements and applicable endpoint capability requirements. A UC IG may add permitted constraints but may not contradict applicable mandatory requirements.

### 1.5.3 Normative and Informative Content

SHALL, SHOULD, and MAY indicate mandatory, recommended, and permitted requirements. Structural specifications may also use R (Required), RE (Required if Existent), and O (Optional), together with cardinalities and terminology bindings; their precise meanings follow the governing specification. Informative examples, diagrams, explanations, and Author Kit guidance do not independently establish implementation conformance requirements.
