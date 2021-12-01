function getElementById(element){
    return document.getElementById(element)
}
function addError(input){
    input.style.boxShadow = '0 0 6px red'
}
function addValid(input){
    input.style.boxShadow = ''
}
function eventsAndValidation(input, expresion, label, message, message2, e){
    input.addEventListener('keypress', function validation(e){
        switch (true) {
            case !input.value.trim():
                label.innerText = message;
                input.style.boxShadow = '0 0 6px red'
                break;
            case !expresion.test(input.value):
                label.innerText = message2;
                input.style.boxShadow = '0 0 6px red'
                break;
            default:
                input.style.boxShadow = ''
                label.innerText = "";
                break;
        }
    });
	input.addEventListener('keydown', function validation(e){
        switch (true) {
            case !input.value.trim():
                label.innerText = message;
                input.style.boxShadow = '0 0 6px red'
                break;
            case !expresion.test(input.value):
                label.innerText = message;
                input.style.boxShadow = '0 0 6px red'
                break;
            default:
                input.style.boxShadow = ''
                label.innerText = "";
                break;
        }
    });
	input.addEventListener('blur', function validation(e){
        switch (true) {
            case !input.value.trim():
                label.innerText = message;
                input.style.boxShadow = '0 0 6px red'
                break;
            case !expresion.test(input.value):
                label.innerText = message;
                input.style.boxShadow = '0 0 6px red'
                break;
            default:
                input.style.boxShadow = ''
                label.innerText = "";
                break;
        }
    });
}

function eventsAndValidation2(input, label, message){
    input.addEventListener('keypress', function validation(e){
        switch (true) {
            case !input.value.trim():
                label.innerText = message;
                input.style.boxShadow = '0 0 6px red'
                break;
            default:
                input.style.boxShadow = ''
                label.innerText = "";
                break;
        }
    });
	input.addEventListener('keydown', function validation(e){
        switch (true) {
            case !input.value.trim():
                label.innerText = message;
                input.style.boxShadow = '0 0 6px red'
                break;
            default:
                input.style.boxShadow = ''
                label.innerText = "";
                break;
        }
    });
	input.addEventListener('blur', function validation(e){
        switch (true) {
            case !input.value.trim():
                label.innerText = message;
                input.style.boxShadow = '0 0 6px red'
                break;
            default:
                input.style.boxShadow = ''
                label.innerText = "";
                break;
        }
    });
}

window.addEventListener('load', () =>{
    let formeditProduct = getElementById('form-editProduct')
    let imageeditProduct = getElementById('imgInp')
    let previewImage = getElementById('blah')
    let inputNameeditProduct = getElementById('input-name-editProduct')
    let inputCategoryeditProduct = getElementById('select-category-editProduct')
    let inputSubcategoryeditProduct = getElementById('select-subcategory-editProduct')
    let inputPriceeditProduct = getElementById('input-price-editProduct')
    let inputDiscounteditProduct = getElementById('input-discount-editProduct')
    let inputDescriptioneditProduct = getElementById('input-description-editProduct')
    let errorFormeditProduct = getElementById('error-form-editProduct')
    let errorImageeditProduct = getElementById('error-image-editProduct')
    let errorNameeditProduct = getElementById('error-name-editProduct')
    let errorCategoryeditProduct = getElementById('error-category-editProduct')
    let errorSubcategoryeditProduct = getElementById('error-subcategory-editProduct')
    let errorPriceeditProduct = getElementById('error-price-editProduct')
    let errorDiscounteditProduct = getElementById('error-discount-editProduct')
    let errorDescriptioneditProduct = getElementById('error-description-editProduct')
    let regExAbc = /^[a-zA-ZÀ-ÿ\s]{5,30}$/
    let regExPrice = /^\d{2,11}$/
    let regExDiscount = /^\d{0,9}$/
    let regExDescrip = /^[a-zA-ZÀ-ÿ\s]{20,500}$/

    eventsAndValidation(inputNameeditProduct, regExAbc, errorNameeditProduct, `El campo ${inputNameeditProduct.placeholder} es obligatorio`, 'No se admiten caracteres especiales(min:5, max:30)')
    eventsAndValidation2(inputCategoryeditProduct, errorCategoryeditProduct, `El campo categoria es obligatorio`)
    eventsAndValidation2(inputSubcategoryeditProduct, errorSubcategoryeditProduct, `El campo subcategoria es obligatorio`)
    eventsAndValidation(inputPriceeditProduct, regExPrice, errorPriceeditProduct, `El campo ${inputPriceeditProduct.placeholder} es obligatorio`, 'Solo se admiten numeros')
    eventsAndValidation(inputDescriptioneditProduct, regExDescrip, errorDescriptioneditProduct, `El campo ${inputDescriptioneditProduct.placeholder} es obligatorio`, 'No se admiten caracteres especiales(min:20, max:500)')
    
    

    inputDiscounteditProduct.addEventListener('keypress', () => {
        switch (true) {
            case !regExDiscount.test(inputDiscounteditProduct.value):
                errorDiscounteditProduct.innerText = message;
                inputDiscounteditProduct.style.boxShadow = '0 0 6px red'
                break;
            default:
                inputDiscounteditProduct.style.boxShadow = ''
                errorDiscounteditProduct.innerText = "";
                break;
        }
    })
    imageeditProduct.addEventListener('change', 
    function fileValidation(){
        let filePath = imageeditProduct.value, 
            allowefExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i 
        if(!allowefExtensions.exec(filePath)){ 
            errorImageeditProduct.innerText = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)';
            imageeditProduct.value = '';
            previewImage.innerHTML = '';
            return false;
        }else{
            if(imageeditProduct.files && imageeditProduct.files[0]){
                let reader = new FileReader();
                reader.onload = function(e){
                    previewImage.innerHTML = '<img src="' + e.target.result +'"/>';
                };
                reader.readAsDataURL(imageeditProduct.files[0]);
                errorImageeditProduct.innerText = '';
            }
        }
    })
    formeditProduct.addEventListener('submit', (event) => {
        let error = false;
        event.preventDefault()
        let elementsForm = formeditProduct.elements
        
        for (let i = 0; i < elementsForm.length-1; i++) {
            if(elementsForm[i].value == "" && elementsForm[i].name !== "image" || elementsForm[i].style.boxShadow == '0 0 6px red'){
                if(i == '5'){
                    continue
                }
                addError(elementsForm[i])
                errorFormeditProduct.innerText = "Los campos señalados son obligatorios";
                error = true;
            }
        }
    
        if(!error){
            formeditProduct.submit()
        }
    
    })

})