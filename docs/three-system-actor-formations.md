---
title: Three (or more) System Actor Formations
---

# Three (or more) System Actor Formations

When the use case includes three or more System Actor in the scenario, more complex Actor-Transaction patterns will be needed.



![Eight intermediated actor-transaction patterns (Patterns #1-8) for a Three System Actor formation, covering unsolicited and solicited exchange through an Intermediary System.](/images/three-system-actor-formations/1.png)

*Eight intermediated actor-transaction patterns (Patterns #1-8) for a Three System Actor formation, covering unsolicited and solicited exchange through an Intermediary System.*


Pattern \#1 represents the case where an Edge Organization enables Direct Secure Messaging utilizing the standard Health Information Services provided by an Intermediary Organization.

Pattern \#2 represents the case where an Edge Organization contracts with a third party Intermediary Organization to enable Direct Secure Messaging for its Edge system users which could be their own employees, or could be employees of an End User Organization. The Intermediary Organization is not a HISP. The Intermediary is contracted with a HISP to provide a combined solution which enables Direct Secure Messaging.

Pattern \#3 represents the case where an Edge Organization contracts with an Intermediary Organization that offers extended health information services for Direct Secure Messaging which enables the Edge system to perform the payload creation capabilities required to support outgoing Direct messaging. That same Intermediary Organization enables the Receiving Edge System to receive the message sent.

Pattern \#4 represents the case where an Edge Organization contracts with an Intermediary Organization that offers extended health information services for Direct Secure Messaging which enables the Edge system to meet the payload processing and consumption capabilities required to support an incoming Direct message. The Edge Organization

Pattern \#5 represents the case where an Edge Organization contracts with a HISP Organization that offers extended health information services for Direct Secure Messaging which enables the Edge system to meet the payload creation capabilities required to support outgoing Direct message and to meet the payload processing and consumption capabilities required to support an incoming Direct message.

Pattern \#6 represents the case where an Edge System enables Direct Secure Messaging utilizing the standard Health Information Services provided by an DirectTrust Accredited HISP Organization and contracts with other Edge systems to route a Direct message to them, with or without additional processing applied to the message payload.

Pattern \#7 represents the case where both Edge Organizations are contracted with the same third party Intermediary Organization to enable Direct Secure Messaging for its Edge system users which could be their own employees, or could be employees of an End User Organization.  The Intermediary Organization is a HISP or offers HISP Services.

Pattern \#8 represents the case where each Edge Organization contracts with a separate third party Intermediary Organization to enable Direct Secure Messaging for its Edge system users which could be their own employees, or could be employees of an End User Organization.  Each Intermediary Organization is a HISP or offers HISP Services.

The Intermediary pattern (“three-actor) use case is a fairly common approach when using Direct. The example below shows several ways the three-actor use case can be utilized with Event Notifications via Direct.



![Example event notification workflows via Direct, showing how an Intermediary relays ADT event notifications from a sending Organization to a Receiving Edge System.](/images/three-system-actor-formations/2.png)

*Example event notification workflows via Direct, showing how an Intermediary relays ADT event notifications from a sending Organization to a Receiving Edge System.*
