# 3.8.5 Direct Message Delivery Notification and Workflow Status Updates

Direct final-destination delivery notifications and workflow status reports provide different assurances. A dispatched final-destination MDN establishes delivery of the Direct message to its intended transport destination. A workflow status report communicates acceptance or rejection of the entire structured payload into the intended workflow. It does not report completion of subsequent processing. MDNs use Disposition-Notification-To; workflow status reports use the Workflow Status Update Endpoints carried with the Workflow Activity Task. Those addresses MAY differ.

A successful final-destination MDN SHALL NOT be interpreted as evidence that the Information Recipient successfully parsed, patient-matched, context-correlated, accepted, retained, routed, or processed the structured payload in its intended workflow.
