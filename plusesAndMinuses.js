// When a user clicks the + element, the count should increase by 1 on screen.
// When a user clicks the – element, the count should decrease by 1 on screen.

let counter = 0;

const plusEl = document.getElementById('plus');
const minusEl = document.getElementById('minus')
let displayCount = 
plusEl.addEventListener('click', () => {
  counter++;
  console.log(`The count is ${counter}`);
});

plusEl.addEventListener('click', () => {
    document.getElementById('count')
    .innerHTML = counter;
  });

minusEl.addEventListener('click', () => {
  counter--;
  console.log(`The count is ${counter}`);
});

minusEl.addEventListener('click', () => {
    document.getElementById('count')
    .innerHTML = counter;
  });
  