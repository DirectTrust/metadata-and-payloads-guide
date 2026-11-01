# 1.4 Foundational Principles

The following principles guide the design and application of all three subframeworks.

## 1.4.1 Separation of Concerns

Business purpose, transaction processing, and endpoint capability are distinct but coordinated concerns. Requirements should be located in the specification layer responsible for them.

## 1.4.2 Reuse with Controlled Specialization

Shared architectural rules and governed generalized transaction patterns should be reused. A UC IG may constrain permitted variation but must preserve applicable mandatory behavior.

## 1.4.3 Clear Responsibilities and Outcomes

Participating organizations, technical actors, and intermediaries should have explicit responsibilities. Transport disposition, workflow acceptance, and subsequent processing are distinct outcomes.

## 1.4.4 Human-Readable and Structured Usability

Human-readable and structured representations serve complementary purposes. MAP preserves equitable interoperability by ensuring that all authorized Information Recipients can access the same human-readable information, whether they receive the complete Direct message or the Structured Package Payload independently. The human-readable content carried in the first MIME part SHALL also be included in the Structured Package Payload in the second MIME part. Corresponding copies SHALL be byte-identical; distinct TXT and HTML representations SHALL convey equivalent information. This preservation supports downstream use without loss of the human-readable communication. Chapter 3 specifies the applicable packaging, metadata, and validation requirements.

## 1.4.5 Progressive Interoperability

Interoperability can improve incrementally through purposeful structuring and workflow integration, including minimally structured documents where appropriate.

## 1.4.6 Identity, Context, and Provenance

Information must be sufficiently identifiable, contextualized, and attributable for receivers to interpret and manage it reliably.

## 1.4.7 Explicit Endpoint Capability

Exchange expectations should be aligned with the capabilities an endpoint declares, makes discoverable, and supports, rather than assumed from transport reachability alone.
