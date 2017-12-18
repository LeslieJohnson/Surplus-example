import S from 's-js'
import * as Surplus from 'surplus'
import TopNav from './TopNav.js'
import Header from './Header.js'
import Intro from './Intro.js'
import Pictures from './Pictures.js'
import News from './News.js'
import Events from './Events.js'
import Footer from './Footer.js'

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
