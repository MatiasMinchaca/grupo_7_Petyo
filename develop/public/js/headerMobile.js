document.addEventListener('click', (event) => {
    try {
        elementId = event.path[0].id
    }
    catch {
        elementId = event.target.id
    }
    switch(elementId){
        case "i-header":
            searchHeader()
        case "i-header":
            closeSearch()
            event.preventDefault()
            break
        case 'menu-mobile':
            toDeployMenu()
            event.preventDefault()
            break
        case 'menu-lateral':
            closeMenu()
            event.preventDefault()
            break
        case 'close-menu-lateral':
            closeMenu()
            event.preventDefault()
            break
    }
})

document.addEventListener('keypress', (event) =>{
    try {
        elementId = event.path[0].id
    }
    catch {
        elementId = event.target.id
    }
    switch(elementId){
        case 'search-bar':
            break
    }
})

function searchHeader(){
    element1 = document.getElementById('search-header')
    if(element1.style.right == '-208px'){
        element1.style.right = '50px'
    } else{
        element1.style.right = '-208px'
    }
}

function closeSearch(){
    element = document.getElementById('i-header')
    if(element.classList.contains('fa-search')){
        element.classList.replace('fa-search', 'fa-times')
    } else{
        element.classList.replace('fa-times', 'fa-search')
    }
}

function toDeployMenu(){
    elementMenu = document.getElementById('menu-lateral')
    elementMenu2 = document.getElementById('div-close-lateral')
    element1 = document.getElementById('search-header')
    element = document.getElementById('i-header')
    if(elementMenu.style.left == '-100%'){
        elementMenu.style.left = '0'
    } else{
        elementMenu.style.left = '-100%'
    }
    if(elementMenu2.style.left == '-100%'){
        elementMenu2.style.left = '0'
    } else{
        elementMenu2.style.left = '-100%'
    }
    element.classList.replace('fa-times', 'fa-search')
    element1.style.right = '-208px'
}

function closeMenu(){
    elementMenu = document.getElementById('menu-lateral')
    elementMenu2 = document.getElementById('div-close-lateral')
    elementMenu.style.left = '-100%'
    elementMenu2.style.left = '-100%'
}