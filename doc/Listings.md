## Listings.js
Displays a list of News or Events. Since they share the same format, I
use the same component for both by setting the correct object from the props.type.

This is much like other menus, except that it has some extra
information to display. Because `News` and `Events` are so similar,
they share this component.

First `props.type` is used to set `newsEvents` to contain the
appropriate text objects. The `newsStrings.js` and `eventsString.js`
are each object literals with a series of property keys having an array
of strings.

A single `div` contains each listing as child elements.

The keys in the object file are iterated through, and an entry is made for
each. Because each entry is clickable, it gets its own click
handler. The click handler fetches its file content and displays a
modal. Note that this doesn't happen until the click, so there is no
prefetch (unlike `SideNav`). If a second item is clicked while the
modal is open, the same modal just displays new content rather than
creating a new one.

The number of listings is determined by the number of keys in
the object files, with no limit.

The text object files have four strings in each array, rather than two
as seen in other text object files. This is for additional messages
such as dates and notes. A numeric `2` is added to the language index to
select the right message. An even number index is for one language,
and odd for another. This could be extended for more text easily.

