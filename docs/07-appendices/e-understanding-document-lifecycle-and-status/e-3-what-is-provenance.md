# E.3 What Is Provenance?

Provenance records the origin, responsible agents, relevant context, and completed activities affecting an information object across its lifecycle. A provenance assertion identifies **what happened** (activity), **what was affected** (target), **who or what participated** (agent), **how each agent participated** (participation type or role), and **when the activity happened and was recorded**.

A system may authoritatively assert activities it performed or can reliably observe. Activities outside its purview should be represented through assertions from participants positioned to know what happened, preserving their attribution rather than reasserting them as first-hand local observations.

Provenance does not by itself establish clinical accuracy, authorization, consent, or workflow acceptance. Document lifecycle status, workflow status, and provenance assertions answer different questions.

In FHIR R4, `Provenance.occurred[x]` identifies when the activity happened and `Provenance.recorded` identifies when the assertion was recorded. `agent.who` identifies the participant, `agent.type` the participation type, `agent.role` may describe function or security role, and `agent.onBehalfOf` the represented party where applicable.

**Within-system activities:** creation, amendment, signing, assembly, storage, import, and other actions performed or reliably observed by the local system.

**Exchange activities:** transmission, receipt, delivery, transformation, acceptance, or rejection may be known by different exchange participants. The Transaction Definition specifies which of these must be reported and by whom. Receipt is not acceptance; acceptance or rejection establishes a workflow disposition only when applicable.

**Outside-system activities:** preserve the original assertions and their agent attribution; do not imply local first-hand observation.

> Terminology tables and code-system validation remain subject to Author review against the October 15 provenance draft.
