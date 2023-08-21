import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const btnStart = form.querySelector('button')
form.addEventListener("submit", onListPromise)
btnStart.disabled = false;
function onListPromise(evt) {
  evt.preventDefault();
  const { delay, step, amount } = evt.currentTarget.elements;

  if(delay.value < 0 || step.value < 0 || amount.value < 0) { Notiflix.Notify.warning('Please enter a positive number');
  evt.currentTarget.reset()
  return} 
     let i = 0;
     do {
     btnStart.disabled = true;
      i += 1;
     const delays = parseInt(delay.value) + parseInt(step.value) * (i - 1);
    
     createPromise(i,delays)
     .then(({ position, delay }) => {
      Notiflix.Notify.success( `✅ Fulfilled promise ${position} in ${delay}ms`)
     })
     .catch(({ position, delay }) => {
      Notiflix.Notify.failure ( `❌ Rejected promise ${position} in ${delay}ms`)
     })
     } while (i < parseInt(amount.value))
  
  //   function createNextPromise() { 
  //     i += 1;
  //    const delays = parseInt(delay.value) + parseInt(step.value) * (i - 1);
    
  //    createPromise(i,delays)
  //    .then(({ position, delay }) => {
  //     Notiflix.Notify.success( `✅ Fulfilled promise ${position} in ${delay}ms`)
  //    })
  //    .catch(({ position, delay }) => {
  //     Notiflix.Notify.failure ( `❌ Rejected promise ${position} in ${delay}ms`)
  //    })
  //    if (i < parseInt(amount.value)) {
  //     setTimeout(createNextPromise(), delays); 
  //   }
   
  // }
  // createNextPromise();
  form.reset()
 
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
  const shouldResolve = Math.random() > 0.3;
 
     setTimeout(()=>{
      if (shouldResolve) {
         resolve({ position, delay })
         } else {
         reject({ position, delay })
         }
      }, delay)
})
}



