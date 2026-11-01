# 4.4 Endpoint Discovery and Capability Interpretation

Exchange partners need a way to identify appropriate destinations and understand the capabilities of those destinations.

Directory services, including the DirectTrust Directory where applicable, may support endpoint discovery and provide information useful for determining potential exchange compatibility.

Directory attributes such as SERV_DESC may communicate human-readable information about the services associated with an endpoint.

An endpoint operator SHOULD make its published capability description reasonably easy for prospective exchange partners to locate. Where appropriate, a Directory entry, organizational website, or trading partner onboarding resource may provide a link to the description.

The MAP Framework does not require a particular automated capability discovery mechanism.

A capability description represents the capabilities declared by its publisher. Exchange partners may also use established agreements, configuration information, implementation experience, and applicable exchange policies to determine whether a particular transaction can be performed.

A capability description does not independently establish that an endpoint is authorized to receive particular information or to act on behalf of an Information Recipient Organization.
