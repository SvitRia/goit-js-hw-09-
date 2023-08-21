const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body')
console.log(btnStart);
console.log(btnStop);

btnStop.disabled = true;
btnStart.addEventListener('click', handlerStart)


function handlerStart() {
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor()}, 1000);
        btnStart.disabled = true;
        btnStop.disabled = false;
}

btnStop.addEventListener('click', handlerStop)

function handlerStop() {
    clearInterval(timerId);  
    body.style.backgroundColor = "#fafafa";
    btnStart.disabled = false;
    btnStop.disabled = true;

}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
