# 3.8.1 MAP Message Header Metadata - Direct Transport Requirements

The Direct message carries transport identifiers and delivery-notification controls. These fields describe the message transport and are distinct from the Workflow Activity identifier and workflow status instructions.

| Element | Common purpose |
| --- | --- |
| Message-ID | Identifies the individual Direct message and supports transport-level correlation, including MDNs. Distinct from the Transaction Instance / Workflow Activity Identifier. |
| Content-Type | Defines the multipart/mixed Direct message and MIME boundary. |
| Disposition-Notification-To | Identifies the return endpoint for requested Direct transport disposition notifications. |
| Disposition-Notification-Options | Requests/configures applicable Direct disposition-notification behavior. |
