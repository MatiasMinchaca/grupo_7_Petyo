window.addEventListener('load', () =>{
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
    })


})