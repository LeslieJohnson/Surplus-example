import S from 's-js'
import * as Surplus from 'surplus'
//import {textStrings as txt} from './textStrings.js'
//import {langIndex} from './langIndex.js'
//import FetchHtmlText from './FetchHtmlText.js'
import {displayModal} from './ModalBase.js'

const close = () => {
  displayModal('none')
}
export const modalTitle = S.data('')
export const modalMsg = S.data('')
export const modalWidth = S.data('40%')

export default function Modal(props) {
  return (
    <div className="modal-content">
      <div className="modal-header">
        <div>{modalTitle()}
          <span onClick={close} className='closemodal'>{String.fromCharCode(215)}</span>
        </div>
      </div>
      <div className="modal-body">
        <p>{modalMsg()}</p>
      </div>
      <div className="modal-footer">
      </div>
    </div>
  )
}
