# Transaction Framework

Chapter 3 establishes the MAP Transaction Framework, a common transaction architecture that human authors and AI assistants, implementers, and governance reviewers use to understand, specify, evaluate, specialize, and generalize MAP transactions. It provides a shared conceptual and technical foundation, rather than requiring each Use Case Implementation Guide (UC IG) to reproduce the same architecture.

MAP transactions perform Shared Activities through information exchange using The Direct Standard™ (“Direct”). The Reusable Transactions Catalog (RTC) contains Generalized Transaction Definitions (GenTXDefs). A UC IG applies an appropriate GenTXDef through a Use Case Transaction Definition (UCTXDef), adding necessary use case specificity without contradicting inherited mandatory requirements. Where no existing GenTXDef fits, a UC IG may define a new UCTXDef for later consideration under applicable governance.

The sections of this chapter follow a deliberate progression from the definition of a transaction to the information package used to perform it. Section 3.1 explains how to specify a MAP Transaction consistently using the standard eight-section TXDef template. Section 3.2 explains what the transaction is: a distinct Shared Activity with its own identity and correlation. Section 3.3 identifies the actors responsible for performing it. Section 3.4 describes how those actors prepare, exchange, receive, and process information, distinguishing transport delivery from workflow acceptance and subsequent processing, and addressing Workflow Status and Provenance. Section 3.5 then explains how the information is assembled into the Direct message and its Structured Package Payload, including the SubmissionSet, information objects, their relationships, and metadata.

Read together, these sections answer five practical questions: How is the transaction specified? What Shared Activity is being performed? Who is responsible? What happens during its execution? How is the information packaged so that recipients can interpret and use it? The final question builds on the preceding four: packaging conveys the information needed to carry out the transaction; it does not itself redefine the Shared Activity or the actors’ responsibilities.

Section 3.5 uses the XD SubmissionSet and DocumentEntry organization as the reference conceptual packaging model. The FHIR packaging option follows the same structural conventions and expresses them using its corresponding syntax; Context IG guidance is reserved pending its applicable specification. This common model provides the foundation for the representation-specific guidance in individual TXDefs. Detailed packaging rules are covered in Section 3.5.

In the MAP Framework, the GenTXDefs for each transaction in the RTC follow Chapter 3.

In a derivative UC IG, Chapter 3 includes a concise Chapter 3.1 to reference this common Framework and the eight-section TXDef template, followed by its individual UCTXDefs. The common architecture defined in the MAP Framework Sections 3.2–3.5 remains applicable without being reproduced.

## Chapter sections

- [3.1 Transaction Definition Architecture](3-1-transaction-definition-architecture.md)
- [3.2 Transaction Model and Identification](3-2-transaction-model-and-identification.md)
- [3.3 Transaction Actors and Responsibilities](3-3-transaction-actors-and-responsibilities.md)
- [3.4 Transaction Processing and Information Exchange](3-4-transaction-processing-and-information-exchange.md)
- [3.5 Direct Message Packaging, Structured Payload, and Metadata Architecture](3-5-direct-message-packaging-structured-payload-and-metadata-architecture.md)
