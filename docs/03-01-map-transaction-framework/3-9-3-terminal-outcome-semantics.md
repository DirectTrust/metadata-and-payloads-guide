# 3.9.3 Terminal Outcome Semantics

TX8 terminal outcome describes acceptance or rejection of the originating package. The Task status and Provenance assertion SHALL express the same workflow status.

| Outcome | FHIR Task status | Required Provenance Activity | Expected observable behavior |
| --- | --- | --- | --- |
| structured payload acceptance | completed | accept | Entire originating structured payload accepted into the intended workflow; sufficient receipt implied; subsequent processing or service fulfillment not asserted. |
| structured payload rejection | failed | reject | Entire originating structured payload rejected from the intended workflow with a reason; sufficient receipt implied; no partial acceptance reported. |

A system asserting structured payload rejection SHALL demonstrate that the rejected information objects were not retained as accepted information in the Information Recipient’s workflow environment. This does not prohibit security logs, transient queues, quarantine, audit records, or legally required transport evidence.

TX8 Task outcome, asserted Provenance Activity, and observable recipient behavior SHALL be consistent.

TX8 Task.status describes the originating structured payload’s workflow status, not success or failure of transmitting the report: completed indicates acceptance; failed indicates rejection. The single report Task is separate from TX8's primary information object, the minimal identification snapshot of the originating SubmissionSet/List.
