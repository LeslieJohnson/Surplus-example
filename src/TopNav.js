import S from 's-js'
import * as Surplus from 'surplus'
import {textStrings as txt} from './textStrings.js'
import FetchHtmlText from './FetchHtmlText.js'
import {langIndex, toggleLang} from './langIndex.js'
import Dropdown from './Dropdown.js'
import SideNav from './SideNav.js'
import {displayState} from './SideNav.js'
import ModalBase from './ModalBase.js'
import {displayModal} from './ModalBase.js'

// Give topNav some opacity when scrolled down past 30px.
window.addEventListener('scroll',() => {
  if(window.scrollY > 30) {
    document.getElementsByClassName('topNav')[0].className='topNav opaque'
  } else {
    document.getElementsByClassName('topNav')[0].className='topNav'
  }
})
const openSide = () => {
  displayState('block')
}
export default function TopNav(props) {
  return <nav className='topNav'>
    <ul>
      <span className='menu' onClick={openSide}>
        <li className='burger dropbtn' >☰</li>
        <li>{txt.menu[langIndex()]}<Dropdown></Dropdown></li>
      </span>
      <li>
        <Dropdown name={txt.masstimes[langIndex()]}>
          <content size='50%'>sundaymass</content>
          <content size='50%'>weekdaymass</content>
        </Dropdown>
      </li>
      <li>
        <Dropdown name={txt.aboutUs[langIndex()]}>
          <content size='60%'>about</content>
          <content size='60%'>aboutLeo</content>
        </Dropdown>
      </li>
      <li className='dropbtn' onClick={toggleLang}>{txt.language[langIndex()]}</li>
    </ul>
    <SideNav></SideNav>
    <ModalBase className='modal'></ModalBase>
  </nav>
}
