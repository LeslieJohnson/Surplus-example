## Modal.js
There are several `S.data()` streams and CSS classes used by this
component.

The obviously named `close` function uses the S stream `displayModal` from
`ModalBase`, which sets the modal's CSS display style to \‘none\’.

The `modalTitle` and `modalMsg` data streams are initially empty, to
be filled in by the `Listings` and `MenuItem` components when invoked.

The `modalTitle` div element has the Unicode \‘X\’ close button and
the title for this modal.

There is a placeholder for a footer which is currently unused.
