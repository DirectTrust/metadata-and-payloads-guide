# 3.8.2 MAP Message Header Metadata - XD Edge Transport Requirements

When a MAP transaction uses XD metadata and is transmitted as an XDM package using the Direct XDR/XDM Edge Protocol, the Direct message Subject SHALL begin with XDM/1.0/DDM. Additional human-readable subject content MAY follow the required prefix. When the FHIR Metadata option is used, this Subject line convention SHALL NOT be used. The Subject line requirement applies to the Direct message carrying the XDM package and is not a MAP workflow-routing or transaction-identification mechanism.
