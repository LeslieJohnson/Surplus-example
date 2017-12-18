import S from 's-js'
import * as Surplus from 'surplus'
import {newsStrings as news} from './newsStrings.js'
import {eventsStrings as events} from './eventsStrings.js'
import {langIndex} from './langIndex.js'
import {modalTitle, modalMsg} from './Modal.js'
import FetchHtmlText from './FetchHtmlText.js'
import {modalWidth} from './Modal.js'
import {displayModal} from './ModalBase.js'

/**
  Display a list of News or Events. Since they share the same format, we
  can use the same component for both, by setting the correct object by
   looking at the props.type.
 */
export default function List(props) {
  /* set a constant that contains the object with strings */
  const newsEvents = props.type === 'news'? news : events
  let div = <div></div>
  Object.keys(newsEvents)
        .forEach(key => {
          let clickMe = () => { // Each listing gets its own click handler.
            let html = <FetchHtmlText>{key}</FetchHtmlText>
            if(window.screen.width > 760) {
              modalWidth('60%')
            } else {
              modalWidth('98%')
            }
            modalTitle(newsEvents[key][langIndex()])
            modalMsg(html)
            displayModal('block')
          }
          let child = <div className='listing' onClick={clickMe}>
          {newsEvents[key][langIndex()]}
          </div>
          let hr = <hr/>
          let date = <div className='date'>{newsEvents[key][langIndex()+2]}</div>
          div.appendChild(child)
          div.appendChild(date)
          div.appendChild(hr)
        })
  return(div)
}

