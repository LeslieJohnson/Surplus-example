:toc: left

# Responsive Web App with Surplus
React is good. Surplus is better, faster and easier.

## Intro

This is a JavaScript webapp using Surplus and S as a development
framework with no other libraries or platforms. It's modular with
purely functional components. No classes, and no `this` anywhere. It's
all built from scratch. 

My goal was to make a lightweight, fast and mobile-friendly reactive
app without any server code. The result is 226 lines of source code,
(including comments, minus text files), in 15 ES6
modules. That's less than half the lines in the CSS file. After
compression, the app bundle is 25K.

It's a Single Page App with lots of documentation and
annotations. It's not a demo, but a real working app.

It's *not* an `S` tutorial, but shows the power of `S` for tracking
and updating data bindings in the DOM, and `Surplus` as a component
framework. Take a look at [S](https://github.com/adamhaile/S) and
[Surplus](https://github.com/adamhaile/surplus) on Github to see how
they work.

## S and Surplus

[S](https://github.com/adamhaile/S) and
[Surplus](https://github.com/adamhaile/surplus) are written by Adam
Haile, and are separate projects on Github that work together.

`S` (aka S.js) is for reactive programming in JavaScript. When data
changes, \“S automatically updates downstream computations\” says the
Github page.

`Surplus` adds JSX web views to `S` applications, according to its
Github page. To me, it looks like a less complex `React` with better functionality.

### S.js

The idea behind `S` is wonderfully simple. There is no virtual DOM,
but data changes are tracked and the *real* DOM is updated
accordingly. `S` implements data binding with functions that use data
signals, rather than using variables. When a value is changed, signals
are sent to all components that depend on the value and are
automatically updated. 

This is a big deal because it greatly simplifies building and
understanding an app. Component lifecycles are gone. No
mounting/unmounting of components, because there is nothing to
mount. It's just the DOM. It's like `React` with a *whole unnecessary
middle layer removed* and replaced with something better.

Troubleshooting using the Chrome debugger is easier, because there's
no magic between what the debugger sees and the DOM. There are no
synthetic events or component lifecycle changes. All components can be
purely functional.

### Surplus

`Surplus` uses JSX to create Components that use `S`, and has
React-friendly keyword aliases and conventions. This is another big
plus for learning and portability. It's a React lookalike, but *not* a
workalike. Load times are quick (important for mobile), memory
footprint is small and it consistently runs the fastest
[benchmarks](https://github.com/krausest/js-framework-benchmark) of
any platform.

Read on and I'll show how it works in small but complete real app.

## Hello World -> Hola Mundo
There are nine `S.data()` functions in the app, used for modal and
navbar states, indexes into data arrays, and `CSS` property
values. When a new value (data signal) is passed to one of these
functions, `S` data binding updates any DOM properties that depend on
them, in all components.

For example, one `S.data()` value is used to index into dozens of
JavaScript arrays that contain text strings like so:

[source,jsx,numbered]
```jsx
const langIndex = S.data(0) // S returns a function initialized to 0
console.log(langIndex()) // 0 <- returns its value if no parameter passed.
const someText = ['hello ','hola ']
const otherText = ['world','mundo']
// JSX div displays text from array.
<div>
  {someText[langIndex()]} {/* 0 index == 'hello '*/}
  {otherText[langIndex()]} {/* 'world' */}
</div> // div element's text node is 'hello world'
...
langIndex(1) // DOM updates, now displays 'hola mundo'
```

TIP: Notice the C-style comment inside braces. This is how to
put comments within JSX, and is not Surplus-specific.

Changing this index results in another text string *in every DOM
element* that uses that index to get a string value. This can be a
text node, a `CSS` class value, an `href` string or anything else. My
trivial example shows one `div`, but if a hundred elements depended on
this index, they would all change. The `langIndex()` is `S`, and the
`div` in JSX is `Surplus`.

Because there is no virtual DOM, there are no Component Lifecycle
states, and no Synthetic Events. There *are* Components that, like
React, start with a capital letter. For compatibility with React,
keywords like `className` and `onClick` are aliased, but need not
be. Native DOM event handlers, classes, properties etc. work with
`Surplus` components seamlessly.

`Surplus` components look like the pure functional components in
`React` and `Inferno`. `JSX` is actually a standard separate from
`React`, and `Surplus` follows the standard.

## What is this App?
It's a website for my local Catholic church. The users like up-to-date
status and info, and pictures of events. Half of the parish speak
Spanish, so every label, message, dropdown, menu, etc. is bilingual
using the string array indexes described above, plus separate content
files. The live version can be seen at
[stleocenterville.org](http://stleocenterville.org).

Because I'm the only developer, design decisions and code are mine
alone. The server is from Network Solutions, which doesn't run `node`,
so all code runs on the client. I wanted a public-facing open source
app for others to use and for me to show as an example of my work, and
as the basis for this document.

It's pretty basic, with standard dropdown menus, a sidenav bar,
headers, footers, modals, event calendar and a picture
slideshow. There are 15 Components, each in a separate ES6
module. Other JavaScript files have text data and there is a directory
in each language for `html` content files. A `gallery` directory has
`jpg` pictures. A `utils` directory has some helper scripts for
generating `html` files from templates.

`App.css` was written by me from scratch, except where noted. I spent
a lot of effort on this, but details about it are outside of the scope
of this work. 

## Development environment
I'm a command line kind of guy, and Emacs is my IDE. Emacs does
everything an IDE does if it's setup right.

TIP: Get the `web-mode` Emacs package and use it for `html, js, jsx,
css` files along with `aggressive-indent-mode`. They both understand mixed
modes like embedded JSX and CSS in HTML. Add `fly-check`, and you'll
have automatic indenting and formatting, syntax highlighting and error
checking all on the fly. Check out `emmet-mode` too for shortcut tag generation in
JSX and HTML.

I use common JavaScript developer tools, like `git`, `npm`, `webpack` with
`babel` and others. The
`package.json` and `webpack.config.js` should look familiar to any
modern developer.

I use Arch Linux on a Lenovo W520. I also have a MacBook Pro, which
my wife says I can use after I **pry it from her cold, dead
fingers**. I've been using Linux since before kernel version 1.0 when
Linus Torvalds was still a grad student in Finland and `usenet` was
the thing. Unix before that.

NOTE: I'm not a Windows user. Development using `node` command line tools on
Windows can be done, but it's tricky. I only describe what works for me.

# Modules


include::App.adoc[]

include::langIndex.adoc[]

include::TopNav.adoc[]

include::Dropdown.adoc[]

include::MenuItem.adoc[]

include::ModalBase.adoc[]

include::Modal.adoc[]

include::SideNav.adoc[]

include::Header.adoc[]

include::Intro.adoc[]

include::FetchHtmlText.adoc[]

include::Pictures.adoc[]

include::News.adoc[]

include::Events.adoc[]

include::Listings.adoc[]

include::Footer.adoc[]

include::GetLabeledText.adoc[]