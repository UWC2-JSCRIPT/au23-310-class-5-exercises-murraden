// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"

const link = document.getElementById("weather-head")
link.innerText = "February 10 Weather Forecast, Seattle"




// Change the styling of every element with class "sun" to set the color to "orange"


const makeSunOrange = document.querySelectorAll(".sun")
makeSunOrange.forEach(function(element) {
  element.style.color = 'orange'
})





// Change the class of the second <li> from to "sun" to "cloudy"


const secondLi = document.querySelector('ul#weather li:nth-child(2)')
secondLi.classList.remove('sun')
secondLi.classList.add('cloudy')