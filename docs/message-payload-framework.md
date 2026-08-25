---
title: Framework for Specifying Message Payload, Metadata, and Technical Actor Functional Requirements
---

# Framework for Specifying Message Payload, Metadata, and Technical Actor Functional Requirements

This chapter describes the Payload Metadata for each transaction identified in the Transaction Summary List. It also describes the Message Payload. Finally, functional requirements are described for the Content Creator and Content Consumer Technical Actors grouped with Message Sender and Message Receiver respectively.

This area of the document establishes the value sets that will be constrained for use in IGs that follow the Metadata and Payload Framework. Appendices provide mappings between the XDR/XDM Metadata fields and Context IG or FHIR Metadata formats. Value Set bindings remain the same for fields mapped from XDR/XDM to Context IG Metadata and from XDR/XDM Metadata to FHIR Metadata.

*Note that FHIR payloads can be carried using XDR/XDM metadata.*

## For Each Transaction

For each transaction enumerated in the Transaction Summary of a derivative Use Case IG, authors must specify the metadata for the message, payload content for the message, and any functional requirements for the Technical Actors involved. (See Header Transaction Summary)
