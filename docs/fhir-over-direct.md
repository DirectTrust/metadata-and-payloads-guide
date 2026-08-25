---
title: FHIR over Direct Metadata and Payload Guidance and Mapping Instructions
---

# FHIR over Direct Metadata and Payload Guidance and Mapping Instructions

This chapter describes how to enable information in FHIR format to be shared via Direct.

The [Metadata Mapping XD to FHIR spreadsheet](https://directtrust.box.com/s/hx096896zd8ysi4l81c93cn066m9n3x4) shows how to convey the SubmissionSet metadata using a FHIR List Resource which encompasses one or more DocumentReference Resources. It also shows how to convey the metadata elements in a DocumentEntry using a FHIR DocumentReference Resource. The mapping is straightforward.

When using FHIR to convey metadata, a FHIR Bundle Resource of type Collection is used to package the collection of resources. The Metadata and Payload Framework does not prohibit other approaches, but encourages initial use cases for FHIR over Direct to utilize Collection Bundles and leave the work of processing the message payload to the Content Consumer actor.

This approach provides the greatest flexibility for the message itself. The derivative IG can describe the functional requirements of the Content Consumer such as: The Content Consumer SHALL support an operation to transform the received Collection Bundle into a Transaction Bundle that can be posted to their system.

The design of the posting transaction is better controlled at the Edge system rather than expecting the Content Creator to know all the different information processing complexities and differences that may exist at every potential Receiving Edge system.

Note that exchange of a FHIR payload also can utilize XDR/XDM format for its metadata. This offers a transitional option that may be useful for systems that only have infrastructure to operate on current message metadata models, but would be able to process the FHIR Resources, once they had arrived.
