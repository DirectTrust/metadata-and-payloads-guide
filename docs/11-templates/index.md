# Templates

These templates support the development of new MAP use cases. They give use case authors a consistent starting point, so that a new use case is described with the same structure, metadata and level of detail as the use cases in this Framework.

## Download the templates

[Download the MAP Framework Part 2 Templates (.zip)](../templates/MAP-Framework-Part-2-Templates.zip){download}

Download the zip file, extract it, and use the files it contains as the templates for developing your use case. The zip file you download from this page matches the version of the documentation you are reading.

## What is in the zip file

| File | Purpose |
| --- | --- |
| **Framework for Metadata and Payload via the Direct Standard(R) - Part Two v2.docx** | The document template for a derivative implementation guide (Part II). It provides the chapter structure for describing a use case: business scenario, actors and transactions, message payload, metadata and functional requirements, patient matching considerations, the mapping of the endpoint use case to `SubmissionSet.contentTypeCode`, and the endpoint CapabilityStatement. It also contains instruction boxes that explain how to complete each section. **Start here for more detailed instructions on using the templates.** |
| **MaP Use Case Development Workbook 20251003.xlsx** | A step-by-step workbook for working out a use case before writing it up. Its tabs walk through the business scenario, the actor-transaction diagram, the transaction summary, the metadata and payload expectations for each transaction, the endpoint use case mapping, and a draft endpoint capability declaration. Start with the Instructions tab. |
| **Metadata Details - Complex Mapping.xlsx** | A reference workbook of metadata details, including the health container, MIME part, SubmissionSet and DocumentEntry metadata, along with the supporting value sets and the mapping of DirectTrust use cases to LOINC. Use it to look up and select the metadata values for your transactions. |
| **Actor Transaction Diagram Template.pptx** | A presentation template for drawing the actor-transaction diagram that shows who exchanges information with whom in your use case. |
| **Sample CapabilityStatement.docx** | An annotated sample of a FHIR CapabilityStatement for an endpoint. Use it as a model when drafting the capability declaration for the endpoints in your use case. |

## Suggested approach

1. Extract the zip file and read the instructions in the Part Two document template.
2. Work through the use case development workbook, from the business scenario through the transaction details. Developing a technical specification is an iterative process that benefits from collaboration.
3. Draw the actor-transaction diagram with the PowerPoint template.
4. Use the metadata details workbook to select the metadata values for each transaction.
5. Draft the endpoint capability declaration, using the sample CapabilityStatement as a model.
6. Write up the use case in the Part Two document template, and delete all instruction boxes and placeholder text when you are done.
