import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextareaInput, 500));

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};


function onFormSubmit(evt) {
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)
    formData = {};
 }
function savedMessage() {
    const {email, message} = form.elements;
    message.value = formData.message || '';
    email.value = formData.email || '';
}
savedMessage();

function onTextareaInput(evt) {
    formData [evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

