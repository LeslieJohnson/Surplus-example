import S from 's-js'
import * as Surplus from 'surplus'
import {filelist} from '../public/gallery/filelist.js'
/**
   Display a slideshow of photo images.
 */

// Init image elements and indexes into the picture file list.
let current = <img width='900' />,
  previous = <img />,
  next = <img />,
  picIndex = S.data(0), // Index to initial picture in array.
  nextIndex = S.data(1),
  prevIndex = S.data(filelist.length - 1)

current.position = 'absolute'
// Hander for right chevron or right swipe.
let nextPic = () => {
  picIndex() >= filelist.length - 1 ? picIndex(0) : picIndex(picIndex() + 1)
  previous.src = current.src
  current.src = next.src
  nextIndex(picIndex() >= filelist.length - 1 ? 0 : picIndex() + 1)
  // prefetch next pic
  fetchPic('./gallery/' + filelist[nextIndex()], next)
}
// Handler for left click or swipe.
let prevPic = () => {
  picIndex() <= 0 ? picIndex(filelist.length - 1) : picIndex(picIndex() - 1)
  next.src = current.src
  current.src = previous.src
  prevIndex(picIndex() <= 0 ? filelist.length - 1 : picIndex() - 1)
  fetchPic('./gallery/' + filelist[prevIndex()], previous)
}

let fetchPic = (name, node) => { // Pic filename, and node to load into.
  return (fetch(name, {cache: 'public, max-age=0'}) // Cache if possible.
    .then((res) => { return res.blob() })
    .then((myBlob) => {
      let url = URL.createObjectURL(myBlob)
      node.src = url
      node.alt = name // File name. A better alt text would be nice.
    })
  )
}
// Initialize current pic first, then others in the background.
fetchPic('./gallery/' + filelist[picIndex()], current)
  .then(fetchPic('./gallery/' + filelist[nextIndex()], next))
  .then(fetchPic('./gallery/' + filelist[prevIndex()], previous))

// Use swipe on devices that use touch events. Record swipe start, end.
let sStart = 0,
  sEnd = 0
let swipeStart = (e) => {
  sStart = e.touches[0].screenX
}
// End of swipe is where we decide action.
let swipeEnd = (e) => {
  sEnd = e.changedTouches[0].screenX
  if (diff(sStart, sEnd) > 45) { // ignore accidental changes
    sStart > sEnd ? prevPic() : nextPic() // swiped left or right?
  }
}
// Difference between start and end of swipe ignoring direction.
let diff = (start, end) => {
  let df = start > end ? start - end : end - start
  return df
}
// Construct the containing element, with event listeners.
let left = <span onClick={prevPic} className='chevron left' />,
  right = <span onClick={nextPic} className='next chevron right' />,
  container = <div className='container' />,
  prespan = <span id='previous'>{left}</span>,
  nextspan = <span id='next'>{right}</span>,
  pic = <div className='picture'>{current}</div>

pic.addEventListener('touchstart', swipeStart)
pic.addEventListener('touchend', swipeEnd)

export default function Pictures () {
  pic.appendChild(prespan) // left chevron
  pic.appendChild(nextspan) // right chevron
  container.appendChild(pic)
  return (container)
}
