import S from 's-js'
import * as Surplus from 'surplus'
import TopNav from './TopNav.js'
import Header from './Header.js'
import Intro from './Intro.js'
import Pictures from './Pictures.js'
import News from './News.js'
import Events from './Events.js'
import Footer from './Footer.js'
/**
   It all starts here. The entry point to the application. Index.html
   will import the bundle that contains this, and provide the document
   body that this appends as a child.

   The top level components are introduced here. Order is important!
 */
let view = S.root(() =>
  <div className='App'>
    <div className='main'>
      <TopNav/>
      <Header/>
      <Intro/>
      <Pictures/>
      <News/>
      <Events/>
      <Footer/>
    </div>
  </div>
)
document.body.appendChild(view)
