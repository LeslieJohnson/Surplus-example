## SideNav.js
The SideNav menu opens with the `TopNav` hamburger menu, and closes
with its own clickable X div.

The `myside` variable holds the `Surplus` JSX nodes rather than
returning the outer node directly. This is to allow properties of the
outer node to be manipulated, such as the `displayState()`.

The menu is made up of `MenuItem` components. Each `MenuItem` is given
a `size` property which used by the modal that is invoked when
selected. The child text node is used to select both the key in the
`labeledText` object and filename to be read into the modal.

