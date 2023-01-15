import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextareaInput, 500));

let formData = {};

if (localStorage.getItem(STORAGE_KEY)) {
    try {
    formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    } catch (error) {
        console.error(error)
    }
}


function onFormSubmit(evt) {
    console.log(formData);
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)
    formData = {};
}
 
function savedMessage() {
    Object.entries(formData).forEach(
    ([name, value]) => (form.elements[name].value = value))
}
savedMessage();


function onTextareaInput(evt) {
    formData [evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
