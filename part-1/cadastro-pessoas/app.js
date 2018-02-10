const form = document.querySelector('#form');
const submit = document.getElementById('submit');

submit.addEventListener('click', (e) => {
    if (form.checkValidity()) {
        form.submit();
    } else {
        form.querySelector('input[type="submit"]').click();
    }
}, false)