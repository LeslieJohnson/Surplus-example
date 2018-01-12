import S from 's-js'
import * as Surplus from 'surplus'
import {textStrings as txt} from './textStrings.js'
import Listings from './Listings.js'
import {langIndex} from './langIndex.js'

export default function News() {
  return(
    <div className='news'>
      <div>
        <span className='title'>{txt.news[langIndex()]}</span>
        <hr/>
        <Listings type='news'></Listings>
      </div>
    </div>
  )
}
