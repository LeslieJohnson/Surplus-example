## ModalBase.js
This serves as an anchor or placeholder for displaying `Modal`. It
hides the modal initially by setting the `displayModal` function,
which is used by the modal's CSS display style property.

It creates a `Modal` child component, and sets several properties
before returning it. The `tabIndex` property and `focus` function
probably are not needed.

The `node.style.width` and `node.style.display` properties are set to
`S.data()` streams so they will be updated automatically with their
state changes.
