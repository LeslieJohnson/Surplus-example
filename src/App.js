import S from 's-js'
import * as Surplus from 'surplus'
import TopNav from './TopNav.js'
import Header from './Header.js'
import Intro from './Intro.js'
import Pictures from './Pictures.js'
import News from './News.js'
import Events from './Events.js'
import Footer from './Footer.js'
import ModalBase from './ModalBase'

let view = S.root(() =>
  <div className='App'>
    <div className='main'>
      <TopNav></TopNav>
      <Header></Header>
      <Intro></Intro>
      <Pictures></Pictures>
      <News></News>
      <Events></Events>
      <Footer></Footer>
    </div>
  </div>
)
document.body.appendChild(view)
