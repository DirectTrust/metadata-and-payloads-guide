# About the Metadata and Payloads Framework for Direct

This chapter introduces the Metadata and Payloads (MAP) Framework for Direct, describes its reusable specification components, and explains how authors and implementers apply them to support interoperable information exchange. It also provides context on the Framework’s development and evolution.

[0.2 What This Framework Defines and Reuses](./0-2-what-this-framework-defines-and-reuses.md)

[0.3 How to Use This Framework](./0-3-how-to-use-this-framework.md)

[0.4 Framework Evolution and Development History](./0-4-framework-evolution-and-development-history.md)

## 0.1 Framework Overview

The Direct Standard™ (“Direct”) provides a standards-based mechanism for securely exchanging information between trusted endpoints. Direct supports the exchange of human-readable messages and attachments, but transport alone does not specify a common structure, meaning, or receiving workflow for the information conveyed.

The Metadata and Payloads (MAP) Framework builds on Direct by providing a common architecture for defining information exchanges within business workflows. It addresses message organization, structured payloads, exchange metadata, information objects, participating actors, transaction behavior, routing, and workflow processing. MAP Use Case Implementation Guides (UC IGs) apply this architecture to particular business needs so that exchanging parties can implement consistent expectations for the information sent, received, and processed.

MAP neither replaces Direct nor restricts conventional Direct exchanges. It establishes additional conventions and requirements for use cases that need interoperable, workflow-enabled exchange. The requirements applicable to an implementation are determined by the MAP Framework together with the relevant UC IG and its referenced transaction definitions.

For example, successful message delivery does not necessarily mean that a receiving system has accepted the payload into its intended workflow. MAP distinguishes transport disposition from workflow acceptance and subsequent processing. It also distinguishes business participants, technical actors, and provenance agents to make organizational responsibility, system behavior, and attribution clear.
