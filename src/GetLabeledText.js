import S from 's-js'
import * as Surplus from 'surplus'
import {langIndex} from './langIndex.js'
import {labeledText as lt} from './labeledText.js'

export default function GetLabeledText (props) {
  let textNode = <div className='msg' />
  let label = props.children[0]
  textNode.innerHTML = lt[label][langIndex() + 2]
  return (
    <div className='labeledtext'>
      <div className='labeled'>{lt[label][langIndex()]}</div>
      {textNode}
    </div>
  )
}
