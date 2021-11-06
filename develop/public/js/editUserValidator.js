function getElementById(element){
    return document.getElementById(element)
}

function eventsAndValidation(input, expresion, label, message, message2){
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
                label.innerText = '';
                input.style.borderBottom = ''
                input.style.backgroundImage = `` 
                input.style.backgroundRepeat = '' 
                input.style.backgroundPosition = '' 
                input.style.backgroundSize = ''
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
                label.innerText = '';
                input.style.borderBottom = ''
                input.style.backgroundImage = `` 
                input.style.backgroundRepeat = '' 
                input.style.backgroundPosition = '' 
                input.style.backgroundSize = ''
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
                label.innerText = '';
                input.style.borderBottom = ''
                input.style.backgroundImage = `` 
                input.style.backgroundRepeat = '' 
                input.style.backgroundPosition = '' 
                input.style.backgroundSize = ''
                break;
        }
    });
}
window.addEventListener('load', () => {
    let formEditProfile = getElementById('form-editProfile')
    let inputImageFIle = getElementById('imgInp')
    let previewImage = getElementById('blah')
    let inputNameEditProfile = getElementById('input-name-editProfile')
    let inputLastNameEditProfile = getElementById('input-lastName-editProfile')
    let inputTelephoneEditProfile = getElementById('input-telephone-editProfile')
    let errorFormEditProfile = getElementById('error-form-editProfile')
    let errorImageEditProfile = getElementById('error-imgInp-editProfile')
    let errorNameEditProfile = getElementById('error-name-editProfile')
    let errorLastNameEditProfile = getElementById('error-lastName-editProfile')
    let errorTelephoneEditProfile = getElementById('error-telephone-editProfile')
    let regExName = /^[a-zA-ZÀ-ÿ\s]{2,15}$/
    let regExTel = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/i
    
    eventsAndValidation(inputNameEditProfile, regExName, errorNameEditProfile, `El campo ${inputNameEditProfile.placeholder} es obligatorio`, 'No se admiten caracteres especiales ni numeros')
    eventsAndValidation(inputLastNameEditProfile, regExName, errorLastNameEditProfile, `El campo ${inputLastNameEditProfile.placeholder} es obligatorio`, 'No se admiten caracteres especiales ni numeros')
    eventsAndValidation(inputTelephoneEditProfile, regExTel, errorTelephoneEditProfile, `El campo ${inputLastNameEditProfile.placeholder} es obligatorio`, "Debes escribir un nummero de telefono valido sin espacios(ejemplo: 5491146385478)")
    
    inputImageFIle.addEventListener('change', 
    function fileValidation(){
        let filePath = inputImageFIle.value, 
            allowefExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i 
        if(!allowefExtensions.exec(filePath)){ 
            errorImageEditProfile.innerHTML = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)';
            inputImageFIle.value = '';
            previewImage.innerHTML = '';
            return false;
        }else{
            if(inputImageFIle.files && inputImageFIle.files[0]){
                let reader = new FileReader();
                reader.onload = function(e){
                    previewImage.innerHTML = '<img src="' + e.target.result +'"/>';
                };
                reader.readAsDataURL(inputImageFIle.files[0]);
                errorImageEditProfile.innerHTML = '';
            }
        }
    })

    formEditProfile.addEventListener('submit',function(event){
        let error = false;
        event.preventDefault()
        let elementsForm = formEditProfile.elements
        
        for (let i = 0; i < 5; i++) {
            console.log(elementsForm[i].name)
            if(elementsForm[i].value == "" || elementsForm[i].style.borderBottom == '1px solid red' ){
                if(i == 0){
                    continue
                }
                elementsForm[i].style.borderBottom = '1px solid red'
                elementsForm[i].style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e")` 
                elementsForm[i].style.backgroundRepeat = 'no-repeat' 
                elementsForm[i].style.backgroundPosition = 'right calc(.375em + .1875rem) center' 
                elementsForm[i].style.backgroundSize = 'calc(.75em + .375rem) calc(.75em + .375rem)'
                errorFormEditProfile.innerText = "Los campos señalados son obligatorios"
                error = true;
            }
        }
    
        if(!error){
            formEditProfile.submit()
        }
    
    })

})