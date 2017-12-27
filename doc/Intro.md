## Intro.js
The `Intro` component displays an introduction message taken from the `welcome.html`
file in the selected language.

At first glance it would appear that the message doesn't change when
another language is selected, but it does because `FetchHtmlText`
notices the `langIndex()` change.
