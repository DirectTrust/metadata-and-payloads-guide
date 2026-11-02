# 3.4 Transaction Processing and Information Exchange

Section 3.4 describes how MAP Transactions are performed, from information preparation and message exchange through receipt, workflow acceptance or rejection, and subsequent processing. It distinguishes transport delivery from application-level processing and explains how processing capabilities affect the activities a receiving system can perform.

The Framework establishes common processing principles, including interpretation of outcomes, correlation of related activities, and recording of Provenance. The applicable Transaction Definition specifies additional processing requirements, including when and how workflow status must be reported.

## 3.4.1 Transaction Processing Lifecycle

A MAP Transaction follows a common processing lifecycle: CREATED → PACKAGED → SENT → DELIVERED → RECEIVED → ACCEPTED or REJECTED → subsequent PROCESSING, when accepted.

The grouped Sender Actor prepares, packages, and sends the information required to perform the Shared Activity. The grouped Receiver Actor receives the Direct message, makes its information available for interpretation, and performs the processing supported by its capabilities and required by the applicable Transaction Definition.

These lifecycle activities are distinct. Completion of one activity does not establish that subsequent activities have occurred. A transport handoff does not, by itself, establish receipt or processing by the intended Content Consumer.

## 3.4.2 Receiving and Processing Capabilities

The extent of processing depends on the capabilities of the Receiver Actor.

A Content Consumer limited to rendering human-readable information can support human interpretation and manual workflow activities, but cannot automatically process the Structured Package Payload or generate a correlated send-workflow-status transaction without additional structured processing capabilities.

A Content Consumer capable of interpreting the Structured Package Payload can perform additional automated processing using its information objects and metadata. Support for structured processing does not, by itself, establish support for generating a send-workflow-status transaction.

The SubmissionSet identifies the Shared Activity and organizes the information exchanged. A Workflow Activity Task may additionally provide a machine-processable representation of the Shared Activity and associated workflow instructions.

The MAP Framework makes Task optional by default to support adoption using existing XD infrastructure that does not implement FHIR Task processing. A Receiver Actor’s ability to process a SubmissionSet does not imply support for Task processing or workflow status reporting. The applicable Transaction Definition identifies any additional processing requirements.

The applicable Transaction Definition and declared endpoint capabilities establish the processing functions required for participation in a particular Shared Activity.

## 3.4.3 Message Delivery, Receipt, and Workflow Outcomes

Direct message delivery, structured payload receipt, workflow acceptance or rejection, and subsequent processing are distinct activities.

A dispatched final-destination Message Disposition Notification (MDN) provides evidence of delivery of the Direct message to its final destination. It does not establish that the Content Consumer received, interpreted, or accepted the Structured Package Payload.

Acceptance means that the entire Structured Package Payload has been accepted into the intended workflow. Rejection means that it has not been accepted. Neither outcome establishes completion of subsequent clinical, administrative, or other processing.

A defect in a required information object may prevent acceptance of the entire Structured Package Payload. Lack of support for interpreting an optional Workflow Activity Task alone does not establish grounds for rejecting an otherwise processable payload. Required information and processing obligations are determined by the applicable Transaction Definition.

## 3.4.4 Workflow Status Reporting

A send-workflow-status transaction is a separate Shared Activity that communicates the acceptance or rejection of an originating Structured Package Payload.

The send-workflow-status GenTXDef requires exactly one Workflow Activity Task to represent the terminal outcome. Its required Primary Information Object is a separate FHIR List containing an identification-only snapshot of the originating SubmissionSet. Detailed correlation, outcome encoding, and report processing are governed by that GenTXDef.

Generating a workflow status report requires sufficient structured processing capability to identify the originating Transaction Instance, determine its workflow outcome, and construct a correlated report. Support for receiving or interpreting a Structured Package Payload does not, by itself, establish support for generating a send-workflow-status transaction.

An originating Information Source MAY request reporting of successful structured payload acceptance by including a Workflow Activity Task with Task.input.type coded request-workflow-status and Task.input.valueBoolean=true. The request and any Workflow Status Update Endpoint instructions SHALL be conveyed in the Task, not Direct transport headers. A reporting obligation may also arise independently from the applicable Transaction Definition, including defined failures. Task presence alone does not require a report, and valueBoolean=false or an absent request does not suppress otherwise required failure reporting. Report dispatch remains subject to applicable TX8 endpoint capabilities and routing rules.

An ordinary human-readable Direct reply may communicate a response without constituting a conformant send-workflow-status transaction. A HISP may provide additional reporting functionality on behalf of a receiving organization, but delivery or human access alone does not establish the workflow outcome.

The absence of a workflow status report does not establish acceptance, rejection, or non-receipt. A receiving system may have delivered information to a human recipient or performed other processing without being capable of generating the report.

The send-workflow-status Transaction Definition specifies the detailed Task requirements, report contents, correlation, routing, reporting behavior, and any applicable Provenance requirements.

For FHIR representation of a related originating SubmissionSet, Appendix D maps its uniqueId to typed List.identifier, purpose to List.extension\[map-submission-purpose\].valueCodeableConcept, sourcePatientId to List.extension\[map-submissionset-sourcePatientId\], and intendedRecipient to List.extension\[ihe-intendedRecipient\]. The send-workflow-status GenTXDef governs their use for report correlation; List.subject represents exchange-domain patientId and is not a substitute for sourcePatientId.

## 3.4.5 Processing Anomalies and Follow-Up

Processing anomalies arise when a Receiver Actor cannot perform an activity required by the applicable Transaction Definition. Examples include an unauthorized sender, an unsupported declared use case, an unprocessable required information object, insufficient information to identify the patient, or unresolved required Context Instances. The absence of optional information does not, by itself, establish a processing failure.

An anomaly does not necessarily establish rejection. Its effect depends on the processing requirements of the Shared Activity.

When a required workflow status report cannot be generated or delivered, the reporting omission is distinct from the originating Transaction’s processing outcome. An originating system that does not receive an expected correlated workflow status report must treat the outcome as unconfirmed rather than infer success or failure.

The applicable Transaction Definition specifies any reporting deadlines, unsuccessful-report handling, follow-up, and treatment of late correlated reports. The Framework does not impose a universal 60-minute deadline.

## 3.4.6 Provenance Across the Processing Lifecycle

Provenance provides a way to document independently attributable activities performed during the Transaction lifecycle. It is not a separate processing stage. Provenance activities may occur during information creation, assembly, transmission, delivery, receipt, acceptance, rejection, and subsequent processing.

Recording and exchanging structured Provenance information is an advanced interoperability capability that many systems do not currently implement. The MAP Framework supports progressive adoption of this capability and treats Provenance recording and exchange as optional unless explicitly required by the applicable Transaction Definition.

A Provenance assertion identifies what activity occurred, the information objects affected, the participating agents, and relevant times. Provenance records what actually occurred and identifies the participating agents; it is not inferred solely from the technical functions a system performs.

The applicable Transaction Definition specifies which Provenance activities, if any, must be recorded and shared.
