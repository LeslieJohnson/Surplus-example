import S from 's-js'
import * as Surplus from 'surplus'
import {textStrings as txt} from './textStrings.js'
import Listings from './Listings.js'
import {langIndex} from './langIndex.js'

export default function Events() {
  return(
    <div className='events'>
      <div>
        <span className='title'>{txt.events[langIndex()]}</span>
        <hr/>
        <Listings type='events'></Listings>
      </div>
    </div>
  )
}
