import S from 's-js'
import * as Surplus from 'surplus'
import MenuItem from './MenuItem.js'
/**
   TopNav uses this for dropdown menus. Each child property is a MenuItem.
   Size (width) is optional from props. Otherwise the default is taken.
   Child content elements are used for each menu item of the dropdown,
   and the number is unlimited.
   See TopNav for details and examples.
 */
export default function Dropdown(props) {
  let content = <div className='dropdown-content'></div>
  // Fill in content element with child menus.
  if (props.children.length) {
    props.children.forEach(p => {
      if(p.size) { // Prop has a width parameter.
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
