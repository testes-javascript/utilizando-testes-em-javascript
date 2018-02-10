import Pessoa  from './class/Pessoa'

const form = document.querySelector('#form');
const submit = document.getElementById('submit');

let validateName = (name) => {
    
}

Pessoa.testes()

submit.addEventListener('click', (e) => {
    if (form.checkValidity()) {
        form.submit();
    } else {
        form.querySelector('input[type="submit"]').click();
    }
}, false)