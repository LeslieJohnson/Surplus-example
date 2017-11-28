import S from 's-js'
import * as Surplus from 'surplus'
import {textStrings as txt} from './textStrings.js'
import List from './Listings.js'
import {langIndex} from './langIndex.js'

export default function News(props) {
  return(
    <div className='news'>
      <div>
        <span className='title'>{txt.news[langIndex()]}</span>
        <hr/>
        <List type='news'></List>
      </div>
    </div>
  )
}
