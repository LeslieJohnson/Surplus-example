import S from 's-js'
import * as Surplus from 'surplus'
import {filelist} from '../public/gallery/filelist.js'

let picIndex = S.data(0) // Index to initial picture in array.

let current = <img width='900'/>,
    previous = <img/>,
    next = <img/>,
    nextIndex = S.data(1),
    prevIndex = S.data(filelist.length-1)

current.position = 'absolute'
let nextPic = () => {
  picIndex()  >= filelist.length-1 ? picIndex(0): picIndex(picIndex()+1);
  // If we have a pre-fetched img, use it. Else, fetch one.
  if(next.src) {
    console.log('cached: ',next)
    previous.src = current.src // current pic becomes previous pic
    current.src = next.src
    next = <img/>
  } else {
    console.log('Oops, fetch:',picIndex()) // shouldn't happen
    fetchPic('./gallery/'+filelist[picIndex()],current)
  }
  nextIndex(picIndex() >= filelist.length-1 ? 0 : picIndex()+1)
  console.log(picIndex(),'next:',nextIndex())
  // prefetch next pic
  fetchPic('./gallery/'+filelist[nextIndex()],next)
}
let prevPic = () => {
  picIndex()  <= 0 ? picIndex(filelist.length-1): picIndex(picIndex()-1);
  if(previous.src) {
    console.log('cached:',previous)
    next.src = current.src
    current.src = previous.src
    previous = <img/>
  } else {
    console.log('Oops',picIndex())
    fetchPic('./gallery/'+filelist[picIndex()],current)
  }
  prevIndex( picIndex() <= 0 ? filelist.length-1 : picIndex()-1)
  console.log(picIndex(),'prev:',prevIndex())
  fetchPic('./gallery/'+filelist[prevIndex()],previous)
}
let fetchPic = (name,node) => {
  return (fetch(name,{cache: "public, max-age=0"})
    .then((res) => {return res.blob()})
    .then((myBlob) => {
      let url = URL.createObjectURL(myBlob)
      // console.log(url)
      node.src = url
      node.alt = name
    })
  )
}
// Initialize current pic first.
fetchPic('./gallery/'+filelist[picIndex()],current)
  .then(fetchPic('./gallery/'+filelist[nextIndex()],next))
  .then(fetchPic('./gallery/'+filelist[prevIndex()],previous))

// Use swipe on devices that use touch events.
let sStart = 0,
    sEnd = 0
let swipeStart = (e) => {
  //console.log('swipeStart:',e.touches[0].screenX)
  sStart = e.touches[0].screenX
}
let diff = (start,end) => {
  let df = start > end ? start-end : end-start
  //console.log('diff',df)
  return df
}
let swipeEnd = (e) => {
  //console.log('swipeEnd:',e.changedTouches[0].screenX)
  sEnd = e.changedTouches[0].screenX
  if(diff(sStart,sEnd) > 45) {
    sStart > sEnd ? prevPic() : nextPic()
  }
}
/* See Pictures.md for an explaination of this ugliness.
   The pic node has to be a variable in order to attach the
   touch event listeners.
 */
let left = <span onClick={prevPic} className='chevron left'></span>,
    right = <span onClick={nextPic} className='next chevron right'></span>,
    container = <div className='container'></div>,
    prespan = <span id='previous'>{left}</span>,
    nextspan = <span id='next'>{right}</span>,
    pic = <div className='picture'>{current}</div>

pic.addEventListener('touchstart',swipeStart)
pic.addEventListener('touchend',swipeEnd)

export default function Pictures() {
  pic.appendChild(prespan)
  pic.appendChild(nextspan)
  container.appendChild(pic)
  return(container)
}

