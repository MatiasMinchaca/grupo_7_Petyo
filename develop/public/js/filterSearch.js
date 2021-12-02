window.addEventListener('load', () => {
    let containerProducts = document.getElementById('product-card-div');
    let articles = document.querySelectorAll('article')
    let checkFIlterAlimentos = document.getElementById('check-subcategory-alimentos');
    let labelFIlterAlimentos = document.getElementById('label-subcategory-alimentos');
    let checkFIlterAccesorios = document.getElementById('check-subcategory-accesorios');
    let labelFIlterAccesorios = document.getElementById('label-subcategory-accesorios');
    let labelFIlterJuguetes = document.getElementById('label-subcategory-toys');
    let checkFIlterJuguetes = document.getElementById('check-subcategory-toys');
    let buttonFilterDesktop = document.getElementById('button-filter-desktop');
    let buttonDeleteDesktop = document.getElementById('button-delete-desktop');
    let checkboxFilter = document.querySelectorAll("checkbox-filter")

    buttonFilterDesktop.addEventListener('click', () => {
        articles.forEach(element => {
            if(element.getAttribute('name') == 'Alimentos' && checkFIlterAlimentos.value == 'on'){
                element.style.display = 'flex'
            }else {
                element.style.display = 'none'
            }
        })
    })
    buttonDeleteDesktop.addEventListener('click', () => {
        articles.forEach(element => {
            element.style.display = 'flex'
        })
        checkboxFilter.forEach(elements => {
            elements.value = 'off'
        })
    })
    /*  labelFIlterAlimentos.addEventListener('click', () =>{
        articles.forEach(element => {
            if(element.getAttribute('name') == 'Alimentos' && checkFIlterAlimentos.checked){
                element.style.display = 'flex'
            }else {
                element.style.display = 'none'
            }
        })
    })
    labelFIlterAccesorios.addEventListener('click', () =>{
        articles.forEach(element => {
            if(element.getAttribute('name') == 'Accesorios' && checkFIlterAccesorios.checked ){
                element.style.display = 'flex'
            }else {
                element.style.display = 'none'
            }
            
        })
    })
    labelFIlterJuguetes.addEventListener('click', () =>{
        articles.forEach(element => {
            if(element.getAttribute('name') == 'Juguetes' && checkFIlterJuguetes.checked){
                element.style.display = 'flex'
            }else {
                element.style.display = 'none'
            }
            
        })
    }) */

})