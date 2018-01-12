import S from 's-js'
import * as Surplus from 'surplus'
import {textStrings as txt} from './textStrings.js'
import {langIndex} from './langIndex.js'

export default function Header () {
  return (
    <header className='App-header'>
      <h1 className='App-title'>{txt.title[langIndex()]}</h1>
      <h2 className='App-subtitle'>{txt.subtitle[langIndex()]}</h2>
    </header>
  )
}
