import S from 's-js'
import * as Surplus from 'surplus'
import {textStrings as txt} from './textStrings.js'
import FetchHtmlText from './FetchHtmlText.js'
import {langIndex} from './langIndex.js'
import Dropdown from './Dropdown.js'
import MenuItem from './MenuItem.js'

export const displayState = S.data('none') // S.data('none')
const close = () => {
  displayState('none') // 'none'
}
export default function SideNav(props) {
  let myside = <div className='sidenav'>
  <div></div>

  <MenuItem size='840px' >calendar</MenuItem>
  <MenuItem size='370px' >readings</MenuItem>
  <MenuItem size='60%' >pastors</MenuItem>
  <div><hr/></div>
  <MenuItem size='30%' >confession</MenuItem>
  <MenuItem size='30%' >adoration</MenuItem>
  <div><hr/></div>
  <MenuItem size='60%' >sick</MenuItem>
  <MenuItem size='60%' >troops</MenuItem>
  <MenuItem size='40%' >vocations</MenuItem>
  <div><hr/></div>
  <MenuItem size='60%' >gift</MenuItem>
  <MenuItem size='60%' >family</MenuItem>
  <MenuItem size='60%' >prayrosary</MenuItem>
  <div><hr/></div>
  <MenuItem size='40%' >knights</MenuItem>
  <MenuItem size='40%' >maidens</MenuItem>
  <MenuItem size='40%' >firstfriday</MenuItem>
  <div onClick={close} style="font-size: 2em; padding: 0 0 0 0.3em;">{String.fromCharCode(215)}</div>
  </div>
  myside.style.display = displayState() //display
  return(
    myside
  )
}
