## Dropdown.js
`TopNav` uses this for creating a list of dropdown menus in its menubar.

The text label is passed in from `TopNav` as `props.name`. 

Any number of children are passed from `TopNav` as `content`
nodes. Each child becomes a `MenuItem`.

Each content node is a `props.textContent` string
that is passed to `MenuItem`. `MenuItem` uses the string both as a property
key from `labeledText` to get a label, and
as a file name for the modal text content. See `MenuItem` for details.

A clicked menu item displays a `Modal`, and
Modal width is passed as `props.size`. This width will be overridden
for small screens like mobile devices.
