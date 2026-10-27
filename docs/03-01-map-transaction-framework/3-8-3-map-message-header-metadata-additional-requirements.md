# 3.8.3 MAP Message Header Metadata - Additional Requirements

MAP adds the following message header metadata to support recognition, routing, and processing of the structured payload.

| MAP header | Cardinality | ValueSet or fixed value | Binding strength | Purpose and application rule |
| --- | --- | --- | --- | --- |
| x-direct-metadata-payload-versionIdentifier | 1..1 | 1 | Fixed value | Framework version governing interpretation and processing. The fixed framework version is 1. |
| x-direct-metadataTypeCode | 1..1 | DirectTrust Metadata Type http://objects.directtrust.org/standards/terminology/ValueSet/MetadataTypeVS | Extensible | Early recognition/routing based on structured payload metadata representation. SHALL identify the metadata representation actually used for the transaction. The value SHALL follow the Extensible binding to MetadataTypeVS and SHALL be consistent with a metadata representation supported by the receiving endpoint. For XD metadata use urn:dt-org:dsm:map:SMTP+XD:1.0; for FHIR metadata use urn:dt-org:dsm:map:SMTP+FHIR:1.0. |
| x-direct-useCase | 1..1 | the applicable use-case IG | Fixed value | Early use-case-aware routing to the appropriate Content Consumer Processor. Identifies this use case. |
| x-direct-purposeOfUse | 0..* | TREATMENT | Fixed value | Broad network-level reporting/measurement of exchange purpose without Payload inspection. When purposeOfUse is populated for treatment exchange in this use case, use TREATMENT. The header remains optional; this fixed value does not assert treatment for an unrelated purpose. |

These MAP message metadata requirements are common to a use-case transaction-a TX8 whenever the transaction uses Direct messaging. Individual Transaction Definitions SHALL state only transaction-specific deviations or additional requirements. The Direct message header SHALL NOT use x-direct-workflow-status-requested. The request for structured payload acceptance reporting and the Workflow Status Update Endpoint(s) belong to the Workflow Activity Task. Disposition-Notification-To remains a transport-level return address for Direct disposition reporting and SHALL NOT be interpreted as a Workflow Status Update Endpoint.
