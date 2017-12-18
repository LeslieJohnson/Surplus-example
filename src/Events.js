import S from 's-js'
import * as Surplus from 'surplus'
import {textStrings as txt} from './textStrings.js'
import List from './Listings.js'
import {langIndex} from './langIndex.js'

export default function Events(props) {
  return(
    <div className='events'>
      <div>
        <span className='title'>{txt.events[langIndex()]}</span>
        <hr/>
        <List type='events'></List>
      </div>
    </div>
  )
}
