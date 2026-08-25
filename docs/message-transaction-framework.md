---
title: Message Transaction Framework
---

# Message Transaction Framework

"resourceType": "CodeSystem",

"url": "https://objects.directtrust.org/standards/terminology/codeSystem/MessageTxType.json",

"name": "MessageTxTypeCodeSystem",

"title": "Message Transaction Type Code System",

"status": "active",

"date": "2025-02-16",

"publisher": "DirectTrust",

"content": "complete",

|  |  |
|----|----|
| **Transaction Name** | **Description** |
| send-communication | This transaction only contains human readable content. When sent in response to a send-request it includes the transactionID established by the send-request. |
| send-communication-request | This transaction only contains human readable information. It is intended to be responded to with some type of response referencing the transactionID it establishes. The response could be a send-communication, or it could be a send-attachment, or a send-request-response. |
| send-attachment | This transaction supports human and/or machine processing workflows. It may contain human information helpful to facilitate the communication. Its primary focus is to deliver one or more attachments. Any type of attachment is supported. When sent in response to a send-request it includes the transactionID established by the send-request. |
| send-request | This transaction supports human and/or machine processing workflows. It is intended to be responded to with some type of response referencing the transactionID it establishes. The response could be a send-communication, or it could be a send-attachment, or a send-request-response, or a send-data-response. The request could be for a one type response, or it may invite more than one subsequent response transaction. |
| send-request-response | This transaction supports human and/or machine processing workflows. It may contain human information helpful to facilitate the communication. Its primary focus is to deliver one or more attachments. It does not expect a specific response. Any type of attachment is supported. It includes the transactionID established in the send-request which is being responded to. |
| send-order | This transaction supports human and/or machine processing workflows. It is intended to be responded to with some type of response referencing the transactionID it establishes. The response could be a send-resi;, or it could be a send-attachment, or a send-request-response, or a send-data-response. The request could be for a one type response, or it may invite more than one subsequent response transaction. |
| send-result | This transaction supports human and/or machine processing workflows. It may contain human information helpful to facilitate the communication. Its primary focus is to deliver one or result from an ordered action. It does not expect a specific response. Any type of result is supported. It includes the transactionID established in the send-order which is being responded to. |
| send-report | This transaction supports human and/or machine processing workflows. It may contain human information helpful to facilitate the communication. Its primary focus is to deliver one or more reports. Any type of attachment is supported.When sent in response to a send-request or send-order it includes the transactionID established by the original transaction. |
| send-data-request | This transaction requires machine processing. It does not include content intended for human consumption upon receipt. It is intended to be responded to with some type of response referencing the transactionID it establishes. |
| send-data-response | This transaction requires machine processing. It does not include content intended for human consumption upon receipt. It is intended to be responded to with some type of response referencing the transactionID it establishes.When sent in response to a send-request it includes the transactionID established by the send-request. |
| send-notification | This transaction supports human and/or machine processing workflows. It does not expect a specific response. Any attachment included must describe a care event such as an admission or discharge from an encounter, the start or completion of a procedure, the establishment, acceptance, or fulfillment of an order. The message includes a transaction ID which is unique to the event, making it possible for subsequent notifications about the same event to be identified. |
