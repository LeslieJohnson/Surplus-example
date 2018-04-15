import * as Surplus from 'surplus'
import {textStrings as txt} from './textStrings.js'
import {langIndex, toggleLang} from './langIndex.js'
import Dropdown from './Dropdown.js'
import SideNav, {displayState} from './SideNav.js'
import ModalBase from './ModalBase.js'

// Give topNav some opacity when scrolled down past 30px.
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    document.getElementsByClassName('topNav')[0].className = 'topNav opaque'
  } else {
    document.getElementsByClassName('topNav')[0].className = 'topNav'
  }
})
const toggleSide = () => {
  displayState() === 'block' ? displayState('none') : displayState('block')
}
/** TopNav is fixed at the top of the page, so it acts an an anchor to
   Components that don't scroll with the rest of the page content.  It
   has a dual purpose, one being a navbar displayed at the top of the
   page, and the other anchoring dropdown menus, as provided by
   its child component Dropdown with parameters and children.  */
export default function TopNav () {
  return (
    <nav className='topNav'>
    {/* Horizontal menu, starting with the hamburger 'button'. */}
    <ul>
      <span className='menu' onClick={toggleSide}>
        <li className='burger dropbtn' >☰&nbsp;</li>
      </span>
      <li>
        {/* Dropdown children invoke modals on selection. */}
        <Dropdown name={txt.masstimes[langIndex()]}>
          {/* size is the width of the modal invoked. Mobile displays will
              override this value in Listings.js and MenuItem.js */}
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
      {/* This toggles the entire site's language content. It's always displayed. */}
      <li className='dropbtn' title={txt.toggle[langIndex()]} onClick={toggleLang}>{txt.language[langIndex()]}</li>
    </ul>
    {/* SideNav menubar is hidden until invoked. */}
    <SideNav />
    {/* Hidden until invoked. ModalBase is here for display fixed anchor point. */}
    <ModalBase className='modal' />
  </nav>)
}
