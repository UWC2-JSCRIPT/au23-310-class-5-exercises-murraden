// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click

let boxes = document.querySelectorAll('td')

function clickLocations(e) {
    let xCords = e.clientX
    let yCords = e.clientY
    e.target.innerHTML = 'X: ' + xCords + ' Y: ' + yCords;
}

boxes.forEach(function(listen) {
    listen.addEventListener('click', clickLocations)
})




