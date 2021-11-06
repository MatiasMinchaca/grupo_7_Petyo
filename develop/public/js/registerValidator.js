function getElementById(element){
    return document.getElementById(element)
}
function addError(input){
    input.style.borderBottom = '1px solid red'
    input.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e")`
    input.style.backgroundRepeat = 'no-repeat'
    input.style.backgroundPosition = 'right calc(.375em + .1875rem) center'
    input.style.backgroundSize = 'calc(.75em + .375rem) calc(.75em + .375rem)'
}
function addValid(input){
    input.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e")` 
    input.style.backgroundRepeat = 'no-repeat' 
    input.style.backgroundPosition = 'right calc(.375em + .1875rem) center' 
    input.style.backgroundSize = 'calc(.75em + .375rem) calc(.75em + .375rem)'
    input.style.borderBottom = '1px solid var(--mantis)'
}
function eventsAndValidation(input, expresion, label, message, message2, e){
    input.addEventListener('keypress', function validation(e){
        switch (true) {
            case !input.value.trim():
                label.innerText = message;
                input.style.borderBottom = '1px solid red'
                input.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e")` 
                input.style.backgroundRepeat = 'no-repeat' 
                input.style.backgroundPosition = 'right calc(.375em + .1875rem) center' 
                input.style.backgroundSize = 'calc(.75em + .375rem) calc(.75em + .375rem)'
                break;
            case !expresion.test(input.value):
                label.innerText = message2;
                input.style.borderBottom = '1px solid red'
                input.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e")` 
                input.style.backgroundRepeat = 'no-repeat' 
                input.style.backgroundPosition = 'right calc(.375em + .1875rem) center' 
                input.style.backgroundSize = 'calc(.75em + .375rem) calc(.75em + .375rem)'
                break;
            default:
                input.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e")` 
                input.style.backgroundRepeat = 'no-repeat' 
                input.style.backgroundPosition = 'right calc(.375em + .1875rem) center' 
                input.style.backgroundSize = 'calc(.75em + .375rem) calc(.75em + .375rem)'
                input.style.borderBottom = '1px solid var(--mantis)'
                label.innerText = "";
                break;
        }
    });
	input.addEventListener('keydown', function validation(e){
        switch (true) {
            case !input.value.trim():
                label.innerText = message;
                input.style.borderBottom = '1px solid red'
                input.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e")` 
                input.style.backgroundRepeat = 'no-repeat' 
                input.style.backgroundPosition = 'right calc(.375em + .1875rem) center' 
                input.style.backgroundSize = 'calc(.75em + .375rem) calc(.75em + .375rem)'
                break;
            case !expresion.test(input.value):
                label.innerText = message;
                input.style.borderBottom = '1px solid red'
                input.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e")` 
                input.style.backgroundRepeat = 'no-repeat' 
                input.style.backgroundPosition = 'right calc(.375em + .1875rem) center' 
                input.style.backgroundSize = 'calc(.75em + .375rem) calc(.75em + .375rem)'
                break;
            default:
                input.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e")` 
                input.style.backgroundRepeat = 'no-repeat' 
                input.style.backgroundPosition = 'right calc(.375em + .1875rem) center' 
                input.style.backgroundSize = 'calc(.75em + .375rem) calc(.75em + .375rem)'
                input.style.borderBottom = '1px solid var(--mantis)'
                label.innerText = "";
                break;
        }
    });
	input.addEventListener('blur', function validation(e){
        switch (true) {
            case !input.value.trim():
                label.innerText = message;
                input.style.borderBottom = '1px solid red'
                input.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e")` 
                input.style.backgroundRepeat = 'no-repeat' 
                input.style.backgroundPosition = 'right calc(.375em + .1875rem) center' 
                input.style.backgroundSize = 'calc(.75em + .375rem) calc(.75em + .375rem)'
                break;
            case !expresion.test(input.value):
                label.innerText = message;
                input.style.borderBottom = '1px solid red'
                input.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e")` 
                input.style.backgroundRepeat = 'no-repeat' 
                input.style.backgroundPosition = 'right calc(.375em + .1875rem) center' 
                input.style.backgroundSize = 'calc(.75em + .375rem) calc(.75em + .375rem)'
                break;
            default:
                input.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e")` 
                input.style.backgroundRepeat = 'no-repeat' 
                input.style.backgroundPosition = 'right calc(.375em + .1875rem) center' 
                input.style.backgroundSize = 'calc(.75em + .375rem) calc(.75em + .375rem)'
                input.style.borderBottom = '1px solid var(--mantis)'
                label.innerText = "";
                break;
        }
    });
}

window.addEventListener('load', () =>{
    let formRegister = getElementById('form-register')
    let inputNameRegister = getElementById('input-name-register')
    let inputLastNameRegister = getElementById('input-lastName-register')
    let inputNamePetRegister = getElementById('input-namePet-register')
    let inputEmailRegister = getElementById('input-email-register')
    let inputPassworRegister = getElementById('input-password-register')
    let inputPassCRegister = getElementById('input-passC-register')
    let inputTermsRegister = getElementById('input-terms-register')
    let errorFormRegister = getElementById('error-form-register')
    let errorNameRegister = getElementById('error-name-register')
    let errorLastNameRegister = getElementById('error-lastName-register')
    let errorEmailRegister = getElementById('error-email-register')
    let errorPasswordRegister = getElementById('error-password-register')
    let errorPassCRegister = getElementById('error-passC-register')
    let errorTermsRegister = getElementById('error-terms-register')
    let regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/
    let regExName = /^[a-zA-ZÀ-ÿ\s]{2,15}$/
    let regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    let regExPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/

    eventsAndValidation(inputNameRegister, regExName, errorNameRegister, `El campo ${inputNameRegister.placeholder} es obligatorio`, 'No se admiten caracteres especiales ni numeros')
    eventsAndValidation(inputLastNameRegister, regExName, errorLastNameRegister,`El campo ${inputLastNameRegister.placeholder} es obligatorio`, 'No se admiten caracteres especiales ni numeros' )
    inputNamePetRegister.addEventListener('blur', () => {
        switch (true) {
            case !regExAlpha.test(inputNamePetRegister.value):
                addError(inputNamePetRegister)
                break;
            default:
                inputNamePetRegister.style.borderBottom = ''
                inputNamePetRegister.style.backgroundImage = `` 
                inputNamePetRegister.style.backgroundRepeat = '' 
                inputNamePetRegister.style.backgroundPosition = '' 
                inputNamePetRegister.style.backgroundSize = ''
                break;
        }
    })
    eventsAndValidation(inputEmailRegister, regExEmail, errorEmailRegister, `El campo ${inputEmailRegister.placeholder} es obligatorio`, "El correo electronico ingresado no es valido")
    eventsAndValidation(inputPassworRegister, regExPassword, errorPasswordRegister, `El campo ${inputPassworRegister.placeholder} es obligatorio`, "La contraseña debe tener: entre 8 o 15 caracteres, al menos una mayúscula, una minúscula y un número")

    inputPassCRegister.addEventListener('blur', () => {
        switch (true) {
            case !inputPassCRegister.value.trim():
                addError(inputPassCRegister)
                errorPassCRegister.innerText = `El campo ${inputPassCRegister.placeholder} es obligatorio`;
                
                break;
            case  inputPassCRegister.value != inputPassworRegister.value:
                errorPassCRegister.innerText = "Las Contraseñas no coinciden";
                addError(inputPassCRegister)
                break;
            default:
                addValid(inputPassCRegister)
                errorPassCRegister.innerText = "";
                break;
        }
    })

    inputTermsRegister.addEventListener('click', () => {
        inputTermsRegister.value = 'on'
        inputTermsRegister.style.border = '1px solid green'
        errorTermsRegister.innerText = ""
    })

    formRegister.addEventListener('submit', (event) => {
        let error = false;
        event.preventDefault()
        let elementsForm = formRegister.elements
        
        for (let i = 0; i < elementsForm.length-1; i++) {
            if(elementsForm[i].value == "" && elementsForm[i].name !== "archivo" || elementsForm[i].style.borderBottom == '1px solid red'){
                if(i == '2'){
                    continue
                }
                addError(elementsForm[i])
                errorFormRegister.innerText = "Los campos señalados son obligatorios";
                error = true;
            }
        }
    
        if(!inputTermsRegister.checked){
            inputTermsRegister.style.border = '1px solid red'
            errorTermsRegister.innerText = "Debes aceptar los terminos y condiciones"
            error = true
        }
    
        if(!error){
            formRegister.submit()
        }
    
    })

})
