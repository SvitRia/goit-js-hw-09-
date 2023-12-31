import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix'
import 'notiflix/dist/notiflix-3.2.6.min.css';

const elements ={
    startTimer: document.querySelector('#datetime-picker'),
    btnStart: document.querySelector('[data-start]'),
    day: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]')
};

let timerId;
let chosenDate = null;
elements.btnStart.setAttribute('disabled', true);
elements.btnStart.addEventListener('click', handlerStart)
//elements.startTimer.addEventListener('click', handlerStart)
function handlerStart() {
    clearInterval(timerId);
    elements.btnStart.setAttribute('disabled', true);
       timerId = setInterval(() => {
         
          elements.startTimer.setAttribute('disabled', true);
          const currentTime = Date.now();
          const deltaTime = chosenDate - currentTime;
          console.log(chosenDate);
            if (deltaTime <= 0) {
                //elements.btnStart.removeAttribute('disabled');
                elements.startTimer.removeAttribute('disabled');
                
            } else { 
              elements.btnStart.removeAttribute('disabled');
              const { days, hours, minutes, seconds } = convertMs(deltaTime);
              elements.day.textContent = addLeadingZero(days);
              elements.hours.textContent = addLeadingZero(hours);
              elements.minutes.textContent = addLeadingZero(minutes);
              elements.seconds.textContent = addLeadingZero(seconds);
              }}, 1000);
}
 
  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0] <= Date.now()) {
        Notiflix.Notify.warning('Please choose a date in the future');
        
      } else {
        chosenDate = selectedDates[0];
        elements.btnStart.removeAttribute('disabled');
        elements.btnStart.addEventListener('click', handlerStart); 
      }
    },
  };

  flatpickr('#datetime-picker', options);

  function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    return { days, hours, minutes, seconds };
  }
  function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
  }



