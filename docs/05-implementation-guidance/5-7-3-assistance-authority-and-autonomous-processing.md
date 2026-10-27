# 5.7.3 Assistance, Authority, and Autonomous Processing

AI may support functions such as classification, extraction, summarization, matching assistance, routing assistance, workflow recognition, and presentation. Implementers should distinguish assistance from authority. A capability authorized to summarize or recommend is not automatically authorized to alter a record, select a new Information Recipient, create a new clinical assertion, initiate a transaction, or otherwise change state.

When an AI-enabled component acts autonomously, its authority should be explicitly bounded. DirectTrust's governance principles distinguish supportive functions such as Recommend, Assist, Summarize, and Alert from agentic functions that independently Decide, Perform, Administer, or Prescribe. These categories should not share an undifferentiated permission set.

For Direct, delegated authority may be constrained by permitted transaction types, structured payload types, data access, destinations, tools, and effects. For example, a Mailroom Utility may be authorized to receive and classify send-admission-notification transactions and route their structured payloads to authorized workflows without being authorized to originate unrelated transactions or modify source clinical content.
