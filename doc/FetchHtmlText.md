## FetchHtmlText.js
Uses ES6 `fetch` to read text from a URI asynchronously. In this case
the URI is a file, but it could be another resource.

A `div` node is returned, but its `innerHTML` is filled in as it is
read from the HTTP `response` using fetch's promise.

The `langIndex()` data stream function's value is used to index the
`lang` array, which has the directory name for the file to be fetched.

The HTTP `request` parameters prevent caching, as file contents
are expected to change more often than fixed text strings.

NOTE: The `innerHTML` is set **dangerously** (in React-speak)
meaning that malicious content could come from an untrusted URI. Since
we're reading from our own files here, that's unlikely. There are no
condescending warnings about this. Sorry!

TIP: HTML tags in the fetched file are passed unmodified, so
styling, etc. works fine.
