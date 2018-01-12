
## App.js

App is the entry point and does little else other than import
component modules, and create an `S` root node. The components and
their ordering create the main display page, which in this Single Page
Application is the whole app (most of which is hidden at this point).


### Modules and Components
Though the app is made of purely modular components, most were
isolated from other code as my development evolved. Eventually,
everything became a module with a purely functional component in
it.

With a more complex app, I'd create an `index.js` module that imports
and exports these components, but no need here.

There are more components than these seven. These are the top level
components, out of 15 in all.

All components in my app are ES6 modules, in addition to modules
that are not components, such as objects with text arrays.
