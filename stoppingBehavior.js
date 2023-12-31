// Do not change
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage

const moreInfoLink = document.getElementById('more-info')

moreInfoLink.addEventListener('click', function(e) {
  e.preventDefault()
  alert("Here's some info")
})

// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"

const barkButton = document.getElementById('dog')

barkButton.addEventListener('click', function(e) {
  e.stopPropagation()
  alert('"Bow wow!"')
})
