import S from 's-js'
import * as Surplus from 'surplus'
import {newsStrings as news} from './newsStrings.js'
import {eventsStrings as events} from './eventsStrings.js'
import {langIndex} from './langIndex.js'
import {modalTitle, modalMsg} from './Modal.js'
import FetchHtmlText from './FetchHtmlText.js'
import {modalWidth} from './Modal.js'
import {displayModal} from './ModalBase.js'

export default function List(props) {
  const newsEvents = props.type === 'news'? news : events
  let div = <div></div>
  Object.keys(newsEvents)
        .forEach(key => {
          let clickMe = () => {
            console.log('click! ',key)
            let html = <FetchHtmlText>{key}</FetchHtmlText>
            modalWidth('60%')
            modalTitle(newsEvents[key][langIndex()])
            modalMsg(html)
            displayModal('block')
          }
          console.log('key: ',key)
          let child = <div className='listing' onClick={clickMe}>
          {newsEvents[key][langIndex()]}
          </div>
          //let child = <MenuItem size='70%'>{key}</MenuItem>
          let hr = <hr/>
          let date = <div className='date'>{newsEvents[key][langIndex()+2]}</div>
          div.appendChild(child)
          div.appendChild(date)
          div.appendChild(hr)
        })
  return(div)
}

