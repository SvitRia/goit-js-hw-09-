
import throttle from 'lodash.throttle';
const throttle = require('lodash.throttle');
const feedback = document.querySelector(".feedback-form")
 const emailInput = document.querySelector('input[name="email"]');
 const messageInput = document.querySelector('textarea[name="message"]');

feedback.addEventListener('input', throttle( (inputFeedback), 500));
let form = {};
updateForm();

function inputFeedback(evt) {
    evt.preventDefault();
        form[evt.target.name] = evt.target.value;
        let jsonForm = JSON.stringify(form);
        localStorage.setItem('feedback-form-state', jsonForm)
    }

feedback.addEventListener('submit', resetInput)
function resetInput(evt) {
    evt.preventDefault();
    if (emailInput.value === '' || messageInput.value === '') {
        alert('Заповніть будь ласка усі поля форми');
        return;
            }
            console.log(form);
            localStorage.removeItem('feedback-form-state');
            evt.currentTarget.reset();
           form = {}
        }

        function updateForm() {
            let savedFormData = localStorage.getItem('feedback-form-state');
            if (savedFormData) {
                form = JSON.parse(savedFormData) || {};
                emailInput.value = form.email || '';
                messageInput.value = form.message || '';
            }
        }