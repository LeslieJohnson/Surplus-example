## langIndex.js
This is used by every component that displays text in more than one
language. The `langIndex` data stream provides an index into text
arrays. When it changes, all displayed text changes too. Magic! Well,
`S` data binding magic anyway.

TIP: Compare this to `React` Component's `setState()`. With React,
each component has its own state, and its child components only update
theirs if `forceUpdate` is passed to `setState`. Here, any component
can use `langIndex` simply by importing it. `S` takes care of the data
binding.

The `toggleLang` function does what it says. It's invoked from the
`TopNav` menubar at the rightmost position.

Both of these functions are exported, and `langIndex()` is used by
most other components.

NOTE: This is not a component, but just a module with exports. Note
that it starts with lower case, which `Surplus` uses to distinguish
between Components (upper) and Elements (lower), like `React`. In this
case, it's neither, but Surplus won't treat it as a Component.
