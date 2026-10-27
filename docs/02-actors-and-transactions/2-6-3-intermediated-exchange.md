# 2.6.3 Intermediated Exchange

```mermaid
flowchart LR
  S[Sender participant] --> I[Intermediary service] --> R[Receiver participant]
```

The intermediary is visible in the technical path but is not automatically the intended Receiver of the shared business transaction. Its duties depend on its applicable role and specifications.

This concept is part of the reusable MAP architecture; its detailed exchange obligations arise only where the Framework and an applicable transaction specification expressly assign them. In a UC IG, use-case choices are documented in the relevant UCTXDef rather than inferred from illustrative architecture.
