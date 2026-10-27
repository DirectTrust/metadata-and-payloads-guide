# 5.3.3 Information Object Representation Is Not an Interoperability Maturity Ranking

An information object may be represented as HL7 Version 2, CDA, FHIR, a Minimally Structured Document, or another form permitted by the applicable Transaction Definition and supported by the Receiver Actor. These representations have different strengths and constraints. The implementation question is whether the information object preserves the needed information and can be exchanged, correlated, and processed according to the transaction requirements. The structured payload packages these information objects and their metadata; the Direct message transports that package together with human-readable communication.

Structure the exchange; preserve the information; let Content Consumers interpret what they can. This principle allows Direct to move useful information between systems without forcing every sender to solve every downstream computability problem before exchange can occur.
