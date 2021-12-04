window.addEventListener('load', () =>{
    let category = document.getElementById('select-category-loadProduct')
    let subcategory = document.getElementById('select-subcategory-loadProduct')
    let imageLoading = document.getElementById('loading-background');

    category.addEventListener('change', () => {
        imageLoading.classList.remove('hidden');
        fetch(`${window.location.origin}/api/products/${category.value}/subcategories`)
        .then(result => {
            if(result.ok){
                return result.json();
            }else{
                return 'err';
            }
        })
        .then(result => {
            subcategory.innerHTML = '<option hidden selected value="" >Subcategorias</option>'
            imageLoading.classList.add('hidden');
            result.subcategories.forEach(subCategory => {
                subcategory.innerHTML += `<option value="${subCategory.id}" >${subCategory.name}</option>`
            })
        })

    })
    
})