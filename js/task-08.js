const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) { 
    event.preventDefault();

    formRef.elements.email.required = true
    formRef.elements.password.required = true

    if (formRef.elements.email.required || formRef.elements.password.required) {
        alert('stop')
    }


};
