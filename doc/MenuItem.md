## MenuItem.js
Used by `TopNav` and `SideNav` to create and display menu items.

The child text node passed in is used to display this component's
label, and is passed to `FetchHtmlText` to get a file
for the modal's display content.

Each instance of `MenuItem` gets its own click handler, which sets up
modal properties and invokes the modal for display. Note that
`FetchHtmlText` loads asynchronously before (hopefully) the element is
clicked. If not yet loaded, the modal will display without text, but
will fill in as it's read.

The `size` prop determines the width of the modal unless overridden
when a small screen width is detected.
