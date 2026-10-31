# About the Metadata and Payloads Framework for Direct

This chapter introduces the Metadata and Payloads (MAP) Framework for Direct, explains how its three complementary subframeworks and supporting specifications relate to one another, and guides authors and implementers in applying them. It also provides context on the Framework’s development and evolution.

[What This Framework Defines and Reuses](./0-2-what-this-framework-defines-and-reuses.md)

[How to Use This Framework](./0-3-how-to-use-this-framework.md)

[Framework Evolution and Development History](./0-4-framework-evolution-and-development-history.md)

## Framework Overview

The Direct Standard™ (“Direct”) provides a standards-based mechanism for securely exchanging information between trusted endpoints. Direct supports the exchange of human-readable messages and attachments, but transport alone does not establish common expectations for information content, interpretation, or workflow processing.

The Metadata and Payloads (MAP) Framework builds upon Direct to support interoperable information exchange within business workflows. It comprises three complementary subframeworks:

- **MAP Use Case Framework:** Establishes the foundation for defining business information exchange needs, participating parties, technical actors, and required interactions.
- **MAP Transaction Framework:** Establishes common technical requirements for defining and processing interoperable transactions.
- **MAP Endpoint Capability Statement Framework:** Establishes conventions for expressing endpoint capabilities and mechanisms for publishing and discovering those capabilities among participating systems.

Together, these subframeworks connect business information exchange needs with technical transaction behavior and the endpoint capabilities necessary to support interoperable implementation.

The Framework neither replaces Direct nor restricts conventional Direct exchanges. Its requirements are applied through MAP Use Case Implementation Guides (UC IGs), which establish the exchanges and implementation expectations appropriate to particular business purposes.
