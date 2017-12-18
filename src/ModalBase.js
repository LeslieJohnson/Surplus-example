import S from 's-js'
import * as Surplus from 'surplus'
import Modal from './Modal.js'
import {modalWidth} from './Modal.js'

export const displayModal = S.data('none')

export default function ModalBase() {
  let node=<Modal></Modal>
  node.tabIndex = 1
  node.focus()
  node.style.width=modalWidth()
  node.style.display=displayModal()
  //console.log('display state: ',node.style.display)
  return(
    node
  )
}
