let {str} = require('./giftText.js')
//import {giftText as str} from './giftText.js'

/** 
   Find the previous week's Sunday and format it.
 */
let date = new Date()
let dow = date.getDay() // day of week
date.setDate(date.getDate() - dow)
let myDate = date.toString()
let mda = myDate.split(' ')
let sunday = `${mda[0]} ${mda[1]} ${mda[2]}, ${mda[3]}`

let i = parseInt(process.env.MYLANG) // env varible contains language index

let template = `
<!doctype html>
<html lang=\"${str.lang[i]}\">
  <head>
    <meta charset="UTF-8"/>
    <title>Document</title>
    <style>
      .gift {
      margin: 0.4em;
      padding: 0;
      display: block;
      width: auto;
      }
      .gift .mast, .gift .date {
      text-align: center;
      padding: 0.1em;
      font-variant: small-caps;
      font-size: 1.3em;
      }
      .gift .left, gift .right {
      vertical-align: top;
      display: inline-block;
      text-transform: capitalize;
      }
      .gift .left {
      padding: 0.5em 0.5em 0.5em 0;
      margin: 0;
      width: 45%;
      }
      .gift .right {
      float: right;
      text-align: right;
      padding: 0.5em 0 0.5em 0.5em;
      margin: 0;
      width: 45%;
      }
      hr {
      border: 0;
      border-bottom: 1px dashed #eee;
      background: #444;
      width: 50%;
      }
      .gift .left hr { float: left;}
      .gift .right hr { float: right;}
      .total {clear:left;}
      .sum {clear:right;}
      .thanks {
      text-align: center;
      font-variant: small-caps;
      font-size: 1.2em;
      }
    </style>
  </head>
  <body>
    <div class='gift'>
      <div class='mast'>${str.gift[i]}</div>
      <div class='date'>${sunday}</div>
      <div class='myspan'>
        <span class='left'>
          <div>
            ${str.fund1[i]}
          </div>
          <div>
            ${str.fund2[i]}
          </div>
          <div>
            ${str.fund3[i]}
          </div>
          <div>
            ${str.fund4[i]}
          </div>
          <div>
            ${str.fund5[i]}
          </div>
          <div>
            ${str.fund6[i]}
          </div>
          <hr/>
          <div class='total'>
            ${str.total[i]}
          </div>
        </span>
        <span class='right'>
          <div id='general'>
            ${str.money1}
          </div>
          <div>
            ${str.money2}
          </div>
          <div>
            ${str.money3}
          </div>
          <div>
            ${str.money4}
          </div>
          <div>
            ${str.money5}
          </div>
          <div>
            ${str.money6}
          </div>
          <hr/>
          <div class='sum'>
            ${str.sum}
          </div>
        </span>
      </div>
      <div class='thanks'>${str.thanks[i]}</div>
      <div class='thanks'>${str.next[i]}</div>
    </div>

  </body>
</html>
`
console.log(template)
