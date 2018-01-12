import S from 's-js'
import * as Surplus from 'surplus'
import MenuItem from './MenuItem.js'

export const displayState = S.data('none')
const close = () => {
  displayState('none')
}
export default function SideNav() {
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
  <MenuItem size='40%' >gift</MenuItem>
  <MenuItem size='60%' >family</MenuItem>
  <MenuItem size='60%' >prayrosary</MenuItem>
  <div><hr/></div>
  <MenuItem size='40%' >knights</MenuItem>
  <MenuItem size='40%' >maidens</MenuItem>
  <MenuItem size='40%' >firstfriday</MenuItem>
  <div onClick={close} style="font-size: 2em; padding: 0 0 0 0.3em;">{String.fromCharCode(215)}</div>
  </div>
  myside.style.display = displayState()
  return(
    myside
  )
}
