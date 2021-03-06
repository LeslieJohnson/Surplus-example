## TopNav.js
This is a relatively simple Top Navigation bar, or rather a misnamed
menubar. Since I have other menus in another context I'll leave
the name as is.

An important aspect of this component is its fixed position placement
at the top of the page as set in `App.css`. The `SideNav` and
`ModalBase` components are children of `TopNav` to take advantage of
this fixed position, even though they are unrelated otherwise, and
hidden until opened.

The background is initially transparent, but when a non-contrasting
background underneath scrolls under it, the text would be
obscurred. To prevent this, a more opaque style is added when the
underlying window is scrolled up more than 30px, and removed when not.

NOTE: The `window.addEventListener` event handler is plain old
JavaScript and DOM. Platforms with virtual DOMs like `React` can't do
this directly, but `Surplus` doesn't get in the way.

Menu elements use `onClick` to act as buttons, and either produce
dropdown menus or invoke actions.

`TopNav` takes text for menu names and content from `textStrings`. As
in the \“hello world\” example, there is an object key with an array of
strings. `langIndex()` selects the text to display. This pattern is
repeated thoughout the app.

The `SideNav` component exports a function that controls its
visibility, called `displayState` which is controlled by the
hamburger menu icon. It opens or toggles this display with
`openSide()` and `toggle()` functions.

Another important toggle is the `li` element that controls
`toggleLang()`, a function imported from `langIndex.js` which also
exports the S data function `langIndex()`. A click on this element
changes all displayed text to another language.





