window.addEventListener('load', () => {
    let archorCategories = document.querySelectorAll('.div-archor-header')

    archorCategories.forEach(archorCategory => {
        archorCategory.addEventListener('click', (e) => {
            archorCategories.forEach(subcategoriesDelete => {
                subcategoriesDelete.childNodes[7].style.height = '0'
                subcategoriesDelete.childNodes[3].style.height = '100%'
                subcategoriesDelete.childNodes[5].style.transform = 'rotate(0deg)'
            });
            if(e.target.name == archorCategory.childNodes[7].id){
                    archorCategory.childNodes[7].style.height = '100px'
                    archorCategory.childNodes[5].style.transform = 'rotate(180deg)'
                    e.target.style.height = '0%'
            }
        })
    });
    document.addEventListener('click', (event) => {
    try {
        elementId = event.path[0].id
    }
    catch {
        elementId = event.target.id
    }
    switch(elementId){
        case "botton-user-icon":
            loginRegisterRotate()
            break
        case "press-login-header":
            toDeployOpcions()
            break
    }
    })
    document.addEventListener('focus', (event) => {
        try {
            elementId = event.path[0].id
        }
        catch {
            elementId = event.target.id
        }
        switch(elementId){
            case "input-search-header":
                runAside()
                break
        }
    }, true)
    document.addEventListener('blur', (event) => {
        try {
            elementId = event.path[0].id
        }
        catch {
            elementId = event.target.id
        }
        switch(elementId){
            case "input-search-header":
                runAside()
                break
        }
    }, true)

    function loginRegisterRotate(){
        elementLoginRegister = document.getElementById('login-register-header')
        elementIconUserHeader = document.getElementById('div-user-header')
        if(elementLoginRegister.style.right == '-200px' && elementLoginRegister.style.transform == 'rotate(180deg)'){
            elementLoginRegister.style.right = '0px'
            elementLoginRegister.style.transform = 'rotate(0deg)'
        }else{
            elementLoginRegister.style.right = '-200px'
            elementLoginRegister.style.transform = 'rotate(180deg)'
        }
        if (elementIconUserHeader.classList.contains('fa-user') && elementIconUserHeader.classList.contains('far')) {
            elementIconUserHeader.classList.replace('fa-user', 'fa-times')
            elementIconUserHeader.classList.replace('far', 'fas')
        } else {
            elementIconUserHeader.classList.replace('fa-times', 'fa-user')
            elementIconUserHeader.classList.replace('fas', 'far')
        }
    }
    function runAside(){
        elementButtonSubmit = document.getElementById('button-search-header')
        if(elementButtonSubmit.style.right == '0px' && elementButtonSubmit.style.top == '0px'){
            elementButtonSubmit.style.right = '-14px'
        }else{
            elementButtonSubmit.style.right = '0px'
        }
    }
    function toDeployOpcions(){
        buttonsOpcions = document.getElementById('section-botton-opcions')
        if(buttonsOpcions.style.top == '-100%'){
            buttonsOpcions.style.top = '80px'
        }else {
            buttonsOpcions.style.top = '-100%'
        }
    }
})
