# 0.5 Open Issues and Resolution Tracking

The MAP Framework maintains a transparent record of unresolved technical, architectural, and implementation questions that may require additional analysis, implementation experience, or consensus decisions.

Open issues are documented in the MAP Framework Open Issues Register, maintained as a separately downloadable companion resource. Each issue identifies the affected Framework sections or supporting artifacts, the question requiring resolution, its current status, and the eventual resolution and decision date.

**Governance Rule:** Open issues are informative. Inclusion in the Open Issues Register does not suspend, modify, or supersede existing normative requirements. Until an issue is formally resolved and resulting changes are incorporated into the applicable specification or supporting artifact, the currently established requirements remain in effect.

## Current Open Issues

### MAP-OI-001 — IHE MHD SubmissionSet Profile Alignment

**Status:** Open

**Affected artifact:** `MAPSubmissionSetList` v0.1.0, DirectTrust Terminology and Artifacts Package.

Determine whether the draft MAP SubmissionSet List profile should formally derive from the IHE MHD SubmissionSet profile or continue to derive from FHIR List while explicitly incorporating applicable MHD constraints.

The analysis should address typed `List.identifier` slices for `SubmissionSet.uniqueId` and `SubmissionSet.entryUUID`, IntendedRecipient metadata, permitted membership references, and compatibility with MAP Collection Bundle packaging.

**Resolution:** Pending further technical analysis and implementation experience.
