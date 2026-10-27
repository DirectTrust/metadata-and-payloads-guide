# 2.5.3 Multi-Transaction Workflows

A business workflow may combine a request, delivery of information, and conditional status reporting. Each transaction is independently identified and has its own Sender/Receiver responsibilities. A workflow-status report describes the acceptance or rejection of an originating structured payload as specified by its TX Definition; it does not by itself prove completion of subsequent business actions.

When a TX8 workflow-status report applies, the disposition is of the **whole originating workflow unit**, not an independently chosen subset of its included objects.
