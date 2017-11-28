import S from 's-js'
import * as Surplus from 'surplus'
import {filelist} from '../public/gallery/filelist.js'

let picIndex = S.data(0) // Index to initial picture in array.
let picture = <img/>
picture.position = 'absolute'
let nextPic = () => {
  picIndex()  >= filelist.length-1 ? picIndex(0): picIndex(picIndex()+1);
  picture.src = './gallery/'+filelist[picIndex()]
}
let prevPic = () => {
  picIndex()  < 0? picIndex(filelist.length-1): picIndex(picIndex()-1);
  picture.src = './gallery/'+filelist[picIndex()]  
}
picture.src = './gallery/'+filelist[picIndex()] // Initial picture before user selections.

export default function Pictures(props) {
  return(
    <div className='container'>
      <div className='picture'>
        <span id='previous'>
          <span onClick={prevPic} className='chevron left'></span>
        </span>
        <span id='next'>
          <span onClick={nextPic} className='next chevron right'></span>
        </span>
        {picture}
      </div>   
    </div>
  )
}
