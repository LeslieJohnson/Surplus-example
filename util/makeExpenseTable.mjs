import fs from 'fs'
var left = '',
right = '',
title = ''

const isTitle = input => {
  return (input.length == 1
    && input[0] !== '--'
    && !isSeparator(input[0])
    && !isEmpty(input[0]))
}
const isSeparator = input => input[0] === '--'
const isEmpty = input => input === ''
const isEntry = input => input.length === 2 && input !== '--'

let expense = fs.readFileSync('expense.txt', (err, data) => {
  if(err) {
    return console.error(err)
  }

})
let str = expense.toString()
let a = str.split('\n')

a.map(line => {
  let trimmed = line.toString().trim()
  //console.log(trimmed)
  let li = trimmed.split(':')
  //console.log(li)
  //console.log(li,isTitle(li),isEmpty(li[0]),isSeparator(li[0]),isEntry(li))
  if (isTitle(li) ) {
    title += `<div>${li[0]}</div>\n<hr/>\n` 
  }
  if (isEntry(li)) {
    left += `<div>${li[0]}</div>\n`
    right += `<div>${li[1]}</div>\n`
  }
  if (isSeparator(li)) {
    left += `<hr/>\n`
    right += `<hr/>\n`
  }

}
)
//console.log(left,right)
let template = `
<!doctype html>
<html lang="en">
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
     .gift .left, .gift .right {
       vertical-align: top;
       display: inline-block;
       text-transform: capitalize;
     }
     .gift .left {
       padding: 0.5em 0.5em 0.5em 0;
       margin: 0;
       width: 45%;
       clear: left;
     }
     .gift .right {
       float: right;
       text-align: right;
       padding: 0.5em 0 0.5em 0.5em;
       margin: 0;
       width: 45%;
       clear: right;
     }
     hr {
       border: 0;
       border-bottom: 1px dashed #eee;
       background: #444;
       width: 50%;
     }
     .left hr { float: left; clear: left;}
     .right hr { float: right; clear: right;}
     .left div {clear:left;}
     .right div {clear: right;}

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
      <div class='mast'>${title}</div>
      <div class='date'></div>
      <div class='myspan'>
        <span class='left'>
          ${left}
          <hr/>
          <div class='total'>

          </div>
        </span>
        <span class='right'>
          ${right}
          <hr/>
          <div class='sum'>

          </div>
        </span>
      </div>
      <div class='thanks'></div>
      <div class='thanks'></div>
    </div>

  </body>
</html>
`
console.log(template)
