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
    let formLoadProduct = getElementById('form-loadProduct')
    let imageLoadProduct = getElementById('imgInp')
    let previewImage = getElementById('blah')
    let inputNameLoadProduct = getElementById('input-name-loadProduct')
    let inputCategoryLoadProduct = getElementById('select-category-loadProduct')
    let inputSubcategoryLoadProduct = getElementById('select-subcategory-loadProduct')
    let inputPriceLoadProduct = getElementById('input-price-loadProduct')
    let inputDiscountLoadProduct = getElementById('input-discount-loadProduct')
    let inputDescriptionLoadProduct = getElementById('input-description-loadProduct')
    let errorFormLoadProduct = getElementById('error-form-loadProduct')
    let errorImageLoadProduct = getElementById('error-image-loadProduct')
    let errorNameLoadProduct = getElementById('error-name-loadProduct')
    let errorCategoryLoadProduct = getElementById('error-category-loadProduct')
    let errorSubcategoryLoadProduct = getElementById('error-subcategory-loadProduct')
    let errorPriceLoadProduct = getElementById('error-price-loadProduct')
    let errorDiscountLoadProduct = getElementById('error-discount-loadProduct')
    let errorDescriptionLoadProduct = getElementById('error-description-loadProduct')
    let regExAbc = /^[a-zA-ZÀ-ÿ\s]{5,30}$/
    let regExPrice = /^\d{2,11}$/
    let regExDiscount = /^\d{0,9}$/
    let regExDescrip = /^[a-zA-ZÀ-ÿ\s]{20,500}$/

    eventsAndValidation(inputNameLoadProduct, regExAbc, errorNameLoadProduct, `El campo ${inputNameLoadProduct.placeholder} es obligatorio`, 'No se admiten caracteres especiales(min:5, max:30)')
    eventsAndValidation2(inputCategoryLoadProduct, errorCategoryLoadProduct, `El campo categoria es obligatorio`)
    eventsAndValidation2(inputSubcategoryLoadProduct, errorSubcategoryLoadProduct, `El campo subcategoria es obligatorio`)
    eventsAndValidation(inputPriceLoadProduct, regExPrice, errorPriceLoadProduct, `El campo ${inputPriceLoadProduct.placeholder} es obligatorio`, 'Solo se admiten numeros')
    eventsAndValidation(inputDescriptionLoadProduct, regExDescrip, errorDescriptionLoadProduct, `El campo ${inputDescriptionLoadProduct.placeholder} es obligatorio`, 'No se admiten caracteres especiales(min:20, max:500)')
    inputDiscountLoadProduct.addEventListener('keypress', () => {
        switch (true) {
            case !regExDiscount.test(inputDiscountLoadProduct.value):
                errorDiscountLoadProduct.innerText = message;
                inputDiscountLoadProduct.style.boxShadow = '0 0 6px red'
                break;
            default:
                inputDiscountLoadProduct.style.boxShadow = ''
                errorDiscountLoadProduct.innerText = "";
                break;
        }
    })
    imageLoadProduct.addEventListener('change', 
    function fileValidation(){
        let filePath = imageLoadProduct.value, 
            allowefExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i 
        if(!allowefExtensions.exec(filePath)){ 
            errorImageLoadProduct.innerText = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)';
            imageLoadProduct.value = '';
            previewImage.innerHTML = '';
            return false;
        }else{
            if(imageLoadProduct.files && imageLoadProduct.files[0]){
                let reader = new FileReader();
                reader.onload = function(e){
                    previewImage.innerHTML = '<img src="' + e.target.result +'"/>';
                };
                reader.readAsDataURL(imageLoadProduct.files[0]);
                errorImageLoadProduct.innerText = '';
            }
        }
    })
    formLoadProduct.addEventListener('submit', (event) => {
        let error = false;
        event.preventDefault()
        let elementsForm = formLoadProduct.elements
        
        for (let i = 0; i < elementsForm.length-1; i++) {
            if(elementsForm[i].value == "" && elementsForm[i].name !== "image" || elementsForm[i].style.boxShadow == '0 0 6px red'){
                if(i == '5'){
                    continue
                }
                addError(elementsForm[i])
                errorFormLoadProduct.innerText = "Los campos señalados son obligatorios";
                error = true;
            }
        }
    
        if(!error){
            formLoadProduct.submit()
        }
    
    })

})
