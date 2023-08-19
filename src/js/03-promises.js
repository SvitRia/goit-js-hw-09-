const form = document.querySelector('.form');
const btnCreatePromise = document.querySelector('button')
btnCreatePromise.addEventListener("submit", onListPromis)
function onListPromis(evt) {
  evt.preventDefault();
  const { delay, step, amount } = evt.currentTarget.elements;
if(delay.value < 0 || step.value < 0 || amount.value < 0) {btnCreatePromise.setAttribute('disabled', true); alert(' Please enter a positive numbe')} else { 
  btnCreatePromise.removeAttribute('disabled',)
  console.log(amount);
  do {  
  i += 1;
  let delays = delay + step * (i-1);
  createPromise(i,delays)
  .then(({ position, delay }) => {
    alert( `✅ Fulfilled promise ${position} in ${delay}ms`)
  })
  .catch(({ position, delay }) => {
    alert ( `❌ Rejected promise ${position} in ${delay}ms`)
  });
  }
  while( i < amount)
}
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
  const shouldResolve = Math.random() > 0.3;
  console.log(shouldResolve);
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
})
}

