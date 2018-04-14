import * as Surplus from 'surplus'
import {textStrings as txt} from './textStrings.js'
import {langIndex} from './langIndex.js'
import {displayModal} from './ModalBase.js'
import {modalTitle, modalMsg, modalWidth} from './Modal.js'
import FetchHtmlText from './FetchHtmlText.js'

/**
   Create menu items with click handlers for display.

   Props.children is a single word of text. This text has two uses:
   The menu title is displayed from textStrings.js using the label as
   a key, and FetchHtmlText to find the filename to fetch for display
   when the menu item is clicked.
 */
export default function MenuItem (props) {
  let label = props.children,
      size = props.size,
      title = txt[label],
      html = <FetchHtmlText>{label}</FetchHtmlText>,
      clickme = () => {
        if (window.screen.width > 760) {
          modalWidth(size)
        } else {
          modalWidth('98%')
        }
        modalTitle(title[langIndex()])
        modalMsg(html)
        displayModal('block')
      }
  return (
    <div className='menuitem' onClick={clickme}>
      {title[langIndex()]}
    </div>
  )
}
