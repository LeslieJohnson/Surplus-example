## Pictures.js
This is a slideshow of pictures, with some interesting features. It's the
largest component in the app.

### The image files
The imported `filelist.js` has an array of image filenames like:
```javascript
export const filelist = [
    'somepic.jpg',
    'anotherpic.jpg',
    ...
]
```
These image files are in the `gallery` directory on the server. The code looks for
file names in this filelist, and finds them in the directory. As image
files are added, the filelist object must be edited manually, because
JavaScript browser clients can't read the server's filesystem directory to
construct the list.

### Displaying an image the easy way
Displaying a `jpg` photo image is as simple as creating an `img` node
and assigning a resource to its `src`, like so:
```jsx
let mypic = <img/>
mypic.src = 'pictures/mypic.jpg'
```
Here `mypic` is a node on the browser, and `mypic.jpg` is a file
that's loaded over a network from the server.

The problem with this approach is that loading new images, which can
be large, takes too much time for a mobile
device on a slow network. Preloading images in the background before
they're displayed is better.

### Prefetching images
Prefetching all images would be too much to handle, so I only use three.
`current`, `previous` and `next` are Surplus nodes that will
contain the images for display.

NOTE: Properties on Surplus nodes may be added and modified directly, as in
`current.position = 'absolute'`.

The `nextPic()` and `prevPic()` functions select a new picture as the
user cycles through the `filelist` array by clicking on chevrons or
swiping on touch-sensitive devices, and updating the array index
`picIndex()`, which cycles through the array to make it seem circular to the
user. The same is done for `prevIndex()` and `nextIndex()`.

With each click (or swipe) a new image is loaded. But the trick here
is that the newly loading image isn't the one the user sees. The user
sees an image that's *already* loaded, while a new one is fetched
asynchronously in the background.

The user can only select the previous or next image, as there is no
option for random selection. Prefetching these two unseen images
anticipates the user's next selection in either direction. This forms
a three image sliding window that moves across the array of pictures,
with the oldest dropped, the newest preloaded, and the user viewing
the one in the middle.

The users could easily outrun the prefetch, but hopefully they will
spend enough time looking at the selected pic to allow the prefetch to
catch up. Outrunning the prefetch doesn’t hurt, but clicking or
swiping has no effect until the image is loaded.

The `current`, `previous` and `next` views are initialized to contain
their respective images before any user interaction.

When `nextPic()` is invoked, the `current.src` image is copied to
`previous.src`. We know that it's already been loaded. In the same
way, `next` image content is copied to `current`, and `next.src` is
given new content by `fetchPic()`. The `current` node doesn't
change. Instead, `current.src` gets new content. Likewise with
`previous` and `next`. The indexes for the three nodes are updated,
and `next` has a new image loaded asynchronously in the background.

`prevPic()` is identical to `nextPic()`, except it cycles in the other direction.

`fetchPic()` does what it says, using ES6 `fetch`, which returns a
promise. Note that the actual update is done inside this function
closure after it returns. This allows the operation to work in the
background, asynchronously.

When the page first loads, the user hasn't yet selected an image, so
nothing would be displayed without initialization. We initialize our
three image nodes. The `current` image is loaded first, followed by
the other two so that the user only has to wait for the first to see
an image on startup.

### Swipe event handler
For devices that support touch events, swiping to select previous and
next images is convenient. Attaching the right event handlers to
invoke `prevPic()` and `nextPic()` does the trick.

NOTE: There are libraries like `hammer.js` that provide functions for
this, but they also add lots of extra code for features I don't
need. 

TIP: Chrome's debugger let me examine events for clues about how to use
them. Chrome on my Linux laptop doesn't support touch events, but
their debugger simulates them if a smartphone emulator is selected.

I use `swipeStart()` and `swipeEnd()` to capture the coordinates for the
user action. A little `diff` helper tells me how far across the screen
they swiped regardless of direction in the X coordinate. `swipeEnd()`
is where things happen. The last line looks at the direction of the
swipe to invoke the proper action.

I noticed that almost any touch will invoke an X coordinate change,
which can lead to annoying picture changes while swiping up or
down. To avoid this I ignore X coordinate changes smaller than an
arbitrary pixel value picked by experimentation.

### Attaching the touch event handler
When working with JSX it's easy to fall for the illusion that you're
working with HTML, when in fact it's all JavaScript. Some event
handlers like `onClick` are effectively passed through, but others
have to directly attached to a DOM node. I tried `onTouch` but it had
no effect, so I went down a level of abstraction to capture the DOM event.

TIP: I always try to understand at least one level of abstraction below
the one I'm using. It's a good rule of thumb for all software development.

With Surplus (and other JSX implementations) this is done by creating
a JavaScript variable and assigning a Surplus node to it, like so:
```jsx
let foo = <div/>
foo.addEventListener(...)
```
So `foo` can invoke the `addEventListener()` function while a
simple `<div/>` by itself could not. It's still a Surplus node, but
assigning it to a JavaScript variable lets us add and modify its
properties. This is why the `Picture` component
returns JavaScript rather than more readable JSX.

The original (before adding the touch events) code looked like this:
```jsx
return(
    <div className='container'>
      <div className='picture'>
        <span id='previous'>
          <span onClick={prevPic} className='chevron left'></span>
        </span>
        <span id='next'>
          <span onClick={nextPic} className='next chevron right'></span>
        </span>
        {current}
      </div>
    </div>
)
```
I converted the JSX into a series of JavaScript variables containing
Surplus nodes. The event listeners are then added to `pic` (with the
element containing `current`), and the return node is constructed by
appending child nodes so that it all behaves like the JSX shown above.

After converting to Javascript nodes and adding event listeners it looks like this:

```jsx
// Construct the containing element, with event listeners.
let left = <span onClick={prevPic} className='chevron left'></span>, <1>
    right = <span onClick={nextPic} className='next chevron right'></span>,
    container = <div className='container'></div>,
    prespan = <span id='previous'>{left}</span>,
    nextspan = <span id='next'>{right}</span>,
    pic = <div className='picture'>{current}</div>

pic.addEventListener('touchstart',swipeStart) <2>
pic.addEventListener('touchend',swipeEnd) <3>

export default function Pictures() {
  pic.appendChild(prespan) // left chevron <4>
  pic.appendChild(nextspan) // right chevron <4>
  container.appendChild(pic)
  return(container) <5>
}
```
<1> Each JSX element is now a node referenced by a variable.

<2> The `touchstart` event handler has a node to attach to.

<3> `touchend` has one too. Separate handlers for different events.

<4> The clickable chevrons are for `previous` and `next` along with the touch events.

<5> The `container` is just like the old JSX return node, but with added event handlers.
