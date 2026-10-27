# 3.9.5 TX8 Terminates Workflow-Status Chaining

TX8 SHALL NOT request or require a subsequent TX8 Workflow Status transaction in response to itself. TX8 Workflow Activity Task SHALL NOT request structured payload acceptance reporting and SHALL NOT identify Workflow Status Update Endpoints for the purpose of requesting another TX8. Direct final-destination delivery notification remains applicable to TX8 Direct message when requested. The resulting pattern is: originating transaction → TX8 → optional Direct delivery notification for TX8 → stop.
