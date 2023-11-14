// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>

const buyNow = document.createElement('a')
const buyNowText = document.createTextNode('Buy Now!')
buyNow.id = "cta"

buyNow.appendChild(buyNowText)

const main = document.getElementsByTagName('main')[0]

main.appendChild(buyNow)

// debugger

// Access (read) the data-color attribute of the <img>,
// log to the console
const image = document.querySelector('img')
const imageColor = image.dataset.color

console.log(imageColor)

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"

const thirdLi = document.querySelector("ul li:nth-child(3)")
thirdLi.className = "highlight"

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")

const removeElement = document.querySelector('p')
main.removeChild(removeElement)
