# Chapter T — Terms, Definitions, and Acronyms

This chapter establishes the common vocabulary of the Metadata and Payloads (MAP) Framework. Its definitions apply across use-case implementation guides and reusable transaction specifications unless an applicable governing standard provides a more specific definition. The terminology separates transport, packaging, information objects, transactions, work activities, and status reporting so that requirements do not inadvertently mix these boundaries.

This chapter is a reference, not a substitute for normative requirements. Implementers follow the applicable chapters and transaction definitions; authors use these terms consistently in their use-case guides. The acronym register in T.5 records expansions, while each independently readable chapter or transaction definition still expands abbreviations on first use.

- [T.2 Document and Information Terminology](./t-2-document-and-information-terminology.md)
- [T.3 Use Case, Transaction, Workflow, and Routing Terminology](./t-3-use-case-transaction-workflow-and-routing-terminology.md)
- [T.4 Supporting Guidance and Terminology Relationships](./t-4-supporting-guidance-and-terminology-relationships.md)
- [T.5 Acronyms and Abbreviations](./t-5-acronyms-and-abbreviations.md)

# T.1 Exchange Terminology and Language Usage

These terms distinguish the complete transported communication, the structured content carried within it, and the individual information objects. The distinctions apply throughout the MAP Framework and its use-case implementation guides.

## T.1.1 Direct Message, Structured Payload, and Information Object

The following three levels must not be conflated when describing construction, transmission, acceptance, or processing.

| Term | Meaning and use |
| --- | --- |
| Direct message | The complete transported message, including headers, Multipurpose Internet Mail Extensions (MIME) structure, human-readable communication, and structured payload. Use when discussing message construction, transmission, delivery, and message-level controls. |
| Structured payload | The complete package carried in MIME Part 2, using the applicable Fast Healthcare Interoperability Resources (FHIR) Collection Bundle or Integrating the Healthcare Enterprise (IHE) Cross-Enterprise Document Media Interchange (XDM) representation. It contains the required metadata and information objects and is the unit accepted or rejected into the intended receiving workflow. Exact contents depend on the applicable transaction definition. |
| Information object | An individual item included within a structured payload, such as a Clinical Document Architecture (CDA) document, Health Level Seven (HL7) Version 2 message, Workflow Activity Task, or provenance information object. |

## T.1.2 Information Packaging and Human-Readable Content

The Direct message carries a human-readable communication in MIME Part 1 and a structured payload in MIME Part 2. The structured payload also includes the corresponding human-readable copies as required by Chapter 3. The two message parts have different roles, even when they preserve the same readable content.

## T.1.3 Language Usage Conventions

Use *Direct message*, *structured payload*, and *information object* for the three levels above. Use *package* when discussing physical assembly or completeness. Qualify *attachment* by its packaging level; do not treat *message payload*, *transaction content*, and *structured payload* as interchangeable technical terms. Chapter 3 establishes the actual packaging and conformance requirements.
