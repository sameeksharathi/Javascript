# Synchronous and Asynchronous Programming

**In Synchronous, response to one request is done at a time, back to back.**<br>
Page will remain blocked until a response is sent to the client. means no other server will be responded until one request is done.<br>

**In Asynchronous , response to multiple request is done at the same time.** <br>
Multiple clients can sent request to the server and will be responded as soon (including client's internet speed and the time server take to serve the request) when their work is done.<br>

- Any Computation we do requires processor for javascript engine to get the job done. <br>
- Many requests interact with things outside of the processor. example: theymay communicate over a network or request data from storage disk.<br>
- This is a lot slower than getting it from memory.<br>
- We don't want our processor to sit idle, when such things are happening.

- When you call a function that performs a long action, returns only when the action is finished until then it keeps the domain blocked (or stops the program for the time the action takes) in case of synochronous. In this case, we should use Asynchronous, So it can return the result.

## Ways to write Asynchronous Program:

1. Async / Awaits
2. Callbacks
3. Promises 