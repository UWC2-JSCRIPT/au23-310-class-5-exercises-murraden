// Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.querySelector('body');

const mainNode = body.querySelector('main')
console.log(mainNode)


// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector('ul');

const bodyNode = ul.ownerDocument.querySelector('body')
console.log(bodyNode)

// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const p = document.querySelector('p');

const thirdLiChild = p.parentElement.querySelector('ul li:nth-child(3)')
console.log(thirdLiChild) 

