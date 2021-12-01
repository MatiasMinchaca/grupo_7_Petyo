window.addEventListener('load', () => {
    let containerProducts = document.getElementById('product-card-div');
    let articles = document.querySelectorAll('article')
console.log(articles)
    let checkFIlterAlimentos = document.getElementById('label-subcategory');
    let checkFIlterAccesorios = document.getElementById('label-subcategory-Acc');

    checkFIlterAlimentos.addEventListener('click', () =>{
        articles.forEach(element => {

            console.log(element)
            if(element.getAttribute('name') != 'Alimentos'){
                element.style.display = 'none'
                
            }else {
                element.style.display = 'flex'
            }
            
        })
    })
    checkFIlterAccesorios.addEventListener('click', () =>{
        articles.forEach(element => {
            console.log(element.getAttribute('name'))
            if(element.getAttribute('name') != 'Accesorios'){
                element.style.display = 'none'
                
            }else {
                element.style.display = 'flex'
            }
            
        })
    })

})