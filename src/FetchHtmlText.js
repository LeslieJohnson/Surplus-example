import S from 's-js'
import * as Surplus from 'surplus'
import {langIndex} from './langIndex.js'

export default function FetchHtmlText(props) {
  const lang=['EN','ES'] // Directory names.
  let now = new Date().getTime()
  let node = <div className='loadText'></div>
  fetch(`./${lang[langIndex()]}/${props.children[0]}.html?${now}`)
    .then(resp => resp.text())
    .then(text => node.innerHTML = text)
  return(node)
}

