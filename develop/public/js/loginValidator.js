function getElementById(element){
    return document.getElementById(element)
}
window.addEventListener('load', () =>{
    let formLogin = getElementById('form-login')
    let inputEmailLogin = getElementById('input-email-login')
    let inputPassworLogin = getElementById('input-password-login')
    let errorFormLogin = getElementById('error-form-login')
    let errorEmailLogin = getElementById('error-email-login')
    let errorPasswordLogin = getElementById('error-password-login')
    let regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    let regExPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/

    inputEmailLogin.addEventListener('blur', () => {
        switch (true) {
            case !inputEmailLogin.value.trim():
                errorEmailLogin.innerText = 'El campo correo electronico es obligatorio';
                inputEmailLogin.style.borderBottom = '1px solid red'
                break;
            case !regExEmail.test(inputEmailLogin.value):
                errorEmailLogin.innerText = 'Ingrese un email valido(Ej: mail@mail.com)';
                inputEmailLogin.style.borderBottom = '1px solid red'
                break;
            default:
                inputEmailLogin.style.borderBottom = '1px solid var(--mantis)'
                errorEmailLogin.innerText = "";
                break;
        }
    })
    inputEmailLogin.addEventListener('keypress', () => {
        switch (true) {
            case !inputEmailLogin.value.trim():
                errorEmailLogin.innerText = 'El campo correo electronico es obligatorio';
                inputEmailLogin.style.borderBottom = '1px solid red'
                break;
            case !regExEmail.test(inputEmailLogin.value):
                errorEmailLogin.innerText = 'Ingrese un email valido(Ej: mail@mail.com)';
                inputEmailLogin.style.borderBottom = '1px solid red'
                break;
            default:
                inputEmailLogin.style.borderBottom = '1px solid var(--mantis)'
                errorEmailLogin.innerText = "";
                break;
        }
    })
    inputEmailLogin.addEventListener('keydown', () => {
        switch (true) {
            case !inputEmailLogin.value.trim():
                errorEmailLogin.innerText = 'El campo correo electronico es obligatorio';
                inputEmailLogin.style.borderBottom = '1px solid red'
                break;
            case !regExEmail.test(inputEmailLogin.value):
                errorEmailLogin.innerText = 'Ingrese un email valido(Ej: mail@mail.com)';
                inputEmailLogin.style.borderBottom = '1px solid red'
                break;
            default:
                inputEmailLogin.style.borderBottom = '1px solid var(--mantis)'
                errorEmailLogin.innerText = "";
                break;
        }
    })

    formLogin.addEventListener('submit', (event) => {
        let error = false;
        event.preventDefault()
        let elementsForm = formLogin.elements
        
        for (let i = 0; i < 2 ; i++) {
            if(elementsForm[i].value == "" || elementsForm[i].style.borderBottom == '1px solid red'){
                elementsForm[i].style.borderBottom = '1px solid red'
                errorFormLogin.innerText = "Los campos señalados son obligatorios";
                error = true;
            }
        }
    
        if(!error){
            formLogin.submit()
        }
    
    })

})