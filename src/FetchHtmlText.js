import S from 's-js'
import * as Surplus from 'surplus'
import {langIndex} from './langIndex.js'

export default function FetchHtmlText (props) {
  const lang = ['EN', 'ES'] // Directory names.
  let node = <div className='loadText' />
  fetch(`./${lang[langIndex()]}/${props.children[0]}.html`,
        {cache: 'no-cache, no-store, must-revalidate'})
    .then(resp => resp.text())
    .then(text => node.innerHTML = text)
  return (node)
}
