# 4.9 Direct Message Delivery and Structured Payload Workflow Status

Direct message delivery and structured payload workflow status are separate observations. A final-destination Message Disposition Notification (MDN) reports message transport disposition, not necessarily receipt, acceptance into the intended workflow, or completion of downstream processing of the structured payload. A message can be delivered successfully while its payload is later rejected.

Where a UCTXDef requires a correlated workflow-status report, the endpoint declares the corresponding Technical Actor Role and routing capabilities. Such reporting is not universally required merely because the endpoint implements MAP. The reporting transaction, required destinations, correlation rules, and timing are specified by the applicable Transaction Definition.
