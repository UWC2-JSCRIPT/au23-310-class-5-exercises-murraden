// If an li element is clicked, toggle the class "done" on the <li>

// If a delete link is clicked, delete the li element / remove from the DOM

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const items = [
  'accessing',
  'domcrud',
  'plusesAndMinuses',
  'stoppingBehavior',
  'toDoList',
  'traversing',
  'wheresThePointer'
];

const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>

  // Finish function here
  if (text !== '') {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const a = document.createElement('a');

    span.textContent = text;
    
    a.textContent = 'Delete';
    
    a.classList.add('delete');

    a.addEventListener('click', function() {
      li.remove();
    });

    li.appendChild(span);
    li.appendChild(a);

    li.addEventListener('click', function() {
      li.classList.toggle('done');
    });

    const ul = document.querySelector('.today-list');
      ul.appendChild(li);
  }
};

document.querySelector('.add-item').addEventListener('click', addListItem);

const initialList = document.querySelector('.today-list');
items.forEach(function(item) {
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <span>${item}</span>
    <a class="delete">Delete</a>
    <button class="up">Move Up</button>
    <button class="down">Move Down</button>
  `;

  listItem.addEventListener('click', function() {
    this.classList.toggle('done')
  });

  listItem.querySelector('.delete').addEventListener('click', function(e) {
    e.stopPropagation()
    this.parentNode.remove()
  });

  listItem.querySelector('.up').addEventListener('click', function(e) {
    e.stopPropagation()
    const previousElement = this.parentNode.previousElementSibling
    if (previousElement) {
      this.parentNode.parentNode.insertBefore(this.parentNode, previousElement)
    }
  });

  listItem.querySelector('.down').addEventListener('click', function(e) {
    e.stopPropagation()
    const nextElement = this.parentNode.nextElementSibling;
    if (nextElement) {
      this.parentNode.parentNode.insertBefore(nextElement, this.parentNode);
    }
  });

  initialList.appendChild(listItem);
});