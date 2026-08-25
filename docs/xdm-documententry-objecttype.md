---
title: Clarification of IHE XDM DocumentEntry.objectType
---

# Clarification of IHE XDM DocumentEntry.objectType

In the Integrating the Healthcare Enterprise (IHE) Cross-Enterprise Document Media Interchange (XDM) profile, the documentEntry.objectType field refers to the classification of the document entry in a registry.

This field comes from the IHE Cross-Enterprise Document Sharing (XDS) metadata model and is used to specify whether the document is a Stable document or an On-Demand document.

**Valid Values for documentEntry.objectType**

|  |  |  |
|----|----|----|
| **Value (UUID)** | **Meaning** | **Description** |
| urn:oasis:names:tc:ebxml-regrep:ObjectType:RegistryObject:ExtrinsicObject | Stable Document | This is the standard type for documents in XDM. It means the document is complete and will not change. |
| urn:oasis:names:tc:ebxml-regrep:ObjectType:RegistryObject:ExtrinsicObject-OnDemand | On-Demand Document | Represents a document generated dynamically upon request (rare in XDM, more common in XDS.b). |

**In practice for XDM:**

XDM primarily supports Stable documents, so in most XDM packages, the documentEntry.objectType will be:

***urn:oasis:names:tc:ebxml-regrep:ObjectType:RegistryObject:ExtrinsicObject***

A Direct Secure Messaging Use Cases develop the power to “request” a type of document, users will need to understand the difference between an “On Demand” document and a stable document. To understand the power of an “On Demand” type of document, consider the request, “tell me what you know right now.” The most common example of an “On Demand” document is the ubiquitous C-CDA Continuity of Care Document (CCD). That’s why it is coded with the [LOINC code 34133-9](https://loinc.org/34133-9/) which means “summary of episode note”. Other examples include: The OB Flowsheet (89238-0 \| Obstetrics Flowsheet \| LOINC) for a pregnant woman. As it is requested over the course of a pregnancy the document expands to cover more and more details about the care received and condition of the patient. Stable documents don’t change. No matter when you request them, or receive them, they are discrete objects that persist unchanged once they come into existence.

The language is tricky here, and you really need to tease apart two separate notions. On-demand describes the timing for document creation. Even a “stable” document can be generated “on-demand”. Most EHRs don’t proactively create documents (that would be wasteful because they may never be needed/requested). So, when a document is requested, then they make it, and once a stable document is created, it must be persisted. If you get the document’s id and ask for it by id a month later, nothing will be different. The document is retrievable and contains unchanging content for as long as the Custodian organization retains the document (set by a business policy at the Organization).

The key notion about a document like a CCD is that the document’s content is determined “dynamically”. The document gets built at the point in time when it is requested/sent, and the content that’s in it depends on what’s known about the patient at that point in time. The CCD you request today would have encounters in the span of time up to today (or maybe for a constrained period of time like for the past year), but if you request a CCD next month for the past year, then that CCD would have different content in it, assuming you have additional encounters between now and next month.

Regardless, all documents, once generated become “stable” documents in that you should be able to request a document by id and every time you ask for that specific document using that universally unique id (UUID), you can expect to get back the exact document with not even one bit changed.

The key is to realize that the two opposing notions are really STABLE or DYNAMIC rather than STABLE or ON-DEMAND.
