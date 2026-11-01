# 4.3 Recommended Capability Description Content

A human-readable capability description SHOULD include the information identified in Table 4-1, as applicable to the endpoint.

The table is intended as a practical guide for implementers. Not every category will be relevant to every endpoint, and the table does not establish additional mandatory capability requirements.

**Table 4-1. Recommended Content for Human-Readable Endpoint Capability Descriptions**

| Information category | Recommended information |
| --- | --- |
| Endpoint identification | Endpoint or service name, applicable Direct address or address pattern, and other information needed to distinguish the endpoint |
| Responsible organization | Organization responsible for the endpoint’s interoperability capabilities and, where relevant, its operator or intermediary |
| Interoperability contact | Contact information or process for trading partner inquiries, onboarding, or technical support |
| Supported use cases | Names and identifiers of supported MAP use cases, with applicable Implementation Guide versions where useful |
| Supported transactions | Transaction names and identifiers, including applicable GenTXDefs or UCTXDefs |
| Transaction participation | Whether the endpoint supports sending, receiving, or both for each supported transaction |
| Exchange mechanisms | Supported transport or exchange mechanisms and relevant routing characteristics |
| Structured payload representations | Supported metadata representations, such as XD or FHIR Collection Bundle packaging, where applicable |
| Information objects | Supported document types, event notifications, FHIR resources, and other information-object formats or options |
| Workflow status | Whether correlated workflow status reporting is supported, including relevant transaction capabilities and limitations |
| Identifier capabilities | Identifier types or namespaces that materially affect matching, correlation, or exchange compatibility |
| Terminology capabilities | Supported coded options or subsets when the applicable specification permits implementation choices |
| Intended workflow | A brief description of the receiving workflow or service supported by the endpoint, where relevant |
| Operational considerations | Material prerequisites, constraints, onboarding instructions, or testing information |
| Publication information | Date last updated and, where useful, a version or revision history |

## 4.3.1 Transaction and Role Information

A capability description SHOULD distinguish support for sending a transaction from support for receiving it.

These capabilities are associated with the applicable Sender Actor and Receiver Actor functions. An endpoint may support one direction, both directions, or different directions for different transactions.

Transaction identifiers SHOULD be sufficiently specific to distinguish the applicable Transaction Definitions. Local section numbers alone may not provide a stable identity across Implementation Guides.

An endpoint operator should describe capabilities that are actually implemented rather than presenting planned functionality as operational support. Planned capabilities may be identified separately.

## 4.3.2 Exchange and Information-Object Capabilities

A capability description SHOULD identify implementation choices that materially affect successful exchange.

Examples include supported structured payload metadata representations, clinical document formats, event types, optional workflow resources, and supported information-object subsets where the governing specifications permit choices.

Support for a FHIR information object does not necessarily establish support for FHIR Collection Bundle packaging. Similarly, support for a particular transport mechanism does not establish support for every transaction that may use that transport.

Where multiple compatible exchange representations are supported, an endpoint operator may describe a preferred representation or an established selection arrangement.

## 4.3.3 Workflow and Operational Capabilities

A capability description SHOULD identify relevant workflow capabilities and limitations that exchange partners need to understand.

For example, Direct message delivery and acceptance of a structured payload into an intended workflow are distinct events. A Message Disposition Notification does not, by itself, establish acceptance of the structured payload into that workflow.

Where workflow status reporting is supported, the description may identify the applicable reporting transaction and whether the endpoint supports sending or receiving such reports.

The detailed reporting conditions, correlation requirements, routing rules, and timing obligations remain governed by the applicable Transaction Definitions.
