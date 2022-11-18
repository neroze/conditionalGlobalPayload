# conditionalGlobalPayload
Use case testing

# use case:
A shared component which should able to update any remote request with some extra data.
ie: component has a form with 2 fields pool and machine. When a form is submitted with pool and machine value, it should about saved as extra payload data. 
The saved data should be auto appened to any remote request payload onwards.

#solutions
1. Extend Remote Request API to save global extra payload 
2. If global extra payload is available, attach it to current request payload
