import * as Surplus from 'surplus'
import {textStrings as txt} from './textStrings.js'
import {langIndex} from './langIndex.js'
import Modal from './Modal.js'
import {displayModal} from './ModalBase.js'
import {modalTitle, modalMsg} from './Modal.js'
import FetchHtmlText from './FetchHtmlText.js'
import {modalWidth} from './Modal.js'

export default function MenuItem(props) {
  let label = props.children
  let size = props.size
  let msg = txt[label]
  let html = <FetchHtmlText>{label}</FetchHtmlText>
  let clickme = () => {
    if(window.screen.width > 768) {
      modalWidth(size)
    } else {
      modalWidth('98%')
    }
    modalTitle(msg[langIndex()])
    modalMsg(html)
    displayModal('block')
  }
  return(
  <div className='menuitem' onClick={clickme}>
    {msg[langIndex()]}
  </div>
  )
}
