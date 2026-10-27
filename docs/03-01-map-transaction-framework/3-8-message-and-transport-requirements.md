# 3.8 Message and Transport Requirements

Direct message headers and MIME packaging carry the structured workflow package together with its human-readable communication. This section defines the common header and transport requirements, preserves equivalent human-readable content within the package, and distinguishes message delivery notifications from workflow status reporting.

The Information Recipient is the party for whom the Shared Activity is intended. The Routing Target is the address selected for the current Direct message; it MAY be an organizational workflow endpoint or an Intermediary address rather than the Information Recipient’s own Direct address. Routing SHALL follow the applicable use-case and endpoint-capability rules. An endpoint selected for transport does not by itself establish authority to accept or reject the structured payload.
