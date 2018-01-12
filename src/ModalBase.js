import S from 's-js'
import * as Surplus from 'surplus'
import Modal, {modalWidth} from './Modal.js'

export const displayModal = S.data('none')

export default function ModalBase () {
  let node = <Modal />
  node.tabIndex = 1
  node.focus()
  node.style.width = modalWidth()
  node.style.display = displayModal()
  return (
    node
  )
}
