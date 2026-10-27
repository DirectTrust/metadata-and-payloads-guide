# Chapter 0 — About This Framework

This chapter introduces the relationship between Direct and workflow-enabled exchange and presents the Framework as a reusable architectural specification, identifies its supporting artifacts, and explains the workshop experience that led to the 20260828 development baseline. The distinctions among the common Framework, RTC-governed GenTXDefs, UC IG UCTXDefs, and the MAPUC Author Kit orient the rest of the specification.
The chapter explains how the MAP Use Case Framework (Chapters 1–2), MAP Transaction Framework (Chapter 3), RTC GenTXDefs, UC IG UCTXDefs, and MAPUC Author Kit fit together.

> Proposed 20260828 development baseline, reconstructed October 2026; Author review required.

- [0.2 What This Framework Defines and Reuses](./0-2-what-this-framework-defines-and-reuses.md)
- [0.3 How to Use This Framework](./0-3-how-to-use-this-framework.md)
- [0.4 Framework Evolution and Development History](./0-4-framework-evolution-and-development-history.md)

# 0.1 Framework Overview

The Direct Standard™ (“Direct”) provides a standards-based mechanism for securely exchanging information between trusted endpoints. In many implementations, Direct is used primarily to transport human-readable messages and attachments. Although this supports secure communication, the structure, metadata, and processing expectations associated with the information exchanged may be limited or established only through local agreements.

The **Metadata and Payloads (MAP) Framework** builds on Direct to establish explicit, reusable conventions for message organization, structured payloads, exchange metadata, information objects, participating actors, transaction definitions, routing, and workflow processing. Direct provides the secure exchange mechanism. MAP establishes shared conventions that make exchanges consistently interpretable and actionable within defined workflows.

MAP does not prohibit conventional uses of Direct or imply that such exchanges violate the Direct Standard. Rather, MAP establishes additional requirements for implementations seeking interoperable, workflow-enabled exchange. The applicable MAP Framework and Use-Case Implementation Guide requirements determine how these conventions apply to a particular business use case.

MAP treats a Direct message as an exchange vehicle and its structured payload as an independently interpretable information package. A successful transport event is not, by itself, evidence that the structured payload has been accepted into the intended receiving workflow. Similarly, a business participant, technical actor, and provenance agent describe different dimensions of responsibility. These distinctions recur throughout the Framework.

The February 26, 2026 published Framework established the foundation for this work; the Summer 2026 development effort refined its separation of architecture, transaction behavior, and use-case application. This document is a **retrospectively reconstructed development baseline**, not a claim that these revisions were published on August 28, 2026.
