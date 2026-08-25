---
title: Mapping Endpoint Use Case to SubmissionSet.contentTypeCode Metadata
---

# Mapping Endpoint Use Case to SubmissionSet.contentTypeCode Metadata

This chapter describes the work that must be done to tie the SubmissionSet.contentTypeCode choices to one or more endpoint use case codes and the endpoint’s capability declaration document.

## Creating Mapping for Endpoint Use Case Codes

There is one key consideration when establishing the mapping guidance between the Endpoint Use Case Code(s) and the SubmissionSet.contentTypeCode(s). The mapping that goes from SubmissionSet.contentTypeCode to Endpoint Use Case code (one direction only) and there is a very important rule. Each SubmissionSet.contentTypeCode can map to one and only one Endpoint Use Case Code.

The clearest way to represent the relationship between Endpoint Use Case and SubmissionSet.contentTypeCode is to present the relationship reading from left to right.

## Complexity Considerations

A key consideration for adoption is minimizing complexity for adopters. The simplest, clearest design choice is to map each SubmissionSet.contentTypeCode to a single Endpoint Use Case code.
