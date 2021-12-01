window.addEventListener('load', () =>{
    let category2 = document.getElementById('select-category-editProduct')
    let subcategory2 = document.getElementById('select-subcategory-editProduct')
    let imageLoading = document.getElementById('loading-background');

    category2.addEventListener('change', () => {
        imageLoading.classList.remove('hidden');
        fetch(`${window.location.origin}/api/products/${category2.value}/subcategories`)
        .then(result => {
            if(result.ok){
                return result.json();
            }else{
                return 'err';
            }
        })
        .then(result => {
            subcategory2.innerHTML = '<option hidden selected value="" >Subcategorias</option>'
            imageLoading.classList.add('hidden');
            result.subcategories.forEach(subCategory => {
                subcategory2.innerHTML += `<option value="${subCategory.id}" >${subCategory.name}</option>`
            })
        })

    })
})