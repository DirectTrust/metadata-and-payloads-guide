# T.2 Document and Information Terminology

The MAP Framework uses document terminology to distinguish the semantic kind of information, its asserted structural conventions, and its lifecycle. These definitions apply beyond any one clinical specialty or use case; detailed mappings and examples belong in the supporting appendices.

## T.2.1 Document Identity, Type, Category, and Template/Profile

These are distinct classification dimensions. Use the exact field name of the applicable standard when specifying encoded metadata.

| Term | Meaning and use |
| --- | --- |
| Document Type | The specific semantic kind of information collection represented by a document; the *Species* dimension in the explanatory taxonomy. |
| Document Category | A broader semantic grouping for discovery or workflow; the *Family* dimension. A document may belong to multiple categories where the governing standard permits. |
| Document Template/Profile | The asserted structural and conformance model; the *Genus* dimension. It is not synonymous with document type, document category, or media type. |
| Document Identity | The identifier or set of identifiers used under the applicable standard to distinguish a document or version from other information objects. |

## T.2.2 Source Form and Progressive Structuring

These concepts describe how authored information can be preserved while gaining computable structure.

| Term | Meaning and use |
| --- | --- |
| Source Form | The human-readable representation of source-authored document information preserved in an exchanged document, including its authorship boundaries. |
| Minimally Structured Document | A standardized document preserving its human-readable Source Form while supplying the dependable structure required by its applicable document and exchange specifications. |
| Progressive Structuring | Progressive enrichment of a document's computable representation while preserving source information, attribution, and context. |

## T.2.3 Information Collection Scope and Document Generation

Information Collection Scope establishes which information belongs to a collection, such as an encounter, an episode, or a point-in-time summary. An On-Demand Document is assembled when requested, while its clinically relevant effective time may relate to an earlier encounter or episode. A Dynamically Generated Document draws on the information available in the current context; its time semantics must be specified by the applicable document rules rather than inferred from generation alone.

## T.2.4 Document Lifecycle and Status

Document Lifecycle concerns preparation, completion, amendment, correction, replacement, or invalidation. Document Status is the asserted clinical or authoring state of a particular document version under its governing specification. Neither is established merely by successful Direct transport or structured payload acceptance. Appendix E provides additional explanation and mappings.
