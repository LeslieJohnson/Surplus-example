import S from 's-js'
import * as Surplus from 'surplus'
import MenuItem from './MenuItem.js'

export default function Dropdown(props) {
  let content = <div className='dropdown-content'></div>
  if (props.children.length) {
    props.children.forEach(p => {
      if(p.size) {
        content.appendChild(
          <MenuItem size={p.size}>{p.textContent}</MenuItem>
          
        )
      } else {
        content.appendChild(
          <MenuItem>{p.textContent}</MenuItem>
        )
      }
    })
  }
  return (
  <div className='dropdown'>
    <div className='dropbtn'>{props.name}
      {content}
    </div>
  </div>
  )
}
