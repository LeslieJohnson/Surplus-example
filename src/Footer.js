import S from 's-js'
import * as Surplus from 'surplus'
import {textStrings as txt} from './textStrings.js'
import {langIndex} from './langIndex.js'
import GetLabeledText from './GetLabeledText.js'
import {labeledText as lt} from './labeledText.js'

export default function Footer(props) {
  return(
    <div className='footer'>
      <div className='label address'>
        <div className='footertitle'>{txt.title[0]}</div>
        <GetLabeledText>address</GetLabeledText>
      </div>
      <div className='label'>
        <GetLabeledText>admin</GetLabeledText>
      </div>
      <div className='label contact'>
        <GetLabeledText>contact</GetLabeledText>
      </div>
      <div className='label'>
        <GetLabeledText>hours</GetLabeledText>
      </div>
      <div className='label'>
        <GetLabeledText>email</GetLabeledText>
      </div>
      <div className='brag'>powered by <i className='me'>Les </i> (bithits@gmail.com)</div>
    </div>
  )
}
